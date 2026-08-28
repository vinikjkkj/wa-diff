__d(
  "FXNativePasswordReauthDialog.entrypoint",
  [
    "FXNativePasswordReauthDialogQuery$Parameters",
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
                parameters: r("FXNativePasswordReauthDialogQuery$Parameters"),
                variables: e,
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "FXNativePasswordReauthDialog.react",
        ).__setRef("FXNativePasswordReauthDialog.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
