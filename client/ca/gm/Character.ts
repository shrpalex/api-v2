import { Workspace } from "@rbxts/services";
import { Common, DATA } from "shared/Game";
import { ZeroOut } from "shared/util/mem";

export class MCharacter {
    // immutable parts (character requires Humanoid and HRP)

    public readonly Character: Model;

    public readonly Humanoid: Humanoid;
    public readonly HRP: BasePart;
    public readonly Camera: Camera;

    public CurrentB_Transient: Common.PLAYER_CHARACTER_BD_TRANSIENT_DAMAGE[] = [];

    constructor(Root: Player) {
        this.Character = Root.Character || Root.CharacterAdded.Wait()[0];

        const _h = this.Character.FindFirstChildOfClass("Humanoid"), _r = this.Character.WaitForChild("HumanoidRootPart");

        if (!_h || !_r) {
            this.Dispose(Root);
        }

        this.Humanoid = _h as Humanoid; this.HRP = _r as BasePart;
        this.Camera = Workspace.CurrentCamera as Camera;

        ZeroOut(this.CurrentB_Transient, 7); // use zeroout to zero out the array till the bodypart count
    }

    public Dispose(Root: Player) {
        // Automatically kicks so we dont have to dispose on APlayer too

        this.Character.Destroy();

        Root.Kick(DATA.Messages.Fatal.CharacterDispose);
    }

    public IsAlive(): boolean {
        return this.Humanoid.Health > 0;
    }

    public IsGrounded(): boolean {
        return this.Humanoid.FloorMaterial !== Enum.Material.Air;
    }

    public IsBleeding(): boolean {
        return this.CurrentB_Transient[0] > 0; // Checks control value > 0;
    }

    public GetCurrentBleedrate(): number {
        if (this.IsBleeding()) return 0;

        return 0; // in ml/s
    }
}