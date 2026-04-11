__d(
  "requestIdleCallbackAcrossTransitions",
  ["IdleCallbackImplementation", "TimeSlice"],
  function (t, n, r, o, a, i, l) {
    var e =
      t.requestIdleCallback ||
      o("IdleCallbackImplementation").requestIdleCallback;
    function s(n, o) {
      return (
        (n = r("TimeSlice").guard(n, "requestIdleCallback", {
          propagationType: r("TimeSlice").PropagationType.CONTINUATION,
          registerCallStack: !0,
        })),
        e.call(t, n, o)
      );
    }
    l.default = s;
  },
  98,
);
