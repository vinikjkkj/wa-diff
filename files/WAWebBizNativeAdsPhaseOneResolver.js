__d(
  "WAWebBizNativeAdsPhaseOneResolver",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "WAWebBizAdCreationLinkedPagesLookup",
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
        d = s(),
        m = d.linkedPagesLookupPromise,
        p = d.linkedPagesPromise;
      (l = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
        l.AdsManagementQplPoint.BUNDLE_LOAD_START,
      );
      var _ = await Promise.all([u(), c()]),
        f = _[0];
      (l.adsManagementQplAddPoint(l.AdsManagementQplPoint.BUNDLE_LOAD_END),
        l.adsManagementQplAddPoint(
          l.AdsManagementQplPoint.ELIGIBILITY_CHECK_START,
        ));
      var g = await f(e);
      l.adsManagementQplAddPoint(l.AdsManagementQplPoint.ELIGIBILITY_CHECK_END);
      var h = o("WAWebBizNativeAdsFlowLoadable").resolveAccountType(g),
        y = null;
      try {
        y = await p;
      } catch (e) {
        r("FBLogger")("wa_ctwa_web")
          .catching(r("getErrorSafe")(e))
          .warn(
            "PhaseOneResolver: queryLinkedPagesInfo failed, falling back to defaults",
          );
      }
      var C = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
        activeIdentityType: h,
        fbPageHasCreatedAd:
          (t = (n = y) == null ? void 0 : n.fbPageHasCreatedAd) != null
            ? t
            : !1,
        hasValidFBAccessToken:
          o(
            "WAWebBizAdCreationResolveStoredIdentity",
          ).resolveStoredIdentityForAccountType("FB") != null,
        isWAAEligible: g,
        waAdsIdentityPageHasCreatedAd:
          (a = (i = y) == null ? void 0 : i.waAdsIdentityPageHasCreatedAd) !=
          null
            ? a
            : !1,
      });
      return {
        accountType: h,
        isWAAEligible: g,
        linkedPagesLookupPromise: m,
        linkedPagesPromise:
          y != null
            ? Promise.resolve(y)
            : o("WAWebLinkedAccountsJob")
                .queryLinkedPagesInfo()
                .catch(function (e) {
                  return (
                    r("FBLogger")("wa_ctwa_web")
                      .catching(r("getErrorSafe")(e))
                      .warn(
                        "PhaseOneResolver: retry queryLinkedPagesInfo also failed",
                      ),
                    o("WAWebLinkedAccountsJob").toLinkedPagesInfo(null)
                  );
                }),
        scenario: C,
      };
    }
    function s() {
      var e = o("WAWebLinkedAccountsJob").queryLinkedAccountsResult(),
        t = e.then(function (e) {
          return o("WAWebLinkedAccountsJob").toLinkedPagesInfo(
            e == null ? void 0 : e.accounts,
          );
        });
      return (
        t.catch(r("WAWebNoop")),
        {
          linkedPagesLookupPromise: e
            .then(o("WAWebBizAdCreationLinkedPagesLookup").toLinkedPagesLookup)
            .catch(function () {
              return { type: "unavailable" };
            }),
          linkedPagesPromise: t,
        }
      );
    }
    async function u() {
      var e = await r("JSResourceForInteraction")("WAWebGetWAAEligibility")
        .__setRef("WAWebBizNativeAdsPhaseOneResolver")
        .load();
      return e;
    }
    async function c() {
      var e = await r("JSResourceForInteraction")("WAWebBizNativeAdsFlow.react")
        .__setRef("WAWebBizNativeAdsPhaseOneResolver")
        .load();
      return e;
    }
    l.resolvePhaseOne = e;
  },
  98,
);
