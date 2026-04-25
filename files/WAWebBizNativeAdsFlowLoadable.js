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
    function f(t, a, i) {
      var l = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var i,
            l,
            s,
            d,
            p,
            f = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
          (p = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(
            p.AdsManagementQplPoint.BUNDLE_LOAD_START,
          );
          var g = yield (e || (e = n("Promise"))).all([m(), c()]),
            h = g[0],
            y = g[1];
          (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_END,
          ),
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .ELIGIBILITY_CHECK_START,
            ));
          var C = yield h(t);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .ELIGIBILITY_CHECK_END,
          );
          var b = _(C),
            v;
          try {
            v = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle(b, t, f);
          } catch (e) {
            throw (
              r("FBLogger")("wa_ctwa_web")
                .catching(e)
                .mustfix(
                  "BizNativeAdsFlowLoadable: identity bundle resolution failed for accountType: " +
                    b,
                ),
              e
            );
          }
          v == null &&
            b === "FB" &&
            C &&
            (v = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle("WAA", t, f));
          var S =
              (i = (l = v) == null ? void 0 : l.linkedPagesInfo) != null
                ? i
                : f != null
                  ? yield f
                  : null,
            R = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
              isWAAEligible: C,
              fbPageHasCreatedAd:
                (s = S == null ? void 0 : S.fbPageHasCreatedAd) != null
                  ? s
                  : !1,
              waAdsIdentityPageHasCreatedAd:
                (d = S == null ? void 0 : S.waAdsIdentityPageHasCreatedAd) !=
                null
                  ? d
                  : !1,
              hasValidFBAccessToken:
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null,
            }),
            L =
              R === "FIRST_TIME_WAA_ELIGIBLE"
                ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdCreation
                : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                    .AdManagement;
          (R === "FIRST_TIME_WAA_ELIGIBLE" &&
            v != null &&
            v.adCreationEntrypointReference == null &&
            (v = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).prepareDeferredAdCreationEntrypoint(v, t)),
            a == null || a());
          var E = function (n) {
            return u.jsx(
              y,
              babelHelpers.extends(
                {
                  identityBundle: v,
                  initialAdCreationFlowID: t,
                  initialStep: L,
                  isWAAEligible: C,
                  scenario: R,
                },
                n,
              ),
            );
          };
          return E;
        }),
        "BizNativeAdsFlow",
      );
      return r("WAWebLoadable")({
        loader: l,
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
    l.createBizNativeAdsFlowLoadable = f;
  },
  98,
);
