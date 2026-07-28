__d(
  "WAWebOpenNotificationsOptInModal",
  [
    "WATimeUtils",
    "WAWebModalManager",
    "WAWebNotificationsOptInModal.react",
    "WAWebNotificationsOptInModalController",
    "WAWebUserPrefsNotifications",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
        isDismissed: !0,
        lastDismissTime: o("WATimeUtils").unixTime(),
      });
    }
    function c(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebNotificationsOptInModal.react"), {
          copy: t,
          missedCount: n == null ? void 0 : n.missedCount,
          onAllow: function () {
            (n == null || n.onModalResolved == null || n.onModalResolved(),
              o(
                "WAWebNotificationsOptInModalController",
              ).requestNotificationsPermission(e, {
                showGuidePopup: !1,
                onPermissionResult: n == null ? void 0 : n.onPermissionResult,
              }));
          },
          onDismiss: function () {
            (n == null || n.onModalResolved == null || n.onModalResolved(),
              u());
          },
        }),
      );
    }
    l.openNotificationsOptInModal = c;
  },
  98,
);
