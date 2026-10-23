__d(
  "WAWebBizBroadcastProAddRecipientAudienceScreen.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProAddRecipientAudienceScreenQuery$Parameters",
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
                "WAWebBizBroadcastProAddRecipientAudienceScreenQuery$Parameters",
              ),
              variables: { audienceId: t.audienceId },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizBroadcastProAddRecipientAudienceScreen.react",
      ).__setRef("WAWebBizBroadcastProAddRecipientAudienceScreen.entrypoint"),
    };
    l.default = e;
  },
  98,
);
