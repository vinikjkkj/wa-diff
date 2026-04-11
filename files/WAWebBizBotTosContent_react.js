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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(8),
        t = o(
          "WAWebBizBotConsumerContentVariant",
        ).getBizBotConsumerContentVariant(),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n =
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
                })),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx(o("WAWebText.react").WAWebTextLarge, {
            weight: "medium",
            textAlign: "center",
            children: s._(
              /*BTDS*/ "Get quick help from business chats that use AI from Meta",
            ),
          })),
          (e[1] = i))
        : (i = e[1]);
      var l = i,
        u;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            icon: c.jsx(
              o("WAWebAiSignalOutlineIcon.react").AiSignalOutlineIcon,
              { width: 24, height: 24, iconXstyle: d.iconUpdatedUI },
            ),
            title: s._(
              /*BTDS*/ "Businesses teach AI to give you helpful answers about their products and services.",
            ),
          }),
          (e[2] = u))
        : (u = e[2]);
      var m = u,
        _;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ =
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
                                href: o(
                                  "WAWebFaqUrl",
                                ).getBizBotTosLearnMoreUrl(),
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
                                href: o(
                                  "WAWebFaqUrl",
                                ).getBizBotTosLearnMoreUrl(),
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
                                c.jsx(
                                  o("WAWebExternalLink.react").ExternalLink,
                                  {
                                    href: o(
                                      "WAWebFaqUrl",
                                    ).getMetaGenAiGuideUrl(),
                                    children: s._(/*BTDS*/ "AI at Meta"),
                                  },
                                ),
                              ),
                              s._implicitParam(
                                "=m5",
                                c.jsx(
                                  o("WAWebExternalLink.react").ExternalLink,
                                  {
                                    href: o(
                                      "WAWebFaqUrl",
                                    ).getBizBotTosLearnMoreUrl(),
                                    children: s._(/*BTDS*/ "Learn more"),
                                  },
                                ),
                              ),
                            ],
                          )
                        : s._(
                            /*BTDS*/ "This icon means WhatsApp's parent company Meta receives these chats and may use them to improve {=m2}.",
                            [
                              s._implicitParam(
                                "=m2",
                                c.jsx(
                                  o("WAWebExternalLink.react").ExternalLink,
                                  {
                                    href: o(
                                      "WAWebFaqUrl",
                                    ).getMetaGenAiGuideUrl(),
                                    children: s._(/*BTDS*/ "AI at Meta"),
                                  },
                                ),
                              ),
                            ],
                          ),
                    }
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })()),
          (e[3] = _))
        : (_ = e[3]);
      var f = _,
        g;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g =
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
                        href: o(
                          "WAWebFaqUrl",
                        ).getWhatsappBrazilBizBotRightsUrl(),
                        children: s._(/*BTDS*/ "rights"),
                      }),
                    ),
                    s._implicitParam(
                      "=m11",
                      c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o(
                          "WAWebFaqUrl",
                        ).getWhatsappBrazilBizBotObjectUrl(),
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
                )),
          (e[4] = g))
        : (g = e[4]);
      var h = g,
        y,
        C;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = c.jsx(r("WAWebBox.react"), {
            flex: !0,
            direction: "vertical",
            rowGap: 8,
            xstyle: [
              o("WAWebUISpacing").uiMargin.top16,
              o("WAWebUISpacing").uiMargin.bottom8,
            ],
            children: l,
          })),
          (C = [m, f].filter(Boolean).map(p)),
          (e[5] = y),
          (e[6] = C))
        : ((y = e[5]), (C = e[6]));
      var b;
      return (
        e[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: o("WAWebUISpacing").uiMargin.vertAuto,
              children: [
                a,
                y,
                C,
                c.jsx(r("WAWebBox.react"), {
                  xstyle: o("WAWebUISpacing").uiMargin.vert8,
                  children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: d.centerText,
                    children: h,
                  }),
                }),
              ],
            })),
            (e[7] = b))
          : (b = e[7]),
        b
      );
    }
    function p(t, n) {
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
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
