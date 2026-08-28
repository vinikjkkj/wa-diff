__d(
  "getOverlayZIndex",
  ["Style"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var o = n === void 0 ? {} : n,
        a = o.includeStaticPosition,
        i = a === void 0 ? !1 : a,
        l = t,
        s = e;
      l = l || document.body;
      for (var u = []; s && s !== l; ) (u.push(s), (s = s.parentNode));
      if (s !== l) return 0;
      for (var c = u.length - 1; c >= 0; c--) {
        var d = u[c];
        if (i === !0 || r("Style").get(d, "position") != "static") {
          var m = parseInt(r("Style").get(d, "z-index"), 10);
          if (!isNaN(m)) return m;
        }
      }
      return 0;
    }
    l.default = e;
  },
  98,
);
