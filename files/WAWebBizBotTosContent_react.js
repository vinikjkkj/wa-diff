__d(
  "WAWebBizBotTosContent.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAiSignalOutlineIcon.react",
    "WAWebBizBotConsumerContentVariant",
    "WAWebBox.react",
    "WAWebBusinessDataSharingIcon.react",
    "WAWebDoubleChevronInCircleIcon.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsPictoMetaDataDoubleChevronIcon.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        centerText: { textAlign: "x2b8uid", $$css: !0 },
        iconUpdatedUI: { color: "x110helo", $$css: !0 },
        sectionDescription: { color: "x14ug900", $$css: !0 },
        sectionIcon: { width: "xvy4d1p", $$css: !0 },
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
        a = c.jsx(o("WAWebText.react").WAWebTextLarge, {
          weight: "medium",
          textAlign: "center",
          children: s._(
            /*BTDS*/ "Get quick help from business chats that use AI from Meta",
          ),
        }),
        i = {
          icon: c.jsx(o("WAWebAiSignalOutlineIcon.react").AiSignalOutlineIcon, {
            width: 24,
            height: 24,
            iconXstyle: d.iconUpdatedUI,
          }),
          title: s._(
            /*BTDS*/ "Businesses teach AI to give you helpful answers about their products and services.",
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
                  /*BTDS*/ "This icon means WhatsApp's parent company Meta receives these chats to improve {=m2}. You can stop chatting at any time. {=m5}",
                  [
                    s._implicitParam(
                      "=m2",
                      c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
                        children: s._(/*BTDS*/ "AI at Meta"),
                      }),
                    ),
                    s._implicitParam(
                      "=m5",
                      c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
                        children: s._(/*BTDS*/ "Learn more"),
                      }),
                    ),
                  ],
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
                  title: o("WAWebABProps").getABPropConfigValue(
                    "biz_ai_consumer_tos_update_web",
                  )
                    ? s._(
                        /*BTDS*/ "WhatsApp's parent company Meta receives these chats to improve {=m2}. You can stop chatting at any time. {=m5}",
                        [
                          s._implicitParam(
                            "=m2",
                            c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                              href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
                              children: s._(/*BTDS*/ "AI at Meta"),
                            }),
                          ),
                          s._implicitParam(
                            "=m5",
                            c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                              href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
                              children: s._(/*BTDS*/ "Learn more"),
                            }),
                          ),
                        ],
                      )
                    : s._(
                        /*BTDS*/ "WhatsApp's parent company Meta receives these chats to improve AI quality. You can stop chatting at any time. {=m2}",
                        [
                          s._implicitParam(
                            "=m2",
                            c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                              href: o("WAWebFaqUrl").getBizBotTosLearnMoreUrl(),
                              children: s._(/*BTDS*/ "Learn more"),
                            }),
                          ),
                        ],
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
                    title: o("WAWebABProps").getABPropConfigValue(
                      "biz_ai_consumer_tos_update_web",
                    )
                      ? s._(
                          /*BTDS*/ "This icon means WhatsApp's parent company Meta receives these chats and may use them to improve {=m2}. You can stop chatting at any time. {=m5}",
                          [
                            s._implicitParam(
                              "=m2",
                              c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                                href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
                                children: s._(/*BTDS*/ "AI at Meta"),
                              }),
                            ),
                            s._implicitParam(
                              "=m5",
                              c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                                href: o(
                                  "WAWebFaqUrl",
                                ).getBizBotTosLearnMoreUrl(),
                                children: s._(/*BTDS*/ "Learn more"),
                              }),
                            ),
                          ],
                        )
                      : s._(
                          /*BTDS*/ "This icon means WhatsApp's parent company Meta receives these chats and may use them to improve {=m2}.",
                          [
                            s._implicitParam(
                              "=m2",
                              c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                                href: o("WAWebFaqUrl").getMetaGenAiGuideUrl(),
                                children: s._(/*BTDS*/ "AI at Meta"),
                              }),
                            ),
                          ],
                        ),
                  }
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })(),
        u =
          t ===
          o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant
            .BRAZIL
            ? s._(
                /*BTDS*/ "Your personal messages remain end-to-end encrypted. By chatting, you agree to Meta's {=m2} and {=m5}. Learn more about your {=m7} and how to {=m11}. Your use of WhatsApp is governed by {=m14}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotTermsUrl(),
                      children: s._(/*BTDS*/ "AI terms"),
                    }),
                  ),
                  s._implicitParam(
                    "=m5",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
                      children: s._(/*BTDS*/ "Privacy Policy"),
                    }),
                  ),
                  s._implicitParam(
                    "=m7",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getWhatsappBrazilBizBotRightsUrl(),
                      children: s._(/*BTDS*/ "rights"),
                    }),
                  ),
                  s._implicitParam(
                    "=m11",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getWhatsappBrazilBizBotObjectUrl(),
                      children: s._(/*BTDS*/ "object"),
                    }),
                  ),
                  s._implicitParam(
                    "=m14",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o(
                        "WAWebFaqUrl",
                      ).getWhatsappPrivacyPolicyBrazilUrl(),
                      children: s._(/*BTDS*/ "WhatsApp's Privacy Policy"),
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Your personal messages remain end-to-end encrypted. By chatting, you agree to Meta's {=m2} and {=m5}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotTermsUrl(),
                      children: s._(/*BTDS*/ "AI Terms"),
                    }),
                  ),
                  s._implicitParam(
                    "=m5",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
                      children: s._(/*BTDS*/ "Privacy Policy"),
                    }),
                  ),
                ],
              );
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        xstyle: o("WAWebUISpacing").uiMargin.vertAuto,
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
            children: a,
          }),
          [i, l].filter(Boolean).map(function (t, n) {
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
          c.jsx(r("WAWebBox.react"), {
            xstyle: o("WAWebUISpacing").uiMargin.vert8,
            children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
              xstyle: d.centerText,
              children: u,
            }),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
