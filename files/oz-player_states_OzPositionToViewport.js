__d(
  "oz-player/states/OzPositionToViewport",
  [
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/states/OzPositionToViewportTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var o;
        return (
          (o = e.call(this) || this),
          (o.$OzPositionToViewport$p_1 = new (r(
            "oz-player/shims/OzSubscriptionsHandler",
          ))()),
          (o.$OzPositionToViewport$p_3 = t),
          (o.$OzPositionToViewport$p_2 = r(
            "oz-player/states/OzPositionToViewportTracker",
          ).getInstance(n)),
          o.$OzPositionToViewport$p_2.registerVideo(t),
          o.$OzPositionToViewport$p_1.addSubscriptions(
            o.$OzPositionToViewport$p_2.addListener(
              "state_changed",
              function () {
                o.emit("state_changed");
              },
            ),
          ),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getPositionIndexOfVideoFromViewportVertically = function () {
          return this.$OzPositionToViewport$p_3 != null
            ? this.$OzPositionToViewport$p_2.getPositionIndexOfVideoFromViewportVertically(
                this.$OzPositionToViewport$p_3,
              )
            : -1;
        }),
        (n.destroy = function () {
          (this.$OzPositionToViewport$p_3 != null &&
            this.$OzPositionToViewport$p_2.unregisterVideo(
              this.$OzPositionToViewport$p_3,
            ),
            (this.$OzPositionToViewport$p_3 = null));
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);
