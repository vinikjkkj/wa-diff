__d(
  "WAWebBizNativeAdsPhaseOneResolver",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationLinkedPagesLookup",
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
            m = c(),
            _ = m.linkedPagesLookupPromise,
            f = m.linkedPagesPromise;
          (u = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
            u.AdsManagementQplPoint.BUNDLE_LOAD_START,
          );
          var g = yield (e || (e = n("Promise"))).all([d(), p()]),
            h = g[0];
          (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_END,
          ),
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .ELIGIBILITY_CHECK_START,
            ));
          var y = yield h(t);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .ELIGIBILITY_CHECK_END,
          );
          var C = o("WAWebBizNativeAdsFlowLoadable").resolveAccountType(y),
            b = null;
          try {
            b = yield f;
          } catch (e) {
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .warn(
                "PhaseOneResolver: queryLinkedPagesInfo failed, falling back to defaults",
              );
          }
          var v = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario(
            {
              activeIdentityType: C,
              fbPageHasCreatedAd:
                (a = (i = b) == null ? void 0 : i.fbPageHasCreatedAd) != null
                  ? a
                  : !1,
              hasValidFBAccessToken:
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null,
              isWAAEligible: y,
              waAdsIdentityPageHasCreatedAd:
                (l =
                  (s = b) == null ? void 0 : s.waAdsIdentityPageHasCreatedAd) !=
                null
                  ? l
                  : !1,
            },
          );
          return {
            accountType: C,
            isWAAEligible: y,
            linkedPagesLookupPromise: _,
            linkedPagesPromise:
              b != null
                ? (e || (e = n("Promise"))).resolve(b)
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
            scenario: v,
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
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
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebGetWAAEligibility")
            .__setRef("WAWebBizNativeAdsPhaseOneResolver")
            .load();
          return e;
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
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizNativeAdsFlow.react",
          )
            .__setRef("WAWebBizNativeAdsPhaseOneResolver")
            .load();
          return e;
        })),
        _.apply(this, arguments)
      );
    }
    l.resolvePhaseOne = s;
  },
  98,
);
