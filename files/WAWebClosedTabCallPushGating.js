__d(
  "WAWebClosedTabCallPushGating",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebCmd",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebNotificationHelpers",
    "WAWebPermissionStatusWatcher",
    "WAWebUserPrefsOfflineCallNotifications",
    "WAWebUserPrefsScreenLock",
    "WAWebVoipChromiumDesktopBrowser",
    "WAWebVoipGatingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = !1,
      c = !1,
      d = !1;
    function m() {
      return (
        b() &&
        o("WAWebNotificationHelpers").shouldEnableNotificationGranular() &&
        o(
          "WAWebUserPrefsOfflineCallNotifications",
        ).getOfflineCallNotificationsSetting() &&
        !o("WAWebUserPrefsScreenLock").getScreenLockEnabled() &&
        p()
      );
    }
    function p() {
      return v() && g();
    }
    function _() {
      return (
        o("WAWebMuteCollection").MuteCollection.isGlobalSettingsRestored() &&
        b() &&
        !o("WAWebUserPrefsScreenLock").getScreenLockEnabled() &&
        o("WAWebNotificationHelpers").shouldEnableNotificationGranular()
      );
    }
    function f(e) {
      (o("WAWebMuteCollection").MuteCollection.on(
        "change:notificationsEnabled",
        e,
      ),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", e),
        o("WAWebCmd").Cmd.on("on_notification_permission_change", e),
        o("WAWebPermissionStatusWatcher").subscribeToPermissionChange(
          "notifications",
          function () {
            return e();
          },
        ));
    }
    function g() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_calling_offline_call_notifications",
        { suppressExposure: !_() },
      );
      return (h(), e);
    }
    function h() {
      ((u = !0),
        !c &&
          ((c = !0),
          f(y),
          o("WAWebMuteCollection").MuteCollection.on(
            "global_settings_restored",
            y,
          ),
          o("WAWebUserPrefsScreenLock").screenLockSettingsEventEmitter.on(
            "change:duration",
            y,
          ),
          o("WAWebCmd").Cmd.on(
            ["starting_logout_from_bridge", "logout_from_bridge"],
            function () {
              u = !1;
            },
          ),
          o("WAWebPermissionStatusWatcher").watchPermissionState(
            "notifications",
            y,
          )));
    }
    function y() {
      !u ||
        d ||
        ((d = !0),
        (s || (s = n("Promise")))
          .resolve()
          .then(C)
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Closed-tab call exposure refresh failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("closed-tab-call-exposure-refresh-failed");
          }));
    }
    function C() {
      ((d = !1), u && p());
    }
    function b() {
      var e;
      return (
        ((e = window.Notification) == null ? void 0 : e.permission) ===
          o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
        o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications()
      );
    }
    function v() {
      return (
        o("WAWebVoipChromiumDesktopBrowser").isChromiumDesktopBrowser() &&
        !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() &&
        o("WAWebVoipGatingUtils").isCallingEnabled()
      );
    }
    ((l.shouldReceiveClosedTabCallPushes = m),
      (l.isClosedTabCallPushAvailable = p),
      (l.onClosedTabCallPushInputsChange = f));
  },
  98,
);
