import { Make, Modify } from "@rbxts/altmake";
import { Players } from "@rbxts/services";
import { Common, DATA, TRUE, Types } from "shared/Game";

/*
 nomenclature ~ Ex extended, W unlocked to users
*/
export namespace GUIFactory {
    // Interfaces

    interface INTERNAL_BASEBUILDER_IF {
        Name: string,

        Scale: Vector2,
        Position: Vector2,
        Anchor: Vector2,
        
        CreateDefaults: boolean
    }

    export interface ROOT_BUILDER_IF {
        Name: string;

        HasTitlebar: boolean;

        RootType: Types.IBOOL;
        RootFlags: Types.FLAG;

        Parent: BasePlayerGui;

        CreateDefaults: boolean;
    }

    export interface LABEL_BUILDER_IF extends INTERNAL_BASEBUILDER_IF {
        Name: string;

        Text: string;
        Scaled: boolean;
        Flags: Types.FLAG;
        
        FontSettings: Enum.Font;
        SupportsRichText: boolean;
        
        MakeConstraints: boolean;
    }

    export interface IMAGE_BUILDER_IF extends INTERNAL_BASEBUILDER_IF {

    }

    export interface BUTTON_BUILDER_IF extends INTERNAL_BASEBUILDER_IF {
        
    }

    export interface IMAGE_BUILDER_IF {
        
    }

    export interface SCROLL_BUILDER_IF {

    }


    // Class defs

    export abstract class BaseGuiComponent<T extends (GuiObject | GuiBase)> {
        abstract Get(): T;
    }

    export abstract class WBaseGuiComponent<T extends GuiObject> extends BaseGuiComponent<T> {
        abstract Parent(p: GuiObject): void;
    }

    export class Root extends BaseGuiComponent<ScreenGui> {
        protected Instance: ScreenGui;
        protected readonly IsStrict: boolean;

        constructor(rfb: ROOT_BUILDER_IF) {
            super();

            const StyleFlag = (rfb.RootFlags & Common.WGE.SY_INHERIT) !== 0;

            this.IsStrict = rfb.RootType === TRUE;

            this.Instance = Make("ScreenGui", {
                Name: rfb.Name,

                ClipToDeviceSafeArea: !StyleFlag,
                SafeAreaCompatibility: StyleFlag ? Enum.SafeAreaCompatibility.None : Enum.SafeAreaCompatibility.FullscreenExtension,
                ScreenInsets: StyleFlag ? Enum.ScreenInsets.None : Enum.ScreenInsets.CoreUISafeInsets,

                DisplayOrder: StyleFlag && this.IsStrict ? 128 : 0,
                IgnoreGuiInset: StyleFlag,
                ResetOnSpawn: !StyleFlag,

                Parent: rfb.Parent
            });
        }

        public AppendPanel(ch: Panel): void {
            ch.Get().Parent = this.Instance;
        }

        public AppendChild(ch: GuiObject): void {
            ch.Parent = this.Instance;
        }

        public Get(): ScreenGui {
            return this.Instance;
        }
    }

    export class Panel extends WBaseGuiComponent<CanvasGroup> {
        protected Instance;

        constructor() {
            super();

            this.Instance = Make("CanvasGroup");
        }

        public Get(): CanvasGroup {
            return this.Instance;
        }

        public Parent(p: GuiObject): void {
            this.Instance.Parent = p;
        }
    }

    // Functional Builders (for noobs)

    export function CreateRoot(Name: string, RootType: Types.IBOOL, Scale: Vector2) {}
    export function CreateRootIF(gfb: ROOT_BUILDER_IF) {}

    export function LABEL(Name: string = "Label", Text: string = "Label", Scaled: boolean = false, Flags: Types.FLAG = 0, Font: Enum.Font = Enum.Font.Gotham, RichText: boolean = false, MakeConstraints: boolean = true) {
        const HasCustomStyle = (Flags & Common.WGE.SY_CUSTOM) !== 0; 

        return Make("TextLabel", {
            Name: Name,

            Text: Text,
            Font: Font,
            RichText: RichText,

            TextScaled: Scaled,

            BackgroundTransparency: HasCustomStyle ? 0 : 1,
            TextColor3: HasCustomStyle ? DATA.Color.BLACK : DATA.DerivedColor.TITLE
        });
    }

    export function IMAGE(ifb: IMAGE_BUILDER_IF) {}
    export function BUTTON(bfb: BUTTON_BUILDER_IF) {}
    export function SCROLL(sfb: SCROLL_BUILDER_IF) {}
}