__d(
  "setImmediateAcrossTransitions",
  ["TimeSlice", "setImmediatePolyfill"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (
        var t = r("TimeSlice").guard(e, "setImmediate", {
            propagationType: r("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0,
          }),
          n = arguments.length,
          o = new Array(n > 1 ? n - 1 : 0),
          a = 1;
        a < n;
        a++
      )
        o[a - 1] = arguments[a];
      return r("setImmediatePolyfill").apply(void 0, [t].concat(o));
    }
    l.default = e;
  },
  98,
);
