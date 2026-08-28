__d(
  "ProfileCometProfilePictureEditDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometProfilePictureEditDialogQuery$Parameters",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function () {
        return {
          queries: {
            queryReference: {
              parameters: r(
                "ProfileCometProfilePictureEditDialogQuery$Parameters",
              ),
              variables: { scale: o("WebPixelRatio").get() },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "ProfileCometProfilePictureEditDialog.react",
      ).__setRef("ProfileCometProfilePictureEditDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
