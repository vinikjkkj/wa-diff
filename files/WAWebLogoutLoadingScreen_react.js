__d(
  "WAWebLogoutLoadingScreen.react",
  [
    "fbt",
    "WAPromiseDelays",
    "WAWebProgressBar.react",
    "WAWebWaLogoIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = { icon: { color: "xsq9etf", marginTop: "x1cm6mvd", $$css: !0 } },
      _ = 450;
    function f() {
      var e = o("react-compiler-runtime").c(11),
        t = m(0),
        n = t[0],
        a = t[1],
        i,
        l;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            o("WAPromiseDelays")
              .delayMs(_)
              .finally(function () {
                a(100);
              });
          }),
          (l = []),
          (e[0] = i),
          (e[1] = l))
        : ((i = e[0]), (l = e[1])),
        d(i, l));
      var c, f, g, h;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x1n2onr6 x16uhe5s x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x6egj2d",
          }),
          (f = u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
            height: 52,
            xstyle: p.icon,
          })),
          (g = u.jsx("div", {
            className: "x1c3i2sq x14ug900 xk82a7y x1nmyh1g",
            children: s._(/*BTDS*/ "Logging out"),
          })),
          (h = {
            className:
              "x1n2onr6 x1oysuqx xqu0tyb xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 xevwqry",
          }),
          (e[2] = c),
          (e[3] = f),
          (e[4] = g),
          (e[5] = h))
        : ((c = e[2]), (f = e[3]), (g = e[4]), (h = e[5]));
      var y;
      e[6] !== n
        ? ((y = u.jsx(
            "div",
            babelHelpers.extends({}, h, {
              children: u.jsx(r("WAWebProgressBar.react"), { value: n }),
            }),
          )),
          (e[6] = n),
          (e[7] = y))
        : (y = e[7]);
      var C;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx("div", {
            className: "x1f6kntn x17fgdl5 xhslqc4 xo1l8bm x1ci5j9l",
            children: s._(/*BTDS*/ "Do not close this window"),
          })),
          (e[8] = C))
        : (C = e[8]);
      var b;
      return (
        e[9] !== y
          ? ((b = u.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [f, g, y, C] }),
            )),
            (e[9] = y),
            (e[10] = b))
          : (b = e[10]),
        b
      );
    }
    l.default = f;
  },
  226,
);
