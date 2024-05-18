import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-20 justify-between border-b bg-black p-5">
      <Image
        src="/images/logo/Logo_Wide_Main_Moharu.png"
        alt="logo"
        width={112}
        height={42}
      />
    </header>
  );
};

export default Header;
