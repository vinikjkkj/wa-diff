__d(
  "CometProfilePlusRollbackDialogV2.entrypoint",
  [
    "CometProfilePlusRollbackDialogV2Query$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.profileID;
        return {
          queries: {
            cometProfilePlusRollbackQueryReference: {
              parameters: n("CometProfilePlusRollbackDialogV2Query$Parameters"),
              variables: { profileID: e },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometProfilePlusRollbackDialogV2.react",
      ).__setRef("CometProfilePlusRollbackDialogV2.entrypoint"),
    };
    l.default = e;
  },
  98,
);
