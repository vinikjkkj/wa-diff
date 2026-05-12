__d(
  "WAWebBizNativeAdsFlowLoadable",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsResolveRelayIdentityBundle",
    "WAWebBizNativeAdsScenarioRouter",
    "WAWebLazyLoadedRetriable",
    "WAWebLinkedAccountsJob",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizNativeAdsFlow.react",
          )
            .__setRef("WAWebBizNativeAdsFlowLoadable")
            .load();
          return e.WAWebBizNativeAdsFlow;
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebGetWAAEligibility")
            .__setRef("WAWebBizNativeAdsFlowLoadable")
            .load();
          return e;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = o(
        "WAWebBizAdCreationResolveStoredIdentity",
      ).resolveStoredAccountType();
      return t === "FB" || !e ? "FB" : "WAA";
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield c(),
            i = e.accountType,
            l = e.isWAAEligible,
            s = e.linkedPagesPromise,
            d = e.scenario,
            m =
              d === "FIRST_TIME_WAA_ELIGIBLE"
                ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation
                : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement;
          if (
            d === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
            d === "HAS_FB_ADS_NOT_WAA_ELIGIBLE"
          )
            return (
              n == null || n(),
              o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess(),
              function (e) {
                return u.jsx(
                  a,
                  babelHelpers.extends(
                    {
                      identityBundle: null,
                      initialAdCreationFlowID: t,
                      initialStep: m,
                      isWAAEligible: l,
                      scenario: d,
                    },
                    e,
                  ),
                );
              }
            );
          var p;
          try {
            p = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle(i, t, s);
          } catch (e) {
            throw (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix(
                  "BizNativeAdsFlowLoadable: phase 2 identity resolution failed for accountType: " +
                    i,
                ),
              e
            );
          }
          return (
            d === "FIRST_TIME_WAA_ELIGIBLE" &&
              p != null &&
              p.adCreationEntrypointReference == null &&
              (p = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).prepareDeferredAdCreationEntrypoint(p, t)),
            n == null || n(),
            function (e) {
              return u.jsx(
                a,
                babelHelpers.extends(
                  {
                    identityBundle: p,
                    initialAdCreationFlowID: t,
                    initialStep: m,
                    isWAAEligible: l,
                    scenario: d,
                  },
                  e,
                ),
              );
            }
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(t, a, i, l) {
      var s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var i, s, d, p;
          if (l != null) return f(l, t, a);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_START,
          );
          var g = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
            h = yield (e || (e = n("Promise"))).all([m(), c()]),
            y = h[0],
            C = h[1];
          (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_END,
          ),
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .ELIGIBILITY_CHECK_START,
            ));
          var b = yield y(t);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .ELIGIBILITY_CHECK_END,
          );
          var v = _(b),
            S;
          try {
            S = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle(v, t, g);
          } catch (e) {
            throw (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix(
                  "BizNativeAdsFlowLoadable: identity bundle resolution failed for accountType: " +
                    v,
                ),
              e
            );
          }
          S == null &&
            v === "FB" &&
            b &&
            (S = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle("WAA", t, g));
          var R =
              (i = (s = S) == null ? void 0 : s.linkedPagesInfo) != null
                ? i
                : g != null
                  ? yield g
                  : null,
            L = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
              isWAAEligible: b,
              fbPageHasCreatedAd:
                (d = R == null ? void 0 : R.fbPageHasCreatedAd) != null
                  ? d
                  : !1,
              waAdsIdentityPageHasCreatedAd:
                (p = R == null ? void 0 : R.waAdsIdentityPageHasCreatedAd) !=
                null
                  ? p
                  : !1,
              hasValidFBAccessToken:
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null,
              activeIdentityType: v,
            }),
            E =
              L === "FIRST_TIME_WAA_ELIGIBLE"
                ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation
                : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement;
          (L === "FIRST_TIME_WAA_ELIGIBLE" &&
            S != null &&
            S.adCreationEntrypointReference == null &&
            (S = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).prepareDeferredAdCreationEntrypoint(S, t)),
            a == null || a());
          var k = function (n) {
            return u.jsx(
              C,
              babelHelpers.extends(
                {
                  identityBundle: S,
                  initialAdCreationFlowID: t,
                  initialStep: E,
                  isWAAEligible: b,
                  scenario: L,
                },
                n,
              ),
            );
          };
          return k;
        }),
        "BizNativeAdsFlow",
      );
      return r("WAWebLoadable")({
        loader: s,
        loading: function (t) {
          return t.error
            ? u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: i,
                }),
              })
            : a != null
              ? u.jsx(u.Fragment, {})
              : u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: i });
        },
      });
    }
    ((l.resolveAccountType = _), (l.createBizNativeAdsFlowLoadable = h));
  },
  98,
);
