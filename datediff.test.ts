import { describe, it, expect } from "bun:test";
import { checkOverlap } from "./datediff";
import type { DateRange } from "./types";

const newRange = (start: string, end: string) =>
  ({
    start: new Date(start),
    end: new Date(end),
  }) as DateRange;

describe("DateDiff", () => {
  it("should overlap with two", () => {
    expect(
      checkOverlap([
        newRange("2020-01-01", "2020-01-10"),
        newRange("2020-01-05", "2020-01-15"),
      ]),
    ).toBe(true);
  });

  it("should overlap with > 2 ranges", () => {
    expect(
      checkOverlap([
        newRange("2020-01-01", "2020-01-10"),
        newRange("2020-01-05", "2020-01-15"),
        newRange("2020-01-14", "2020-01-20"),
      ]),
    ).toBe(true);
  });

  it("overlap should be false", () => {
    expect(checkOverlap([
            newRange("2020-01-01", "2020-01-04"),
            newRange("2020-01-06", "2020-01-15"),
        ])).toBe(false);
  });

  it("should be interchangable", () => {

    expect(checkOverlap([
            newRange("2020-01-01", "2020-01-10"),
            newRange("2020-01-05", "2020-01-15"),
        ])).toBe(true);
  });
});
