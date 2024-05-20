import SubHeader from '@/app/_components/header/sub-header';
import DetailActivityCard from './_component/detail-activity-card';
import ReservationButton from './_component/reservation-button';

const activities = [
  {
    activityId: '1',
    title: 'Activity 1',
    description: 'Activity 1 Description',
    categoryId: '1',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 1',
    location: 'Location 1',
    tags: ['tag1', 'tag2'],
    activityDate: '2022-01-01',
    registerDate: '2021-12-01',
  },
  {
    activityId: '2',
    title: 'Activity 2',
    description: 'Activity 2 Description',
    categoryId: '2',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 2',
    location: 'Location 2',
    tags: ['tag3', 'tag4'],
    activityDate: '2022-02-01',
    registerDate: '2021-12-02',
  },
  {
    activityId: '3',
    title: 'Activity 3',
    description: 'Activity 3 Description',
    categoryId: '3',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 3',
    location: 'Location 3',
    tags: ['tag5', 'tag6'],
    activityDate: '2022-03-01',
    registerDate: '2021-12-03',
  },
  {
    activityId: '4',
    title: 'Activity 4',
    description: 'Activity 4 Description',
    categoryId: '4',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 4',
    location: 'Location 4',
    tags: ['tag7', 'tag8'],
    activityDate: '2022-04-01',
    registerDate: '2021-12-04',
  },
  {
    activityId: '5',
    title: 'Activity 5',
    description: 'Activity 5 Description',
    categoryId: '5',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 5',
    location: 'Location 5',
    tags: ['tag9', 'tag10'],
    activityDate: '2022-05-01',
    registerDate: '2021-12-05',
  },
  {
    activityId: '6',
    title: 'Activity 6',
    description: 'Activity 6 Description',
    categoryId: '6',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 6',
    location: 'Location 6',
    tags: ['tag11', 'tag12'],
    activityDate: '2022-06-01',
    registerDate: '2021-12-06',
  },
  {
    activityId: '7',
    title: 'Activity 7',
    description: 'Activity 7 Description',
    categoryId: '7',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 7',
    location: 'Location 7',
    tags: ['tag13', 'tag14'],
    activityDate: '2022-07-01',
    registerDate: '2021-12-07',
  },
  {
    activityId: '8',
    title: 'Activity 8',
    description: 'Activity 8 Description',
    categoryId: '8',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 8',
    location: 'Location 8',
    tags: ['tag15', 'tag16'],
    activityDate: '2022-08-01',
    registerDate: '2021-12-08',
  },
  {
    activityId: '9',
    title: 'Activity 9',
    description: 'Activity 9 Description',
    categoryId: '9',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 9',
    location: 'Location 9',
    tags: ['tag17', 'tag18'],
    activityDate: '2022-09-01',
    registerDate: '2021-12-09',
  },
  {
    activityId: '10',
    title: 'Activity 10',
    description: 'Activity 10 Description',
    categoryId: '10',
    imageUrl: '/images/logo/Logo_Image_Main_Moharu.png',
    activityType: 'Type 10',
    location: 'Location 10',
    tags: ['tag19', 'tag20'],
    activityDate: '2022-10-01',
    registerDate: '2021-12-10',
  },
];

export default async function ActivityPage({
  params: { activityId },
}: {
  params: { activityId: string };
}) {
  const activity = activities.find(
    activity => activity.activityId === activityId,
  );
  if (!activity) return null;

  return (
    <>
      <SubHeader title="상세" />
      <DetailActivityCard activity={activity} />

      <div>
        <p>관람 시간</p>
        <p>휴관일</p>
        <p>전화번호</p>
        <p>입장료</p>
      </div>
      <div>
        <p>주소</p>
        <p>작가</p>
      </div>
      <ReservationButton activityId={activity.activityId} />
    </>
  );
}
