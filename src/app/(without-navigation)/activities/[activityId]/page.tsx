import SubHeader from '@/app/_components/header/sub-header';
import { Activity } from '@/types/type';
import { promises as fs } from 'fs';
import DetailActivityCard from './_component/detail-activity-card';
import ReservationButton from './_component/reservation-button';

export default async function ActivityPage({
  params: { activityId },
}: {
  params: { activityId: string };
}) {
  const file = await fs.readFile(
    process.cwd() + '/public/data/mainActivityList.json',
    'utf8',
  );
  const activitys: Activity[] = JSON.parse(file);
  const activity = activitys.find(
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
