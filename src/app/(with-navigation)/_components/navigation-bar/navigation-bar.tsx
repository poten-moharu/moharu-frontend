import Image from 'next/image';
import MobileNavigationLink from './navigation-link';

const mobileNavigationList = [
  {
    href: '/',
    icon: <Image src="/images/icons/wishlist.svg" fill alt="home" />,
    text: '홈',
  },
  {
    href: '/wish-list',
    icon: <Image src="/images/icons/wishlist.svg" fill alt="wish-list" />,
    text: '위시리스트',
  },
  {
    href: '/my-page',
    icon: <Image src="/images/icons/wishlist.svg" fill alt="my page" />,
    text: '마이페이지',
  },
];

const NavigationBar = () => (
  <nav className="sticky bottom-0 left-0 grid h-16 w-full flex-none grid-cols-3 bg-gray-100">
    {mobileNavigationList.map(({ href, icon, text }) => (
      <MobileNavigationLink key={text} href={href} icon={icon} text={text} />
    ))}
  </nav>
);

export default NavigationBar;
