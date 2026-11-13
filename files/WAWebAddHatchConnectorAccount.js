__d(
  "WAWebAddHatchConnectorAccount",
  [
    "fbt",
    "WAWebHatchOAuthAttempts",
    "WAWebHatchOAuthCallbackReceiver",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWriteHatchConnectors",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      return (
        n === void 0 && (n = r("WAWebNoop")),
        o("WAWebWriteHatchConnectors")
          .requestHatchConnectorAccountLink(e)
          .then(
            function (r) {
              return (
                o(
                  "WAWebHatchOAuthCallbackReceiver",
                ).ensureHatchOAuthCallbackReceiver(),
                o("WAWebHatchOAuthAttempts").registerHatchOAuthAttempt({
                  authorizeUrl: r,
                  connectorId: e,
                  flow: "add_account",
                  onFailed: d,
                  onSettled: n,
                }),
                t.navigate(r),
                !0
              );
            },
            function () {
              return (t.close(), d(), !1);
            },
          )
      );
    }
    function d() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't update linked accounts. Try again."),
        }),
      );
    }
    ((l.addHatchConnectorAccount = c),
      (l.openHatchAccountsUpdateFailedToast = d));
  },
  226,
);
