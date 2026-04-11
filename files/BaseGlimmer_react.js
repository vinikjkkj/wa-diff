__d(
  "BaseGlimmer.react",
  [
    "BaseGlimmerCompatStyles",
    "BaseLoadingStateElement.react",
    "react",
    "useGlimmerPausedState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      "use no forget";
      var t = e.children,
        n = e.disableLoadingStateTracker,
        a = e.index,
        i = e.iteration,
        l = e.startPaused,
        u = l === void 0 ? !0 : l,
        c = e.variant,
        d = e.xstyle,
        m = r("useGlimmerPausedState")(u),
        p = m.paused,
        _ = m.ref;
      return s.jsx(r("BaseLoadingStateElement.react"), {
        disableLoadingStateTracker: n,
        ref: _,
        xstyle:
          c == null
            ? [
                o("BaseGlimmerCompatStyles").styles.root,
                p && o("BaseGlimmerCompatStyles").styles.paused,
                d,
                o("BaseGlimmerCompatStyles").styles.animationDelay(a),
                i != null &&
                  o("BaseGlimmerCompatStyles").styles.animationIterationCount(
                    i,
                  ),
              ]
            : [
                c.xstyleConfig.container,
                c.xstyleConfig.animation,
                c.xstyleConfig.animationDelay,
                c.xstyleConfig.animationIteration,
              ],
        children: t,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
