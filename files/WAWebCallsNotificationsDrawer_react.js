__d(
  "WAWebCallsNotificationsDrawer.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAuraGating",
    "WAWebAuraRingtonePrefs",
    "WAWebCmd",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnvironment",
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSettingsCheckList.react",
    "WAWebSettingsSyncBridge",
    "cr:34984",
    "react",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e) {
      var t = e.onClose,
        a = e.ref,
        i = s._(/*BTDS*/ "Calls"),
        l = s._(/*BTDS*/ "Show notifications for incoming calls"),
        c = s._(/*BTDS*/ "Play sound for incoming calls"),
        p = m(function () {
          return o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalCallNotifications();
        }),
        _ = p[0],
        f = p[1],
        g = d(
          function () {
            var e,
              t = !_;
            if (
              t &&
              !r("WAWebEnvironment").isWindows &&
              ((e = window.Notification) == null ? void 0 : e.permission) !==
                o("WAWebNotificationConstants").PERMISSION_ALLOWED
            ) {
              var n,
                a = o("WAWebABProps").getABPropConfigValue(
                  "web_notifications_banner_new_logic_enabled",
                );
              if (
                o(
                  "WAWebPushNotificationsGatingUtils",
                ).canShowNotificationsBanner(
                  (n = window.Notification) == null ? void 0 : n.permission,
                  a,
                )
              ) {
                var i;
                o("WAWebModalManager").ModalManager.open(
                  u.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: i.Messaging.NOTIFICATIONS,
                    onConfirm: i.guideConfirm,
                    onCancel: i.notificationGuideLearnMore,
                    type: i.GuidePopupType.GUIDE_ALLOW,
                    enableNewBannerLogic: a,
                    featureSurface: i.FeatureSurface.NOTIFICATION,
                  }),
                );
              }
              window.Notification.requestPermission(function (e) {
                var t;
                (o(
                  "WAWebPushNotificationsGatingUtils",
                ).canShowNotificationsBanner(
                  (t = window.Notification) == null ? void 0 : t.permission,
                  a,
                ) || o("WAWebModalManager").ModalManager.close(),
                  o("WAWebCmd").Cmd.onNotificationPermissionChange(),
                  e === o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
                    (o(
                      "WAWebMuteCollection",
                    ).MuteCollection.setGlobalCallNotifications(!0),
                    f(!0),
                    o("WAWebSettingsSyncBridge").sendSettingChange(
                      "isCallsNotificationEnabled",
                      !0,
                    )));
              });
            } else
              (o(
                "WAWebMuteCollection",
              ).MuteCollection.setGlobalCallNotifications(t),
                f(t),
                o("WAWebSettingsSyncBridge").sendSettingChange(
                  "isCallsNotificationEnabled",
                  t,
                ));
          },
          [_],
        ),
        h = m(function () {
          return o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalCallRingtone();
        }),
        y = h[0],
        C = h[1];
      n("cr:34984") != null &&
        r("WAWebAuraGating").isRingtonesBenefitActive() &&
        !o("WAWebAuraRingtonePrefs").hasExplicitRingtoneSelection() &&
        o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(
          o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone()
            ? o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID
            : o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID,
        );
      var b = o("useWAWebSettingSync").useSettingSync(
          "shouldPlaySoundForCallNotification",
          function (e) {
            (o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(e),
              C(e));
          },
        ),
        v = d(
          function () {
            var e = !y;
            (b(e),
              o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(
                e
                  ? o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID
                  : o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID,
              ));
          },
          [y, b],
        ),
        S = d(
          function (e) {
            b(e !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID);
          },
          [b],
        );
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "calls-notifications",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: i,
            onBack: t,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: [
                u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
                  testid: void 0,
                  id: "show-calls-notification",
                  checked: _,
                  checkboxRightAligned: !0,
                  onChange: g,
                  ariaLabel: l,
                  children: l,
                }),
                n("cr:34984") != null &&
                r("WAWebAuraGating").isRingtonesBenefitActive()
                  ? u.jsx(n("cr:34984"), { onChange: S })
                  : u.jsx(
                      o("WAWebSettingsCheckList.react").SettingsCheckListItem,
                      {
                        testid: void 0,
                        id: "play-call-ringtone",
                        checked: y,
                        checkboxRightAligned: !0,
                        onChange: v,
                        ariaLabel: c,
                        children: c,
                      },
                    ),
              ],
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
