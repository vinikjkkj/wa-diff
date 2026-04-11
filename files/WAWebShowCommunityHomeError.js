__d(
  "WAWebShowCommunityHomeError",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      e.status === 403
        ? o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "You are no longer a member of this community"),
            }),
          )
        : e.status === 404 &&
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "This community no longer exists"),
            }),
          );
    }
    l.showCommunityHomeError = c;
  },
  226,
);
