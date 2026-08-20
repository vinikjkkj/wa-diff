__d(
  "CometUsersEntityScopedTypeaheadDialog.entrypoint",
  [
    "CometUsersEntityScopedTypeaheadDialogQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.entityID;
        return {
          queries: {
            CometUsersEntityScopedTypeaheadDialogQueryRef: {
              parameters: n(
                "CometUsersEntityScopedTypeaheadDialogQuery$Parameters",
              ),
              variables: { entityID: e, scale: o("WebPixelRatio").get() },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "CometUsersEntityScopedTypeaheadDialog.react",
      ).__setRef("CometUsersEntityScopedTypeaheadDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
