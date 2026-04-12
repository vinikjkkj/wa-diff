__d(
  "WAWebConnectedPillButtons.react",
  [
    "WAWebCheckmarkIcon.react",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        isSelected: { color: "xk4n5i7", $$css: !0 },
        singlePill: {
          minWidth: "xm5golx",
          height: "x1vqgdyp",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          fontSize: "x1f6kntn",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        isSelectedBackground: { backgroundColor: "x1abdmlv", $$css: !0 },
        middle: { marginInlineEnd: "xjn30re", $$css: !0 },
        first: {
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x1ga7v0g",
          borderEndEndRadius: "x16uus16",
          borderEndStartRadius: "x709u02",
          $$css: !0,
        },
        last: {
          borderStartStartRadius: "x15mokao",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "xbiv7yw",
          $$css: !0,
        },
      },
      c = 18;
    function d(e) {
      var t = e.isSelected,
        n = e.onClick,
        a = e.testid,
        i = e.title,
        l = e.xstyle;
      return s.jsx(r("WAWebUnstyledButton.react"), {
        xstyle: [u.singlePill, l, t && u.isSelectedBackground],
        testid: void 0,
        onClick: n,
        children: s.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          xstyle: o("WAWebUISpacing").uiMargin.horiz6,
          children: [
            t &&
              s.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                width: c,
                height: c,
                xstyle: [o("WAWebUISpacing").uiMargin.end7, u.isSelected],
              }),
            s.jsx(
              "span",
              babelHelpers.extends(
                {},
                { 0: {}, 1: { className: "xk4n5i7" } }[!!t << 0],
                { children: i },
              ),
            ),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.currentlySelected,
        n = e.onChange,
        r = e.pills;
      return r.length < 2
        ? s.jsx(s.Fragment, {})
        : s.jsx(o("WAWebFlex.react").FlexRow, {
            children: r.map(function (e, o) {
              return s.jsx(
                d,
                {
                  onClick: function () {
                    return n(e.id);
                  },
                  isSelected: e.id === t,
                  title: e.title,
                  testid: void 0,
                  xstyle: [
                    o === 0 && u.first,
                    o !== r.length - 1 && u.middle,
                    o === r.length - 1 && u.last,
                  ],
                },
                "connected-pill-button-" + e.id.toString(),
              );
            }),
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
