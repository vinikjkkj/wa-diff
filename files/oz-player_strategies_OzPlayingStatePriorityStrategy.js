__d(
  "oz-player/strategies/OzPlayingStatePriorityStrategy",
  ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$OzPlayingStatePriorityStrategy$p_1 = new (r(
            "oz-player/shims/OzSubscriptionsHandler",
          ))()),
          (n.$OzPlayingStatePriorityStrategy$p_3 = function () {
            n.emit("state_changed");
          }),
          (n.$OzPlayingStatePriorityStrategy$p_2 = t),
          n.$OzPlayingStatePriorityStrategy$p_1.addSubscriptions(
            n.$OzPlayingStatePriorityStrategy$p_2.addEventListener(
              "playing",
              n.$OzPlayingStatePriorityStrategy$p_3,
            ),
            n.$OzPlayingStatePriorityStrategy$p_2.addEventListener(
              "play",
              n.$OzPlayingStatePriorityStrategy$p_3,
            ),
            n.$OzPlayingStatePriorityStrategy$p_2.addEventListener(
              "pause",
              n.$OzPlayingStatePriorityStrategy$p_3,
            ),
          ),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.isActive = function () {
          return !0;
        }),
        (n.getName = function () {
          return "playing_state";
        }),
        (n.setSourceBufferState = function (t) {}),
        (n.getPriority = function () {
          return this.$OzPlayingStatePriorityStrategy$p_2.isPlaying() ? 1 : 0;
        }),
        (n.destroy = function () {
          this.$OzPlayingStatePriorityStrategy$p_1.release();
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);
