import { User } from '@/types/type';

const user: User = {
  id: 1,
  email: 'moharu@gmail.com',
  name: '모하루',
  profileImage: '/',
  age: 20,
  socialId: 'moharu',
  mbti: 'INFP',
  region: '서울',
};
export default function MyPage() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="h-24 w-24 rounded-full bg-slate-500"></div>
      <span>{user.name}</span>
      <span>
        {user.mbti} | {user.region}
      </span>
      <div className="flex w-full gap-2">
        <span>독서</span>
        <span>실외</span>
        <span>커리어</span>
      </div>
      <div className="grid w-full grid-cols-3 bg-slate-200">
        <div className="col-span-1 flex flex-col items-center">
          <span>위시리스트</span>
          <span>{2}개</span>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <span>내 후기</span>
          <span>{2}개</span>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <span>최근 본 컨텐츠</span>
          <span>{2}개</span>
        </div>
      </div>
    </div>
  );
}
