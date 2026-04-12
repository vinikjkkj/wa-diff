__d(
  "WAWebBusinessProfileIconSection.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebPencilRefreshedIcon.react",
    "WAWebStylesEnv",
    "WAWebUISpacing",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        disabled: { color: "xhslqc4", $$css: !0 },
        editPencil: { color: "xhslqc4", $$css: !0 },
        fontSmoothing: {
          "-moz-osx-font-smoothing": "xlh3980",
          "-webkit-font-smoothing": "xvmahel",
          $$css: !0,
        },
        sectionEmptyText: { color: "xhslqc4", fontSize: "x1lkfr7t", $$css: !0 },
        sectionMain: {
          flexBasis: "x1t1x2f9",
          flexGrow: "x1iyjqo2",
          lineHeight: "x37zpob",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        sectionPrimaryIcon: {
          color: "xhslqc4",
          flexShrink: "x2lah0s",
          width: "xvy4d1p",
          $$css: !0,
        },
        sectionPrimaryIconSvg: {
          height: "xxk0z11",
          width: "xvy4d1p",
          $$css: !0,
        },
      },
      d = n("$InternalEnum")({
        SmallMargin: "small-margin",
        NoMargin: "no-margin",
        NoMarginSmallGutter: "no-margin-small-gutter",
      });
    function m(e) {
      var t = e.Icon,
        n = e.content,
        a = e.disabled,
        i = e.editPencilXstyle,
        l = e.emptyText,
        m = e.fieldName,
        p = e.onEdit,
        _ = e.svgXstyle,
        f = e.testid,
        g = e.theme,
        h = e.type,
        y = h === void 0 ? "field" : h,
        C = e.xstyle,
        b = p
          ? u.jsx("div", {
              "data-testid": void 0,
              children: u.jsx(r("WDSButton.react"), {
                Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                xstyle: [c.editPencil, i],
                onPress: p,
                variant: "borderless",
                directional: !0,
                "aria-label": s._(/*BTDS*/ "Click to edit {fieldName}", [
                  s._param("fieldName", m),
                ]),
              }),
            })
          : void 0,
        v = l != null && !n,
        S = v ? l : n,
        R = t ? u.jsx(t, { iconXstyle: [c.sectionPrimaryIconSvg, _] }) : null;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: [
          o("WAWebUISpacing").uiMargin.top32,
          g === d.SmallMargin && o("WAWebUISpacing").uiMargin.top16,
          (g === d.NoMargin || g === d.NoMarginSmallGutter) &&
            o("WAWebUISpacing").uiMargin.top0,
        ],
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            testid: void 0,
            xstyle: [
              c.sectionPrimaryIcon,
              o("WAWebUISpacing").uiMargin.end28,
              y === "field" && o("WAWebUISpacing").uiMargin.top6,
              g === d.NoMarginSmallGutter && o("WAWebUISpacing").uiMargin.end7,
              C,
            ],
            children: R,
          }),
          u.jsx(o("WAWebFlex.react").FlexItem, {
            testid: void 0,
            xstyle: [
              c.sectionMain,
              o("WAWebUISpacing").uiPadding.end2,
              y === "container" && o("WAWebUISpacing").uiMargin.top4,
              v && c.sectionEmptyText,
              v && o("WAWebStylesEnv").isOSMac && c.fontSmoothing,
              a === !0 && c.disabled,
            ],
            children: S,
          }),
          b,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IconSectionTheme = d),
      (l.IconSection = m));
  },
  226,
);
