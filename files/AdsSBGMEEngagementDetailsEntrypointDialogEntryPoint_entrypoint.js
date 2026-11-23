__d(
  "AdsSBGMEEngagementDetailsEntrypointDialogEntryPoint.entrypoint",
  [
    "AdsSBGMEEngagementDetailsEntrypointDialogQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          return {
            queries: {
              queryRef: {
                parameters: r(
                  "AdsSBGMEEngagementDetailsEntrypointDialogQuery$Parameters",
                ),
                variables: t,
                options: { fetchPolicy: "network-only" },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "AdsSBGMEEngagementDetailsEntrypointDialog.react",
        ).__setRef(
          "AdsSBGMEEngagementDetailsEntrypointDialogEntryPoint.entrypoint",
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
