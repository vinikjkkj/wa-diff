__d(
  "FXPasswordlessConfirmAccountDialogPage.entrypoint",
  [
    "FXPasswordlessConfirmAccountDialogPageQuery$Parameters",
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
                  "FXPasswordlessConfirmAccountDialogPageQuery$Parameters",
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
          "FXPasswordlessConfirmAccountDialogPage.react",
        ).__setRef("FXPasswordlessConfirmAccountDialogPage.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
