__d(
  "WAWebReorderRefreshedIcons",
  ["WDSIconIcSyncAlt.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        rotated: { display: "x1rg5ohu", transform: "x1iffjtl", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.xstyle
        ? ((n = [e.xstyle, u.rotated]), (t[0] = e.xstyle), (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = s.jsx(
              r("WDSIconIcSyncAlt.react"),
              babelHelpers.extends(
                { testid: "transfer-refreshed", height: 24, width: 24 },
                e,
                { xstyle: n },
              ),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    l.default = c;
  },
  98,
);
