__d(
  "oz-player/strategies/OzPlayheadAtInterruptionDetector",
  [
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzSubscriptionsHandler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = (function (t) {
        function n(e, n) {
          var o;
          ((o = t.call(this) || this),
            (o.$OzPlayheadAtInterruptionDetector$p_2 = null),
            (o.$OzPlayheadAtInterruptionDetector$p_3 = new (r(
              "oz-player/shims/OzSubscriptionsHandler",
            ))()),
            (o.$OzPlayheadAtInterruptionDetector$p_4 = null),
            (o.$OzPlayheadAtInterruptionDetector$p_1 = e));
          var a = n
            ? n.addListener("enterBuffering", function () {
                o.$OzPlayheadAtInterruptionDetector$p_5();
              })
            : r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                o.$OzPlayheadAtInterruptionDetector$p_1,
                "waiting",
                function () {
                  o.$OzPlayheadAtInterruptionDetector$p_5();
                },
              );
          return (
            o.$OzPlayheadAtInterruptionDetector$p_3.addSubscriptions(a),
            (o.$OzPlayheadAtInterruptionDetector$p_4 = n),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.notifyStreamInterrupted = function (t) {
            ((this.$OzPlayheadAtInterruptionDetector$p_2 = t),
              this.$OzPlayheadAtInterruptionDetector$p_5());
          }),
          (o.notifyStreamResumed = function () {
            this.$OzPlayheadAtInterruptionDetector$p_2 = null;
          }),
          (o.$OzPlayheadAtInterruptionDetector$p_5 = function () {
            if (this.$OzPlayheadAtInterruptionDetector$p_2 != null) {
              var t = this.$OzPlayheadAtInterruptionDetector$p_2 || 0;
              Math.abs(
                this.$OzPlayheadAtInterruptionDetector$p_1.currentTime - t,
              ) < e && this.emit("playheadAtInterruption", t);
            }
          }),
          (o.destroy = function () {
            (this.$OzPlayheadAtInterruptionDetector$p_3.release(),
              (this.$OzPlayheadAtInterruptionDetector$p_4 = null));
          }),
          n
        );
      })(r("oz-player/shims/OzEventEmitter"));
    l.default = s;
  },
  98,
);
