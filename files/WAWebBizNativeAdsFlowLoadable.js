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
    "WAWebFetchAdAccountToken",
    "WAWebLazyLoadedRetriable",
    "WAWebLinkedAccountsJob",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        isTerminalError: function (t) {
          return (
            o("WAWebFetchAdAccountToken").hasTerminalIntegrityDenial(t) &&
            r("justknobx")._("8045")
          );
        },
      };
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizNativeAdsFlow.react",
          )
            .__setRef("WAWebBizNativeAdsFlowLoadable")
            .load();
          return e.WAWebBizNativeAdsFlow;
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebGetWAAEligibility")
            .__setRef("WAWebBizNativeAdsFlowLoadable")
            .load();
          return e;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = o(
        "WAWebBizAdCreationResolveStoredIdentity",
      ).resolveStoredAccountType();
      return t === "FB" || !e ? "FB" : "WAA";
    }
    function g(e, t) {
      return t && e === "RETURNING_WITH_ADS"
        ? [
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement,
            o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
          ]
        : null;
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = yield d(),
              l = e.accountType,
              s = e.isWAAEligible,
              c = e.linkedPagesPromise,
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
              f = g(m, p),
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
                        initialStack: f,
                        initialStep: _,
                        isWAAEligible: s,
                        scenario: m,
                      },
                      e,
                    ),
                  );
                }
              );
            var y;
            try {
              y = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).resolveBizNativeAdsRelayIdentityBundle(l, t, c);
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
                y != null &&
                y.adCreationEntrypointReference == null &&
                (y = yield o(
                  "WAWebBizNativeAdsResolveRelayIdentityBundle",
                ).prepareDeferredAdCreationEntrypoint({
                  existingBundle: y,
                  flowID: t,
                })),
              C(m, p),
              n == null || n(),
              function (e) {
                return u.jsx(
                  i,
                  babelHelpers.extends(
                    {
                      flowID: t,
                      identityBundle: y,
                      initialStack: f,
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
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      if (t) {
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplCancel();
        return;
      }
      (e === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
        e === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" ||
        e === "HAS_FB_ADS_WAA_ACTIVE") &&
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess();
    }
    function b(t) {
      var a = t.boostTarget,
        i = t.flowID,
        l = t.initialLoadingStep,
        s = t.onLoadComplete,
        m = t.phase1Result,
        _ = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t, l, c, _;
            if (m != null) return h(m, i, s, a);
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .BUNDLE_LOAD_START,
            );
            var y = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
              C = yield (e || (e = n("Promise"))).all([p(), d()]),
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
            var S = yield b(i);
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .ELIGIBILITY_CHECK_END,
            );
            var R = f(S),
              L;
            try {
              L = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).resolveBizNativeAdsRelayIdentityBundle(R, i, y);
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
              ).resolveBizNativeAdsRelayIdentityBundle("WAA", i, y));
            var E =
                (t = (l = L) == null ? void 0 : l.linkedPagesInfo) != null
                  ? t
                  : y != null
                    ? yield y
                    : null,
              k = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario(
                {
                  activeIdentityType: R,
                  fbPageHasCreatedAd:
                    (c = E == null ? void 0 : E.fbPageHasCreatedAd) != null
                      ? c
                      : !1,
                  hasValidFBAccessToken:
                    o(
                      "WAWebBizAdCreationResolveStoredIdentity",
                    ).resolveStoredIdentityForAccountType("FB") != null,
                  isWAAEligible: S,
                  waAdsIdentityPageHasCreatedAd:
                    (_ =
                      E == null ? void 0 : E.waAdsIdentityPageHasCreatedAd) !=
                    null
                      ? _
                      : !1,
                },
              ),
              I = o("WAWebBizNativeAdsBoostLanding").shouldBoostOpenAdCreation(
                k,
                a,
              ),
              T = I
                ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation
                : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement,
              D = g(k, I);
            (I &&
              L != null &&
              L.adCreationEntrypointReference == null &&
              (L = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).prepareDeferredAdCreationEntrypoint({
                existingBundle: L,
                flowID: i,
              })),
              s == null || s());
            var x = function (t) {
              return u.jsx(
                v,
                babelHelpers.extends(
                  {
                    flowID: i,
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
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        y = r("WAWebLazyLoadedRetriable")(_, "BizNativeAdsFlow", c);
      return r("WAWebLoadable")({
        loader: y,
        loading: function (t) {
          return t.error
            ? u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: l,
                }),
              })
            : v(t.pastDelay, s)
              ? u.jsx(u.Fragment, {})
              : u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: l });
        },
        renderLoadingImmediately: !0,
      });
    }
    function v(e, t) {
      return !e || t != null;
    }
    ((l.resolveAccountType = f), (l.createBizNativeAdsFlowLoadable = b));
  },
  98,
);
