'use client';

import MainActivityCard from '@/app/_components/activity/main-activity-card';
import CategoryBar from '@/app/_components/category-bar/category-bar';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Activity, Category } from '@/types/type';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const sampleCategoryList = [
  {
    id: '',
    name: '전체/추천',
    description: '예술과 관련된 내용',
    icon: 'list',
  },
  {
    id: 1,
    name: '예술',
    description: '예술과 관련된 내용',
    icon: 'brush',
  },
  {
    id: 2,
    name: '책',
    description: '독서와 관련된 내용',
    icon: 'book-open',
  },

  {
    id: 3,
    name: '커리어',
    description: '영화와 관련된 내용',
    icon: 'bar-chart-4',
  },
];

export default function Home() {
  const { data: session } = useSession();

  const [categoryList, setCategoryList] =
    useState<Category[]>(sampleCategoryList);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const handleSelect = (date?: Date) => {
    setSelectedDate(date);
    // TODO: 달력 선택 시, 달력 닫히도록 처리
    // onClose();
  };

  // useEffect(() => {
  //   // EXAMPLE: 클라이언트 컴포넌트에서 api 요청
  //   fetch(`/apis/activities-category`)
  //     .then(res => res.json())
  //     .then(data => {
  //       data.unshift({
  //         id: '',
  //         name: '전체',
  //         description: '전체 내용',
  //         icon: 'list',
  //       });
  //       setCategoryList(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('/apis/activities')
      .then(response => response.json())
      .then(data => {
        // TODO: activitiesWithWishStatus 임시 값
        // const wishedActivityIds = data.wishedActivityIds;
        const wishedActivityIds = [11, 12, 13, 14];
        const activitiesWithWishStatus: Activity[] = data.activities.map(
          (activity: Activity) => {
            return {
              ...activity,
              wished: wishedActivityIds.includes(activity.id),
            };
          },
        );

        setActivities(activitiesWithWishStatus);
      });
  }, []);

  useEffect(() => {
    const formattedDate = selectedDate
      ? moment(selectedDate).format('YYYY-MM-DD')
      : '';
    const url = `/apis/activities?categoryId=${selectedCategoryId}&selectedDate=${formattedDate}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // TODO: activitiesWithWishStatus 임시 값
        // const wishedActivityIds = data.wishedActivityIds;
        const wishedActivityIds = [11, 12, 13, 14];
        const activitiesWithWishStatus: Activity[] = data.activities.map(
          (activity: Activity) => {
            return {
              ...activity,
              wished: wishedActivityIds.includes(activity.id),
            };
          },
        );

        setActivities(activitiesWithWishStatus);
      });
  }, [selectedCategoryId, selectedDate]);

  return (
    <>
      {/* TODO: 날짜 포맷을 위한 moment 사용 여부 */}
      <div className="px-24px pb-12px pt-24px">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex cursor-pointer rounded-full border-[1px] border-[#E2E8F0] px-[20px] py-[18px]">
              <Image
                src="/images/icons/calendar-days.svg"
                alt="위치"
                width={24}
                height={24}
                className="mr-[14px]"
              />
              {/* <CalendarDaysIcon className="mr-[14px] h-6 w-6" /> */}

              <span>
                {selectedDate ? (
                  format(selectedDate, 'MMMM do (E)', { locale: ko })
                ) : (
                  <span>Pick a date</span>
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
      <footer>
        <p>모두에게 선물같은 하루, 모하루</p>
        <p>
          모하루(Moharu)는 모하루기버즈팀(Team Moharu Givers)이 비사이드
          포텐데이405에 참여하여 제작하게 된 사이드프로젝트입니다.
        </p>
      </footer>
    </>
  );
}
