__d(
  "WAWebSendTestNotificationAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = f || (f = o("react"));
    function h() {
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
            : g.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                initialStep:
                  o("WAWebSettingsConst").SettingsSteps.Notifications,
              }),
        ));
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield S();
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[notification-test] permission request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("notification-test-permission-failed"),
              !1
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (
            ((e = window.Notification) == null ? void 0 : e.permission) !==
            o("WAWebNotificationConstants").PERMISSION_ALLOWED
          )
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[notification-test] no permission, nothing shown",
                  ])),
              ),
              !1
            );
          try {
            return (
              yield o("WAWebNotificationBackend").showTestNotification(h),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[notification-test] example notification failed to send",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("notification-test-send-failed"),
              !1
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (window.Notification == null)
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[notification-test] no Notification API in this browser",
                  ])),
              ),
              !1
            );
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[notification-test] requested, permission=",
                  "",
                ])),
              window.Notification.permission,
            ),
            window.Notification.permission ===
              o("WAWebNotificationConstants").PERMISSION_ALLOWED)
          )
            return !0;
          var e = o("WAWebABProps").getABPropConfigValue(
              "web_notifications_banner_new_logic_enabled",
            ),
            t = window.Notification.permission,
            n = o(
              "WAWebPushNotificationsGatingUtils",
            ).canShowNotificationsBanner(t, e);
          if (t === o("WAWebNotificationConstants").PERMISSION_DENIED)
            return (
              n &&
                o("WAWebNotificationsOptInModalController").openOwnedGuidePopup(
                  e,
                ),
              !1
            );
          var r = n
              ? o("WAWebNotificationsOptInModalController").openOwnedGuidePopup(
                  e,
                )
              : null,
            a;
          try {
            a = yield L();
          } finally {
            r == null || r({ close: !0 });
          }
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[notification-test] permission prompt resolved as ",
                  "",
                ])),
              a,
            ),
            o("WAWebCmd").Cmd.onNotificationPermissionChange(),
            a === o("WAWebNotificationConstants").PERMISSION_ALLOWED
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return new (_ || (_ = n("Promise")))(function (e, t) {
        try {
          var n,
            r =
              (n = window.Notification) == null
                ? void 0
                : n.requestPermission(e);
          r == null || r.then(e, t);
        } catch (e) {
          t(e);
        }
      });
    }
    ((l.handleTestNotificationClick = h),
      (l.ensureNotificationPermission = y),
      (l.sendTestNotification = b));
  },
  98,
);
