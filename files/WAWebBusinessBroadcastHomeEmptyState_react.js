__d(
  "WAWebBusinessBroadcastHomeEmptyState.react",
  [
    "WAWebBizBroadcastHomeCreateAudienceButton.react",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebWamEnumSurfaceType",
    "WAWebWdsIllMarketingMessagesIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        buttonsContainer: {
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          $$css: !0,
        },
        content: {
          alignItems: "x6s0dn4",
          rowGap: "xka5s13",
          columnGap: "xeah0mx",
          maxWidth: "x1j9u4d2",
          $$css: !0,
        },
        subtitleContainer: {
          rowGap: "x129bwdz",
          columnGap: "x1trrmfo",
          $$css: !0,
        },
        textContainer: { rowGap: "x1f0uite", columnGap: "xs2akgl", $$css: !0 },
      };
    function c(e) {
      var t = e.entryPoint,
        n = e.onCreateAudience,
        a = e.onCreateBroadcast,
        i = e.onUploadSuccess,
        l = e.showFooterButtons,
        c = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl();
      return s.jsx("div", {
        className: "x6s0dn4 x1280gxy x78zum5 x1iyjqo2 xl56j7k",
        children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: u.content,
          children: [
            s.jsx(
              o("WAWebWdsIllMarketingMessagesIcon.react")
                .WdsIllMarketingMessagesIcon,
              { name: "biz-broadcast-home-empty-state-icon" },
            ),
            s.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: u.textContainer,
              children: [
                s.jsx(r("WDSText.react"), {
                  type: "Headline1",
                  colorName: "contentDefault",
                  textAlign: "center",
                  testid: void 0,
                  children: o(
                    "WAWebBizBroadcastsHomeStrings",
                  ).getEmptyStateTitle(),
                }),
                s.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  xstyle: u.subtitleContainer,
                  children: s.jsxs(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    textAlign: "center",
                    testid: void 0,
                    children: [
                      o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getEmptyStateSubtitle(),
                      " ",
                      s.jsx(r("WDSTextualLink.react"), {
                        textConfig: "Body2",
                        href: c,
                        onClick: function () {
                          o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.homeLearnMoreClicked(
                            t,
                          );
                        },
                        children: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getEmptyStateLearnMoreLinkText(),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            l &&
              s.jsx("div", {
                "data-testid": void 0,
                children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: u.buttonsContainer,
                  children: [
                    s.jsx(
                      r("WAWebBizBroadcastHomeCreateAudienceButton.react"),
                      {
                        onUploadSuccess: i,
                        onCreateAudience: n,
                        entryPoint: t,
                      },
                    ),
                    s.jsx(r("WDSButton.react"), {
                      label: o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getCreateBroadcastButtonLabel(),
                      onPress: function () {
                        (o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.createBroadcastButtonClicked(
                          t,
                          o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
                          { is_bb_home_empty_state: !0 },
                        ),
                          a());
                      },
                      variant: "filled",
                      size: "medium",
                      testid: void 0,
                    }),
                  ],
                }),
              }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
