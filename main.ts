input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # # #
        . . # . #
        . . # # #
        `)
    soundExpression.mysterious.playUntilDone()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Surprised)
    soundExpression.giggle.playUntilDone()
})
