__d(
  "WAWebRadioButtonRow.react",
  ["WAWebCellFrame.react", "WAWebCheckBoxRound.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.choiceText,
        n = e.isChosen,
        o = e.onChoose;
      return s.jsx(r("WAWebCellFrame.react"), {
        primary: t,
        onClick: o,
        theme: "radio-button-row",
        image: s.jsx(r("WAWebCheckBoxRound.react"), {
          checked: n,
          hover: !1,
          radio: !0,
          onClick: o,
          systemUncheckedColor: !0,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
