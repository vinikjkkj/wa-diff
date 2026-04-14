__d(
  "WAWebNotificationsDrawer.react",
  [
    "fbt",
    "WAWebContextualBannerConfig",
    "WAWebContextualBannerWrapperLoadable",
    "WAWebDoNotDisturbSettings.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebMuteCollection",
    "WAWebNoop",
    "WAWebNotificationConstants",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "cr:3133",
    "cr:4908",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = (e = n("cr:3133")) != null ? e : {},
      h = g.IsNotificationsEnabledInSystem,
      y = g.OpenSystemNotificationsSettings;
    function C(e) {
      var t = e.onCancel,
        a = e.onClose,
        i = e.onOpenCalls,
        l = e.onOpenDirectMessages,
        u = e.onOpenGroupMessages,
        d = e.onOpenStatusUpdates,
        g = e.onShowNotificationBannerClick,
        C = e.onTaskbarNotificationSettingsClick,
        b = e.ref,
        v = _(null),
        S = m(function () {
          var e;
          (e = v.current) == null || e.toggleOfflineNotifications();
        }, []),
        R = f(!0),
        L = R[0],
        E = R[1];
      p(function () {
        if (h) {
          var e = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield h();
              E(e);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e().catch(r("WAWebNoop"));
        }
      }, []);
      var k = n("cr:4908")
        ? c.jsx(n("cr:4908"), {
            onOpenSystemNotificationSettingsRequested: function () {
              y == null || y();
            },
          })
        : null;
      return c.jsx(r("WAWebDrawer.react"), {
        ref: b,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "notifications-settings",
        },
        children: c.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: s._(/*BTDS*/ "Notifications"),
              onCancel: t,
              onBack: a,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              focusBackOrCancel: !0,
            }),
            c.jsxs(r("WAWebDrawerBody.react"), {
              children: [
                !L && k,
                c.jsx(
                  o("WAWebContextualBannerWrapperLoadable")
                    .ContextualBannerWrapperLoadable,
                  {
                    bannerListOrderedByPriority: [
                      {
                        id: o("WAWebContextualBannerConfig").ContextualBannerId
                          .BackgroundSyncUpsell,
                        onClick: function () {
                          var e;
                          (S(),
                            ((e = window.Notification) == null
                              ? void 0
                              : e.permission) ===
                              o("WAWebNotificationConstants")
                                .PERMISSION_ALLOWED &&
                              o("WAWebToastManager").ToastManager.open(
                                c.jsx(o("WAWebToast.react").Toast, {
                                  msg: s._(/*BTDS*/ "Background sync enabled"),
                                }),
                              ));
                        },
                      },
                    ],
                  },
                ),
                c.jsx(
                  r("WAWebDoNotDisturbSettings.react"),
                  {
                    ref: v,
                    onOpenCalls: i,
                    onOpenDirectMessages: l,
                    onOpenGroupMessages: u,
                    onOpenStatusUpdates: d,
                    onShowNotificationBannerClick: g,
                    onTaskbarNotificationSettingsClick: C,
                    reactionsMute: o(
                      "WAWebMuteCollection",
                    ).MuteCollection.globalReactionsMute(),
                    isNotificationsEnabledInSystem: L,
                  },
                  "notifications",
                ),
              ],
            }),
          ],
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
