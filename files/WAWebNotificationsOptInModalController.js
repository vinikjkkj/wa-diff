__d(
  "WAWebNotificationsOptInModalController",
  [
    "WATimeUtils",
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebNotificationsOptInModal.react",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSubscribePushManagerAction",
    "WAWebUserPrefsNotifications",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n,
        r = (n = t == null ? void 0 : t.showGuidePopup) != null ? n : !0;
      if (r) {
        var a;
        o("WAWebModalManager").ModalManager.open(
          s.jsx((a = o("WAWebGuidePopup.react")).GuidePopup, {
            messaging: a.Messaging.NOTIFICATIONS,
            onConfirm: a.guideConfirm,
            onCancel: a.notificationGuideLearnMore,
            type: a.GuidePopupType.GUIDE_ALLOW,
            enableNewBannerLogic: e,
            featureSurface: a.FeatureSurface.NOTIFICATION,
          }),
        );
      }
      window.Notification.requestPermission(function (n) {
        var a;
        if (
          (r &&
            !o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(
              (a = window.Notification) == null ? void 0 : a.permission,
              e,
            ) &&
            o("WAWebModalManager").ModalManager.close(),
          t == null || t.onPermissionResult == null || t.onPermissionResult(n),
          n === o("WAWebNotificationConstants").PERMISSION_ALLOWED)
        ) {
          var i = o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalNotifications();
          if (
            (i ||
              o(
                "WAWebMuteCollection",
              ).MuteCollection.setAllNotificationsAndReactions(!0),
            o(
              "WAWebPushNotificationsGatingUtils",
            ).canEnableOfflineNotifications())
          ) {
            var l = o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalOfflineNotifications();
            l ||
              (o("WAWebSubscribePushManagerAction").handleOfflineNotifications(
                !0,
              ),
              o(
                "WAWebMuteCollection",
              ).MuteCollection.setGlobalOfflineNotifications(!0));
          }
        }
      });
    }
    function c() {
      o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
        isDismissed: !0,
        lastDismissTime: o("WATimeUtils").unixTime(),
      });
    }
    function d(e, t) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebNotificationsOptInModal.react"), {
          onAllow: function () {
            return u(e, {
              showGuidePopup: !1,
              onPermissionResult: t == null ? void 0 : t.onPermissionResult,
            });
          },
          onDismiss: c,
        }),
      );
    }
    ((l.requestNotificationsPermission = u),
      (l.openNotificationsOptInModal = d));
  },
  98,
);
