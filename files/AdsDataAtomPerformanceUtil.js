__d(
  "AdsDataAtomPerformanceUtil",
  [
    "AdsSpeedConfig",
    "ExecutionEnvironment",
    "URI",
    "UserTimingUtils",
    "performanceNow",
    "requestAnimationFrameAcrossTransitions",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? new (s || (s = r("URI")))(window.location.href).getQueryData()
        : {};
    }
    var d = c(),
      m = d.dispatchereventtimer,
      p = d.logdispatchtimes,
      _ = (function () {
        function e() {
          var e = this;
          ((this.$1 = {}),
            (this.$2 = {}),
            (this.$3 = {}),
            (this.startPerformanceMeasurements = function (t, n) {
              if (t != null) {
                var a =
                  typeof t == "object" && typeof t.type == "string"
                    ? t.type
                    : "";
                (m && console.time && console.time(a),
                  p && (e.$3[a] = (u || (u = r("performanceNow")))()),
                  n && o("UserTimingUtils").measureStart("AdsDataAtom " + a));
              }
            }),
            (this.endPerformanceMeasurements = function (t, n) {
              if (t != null) {
                var a =
                  typeof t == "object" && typeof t.type == "string"
                    ? t.type
                    : "";
                if ((m && console.timeEnd && console.timeEnd(a), p)) {
                  var i = e.$3[a];
                  (delete e.$3[a],
                    e.$1[a] ||
                      (e.$1[a] = { count: 0, totalFluxTime: 0, totalTime: 0 }),
                    (e.$1[a].count += 1),
                    (e.$1[a].totalFluxTime +=
                      (u || (u = r("performanceNow")))() - i),
                    e.$5(a, function () {
                      e.$1[a].totalTime +=
                        (u || (u = r("performanceNow")))() - i;
                    }));
                }
                n &&
                  o("UserTimingUtils").measureEnd(
                    "\u221E " + a,
                    "AdsDataAtom " + a,
                  );
              }
            }),
            (this.onDispatchStart = function (t) {
              e.startPerformanceMeasurements(t, e.$4);
            }),
            (this.onDispatchEnd = function (t) {
              e.endPerformanceMeasurements(t, e.$4);
            }),
            (this.$4 = o("AdsSpeedConfig").isDevToolsTimingEnabled()));
        }
        var t = e.prototype;
        return (
          (t.$5 = function (t, n) {
            var e = this;
            this.$2[t] ||
              ((this.$2[t] = 1),
              r("requestAnimationFrameAcrossTransitions")(function () {
                r("setTimeoutAcrossTransitions")(function () {
                  (delete e.$2[t], n());
                });
              }));
          }),
          (t.resetTiming = function () {
            this.$1 = {};
          }),
          (t.getTiming = function () {
            return this.$1;
          }),
          (t.outputTimingTable = function () {
            var e = this;
            console.table(
              Object.keys(this.$1).map(function (t) {
                return babelHelpers.extends({ action: t }, e.$1[t]);
              }),
            );
          }),
          e
        );
      })(),
      f = new _();
    l.default = f;
  },
  98,
);
