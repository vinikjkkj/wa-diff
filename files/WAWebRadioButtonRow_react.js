__d(
  "WAWebRadioButtonRow.react",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.choiceText,
        a = e.isChosen,
        i = e.onChoose,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = s.jsx(r("WAWebCheckBoxRound.react"), {
            checked: a,
            hover: !1,
            radio: !0,
            onClick: i,
            systemUncheckedColor: !0,
          })),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var u;
      return (
        t[3] !== n || t[4] !== i || t[5] !== l
          ? ((u = s.jsx(r("WAWebCellFrame.react"), {
              primary: n,
              onClick: i,
              theme: "radio-button-row",
              image: l,
            })),
            (t[3] = n),
            (t[4] = i),
            (t[5] = l),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    l.default = u;
  },
  98,
);
