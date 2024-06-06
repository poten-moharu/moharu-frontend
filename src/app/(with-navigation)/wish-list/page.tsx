import TitleHeader from '@/app/_components/header/title-header';
import { serverSideFetchWithToken } from '@/lib/fetch';
import { Activity } from '@/types/type';
import WishListCard from './_component/wish-list-card';
import WishListTabs from './_component/wish-list-tabs';

export default async function WishListPage({
  searchParams: { category = '' },
}: {
  searchParams: { category: string };
}) {
  const response = await serverSideFetchWithToken(
    `/activities/wish/list?type=${category}`,
  );
  const data = await response.json();

  const wishList: Activity[] = data.activities;

  return (
    <>
      <TitleHeader title="위시리스트" />
      <div className="px-24px">
        <WishListTabs category={category} />
        <div className="mt-12px grid w-full grid-cols-2 gap-20px">
          {wishList.length > 0 ? (
            wishList.map(wishList => (
              <WishListCard key={wishList.id} wishList={wishList} />
            ))
          ) : (
            <div className="flex items-center">위시리스트가 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
}
