import { EMPTY_STRING } from "shared/Game";

export function IsEmpty(str: string) {
    return str === EMPTY_STRING;
}

export function cbassert(condition: boolean, cb: () => any): any {
    if (!condition) return;

    return cb();
}

export function C_S2U(Studs: number) {
    return (875 * Studs) / 2348;
}

export function C_U2S(Units: number) {
    return (2348 * Units) / 875
}