__d(
  "WAWebBizNativeAdsFlowLoadable",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizNativeAdsBootstrap",
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
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = yield d(),
              s = e.accountType,
              c = e.isWAAEligible,
              m = e.linkedPagesPromise,
              p = e.scenario,
              _ = o("WAWebBizNativeAdsBootstrap").getNativeAdsBootstrap(
                p,
                a,
                i,
              ),
              f = _.initialStack,
              g = _.initialStep,
              h = _.preparation,
              C =
                g ===
                o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                  .AdCreation,
              v =
                p === "FIRST_TIME_NOT_WAA_ELIGIBLE" &&
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null;
            if (
              (p === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
                p === "HAS_FB_ADS_NOT_WAA_ELIGIBLE") &&
              !v
            )
              return (
                n == null || n(),
                o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess(),
                function (e) {
                  return u.jsx(
                    l,
                    babelHelpers.extends(
                      {
                        flowID: t,
                        identityBundle: null,
                        initialStack: f,
                        initialStep: g,
                        isWAAEligible: c,
                        scenario: p,
                      },
                      e,
                    ),
                  );
                }
              );
            var S;
            try {
              S = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).resolveBizNativeAdsRelayIdentityBundle(s, t, m);
            } catch (e) {
              throw (
                r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .mustfix(
                    "BizNativeAdsFlowLoadable: phase 2 identity resolution failed for accountType: " +
                      s,
                  ),
                e
              );
            }
            return (
              i != null && S != null && (S = yield y(S, e)),
              h != null &&
                S != null &&
                S.adCreationEntrypointReference == null &&
                (S = yield o(
                  "WAWebBizNativeAdsResolveRelayIdentityBundle",
                ).prepareDeferredAdCreationEntrypoint({
                  existingBundle: S,
                  flowID: t,
                  options: h,
                })),
              b(p, C),
              n == null || n(),
              function (e) {
                return u.jsx(
                  l,
                  babelHelpers.extends(
                    {
                      flowID: t,
                      identityBundle: S,
                      initialStack: f,
                      initialStep: g,
                      isWAAEligible: c,
                      scenario: p,
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
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return babelHelpers.extends({}, e, {
            linkedPagesLookup: yield t.linkedPagesLookupPromise,
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      if (t) {
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplCancel();
        return;
      }
      (e === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
        e === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" ||
        e === "HAS_FB_ADS_WAA_ACTIVE") &&
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess();
    }
    function v(t) {
      var a = t.boostTarget,
        i = t.flowID,
        l = t.initialLoadingStep,
        s = t.onLoadComplete,
        m = t.phase1Result,
        _ = t.task,
        h = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t, l, c, h;
            if (m != null) return g(m, i, s, a, _);
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
                    (h =
                      E == null ? void 0 : E.waAdsIdentityPageHasCreatedAd) !=
                    null
                      ? h
                      : !1,
                },
              ),
              I = o("WAWebBizNativeAdsBootstrap").getNativeAdsBootstrap(
                k,
                a,
                _,
              ),
              T = I.initialStack,
              D = I.initialStep,
              x = I.preparation;
            (x != null &&
              L != null &&
              L.adCreationEntrypointReference == null &&
              (L = yield o(
                "WAWebBizNativeAdsResolveRelayIdentityBundle",
              ).prepareDeferredAdCreationEntrypoint({
                existingBundle: L,
                flowID: i,
                options: x,
              })),
              s == null || s());
            var $ = function (t) {
              return u.jsx(
                v,
                babelHelpers.extends(
                  {
                    flowID: i,
                    identityBundle: L,
                    initialStack: T,
                    initialStep: D,
                    isWAAEligible: S,
                    scenario: k,
                  },
                  t,
                ),
              );
            };
            return $;
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        y = r("WAWebLazyLoadedRetriable")(h, "BizNativeAdsFlow", c);
      return r("WAWebLoadable")({
        loader: y,
        loading: function (t) {
          return t.error
            ? u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: l,
                }),
              })
            : S(t.pastDelay, s)
              ? u.jsx(u.Fragment, {})
              : u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: l });
        },
        renderLoadingImmediately: !0,
      });
    }
    function S(e, t) {
      return !e || t != null;
    }
    ((l.resolveAccountType = f), (l.createBizNativeAdsFlowLoadable = v));
  },
  98,
);
