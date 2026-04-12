__d(
  "WAWebBusinessContactDisclosureSection.react",
  [
    "fbt",
    "WAWebChevronIcon.react",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebConsumerTransparencyModalDialog.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        businessAccount: { fontSize: "x1jchvi3", $$css: !0 },
        iconColour: { color: "xhslqc4", $$css: !0 },
        iconNewColor: { color: "xhslqc4", $$css: !0 },
      };
    function d(e) {
      var t = e.chat;
      if (
        !o(
          "WAWebCommonCTWAConsumerTransparency",
        ).shouldShowConsumerTransparencyDisclosure(t) ||
        o(
          "WAWebCommonCTWAConsumerTransparency",
        ).shouldShowROWConsumerDisclosure()
      )
        return null;
      var n = u.jsx(
        o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon,
        {
          height: 24,
          width: 24,
          xstyle: [c.iconNewColor, o("WAWebUISpacing").uiMargin.end20],
        },
      );
      return u.jsx(r("WAWebDrawerSection.react"), {
        xstyle: [c.businessAccount, o("WAWebUISpacing").uiMargin.top10],
        children: u.jsx(r("WAWebDrawerBlock.react"), {
          testid: void 0,
          onClick: o("WAWebConsumerTransparencyModalDialog.react")
            .showConsumerTransparencyModalDialog,
          side: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            height: 21,
            xstyle: c.iconColour,
          }),
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [n, s._(/*BTDS*/ "About this business chat")],
          }),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
