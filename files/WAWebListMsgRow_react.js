__d(
  "WAWebListMsgRow.react",
  [
    "WAWebCellFrame.react",
    "WAWebCheckBoxRound.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onClick,
        a = e.row,
        i = e.selected,
        l;
      t[0] !== n || t[1] !== a.title || t[2] !== i
        ? ((l = s.jsx(r("WAWebCheckBoxRound.react"), {
            checked: i,
            hover: !1,
            radio: !0,
            onClick: n,
            systemUncheckedColor: !0,
            ariaLabel: a.title,
          })),
          (t[0] = n),
          (t[1] = a.title),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var u;
      return (
        t[4] !== n || t[5] !== a.description || t[6] !== a.title || t[7] !== l
          ? ((u = s.jsx(r("WAWebCellFrame.react"), {
              primary: a.title,
              secondary: a.description,
              theme: "list-msg",
              onClick: n,
              detail: l,
            })),
            (t[4] = n),
            (t[5] = a.description),
            (t[6] = a.title),
            (t[7] = l),
            (t[8] = u))
          : (u = t[8]),
        u
      );
    }
    l.default = u;
  },
  98,
);
