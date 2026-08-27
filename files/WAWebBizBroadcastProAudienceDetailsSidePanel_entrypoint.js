__d(
  "WAWebBizBroadcastProAudienceDetailsSidePanel.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProAudienceDetailsSidePanelQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 20,
      s = {
        getPreloadProps: function (n) {
          return {
            queries: {
              queryReference: {
                options: { fetchPolicy: "network-only" },
                parameters: r(
                  "WAWebBizBroadcastProAudienceDetailsSidePanelQuery$Parameters",
                ),
                variables: {
                  audienceId: n.audienceId,
                  caId: n.audienceId,
                  first: e,
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "WAWebBizBroadcastProAudienceDetailsSidePanel.react",
        ).__setRef("WAWebBizBroadcastProAudienceDetailsSidePanel.entrypoint"),
      };
    l.default = s;
  },
  98,
);
