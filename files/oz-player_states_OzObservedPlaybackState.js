__d(
  "oz-player/states/OzObservedPlaybackState",
  [
    "oz-player/loggings/OzMultiDestinationPerfLogger",
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzSubscriptionsHandler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var a = this;
        (n === void 0 &&
          (n = new (o(
            "oz-player/loggings/OzMultiDestinationPerfLogger",
          ).OzMultiDestinationPerfLoggerProvider)([])),
          (this.$2 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
          (this.$4 = function () {
            a.$3.getOperationLogger("pause").setState("paused").log();
          }),
          (this.$5 = function () {
            a.$3.getOperationLogger("playing").setState("playing").log();
          }),
          (this.$1 = t),
          (this.$3 = n),
          this.$2.addSubscriptions(
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$1,
              "pause",
              this.$4,
            ),
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$1,
              "playing",
              this.$5,
            ),
          ));
      }
      var t = e.prototype;
      return (
        (t.isPlaying = function () {
          return !this.$1.paused;
        }),
        (t.getCurrentTime = function () {
          return this.$1.currentTime;
        }),
        (t.getCurrentTimeUpdateTime = function () {
          return Date.now();
        }),
        (t.getDuration = function () {
          return this.$1.duration;
        }),
        (t.addEventListener = function (t, n) {
          return r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            t,
            n,
          );
        }),
        (t.destroy = function () {
          this.$2.release();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
