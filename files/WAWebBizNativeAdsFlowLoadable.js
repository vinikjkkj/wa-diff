__d(
  "WAWebBizNativeAdsFlowLoadable",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebABProps",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebBizNativeAdsResolveRelayIdentityBundle",
    "WAWebBizNativeAdsScenarioRouter",
    "WAWebLazyLoadedRetriable",
    "WAWebLinkedAccountsJob",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "justknobx",
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
          var i = r("justknobx")._("5491"),
            l = i ? o("WAWebLinkedAccountsJob").queryLinkedPagesInfo() : null,
            s = yield (e || (e = n("Promise"))).all([m(), c()]),
            d = s[0],
            p = s[1],
            f = yield d(t),
            g = _(f),
            h;
          try {
            h = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle(g, t, l);
          } catch (e) {
            throw (
              r("FBLogger")("wa_ctwa_web")
                .catching(e)
                .mustfix(
                  "BizNativeAdsFlowLoadable: identity bundle resolution failed for accountType: " +
                    g,
                ),
              e
            );
          }
          h == null &&
            g === "FB" &&
            f &&
            (h = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle("WAA", t, l));
          var y = null;
          if (
            r("justknobx")._("4613") ||
            o("WAWebABProps").getABPropConfigValue(
              "ctwa_native_web_scenario_routing_enabled",
            )
          ) {
            var C,
              b,
              v,
              S,
              R =
                (C = (b = h) == null ? void 0 : b.linkedPagesInfo) != null
                  ? C
                  : l != null
                    ? yield l
                    : null;
            y = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
              isWAAEligible: f,
              fbPageHasCreatedAd:
                (v = R == null ? void 0 : R.fbPageHasCreatedAd) != null
                  ? v
                  : !1,
              waAdsIdentityPageHasCreatedAd:
                (S = R == null ? void 0 : R.waAdsIdentityPageHasCreatedAd) !=
                null
                  ? S
                  : !1,
              hasValidFBAccessToken:
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null,
            });
          }
          var L =
            y === "FIRST_TIME_WAA_ELIGIBLE"
              ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
              : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps
                  .AdManagement;
          a == null || a();
          var E = function (n) {
            return u.jsx(
              p,
              babelHelpers.extends(
                {
                  identityBundle: h,
                  initialAdCreationFlowID: t,
                  initialStep: L,
                  isWAAEligible: f,
                  scenario: y,
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
