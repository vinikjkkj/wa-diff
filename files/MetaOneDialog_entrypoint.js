__d(
  "MetaOneDialog.entrypoint",
  ["JSResourceForInteraction", "MetaOneDialogQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.businessID,
          r = t.entrypoint,
          o = t.productType,
          a = t.waWebDestination;
        return {
          queries: {
            metaOneDialogQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: n("MetaOneDialogQuery$Parameters"),
              variables: {
                business_id: e,
                entrypoint: r,
                product_type: o,
                wa_web_destination: a != null ? a : null,
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
