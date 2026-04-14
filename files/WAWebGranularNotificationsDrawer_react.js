__d(
  "WAWebGranularNotificationsDrawer.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCmd",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnvironment",
    "WAWebGuidePopup.react",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSettingsCheckList.react",
    "cr:7206",
    "cr:7288",
    "react",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = (e = n("cr:7288")) != null ? e : {},
      m = d.isCustomNotificationTonesEnabled;
    function p(e) {
      var t,
        a = e.config,
        i = e.onClose,
        l = e.ref,
        u = a.getNotificationsEnabled,
        d = a.getNotificationToneSetting,
        p = a.getReactionsEnabled,
        _ = a.getSoundsEnabled,
        f = a.notificationToneDropdownTitle,
        g = a.setNotificationsEnabled,
        h = a.setNotificationToneSetting,
        y = a.setReactionsEnabled,
        C = a.setSoundsEnabled,
        b = a.testidPrefix,
        v = a.title,
        S = r("useWAWebToggle")(p, function (e) {
          y(e);
        }),
        R = S[0],
        L = S[1],
        E = r("useWAWebToggle")(u, function (e) {
          var t;
          if (
            (g(e),
            R !== e && (y(e), L()),
            e &&
              !r("WAWebEnvironment").isWindows &&
              ((t = window.Notification) == null ? void 0 : t.permission) !==
                o("WAWebNotificationConstants").PERMISSION_ALLOWED)
          ) {
            var n,
              a = o("WAWebABProps").getABPropConfigValue(
                "web_notifications_banner_new_logic_enabled",
              );
            if (
              o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(
                (n = window.Notification) == null ? void 0 : n.permission,
                a,
              )
            ) {
              var i;
              o("WAWebModalManager").ModalManager.open(
                c.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
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
                o("WAWebCmd").Cmd.onNotificationPermissionChange());
            });
          }
        }),
        k = E[0],
        I = E[1],
        T = r("useWAWebToggle")(_, function (e) {
          C(e);
        }),
        D = T[0],
        x = T[1],
        $ = s._(/*BTDS*/ "Show notifications"),
        P = s._(/*BTDS*/ "Show reaction notifications"),
        N = s._(/*BTDS*/ "Play sound"),
        M = (t = m == null ? void 0 : m()) != null ? t : !1,
        w = M && n("cr:7206") != null && d != null && h != null && f != null;
      return c.jsx(r("WAWebDrawer.react"), {
        ref: l,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "granular-notifications",
        },
        children: c.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: v,
              onBack: i,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              focusBackOrCancel: !0,
            }),
            c.jsx(r("WAWebDrawerBody.react"), {
              children: c.jsxs(r("WAWebDrawerSection.react"), {
                theme: "padding-no-vertical",
                animation: !1,
                children: [
                  c.jsx(
                    o("WAWebSettingsCheckList.react").SettingsCheckListItem,
                    {
                      testid: void 0,
                      id: "show-notifications",
                      checked: k,
                      checkboxRightAligned: !0,
                      onChange: I,
                      ariaLabel: $.toString(),
                      children: $,
                    },
                  ),
                  c.jsx(
                    o("WAWebSettingsCheckList.react").SettingsCheckListItem,
                    {
                      testid: void 0,
                      id: "show-reaction-notifications",
                      checked: k && R,
                      checkboxRightAligned: !0,
                      onChange: L,
                      disabled: !k,
                      ariaLabel: P.toString(),
                      children: P,
                    },
                  ),
                  c.jsx("div", {
                    className: "x1tiyuxx x1nbhmlj",
                    children: c.jsx("div", {
                      className: "x178xt8z x13fuv20 xx42vgk",
                    }),
                  }),
                  w &&
                  n("cr:7206") != null &&
                  d != null &&
                  h != null &&
                  f != null
                    ? c.jsx("div", {
                        className: "x134lwj9 x1i2zvha",
                        children: c.jsx(n("cr:7206"), {
                          initialTone: d(),
                          onToneSelect: h,
                          title: f,
                        }),
                      })
                    : c.jsx(
                        o("WAWebSettingsCheckList.react").SettingsCheckListItem,
                        {
                          testid: void 0,
                          id: "play-sound",
                          checked: D,
                          checkboxRightAligned: !0,
                          onChange: x,
                          ariaLabel: N.toString(),
                          children: N,
                        },
                      ),
                ],
              }),
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
