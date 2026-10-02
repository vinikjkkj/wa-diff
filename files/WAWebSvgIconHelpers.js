__d(
  "WAWebSvgIconHelpers",
  [
    "WAWebSvgComponentBase",
    "WDSSvgIconHelpers",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
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
        s = t.name,
        u = t.viewBox,
        c = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p = d(i, c, u, r, o, a),
        _ = p.height,
        f = p.viewBox,
        g = p.width;
      return {
        height: _,
        iconName: s != null ? s : n,
        iconXstyle: l,
        otherProps: m,
        viewBox: f,
        width: g,
      };
    }
    function p(e, t, n, a, i, l) {
      var u = o("WDSSvgIconHelpers").createSvgIconChildren(l);
      function d(l) {
        var d = o("react-compiler-runtime").c(24),
          p,
          _,
          f,
          g,
          h,
          y,
          C,
          b,
          v;
        d[0] !== l
          ? ((_ = m(l, e, t, n, a)),
            (p = o("WAWebSvgComponentBase").BaseSvgSpan),
            (b = _.otherProps),
            (v = _.iconName),
            (f = _.viewBox),
            (g = _.height),
            (h = _.width),
            (y = "xMidYMid meet"),
            (C = (s || (s = r("stylex")))(_.iconXstyle)),
            (d[0] = l),
            (d[1] = p),
            (d[2] = _),
            (d[3] = f),
            (d[4] = g),
            (d[5] = h),
            (d[6] = y),
            (d[7] = C),
            (d[8] = b),
            (d[9] = v))
          : ((p = d[1]),
            (_ = d[2]),
            (f = d[3]),
            (g = d[4]),
            (h = d[5]),
            (y = d[6]),
            (C = d[7]),
            (b = d[8]),
            (v = d[9]));
        var S;
        d[10] !== _.iconName
          ? ((S = c.jsx("title", { children: _.iconName })),
            (d[10] = _.iconName),
            (d[11] = S))
          : (S = d[11]);
        var R;
        d[12] !== f ||
        d[13] !== g ||
        d[14] !== h ||
        d[15] !== y ||
        d[16] !== C ||
        d[17] !== S
          ? ((R = c.jsxs(
              "svg",
              babelHelpers.extends(
                {
                  viewBox: f,
                  height: g,
                  width: h,
                  preserveAspectRatio: y,
                  className: C,
                },
                i,
                { children: [S, u] },
              ),
            )),
            (d[12] = f),
            (d[13] = g),
            (d[14] = h),
            (d[15] = y),
            (d[16] = C),
            (d[17] = S),
            (d[18] = R))
          : (R = d[18]);
        var L;
        return (
          d[19] !== p || d[20] !== b || d[21] !== v || d[22] !== R
            ? ((L = c.jsx(
                p,
                babelHelpers.extends({}, b, { name: v, children: R }),
              )),
              (d[19] = p),
              (d[20] = b),
              (d[21] = v),
              (d[22] = R),
              (d[23] = L))
            : (L = d[23]),
          L
        );
      }
      return d;
    }
    ((l.resolveSvgIcon = m), (l.createWAWebIcon = p));
  },
  98,
);
