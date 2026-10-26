__d(
  "WAWebBizBroadcastProExistingAudienceModal.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProAudienceQueryConstants",
    "WAWebBizBroadcastProExistingAudienceModalAudienceListQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function () {
        return {
          queries: {
            queryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: r(
                "WAWebBizBroadcastProExistingAudienceModalAudienceListQuery$Parameters",
              ),
              variables: {
                first: o("WAWebBizBroadcastProAudienceQueryConstants")
                  .PRO_AUDIENCE_QUERY_PAGE_SIZE,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizBroadcastProExistingAudienceModal.react",
      ).__setRef("WAWebBizBroadcastProExistingAudienceModal.entrypoint"),
    };
    l.default = e;
  },
  98,
);
