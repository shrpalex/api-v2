import { ContextActionService, Players } from "@rbxts/services";
import { APlayer } from "./Player";
import { SOUND } from "./SoundLib";
import { out_bool } from "shared/util/output";
import { Common, InteractDelay } from "shared/Game";
import { Settings } from "./Settings";

let Interact = 0;

function GetMouse() {
    return Players.LocalPlayer.GetMouse();
}

function InputEntries(Player: APlayer, Label: string, State: Enum.UserInputState, Obj: InputObject) {
    const RuntimeMouse = GetMouse();

    const InputBegan = State === Enum.UserInputState.Begin;
    const HasTarget = RuntimeMouse.Target !== undefined;

    switch(Label) {
        case Common.INPUTENTRY.INTERACT:
            if (!InputBegan || tick() - Interact < InteractDelay) return;

            Interact = tick();

            print("interact");

            break;
        case Common.INPUTENTRY.RUN:
            break;
        case Common.INPUTENTRY.CROUCH:
            break;
    }
}

export function CreateEntries(Player: APlayer, Settings: Settings) {
    for (const Entry of Settings.InputEntries) {
        ContextActionService.BindAction(Entry[0], (Label, State, Obj) => InputEntries(Player, Label, State, Obj), false, Entry[1]);

        print("Registered", Entry[0], "on", Entry[1]);
    }
}

export function UpdateEntry(Entry: Common.INPUTENTRY, KeyCode: Enum.KeyCode) {} // TODO do this