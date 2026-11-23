__d(
  "GeoPrivateFacebookTransitionGeneratedStyles",
  [],
  function (t, n, r, o, a, i, l) {
    var e = {
        extraExtraShort: { transitionDuration: "x1g2r6go", $$css: !0 },
        ms150: { transitionDuration: "xx6bhzk", $$css: !0 },
        fast: { transitionDuration: "x13dflua", $$css: !0 },
        short: { transitionDuration: "x1mbqufl", $$css: !0 },
        slow: { transitionDuration: "xofcydl", $$css: !0 },
        ms500: { transitionDuration: "x1wsgiic", $$css: !0 },
        sluggish: { transitionDuration: "x1fkkkjs", $$css: !0 },
      },
      s = {
        enter: { transitionTimingFunction: "x1mow4s6", $$css: !0 },
        exit: { transitionTimingFunction: "x1ftol90", $$css: !0 },
        fade: { transitionTimingFunction: "x16e9yqp", $$css: !0 },
        move: { transitionTimingFunction: "x1fwqrf6", $$css: !0 },
        quickMove: { transitionTimingFunction: "xw7d9y7", $$css: !0 },
        soft: { transitionTimingFunction: "xxziih7", $$css: !0 },
        steady: { transitionTimingFunction: "x16e9yqp", $$css: !0 },
        strong: { transitionTimingFunction: "xnnyp6c", $$css: !0 },
      },
      u = Object.freeze({
        fade: {
          in: { duration: "fast", timing: "steady" },
          out: { duration: "ms150", timing: "steady" },
        },
        move: {
          in: { duration: "short", timing: "move" },
          out: { duration: "fast", timing: "move" },
        },
        quickMove: {
          in: { duration: "short", timing: "quickMove" },
          out: { duration: "fast", timing: "quickMove" },
        },
        enterExit: {
          in: { duration: "slow", timing: "enter" },
          out: { duration: "short", timing: "exit" },
        },
        soft: {
          in: { duration: "fast", timing: "soft" },
          out: { duration: "ms150", timing: "soft" },
        },
        strong: {
          in: { duration: "slow", timing: "strong" },
          out: { duration: "short", timing: "strong" },
        },
        expandCollapse: {
          in: { duration: "short", timing: "move" },
          out: { duration: "fast", timing: "move" },
        },
      });
    ((l.transitionDurationStyles = e),
      (l.transitionTimingStyles = s),
      (l.transitionPresets = u));
  },
  98,
);
