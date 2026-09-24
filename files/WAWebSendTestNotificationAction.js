__d(
  "WAWebSendTestNotificationAction",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebNotificationBackend",
    "WAWebNotificationConstants",
    "WAWebNotificationsOptInModalController",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebUserPrefsNotifications",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[notification-test] example notification clicked, marking verified",
          ])),
      ),
        o("WAWebUserPrefsNotifications").setNotificationTestVerified(),
        o("WAWebCmd").Cmd.onNotificationTestVerified(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "settings",
                initialStep:
                  o("WAWebSettingsConst").SettingsSteps.Notifications,
              }
            : m.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                initialStep:
                  o("WAWebSettingsConst").SettingsSteps.Notifications,
              }),
        ));
    }
    function _() {
      if (window.Notification == null) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[notification-test] no Notification API in this browser",
            ])),
        );
        return;
      }
      if (
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[notification-test] requested, permission=",
              "",
            ])),
          window.Notification.permission,
        ),
        window.Notification.permission ===
          o("WAWebNotificationConstants").PERMISSION_ALLOWED)
      ) {
        o("WAWebNotificationBackend").showTestNotification(p);
        return;
      }
      var e = o("WAWebABProps").getABPropConfigValue(
          "web_notifications_banner_new_logic_enabled",
        ),
        t = window.Notification.permission,
        n = o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(
          t,
          e,
        );
      if (t === o("WAWebNotificationConstants").PERMISSION_DENIED) {
        n && o("WAWebNotificationsOptInModalController").openOwnedGuidePopup(e);
        return;
      }
      var r = n
        ? o("WAWebNotificationsOptInModalController").openOwnedGuidePopup(e)
        : null;
      window.Notification.requestPermission(function (e) {
        (r == null || r({ close: !0 }),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[notification-test] permission prompt resolved as ",
                "",
              ])),
            e,
          ),
          o("WAWebCmd").Cmd.onNotificationPermissionChange(),
          e === o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
            o("WAWebNotificationBackend").showTestNotification(p));
      });
    }
    ((l.handleTestNotificationClick = p), (l.sendTestNotification = _));
  },
  98,
);
