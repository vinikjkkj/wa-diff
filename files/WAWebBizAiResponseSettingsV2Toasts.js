__d(
  "WAWebBizAiResponseSettingsV2Toasts",
  [
    "fbt",
    "WAWebNetworkStatus",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "AI response settings updated"),
        }),
      );
    }
    function d() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: m() }),
      );
    }
    function m() {
      return r("WAWebNetworkStatus").online
        ? s._(/*BTDS*/ "Something went wrong")
        : s._(/*BTDS*/ "Check your internet connection and try again");
    }
    ((l.showResponseSettingsSuccessToast = c),
      (l.showResponseSettingsErrorToast = d));
  },
  226,
);
