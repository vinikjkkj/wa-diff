__d(
  "requestAnimationFrameAcrossTransitions",
  ["TimeSlice", "requestAnimationFramePolyfill"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("TimeSlice").guard(e, "requestAnimationFrame", {
        propagationType: r("TimeSlice").PropagationType.CONTINUATION,
      });
      return r("requestAnimationFramePolyfill")(t);
    }
    l.default = e;
  },
  98,
);
