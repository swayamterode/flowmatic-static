"use client";

import * as React from "react";
import { Check, ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

function useIsMounted() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

interface ModeToggleProps {
  className?: string;
  /** Full-width row with a visible label, for stacked mobile menus. Defaults to a compact icon-only trigger. */
  expanded?: boolean;
}

export function ModeToggle({ className, expanded = false }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  const current = THEME_OPTIONS.find((option) => option.value === theme) ?? THEME_OPTIONS[2];

  if (!expanded) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="sm" type="button" className={className} />}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {THEME_OPTIONS.map((option) => (
            <DropdownMenuItem key={option.value} onClick={() => setTheme(option.value)}>
              <option.icon className="size-4" />
              {option.label}
              {theme === option.value && <Check className="ml-auto size-3.5" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" type="button" className={cn("w-full justify-between", className)} />}>
        <span className="flex items-center gap-2">
          <current.icon className="size-4 text-muted-foreground" />
          Theme
        </span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <span suppressHydrationWarning>{mounted ? current.label : "System"}</span>
          <ChevronDown className="size-3.5" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {THEME_OPTIONS.map((option) => (
          <DropdownMenuItem key={option.value} onClick={() => setTheme(option.value)}>
            <option.icon className="size-4" />
            {option.label}
            {theme === option.value && <Check className="ml-auto size-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
