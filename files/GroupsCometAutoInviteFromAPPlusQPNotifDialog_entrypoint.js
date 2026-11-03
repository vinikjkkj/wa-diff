__d(
  "GroupsCometAutoInviteFromAPPlusQPNotifDialog.entrypoint",
  [
    "GroupsCometAutoInviteFromAPPlusQPNotifDialogQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.groupID;
        return {
          queries: {
            queryReference: {
              parameters: n(
                "GroupsCometAutoInviteFromAPPlusQPNotifDialogQuery$Parameters",
              ),
              variables: { groupID: e },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "GroupsCometAutoInviteFromAPPlusQPNotifDialog.react",
      ).__setRef("GroupsCometAutoInviteFromAPPlusQPNotifDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
