__d(
  "WAWebRunWithInternetCheck",
  [
    "Promise",
    "WAWebNetworkStatus",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t, a) {
      return r("WAWebNetworkStatus").online
        ? t()
        : (o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: a }),
          ),
          (e || (e = n("Promise"))).resolve());
    }
    l.runWithInternetCheck = c;
  },
  98,
);
