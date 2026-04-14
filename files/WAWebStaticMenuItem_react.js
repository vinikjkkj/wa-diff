__d(
  "WAWebStaticMenuItem.react",
  ["WAWebFlex.react", "WAWebMenuController.react", "WAWebText.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        separator: { height: "xjm9jq1", backgroundColor: "x4wrhlh", $$css: !0 },
      };
    function c(e) {
      var t = e.children,
        n = o("WAWebMenuController.react").useMenu(),
        r = n.size;
      return s.jsx(o("WAWebFlex.react").FlexItem, {
        padding: r === "small" ? 8 : 16,
        shrink: 0,
        children: s.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
          children: t,
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
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
