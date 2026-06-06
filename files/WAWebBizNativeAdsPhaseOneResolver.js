__d(
  "WAWebBizNativeAdsPhaseOneResolver",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizNativeAdsFlowLoadable",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsScenarioRouter",
    "WAWebLinkedAccountsJob",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l,
            s,
            u,
            d = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
          (d.catch(r("WAWebNoop")),
            (u = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
              u.AdsManagementQplPoint.BUNDLE_LOAD_START,
            ));
          var p = yield (e || (e = n("Promise"))).all([c(), m()]),
            _ = p[0];
          (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_END,
          ),
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .ELIGIBILITY_CHECK_START,
            ));
          var f = yield _(t);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .ELIGIBILITY_CHECK_END,
          );
          var g = o("WAWebBizNativeAdsFlowLoadable").resolveAccountType(f),
            h = null;
          try {
            h = yield d;
          } catch (e) {
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .warn(
                "PhaseOneResolver: queryLinkedPagesInfo failed, falling back to defaults",
              );
          }
          var y = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario(
            {
              activeIdentityType: g,
              fbPageHasCreatedAd:
                (a = (i = h) == null ? void 0 : i.fbPageHasCreatedAd) != null
                  ? a
                  : !1,
              hasValidFBAccessToken:
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null,
              isWAAEligible: f,
              waAdsIdentityPageHasCreatedAd:
                (l =
                  (s = h) == null ? void 0 : s.waAdsIdentityPageHasCreatedAd) !=
                null
                  ? l
                  : !1,
            },
          );
          return {
            accountType: g,
            isWAAEligible: f,
            linkedPagesPromise:
              h != null
                ? (e || (e = n("Promise"))).resolve(h)
                : o("WAWebLinkedAccountsJob")
                    .queryLinkedPagesInfo()
                    .catch(function (e) {
                      return (
                        r("FBLogger")("wa_ctwa_web")
                          .catching(r("getErrorSafe")(e))
                          .warn(
                            "PhaseOneResolver: retry queryLinkedPagesInfo also failed",
                          ),
                        {
                          fbPageHasCreatedAd: !1,
                          fbPageId: null,
                          waAdsIdentityPageHasCreatedAd: !1,
                          waPageId: null,
                        }
                      );
                    }),
            scenario: y,
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebGetWAAEligibility")
            .__setRef("WAWebBizNativeAdsPhaseOneResolver")
            .load();
          return e;
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
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizNativeAdsFlow.react",
          )
            .__setRef("WAWebBizNativeAdsPhaseOneResolver")
            .load();
          return e;
        })),
        p.apply(this, arguments)
      );
    }
    l.resolvePhaseOne = s;
  },
  98,
);
