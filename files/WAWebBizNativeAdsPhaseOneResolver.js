__d(
  "WAWebBizNativeAdsPhaseOneResolver",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizNativeAdsFlowLoadable",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsScenarioRouter",
    "WAWebLinkedAccountsJob",
    "WAWebNoop",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n,
        a,
        i,
        l,
        c = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
      (c.catch(r("WAWebNoop")),
        (l = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
          l.AdsManagementQplPoint.BUNDLE_LOAD_START,
        ));
      var d = await Promise.all([s(), u()]),
        m = d[0];
      (l.adsManagementQplAddPoint(l.AdsManagementQplPoint.BUNDLE_LOAD_END),
        l.adsManagementQplAddPoint(
          l.AdsManagementQplPoint.ELIGIBILITY_CHECK_START,
        ));
      var p = await m(e);
      l.adsManagementQplAddPoint(l.AdsManagementQplPoint.ELIGIBILITY_CHECK_END);
      var _ = o("WAWebBizNativeAdsFlowLoadable").resolveAccountType(p),
        f = null;
      try {
        f = await c;
      } catch (e) {
        r("FBLogger")("wa_ctwa_web")
          .catching(r("getErrorSafe")(e))
          .warn(
            "PhaseOneResolver: queryLinkedPagesInfo failed, falling back to defaults",
          );
      }
      var g = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
        activeIdentityType: _,
        fbPageHasCreatedAd:
          (t = (n = f) == null ? void 0 : n.fbPageHasCreatedAd) != null
            ? t
            : !1,
        hasValidFBAccessToken:
          o(
            "WAWebBizAdCreationResolveStoredIdentity",
          ).resolveStoredIdentityForAccountType("FB") != null,
        isWAAEligible: p,
        waAdsIdentityPageHasCreatedAd:
          (a = (i = f) == null ? void 0 : i.waAdsIdentityPageHasCreatedAd) !=
          null
            ? a
            : !1,
      });
      return {
        accountType: _,
        isWAAEligible: p,
        linkedPagesPromise:
          f != null
            ? Promise.resolve(f)
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
        scenario: g,
      };
    }
    async function s() {
      var e = await r("JSResourceForInteraction")("WAWebGetWAAEligibility")
        .__setRef("WAWebBizNativeAdsPhaseOneResolver")
        .load();
      return e;
    }
    async function u() {
      var e = await r("JSResourceForInteraction")("WAWebBizNativeAdsFlow.react")
        .__setRef("WAWebBizNativeAdsPhaseOneResolver")
        .load();
      return e;
    }
    l.resolvePhaseOne = e;
  },
  98,
);
