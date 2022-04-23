import * as Phaser from "phaser";

export class Shop extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, y, x, "shop");
    this.setAlpha(0.2);
    this.setDepth(10);
    this.placed = false;
    this.guiPaused = false;
    this.setInteractive(
      new Phaser.Geom.Rectangle(0, 0, 99, 128),
      Phaser.Geom.Rectangle.Contains
    );
    this.on("pointerdown", this.handleHit);
  }

  handleHit() {
    if (this.guiPaused) return;
    window.state.shopGUIOpen = true;
  }

  place() {
    this.guiPaused = true;
    document.getElementById("info").style = "display: none;";
    this.placed = true;
    this.setAlpha(1, 1, 1, 1);
    this.setDepth(1);
    setTimeout(() => (this.guiPaused = false), 500);
  }

  update(x, y) {
    if (this.input) this.input.cursor = "pointer";
    if (this.placed) return;
    this.x = x;
    this.y = y;
  }
}
