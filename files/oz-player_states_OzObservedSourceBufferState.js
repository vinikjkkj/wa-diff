__d(
  "oz-player/states/OzObservedSourceBufferState",
  [
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/utils/OzFakeEventTarget",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var o;
        return (
          (o = e.call(this) || this),
          (o.$OzObservedSourceBufferState$p_2 = new (r(
            "oz-player/shims/OzSubscriptionsHandler",
          ))()),
          (o.$OzObservedSourceBufferState$p_3 = []),
          (o.$OzObservedSourceBufferState$p_6 = function () {
            var e;
            try {
              e = o.$OzObservedSourceBufferState$p_1.getBuffered();
            } catch (e) {
              if (e instanceof Error && e.name === "InvalidStateError") {
                o.$OzObservedSourceBufferState$p_3 = [];
                return;
              } else throw e;
            }
            for (var t = [], n = 0; n < e.length; n++)
              t.push({ startTime: e.start(n), endTime: e.end(n) });
            o.$OzObservedSourceBufferState$p_3 = t;
          }),
          (o.$OzObservedSourceBufferState$p_1 = t),
          (o.$OzObservedSourceBufferState$p_4 = n),
          o.$OzObservedSourceBufferState$p_5(),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$OzObservedSourceBufferState$p_5 = function () {
          var e = this;
          (this.$OzObservedSourceBufferState$p_2.release(),
            (this.$OzObservedSourceBufferState$p_2 = new (r(
              "oz-player/shims/OzSubscriptionsHandler",
            ))()),
            this.$OzObservedSourceBufferState$p_2.addSubscriptions(
              this.$OzObservedSourceBufferState$p_1.registerOnUpdateEndListener(
                function () {
                  (e.$OzObservedSourceBufferState$p_6(),
                    e.dispatchEvent("buffer_updated"));
                },
              ),
              this.$OzObservedSourceBufferState$p_1.registerOnErrorListener(
                this.$OzObservedSourceBufferState$p_6,
              ),
            ));
        }),
        (n.setSourceBuffer = function (t) {
          ((this.$OzObservedSourceBufferState$p_1 = t),
            this.$OzObservedSourceBufferState$p_5(),
            this.$OzObservedSourceBufferState$p_6());
        }),
        (n.getBufferedRanges = function () {
          return this.$OzObservedSourceBufferState$p_3;
        }),
        (n.destroy = function () {
          (e.prototype.destroy.call(this),
            this.$OzObservedSourceBufferState$p_2.release(),
            this.$OzObservedSourceBufferState$p_2.engage());
        }),
        t
      );
    })(r("oz-player/utils/OzFakeEventTarget"));
    l.default = e;
  },
  98,
);
