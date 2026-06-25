__d(
  "WDSSvgIconHelpers",
  [],
  function (t, n, r, o, a, i) {
    var e = ["height", "iconXstyle", "viewBox", "width"];
    function l(e, t, n, r, o, a) {
      var i = e != null || t != null,
        l = a;
      if (n != null) {
        var s = n.height,
          u = s === void 0 ? 0 : s,
          c = n.width,
          d = c === void 0 ? 0 : c,
          m = n.x,
          p = m === void 0 ? 0 : m,
          _ = n.y,
          f = _ === void 0 ? 0 : _;
        l = [p, f, d, u].join(" ");
      }
      return { height: i ? e : r, width: i ? t : o, viewBox: l };
    }
    function s(t, n, r, o) {
      var a = t.height,
        i = t.iconXstyle,
        s = t.viewBox,
        u = t.width,
        c = babelHelpers.objectWithoutPropertiesLoose(t, e),
        d = l(a, u, s, n, r, o),
        m = d.height,
        p = d.viewBox,
        _ = d.width;
      return { height: m, iconXstyle: i, otherProps: c, viewBox: p, width: _ };
    }
    ((i.resolveSvgSizing = l), (i.resolveSvgIcon = s));
  },
  66,
);
