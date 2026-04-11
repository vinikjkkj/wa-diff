__d(
  "VisibilityState",
  ["VisibilityAPI", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = [],
      c = null,
      d = !1,
      m = new Set();
    (d ||
      (o("VisibilityAPI").isVisibilityHidden() &&
        (c = o("VisibilityAPI").getEarliestHiddenStartTime()),
      (d = !0)),
      o("VisibilityAPI").canUseVisibilityAPI &&
        o("VisibilityAPI").onVisibilityChange(function (e) {
          (p(e, o("VisibilityAPI").isVisibilityHidden()),
            m.forEach(function (t) {
              t(e, o("VisibilityAPI").isVisibilityHidden());
            }));
        }));
    function p(e, t) {
      t
        ? (c = e)
        : c != null &&
          (u.push({ end: e, start: c }), u.length > s && u.shift(), (c = null));
    }
    function _(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function f(e) {
      m.delete(e);
    }
    function g(t, n) {
      var o = [],
        a = Array.from(u);
      if (c != null) {
        var i = c;
        a.push({ end: (e || (e = r("performanceNow")))(), start: i });
      }
      return (
        a.forEach(function (e) {
          e.start <= t && e.end > t
            ? e.end <= n
              ? o.push({ end: e.end, start: t })
              : o.push({ end: n, start: t })
            : e.start > t &&
              e.start <= n &&
              (e.end <= n
                ? o.push({ end: e.end, start: e.start })
                : o.push({ end: n, start: e.start }));
        }),
        o
      );
    }
    function h(e, t) {
      return g(e, t).length > 0;
    }
    ((l.subscribe = _),
      (l.unsubscribe = f),
      (l.getHiddenSpans = g),
      (l.wasHidden = h));
  },
  98,
);
