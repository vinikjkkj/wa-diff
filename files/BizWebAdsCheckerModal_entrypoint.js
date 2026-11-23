__d(
  "BizWebAdsCheckerModal.entrypoint",
  ["BizWebAdsCheckerModalQuery$Parameters", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.adAccountID,
          n = t.businessID,
          o = t.entryPoint,
          a = t.flowID,
          i = t.jtbd,
          l = t.pageID,
          s = t.productType,
          u = t.targetIGAssetID,
          c = t.useCase;
        return {
          queries: {
            BizWebAdsCheckerModalQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: r("BizWebAdsCheckerModalQuery$Parameters"),
              variables: {
                adAccountID: e,
                businessID: n,
                entryPoint: o,
                flowID: a,
                jtbd: i,
                pageID: l,
                productType: s,
                scale: 1,
                targetIGAssetID: u,
                useCase: c,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "BizWebAdsCheckerModal.react",
      ).__setRef("BizWebAdsCheckerModal.entrypoint"),
    };
    l.default = e;
  },
  98,
);
