__d(
  "WAWebOrderDetailSectionContainer.react",
  ["WAWebFlex.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.Children,
      c = { container: { rowGap: "xgpatz3", columnGap: "x40hh3e", $$css: !0 } };
    function d(e) {
      var t = e.children;
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: c.container,
        align: "stretch",
        children: u.map(t, function (e, t) {
          return s.jsxs(s.Fragment, {
            children: [
              t !== 0
                ? s.jsx("div", {
                    className: "xx42vgk xlya59e x178xt8z xqtp20y",
                  })
                : null,
              e,
            ],
          });
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
