__d(
  "WAWebAddHatchConnectorAccount",
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
    function c(e, t) {
      return o("WAWebWriteHatchConnectors")
        .requestHatchConnectorAccountLink(e)
        .then(
          function (e) {
            return (t.navigate(e), !0);
          },
          function () {
            return (t.close(), d(), !1);
          },
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
