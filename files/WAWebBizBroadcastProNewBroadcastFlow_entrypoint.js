__d(
  "WAWebBizBroadcastProNewBroadcastFlow.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProNewBroadcastFlowQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.audienceId;
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: r(
                "WAWebBizBroadcastProNewBroadcastFlowQuery$Parameters",
              ),
              variables: {
                audienceId: e,
                fetchInitialAudience: e != null,
                first: 1,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizBroadcastProNewBroadcastFlow.react",
      ).__setRef("WAWebBizBroadcastProNewBroadcastFlow.entrypoint"),
    };
    l.default = e;
  },
  98,
);
