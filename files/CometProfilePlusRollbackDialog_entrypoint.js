__d(
  "CometProfilePlusRollbackDialog.entrypoint",
  [
    "CometProfilePlusRollbackDialogQuery$Parameters",
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
              parameters: n("CometProfilePlusRollbackDialogQuery$Parameters"),
              variables: { profileID: e },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometProfilePlusRollbackDialog.react",
      ).__setRef("CometProfilePlusRollbackDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
