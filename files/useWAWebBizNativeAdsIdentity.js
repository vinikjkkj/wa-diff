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
        i = r("useWAWebNativeAdsFlowIDContext")(),
        l = i.adCreationFlowID,
        s = i.manageAdsFlowID,
        _ = d(e),
        f = _[0],
        g = _[1],
        h = d(null),
        y = h[0],
        C = h[1],
        b = u(function (e) {
          (g(e), C(null));
        }, []),
        v = u(
          function (e, t) {
            f != null && e !== "" && g(m(f, e, t));
          },
          [f],
        ),
        S = c(
          function () {
            return f == null ? null : f.hasWeakToken ? y : f.relayEnvironment;
          },
          [f, y],
        ),
        R = d(!1),
        L = R[0],
        E = R[1],
        k = d(null),
        I = k[0],
        T = k[1],
        D = f == null ? void 0 : f.accountType,
        x = (a = f == null ? void 0 : f.hasLinkedFbPage) != null ? a : !1,
        $ = u(
          function (e) {
            (E(!0),
              o("WAWebBizNativeAdsResolveRelayIdentityBundle")
                .resolveBizNativeAdsRelayIdentityBundle(e, l)
                .then(function (t) {
                  if (t == null && e === "FB") {
                    (o("WAWebOIDCFlow.react").launchOIDCFlow(), E(!1));
                    return;
                  }
                  (b(t),
                    t != null &&
                      o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e));
                })
                .catch(function (e) {
                  T(r("getErrorSafe")(e));
                })
                .finally(function () {
                  E(!1);
                }));
          },
          [l, b],
        ),
        P = u(
          function () {
            D !== "WAA" &&
              (o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_WA_PAGELESS_BUTTON_TAPPED,
                D,
                t,
                x,
                s,
              ),
              $("WAA"));
          },
          [D, t, x, s, $],
        ),
        N = u(
          function () {
            if (D !== "FB") {
              o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_LOGIN_WITH_FB_TAPPED,
                D,
                t,
                x,
                s,
              );
              var e = o(
                "WAWebBizAdCreationResolveStoredIdentity",
              ).resolveStoredIdentityForAccountType("FB");
              e != null ? $("FB") : o("WAWebOIDCFlow.react").launchOIDCFlow();
            }
          },
          [D, t, x, s, $],
        ),
        M = u(
          function () {
            var e = o(
              "WAWebBizAdCreationResolveStoredIdentity",
            ).resolveStoredIdentityForAccountType("FB");
            e != null &&
              (o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent(
                o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
                  .LWI_ACTION_REMOVE_ACCOUNT_TAPPED,
                D,
                t,
                x,
                s,
              ),
              E(!0),
              o("WAWebResolveAccountTypeAndAdPage")
                .clearSavedOIDCLoginPreference(e)
                .catch(function (e) {
                  var t = r("getErrorSafe")(e);
                  o("WAWebFetchAdAccountToken").hasGraphQLAuthError(t)
                    ? r("FBLogger")("wa_ctwa_web").warn(
                        "Failed to clear OIDC login preference (auth error)",
                      )
                    : r("FBLogger")("wa_ctwa_web")
                        .catching(t)
                        .warn("Failed to clear OIDC login preference");
                })
                .finally(function () {
                  (o("WAWebUserPrefsCTWA").clearFBIdentity(),
                    t ? $("WAA") : (b(null), E(!1)));
                }));
          },
          [D, t, x, s, $, b],
        ),
        w = u(
          function (e) {
            f != null && b(p(f, l, e));
          },
          [l, f, b],
        ),
        A = u(
          (function () {
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
                    C(null),
                    null
                  );
                var t = yield r("WAWebGetAdsRelayEnvironment")(e);
                return (C(t), t);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [C],
        ),
        F = u(
          function () {
            $("FB");
          },
          [$],
        ),
        O = c(
          function () {
            var e;
            return {
              relayEnvironment: f == null ? void 0 : f.relayEnvironment,
              strongRelayEnvironment: S,
              adCreationEntrypointReference:
                f == null ? void 0 : f.adCreationEntrypointReference,
              adManagementQueryVariables:
                f == null ? void 0 : f.adManagementQueryVariables,
              adManagementQueryRef: f == null ? void 0 : f.adManagementQueryRef,
              accountType: f == null ? void 0 : f.accountType,
              hasLinkedFbPage:
                (e = f == null ? void 0 : f.hasLinkedFbPage) != null ? e : !1,
              pageId: f == null ? void 0 : f.pageId,
              isSwitching: L,
              identityError: I,
              loginWithWhatsApp: P,
              loginWithFacebook: N,
              logoutOfFacebook: M,
              setAdAccountId: w,
              setVerifiedEmailRelayEnvironment: A,
              isWAAEligible: t,
              reloadPreloadedQueries: v,
            };
          },
          [f, S, L, I, P, N, M, w, A, t, v],
        );
      return { contextValue: O, onOIDCSuccess: F };
    }
    l.default = _;
  },
  98,
);
