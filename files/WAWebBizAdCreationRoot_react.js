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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(4),
        n = e.adAccountID,
        a = p(r("WAWebBizAdCreationLoggerContext")),
        i = f(!1),
        l,
        s;
      return (
        t[0] !== n || t[1] !== a
          ? ((l = function () {
              a != null &&
                !i.current &&
                ((i.current = !0),
                r("WAWebBizAdLogger").logCritical({
                  event: "enter_flow",
                  loggerContext: a,
                  adAccountID: n,
                }));
            }),
            (s = [n, a]),
            (t[0] = n),
            (t[1] = a),
            (t[2] = l),
            (t[3] = s))
          : ((l = t[2]), (s = t[3])),
        _(l, s),
        null
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.emailOnboardingDataRef,
        a = e.flowID,
        i = e.input,
        l = e.onboardingDataRef,
        u = e.onNavigateToManageAds,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = d.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body3",
            children: s._(/*BTDS*/ "By creating this ad, you agree to {=m2}", [
              s._implicitParam(
                "=m2",
                d.jsx(r("WDSTextualLink.react"), {
                  href: "https://www.facebook.com/legal/terms_conditions",
                  children: s._(/*BTDS*/ "Meta's Terms and Conditions"),
                }),
              ),
            ]),
          })),
          (t[0] = c))
        : (c = t[0]);
      var m;
      return (
        t[1] !== n ||
        t[2] !== a ||
        t[3] !== i.page_id ||
        t[4] !== i.product ||
        t[5] !== u ||
        t[6] !== l
          ? ((m = d.jsx(
              o("WAWebBizAdCreationFooterPortalContext.react").FooterPortal,
              {
                children: d.jsx(r("WAWebDrawerSection.react"), {
                  animation: !1,
                  xstyle: h.stickyFooter,
                  children: d.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: h.innerFooter,
                    children: [
                      c,
                      d.jsx(
                        o("WAWebBizAdPublishButton.react")
                          .WAWebBizAdPublishButton,
                        {
                          emailOnboardingDataRef: n,
                          flowID: a,
                          onNavigateToManageAds: u,
                          pageID: i.page_id,
                          product: i.product,
                          onboardingDataRef: l,
                        },
                      ),
                    ],
                  }),
                }),
              },
            )),
            (t[1] = n),
            (t[2] = a),
            (t[3] = i.page_id),
            (t[4] = i.product),
            (t[5] = u),
            (t[6] = l),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    var b = e !== void 0 ? e : (e = n("WAWebBizAdCreationRootQuery.graphql")),
      v =
        u !== void 0 ? u : (u = n("WAWebBizAdCreationRoot_adAccount.graphql"));
    function S(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(65),
        l = e.boostedComponent,
        s = e.data,
        u = e.draftID,
        c = e.input,
        m = e.onNavigateToManageAds,
        p = r("useWAWebNativeAdsFlowIDContext")(),
        _ = s.me,
        f = s.page,
        g = s.waAdAccountOnboardingData,
        h = s.emailOnboardingData,
        b = r("useWAWebBizAdCreationNoticeActionOverrides")(h),
        S = o("CometRelay").useFragment(v, l),
        R = String(
          (t =
            S == null || (n = S.spec) == null || (n = n.ad_account) == null
              ? void 0
              : n.id) != null
            ? t
            : "",
        ),
        L = r("useWAWebBizAdCreationInitialAdgroupsWithPrefill")(l),
        E = L[0],
        k = L[1],
        I = L[2],
        T;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = d.jsx(r("WAWebBizAdCreationLoadingFallback.react"), {})),
          (a[0] = T))
        : (T = a[0]);
      var D;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = "x78zum5 xdt5ytf x1iyjqo2 xl56j7k"), (a[1] = D))
        : (D = a[1]);
      var x;
      a[2] !== R
        ? ((x = d.jsx(y, { adAccountID: R })), (a[2] = R), (a[3] = x))
        : (x = a[3]);
      var $, P, N;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = d.jsx(r("WAWebBizAdCreationTopNotices.react"), {})),
          (P =
            o("WAWebBizGatingUtils").nativeAdsCreationHawkToolEnabled() &&
            d.jsx(r("WAWebBizAdCreationHawkWidget.react"), {})),
          (N = d.jsx(r("WAWebBizAdCreationCreativeSection.react"), {})),
          (a[4] = $),
          (a[5] = P),
          (a[6] = N))
        : (($ = a[4]), (P = a[5]), (N = a[6]));
      var M;
      a[7] !== c
        ? ((M = d.jsx(r("WAWebBizAdCreationAudienceSection.react"), {
            boostedComponentInput: c,
          })),
          (a[7] = c),
          (a[8] = M))
        : (M = a[8]);
      var w, A;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = d.jsx(r("WAWebBizAdCreationDSASection.react"), {})),
          (A = d.jsx(r("WAWebBizAdCreationSACSection.react"), {})),
          (a[9] = w),
          (a[10] = A))
        : ((w = a[9]), (A = a[10]));
      var F;
      a[11] !== l
        ? ((F = d.jsx(r("WAWebBizAdCreationPlacementSection.react"), {
            fragmentRef: l,
          })),
          (a[11] = l),
          (a[12] = F))
        : (F = a[12]);
      var O;
      a[13] !== l || a[14] !== F
        ? ((O = d.jsx(r("WAWebBizAdCreationSAFRContextProvider.react"), {
            boostedComponentWrapperRef: l,
            children: F,
          })),
          (a[13] = l),
          (a[14] = F),
          (a[15] = O))
        : (O = a[15]);
      var B;
      a[16] !== l
        ? ((B = d.jsx(r("WAWebBizAdCreationBudgetSection.react"), {
            fragmentRef: l,
          })),
          (a[16] = l),
          (a[17] = B))
        : (B = a[17]);
      var W;
      a[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = d.jsx(r("WAWebBizAdCreationDurationSection.react"), {})),
          (a[18] = W))
        : (W = a[18]);
      var q;
      a[19] !== s || a[20] !== h || a[21] !== _
        ? ((q = d.jsx(r("WAWebBizAdCreationPaymentSection.react"), {
            adAccountsRef: s,
            emailOnboardingDataRef: h,
            facebookProfileRef: _,
          })),
          (a[19] = s),
          (a[20] = h),
          (a[21] = _),
          (a[22] = q))
        : (q = a[22]);
      var U;
      a[23] !== O || a[24] !== B || a[25] !== q || a[26] !== M
        ? ((U = d.jsxs(d.Fragment, {
            children: [$, P, N, M, w, A, O, B, W, q],
          })),
          (a[23] = O),
          (a[24] = B),
          (a[25] = q),
          (a[26] = M),
          (a[27] = U))
        : (U = a[27]);
      var V;
      a[28] !== f
        ? ((V = d.jsx(r("WAWebBizAdCreationPreviewSection.react"), {
            pageRef: f,
          })),
          (a[28] = f),
          (a[29] = V))
        : (V = a[29]);
      var H;
      a[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = d.jsx(r("WAWebBizAdCreationSummarySection.react"), {})),
          (a[30] = H))
        : (H = a[30]);
      var G;
      a[31] !== V
        ? ((G = d.jsxs(d.Fragment, { children: [V, H] })),
          (a[31] = V),
          (a[32] = G))
        : (G = a[32]);
      var z;
      a[33] !== U || a[34] !== G
        ? ((z = d.jsx(r("WAWebBizTwoColumnLayout.react"), {
            primaryContent: U,
            secondaryContent: G,
          })),
          (a[33] = U),
          (a[34] = G),
          (a[35] = z))
        : (z = a[35]);
      var j;
      a[36] !== h ||
      a[37] !== p.adCreationFlowID ||
      a[38] !== c ||
      a[39] !== m ||
      a[40] !== g
        ? ((j = d.jsx(C, {
            emailOnboardingDataRef: h,
            input: c,
            onboardingDataRef: g,
            onNavigateToManageAds: m,
            flowID: p.adCreationFlowID,
          })),
          (a[36] = h),
          (a[37] = p.adCreationFlowID),
          (a[38] = c),
          (a[39] = m),
          (a[40] = g),
          (a[41] = j))
        : (j = a[41]);
      var K;
      a[42] !== z || a[43] !== j
        ? ((K = d.jsxs(r("WAWebBizAdCreationDragDropOverlay.react"), {
            children: [z, j],
          })),
          (a[42] = z),
          (a[43] = j),
          (a[44] = K))
        : (K = a[44]);
      var Q;
      a[45] !== b || a[46] !== K
        ? ((Q = d.jsx(
            o("WAWebBizAdCreationPaymentRefetchContext")
              .WAWebBizAdCreationPaymentRefetchProvider,
            {
              children: d.jsx(
                r("WAWebBizAdCreationValidateSpecContextProvider.react"),
                { noticeActionOverrides: b, children: K },
              ),
            },
          )),
          (a[45] = b),
          (a[46] = K),
          (a[47] = Q))
        : (Q = a[47]);
      var X;
      a[48] !== R ||
      a[49] !== l ||
      a[50] !== u ||
      a[51] !== E ||
      a[52] !== I ||
      a[53] !== k ||
      a[54] !== Q
        ? ((X = d.jsx(
            r("WAWebBizAdCreationSpecContextProvider.react"),
            {
              boostedComponentWrapperRef: l,
              initialDraftID: u,
              prefillPromise: I,
              initialAdgroups: E,
              selectedAdgroupID: k,
              children: Q,
            },
            R,
          )),
          (a[48] = R),
          (a[49] = l),
          (a[50] = u),
          (a[51] = E),
          (a[52] = I),
          (a[53] = k),
          (a[54] = Q),
          (a[55] = X))
        : (X = a[55]);
      var Y;
      a[56] !== c.boost_id || a[57] !== X || a[58] !== x
        ? ((Y = d.jsxs(r("WAWebBizAdCreationLoggerContextProvider.react"), {
            product: "boosted_message",
            codebase: "whatsapp_smb",
            platform: "whatsapp_smb_web",
            recreateBoostId: c.boost_id,
            children: [x, X],
          })),
          (a[56] = c.boost_id),
          (a[57] = X),
          (a[58] = x),
          (a[59] = Y))
        : (Y = a[59]);
      var J;
      return (
        a[60] !== p.adCreationFlowID ||
        a[61] !== c.page_id ||
        a[62] !== c.product ||
        a[63] !== Y
          ? ((J = d.jsx(r("CometPlaceholder.react"), {
              fallback: T,
              name: i.id,
              children: d.jsx("div", {
                className: D,
                children: d.jsx(
                  r("WAWebBizAdCreationConfigContextProvider.react"),
                  {
                    entryPoint: "whatsapp_smb_web_manage_ads_native",
                    flow: "create",
                    flowID: p.adCreationFlowID,
                    pageID: c.page_id,
                    product: c.product,
                    children: Y,
                  },
                ),
              }),
            })),
            (a[60] = p.adCreationFlowID),
            (a[61] = c.page_id),
            (a[62] = c.product),
            (a[63] = Y),
            (a[64] = J))
          : (J = a[64]),
        J
      );
    }
    function R(e) {
      var t,
        n = o("react-compiler-runtime").c(7),
        a = e.props,
        i = e.queries,
        l = o("CometRelay").usePreloadedQuery(b, i.creationRootQueryReference),
        s = l == null || (t = l.lwi) == null ? void 0 : t.boostedComponent;
      if (s == null) {
        r("FBLogger")("wa_ctwa_web").mustfix(
          "boostedComponent is null in WAWebBizAdCreationRoot",
        );
        var u;
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = d.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: d.jsx(
                  r("WAWebBizAdCreationLoadingFallback.react"),
                  {},
                ),
              })),
              (n[0] = u))
            : (u = n[0]),
          u
        );
      }
      var c = i.creationRootQueryReference.variables.input,
        m = i.creationRootQueryReference.variables.draftID,
        p;
      return (
        n[1] !== s ||
        n[2] !== l ||
        n[3] !== m ||
        n[4] !== c ||
        n[5] !== a.onNavigateToManageAds
          ? ((p = d.jsx(S, {
              boostedComponent: s,
              data: l,
              draftID: m,
              input: c,
              onNavigateToManageAds: a.onNavigateToManageAds,
            })),
            (n[1] = s),
            (n[2] = l),
            (n[3] = m),
            (n[4] = c),
            (n[5] = a.onNavigateToManageAds),
            (n[6] = p))
          : (p = n[6]),
        p
      );
    }
    l.default = R;
  },
  226,
);
