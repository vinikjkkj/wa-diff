__d(
  "WAWebNotificationsOptInModalController",
  [
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSubscribePushManagerAction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n,
        r,
        a = (n = window.Notification) == null ? void 0 : n.permission,
        i =
          (r = t == null ? void 0 : t.showGuidePopup) == null || r
            ? c(e)
            : null;
      window.Notification.requestPermission(function (n) {
        var r =
          a === o("WAWebNotificationConstants").PERMISSION_DENIED &&
          o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(
            a,
            e,
          );
        (i == null || i({ close: !r }),
          t == null || t.onPermissionResult == null || t.onPermissionResult(n),
          n === o("WAWebNotificationConstants").PERMISSION_ALLOWED && d());
      });
    }
    function c(e) {
      var t,
        n = s.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
          messaging: t.Messaging.NOTIFICATIONS,
          onConfirm: t.guideConfirm,
          onCancel: t.notificationGuideLearnMore,
          type: t.GuidePopupType.GUIDE_ALLOW,
          enableNewBannerLogic: e,
          featureSurface: t.FeatureSurface.NOTIFICATION,
        }),
        r = n;
      function a() {
        ((r = null),
          o("WAWebModalManager").ModalManager.off("open_modal", i),
          o("WAWebModalManager").ModalManager.off("close_modal", a));
      }
      function i(e) {
        e !== r && a();
      }
      return (
        o("WAWebModalManager").ModalManager.on("open_modal", i),
        o("WAWebModalManager").ModalManager.on("close_modal", a),
        o("WAWebModalManager").ModalManager.open(n),
        function (e) {
          var t = e.close,
            n = r != null;
          (a(), n && t && o("WAWebModalManager").ModalManager.close());
        }
      );
    }
    function d() {
      var e = o("WAWebMuteCollection").MuteCollection.getGlobalNotifications();
      if (
        (e ||
          o(
            "WAWebMuteCollection",
          ).MuteCollection.setAllNotificationsAndReactions(!0),
        o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications())
      ) {
        var t = o(
          "WAWebMuteCollection",
        ).MuteCollection.getGlobalOfflineNotifications();
        t ||
          (o("WAWebSubscribePushManagerAction").handleOfflineNotifications(!0),
          o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(
            !0,
          ));
      }
    }
    l.requestNotificationsPermission = u;
  },
  98,
);
