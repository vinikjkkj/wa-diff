__d(
  "TimeSliceSham",
  ["Env", "ErrorGuard", "IntervalTrackingBoundedBuffer"],
  function (t, n, r, o, a, i) {
    var e,
      l,
      s = (e || (e = n("Env"))).timesliceBufferSize;
    s == null && (s = 5e3);
    var u = new (n("IntervalTrackingBoundedBuffer"))(s),
      c = {
        PropagationType: { CONTINUATION: 0, EXECUTION: 1, ORPHAN: 2 },
        guard: function (t, r) {
          return (l || (l = n("ErrorGuard"))).guard(t, {
            name: "TimeSlice" + (r ? ": " + r : ""),
          });
        },
        copyGuardForWrapper: function (t, n) {
          return t;
        },
        checkCoverage: function () {},
        setLogging: function (t, n) {},
        getContext: function () {
          return null;
        },
        getGuardedContinuation: function (t) {
          function e(e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return e.apply(this, n);
          }
          return e;
        },
        getReusableContinuation: function (t) {
          return c.getPlaceholderReusableContinuation();
        },
        getPlaceholderReusableContinuation: function () {
          var e = function (t) {
            return t();
          };
          return ((e.last = e), e);
        },
        getGuardNameStack: function () {
          return [];
        },
        registerExecutionContextObserver: function (t) {},
        catchUpOnDemandExecutionContextObservers: function (t) {},
        getBuffer: function () {
          return u;
        },
      };
    ((t.TimeSlice = c), (a.exports = c));
  },
  6,
);
