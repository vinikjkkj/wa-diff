__d(
  "WAWebOrderAddItem",
  ["WAWebCellFrame.react", "WAWebOrderIcons", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.onClick,
        n = e.title;
      return s.jsx(r("WAWebCellFrame.react"), {
        testid: void 0,
        image: s.jsx(o("WAWebOrderIcons").AddItemIcon, {}),
        primary: n,
        theme: "add-order-item",
        onClick: t,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
