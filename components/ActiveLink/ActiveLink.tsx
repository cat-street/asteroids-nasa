import React, { Children, FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  activeClassName: string;
  href: string;
  children: ReactElement;
};

const ActiveLink: FC<Props> = ({
  children,
  activeClassName,
  href,
  ...props
}: Props) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName: string = children.props.className || '';

  const className =
    asPath === href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
