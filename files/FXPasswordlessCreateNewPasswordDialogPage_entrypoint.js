__d(
  "FXPasswordlessCreateNewPasswordDialogPage.entrypoint",
  [
    "FXPasswordlessCreateNewPasswordDialogPageQuery$Parameters",
    "JSResourceForInteraction",
    "getFXDeviceID.entrypointutils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          return {
            queries: {
              query: {
                parameters: r(
                  "FXPasswordlessCreateNewPasswordDialogPageQuery$Parameters",
                ),
                variables: {
                  account_id: t.accountID,
                  device_id: r("getFXDeviceID.entrypointutils")(),
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "FXPasswordlessCreateNewPasswordDialogPage.react",
        ).__setRef("FXPasswordlessCreateNewPasswordDialogPage.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
