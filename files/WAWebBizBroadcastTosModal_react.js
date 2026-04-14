__d(
  "WAWebBizBroadcastTosModal.react",
  [
    "fbt",
    "WAWebBizBroadcastTos",
    "WAWebBroadcastConsts",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebConfirmPopup.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebWdsIllMarketingMessagesIcon.react",
    "WDSIconIcShowChart.react",
    "WDSIconIcTouchApp.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        body: { rowGap: "x1f0uite", $$css: !0 },
        content: { rowGap: "x1j3ira4", $$css: !0 },
        featureIcon: { color: "xhslqc4", $$css: !0 },
        legalFooter: { paddingBottom: "x18d9i69", $$css: !0 },
        legalFooterControls: { paddingTop: "x1p57kb1", $$css: !0 },
        titleSubtitle: { rowGap: "x1f0uite", $$css: !0 },
        valuePropItem: {
          columnGap: "xrdqr27",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        valueProps: { rowGap: "x1qvou4u", $$css: !0 },
      },
      m = { height: 24, width: 24, xstyle: d.featureIcon };
    function p(e) {
      var t,
        n,
        a = e.entryPoint,
        i = e.onAccept,
        l = e.onDismiss,
        p = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl();
      c(
        function () {
          var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.tosNuxViewed(a, e);
        },
        [a],
      );
      var _ = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.tosNuxAcceptClicked(a),
            o("WAWebBizBroadcastTos")
              .acceptBizBroadcastTos()
              .then(function () {
                i();
              })
              .catch(function (e) {
                var t, n;
                (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(
                  a,
                  String(
                    (t =
                      (n = r("getErrorSafe")(e)) == null
                        ? void 0
                        : n.message) != null
                      ? t
                      : e,
                  ),
                ),
                  l());
              }));
        },
        f = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(a),
            l());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Small,
        buttonGroupStyle: d.legalFooterControls,
        okText: s._(/*BTDS*/ "Continue"),
        onOK: _,
        cancelText: s._(/*BTDS*/ "Back"),
        onCancel: f,
        onOverlayClick: f,
        children: u.jsxs((n = o("WAWebFlex.react")).FlexColumn, {
          xstyle: d.content,
          align: "stretch",
          children: [
            u.jsx(n.FlexColumn, {
              align: "center",
              children: u.jsx(
                o("WAWebWdsIllMarketingMessagesIcon.react")
                  .WdsIllMarketingMessagesIcon,
                { width: 180, height: 120 },
              ),
            }),
            u.jsxs(n.FlexColumn, {
              xstyle: d.body,
              align: "stretch",
              children: [
                u.jsxs(n.FlexColumn, {
                  xstyle: d.titleSubtitle,
                  align: "stretch",
                  children: [
                    u.jsx((t = r("WDSText.react")), {
                      type: "Headline1",
                      colorName: "contentDefault",
                      textAlign: "center",
                      children: s._(/*BTDS*/ "Business broadcasts"),
                    }),
                    u.jsxs(t, {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      textAlign: "center",
                      children: [
                        s._(
                          /*BTDS*/ "Reach and chat with customers in more ways.",
                        ),
                        " ",
                        u.jsx(r("WDSTextualLink.react"), {
                          href: p,
                          onClick: function () {
                            return o(
                              "WAWebBusinessBroadcastUserJourneyLogger",
                            ).BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(
                              a,
                              "learn_more",
                            );
                          },
                          children: s._(/*BTDS*/ "Learn more"),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(n.FlexColumn, {
                  xstyle: d.valueProps,
                  align: "stretch",
                  children: [
                    u.jsxs(n.FlexRow, {
                      align: "center",
                      xstyle: d.valuePropItem,
                      children: [
                        u.jsx(
                          r("WDSIconIcTouchApp.react"),
                          babelHelpers.extends({}, m),
                        ),
                        u.jsx(t, {
                          type: "Body1",
                          colorName: "contentDefault",
                          children: s._(
                            /*BTDS*/ "Add buttons so customers can respond instantly.",
                          ),
                        }),
                      ],
                    }),
                    u.jsxs(n.FlexRow, {
                      align: "center",
                      xstyle: d.valuePropItem,
                      children: [
                        u.jsx(
                          r("WDSIconIcShowChart.react"),
                          babelHelpers.extends({}, m),
                        ),
                        u.jsx(t, {
                          type: "Body1",
                          colorName: "contentDefault",
                          children: s._(
                            /*BTDS*/ "Track performance to optimize results.",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx(n.FlexColumn, {
                  align: "center",
                  xstyle: d.legalFooter,
                  children: u.jsx(t, {
                    type: "Body3",
                    colorName: "contentDeemphasized",
                    textAlign: "center",
                    children: s._(
                      /*BTDS*/ "By continuing, you agree to the {=m1} and {=m3}",
                      [
                        s._implicitParam(
                          "=m1",
                          u.jsx(r("WDSTextualLink.react"), {
                            href: o("WAWebBroadcastConsts")
                              .BIZ_BROADCAST_TOS_URL,
                            onClick: function () {
                              return o(
                                "WAWebBusinessBroadcastUserJourneyLogger",
                              ).BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(
                                a,
                                "tos",
                              );
                            },
                            children: s._(
                              /*BTDS*/ "Meta Terms for WhatsApp Business Broadcast Features",
                            ),
                          }),
                        ),
                        s._implicitParam(
                          "=m3",
                          u.jsx(r("WDSTextualLink.react"), {
                            href: o("WAWebBroadcastConsts")
                              .META_PRIVACY_POLICY_URL,
                            onClick: function () {
                              return o(
                                "WAWebBusinessBroadcastUserJourneyLogger",
                              ).BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(
                                a,
                                "privacy_policy",
                              );
                            },
                            children: s._(/*BTDS*/ "Meta Privacy Policy"),
                          }),
                        ),
                      ],
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
