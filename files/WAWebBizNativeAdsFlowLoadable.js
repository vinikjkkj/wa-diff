__d(
  "WAWebBizNativeAdsFlowLoadable",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebBizNativeAdsResolveRelayIdentityBundle",
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
    function f(t, a) {
      var i = r("WAWebLazyLoadedRetriable")(
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
          (h == null &&
            g === "FB" &&
            f &&
            (h = yield o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle("WAA", t, l)),
            a == null || a());
          var y = function (n) {
            return u.jsx(
              p,
              babelHelpers.extends(
                {
                  identityBundle: h,
                  isWAAEligible: f,
                  initialAdCreationFlowID: t,
                },
                n,
              ),
            );
          };
          return y;
        }),
        "BizNativeAdsFlow",
      );
      return r("WAWebLoadable")({
        loader: i,
        loading: function (t) {
          return t.error
            ? u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {}),
              })
            : a != null
              ? u.jsx(u.Fragment, {})
              : u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {});
        },
      });
    }
    l.createBizNativeAdsFlowLoadable = f;
  },
  98,
);
