__d(
  "ProfileCometManageSectionsDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometManageSectionsDialogQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.profileID;
        return {
          queries: {
            queryReference: {
              parameters: r("ProfileCometManageSectionsDialogQuery$Parameters"),
              variables: { id: e },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "ProfileCometManageSectionsDialog.react",
      ).__setRef("ProfileCometManageSectionsDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
