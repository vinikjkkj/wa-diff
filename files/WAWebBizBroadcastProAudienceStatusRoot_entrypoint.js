__d(
  "WAWebBizBroadcastProAudienceStatusRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProAudienceStatusQueryQuery$Parameters",
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
                "WAWebBizBroadcastProAudienceStatusQueryQuery$Parameters",
              ),
              variables: { audienceId: e, first: 1 },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizBroadcastProAudienceStatusRoot.react",
      ).__setRef("WAWebBizBroadcastProAudienceStatusRoot.entrypoint"),
    };
    l.default = e;
  },
  98,
);
