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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      var e = o("WAWebGuestCoreGetMobilePlatform").getGuestMobilePlatform();
      return (
        e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN ||
        e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              e &&
              ((t = window.Notification) == null ? void 0 : t.permission) ===
                o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
              o(
                "WAWebPushNotificationsGatingUtils",
              ).canEnableOfflineNotifications();
          return n;
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield f();
          o("WAWebSchemaLocalStorage").getTable().bulkCreateOrReplace(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield f();
          return o("WAWebSchemaLocalStorage").getTable().bulkCreateOrReplace(e);
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("WAWebFbtCommon")("WhatsApp"),
            t = s._(/*BTDS*/ "You have a new message"),
            n = yield o(
              "WAWebGuestMessagingGetInviterInfoAction",
            ).getInviterInfo(),
            a = n[0],
            i = n[1],
            l =
              a != null
                ? s._(/*BTDS*/ "{contactName} sent you a message", [
                    s._param("contactName", "~\u202F" + a),
                  ])
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
        })),
        g.apply(this, arguments)
      );
    }
    ((l.isOfflineNotificationsEnabled = e),
      (l.shouldSubscribePushManager = u),
      (l.updateOfflineNotificationL10nStrings = d),
      (l.updateOfflineNotificationL10nStringsForOfflineResume = p));
  },
  226,
);
