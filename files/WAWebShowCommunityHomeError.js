__d(
  "WAWebShowCommunityHomeError",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "justknobx", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      e.status === 403
        ? o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: r("justknobx")._("8068")
                ? s._(/*BTDS*/ "")
                : s._(/*BTDS*/ ""),
            }),
          )
        : e.status === 404 &&
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          );
    }
    l.showCommunityHomeError = c;
  },
  226,
);
