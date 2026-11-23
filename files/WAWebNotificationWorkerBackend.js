__d(
  "WAWebNotificationWorkerBackend",
  [
    "WALogger",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSwResources",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WhatsApp",
      u = null,
      c = null,
      d = !1;
    function m() {
      d = !0;
    }
    var p = "open-notifications-setting",
      _ = { offlineSyncNotification: !0 };
    async function f(e) {
      if ((e === void 0 && (e = !0), !d)) return (await c, (c = g(e)), c);
    }
    async function g(e) {
      var t, n, r, a;
      return (
        u == null &&
          e &&
          (u = await o(
            "WAWebUserPrefsGeneral",
          ).getOfflineNotificationContent()),
        C(
          (t = (n = u) == null ? void 0 : n.notificationTitle) != null ? t : s,
          (r = (a = u) == null ? void 0 : a.notificationSyncCompleteText) !=
            null
            ? r
            : "Syncing messages complete",
          e,
        )
      );
    }
    async function h() {
      return c || ((c = y()), c);
    }
    async function y() {
      var e, t, n, r;
      return (
        u == null &&
          (u = await o(
            "WAWebUserPrefsGeneral",
          ).getOfflineNotificationContent()),
        C(
          (e = (t = u) == null ? void 0 : t.notificationTitle) != null ? e : s,
          (n = (r = u) == null ? void 0 : r.notificationText) != null
            ? n
            : "Syncing messages in the background",
        )
      );
    }
    async function C(t, n, a) {
      if (
        (a === void 0 && (a = !0),
        Notification.permission &&
          Notification.permission ===
            o("WAWebNotificationConstants").PERMISSION_ALLOWED)
      ) {
        var i = await v();
        return (
          i === 0 &&
            a &&
            S().catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to log offline notification shown engagement, error: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("log-offline-notifications-shown-failed");
            }),
          b(t, n, r("WAWebSwResources").wa_default_notification_icon)
        );
      }
      return Promise.resolve();
    }
    function b(e, t, n) {
      var r,
        a,
        i = {
          body: t,
          icon: n,
          actions: o(
            "WAWebPushNotificationsGatingUtils",
          ).canSupportNotificationActions()
            ? [
                {
                  action: p,
                  title:
                    (r =
                      (a = u) == null
                        ? void 0
                        : a.notificationSettingActionText) != null
                      ? r
                      : "Go to app",
                },
              ]
            : [],
          data: _,
        };
      return self.registration.showNotification(e, i);
    }
    async function v() {
      var e = await self.registration.getNotifications(),
        t = e.filter(function (e) {
          var t;
          return (
            ((t = e.data) == null ? void 0 : t.offlineSyncNotification) === !0
          );
        });
      return (
        t.forEach(function (e) {
          return e.close();
        }),
        t.length
      );
    }
    async function S() {
      var e,
        t,
        n = await o("WAWebUserPrefsGeneral").getOfflineNotificationEngagement();
      o("WAWebUserPrefsGeneral").setOfflineNotificationContentEngagement({
        totalNotifShown:
          ((e = n == null ? void 0 : n.totalNotifShown) != null ? e : 0) + 1,
        totalNotifTapToOpen:
          (t = n == null ? void 0 : n.totalNotifTapToOpen) != null ? t : 0,
      });
    }
    async function R(e, t, n, a, i) {
      if (
        (i === void 0 && (i = !1),
        Notification.permission &&
          Notification.permission ===
            o("WAWebNotificationConstants").PERMISSION_ALLOWED)
      ) {
        var l = {
          body: t,
          icon: r("WAWebSwResources").wa_default_notification_icon,
          tag: n != null ? n : void 0,
          renotify: n != null,
          requireInteraction: $(n, i),
          data: a,
        };
        return self.registration.showNotification(e, l);
      }
    }
    async function L(e) {
      var t = await self.registration.getNotifications({ tag: e });
      t.forEach(function (e) {
        return e.close();
      });
    }
    async function E(e, t, n) {
      if (
        Notification.permission &&
        Notification.permission ===
          o("WAWebNotificationConstants").PERMISSION_ALLOWED
      ) {
        var a = {
          body: t,
          icon: r("WAWebSwResources").wa_default_notification_icon,
          tag: n,
          silent: !0,
        };
        return self.registration.showNotification(e, a);
      }
    }
    function k() {
      return (
        o("WAWebUA").UA.isBlink &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    async function I(e) {
      var t = await self.registration.getNotifications();
      return t.some(function (t) {
        return e(t.data);
      });
    }
    async function T(e) {
      var t = await self.registration.getNotifications();
      t.forEach(function (t) {
        e(t.data) && t.close();
      });
    }
    async function D(e) {
      var t,
        n = await self.registration.getNotifications({ tag: e });
      return (t = n[0]) == null ? void 0 : t.data;
    }
    async function x(e) {
      var t = await self.registration.getNotifications({ tag: e });
      return t.length > 0;
    }
    function $(e, t) {
      return t && e != null && e !== "";
    }
    ((l.setHideNotifications = m),
      (l.OPEN_NOTIFICATIONS_SETTING_ACTION = p),
      (l.showPushNotificationSyncCompleteMessage = f),
      (l.showPushNotificationSyncStartMessage = h),
      (l.showCallNotification = R),
      (l.closeCallNotification = L),
      (l.showMissedCallNotification = E),
      (l.closingCanHideNewNotification = k),
      (l.hasNotificationWithData = I),
      (l.closeNotificationsWithData = T),
      (l.getCallNotificationData = D),
      (l.hasCallNotification = x));
  },
  98,
);
