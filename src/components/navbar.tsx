import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { CSSProperties } from "react";

export function Navbar() {
  return (
    <div className=" px-4 pb-3">
      <div className="relative flex items-start md:items-center flex-col gap-2 md:gap-0 md:flex-row justify-between w-full max-w-7xl mx-auto">
        <div className=" absolute -top-3 h-[1px] bg-foreground animate-fillWidth"></div>
        <Link href={"/"}>
          <h1 className=" text-xl font-extrabold">Earth we Inherit</h1>
        </Link>
        <div className=" flex items-center md:gap-8 gap-4 text-sm sm:text-base md:text-lg font-medium">
          <HoverLink
            style={{
              animationDelay: "700ms",
            }}
            className=" animate-fadeIn opacity-0"
            href={"/chat"}
          >
            Explore
          </HoverLink>
          <HoverLink
            style={{
              animationDelay: "900ms",
            }}
            className=" animate-fadeIn opacity-0"
            href={"/"}
          >
            N-Danger
          </HoverLink>
          <HoverLink
            style={{
              animationDelay: "1100ms",
            }}
            className=" animate-fadeIn opacity-0"
            href={"/"}
          >
            Statistics
          </HoverLink>
          <HoverLink
            style={{
              animationDelay: "1300ms",
            }}
            className=" animate-fadeIn opacity-0"
            href={"/"}
          >
            Resources
          </HoverLink>
        </div>
      </div>
    </div>
  );
}

interface HoverLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function HoverLink({
  children,
  className,
  style,
  ...props
}: HoverLinkProps) {
  return (
    <Link
      {...props}
      className={cn("relative inline-block group", className)}
      style={style}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
    </Link>
  );
}
