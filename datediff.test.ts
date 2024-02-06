import { describe, it, expect } from "bun:test";
import { checkOverlap } from "./datediff";

describe("DateDiff", () => {
  it("overlap should be true", () => {
    const range1 = {
      start: new Date("2020-01-01"),
      end: new Date("2020-01-10"),
    };

    const range2 = {
      start: new Date("2020-01-05"),
      end: new Date("2020-01-15"),
    };
        
    const range3 = {
      start: new Date("2020-01-14"),
      end: new Date("2020-01-20"),
    };

    expect(checkOverlap([range1, range2])).toBe(true);
  });
  
    it("overlap should be false", () => {
    const range1 = {
      start: new Date("2020-01-01"),
      end: new Date("2020-01-04"),
    };

    const range2 = {
      start: new Date("2020-01-06"),
      end: new Date("2020-01-15"),
    };

    expect(checkOverlap([range1, range2])).toBe(false);
  });

   it("should be interchangable", () => {
    const range1 = {
      start: new Date("2020-01-01"),
      end: new Date("2020-01-10"),
    };

    const range2 = {
      start: new Date("2020-01-05"),
      end: new Date("2020-01-15"),
    };
  
     expect(checkOverlap([range2, range1])).toBe(true);
   });
});
