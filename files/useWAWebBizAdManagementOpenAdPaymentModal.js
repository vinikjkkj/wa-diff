__d(
  "useWAWebBizAdManagementOpenAdPaymentModal",
  [
    "fbt",
    "WAWebBizAdManagementAdPaymentModal.react",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = c(function () {
          (o("WAWebModalManager").ModalManager.close(),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Notification sent"),
                id: o("WAWebToast.react").genId(),
              }),
            ));
        }, []),
        n = c(function () {
          (o("WAWebModalManager").ModalManager.close(),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(
                  /*BTDS*/ "Failed to send notification. Please try again.",
                ),
                id: o("WAWebToast.react").genId(),
              }),
            ));
        }, []),
        a = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBizAdManagementAdPaymentModal.react"), {
                onClose: function () {
                  return o("WAWebModalManager").ModalManager.close();
                },
                onError: n,
                onSuccess: t,
                relayEnvironment: e,
              }),
            );
          },
          [n, t, e],
        );
      return a;
    }
    l.default = d;
  },
  226,
);
