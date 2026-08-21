import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DecorIcon } from "@/components/decor-icon";
import { FullWidthDivider } from "@/components/full-width-divider";
import { ArrowRightIcon, CirclePlayIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="relative flex flex-col items-center justify-center gap-5 px-4 py-5 md:px-4 md:py-24 lg:py-28">
        {/* X Faded Borders & Shades */}
        <div aria-hidden="true" className="absolute inset-0 -z-1 size-full overflow-hidden">
          <div className={cn("absolute -inset-x-20 inset-y-0 z-0 rounded-full", "bg-[radial-gradient(ellipse_at_center,theme(--color-foreground/.1),transparent,transparent)]", "blur-[50px]")} />
          <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
          <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
          <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
        </div>
        <a
          className={cn(
            "group mx-auto flex w-fit items-center gap-3 rounded-sm border bg-card p-1 shadow",
            "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out",
          )}
          href="#link"
        >
          <div className="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
            <p className="font-mono text-xs">NOW</p>
          </div>

          <span className="text-xs">Introducing Flowmatic</span>
          <span className="block h-5 border-l" />

          <div className="pr-1">
            <ArrowRightIcon className="size-3 -translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5" />
          </div>
        </a>

        <h1
          className={cn(
            "max-w-2xl text-balance text-center font-display text-3xl font-semibold text-foreground tracking-tight md:text-5xl lg:text-6xl",
            "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out",
          )}
          style={{ fontVariationSettings: '"opsz" 72' }}
        >
          Automate your busywork. No code required.
        </h1>

        <div className={cn("flex max-w-md flex-col items-center gap-2", "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out")}>
          <p className="text-center text-muted-foreground text-xs md:text-sm">Build, run, and monitor automated workflows in minutes.</p>

          <ul className="flex flex-wrap items-center justify-center gap-1.5 pt-3 sm:pt-0">
            {["Upload CSV", "Add logic & AI", "Let it run itself"].map((chunk) => (
              <li key={chunk} className="rounded-full border bg-card px-2.5 py-1 text-muted-foreground text-xs">
                {chunk}
              </li>
            ))}
          </ul>

          <p className="text-center font-medium text-foreground text-xs md:text-sm">No-code simple. Developer-grade powerful.</p>
        </div>

        <div className="fade-in slide-in-from-bottom-10 flex w-fit animate-in items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
          {/* <Button variant="outline">
            <CirclePlayIcon data-icon="inline-start" /> See how it works
          </Button> */}
          <Button>
            Get started <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
      <div className="relative">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <FullWidthDivider className="-top-px" />
        {/* <div className="overflow-hidden *:pointer-events-none *:aspect-video *:select-none">
          <Image alt="light app screen" className="dark:hidden" height={1080} width={1920} priority sizes="(min-width: 896px) 896px, 100vw" src="/dashboard-light.png" />
          <Image alt="dark app screen" className="hidden dark:block" height={1080} width={1920} priority sizes="(min-width: 896px) 896px, 100vw" src="/dashboard-dark.png" />
        </div>
        <FullWidthDivider className="-bottom-px" /> */}
      </div>
    </section>
  );
}
