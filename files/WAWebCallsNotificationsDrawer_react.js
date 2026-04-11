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
    "react-compiler-runtime",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(28),
        a = e.onClose,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Calls")), (t[0] = l))
        : (l = t[0]);
      var c = l,
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Show notifications for incoming calls")),
          (t[1] = d))
        : (d = t[1]);
      var p = d,
        g;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Play sound for incoming calls")), (t[2] = g))
        : (g = t[2]);
      var h = g,
        y = m(f),
        C = y[0],
        b = y[1],
        v;
      t[3] !== C
        ? ((v = function () {
            var e,
              t = !C;
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
                    b(!0),
                    o("WAWebSettingsSyncBridge").sendSettingChange(
                      "isCallsNotificationEnabled",
                      !0,
                    )));
              });
            } else
              (o(
                "WAWebMuteCollection",
              ).MuteCollection.setGlobalCallNotifications(t),
                b(t),
                o("WAWebSettingsSyncBridge").sendSettingChange(
                  "isCallsNotificationEnabled",
                  t,
                ));
          }),
          (t[3] = C),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R = m(_),
        L = R[0],
        E = R[1];
      n("cr:34984") != null &&
        r("WAWebAuraGating").isRingtonesBenefitActive() &&
        !o("WAWebAuraRingtonePrefs").hasExplicitRingtoneSelection() &&
        o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(
          o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone()
            ? o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID
            : o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID,
        );
      var k;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (t) {
            (o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(t),
              E(t));
          }),
          (t[5] = k))
        : (k = t[5]);
      var I = o("useWAWebSettingSync").useSettingSync(
          "shouldPlaySoundForCallNotification",
          k,
        ),
        T;
      t[6] !== L || t[7] !== I
        ? ((T = function () {
            var e = !L;
            (I(e),
              o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(
                e
                  ? o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID
                  : o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID,
              ));
          }),
          (t[6] = L),
          (t[7] = I),
          (t[8] = T))
        : (T = t[8]);
      var D = T,
        x;
      t[9] !== I
        ? ((x = function (t) {
            I(t !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID);
          }),
          (t[9] = I),
          (t[10] = x))
        : (x = t[10]);
      var $ = x,
        P;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = { surface: "unknown", viewName: "calls-notifications" }),
          (t[11] = P))
        : (P = t[11]);
      var N;
      t[12] !== a
        ? ((N = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: c,
            onBack: a,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[12] = a),
          (t[13] = N))
        : (N = t[13]);
      var M;
      t[14] !== C || t[15] !== S
        ? ((M = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
            testid: void 0,
            id: "show-calls-notification",
            checked: C,
            checkboxRightAligned: !0,
            onChange: S,
            ariaLabel: p,
            children: p,
          })),
          (t[14] = C),
          (t[15] = S),
          (t[16] = M))
        : (M = t[16]);
      var w;
      t[17] !== $ || t[18] !== L || t[19] !== D
        ? ((w =
            n("cr:34984") != null &&
            r("WAWebAuraGating").isRingtonesBenefitActive()
              ? u.jsx(n("cr:34984"), { onChange: $ })
              : u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
                  testid: void 0,
                  id: "play-call-ringtone",
                  checked: L,
                  checkboxRightAligned: !0,
                  onChange: D,
                  ariaLabel: h,
                  children: h,
                })),
          (t[17] = $),
          (t[18] = L),
          (t[19] = D),
          (t[20] = w))
        : (w = t[20]);
      var A;
      t[21] !== M || t[22] !== w
        ? ((A = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: [M, w],
            }),
          })),
          (t[21] = M),
          (t[22] = w),
          (t[23] = A))
        : (A = t[23]);
      var F;
      return (
        t[24] !== i || t[25] !== A || t[26] !== N
          ? ((F = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              tsNavigationData: P,
              children: [N, A],
            })),
            (t[24] = i),
            (t[25] = A),
            (t[26] = N),
            (t[27] = F))
          : (F = t[27]),
        F
      );
    }
    function _() {
      return o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone();
    }
    function f() {
      return o(
        "WAWebMuteCollection",
      ).MuteCollection.getGlobalCallNotifications();
    }
    l.default = p;
  },
  226,
);
