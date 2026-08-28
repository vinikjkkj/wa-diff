__d(
  "FXPasswordlessEducationalDialogPage.entrypoint",
  [
    "FXPasswordlessEducationalDialogPageQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
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
                  "FXPasswordlessEducationalDialogPageQuery$Parameters",
                ),
                variables: {
                  account_id: t.accountID,
                  account_type: t.accountType,
                  device_id: r("getFXDeviceID.entrypointutils")(),
                  passwordless_account_id: t.passwordlessAccountID,
                  passwordless_flow_type_string: t.passwordlessFlowTypeString,
                  scale: o("WebPixelRatio").get(),
                  show_deletion_content: t.showDeletionContent,
                },
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "FXPasswordlessEducationalDialogPage.react",
        ).__setRef("FXPasswordlessEducationalDialogPage.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
