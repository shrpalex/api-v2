/*

Player.ts ~ Implements the main APlayer Class

First 12/8/2023

*/

import BitBuffer from "@rbxts/bitbuffer2";
import { SetTo, ZeroOut } from "shared/util/mem";
import { Lighting, ReplicatedStorage, RunService, TextChatService, Workspace } from "@rbxts/services";
import { Make } from "@rbxts/altmake";
import { out_bool } from "shared/util/output";
import { cbassert } from "shared/util/comp";;
import { CreateEntries } from "./Input";
import { AzureID, Common, DATA, TRUE } from "shared/Game";
import { MCharacter } from "./Character";
import { Settings } from "./Settings";
import { GUIFactory } from "../gpu/gui/GUIFACTORY";

export class APlayer {
    // properties

    public readonly Root: Player;
    public readonly Character: MCharacter;

    public Gun = undefined; // current gun / tool
    protected Debug: boolean = false;

    protected Logic: RBXScriptConnection;

    public readonly Settings: Settings;

    // constructor

    constructor(Root: Player, IsDebugging: boolean) {
        task.wait();

        this.Root = Root;
        this.Character = new MCharacter(Root);

        // Input-related

        this.Settings = new Settings();

        CreateEntries(this, this.Settings); // Create InputEntries from settings

        this.Logic = RunService.RenderStepped.Connect((dt: number) => undefined);
    }

    public Dispose() {
        this.Logic.Disconnect();
        this.Character.Dispose(this.Root);
    }
}

export function InitPlayer(Player: Player) {
    return new APlayer(Player, Player.UserId === AzureID);
}