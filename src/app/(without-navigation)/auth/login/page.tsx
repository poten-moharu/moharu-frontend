import { Button } from '@/components/ui/button';
import Image from 'next/image';

function LoginPage() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-black px-16 pb-24 pt-48">
      <Image
        src="/images/logo/Logo_Main_Moharu.png"
        alt="logo"
        width={216}
        height={216}
      />
      <span className="mt-5 text-white">
        모두에게 선물하는 하루, <span className="text-pink-500">모하루</span>
      </span>
      <div className="mb-5 mt-auto flex w-full flex-col gap-2.5">
        <Button className="bg-white text-black hover:bg-slate-300">
          이메일로 로그인
        </Button>
        <Button className="bg-white text-black hover:bg-slate-300">
          구글로 로그인
        </Button>
      </div>
      <span className="text-white">이용약관/개인정보 처리방침</span>
    </div>
  );
}

export default LoginPage;
