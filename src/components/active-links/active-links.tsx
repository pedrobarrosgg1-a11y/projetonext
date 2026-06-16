'use client';
import { cn } from '@/src/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation'; 

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const linkPatch = (typeof href === 'string' ? href : href.pathname) ?? '';
  const pathname = usePathname();
  const isActive = pathname === linkPatch || pathname?.startsWith(`${linkPatch}/`)

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200 transition-all duration-300 hover:-translate-y-1 hover:scale-105',
        isActive ? 'text-blue-200' : 'text-gray-100'
      )}
    >
      {children}
    </Link>
  );
};