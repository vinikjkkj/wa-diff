__d(
  "WAWebGrantHatchConnectorScope",
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
    function c(e, t, n, a) {
      return (
        a === void 0 && (a = r("WAWebNoop")),
        o("WAWebWriteHatchConnectors")
          .requestHatchConnectorScopeLink(e, t)
          .then(
            function (t) {
              return t == null
                ? (n.close(), "unavailable")
                : (o(
                    "WAWebHatchOAuthCallbackReceiver",
                  ).ensureHatchOAuthCallbackReceiver(),
                  o("WAWebHatchOAuthAttempts").registerHatchOAuthAttempt({
                    authorizeUrl: t,
                    connectorId: e,
                    flow: "scope_grant",
                    onFailed: d,
                    onSettled: a,
                  }),
                  n.navigate(t),
                  "opened");
            },
            function () {
              return (n.close(), "failed");
            },
          )
      );
    }
    function d() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't add access. Try again."),
        }),
      );
    }
    ((l.grantHatchConnectorScope = c), (l.openHatchScopeGrantFailedToast = d));
  },
  226,
);
