__d(
  "WAWebEditFormUiErrorUtils",
  ["WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, { msg: e, duration: 6e3 }),
      );
    }
    l.showError = u;
  },
  98,
);
