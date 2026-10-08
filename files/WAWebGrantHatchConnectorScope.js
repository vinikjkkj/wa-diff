__d(
  "WAWebGrantHatchConnectorScope",
  [
    "fbt",
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
      return o("WAWebWriteHatchConnectors")
        .requestHatchConnectorScopeLink(e, t)
        .then(
          function (e) {
            return e == null
              ? (n.close(), "unavailable")
              : (n.navigate(e), "opened");
          },
          function () {
            return (n.close(), "failed");
          },
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
