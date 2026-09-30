__d(
  "WAWebBizAiResponseSettingsV2Toasts",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
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
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Something went wrong"),
        }),
      );
    }
    ((l.showResponseSettingsSuccessToast = c),
      (l.showResponseSettingsErrorToast = d));
  },
  226,
);
