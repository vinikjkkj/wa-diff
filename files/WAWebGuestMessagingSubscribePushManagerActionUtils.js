__d(
  "WAWebGuestMessagingSubscribePushManagerActionUtils",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebGuestCoreConsts",
    "WAWebGuestCoreGetMobilePlatform",
    "WAWebGuestCoreLocalStorage",
    "WAWebGuestMessagingGetInviterInfoAction",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSchemaLocalStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      var e = o("WAWebGuestCoreGetMobilePlatform").getGuestMobilePlatform();
      return (
        e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN ||
        e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER
      );
    }
    function u() {
      return e();
    }
    async function c(e) {
      var t,
        n =
          e &&
          ((t = window.Notification) == null ? void 0 : t.permission) ===
            o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
          o(
            "WAWebPushNotificationsGatingUtils",
          ).canEnableOfflineNotifications();
      return n;
    }
    function d(e) {
      return null;
    }
    function m() {
      return !1;
    }
    function p() {}
    function _(e) {}
    async function f() {
      var e = await h();
      o("WAWebSchemaLocalStorage").getTable().bulkCreateOrReplace(e);
    }
    async function g() {
      var e = await h();
      return o("WAWebSchemaLocalStorage").getTable().bulkCreateOrReplace(e);
    }
    async function h() {
      var e = r("WAWebFbtCommon")("WhatsApp"),
        t = s._(/*BTDS*/ ""),
        n = await o("WAWebGuestMessagingGetInviterInfoAction").getInviterInfo(),
        a = n[0],
        i = n[1],
        l =
          a != null
            ? s._(/*BTDS*/ "", [s._param("contactName", "~\u202F" + a)])
            : t;
      return [
        {
          key: o("WAWebUserPrefsKeys").KEYS.GUEST_MSG_NOTIFICATION_TITLE,
          value: e.toString(),
        },
        {
          key: o("WAWebUserPrefsKeys").KEYS.GUEST_MSG_NOTIFICATION_TEXT,
          value: t.toString(),
        },
        {
          key: o("WAWebUserPrefsKeys").KEYS
            .GUEST_MSG_NOTIFICATION_TEXT_WITH_PUSHNAME,
          value: l.toString(),
        },
        {
          key: o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE,
          value: o("WAWebGuestCoreLocalStorage").getActiveGuestInviteCode(),
        },
        {
          key: o("WAWebUserPrefsKeys").KEYS.GUEST_INVITER_PUSHNAME,
          value: a == null ? void 0 : a.toString(),
        },
        {
          key: o("WAWebUserPrefsKeys").KEYS.GUEST_INVITER_PROFILE_PIC_URL,
          value: i == null ? void 0 : i.toString(),
        },
      ];
    }
    ((l.isOfflineNotificationsEnabled = e),
      (l.getOfflineNotificationsSetting = u),
      (l.shouldSubscribePushManager = c),
      (l.getPushPreferences = d),
      (l.shouldSubscribeWithoutBackgroundSync = m),
      (l.preventBackgroundSyncAutoEnable = p),
      (l.onPushPreferencesInputsChange = _),
      (l.updateOfflineNotificationL10nStrings = f),
      (l.updateOfflineNotificationL10nStringsForOfflineResume = g));
  },
  226,
);
