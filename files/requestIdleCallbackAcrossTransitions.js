__d(
  "requestIdleCallbackAcrossTransitions",
  ["IdleCallbackImplementation", "TimeSlice"],
  function (t, n, r, o, a, i, l) {
    var e =
      t.requestIdleCallback ||
      o("IdleCallbackImplementation").requestIdleCallback;
    function s(n, o) {
      var a = r("TimeSlice").guard(n, "requestIdleCallback", {
        propagationType: r("TimeSlice").PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      return e.call(t, a, o);
    }
    l.default = s;
  },
  98,
);
