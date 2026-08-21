import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorIcon } from "@/components/decor-icon";
import { CheckIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";

export const plans = [
  {
    name: "Essentials",
    tagline: "Great for getting started.",
    price: "250.00",
    runs: "100 runs",
    features: ["100 workflow runs, lifetime", "Everything on the free plan"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Best value for growing teams.",
    price: "500.00",
    runs: "1,000 runs",
    features: ["1,000 workflow runs, lifetime", "Everything in Essentials"],
    cta: "Start Your Journey",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For teams that needs scale.",
    price: "950.00",
    runs: "Unlimited runs",
    features: ["Unlimited workflow runs", "Everything in Pro"],
    cta: "Get Started",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="w-full space-y-5">
      <div className="mx-auto max-w-lg">
        <div className="flex justify-center">
          <div className="rounded-md border px-4 py-1 text-sm">Pricing</div>
        </div>
        <h2 className="mt-4 text-center font-medium text-xl tracking-tight md:text-3xl">Plans that grow with your success</h2>
        <p className="mx-auto mt-2 max-w-md text-center text-muted-foreground text-sm sm:text-base leading-6">
          Transparent pricing for powerful workflows, with the flexibility to scale as your team grows.
        </p>
      </div>

      <div className="mx-auto w-full max-w-4xl space-y-2">
        <div className="relative grid gap-4 border bg-background p-4 shadow-xs md:grid-cols-3 md:gap-0">
          <DecorIcon className="size-3" position="top-left" />
          <DecorIcon className="size-3" position="top-right" />
          <DecorIcon className="size-3" position="bottom-left" />
          <DecorIcon className="size-3" position="bottom-right" />

          {plans.map((plan) => (
            <div className={plan.highlighted ? "relative w-full rounded-md border bg-card p-4 shadow dark:bg-card/80" : "w-full px-4 pt-5 pb-4"} key={plan.name}>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold leading-none">{plan.name}</h3>
                  {plan.highlighted && <Badge>Most popular</Badge>}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">{plan.tagline}</p>
              </div>
              <div className="mt-10 space-y-1">
                <div className="flex items-end gap-0.5 text-muted-foreground text-xl">
                  <span>₹</span>
                  <span className="-mb-0.5 font-extrabold text-md text-foreground tracking-tighter md:text-4xl">{plan.price}</span>
                  <span>/mo</span>
                </div>
                <p className="font-medium text-muted-foreground text-xs">{plan.runs}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-2 text-sm" key={feature}>
                    <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-4 w-full" nativeButton={false} render={<a href="https://app-flowmatic.vercel.app/pricing" target="_blank" />} variant={plan.highlighted ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-x-2 text-muted-foreground text-xs md:text-sm">
          <ShieldCheckIcon className="size-4" />
          <span>Access to all features with no hidden fees</span>
        </div>
      </div>
    </section>
  );
}
