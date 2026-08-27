__d(
  "CometProfilePlusEditPreferredInteractionDialog.entrypoint",
  [
    "CometProfilePlusEditPreferredInteractionDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.partnerKey,
          r = t.profileID;
        return {
          queries: {
            queryReference: {
              parameters: n(
                "CometProfilePlusEditPreferredInteractionDialogQuery$Parameters",
              ),
              variables: {
                partnerKey: e != null ? e : null,
                profileID: r,
                scale: o("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometProfilePlusEditPreferredInteractionDialog.react",
      ).__setRef("CometProfilePlusEditPreferredInteractionDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
