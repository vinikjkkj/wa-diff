__d(
  "WAWebOpenHatchConnectFailedToast",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't connect {connector name}. Try again.", [
            s._param("connector name", e),
          ]),
        }),
      );
    }
    l.openHatchConnectFailedToast = c;
  },
  226,
);
