__d(
  "navigateToProductInsightsWithDefaultTab",
  [
    "AdsManagerRelayEnvironment",
    "AdsReportBuilderRoutingActions",
    "RelayHooks",
    "isPLR26Q1BetaFeaturesEnabled",
    "navigateToProductInsightsWithDefaultTabQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("navigateToProductInsightsWithDefaultTabQuery.graphql"));
    function u(e, t, n) {
      var r = e.navState,
        a =
          r != null
            ? babelHelpers.extends({}, e, {
                navState: babelHelpers.extends({}, r, { section: t }),
              })
            : e;
      o("AdsReportBuilderRoutingActions").navigateWithParams(
        a,
        function () {},
        n,
      );
    }
    function c(e, t, n) {
      if (!r("isPLR26Q1BetaFeaturesEnabled")() || e == null) {
        o("AdsReportBuilderRoutingActions").navigateWithParams(
          t,
          function () {},
          n,
        );
        return;
      }
      o("RelayHooks")
        .fetchQuery(r("AdsManagerRelayEnvironment"), s, { ad_account_id: e })
        .toPromise()
        .then(function (e) {
          var r = "PRODUCT_INSIGHTS",
            o = e == null ? void 0 : e.default_tab;
          ((o === "PRODUCT_INSIGHTS" ||
            o === "PRODUCT_REPORTS" ||
            o === "PRODUCT_BENCHMARKING" ||
            o === "PRODUCT_SETS") &&
            (r = o),
            u(t, r, n));
        })
        .catch(function () {
          o("AdsReportBuilderRoutingActions").navigateWithParams(
            t,
            function () {},
            n,
          );
        });
    }
    l.default = c;
  },
  98,
);
