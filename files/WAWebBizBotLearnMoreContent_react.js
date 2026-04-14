__d(
  "WAWebBizBotLearnMoreContent.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizBotConsumerContentVariant",
    "WAWebBox.react",
    "WAWebBusinessDataSharingIcon.react",
    "WAWebDoubleChevronInCircleIcon.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebLightningIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsPictoMetaDataDoubleChevronIcon.react",
    "WDSIconWdsIcAiFilled.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        iconUpdatedUI: { color: "x110helo", $$css: !0 },
        lightningIconWrapper: {
          stroke: "xc35cvv",
          strokeWidth: "xvlca1e",
          $$css: !0,
        },
        lightningIcon: { color: "x19co3pv", $$css: !0 },
        sectionIcon: { width: "xvy4d1p", $$css: !0 },
        sectionDescription: { color: "x14ug900", $$css: !0 },
      };
    function m() {
      var t = o(
          "WAWebBizBotConsumerContentVariant",
        ).getBizBotConsumerContentVariant(),
        n =
          t ===
          o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant
            .INDIA
            ? null
            : c.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: o("WAWebUISpacing").uiMargin.vert16,
                children: c.jsx(
                  o("WAWebWdsPictoMetaDataDoubleChevronIcon.react")
                    .WdsPictoMetaDataDoubleChevronIcon,
                  { width: 67 },
                ),
              }),
        a = function () {
          var e = o("WAWebABProps").getABPropConfigValue(
              "biz_ai_consumer_tos_update_web",
            ),
            n =
              t ===
              o("WAWebBizBotConsumerContentVariant")
                .BizBotConsumerContentVariant.BRAZIL
                ? e
                  ? s._(
                      /*BTDS*/ "WhatsApp's parent company Meta receives messages when you chat with a business that uses AI from Meta. They may be used to help {=m2} get better and safer.",
                      [
                        s._implicitParam(
                          "=m2",
                          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
                            children: s._(/*BTDS*/ "AI at Meta"),
                          }),
                        ),
                      ],
                    )
                  : s._(
                      /*BTDS*/ "WhatsApp's parent company Meta receives messages when you chat with a business that uses AI from Meta. They may be used to help AI at Meta get better and safer. {=m2}",
                      [
                        s._implicitParam(
                          "=m2",
                          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
                            children: s._(/*BTDS*/ "Learn more"),
                          }),
                        ),
                      ],
                    )
                : e
                  ? s._(
                      /*BTDS*/ "WhatsApp's parent company Meta receives messages when you chat with a business that uses AI from Meta. This helps {=m2} get better and safer.",
                      [
                        s._implicitParam(
                          "=m2",
                          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
                            children: s._(/*BTDS*/ "AI at Meta"),
                          }),
                        ),
                      ],
                    )
                  : s._(
                      /*BTDS*/ "WhatsApp's parent company Meta receives messages when you chat with a business that uses AI from Meta. This helps AI get better and safer. {=m2}",
                      [
                        s._implicitParam(
                          "=m2",
                          c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
                            children: s._(/*BTDS*/ "Learn more"),
                          }),
                        ),
                      ],
                    );
          return c.jsxs(c.Fragment, {
            children: [
              c.jsx(o("WAWebText.react").WAWebTextLarge, {
                weight: "medium",
                children: s._(
                  /*BTDS*/ "About business chats that use AI from Meta",
                ),
              }),
              c.jsx(o("WAWebText.react").WAWebTextTitle, {
                testid: void 0,
                children: n,
              }),
            ],
          });
        },
        i = {
          icon: c.jsx(o("WAWebLightningIcon.react").LightningIcon, {
            width: 24,
            height: 24,
            viewBox: { x: 0, y: -1, width: 13, height: 24 },
            xstyle: d.lightningIconWrapper,
            iconXstyle: [d.iconUpdatedUI, d.lightningIcon],
          }),
          title: s._(
            /*BTDS*/ "Businesses use AI to provide help 24\/7 and offer customized experiences.",
          ),
        },
        l =
          t ===
          o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant
            .ROW
            ? {
                icon: c.jsx(
                  o("WAWebDoubleChevronInCircleIcon.react")
                    .DoubleChevronInCircleIcon,
                  { width: 24, height: 24, iconXstyle: d.iconUpdatedUI },
                ),
                title: s._(
                  /*BTDS*/ "This icon means Meta receives messages to improve AI quality. Meta may use service providers to support this experience. You can stop chatting at any time.",
                ),
              }
            : t ===
                o("WAWebBizBotConsumerContentVariant")
                  .BizBotConsumerContentVariant.INDIA
              ? {
                  icon: c.jsx(
                    o("WAWebBusinessDataSharingIcon.react")
                      .BusinessDataSharingIcon,
                    { width: 24, height: 24, iconXstyle: d.iconUpdatedUI },
                  ),
                  title: s._(
                    /*BTDS*/ "Meta receives messages to improve AI quality. Meta may use service providers to support this experience. You can stop chatting at any time.",
                  ),
                }
              : t ===
                  o("WAWebBizBotConsumerContentVariant")
                    .BizBotConsumerContentVariant.BRAZIL
                ? {
                    icon: c.jsx(
                      o("WAWebDoubleChevronInCircleIcon.react")
                        .DoubleChevronInCircleIcon,
                      { width: 24, height: 24, iconXstyle: d.iconUpdatedUI },
                    ),
                    title: s._(
                      /*BTDS*/ "This icon means Meta receives messages and may use them to improve AI quality. Meta may use service providers to support this experience. You can stop chatting at any time.",
                    ),
                  }
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })(),
        u = {
          icon: c.jsx(r("WDSIconWdsIcAiFilled.react"), {
            width: 24,
            height: 24,
            iconXstyle: d.iconUpdatedUI,
          }),
          title: s._(
            /*BTDS*/ "Messages generated by AI from Meta are marked and may be inaccurate or inappropriate.",
          ),
        };
      return c.jsxs(c.Fragment, {
        children: [
          n,
          c.jsx(r("WAWebBox.react"), {
            flex: !0,
            direction: "vertical",
            rowGap: 8,
            xstyle: [
              o("WAWebUISpacing").uiMargin.top16,
              o("WAWebUISpacing").uiMargin.bottom8,
            ],
            children: a(),
          }),
          [i, l, u].filter(Boolean).map(function (t, n) {
            var a = t.icon,
              i = t.title;
            return c.jsxs(
              o("WAWebFlex.react").FlexRow,
              {
                columnGap: 24,
                className: (e || (e = r("stylex")))(
                  o("WAWebUISpacing").uiMargin.vert10,
                  o("WAWebUISpacing").uiPadding.horiz8,
                ),
                align: "center",
                children: [
                  c.jsx(o("WAWebFlex.react").FlexItem, {
                    shrink: 0,
                    xstyle: d.sectionIcon,
                    children: a,
                  }),
                  c.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: d.sectionDescription,
                    children: i,
                  }),
                ],
              },
              n,
            );
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
