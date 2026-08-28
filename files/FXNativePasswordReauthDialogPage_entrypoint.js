__d(
  "FXNativePasswordReauthDialogPage.entrypoint",
  [
    "FXNativePasswordReauthDialogPageQuery$Parameters",
    "JSResourceForInteraction",
    "getFXClientInterfaceName.entrypoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = babelHelpers.extends({}, t, {
            interface: r("getFXClientInterfaceName.entrypoint")(),
          });
          return {
            queries: {
              query: {
                parameters: r(
                  "FXNativePasswordReauthDialogPageQuery$Parameters",
                ),
                variables: e,
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "FXNativePasswordReauthDialogPage.react",
        ).__setRef("FXNativePasswordReauthDialogPage.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
