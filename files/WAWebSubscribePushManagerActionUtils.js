__d(
  "WAWebSubscribePushManagerActionUtils",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c() {
      var e = o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalOfflineNotifications();
      return ((e = _(e)), e);
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      var e,
        t = r("WAWebFbtCommon")("WhatsApp"),
        a = s._(/*BTDS*/ "Syncing messages in the background"),
        i = s._(/*BTDS*/ "Syncing messages complete"),
        l;
      o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions() &&
        (l = s._(/*BTDS*/ "Go to app"));
      var c = "{name}",
        d = s._(/*BTDS*/ "Incoming voice call from {name}", [
          s._param("name", c),
        ]),
        m = s._(/*BTDS*/ "Incoming video call from {name}", [
          s._param("name", c),
        ]),
        p = s._(/*BTDS*/ "Incoming group voice call from {name}", [
          s._param("name", c),
        ]),
        _ = s._(/*BTDS*/ "Incoming group video call from {name}", [
          s._param("name", c),
        ]),
        f = s._(/*BTDS*/ "Open WhatsApp Web to answer this call.");
      return (
        o("WAWebUserPrefsGeneral").setOfflineNotificationContent({
          notificationTitle: t.toString(),
          notificationText: a.toString(),
          notificationSyncCompleteText: i.toString(),
          notificationSettingActionText:
            (e = l) == null ? void 0 : e.toString(),
          callNotification1on1AudioTitle: d.toString(),
          callNotification1on1VideoTitle: m.toString(),
          callNotificationGroupAudioTitle: p.toString(),
          callNotificationGroupVideoTitle: _.toString(),
          callNotificationBody: f.toString(),
        }),
        (u || (u = n("Promise"))).resolve()
      );
    }
    function _(t) {
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
    ((l.isOfflineNotificationsEnabled = c),
      (l.shouldSubscribePushManager = d),
      (l.updateOfflineNotificationL10nStrings = p));
  },
  226,
);
