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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(28),
        a = e.onCancel,
        i = e.onClose,
        l = e.onOpenCalls,
        u = e.onOpenDirectMessages,
        d = e.onOpenGroupMessages,
        m = e.onOpenStatusUpdates,
        g = e.onShowNotificationBannerClick,
        y = e.onTaskbarNotificationSettingsClick,
        C = e.ref,
        v = _(null),
        S;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            var e;
            (e = v.current) == null || e.toggleOfflineNotifications();
          }),
          (t[0] = S))
        : (S = t[0]);
      var R = S,
        L = f(!0),
        E = L[0],
        k = L[1],
        I,
        T;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            if (h) {
              var e = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = yield h();
                    k(e);
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e().catch(r("WAWebNoop"));
            }
          }),
          (T = []),
          (t[1] = I),
          (t[2] = T))
        : ((I = t[1]), (T = t[2])),
        p(I, T));
      var D;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = n("cr:4908")
            ? c.jsx(n("cr:4908"), {
                onOpenSystemNotificationSettingsRequested: b,
              })
            : null),
          (t[3] = D))
        : (D = t[3]);
      var x = D,
        $;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { surface: "unknown", viewName: "notifications-settings" }),
          (t[4] = $))
        : ($ = t[4]);
      var P;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Notifications")), (t[5] = P))
        : (P = t[5]);
      var N;
      t[6] !== a || t[7] !== i
        ? ((N = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: P,
            onCancel: a,
            onBack: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[6] = a),
          (t[7] = i),
          (t[8] = N))
        : (N = t[8]);
      var M = !E && x,
        w;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx(
            o("WAWebContextualBannerWrapperLoadable")
              .ContextualBannerWrapperLoadable,
            {
              bannerListOrderedByPriority: [
                {
                  id: o("WAWebContextualBannerConfig").ContextualBannerId
                    .BackgroundSyncUpsell,
                  onClick: function () {
                    var e;
                    (R(),
                      ((e = window.Notification) == null
                        ? void 0
                        : e.permission) ===
                        o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
                        o("WAWebToastManager").ToastManager.open(
                          c.jsx(o("WAWebToast.react").Toast, {
                            msg: s._(/*BTDS*/ "Background sync enabled"),
                          }),
                        ));
                  },
                },
              ],
            },
          )),
          (t[9] = w))
        : (w = t[9]);
      var A;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o("WAWebMuteCollection").MuteCollection.globalReactionsMute()),
          (t[10] = A))
        : (A = t[10]);
      var F;
      t[11] !== E ||
      t[12] !== l ||
      t[13] !== u ||
      t[14] !== d ||
      t[15] !== m ||
      t[16] !== g ||
      t[17] !== y
        ? ((F = c.jsx(
            r("WAWebDoNotDisturbSettings.react"),
            {
              ref: v,
              onOpenCalls: l,
              onOpenDirectMessages: u,
              onOpenGroupMessages: d,
              onOpenStatusUpdates: m,
              onShowNotificationBannerClick: g,
              onTaskbarNotificationSettingsClick: y,
              reactionsMute: A,
              isNotificationsEnabledInSystem: E,
            },
            "notifications",
          )),
          (t[11] = E),
          (t[12] = l),
          (t[13] = u),
          (t[14] = d),
          (t[15] = m),
          (t[16] = g),
          (t[17] = y),
          (t[18] = F))
        : (F = t[18]);
      var O;
      t[19] !== F || t[20] !== M
        ? ((O = c.jsxs(r("WAWebDrawerBody.react"), { children: [M, w, F] })),
          (t[19] = F),
          (t[20] = M),
          (t[21] = O))
        : (O = t[21]);
      var B;
      t[22] !== O || t[23] !== N
        ? ((B = c.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            children: [N, O],
          })),
          (t[22] = O),
          (t[23] = N),
          (t[24] = B))
        : (B = t[24]);
      var W;
      return (
        t[25] !== C || t[26] !== B
          ? ((W = c.jsx(r("WAWebDrawer.react"), {
              ref: C,
              testid: void 0,
              tsNavigationData: $,
              children: B,
            })),
            (t[25] = C),
            (t[26] = B),
            (t[27] = W))
          : (W = t[27]),
        W
      );
    }
    function b() {
      y == null || y();
    }
    l.default = C;
  },
  226,
);
