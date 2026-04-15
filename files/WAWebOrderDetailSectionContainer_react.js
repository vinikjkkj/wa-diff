__d(
  "WAWebOrderDetailSectionContainer.react",
  ["WAWebFlex.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.Children,
      c = { container: { rowGap: "xgpatz3", columnGap: "x40hh3e", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        r;
      t[0] !== n ? ((r = u.map(n, m)), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a;
      return (
        t[2] !== r
          ? ((a = s.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: c.container,
              align: "stretch",
              children: r,
            })),
            (t[2] = r),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    function m(e, t) {
      return s.jsxs(s.Fragment, {
        children: [
          t !== 0
            ? s.jsx("div", { className: "xx42vgk xlya59e x178xt8z xqtp20y" })
            : null,
          e,
        ],
      });
    }
    l.default = d;
  },
  98,
);
