type ClassValue = string | undefined | null | false | 0;

/**
 * Simple class-name joiner utility.
 * Filters out falsy values and joins with a space.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
