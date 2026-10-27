__d(
  "MetaOneDialog.entrypoint",
  ["JSResourceForInteraction", "MetaOneDialogQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.assetID,
          r = t.businessID,
          o = t.entrypoint,
          a = t.productType,
          i = t.waWebDestination,
          l = t.waWebSessionID;
        return {
          queries: {
            metaOneDialogQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: n("MetaOneDialogQuery$Parameters"),
              variables: {
                asset_id: e != null ? e : null,
                business_id: r,
                entrypoint: o,
                product_type: a,
                wa_web_destination: i != null ? i : null,
                wa_web_session_id: l != null ? l : null,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")("MetaOneDialog.react").__setRef(
        "MetaOneDialog.entrypoint",
      ),
    };
    l.default = e;
  },
  98,
);
