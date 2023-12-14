import { Common } from "shared/Game"

export class Settings {
    public InputEntries: [Common.INPUTENTRY, Enum.KeyCode][] = [
        [Common.INPUTENTRY.CROUCH, Enum.KeyCode.LeftControl],
        [Common.INPUTENTRY.RUN, Enum.KeyCode.LeftShift],
        [Common.INPUTENTRY.WALK, Enum.KeyCode.C],

        [Common.INPUTENTRY.INTERACT, Enum.KeyCode.E],

        [Common.INPUTENTRY.SPAWNMENU, Enum.KeyCode.Q],
        [Common.INPUTENTRY.FLASHLIGHT, Enum.KeyCode.F],
        
        [Common.INPUTENTRY.CONSOLE, Enum.KeyCode.Tilde],
        [Common.INPUTENTRY.PLAYERLIST, Enum.KeyCode.Tab],
    ]

    constructor() {
        // sync
    }
}