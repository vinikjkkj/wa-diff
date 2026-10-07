__d(
  "WAWebBizBroadcastProAudienceDetailsSidePanel.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProAudienceDetailsSidePanelQuery$Parameters",
    "WAWebBizBroadcastsAudiencePaginationConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: r(
                "WAWebBizBroadcastProAudienceDetailsSidePanelQuery$Parameters",
              ),
              variables: {
                audienceId: t.audienceId,
                caId: t.audienceId,
                first: o("WAWebBizBroadcastsAudiencePaginationConstants")
                  .AUDIENCE_PAGE_SIZE,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizBroadcastProAudienceDetailsSidePanel.react",
      ).__setRef("WAWebBizBroadcastProAudienceDetailsSidePanel.entrypoint"),
    };
    l.default = e;
  },
  98,
);
