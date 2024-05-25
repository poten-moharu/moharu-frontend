'use client';

import MainActivityCard from '@/app/_components/activity/main-activity-card';
import CategoryBar from '@/app/_components/category-bar/category-bar';
import Footer from '@/app/_components/footer/footer';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { fetchWithToken } from '@/lib/fetch';
import { Activity, Category } from '@/types/type';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('from') === 'signup') {
      toast({ description: '회원가입이 완료되었습니다!' });
      router.replace('/');
    }
  }, []);


  useEffect(() => {
    if (searchParams.get('from') === 'signup') {
      toast({ description: '회원가입이 완료되었습니다!' });
    }
  }, []);

  // useEffect(() => {
  //   if (!session && !searchParams.get('from')) {
  //     redirect('/auth/login');
  //   }

  //   if (session && !session.user.mbti) {
  //     redirect('/auth/signup/extra-required');
  //   }
  // }, [session]);

  const [open, setOpen] = useState(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const handleSelect = (date?: Date) => {
    setSelectedDate(date);
    setOpen(false);
    // TODO: 달력 선택 시, 달력 닫히도록 처리
    // onClose();
  };

  const fetchCategories = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/activities-category`)
      .then(res => res.json())
      .then(data => {
        data.unshift({
          id: '',
          name: '전체',
          description: '전체 내용',
          icon: 'list',
        });
        setCategoryList(data);
      })
      .catch(e => console.log(e));
  };

  const fetchActivities = () => {
    const formattedDate = selectedDate
      ? moment(selectedDate).format('YYYY-MM-DD')
      : '';
    const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/activities?categoryId=${selectedCategoryId}&selectedDate=${formattedDate}`;

    fetchWithToken(url)
      .then(res => res.json())
      .then(data => {
        const activitiesWithWishStatus: Activity[] = data.activities.map(
          (activity: Activity) => {
            return {
              ...activity,
              isWish: data.wishedActivityIds.includes(activity.id),
            };
          },
        );
        setActivities(activitiesWithWishStatus);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchActivities();
  }, [selectedCategoryId, selectedDate]);

  return (
    <>
      {/* TODO: 날짜 포맷을 위한 moment 사용 여부 */}
      <div className="px-24px pb-12px pt-24px">
        <Popover open={open}>
          <PopoverTrigger asChild>
            <div
              className="flex w-full cursor-pointer rounded-full border-[1px] border-[#E2E8F0] px-[20px] py-[18px]"
              onClick={() => setOpen(true)}
            >
              <Image
                src="/images/icons/calendar-days.svg"
                alt="캘린더"
                width={24}
                height={24}
                className="mr-[14px]"
              />
              {/* <CalendarDaysIcon className="mr-[14px] h-6 w-6" /> */}

              <span>
                {selectedDate ? (
                  format(selectedDate, 'MMMM do (E)', { locale: ko })
                ) : (
                  <span>날짜를 선택 해 주세요</span>
                )}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleSelect}
              initialFocus
              locale={ko}
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* TODO: 카테고리 바 sticky 처리 여부 */}
      <CategoryBar
        categoryList={categoryList}
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={setSelectedCategoryId}
      />
      {activities.length > 0
        ? activities?.map(activity => (
            <MainActivityCard key={activity.id} activity={activity} />
          ))
        : null}
      {/* TODO: footer 컴포넌트 분리 및 UI, link 작업 */}
      <Footer />
    </>
  );
}
