__d(
  "AdsScenariosSpinnerTrackerManager",
  ["LoadingMarkerGlobalListener", "SpinnerSurfaceTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.init = function (t) {
            var e = this,
              n = t.blocklistSurface,
              a = t.trackingSurface;
            ((this.$1 = new (r("SpinnerSurfaceTracker"))({
              anyContains: a,
              noneContains: n,
            })),
              (this.$2 = o(
                "LoadingMarkerGlobalListener",
              ).subscribeComponentLifeCycle(
                function (t) {
                  var n;
                  return (n = e.$1) == null ? void 0 : n.onStart(t);
                },
                function (t, n) {
                  var r;
                  return (r = e.$1) == null ? void 0 : r.onEnd(t, n);
                },
              )));
          }),
          (t.getTracker = function () {
            return this.$1;
          }),
          (t.getUnsubscribe = function () {
            return this.$2;
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
