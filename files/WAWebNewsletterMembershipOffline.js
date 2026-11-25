__d(
  "WAWebNewsletterMembershipOffline",
  [
    "WAWebCommonNewsletterStrings",
    "WAWebNewsletterGatingUtils",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return o("WAWebSocketModel").Socket.state ===
        o("WAWebSocketConstants").SOCKET_STATE.CONNECTED ||
        !o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterFollowOfflineFailFastEnabled()
        ? !1
        : (e.endFailNoConnection(), !0);
    }
    function c() {
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
          msg: o("WAWebCommonNewsletterStrings").getNoInternetConnectionText(),
        }),
      );
    }
    ((l.failNewsletterMembershipChangeIfOffline = u),
      (l.showNoConnectionToast = c));
  },
  98,
);
