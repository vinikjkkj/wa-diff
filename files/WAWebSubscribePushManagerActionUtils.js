__d(
  "WAWebSubscribePushManagerActionUtils",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebBackgroundSyncReporter",
    "WAWebClosedTabCallPushGating",
    "WAWebCompanionLogoutReminderPushGating",
    "WAWebFbtCommon",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumOnboardSources",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u() {
      var e = o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalOfflineNotifications();
      return ((e = v(e)), e);
    }
    function c() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalOfflineNotifications();
    }
    async function d(e) {
      var t,
        n = o("WAWebUserPrefsScreenLock").getScreenLockEnabled(),
        r =
          e &&
          ((t = window.Notification) == null ? void 0 : t.permission) ===
            o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
          o(
            "WAWebPushNotificationsGatingUtils",
          ).canEnableOfflineNotifications() &&
          !n;
      return r;
    }
    var m = 1,
      p = 2,
      _ = 0;
    function f(e) {
      return (
        e === void 0 && (e = !0),
        o("WAWebClosedTabCallPushGating").shouldReceiveClosedTabCallPushes()
          ? e
            ? m + p
            : p
          : !e &&
              o(
                "WAWebCompanionLogoutReminderPushGating",
              ).shouldReceiveCompanionLogoutReminderPushes()
            ? _
            : null
      );
    }
    function g() {
      return (
        o("WAWebClosedTabCallPushGating").shouldReceiveClosedTabCallPushes() ||
        o(
          "WAWebCompanionLogoutReminderPushGating",
        ).shouldReceiveCompanionLogoutReminderPushes()
      );
    }
    function h() {
      o("WAWebUserPrefsNotifications").setOfflineNotificationsEnabledOnce();
    }
    function y(e) {
      (o("WAWebClosedTabCallPushGating").onClosedTabCallPushInputsChange(e),
        o(
          "WAWebCompanionLogoutReminderPushGating",
        ).onCompanionLogoutReminderPushInputsChange(e));
    }
    function C() {
      return (b(), Promise.resolve());
    }
    function b() {
      var e,
        t = r("WAWebFbtCommon")("WhatsApp"),
        n = s._(/*BTDS*/ ""),
        a = s._(/*BTDS*/ ""),
        i;
      o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions() &&
        (i = s._(/*BTDS*/ ""));
      var l = "{name}",
        u = s._(/*BTDS*/ "", [s._param("name", l)]),
        c = s._(/*BTDS*/ "", [s._param("name", l)]),
        d = s._(/*BTDS*/ "", [s._param("name", l)]),
        m = s._(/*BTDS*/ "", [s._param("name", l)]),
        p = s._(/*BTDS*/ ""),
        _ = s._(/*BTDS*/ ""),
        f = r("fbs")._(/*BTDS*/ ""),
        g = r("fbs")._(/*BTDS*/ "");
      return o("WAWebUserPrefsGeneral").setOfflineNotificationContent({
        notificationTitle: t.toString(),
        notificationText: n.toString(),
        notificationSyncCompleteText: a.toString(),
        notificationSettingActionText: (e = i) == null ? void 0 : e.toString(),
        callNotification1on1AudioTitle: u.toString(),
        callNotification1on1VideoTitle: c.toString(),
        callNotificationGroupAudioTitle: d.toString(),
        callNotificationGroupVideoTitle: m.toString(),
        callNotificationBody: p.toString(),
        callNotificationUnknownCaller: _.toString(),
        callNotificationMissedAudioBody: f.toString(),
        callNotificationMissedVideoBody: g.toString(),
      });
    }
    function v(t) {
      var n;
      return !t &&
        ((n = window.Notification) == null ? void 0 : n.permission) ===
          o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
        o("WAWebMuteCollection").MuteCollection.getGlobalNotifications() &&
        o(
          "WAWebUserPrefsNotifications",
        ).getOfflineNotificationsEnabledOnce() !== !0 &&
        o("WAWebABProps").getABPropConfigValue("web_background_sync_v2")
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] Enable background sync for users once",
              ])),
          ),
          o("WAWebUserPrefsNotifications").setOfflineNotificationsEnabledOnce(),
          o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(
            !0,
          ),
          o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
            offboardSource: null,
            onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES
              .AUTO_ENABLE,
          }),
          !0)
        : t;
    }
    ((l.isOfflineNotificationsEnabled = u),
      (l.getOfflineNotificationsSetting = c),
      (l.shouldSubscribePushManager = d),
      (l.getPushPreferences = f),
      (l.shouldSubscribeWithoutBackgroundSync = g),
      (l.preventBackgroundSyncAutoEnable = h),
      (l.onPushPreferencesInputsChange = y),
      (l.updateOfflineNotificationL10nStrings = C),
      (l.updateOfflineNotificationL10nStringsForOfflineResume = b));
  },
  226,
);
