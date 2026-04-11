__d(
  "useWAWebBizAdManagementOpenAdPaymentModal",
  [
    "fbt",
    "WAWebBizAdManagementAdPaymentModal.react",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = o("react-compiler-runtime").c(2),
        n = _,
        a = p,
        i;
      t[0] !== e
        ? ((i = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBizAdManagementAdPaymentModal.react"), {
                onClose: m,
                onError: a,
                onSuccess: n,
                relayEnvironment: e,
              }),
            );
          }),
          (t[0] = e),
          (t[1] = i))
        : (i = t[1]);
      var l = i;
      return l;
    }
    function m() {
      return o("WAWebModalManager").ModalManager.close();
    }
    function p() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Failed to send notification. Please try again."),
            id: o("WAWebToast.react").genId(),
          }),
        ));
    }
    function _() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Notification sent"),
            id: o("WAWebToast.react").genId(),
          }),
        ));
    }
    l.default = d;
  },
  226,
);
