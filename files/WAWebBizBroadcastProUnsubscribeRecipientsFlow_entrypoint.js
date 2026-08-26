__d(
  "WAWebBizBroadcastProUnsubscribeRecipientsFlow.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProUnsubscribeRecipientsFlowQuery$Parameters",
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
                "WAWebBizBroadcastProUnsubscribeRecipientsFlowQuery$Parameters",
              ),
              variables: {},
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizBroadcastProUnsubscribeRecipientsFlow.react",
      ).__setRef("WAWebBizBroadcastProUnsubscribeRecipientsFlow.entrypoint"),
    };
    l.default = e;
  },
  98,
);
