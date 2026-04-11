__d(
  "WAWebBackgroundSyncReporter",
  [
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumPushNotificationInteractions",
    "WAWebWamEnumWebNotificationSettingType",
    "WAWebWebcBackgroundSyncAdoptionWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t,
            n,
            r = yield o(
              "WAWebUserPrefsGeneral",
            ).getOfflineNotificationEngagement(),
            a =
              ((t = r == null ? void 0 : r.totalNotifShown) != null ? t : 0) >
              0,
            i =
              ((n = r == null ? void 0 : r.totalNotifTapToOpen) != null
                ? n
                : 0) > 0;
          i
            ? (e = o("WAWebWamEnumPushNotificationInteractions")
                .PUSH_NOTIFICATION_INTERACTIONS.CLICKED)
            : a &&
              (e = o("WAWebWamEnumPushNotificationInteractions")
                .PUSH_NOTIFICATION_INTERACTIONS.SHOWN);
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
      var n,
        r,
        a = t.offboardSource,
        i = t.onboardSource,
        l = o("WAWebWamEnumWebNotificationSettingType")
          .WEB_NOTIFICATION_SETTING_TYPE.UNKNOWN;
      ((n = window.Notification) == null ? void 0 : n.permission) === "granted"
        ? (l = o("WAWebWamEnumWebNotificationSettingType")
            .WEB_NOTIFICATION_SETTING_TYPE.ALLOWED)
        : ((r = window.Notification) == null ? void 0 : r.permission) ===
            "denied" &&
          (l = o("WAWebWamEnumWebNotificationSettingType")
            .WEB_NOTIFICATION_SETTING_TYPE.BLOCKED);
      var s = new (o(
        "WAWebWebcBackgroundSyncAdoptionWamEvent",
      ).WebcBackgroundSyncAdoptionWamEvent)();
      (s.set({
        offboardSource: a,
        onboardSource: i,
        pushNotificationInteraction: e,
        webOsNotificationSetting: l,
      }),
        s.commit());
    }
    ((l.setPushNotificationInteractionStatus = s),
      (l.logBackgroundSyncAdoptionEvent = c));
  },
  98,
);
