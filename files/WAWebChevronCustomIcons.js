__d(
  "WAWebChevronCustomIcons",
  ["WDSIconIcChevronRight.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        reversed: { display: "x1rg5ohu", rotate: "x1qul50q", $$css: !0 },
        rotatedUp: { display: "x1rg5ohu", rotate: "x7lonkb", $$css: !0 },
        rotatedDown: { display: "x1rg5ohu", rotate: "xq77vm1", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.xstyle
        ? ((n = [e.xstyle, u.reversed]), (t[0] = e.xstyle), (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = s.jsx(
              r("WDSIconIcChevronRight.react"),
              babelHelpers.extends({ height: 30, width: 30 }, e, { xstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.xstyle
        ? ((n = [e.xstyle, u.rotatedUp]), (t[0] = e.xstyle), (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = s.jsx(
              r("WDSIconIcChevronRight.react"),
              babelHelpers.extends({ height: 30, width: 30 }, e, { xstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.xstyle
        ? ((n = [e.xstyle, u.rotatedDown]), (t[0] = e.xstyle), (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = s.jsx(
              r("WDSIconIcChevronRight.react"),
              babelHelpers.extends({ height: 30, width: 30 }, e, { xstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    ((l.ChevronLeftCustomIcon = c),
      (l.ChevronUpCustomIcon = d),
      (l.ChevronDownCustomIcon = m));
  },
  98,
);
