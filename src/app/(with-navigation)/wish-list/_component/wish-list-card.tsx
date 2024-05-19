import { Activity } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';

interface WishListCardProps {
  wishList: Activity;
}
const WishListCard: React.FC<WishListCardProps> = ({ wishList }) => (
  <Link
    href={`/activity/${wishList.activityId}`}
    className="col-span-1 flex w-full flex-col p-6"
  >
    <div className="relative aspect-square w-full">
      <Image src={wishList.imageUrl} alt={wishList.title} fill />
    </div>
    <p>{wishList.title}</p>
    <p>{wishList.location}</p>
    <p>{wishList.activityDate}</p>
  </Link>
);
export default WishListCard;
