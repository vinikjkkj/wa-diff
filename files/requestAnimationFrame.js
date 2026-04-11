__d(
  "requestAnimationFrame",
  ["TimeSlice", "TimerStorage", "requestAnimationFrameAcrossTransitions"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      function t(t) {
        (r("TimerStorage").unset(r("TimerStorage").ANIMATION_FRAME, n), e(t));
      }
      (r("TimeSlice").copyGuardForWrapper(e, t), (t.__originalCallback = e));
      var n = r("requestAnimationFrameAcrossTransitions")(t);
      return (r("TimerStorage").set(r("TimerStorage").ANIMATION_FRAME, n), n);
    }
    l.default = e;
  },
  98,
);
