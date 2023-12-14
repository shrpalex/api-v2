import BitBuffer from "@rbxts/bitbuffer2";

export function ZeroOut(arr: number[], till?: number) {
    for (let i = 0; i < (till || arr.size()); i++) {
        arr[i] = 0;
    }
}

export function SetTo(arr: number[], value: number, till?: number) {
    for (let i = 0; i < (till || arr.size()); i++) {
        arr[i] = value;
    }
}