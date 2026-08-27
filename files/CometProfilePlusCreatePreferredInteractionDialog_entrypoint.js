__d(
  "CometProfilePlusCreatePreferredInteractionDialog.entrypoint",
  [
    "CometProfilePlusCreatePreferredInteractionDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.profileID;
        return {
          queries: {
            queryReference: {
              parameters: n(
                "CometProfilePlusCreatePreferredInteractionDialogQuery$Parameters",
              ),
              variables: { profileID: e, scale: o("WebPixelRatio").get() },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometProfilePlusCreatePreferredInteractionDialog.react",
      ).__setRef("CometProfilePlusCreatePreferredInteractionDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
