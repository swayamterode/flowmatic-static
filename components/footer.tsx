import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons/github-icon";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FullWidthDivider } from "@/components/full-width-divider";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={cn("relative mx-auto max-w-4xl lg:border-x", "dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]")}>
      <FullWidthDivider position="top" />
      <div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
        <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-3">
          <Link className="w-max" href="/">
            <Image src={"/logo.png"} alt="flowmatic" width={36} height={36} className="rounded-full invert dark:invert-0" />
          </Link>
          <p className="max-w-sm text-balance text-muted-foreground text-sm">
            Automate your busywork, no code required. Connect your tools, add logic &amp; AI, and let your workflows run themselves.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((item, index) => (
              <Button key={`social-${item.link}-${index}`} size="icon" variant="outline" render={<a href={item.link} target="_blank" />} nativeButton={false}>
                {item.icon}
              </Button>
            ))}
          </div>
        </div>
        <div className="col-span-2 w-full md:col-span-1">
          <span className="text-muted-foreground text-xs">Product</span>
          <div className="mt-2 flex flex-col gap-2">
            {product.map(({ href, title }) => (
              <a className="w-max text-sm hover:underline" href={href} key={title}>
                {title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-2 w-full md:col-span-1">
          <span className="text-muted-foreground text-xs">Resources</span>
          <div className="mt-2 flex flex-col gap-2">
            {resources.map(({ href, title }) => (
              <a className="w-max text-sm hover:underline" href={href} key={title}>
                {title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-2 w-full md:col-span-1">
          <span className="text-muted-foreground text-xs">Company</span>
          <div className="mt-2 flex flex-col gap-2">
            {company.map(({ href, title }) => (
              <a className="w-max text-sm hover:underline" href={href} key={title}>
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <FullWidthDivider />
      <div className="flex items-center justify-center gap-2 py-4">
        <p className="text-center font-light text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Flowmatic, All rights reserved</p>
      </div>
    </footer>
  );
}

const company = [
  {
    title: "Meet the team",
    href: "/meet-the-team",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    href: "#",
  },
];

const product = [
  {
    title: "Pricing",
    href: "#",
  },
];

const resources = [
  {
    title: "Documentation",
    href: "https://flowmatic.mintlify.site",
  },
  {
    title: "API Reference",
    href: "https://flowmatic.mintlify.site/api-reference/auth/register",
  },
];

const socialLinks = [
  {
    icon: <GithubIcon />,
    link: "https://github.com/swayamterode/flowmatic-frontend",
  },
];
