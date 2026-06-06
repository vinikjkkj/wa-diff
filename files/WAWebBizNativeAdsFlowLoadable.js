__d(
  "WAWebBizNativeAdsFlowLoadable",
  [
    "FBLogger",
    "JSResourceForInteraction",
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
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    async function u() {
      var e = await r("JSResourceForInteraction")("WAWebBizNativeAdsFlow.react")
        .__setRef("WAWebBizNativeAdsFlowLoadable")
        .load();
      return e.WAWebBizNativeAdsFlow;
    }
    async function c() {
      var e = await r("JSResourceForInteraction")("WAWebGetWAAEligibility")
        .__setRef("WAWebBizNativeAdsFlowLoadable")
        .load();
      return e;
    }
    function d(e) {
      var t = o(
        "WAWebBizAdCreationResolveStoredIdentity",
      ).resolveStoredAccountType();
      return t === "FB" || !e ? "FB" : "WAA";
    }
    async function m(e, t, n) {
      var a = await u(),
        i = e.accountType,
        l = e.isWAAEligible,
        c = e.linkedPagesPromise,
        d = e.scenario,
        m =
          d === "FIRST_TIME_WAA_ELIGIBLE"
            ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
            : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                .AdManagement,
        _ =
          d === "FIRST_TIME_NOT_WAA_ELIGIBLE" &&
          o(
            "WAWebBizAdCreationResolveStoredIdentity",
          ).resolveStoredIdentityForAccountType("FB") != null;
      if (
        (d === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
          d === "HAS_FB_ADS_NOT_WAA_ELIGIBLE") &&
        !_
      )
        return (
          n == null || n(),
          o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess(),
          function (e) {
            return s.jsx(
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
      var f;
      try {
        f = await o(
          "WAWebBizNativeAdsResolveRelayIdentityBundle",
        ).resolveBizNativeAdsRelayIdentityBundle(i, t, c);
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
          f != null &&
          f.adCreationEntrypointReference == null &&
          (f = await o(
            "WAWebBizNativeAdsResolveRelayIdentityBundle",
          ).prepareDeferredAdCreationEntrypoint({
            existingBundle: f,
            flowID: t,
          })),
        p(d),
        n == null || n(),
        function (e) {
          return s.jsx(
            a,
            babelHelpers.extends(
              {
                identityBundle: f,
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
    }
    function p(e) {
      (e === "FIRST_TIME_WAA_ELIGIBLE" &&
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplCancel(),
        (e === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
          e === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" ||
          e === "HAS_FB_ADS_WAA_ACTIVE") &&
          o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess());
    }
    function _(e) {
      var t = e.initialAdCreationFlowID,
        n = e.initialLoadingStep,
        a = e.onLoadComplete,
        i = e.phase1Result,
        l = r("WAWebLazyLoadedRetriable")(async function () {
          var e, n, l, p;
          if (i != null) return m(i, t, a);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_START,
          );
          var _ = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
            f = await Promise.all([c(), u()]),
            g = f[0],
            h = f[1];
          (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_END,
          ),
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .ELIGIBILITY_CHECK_START,
            ));
          var y = await g(t);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .ELIGIBILITY_CHECK_END,
          );
          var C = d(y),
            b;
          try {
            b = await o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle(C, t, _);
          } catch (e) {
            throw (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix(
                  "BizNativeAdsFlowLoadable: identity bundle resolution failed for accountType: " +
                    C,
                ),
              e
            );
          }
          b == null &&
            C === "FB" &&
            y &&
            (b = await o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle("WAA", t, _));
          var v =
              (e = (n = b) == null ? void 0 : n.linkedPagesInfo) != null
                ? e
                : _ != null
                  ? await _
                  : null,
            S = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
              activeIdentityType: C,
              fbPageHasCreatedAd:
                (l = v == null ? void 0 : v.fbPageHasCreatedAd) != null
                  ? l
                  : !1,
              hasValidFBAccessToken:
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null,
              isWAAEligible: y,
              waAdsIdentityPageHasCreatedAd:
                (p = v == null ? void 0 : v.waAdsIdentityPageHasCreatedAd) !=
                null
                  ? p
                  : !1,
            }),
            R =
              S === "FIRST_TIME_WAA_ELIGIBLE"
                ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation
                : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement;
          (S === "FIRST_TIME_WAA_ELIGIBLE" &&
            b != null &&
            b.adCreationEntrypointReference == null &&
            (b = await o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).prepareDeferredAdCreationEntrypoint({
              existingBundle: b,
              flowID: t,
            })),
            a == null || a());
          var L = function (n) {
            return s.jsx(
              h,
              babelHelpers.extends(
                {
                  identityBundle: b,
                  initialAdCreationFlowID: t,
                  initialStep: R,
                  isWAAEligible: y,
                  scenario: S,
                },
                n,
              ),
            );
          };
          return L;
        }, "BizNativeAdsFlow");
      return r("WAWebLoadable")({
        loader: l,
        loading: function (t) {
          return t.error
            ? s.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: n,
                }),
              })
            : a != null
              ? s.jsx(s.Fragment, {})
              : s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: n });
        },
      });
    }
    ((l.resolveAccountType = d), (l.createBizNativeAdsFlowLoadable = _));
  },
  98,
);
