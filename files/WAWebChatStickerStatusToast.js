__d(
  "WAWebChatStickerStatusToast",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    l.showChatStickerStatusFailedToast = c;
  },
  226,
);
