__d(
  "WAWebOrderDetailRadioButton.react",
  [
    "WAWebCheckBoxRound.react",
    "WAWebClickable.react",
    "WAWebFlex.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        paddingEnd24: { paddingInlineEnd: "xyo0t3i", $$css: !0 },
        paddingStart12: { paddingInlineStart: "x1iw51ew", $$css: !0 },
      };
    function c(e) {
      var t = e.checked,
        n = e.isCanceled,
        a = e.label,
        i = e.onClick,
        l = e.testid;
      return s.jsx(o("WAWebClickable.react").Clickable, {
        onClick: i,
        dataTestId: l != null ? l : "",
        children: s.jsxs(o("WAWebFlex.react").FlexRow, {
          children: [
            s.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: [u.paddingStart12, u.paddingEnd24],
              children: s.jsx(r("WAWebCheckBoxRound.react"), {
                checked: t,
                radio: !0,
                hover: !1,
                systemUncheckedColor: !0,
                onClick: function () {
                  return void i();
                },
              }),
            }),
            s.jsx("div", { className: n ? "x30a034" : null, children: a }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
