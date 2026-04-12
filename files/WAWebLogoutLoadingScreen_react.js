__d(
  "WAWebLogoutLoadingScreen.react",
  [
    "fbt",
    "WAPromiseDelays",
    "WAWebProgressBar.react",
    "WAWebWaLogoIcon.react",
    "react",
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
      var e = m(0),
        t = e[0],
        n = e[1];
      return (
        d(function () {
          o("WAPromiseDelays")
            .delayMs(_)
            .finally(function () {
              n(100);
            });
        }, []),
        u.jsxs("div", {
          className:
            "x1n2onr6 x16uhe5s x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x6egj2d",
          children: [
            u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
              height: 52,
              xstyle: p.icon,
            }),
            u.jsx("div", {
              className: "x1c3i2sq x14ug900 xk82a7y x1nmyh1g",
              children: s._(/*BTDS*/ "Logging out"),
            }),
            u.jsx("div", {
              className:
                "x1n2onr6 x1oysuqx xqu0tyb xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 xevwqry",
              children: u.jsx(r("WAWebProgressBar.react"), { value: t }),
            }),
            u.jsx("div", {
              className: "x1f6kntn x17fgdl5 xhslqc4 xo1l8bm x1ci5j9l",
              children: s._(/*BTDS*/ "Do not close this window"),
            }),
          ],
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
