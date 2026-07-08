import Link, { type LinkProps } from "next/link";
import type { FC, ReactNode } from "react";

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

const baseClassName =
  "font-serif text-xl text-zinc-900 hover:text-zinc-500 transition-colors duration-150";

const ButtonLink: FC<ButtonLinkProps> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <Link {...rest} className={`${baseClassName} ${className}`.trim()}>
      {children}
    </Link>
  );
};

export default ButtonLink;
