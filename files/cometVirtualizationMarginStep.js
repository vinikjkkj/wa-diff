__d(
  "cometVirtualizationMarginStep",
  ["VirtualizationConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("VirtualizationConfig").getMarginScrollDelta(),
      s = o("VirtualizationConfig").getScrollSpeedFactorBase();
    function u(e, t) {
      return (
        e.bottom === t.bottom &&
        e.left === t.left &&
        e.right === t.right &&
        e.top === t.top
      );
    }
    function c(t, n, r, o) {
      var a = r === 0 ? 1 : r / s,
        i = e * a,
        l = o.bottomMax,
        c = o.lowerBound,
        d = o.topMax,
        m = n
          ? babelHelpers.extends({}, t, {
              bottom: Math.min(l, t.bottom + i),
              top: Math.min(d, Math.max(c, t.top - i)),
            })
          : babelHelpers.extends({}, t, {
              bottom: Math.min(l, Math.max(c, t.bottom - i)),
              top: Math.min(d, t.top + i),
            });
      return u(t, m) ? t : m;
    }
    ((l.areMarginsEqual = u), (l.computeNextMargin = c));
  },
  98,
);
