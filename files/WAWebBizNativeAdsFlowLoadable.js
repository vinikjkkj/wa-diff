__d(
  "WAWebBizNativeAdsFlowLoadable",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizNativeAdsBoostLanding",
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
    function f(e, t) {
      return t && e === "RETURNING_WITH_ADS"
        ? [
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement,
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
          ]
        : null;
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = yield c(),
              l = e.accountType,
              s = e.isWAAEligible,
              d = e.linkedPagesPromise,
              m = e.scenario,
              p = o("WAWebBizNativeAdsBoostLanding").shouldBoostOpenAdCreation(
                m,
                a,
              ),
              _ = p
                ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation
                : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement,
              g = f(m, p),
              h =
                m === "FIRST_TIME_NOT_WAA_ELIGIBLE" &&
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null;
            if (
              (m === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
                m === "HAS_FB_ADS_NOT_WAA_ELIGIBLE") &&
              !h
            )
              return (
                n == null || n(),
                o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess(),
                function (e) {
                  return u.jsx(
                    i,
                    babelHelpers.extends(
                      {
                        flowID: t,
                        identityBundle: null,
                        initialStack: g,
                        initialStep: _,
                        isWAAEligible: s,
                        scenario: m,
                      },
                      e,
                    ),
                  );
                }
              );
            var C;
            try {
              C = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).resolveBizNativeAdsRelayIdentityBundle(l, t, d);
            } catch (e) {
              throw (
                r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .mustfix(
                    "BizNativeAdsFlowLoadable: phase 2 identity resolution failed for accountType: " +
                      l,
                  ),
                e
              );
            }
            return (
              p &&
                C != null &&
                C.adCreationEntrypointReference == null &&
                (C = yield o(
                  "WAWebBizNativeAdsResolveRelayIdentityBundle",
                ).prepareDeferredAdCreationEntrypoint({
                  existingBundle: C,
                  flowID: t,
                })),
              y(m, p),
              n == null || n(),
              function (e) {
                return u.jsx(
                  i,
                  babelHelpers.extends(
                    {
                      flowID: t,
                      identityBundle: C,
                      initialStack: g,
                      initialStep: _,
                      isWAAEligible: s,
                      scenario: m,
                    },
                    e,
                  ),
                );
              }
            );
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      if (t) {
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplCancel();
        return;
      }
      (e === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
        e === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" ||
        e === "HAS_FB_ADS_WAA_ACTIVE") &&
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess();
    }
    function C(t) {
      var a = t.flowID,
        i = t.initialLoadingStep,
        l = t.onLoadComplete,
        s = t.phase1Result,
        d = t.preselectedProductId,
        p = r("WAWebLazyLoadedRetriable")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t, i, p, h;
            if (s != null) return g(s, a, l, d);
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .BUNDLE_LOAD_START,
            );
            var y = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
              C = yield (e || (e = n("Promise"))).all([m(), c()]),
              b = C[0],
              v = C[1];
            (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .BUNDLE_LOAD_END,
            ),
              o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
                o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                  .ELIGIBILITY_CHECK_START,
              ));
            var S = yield b(a);
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .ELIGIBILITY_CHECK_END,
            );
            var R = _(S),
              L;
            try {
              L = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).resolveBizNativeAdsRelayIdentityBundle(R, a, y);
            } catch (e) {
              throw (
                r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .mustfix(
                    "BizNativeAdsFlowLoadable: identity bundle resolution failed for accountType: " +
                      R,
                  ),
                e
              );
            }
            L == null &&
              R === "FB" &&
              S &&
              (L = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).resolveBizNativeAdsRelayIdentityBundle("WAA", a, y));
            var E =
                (t = (i = L) == null ? void 0 : i.linkedPagesInfo) != null
                  ? t
                  : y != null
                    ? yield y
                    : null,
              k = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario(
                {
                  activeIdentityType: R,
                  fbPageHasCreatedAd:
                    (p = E == null ? void 0 : E.fbPageHasCreatedAd) != null
                      ? p
                      : !1,
                  hasValidFBAccessToken:
                    o(
                      "WAWebBizAdCreationResolveStoredIdentity",
                    ).resolveStoredIdentityForAccountType("FB") != null,
                  isWAAEligible: S,
                  waAdsIdentityPageHasCreatedAd:
                    (h =
                      E == null ? void 0 : E.waAdsIdentityPageHasCreatedAd) !=
                    null
                      ? h
                      : !1,
                },
              ),
              I = o("WAWebBizNativeAdsBoostLanding").shouldBoostOpenAdCreation(
                k,
                d,
              ),
              T = I
                ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation
                : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement,
              D = f(k, I);
            (I &&
              L != null &&
              L.adCreationEntrypointReference == null &&
              (L = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).prepareDeferredAdCreationEntrypoint({
                existingBundle: L,
                flowID: a,
              })),
              l == null || l());
            var x = function (t) {
              return u.jsx(
                v,
                babelHelpers.extends(
                  {
                    flowID: a,
                    identityBundle: L,
                    initialStack: D,
                    initialStep: T,
                    isWAAEligible: S,
                    scenario: k,
                  },
                  t,
                ),
              );
            };
            return x;
          }),
          "BizNativeAdsFlow",
        );
      return r("WAWebLoadable")({
        loader: p,
        loading: function (t) {
          return t.error
            ? u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: i,
                }),
              })
            : l != null
              ? u.jsx(u.Fragment, {})
              : u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: i });
        },
      });
    }
    ((l.resolveAccountType = _), (l.createBizNativeAdsFlowLoadable = C));
  },
  98,
);
