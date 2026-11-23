__d(
  "WAWebMediaEditorToolbarOutline",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarButton.react",
    "WDSIconWdsIcPathSmooth.react",
    "WDSIconWdsIcPathStraight.react",
    "WDSMargins.stylex",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.canReset,
        a = e.onReset,
        i = e.onSmoothingToggle,
        l = e.smoothing;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        children: [
          u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: [
              (t = o("WDSMargins.stylex")).wdsMargins.marginVer0,
              t.wdsMargins.marginHor8,
            ],
            icon: u.jsx(r("WDSIconWdsIcPathSmooth.react"), {
              height: 24,
              width: 24,
              displayInline: !0,
              testid: "outline-smooth",
            }),
            title: s._(/*BTDS*/ ""),
            selected: l,
            onClick: function () {
              return i(!0);
            },
          }),
          u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: [t.wdsMargins.marginVer0, t.wdsMargins.marginHor8],
            icon: u.jsx(r("WDSIconWdsIcPathStraight.react"), {
              height: 24,
              width: 24,
              displayInline: !0,
              testid: "outline-straight",
            }),
            title: s._(/*BTDS*/ ""),
            selected: !l,
            onClick: function () {
              return i(!1);
            },
          }),
          u.jsx(r("WAWebMediaEditorToolbarButton.react"), {
            xstyle: [t.wdsMargins.marginVer0, t.wdsMargins.marginHor8],
            onClick: a,
            disabled: !n,
            children: s._(/*BTDS*/ ""),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
