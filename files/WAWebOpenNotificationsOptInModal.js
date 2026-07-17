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
    function c(e, t) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebNotificationsOptInModal.react"), {
          onAllow: function () {
            return o(
              "WAWebNotificationsOptInModalController",
            ).requestNotificationsPermission(e, {
              showGuidePopup: !1,
              onPermissionResult: t == null ? void 0 : t.onPermissionResult,
            });
          },
          onDismiss: u,
        }),
      );
    }
    l.openNotificationsOptInModal = c;
  },
  98,
);
