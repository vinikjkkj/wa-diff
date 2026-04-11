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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(4),
        n = e.chat;
      if (
        !o(
          "WAWebCommonCTWAConsumerTransparency",
        ).shouldShowConsumerTransparencyDisclosure(n) ||
        o(
          "WAWebCommonCTWAConsumerTransparency",
        ).shouldShowROWConsumerDisclosure()
      )
        return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(
            o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon,
            {
              height: 24,
              width: 24,
              xstyle: [c.iconNewColor, o("WAWebUISpacing").uiMargin.end20],
            },
          )),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [c.businessAccount, o("WAWebUISpacing").uiMargin.top10]),
          (t[1] = l))
        : (l = t[1]);
      var d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            height: 21,
            xstyle: c.iconColour,
          })),
          (t[2] = d))
        : (d = t[2]);
      var m;
      return (
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = u.jsx(r("WAWebDrawerSection.react"), {
              xstyle: l,
              children: u.jsx(r("WAWebDrawerBlock.react"), {
                testid: void 0,
                onClick: o("WAWebConsumerTransparencyModalDialog.react")
                  .showConsumerTransparencyModalDialog,
                side: d,
                children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  children: [i, s._(/*BTDS*/ "About this business chat")],
                }),
              }),
            })),
            (t[3] = m))
          : (m = t[3]),
        m
      );
    }
    l.default = d;
  },
  226,
);
