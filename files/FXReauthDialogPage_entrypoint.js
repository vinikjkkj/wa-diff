__d(
  "FXReauthDialogPage.entrypoint",
  [
    "FXReauthDialogPageQuery$Parameters",
    "JSResourceForInteraction",
    "MetaConfig",
    "getFXDeviceID.entrypointutils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getPreloadProps: function (t) {
          var e = babelHelpers.extends({}, t),
            n = r("MetaConfig")._("74");
          return {
            queries: {
              query: {
                parameters: r("FXReauthDialogPageQuery$Parameters"),
                variables:
                  e.include_reauth === !0
                    ? e
                    : babelHelpers.extends({}, e, {
                        account_type: "FACEBOOK",
                        device_id: r("getFXDeviceID.entrypointutils")(),
                        include_reauth: !1,
                        target_userid: "",
                        use_fxcal_reauth_cadam: n,
                      }),
              },
            },
          };
        },
        root: r("JSResourceForInteraction")(
          "FXReauthDialogPage.react",
        ).__setRef("FXReauthDialogPage.entrypoint"),
      },
      s = e;
    l.default = s;
  },
  98,
);
