import { Activity } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';

interface MainActivityCardProps {
  activity: Activity;
}

const MainActivityCard: React.FC<MainActivityCardProps> = ({ activity }) => {
  return (
    <Link href={`/activity/${activity.activityId}`}>
      <Image
        src={activity.imageUrl}
        alt={activity.title}
        width={500}
        height={200}
      />
      <p>{activity.title}</p>
      <p>{activity.description}</p>
      <p>{activity.location}</p>
      <p>{activity.activityDate}</p>
      <div>
        {activity.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
};

export default MainActivityCard;
