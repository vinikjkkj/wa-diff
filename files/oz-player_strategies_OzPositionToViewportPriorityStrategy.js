__d(
  "oz-player/strategies/OzPositionToViewportPriorityStrategy",
  ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var o;
        return (
          (o = e.call(this) || this),
          (o.$OzPositionToViewportPriorityStrategy$p_3 = new (r(
            "oz-player/shims/OzSubscriptionsHandler",
          ))()),
          (o.$OzPositionToViewportPriorityStrategy$p_4 = function () {
            o.emit("state_changed");
          }),
          (o.$OzPositionToViewportPriorityStrategy$p_2 = t),
          (o.$OzPositionToViewportPriorityStrategy$p_1 = n),
          o.$OzPositionToViewportPriorityStrategy$p_3.addSubscriptions(
            t.addListener(
              "state_changed",
              o.$OzPositionToViewportPriorityStrategy$p_4,
            ),
          ),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.isActive = function () {
          return !0;
        }),
        (n.getName = function () {
          return "position_to_viewport";
        }),
        (n.setSourceBufferState = function (t) {}),
        (n.getPriority = function () {
          var e = this.$OzPositionToViewportPriorityStrategy$p_1.getNumber(
              "prioritize_by_viewport_static_penalty",
            ),
            t =
              this.$OzPositionToViewportPriorityStrategy$p_2.getPositionIndexOfVideoFromViewportVertically();
          return e > 0 ? (t === -1 ? e * -1 : 0) : t === -1 ? -1 / 0 : -1 * t;
        }),
        (n.destroy = function () {
          this.$OzPositionToViewportPriorityStrategy$p_3.release();
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);
