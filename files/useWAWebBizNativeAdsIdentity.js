__d(
  "useWAWebBizNativeAdsIdentity",
  [
    "FBLogger",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizNativeAdsIdentityLogger",
    "WAWebBizNativeAdsPreparePreloads",
    "WAWebBizNativeAdsResolveRelayIdentityBundle",
    "WAWebCommonAdsTypes",
    "WAWebFetchAdAccountToken",
    "WAWebGetAdsRelayEnvironment",
    "WAWebOIDCFlow.react",
    "WAWebResolveAccountTypeAndAdPage",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumLwiScreenAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useWAWebNativeAdsFlowIDContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useMemo,
      d = s.useState;
    function m(e, t, n) {
      return babelHelpers.extends({}, e, {
        adCreationEntrypointReference: o(
          "WAWebBizNativeAdsPreparePreloads",
        ).prepareAdCreationEntrypoint(e, t, {
          boostId: n == null ? void 0 : n.boostId,
          draftId: n == null ? void 0 : n.draftId,
        }),
        adManagementQueryRef: r("justknobx")._("2130")
          ? o("WAWebBizNativeAdsPreparePreloads").prepareAdManagementQuery(e)
          : e.adManagementQueryRef,
      });
    }
    function p(e, t, n) {
      return babelHelpers.extends({}, e, {
        adCreationEntrypointReference: o(
          "WAWebBizNativeAdsPreparePreloads",
        ).prepareAdCreationEntrypoint(e, t, { adAccountId: n }),
        adAccountId: n,
      });
    }
    function _(e, t) {
      var a,
        i,
        l = o("react-compiler-runtime").c(49),
        s = r("useWAWebNativeAdsFlowIDContext")(),
        u = s.adCreationFlowID,
        c = s.manageAdsFlowID,
        _ = d(e),
        g = _[0],
        h = _[1],
        y = d(null),
        C = y[0],
        b = y[1],
        v;
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            (h(t), b(null));
          }),
          (l[0] = v))
        : (v = l[0]);
      var S = v,
        R;
      l[1] !== g
        ? ((R = function (t, n) {
            g != null && t !== "" && h(m(g, t, n));
          }),
          (l[1] = g),
          (l[2] = R))
        : (R = l[2]);
      var L = R,
        E;
      e: {
        if (g == null) {
          E = null;
          break e;
        }
        E = g.hasWeakToken ? C : g.relayEnvironment;
      }
      var k = E,
        I = d(!1),
        T = I[0],
        D = I[1],
        x = d(null),
        $ = x[0],
        P = x[1],
        N = g == null ? void 0 : g.accountType,
        M = (a = g == null ? void 0 : g.hasLinkedFbPage) != null ? a : !1,
        w;
      l[3] !== u
        ? ((w = function (t) {
            (D(!0),
              o("WAWebBizNativeAdsResolveRelayIdentityBundle")
                .resolveBizNativeAdsRelayIdentityBundle(t, u)
                .then(function (e) {
                  if (e == null && t === "FB") {
                    (o("WAWebOIDCFlow.react").launchOIDCFlow(), D(!1));
                    return;
                  }
                  (S(e),
                    e != null &&
                      o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(t));
                })
                .catch(function (e) {
                  P(r("getErrorSafe")(e));
                })
                .finally(function () {
                  D(!1);
                }));
          }),
          (l[3] = u),
          (l[4] = w))
        : (w = l[4]);
      var A = w,
        F;
      l[5] !== N || l[6] !== M || l[7] !== t || l[8] !== c || l[9] !== A
        ? ((F = function () {
            N !== "WAA" &&
              (o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_WA_PAGELESS_BUTTON_TAPPED,
                N,
                t,
                M,
                c,
              ),
              A("WAA"));
          }),
          (l[5] = N),
          (l[6] = M),
          (l[7] = t),
          (l[8] = c),
          (l[9] = A),
          (l[10] = F))
        : (F = l[10]);
      var O = F,
        B;
      l[11] !== N || l[12] !== M || l[13] !== t || l[14] !== c || l[15] !== A
        ? ((B = function () {
            if (N !== "FB") {
              o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_LOGIN_WITH_FB_TAPPED,
                N,
                t,
                M,
                c,
              );
              var e = o(
                "WAWebBizAdCreationResolveStoredIdentity",
              ).resolveStoredIdentityForAccountType("FB");
              e != null ? A("FB") : o("WAWebOIDCFlow.react").launchOIDCFlow();
            }
          }),
          (l[11] = N),
          (l[12] = M),
          (l[13] = t),
          (l[14] = c),
          (l[15] = A),
          (l[16] = B))
        : (B = l[16]);
      var W = B,
        q;
      l[17] !== N || l[18] !== M || l[19] !== t || l[20] !== c || l[21] !== A
        ? ((q = function () {
            var e = o(
              "WAWebBizAdCreationResolveStoredIdentity",
            ).resolveStoredIdentityForAccountType("FB");
            e != null &&
              (o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_REMOVE_ACCOUNT_TAPPED,
                N,
                t,
                M,
                c,
              ),
              D(!0),
              o("WAWebResolveAccountTypeAndAdPage")
                .clearSavedOIDCLoginPreference(e)
                .catch(f)
                .finally(function () {
                  (o("WAWebUserPrefsCTWA").clearFBIdentity(),
                    t ? A("WAA") : (S(null), D(!1)));
                }));
          }),
          (l[17] = N),
          (l[18] = M),
          (l[19] = t),
          (l[20] = c),
          (l[21] = A),
          (l[22] = q))
        : (q = l[22]);
      var U = q,
        V;
      l[23] !== u || l[24] !== g
        ? ((V = function (t) {
            g != null && S(p(g, u, t));
          }),
          (l[23] = u),
          (l[24] = g),
          (l[25] = V))
        : (V = l[25]);
      var H = V,
        G;
      l[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  e.type === "WAA" &&
                  e.tokenStrength ===
                    o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK
                )
                  return (
                    r("FBLogger")("wa_ctwa_web").mustfix(
                      "setVerifiedEmailRelayEnvironment called with unverified token",
                    ),
                    b(null),
                    null
                  );
                var t = yield r("WAWebGetAdsRelayEnvironment")(e);
                return (b(t), t);
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (l[26] = G))
        : (G = l[26]);
      var z = G,
        j;
      l[27] !== A
        ? ((j = function () {
            A("FB");
          }),
          (l[27] = A),
          (l[28] = j))
        : (j = l[28]);
      var K = j,
        Q = g == null ? void 0 : g.relayEnvironment,
        X = g == null ? void 0 : g.adCreationEntrypointReference,
        Y = g == null ? void 0 : g.adManagementQueryVariables,
        J = g == null ? void 0 : g.adManagementQueryRef,
        Z = g == null ? void 0 : g.accountType,
        ee = (i = g == null ? void 0 : g.hasLinkedFbPage) != null ? i : !1,
        te = g == null ? void 0 : g.pageId,
        ne;
      l[29] !== $ ||
      l[30] !== T ||
      l[31] !== t ||
      l[32] !== W ||
      l[33] !== O ||
      l[34] !== U ||
      l[35] !== L ||
      l[36] !== H ||
      l[37] !== k ||
      l[38] !== Q ||
      l[39] !== X ||
      l[40] !== Y ||
      l[41] !== J ||
      l[42] !== Z ||
      l[43] !== ee ||
      l[44] !== te
        ? ((ne = {
            relayEnvironment: Q,
            strongRelayEnvironment: k,
            adCreationEntrypointReference: X,
            adManagementQueryVariables: Y,
            adManagementQueryRef: J,
            accountType: Z,
            hasLinkedFbPage: ee,
            pageId: te,
            isSwitching: T,
            identityError: $,
            loginWithWhatsApp: O,
            loginWithFacebook: W,
            logoutOfFacebook: U,
            setAdAccountId: H,
            setVerifiedEmailRelayEnvironment: z,
            isWAAEligible: t,
            reloadPreloadedQueries: L,
          }),
          (l[29] = $),
          (l[30] = T),
          (l[31] = t),
          (l[32] = W),
          (l[33] = O),
          (l[34] = U),
          (l[35] = L),
          (l[36] = H),
          (l[37] = k),
          (l[38] = Q),
          (l[39] = X),
          (l[40] = Y),
          (l[41] = J),
          (l[42] = Z),
          (l[43] = ee),
          (l[44] = te),
          (l[45] = ne))
        : (ne = l[45]);
      var re = ne,
        oe;
      return (
        l[46] !== re || l[47] !== K
          ? ((oe = { contextValue: re, onOIDCSuccess: K }),
            (l[46] = re),
            (l[47] = K),
            (l[48] = oe))
          : (oe = l[48]),
        oe
      );
    }
    function f(e) {
      var t = r("getErrorSafe")(e);
      o("WAWebFetchAdAccountToken").hasGraphQLAuthError(t)
        ? r("FBLogger")("wa_ctwa_web").warn(
            "Failed to clear OIDC login preference (auth error)",
          )
        : r("FBLogger")("wa_ctwa_web")
            .catching(t)
            .warn("Failed to clear OIDC login preference");
    }
    l.default = _;
  },
  98,
);
