import { Players } from "@rbxts/services";

function DEREF_SOUND(Sound: Sound) { Sound.Destroy() } // macro to deref a sound

export async function SOUND(SoundResource: Sound) {
    const _ts = SoundResource.Clone();
    
    _ts.Parent = Players.LocalPlayer;
    _ts.Play(); _ts.Ended.Connect(() => DEREF_SOUND(_ts));
}

export function SSOUND(SoundResource: string) {}
export function Beep(Frequency: number, Type: number) {}