__d(
  "ProfileCometSingleEditDialog.entrypoint",
  [
    "JSResourceForInteraction",
    "ProfileCometSingleEditDialogQuery$Parameters",
    "WebPixelRatio",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e;
        return {
          queries: {
            queryReference: {
              parameters: r("ProfileCometSingleEditDialogQuery$Parameters"),
              variables: {
                scale: o("WebPixelRatio").get(),
                shouldUseFXIMProfilePicEditor:
                  (e = r("qex")._("967")) != null ? e : !1,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "ProfileCometSingleEditDialog.react",
      ).__setRef("ProfileCometSingleEditDialog.entrypoint"),
    };
    l.default = e;
  },
  98,
);
