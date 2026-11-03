__d(
  "WAWebSvgIconHelpers",
  ["WAWebSvgComponentBase", "WDSSvgIconHelpers", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react"));
    function d(e, t, n, r, o, a) {
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
    function m(t, n, r, o, a) {
      var i = t.height,
        l = t.iconXstyle,
        s = t.innerStyles,
        u = t.name,
        c = t.viewBox,
        m = t.width,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _ = d(i, m, c, r, o, a),
        f = _.height,
        g = _.viewBox,
        h = _.width;
      return {
        height: f,
        iconName: u != null ? u : n,
        iconXstyle: l,
        otherProps: p,
        viewBox: g,
        width: h,
      };
    }
    function p(e, t, n, a, l, u) {
      var d = o("WDSSvgIconHelpers").createSvgIconChildren(u);
      function p(i) {
        var u = m(i, e, t, n, a);
        return c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({}, u.otherProps, {
            name: u.iconName,
            children: c.jsxs(
              "svg",
              babelHelpers.extends(
                {
                  viewBox: u.viewBox,
                  height: u.height,
                  width: u.width,
                  preserveAspectRatio: "xMidYMid meet",
                },
                (s || (s = r("stylex"))).props(u.iconXstyle),
                l,
                { children: [c.jsx("title", { children: u.iconName }), d] },
              ),
            ),
          }),
        );
      }
      return ((p.displayName = p.name + " [from " + i.id + "]"), p);
    }
    ((l.resolveSvgIcon = m), (l.createWAWebIcon = p));
  },
  98,
);
