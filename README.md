# Magical Multiplayer Xylophone

This demo was originally created by [Romuald Quantin](http://www.soundstep.com/). I've just updated it to have multiplayer support using [Pusher](http://pusher.com).

For more information on how the core part of the app was build read [JavaScript motion detection](http://www.soundstep.com/blog/2012/03/22/javascript-motion-detection/).

The point of updating it to support multiplayer functionality was to demonstrate just how easy it is. The [multiplayer code diff](https://github.com/leggetter/multiplayer-xylophone/commit/f6562b7f95f8185e7d4f370b2494aa05563998f0) demonstrates that very well. It's **30 lines of code** (HTML & client/server JavaScript) and that includes config, formatting and a logging function.

## Demo

Requires:

* `getUserMedia` stream support
* A webcam

http://multiplayer-xylophone.herokuapp.com/

## TODO

* Add [Pusher presence](http://pusher.com/docs/presence) to show who else is online
  * I like the idea of capturing an initial image of the player and using that
* Show who has played a note. At the minute it could be anybody :)
* Let players choose different instruments/sounds for their keys