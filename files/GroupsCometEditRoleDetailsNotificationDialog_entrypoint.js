__d(
  "GroupsCometEditRoleDetailsNotificationDialog.entrypoint",
  [
    "GroupsCometEditRoleDetailsNotificationDialogQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.groupID,
          r = t.taskSetID;
        return {
          queries: {
            queryReference: {
              parameters: n(
                "GroupsCometEditRoleDetailsNotificationDialogQuery$Parameters",
              ),
              variables: { groupID: e, taskSetID: r },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "GroupsCometEditRoleDetailsNotificationDialog.react",
      ).__setRef("GroupsCometEditRoleDetailsNotificationDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
