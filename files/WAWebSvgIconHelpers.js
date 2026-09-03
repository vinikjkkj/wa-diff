__d(
  "WAWebSvgIconHelpers",
  [],
  function (t, n, r, o, a, i) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"];
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
    function s(t, n, r, o, a) {
      var i = t.height,
        s = t.iconXstyle,
        u = t.name,
        c = t.viewBox,
        d = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p = l(i, d, c, r, o, a),
        _ = p.height,
        f = p.viewBox,
        g = p.width;
      return {
        height: _,
        iconName: u != null ? u : n,
        iconXstyle: s,
        otherProps: m,
        viewBox: f,
        width: g,
      };
    }
    i.resolveSvgIcon = s;
  },
  66,
);
