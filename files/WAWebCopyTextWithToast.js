__d(
  "WAWebCopyTextWithToast",
  ["WAWebCopyToClipboard", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, r) {
      o("WAWebCopyToClipboard")
        .copyTextToClipboard(e)
        .then(function (e) {
          e
            ? (o("WAWebToastManager").ToastManager.open(
                s.jsx(o("WAWebToast.react").Toast, { msg: t }),
              ),
              r == null || r())
            : o("WAWebToastManager").ToastManager.open(
                s.jsx(o("WAWebToast.react").Toast, { msg: n }),
              );
        })
        .catch(function () {
          o("WAWebToastManager").ToastManager.open(
            s.jsx(o("WAWebToast.react").Toast, { msg: n }),
          );
        });
    }
    l.copyTextWithToast = u;
  },
  98,
);
