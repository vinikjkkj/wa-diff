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
        l = o("react-compiler-runtime").c(53),
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
      l[3] !== u || l[4] !== N || l[5] !== M || l[6] !== t
        ? ((w = function (n) {
            (D(!0),
              o("WAWebBizNativeAdsResolveRelayIdentityBundle")
                .resolveBizNativeAdsRelayIdentityBundle(n, u)
                .then(function (e) {
                  if (e == null && n === "FB") {
                    (o("WAWebOIDCFlow.react").launchOIDCFlow(), D(!1));
                    return;
                  }
                  (S(e),
                    e != null &&
                      o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(n));
                })
                .catch(function (e) {
                  var a = r("getErrorSafe")(e);
                  (P(a),
                    o("WAWebBizNativeAdsIdentityLogger").logIdentityErrorEvent(
                      N,
                      n,
                      t,
                      M,
                      a,
                      u,
                    ));
                })
                .finally(function () {
                  D(!1);
                }));
          }),
          (l[3] = u),
          (l[4] = N),
          (l[5] = M),
          (l[6] = t),
          (l[7] = w))
        : (w = l[7]);
      var A = w,
        F;
      l[8] !== N || l[9] !== M || l[10] !== t || l[11] !== c || l[12] !== A
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
          (l[8] = N),
          (l[9] = M),
          (l[10] = t),
          (l[11] = c),
          (l[12] = A),
          (l[13] = F))
        : (F = l[13]);
      var O = F,
        B;
      l[14] !== N || l[15] !== M || l[16] !== t || l[17] !== c || l[18] !== A
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
          (l[14] = N),
          (l[15] = M),
          (l[16] = t),
          (l[17] = c),
          (l[18] = A),
          (l[19] = B))
        : (B = l[19]);
      var W = B,
        q;
      l[20] !== N || l[21] !== M || l[22] !== t || l[23] !== c || l[24] !== A
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
          (l[20] = N),
          (l[21] = M),
          (l[22] = t),
          (l[23] = c),
          (l[24] = A),
          (l[25] = q))
        : (q = l[25]);
      var U = q,
        V;
      l[26] !== u || l[27] !== g
        ? ((V = function (t) {
            g != null && S(p(g, u, t));
          }),
          (l[26] = u),
          (l[27] = g),
          (l[28] = V))
        : (V = l[28]);
      var H = V,
        G;
      l[29] === Symbol.for("react.memo_cache_sentinel")
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
          (l[29] = G))
        : (G = l[29]);
      var z = G,
        j;
      l[30] !== A
        ? ((j = function () {
            A("FB");
          }),
          (l[30] = A),
          (l[31] = j))
        : (j = l[31]);
      var K = j,
        Q = g == null ? void 0 : g.relayEnvironment,
        X = g == null ? void 0 : g.adCreationEntrypointReference,
        Y = g == null ? void 0 : g.adManagementQueryVariables,
        J = g == null ? void 0 : g.adManagementQueryRef,
        Z = g == null ? void 0 : g.accountType,
        ee = (i = g == null ? void 0 : g.hasLinkedFbPage) != null ? i : !1,
        te = g == null ? void 0 : g.linkedPagesInfo,
        ne = g == null ? void 0 : g.pageId,
        re;
      l[32] !== $ ||
      l[33] !== T ||
      l[34] !== t ||
      l[35] !== W ||
      l[36] !== O ||
      l[37] !== U ||
      l[38] !== L ||
      l[39] !== H ||
      l[40] !== k ||
      l[41] !== Q ||
      l[42] !== X ||
      l[43] !== Y ||
      l[44] !== J ||
      l[45] !== Z ||
      l[46] !== ee ||
      l[47] !== te ||
      l[48] !== ne
        ? ((re = {
            relayEnvironment: Q,
            strongRelayEnvironment: k,
            adCreationEntrypointReference: X,
            adManagementQueryVariables: Y,
            adManagementQueryRef: J,
            accountType: Z,
            hasLinkedFbPage: ee,
            linkedPagesInfo: te,
            pageId: ne,
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
          (l[32] = $),
          (l[33] = T),
          (l[34] = t),
          (l[35] = W),
          (l[36] = O),
          (l[37] = U),
          (l[38] = L),
          (l[39] = H),
          (l[40] = k),
          (l[41] = Q),
          (l[42] = X),
          (l[43] = Y),
          (l[44] = J),
          (l[45] = Z),
          (l[46] = ee),
          (l[47] = te),
          (l[48] = ne),
          (l[49] = re))
        : (re = l[49]);
      var oe = re,
        ae;
      return (
        l[50] !== oe || l[51] !== K
          ? ((ae = { contextValue: oe, onOIDCSuccess: K }),
            (l[50] = oe),
            (l[51] = K),
            (l[52] = ae))
          : (ae = l[52]),
        ae
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
