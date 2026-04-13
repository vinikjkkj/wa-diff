__d(
  "WAWebStaticMenuItem.react",
  [
    "WAWebFlex.react",
    "WAWebMenuController.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        separator: { height: "xjm9jq1", backgroundColor: "x4wrhlh", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = o("WAWebMenuController.react").useMenu(),
        a = r.size,
        i = a === "small" ? 8 : 16,
        l;
      t[0] !== n
        ? ((l = s.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
            children: n,
          })),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u;
      return (
        t[2] !== i || t[3] !== l
          ? ((u = s.jsx(o("WAWebFlex.react").FlexItem, {
              padding: i,
              shrink: 0,
              children: l,
            })),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function d() {
      return s.jsx(o("WAWebFlex.react").FlexItem, {
        xstyle: u.separator,
        margin: [8, 16],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.MenuHeading = c),
      (l.MenuSeparator = d));
  },
  98,
);
