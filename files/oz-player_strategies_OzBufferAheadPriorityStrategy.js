__d(
  "oz-player/strategies/OzBufferAheadPriorityStrategy",
  [
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozThrottle",
    "oz-player/utils/OzBufferingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6,
      s = 1e3,
      u = (function (t) {
        function n(e, n) {
          var o;
          return (
            (o = t.call(this) || this),
            (o.$OzBufferAheadPriorityStrategy$p_3 = new (r(
              "oz-player/shims/OzSubscriptionsHandler",
            ))()),
            (o.$OzBufferAheadPriorityStrategy$p_5 = function () {
              o.emit("state_changed");
            }),
            (o.$OzBufferAheadPriorityStrategy$p_4 = e),
            (o.$OzBufferAheadPriorityStrategy$p_1 = n),
            o.$OzBufferAheadPriorityStrategy$p_3.addSubscriptions(
              o.$OzBufferAheadPriorityStrategy$p_1.addEventListener(
                "progress",
                r("oz-player/shims/ozThrottle")(
                  o.$OzBufferAheadPriorityStrategy$p_5,
                  s,
                ),
              ),
              o.$OzBufferAheadPriorityStrategy$p_1.addEventListener(
                "timeupdate",
                r("oz-player/shims/ozThrottle")(
                  o.$OzBufferAheadPriorityStrategy$p_5,
                  s,
                ),
              ),
            ),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getName = function () {
            return "buffer_ahead";
          }),
          (a.setSourceBufferState = function (t) {
            this.$OzBufferAheadPriorityStrategy$p_2 ||
              ((this.$OzBufferAheadPriorityStrategy$p_2 = t),
              this.$OzBufferAheadPriorityStrategy$p_3.addSubscriptions(
                t.addEventListener(
                  "buffer_updated",
                  r("oz-player/shims/ozThrottle")(
                    this.$OzBufferAheadPriorityStrategy$p_5,
                    s,
                  ),
                ),
              ));
          }),
          (a.isActive = function () {
            return !0;
          }),
          (a.getPriority = function () {
            var t = this.$OzBufferAheadPriorityStrategy$p_2;
            if (!t) return 1;
            var n = this.$OzBufferAheadPriorityStrategy$p_1.getCurrentTime(),
              r = t.getBufferedRanges(),
              a = o(
                "oz-player/utils/OzBufferingUtils",
              ).getBufferAheadFromCurrentTime(n, r);
            return a >= e ? 0 : 1;
          }),
          (a.destroy = function () {
            this.$OzBufferAheadPriorityStrategy$p_3.release();
          }),
          n
        );
      })(r("oz-player/shims/OzEventEmitter"));
    l.default = u;
  },
  98,
);
