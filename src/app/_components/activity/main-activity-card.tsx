import { Activity } from '@/types/type';
import Image from 'next/image';

interface MainActivityCardProps {
  activity: Activity;
}

const MainActivityCard: React.FC<MainActivityCardProps> = ({ activity }) => {
  return (
    <div>
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
    </div>
  );
};

export default MainActivityCard;
