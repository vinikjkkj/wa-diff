__d(
  "cometGHLContentDisplayCheck",
  ["cr:1824699"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !0,
      s = !1;
    function u(t) {
      if (c(t)) return e;
      var r = document.body,
        o = r == null || !r.contains(t);
      if ((n("cr:1824699") && n("cr:1824699").flap(t, { notMounted: o }), o))
        return e;
      var a = t.offsetHeight === 0;
      if ((n("cr:1824699") && n("cr:1824699").flap(t, { zeroHeight: a }), a))
        return s;
      var i = window.getComputedStyle(t),
        l =
          i.visibility === "hidden" ||
          i.opacity === "0" ||
          (i.overflow === "hidden" &&
            (parseInt(i.maxHeight, 10) === 0 ||
              parseInt(i.maxWidth, 10) === 0));
      if (
        (n("cr:1824699") && n("cr:1824699").flap(t, { cssHiddenByStyle: l }), l)
      )
        return s;
      var u = Array.from(t.getElementsByTagName("img")),
        p = u.length === 0;
      if (
        (n("cr:1824699") && n("cr:1824699").flap(t, { noImages: p }),
        u.length === 0)
      )
        return e;
      var _ = u.find(d) != null;
      if (
        (n("cr:1824699") && n("cr:1824699").flap(t, { hasImageWithSize: _ }), _)
      )
        return e;
      var f = Array.from(t.getElementsByTagName("video")),
        g =
          f.find(function (e) {
            return m(e) || e.readyState >= 2 || !e.paused;
          }) != null;
      if (
        (n("cr:1824699") && n("cr:1824699").flap(t, { hasVideoWithSize: g }), g)
      )
        return e;
      var h = Array.from(t.getElementsByTagName("svg"));
      if (h.find(m) != null) return e;
      var y = Array.from(t.getElementsByTagName("i"));
      return y.find(m) != null
        ? e
        : (n("cr:1824699") &&
            n("cr:1824699").flap(t, { noSuccessfulChecks: !0 }),
          s);
    }
    var c = function (t) {
        for (var e of t.children) {
          var n;
          if (((n = e.dataset) == null ? void 0 : n.virtualized) === "true")
            return !t.style.display;
        }
        return !1;
      },
      d = function (t) {
        return t.offsetHeight + t.offsetWidth > 0;
      },
      m = function (t) {
        var e = t.getBoundingClientRect();
        return e.height * e.width > 0;
      };
    l.default = u;
  },
  98,
);
