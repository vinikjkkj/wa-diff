__d(
  "WAWebListMsgRow.react",
  ["WAWebCellFrame.react", "WAWebCheckBoxRound.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.onClick,
        n = e.row,
        o = e.selected;
      return s.jsx(r("WAWebCellFrame.react"), {
        primary: n.title,
        secondary: n.description,
        theme: "list-msg",
        onClick: t,
        detail: s.jsx(r("WAWebCheckBoxRound.react"), {
          checked: o,
          hover: !1,
          radio: !0,
          onClick: t,
          systemUncheckedColor: !0,
          ariaLabel: n.title,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
