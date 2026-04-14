__d(
  "WAWebBizAdCreationRoot.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationAudienceSection.react",
    "WAWebBizAdCreationBudgetSection.react",
    "WAWebBizAdCreationConfigContextProvider.react",
    "WAWebBizAdCreationCreativeSection.react",
    "WAWebBizAdCreationDSASection.react",
    "WAWebBizAdCreationDragDropOverlay.react",
    "WAWebBizAdCreationDurationSection.react",
    "WAWebBizAdCreationFooterPortalContext.react",
    "WAWebBizAdCreationHawkWidget.react",
    "WAWebBizAdCreationLoadingFallback.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationLoggerContextProvider.react",
    "WAWebBizAdCreationPaymentRefetchContext",
    "WAWebBizAdCreationPaymentSection.react",
    "WAWebBizAdCreationPlacementSection.react",
    "WAWebBizAdCreationPreviewSection.react",
    "WAWebBizAdCreationRootQuery.graphql",
    "WAWebBizAdCreationRoot_adAccount.graphql",
    "WAWebBizAdCreationSACSection.react",
    "WAWebBizAdCreationSAFRContextProvider.react",
    "WAWebBizAdCreationSpecContextProvider.react",
    "WAWebBizAdCreationSummarySection.react",
    "WAWebBizAdCreationTopNotices.react",
    "WAWebBizAdCreationValidateSpecContextProvider.react",
    "WAWebBizAdLogger",
    "WAWebBizAdPublishButton.react",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizGatingUtils",
    "WAWebBizTwoColumnLayout.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "useWAWebBizAdCreationInitialAdgroupsWithPrefill",
    "useWAWebBizAdCreationNoticeActionOverrides",
    "useWAWebNativeAdsFlowIDContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect,
      f = m.useRef,
      g = 1084,
      h = {
        stickyFooter: {
          width: "xh8yej3",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        innerFooter: {
          maxWidth: "x1mvdoyg",
          width: "xh8yej3",
          display: "x78zum5",
          justifyContent: "x1qughib",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
      };
    function y(e) {
      var t = e.adAccountID,
        n = p(r("WAWebBizAdCreationLoggerContext")),
        o = f(!1);
      return (
        _(
          function () {
            n != null &&
              !o.current &&
              ((o.current = !0),
              r("WAWebBizAdLogger").logCritical({
                event: "enter_flow",
                loggerContext: n,
                adAccountID: t,
              }));
          },
          [t, n],
        ),
        null
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.emailOnboardingDataRef,
        n = e.flowID,
        a = e.input,
        i = e.onboardingDataRef,
        l = e.onNavigateToManageAds;
      return d.jsx(
        o("WAWebBizAdCreationFooterPortalContext.react").FooterPortal,
        {
          children: d.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: h.stickyFooter,
            children: d.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: h.innerFooter,
              children: [
                d.jsx(r("WDSText.react"), {
                  colorName: "contentDeemphasized",
                  type: "Body3",
                  children: s._(
                    /*BTDS*/ "By creating this ad, you agree to {=m2}",
                    [
                      s._implicitParam(
                        "=m2",
                        d.jsx(r("WDSTextualLink.react"), {
                          href: "https://www.facebook.com/legal/terms_conditions",
                          children: s._(/*BTDS*/ "Meta's Terms and Conditions"),
                        }),
                      ),
                    ],
                  ),
                }),
                d.jsx(
                  o("WAWebBizAdPublishButton.react").WAWebBizAdPublishButton,
                  {
                    emailOnboardingDataRef: t,
                    flowID: n,
                    onNavigateToManageAds: l,
                    pageID: a.page_id,
                    product: a.product,
                    onboardingDataRef: i,
                  },
                ),
              ],
            }),
          }),
        },
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = e !== void 0 ? e : (e = n("WAWebBizAdCreationRootQuery.graphql")),
      v =
        u !== void 0 ? u : (u = n("WAWebBizAdCreationRoot_adAccount.graphql"));
    function S(e) {
      var t,
        n,
        a = e.boostedComponent,
        l = e.data,
        s = e.draftID,
        u = e.input,
        c = e.onNavigateToManageAds,
        m = r("useWAWebNativeAdsFlowIDContext")(),
        p = l.me,
        _ = l.page,
        f = l.waAdAccountOnboardingData,
        g = l.emailOnboardingData,
        h = r("useWAWebBizAdCreationNoticeActionOverrides")(g),
        b = o("CometRelay").useFragment(v, a),
        S = String(
          (t =
            b == null || (n = b.spec) == null || (n = n.ad_account) == null
              ? void 0
              : n.id) != null
            ? t
            : "",
        ),
        R = r("useWAWebBizAdCreationInitialAdgroupsWithPrefill")(a),
        L = R[0],
        E = R[1],
        k = R[2];
      return d.jsx(r("CometPlaceholder.react"), {
        fallback: d.jsx(r("WAWebBizAdCreationLoadingFallback.react"), {}),
        name: i.id,
        children: d.jsx("div", {
          className: "x78zum5 xdt5ytf x1iyjqo2 xl56j7k",
          children: d.jsx(r("WAWebBizAdCreationConfigContextProvider.react"), {
            entryPoint: "whatsapp_smb_web_manage_ads_native",
            flow: "create",
            flowID: m.adCreationFlowID,
            pageID: u.page_id,
            product: u.product,
            children: d.jsxs(
              r("WAWebBizAdCreationLoggerContextProvider.react"),
              {
                product: "boosted_message",
                codebase: "whatsapp_smb",
                platform: "whatsapp_smb_web",
                recreateBoostId: u.boost_id,
                children: [
                  d.jsx(y, { adAccountID: S }),
                  d.jsx(
                    r("WAWebBizAdCreationSpecContextProvider.react"),
                    {
                      boostedComponentWrapperRef: a,
                      initialDraftID: s,
                      prefillPromise: k,
                      initialAdgroups: L,
                      selectedAdgroupID: E,
                      children: d.jsx(
                        o("WAWebBizAdCreationPaymentRefetchContext")
                          .WAWebBizAdCreationPaymentRefetchProvider,
                        {
                          children: d.jsx(
                            r(
                              "WAWebBizAdCreationValidateSpecContextProvider.react",
                            ),
                            {
                              noticeActionOverrides: h,
                              children: d.jsxs(
                                r("WAWebBizAdCreationDragDropOverlay.react"),
                                {
                                  children: [
                                    d.jsx(r("WAWebBizTwoColumnLayout.react"), {
                                      primaryContent: d.jsxs(d.Fragment, {
                                        children: [
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationTopNotices.react",
                                            ),
                                            {},
                                          ),
                                          o(
                                            "WAWebBizGatingUtils",
                                          ).nativeAdsCreationHawkToolEnabled() &&
                                            d.jsx(
                                              r(
                                                "WAWebBizAdCreationHawkWidget.react",
                                              ),
                                              {},
                                            ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationCreativeSection.react",
                                            ),
                                            {},
                                          ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationAudienceSection.react",
                                            ),
                                            { boostedComponentInput: u },
                                          ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationDSASection.react",
                                            ),
                                            {},
                                          ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationSACSection.react",
                                            ),
                                            {},
                                          ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationSAFRContextProvider.react",
                                            ),
                                            {
                                              boostedComponentWrapperRef: a,
                                              children: d.jsx(
                                                r(
                                                  "WAWebBizAdCreationPlacementSection.react",
                                                ),
                                                { fragmentRef: a },
                                              ),
                                            },
                                          ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationBudgetSection.react",
                                            ),
                                            { fragmentRef: a },
                                          ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationDurationSection.react",
                                            ),
                                            {},
                                          ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationPaymentSection.react",
                                            ),
                                            {
                                              adAccountsRef: l,
                                              emailOnboardingDataRef: g,
                                              facebookProfileRef: p,
                                            },
                                          ),
                                        ],
                                      }),
                                      secondaryContent: d.jsxs(d.Fragment, {
                                        children: [
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationPreviewSection.react",
                                            ),
                                            { pageRef: _ },
                                          ),
                                          d.jsx(
                                            r(
                                              "WAWebBizAdCreationSummarySection.react",
                                            ),
                                            {},
                                          ),
                                        ],
                                      }),
                                    }),
                                    d.jsx(C, {
                                      emailOnboardingDataRef: g,
                                      input: u,
                                      onboardingDataRef: f,
                                      onNavigateToManageAds: c,
                                      flowID: m.adCreationFlowID,
                                    }),
                                  ],
                                },
                              ),
                            },
                          ),
                        },
                      ),
                    },
                    S,
                  ),
                ],
              },
            ),
          }),
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t,
        n = e.props,
        a = e.queries,
        i = o("CometRelay").usePreloadedQuery(b, a.creationRootQueryReference),
        l = i == null || (t = i.lwi) == null ? void 0 : t.boostedComponent;
      if (l == null)
        return (
          r("FBLogger")("wa_ctwa_web").mustfix(
            "boostedComponent is null in WAWebBizAdCreationRoot",
          ),
          d.jsx(r("WAWebBizAdsErrorPopup.react"), {
            fallback: d.jsx(r("WAWebBizAdCreationLoadingFallback.react"), {}),
          })
        );
      var s = a.creationRootQueryReference.variables.input,
        u = a.creationRootQueryReference.variables.draftID;
      return d.jsx(S, {
        boostedComponent: l,
        data: i,
        draftID: u,
        input: s,
        onNavigateToManageAds: n.onNavigateToManageAds,
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
