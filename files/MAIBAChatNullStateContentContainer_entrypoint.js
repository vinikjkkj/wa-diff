__d(
  "MAIBAChatNullStateContentContainer.entrypoint",
  [
    "AdsHelpTrayIPChatUILogger",
    "JSResourceForInteraction",
    "MAIBAChatNullStateContentContainerQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = t.adAccountId,
            n = t.requestId,
            a = t.visualContext;
          return {
            queries: {
              nullStateSummaryQueryRef: {
                parameters: r(
                  "MAIBAChatNullStateContentContainerQuery$Parameters",
                ),
                variables: {
                  adAccountId: e,
                  requestId: o(
                    "AdsHelpTrayIPChatUILogger",
                  ).trackMAIBANullStateRequest(n),
                  visualContext: a,
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "MAIBAChatNullStateContentContainer.react",
        ).__setRef("MAIBAChatNullStateContentContainer.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
