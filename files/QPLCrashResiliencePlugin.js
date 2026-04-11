__d(
  "QPLCrashResiliencePlugin",
  [
    "FBLogger",
    "QPLEvent",
    "QPLMarkerMap",
    "QuickPerformanceLogger",
    "RSTLogForCrash",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      if (r("gkx")("11050") !== !1) {
        var e = new m().getListener();
        (s || (s = r("QuickPerformanceLogger"))).addListener(e);
      }
    }
    var c = 100,
      d = 10,
      m = (function () {
        function t() {
          var e = this;
          ((this.$2 = !1),
            (this.$1 = new (r("QPLMarkerMap"))({
              totalLimit: c,
              perMarkerLimit: d,
            })),
            o("RSTLogForCrash")
              .logForCrashReadyPromise.getPromise()
              .then(function () {
                ((e.$2 = !0), e.$3());
              })
              .catch(function () {}));
        }
        var n = t.prototype;
        return (
          (n.$3 = function () {
            var e = this;
            ((s || (s = r("QuickPerformanceLogger"))).activeMarkers.forEach(
              function (t, n) {
                t.forEach(function (t, r) {
                  t.isCrashResilient && e.$1.set(n, r, 1);
                });
              },
            ),
              this.$4());
          }),
          (n.$4 = function () {
            if (this.$2) {
              var e = this.$1.toString();
              (o("RSTLogForCrash").isValidStringValue(e) ||
                ((e = "{}"),
                r("FBLogger")("qpl-crash-resilience-js").warn(
                  "Exceeded RST log limit",
                )),
                o("RSTLogForCrash").logForCrash(
                  "active_qpls",
                  e,
                  o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE,
                  { immediateFlush: !0 },
                ));
            }
          }),
          (n.getListener = function () {
            var e = this,
              t = this;
            return {
              onMarkerStarted: function (n, r, o, a) {
                t.onMarkerStarted(n, r, o, a);
              },
              onMarkerEnd: function (n, r, o, a, i) {
                return e.onMarkerEnd(n, r, o, a, i);
              },
              onMarkerDrop: function (n, r, o, a) {
                t.onMarkerDrop(n, r, o, a);
              },
            };
          }),
          (n.onMarkerStarted = function (n, r, a, i) {
            var t,
              l = (t = i.isCrashResilient) != null ? t : !1;
            l &&
              (this.$1.set((e || (e = o("QPLEvent"))).getMarkerId(n), r, 1),
              this.$4());
          }),
          (n.onMarkerEnd = function (n, r, a, i, l) {
            var t,
              s = (t = l.isCrashResilient) != null ? t : !1;
            !l.passesSampling ||
              !s ||
              (this.$1.delete((e || (e = o("QPLEvent"))).getMarkerId(r), a),
              this.$4());
          }),
          (n.onMarkerDrop = function (n, r, a, i) {
            var t,
              l = (t = i.isCrashResilient) != null ? t : !1;
            !i.passesSampling ||
              !l ||
              (this.$1.delete((e || (e = o("QPLEvent"))).getMarkerId(n), r),
              this.$4());
          }),
          t
        );
      })();
    l.startQPLCrashResilience = u;
  },
  98,
);
