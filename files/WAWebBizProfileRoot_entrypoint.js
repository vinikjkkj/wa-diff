__d(
  "WAWebBizProfileRoot.entrypoint",
  ["JSResourceForInteraction", "WAWebBizProfileRootQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            bizProfileQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: r("WAWebBizProfileRootQuery$Parameters"),
              variables: {},
            },
          },
        };
      },
      root: r("JSResourceForInteraction")("WAWebBizProfileRoot.react").__setRef(
        "WAWebBizProfileRoot.entrypoint",
      ),
    };
    l.default = e;
  },
  98,
);
