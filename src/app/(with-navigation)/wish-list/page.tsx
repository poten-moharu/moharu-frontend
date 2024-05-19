import { Activity } from '@/types/type';
import { promises as fs } from 'fs';
import WishListCard from './_component/wish-list-card';

export default async function WishListPage() {
  const file = await fs.readFile(
    process.cwd() + '/public/data/mainActivityList.json',
    'utf8',
  );
  const wishLists: Activity[] = JSON.parse(file);

  return (
    <main className="grid h-full w-full grid-cols-2 items-center">
      {wishLists.map(wishList => (
        <WishListCard key={wishList.activityId} wishList={wishList} />
      ))}
    </main>
  );
}
