import type { Metadata } from "next";
import { UserIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DecorIcon } from "@/components/decor-icon";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "The people building Flowmatic, the no-code workflow automation platform.",
  alternates: {
    canonical: "/meet-the-team",
  },
};

const team = [
  {
    role: "Founder & Engineer",
    name: "Your Name",
    bio: "Building Flowmatic end to end, from the workflow engine to the docs.",
  },
  {
    role: "Product Design",
    name: "Your Name",
    bio: "Shaping how Flowmatic feels to use, one workflow at a time.",
  },
  {
    role: "Growth",
    name: "Your Name",
    bio: "Helping teams discover what Flowmatic can automate for them.",
  },
];

export default function MeetTheTeamPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-xl space-y-3 text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl" style={{ fontVariationSettings: '"opsz" 72' }}>
          Meet the team
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          A small team obsessed with taking the busywork out of your workflows. This page is a work in progress — more faces coming soon.
        </p>
      </div>

      <div className="relative mt-12 grid gap-4 border bg-background p-4 shadow-xs sm:grid-cols-3">
        <DecorIcon className="size-3" position="top-left" />
        <DecorIcon className="size-3" position="top-right" />
        <DecorIcon className="size-3" position="bottom-left" />
        <DecorIcon className="size-3" position="bottom-right" />

        {team.map((member) => (
          <Card className="items-center text-center" key={member.role}>
            <CardHeader className="items-center">
              <div className="flex size-14 items-center justify-center rounded-full border bg-muted">
                <UserIcon className="size-6 text-muted-foreground" />
              </div>
              <CardTitle className="mt-2">{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">{member.bio}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
