import SubHeader from '@/app/_components/header/sub-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function LoginEmailPage() {
  return (
    <>
      <SubHeader />
      <div className="flex flex-col px-10 py-5">
        <div className="mb-10 flex w-full justify-between">
          <span>이메일로 로그인합니다.</span>
          <Link href="/auth/signup" className="text-pink-500">
            회원가입
          </Link>
        </div>
        <Input
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          className="mb-5"
        />
        <Input
          label="비밀번호"
          type="email"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <Button size="big" className="mt-auto">
        로그인
      </Button>
    </>
  );
}
