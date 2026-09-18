__d(
  "WAWebBizBroadcastProExistingAudienceModal.entrypoint",
  [
    "JSResourceForInteraction",
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
              variables: {},
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
