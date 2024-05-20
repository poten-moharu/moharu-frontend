'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SubHeaderProps {
  title: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ title }) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center border-b bg-white p-5">
      <button onClick={() => router.back()}>
        <Image
          src="/images/icons/arrow-left.svg"
          alt="logo"
          width={20}
          height={20}
        />
      </button>
      <span className="absolute left-1/2 -translate-x-1/2">{title}</span>
    </header>
  );
};

export default SubHeader;