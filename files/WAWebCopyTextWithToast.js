__d(
  "WAWebCopyTextWithToast",
  ["WAWebCopyToClipboard", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.failureMsg,
        n = e.onSuccess,
        r = e.successMsg,
        a = e.text;
      o("WAWebCopyToClipboard")
        .copyTextToClipboard(a)
        .then(function (e) {
          e
            ? (o("WAWebToastManager").ToastManager.open(
                s.jsx(o("WAWebToast.react").Toast, { msg: r }),
              ),
              n == null || n())
            : o("WAWebToastManager").ToastManager.open(
                s.jsx(o("WAWebToast.react").Toast, { msg: t }),
              );
        })
        .catch(function () {
          o("WAWebToastManager").ToastManager.open(
            s.jsx(o("WAWebToast.react").Toast, { msg: t }),
          );
        });
    }
    l.copyTextWithToast = u;
  },
  98,
);
