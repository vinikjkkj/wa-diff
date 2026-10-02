__d(
  "WDSSvgIconHelpers",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
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
    function m(t, n, r, o) {
      var a = t.height,
        i = t.iconXstyle,
        l = t.viewBox,
        s = t.width,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = d(a, s, l, n, r, o),
        m = c.height,
        p = c.viewBox,
        _ = c.width;
      return { height: m, iconXstyle: i, otherProps: u, viewBox: p, width: _ };
    }
    function p(e) {
      return typeof e == "string"
        ? c.jsx("path", { fill: "currentColor", d: e })
        : e.map(_);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      if (typeof e == "string") return e;
      var n = e[0],
        r = e[1],
        o = e[2];
      return c.createElement(
        n,
        babelHelpers.extends({}, r, { key: t }),
        o == null ? void 0 : o.map(_),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n, o, a, l) {
      var u = p(l);
      function d(i) {
        var l = m(i, t, n, o);
        return c.jsx(
          r("WDSSvgComponentBase.react"),
          babelHelpers.extends({}, l.otherProps, {
            children: c.jsxs(
              "svg",
              babelHelpers.extends(
                {
                  viewBox: l.viewBox,
                  height: l.height,
                  width: l.width,
                  preserveAspectRatio: "xMidYMid meet",
                  className: (s || (s = r("stylex")))(l.iconXstyle),
                },
                a,
                { children: [c.jsx("title", { children: e }), u] },
              ),
            ),
          }),
        );
      }
      return ((d.displayName = d.name + " [from " + i.id + "]"), d);
    }
    ((l.resolveSvgIcon = m),
      (l.createSvgIconChildren = p),
      (l.createWDSIcon = f));
  },
  98,
);
