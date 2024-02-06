import type { DateRange } from "./types"

const epoch = (date: Date): number => date.getTime()

export function checkOverlap([r1, r2]: [DateRange, DateRange]): boolean {
    const r1l = (epoch(r1.end) - epoch(r1.start))
    const r2l = (epoch(r2.end) - epoch(r2.start))

    return Math.abs(epoch(r2.end) - epoch(r1.start)) < Math.abs(r1l + r2l)
}
