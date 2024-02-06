import type { DateRange } from "./types"

const epoch = (date: Date): number => date.getTime()

export function checkOverlap(ranges: DateRange[]): boolean {
    const first = ranges[0]
    const last = ranges[ranges.length - 1]

    return Math.abs(epoch(last.end) - epoch(first.start)) < sumDelta(ranges)
}

function sumDelta(ranges: DateRange[]): number {
    return ranges.reduce((acc, range) => acc + startEndDiff(range), 0)
}

function startEndDiff(range: DateRange): number {
    return epoch(range.end) - epoch(range.start)
}
