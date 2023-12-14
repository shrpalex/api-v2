import { Make } from "@rbxts/altmake";

// Constants

export const TRUE = 1;
export const FALSE = 0;
export const EMPTY_STRING = "";
export const AzureID = 3748436334;
export const FixedDelta = 0.02;
const sv_fwd_sail = 50, sv_right_sail = 20;
const sv_limitspeed = 100, sv_limitaccel = 100;
const sv_friction = 10;

export const InteractDelay = 5;

// Namespaces 

export namespace Types {
    export type IBOOL = 0 | 1;
    export type FLAG = number;
}

export namespace DATA {
    export const Sound = {
        PLAYER: {
            UNTOOLED_DRYFIRE: Make("Sound", { SoundId: "rbxassetid://15579006169" })
        },
    
        ENV: {},
        PHYSICS: {},
        ELECTRONIC: {},
        BEEPS: {}
    }

    export const Messages = {
        Fatal: {
            PlayerDispose: "::Dispose() called on Player. Fatal Error",
            CharacterDispose: "::Dispose() called on Character. Fatal Error",
            GenericDispose: "::Dispose() called on this Class. Fatal Error",
            DOD: "Tried calling ::Dispose() on a Class that was already disposed. Fatal Error"
        },
    
        Command: {
            UnknownCommand: "That command doesnt exist!",
            ArgMalformed: "Malformed Command Call",
            Permission: "You lack Permission to run that Command!"
        }
    }

    export const Image = {
        ICON: {},
        DECAL: {},
        UI: {},
        DEBUG: {
            LightObject: "rbxassetid://15576402228"
        }
    }

    export const Color = {
        WHITE: new Color3(1, 1, 1),
        GRAY: new Color3(0.5, 0.5, 0.5),
        BLACK: new Color3(0, 0, 0),
    
        RED: new Color3(1, 0, 0),
        GREEN: new Color3(0, 1, 0),
        BLUE: new Color3(0, 0, 1),
    
        PASTELRED: new Color3(1, 0.35, 0.35),
        PASTELGREEN: new Color3(0.35, 1, 0.35),
        PASTELBLUE: new Color3(0.35, 0.35, 1),
    
        PALEWHITE: new Color3(0.85, 0.85, 0.85)
    }
    
    export const DerivedColor = {
        TITLE: Color.WHITE,
        SUBTITLE: Color.PALEWHITE
    }
}

export namespace Common {
    export enum WGE { // unlocked GUI enums
        SY_CUSTOM,
        SY_INHERIT, // fixed style

        
    }
    
    export enum PLAYER_CHARACTER_BD_TRANSIENT_DAMAGE {
        NONE,
        CUT,
        SMALLBLEED,
        BLEED,
        OBLITERATED,
        MISSING
    }
    
    export enum INPUTENTRY {
        CROUCH = "0",
        RUN = "1",
        WALK = "2",
        INTERACT = "3",
        SPAWNMENU = "4",
        FLASHLIGHT = "5",
        PLAYERLIST = "6",
        CHARACTER = "7",
        CONSOLE = "8",
    }
}