__d(
  "TimeSliceSham",
  ["Env", "ErrorGuard", "IntervalTrackingBoundedBuffer"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e || (e = r("Env"))).timesliceBufferSize;
    u == null && (u = 5e3);
    var c = new (r("IntervalTrackingBoundedBuffer"))(u),
      d = {
        PropagationType: { CONTINUATION: 0, EXECUTION: 1, ORPHAN: 2 },
        guard: function (t, n) {
          return (s || (s = r("ErrorGuard"))).guard(t, {
            name: "TimeSlice" + (n ? ": " + n : ""),
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
          return d.getPlaceholderReusableContinuation();
        },
        getPlaceholderReusableContinuation: function () {
          function e(e) {
            e();
          }
          return ((e.last = e), e);
        },
        getGuardNameStack: function () {
          return [];
        },
        registerExecutionContextObserver: function (t) {},
        catchUpOnDemandExecutionContextObservers: function (t) {},
        getBuffer: function () {
          return c;
        },
      };
    t.TimeSlice = d;
    var m = d;
    l.default = m;
  },
  102,
);
