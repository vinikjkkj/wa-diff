__d(
  "AdsQuickCreateMAIBAContextAssets.entrypoint",
  [
    "AdsQuickCreateMAIBAContextAssetsRootQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = t.adAccountID,
            n = t.fetchKey;
          return {
            queries: {
              contextAssetsQueryRef: {
                parameters: r(
                  "AdsQuickCreateMAIBAContextAssetsRootQuery$Parameters",
                ),
                variables: { adAccountID: e, includeCatalogs: !0 },
                options: {
                  fetchKey: String(n),
                  fetchPolicy: n > 0 ? "network-only" : "store-or-network",
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "AdsQuickCreateMAIBAContextAssetsRoot.react",
        ).__setRef("AdsQuickCreateMAIBAContextAssets.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
