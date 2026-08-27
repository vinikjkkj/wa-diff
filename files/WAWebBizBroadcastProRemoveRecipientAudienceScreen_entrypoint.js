__d(
  "WAWebBizBroadcastProRemoveRecipientAudienceScreen.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProRemoveRecipientAudienceScreenQuery$Parameters",
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
                "WAWebBizBroadcastProRemoveRecipientAudienceScreenQuery$Parameters",
              ),
              variables: { caId: t.caId, first: 20 },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizBroadcastProRemoveRecipientAudienceScreen.react",
      ).__setRef(
        "WAWebBizBroadcastProRemoveRecipientAudienceScreen.entrypoint",
      ),
    };
    l.default = e;
  },
  98,
);
