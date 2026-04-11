__d(
  "WAWebMediaTimeLeftEta.react",
  ["fbt", "WAWebClock", "react", "stylex", "useWAWebTimeLeftMs"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useRef,
      m = 10 * 1e3;
    function p(t) {
      var n = t.children,
        a = t.loadedSize,
        i = t.sampling,
        l = i === void 0 ? 1 : i,
        u = t.size,
        p = t.xstyle,
        _ = d(!1),
        f = d(0),
        g = o("useWAWebTimeLeftMs").useTimeLeftMs(a, u);
      return (
        !_.current &&
          ++f.current >= l &&
          g != null &&
          g >= m &&
          (_.current = !0),
        _.current === !1 ||
        u == null ||
        a == null ||
        a >= u ||
        g == null ||
        g === 0
          ? null
          : c.jsxs(c.Fragment, {
              children: [
                c.jsx(
                  "span",
                  babelHelpers.extends(
                    { "data-testid": void 0 },
                    (e || (e = r("stylex"))).props(p),
                    {
                      children: s._(/*BTDS*/ "{progress}\u0025 ({eta})", [
                        s._param(
                          "progress",
                          c.jsx("span", {
                            className: "x1rg5ohu",
                            children: Math.floor((a / u) * 100),
                          }),
                        ),
                        s._param(
                          "eta",
                          o("WAWebClock").Clock.timeLeftStr(Math.ceil(g / 1e3)),
                        ),
                      ]),
                    },
                  ),
                ),
                n,
              ],
            })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
