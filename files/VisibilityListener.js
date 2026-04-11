__d(
  "VisibilityListener",
  ["Visibility", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Date.now() - (e || (e = r("performanceNow")))(),
      u = [],
      c = !1,
      d = 1e4;
    u.push({ key: s, value: r("Visibility").isHidden() });
    function m(e, t) {
      if (c || u.length > d) {
        c = !0;
        return;
      }
      u.push({ key: e + s, value: t });
    }
    (r("Visibility").addListener(r("Visibility").VISIBLE, function (e) {
      m(e.changeTime, !1);
    }),
      r("Visibility").addListener(r("Visibility").HIDDEN, function (e) {
        m(e.changeTime, !0);
      }));
    function p(e, t) {
      if (c) return null;
      for (var n, o = u.length - 1; o >= 0; o--)
        if (u[o].key <= t) {
          n = u.slice(0, o + 1);
          break;
        }
      return n === void 0
        ? null
        : (n[n.length - 1].value !== r("Visibility").isHidden() &&
            (n[n.length] = { key: t, value: r("Visibility").isHidden() }),
          n);
    }
    function _(e, t) {
      var n = p(e, t);
      if (!n) return null;
      if (n.length < 2) return r("Visibility").isHidden() ? t - e : 0;
      var o = n.length - 1,
        a = n[o].value ? t - n[o].key : 0;
      for (--o; o > 0 && n[o].key > e; o--)
        n[o].value && (a += n[o + 1].key - n[o].key);
      return (n[o].value && (a = n[o + 1].key - e), a);
    }
    function f() {
      return !0;
    }
    ((l.getHiddenTimings = p), (l.getHiddenTime = _), (l.supported = f));
  },
  98,
);
