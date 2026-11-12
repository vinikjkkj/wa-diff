__d(
  "WAWebNewsletterShareToStatusToast",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 6e5;
    function d() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Something went wrong. Please try again later."),
        }),
      );
    }
    function m() {
      var e = o("WAWebToast.react").genId(
        "newsletter-share-to-status-preparing",
      );
      return (
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            id: e,
            duration: c,
            msg: s._(/*BTDS*/ "Preparing status\u2026"),
          }),
        ),
        function () {
          return o("WAWebToastManager").ToastManager.close(e);
        }
      );
    }
    ((l.showShareToStatusFailedToast = d), (l.showPreparingStatusToast = m));
  },
  226,
);
