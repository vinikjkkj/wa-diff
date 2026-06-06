__d(
  "WAWebSubscribePushManagerActionUtils",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebBackgroundSyncReporter",
    "WAWebFbtCommon",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumOnboardSources",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u() {
      var e = o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalOfflineNotifications();
      return ((e = m(e)), e);
    }
    async function c(e) {
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
    function d() {
      var e,
        t = r("WAWebFbtCommon")("WhatsApp"),
        n = s._(/*BTDS*/ "Syncing messages in the background"),
        a = s._(/*BTDS*/ "Syncing messages complete"),
        i;
      o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions() &&
        (i = s._(/*BTDS*/ "Go to app"));
      var l = "{name}",
        u = s._(/*BTDS*/ "Incoming voice call from {name}", [
          s._param("name", l),
        ]),
        c = s._(/*BTDS*/ "Incoming video call from {name}", [
          s._param("name", l),
        ]),
        d = s._(/*BTDS*/ "Incoming group voice call from {name}", [
          s._param("name", l),
        ]),
        m = s._(/*BTDS*/ "Incoming group video call from {name}", [
          s._param("name", l),
        ]),
        p = s._(/*BTDS*/ "Open WhatsApp Web to answer this call.");
      return (
        o("WAWebUserPrefsGeneral").setOfflineNotificationContent({
          notificationTitle: t.toString(),
          notificationText: n.toString(),
          notificationSyncCompleteText: a.toString(),
          notificationSettingActionText:
            (e = i) == null ? void 0 : e.toString(),
          callNotification1on1AudioTitle: u.toString(),
          callNotification1on1VideoTitle: c.toString(),
          callNotificationGroupAudioTitle: d.toString(),
          callNotificationGroupVideoTitle: m.toString(),
          callNotificationBody: p.toString(),
        }),
        Promise.resolve()
      );
    }
    function m(t) {
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
      (l.shouldSubscribePushManager = c),
      (l.updateOfflineNotificationL10nStrings = d));
  },
  226,
);
