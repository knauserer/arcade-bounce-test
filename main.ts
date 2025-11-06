scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left) || sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = 0 - sprite.vx * friction
        sprite.vy = sprite.vy * friction
    }
    if (sprite.isHittingTile(CollisionDirection.Top) || sprite.isHittingTile(CollisionDirection.Bottom)) {
        sprite.vy = 0 - sprite.vy * friction
        sprite.vx = sprite.vx * friction
    }
    if (Math.abs(sprite.vx) < minBounceSpeed && Math.abs(sprite.vy) < minBounceSpeed) {
        sprite.vx = 0
        sprite.vy = 0
        sprite.setBounceOnWall(false)
    } else {
        sprite.setBounceOnWall(true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(randint(-1000, 1000), randint(-1000, 1000))
})
let mySprite: Sprite = null
let minBounceSpeed = 0
let friction = 0
friction = 0.8
minBounceSpeed = 25
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`Level1`))
tileUtil.setWalls(assets.tile`myTile`, true)
mySprite = sprites.create(img`
    . . . . . . . . 
    . f f f f f . . 
    . f 5 5 5 f . . 
    . f 5 5 5 f . . 
    . f 5 5 5 f . . 
    . f f f f f . . 
    . . . . . . . . 
    . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
mySprite.ay = 500
mySprite.setVelocity(randint(-1000, 1000), randint(-1000, 1000))
