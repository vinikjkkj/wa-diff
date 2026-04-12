__d(
  "WAWebNewsletterInsightsSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChevronIcon.react",
    "WAWebCommonNewsletterStrings",
    "WAWebFlex.react",
    "WAWebGlanceInsight.react",
    "WAWebMetricInfoModal.react",
    "WAWebModalManager",
    "WAWebNewsletterAdminInsightsFailedToLoad.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterProducerInsightsLogger",
    "WAWebPopulateNewsletterInsightsAction",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumActionTarget",
    "WAWebWamEnumChannelProducerInsightsActionType",
    "WAWebWamEnumChannelProducerInsightsEntryPoint",
    "WDSIconIcInfo.react",
    "fbs",
    "react",
    "useWAWebAdminInsightsHooks",
    "useWAWebAsyncRetry",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useEffect,
      p = {
        newsletterInsight: { height: "xsdox4t", width: "xh8yej3", $$css: !0 },
        button: { display: "x78zum5", $$css: !0 },
        secondaryLighterColor: { color: "xhslqc4", $$css: !0 },
        tealColor: { color: "x1v5yvga", $$css: !0 },
        marginStart4: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        paddingVert16: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
        paddingHoriz20: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function _(e) {
      var t,
        n = e.chat,
        a = e.newsletterMetadata,
        i = e.onSeeAllClick,
        l = e.xstyle,
        c =
          (t = o("useWAWebModelValues").useModelValues(a, [
            "adminInsights",
            "showInsightDelta",
          ])) != null
            ? t
            : {},
        _ = c.adminInsights,
        f = c.showInsightDelta,
        g = _ == null ? void 0 : _.accountsReached,
        h = _ == null ? void 0 : _.reachDelta,
        y = g != null ? { value: g, delta: h } : null,
        C = _ == null ? void 0 : _.netFollows,
        b = C != null ? { value: C } : null,
        v = o("useWAWebAdminInsightsHooks").useAdminInsightPeriod(a),
        S = v.days,
        R = d(
          o("WAWebNewsletterProducerInsightsLogger")
            .NewsletterProducerInsightsLoggerContext,
        );
      m(
        function () {
          R.log({
            actionType: o("WAWebWamEnumChannelProducerInsightsActionType")
              .CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.WIDGET_IMPRESSION,
          });
        },
        [R],
      );
      var L = r("useWAWebAsyncRetry")(
          function () {
            return o(
              "WAWebPopulateNewsletterInsightsAction",
            ).populateNewsletterTileInsights(n);
          },
          [n],
        ),
        E = L.error,
        k = L.loading,
        I = L.retry,
        T = !o("WAWebNewsletterGatingUtils").canFetchProducerInsights(a);
      return u.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          testid: void 0,
          xstyle: [l, p.paddingVert16, p.paddingHoriz20],
          children: [
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              paddingBottom: 16,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  children: [
                    u.jsx(o("WAWebText.react").WAWebTextMuted, {
                      color: "secondary",
                      children: s._(
                        /*BTDS*/ '_j{"*":"Insights for last {number} days","_1":"Insights for last 1 day"}',
                        [s._plural(S, "number", S)],
                      ),
                    }),
                    u.jsx(r("WAWebUnstyledButton.react"), {
                      "aria-label": r("fbs")._(/*BTDS*/ "More info"),
                      onClick: function () {
                        (R.logInfoIconTap(
                          o("WAWebWamEnumActionTarget").ACTION_TARGET
                            .WIDGET_INFO_ICON,
                        ),
                          o("WAWebModalManager").ModalManager.open(
                            u.jsx(r("WAWebMetricInfoModal.react"), {
                              logger: R,
                              metrics: [
                                o(
                                  "WAWebCommonNewsletterStrings",
                                ).getAccountsReachMetricInfo(),
                                o(
                                  "WAWebCommonNewsletterStrings",
                                ).getNetFollowsMetricInfo(),
                              ],
                              metricsThreshold: o(
                                "WAWebCommonNewsletterStrings",
                              ).getReachMetricsThreshold(),
                            }),
                          ));
                      },
                      xstyle: p.button,
                      children: u.jsx(r("WDSIconIcInfo.react"), {
                        iconXstyle: p.secondaryLighterColor,
                        height: 18,
                        width: 18,
                        xstyle: p.marginStart4,
                      }),
                    }),
                  ],
                }),
                !T &&
                  u.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: function () {
                      i(
                        "reach",
                        o("WAWebWamEnumChannelProducerInsightsEntryPoint")
                          .CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT
                          .PROFILE_SEE_ALL,
                      );
                    },
                    testid: void 0,
                    children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      children: [
                        u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                          children: s._(/*BTDS*/ "See all"),
                        }),
                        u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                          iconXstyle: p.tealColor,
                          directional: !0,
                          height: 24,
                          width: 24,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            E != null && !k
              ? u.jsx(r("WAWebNewsletterAdminInsightsFailedToLoad.react"), {
                  onClick: I,
                })
              : u.jsxs(o("WAWebFlex.react").FlexRow, {
                  gap: 8,
                  children: [
                    u.jsx(r("WAWebGlanceInsight.react"), {
                      insight: y,
                      label: s._(/*BTDS*/ "Accounts reached"),
                      loading: k,
                      onClick: T
                        ? null
                        : function () {
                            return i(
                              "reach",
                              o("WAWebWamEnumChannelProducerInsightsEntryPoint")
                                .CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT
                                .PROFILE_ACCOUNTS_REACHED,
                            );
                          },
                      showDelta:
                        f &&
                        !o(
                          "WAWebNewsletterGatingUtils",
                        ).shouldHideProducerInsightsDeltas(),
                      testid: void 0,
                      xstyle: p.newsletterInsight,
                    }),
                    u.jsx(r("WAWebGlanceInsight.react"), {
                      insight: b,
                      label: s._(/*BTDS*/ "Net follows"),
                      loading: k,
                      onClick: T
                        ? null
                        : function () {
                            return i(
                              "growth",
                              o("WAWebWamEnumChannelProducerInsightsEntryPoint")
                                .CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT
                                .PROFILE_NET_FOLLOWS,
                            );
                          },
                      showDelta: !o(
                        "WAWebNewsletterGatingUtils",
                      ).shouldHideProducerInsightsDeltas(),
                      testid: void 0,
                      xstyle: p.newsletterInsight,
                    }),
                  ],
                }),
            T &&
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                color: "secondary",
                marginTop: 16,
                children: o(
                  "WAWebCommonNewsletterStrings",
                ).getMetricsAvailabilityDisclaimer(),
              }),
          ],
        },
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
