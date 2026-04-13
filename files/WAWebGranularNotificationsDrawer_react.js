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
    "react-compiler-runtime",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = (e = n("cr:7288")) != null ? e : {},
      m = d.isCustomNotificationTonesEnabled;
    function p(e) {
      var t = o("react-compiler-runtime").c(72),
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
        S;
      t[0] !== y
        ? ((S = function (t) {
            y(t);
          }),
          (t[0] = y),
          (t[1] = S))
        : (S = t[1]);
      var R = r("useWAWebToggle")(p, S),
        L = R[0],
        E = R[1],
        k;
      t[2] !== L || t[3] !== g || t[4] !== y || t[5] !== E
        ? ((k = function (t) {
            var e;
            if (
              (g(t),
              L !== t && (y(t), E()),
              t &&
                !r("WAWebEnvironment").isWindows &&
                ((e = window.Notification) == null ? void 0 : e.permission) !==
                  o("WAWebNotificationConstants").PERMISSION_ALLOWED)
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
          (t[2] = L),
          (t[3] = g),
          (t[4] = y),
          (t[5] = E),
          (t[6] = k))
        : (k = t[6]);
      var I = r("useWAWebToggle")(u, k),
        T = I[0],
        D = I[1],
        x;
      t[7] !== C
        ? ((x = function (t) {
            C(t);
          }),
          (t[7] = C),
          (t[8] = x))
        : (x = t[8]);
      var $ = r("useWAWebToggle")(_, x),
        P = $[0],
        N = $[1],
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K;
      if (
        t[9] !== d ||
        t[10] !== f ||
        t[11] !== T ||
        t[12] !== i ||
        t[13] !== L ||
        t[14] !== l ||
        t[15] !== h ||
        t[16] !== P ||
        t[17] !== b ||
        t[18] !== v ||
        t[19] !== D ||
        t[20] !== E ||
        t[21] !== N
      ) {
        var Q,
          X = s._(/*BTDS*/ "Show notifications"),
          Y = s._(/*BTDS*/ "Show reaction notifications"),
          J = s._(/*BTDS*/ "Play sound"),
          Z = (Q = m == null ? void 0 : m()) != null ? Q : !1,
          ee = Z && n("cr:7206") != null && d != null && h != null && f != null;
        ((F = r("WAWebDrawer.react")),
          (W = l),
          (q = b + "-notifications-drawer"),
          t[37] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = { surface: "unknown", viewName: "granular-notifications" }),
              (t[37] = U))
            : (U = t[37]),
          (A = o("WAWebKeyboardRotateFocus.react").RotateFocus),
          (O = o("WAWebKeyboardTabUtils").FocusType.TABBABLE));
        var te = "drawer-title-" + b + "-notifications";
        (t[38] !== i || t[39] !== te || t[40] !== v
          ? ((B = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: v,
              onBack: i,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              focusBackOrCancel: !0,
            })),
            (t[38] = i),
            (t[39] = te),
            (t[40] = v),
            (t[41] = B))
          : (B = t[41]),
          (w = r("WAWebDrawerBody.react")),
          (M = r("WAWebDrawerSection.react")),
          (V = "padding-no-vertical"),
          (H = !1),
          t[42] !== T || t[43] !== D
            ? ((G = c.jsx(
                o("WAWebSettingsCheckList.react").SettingsCheckListItem,
                {
                  testid: void 0,
                  id: "show-notifications",
                  checked: T,
                  checkboxRightAligned: !0,
                  onChange: D,
                  ariaLabel: X.toString(),
                  children: X,
                },
              )),
              (t[42] = T),
              (t[43] = D),
              (t[44] = G))
            : (G = t[44]));
        var ne = T && L,
          re = !T;
        (t[45] !== ne || t[46] !== re || t[47] !== E
          ? ((z = c.jsx(
              o("WAWebSettingsCheckList.react").SettingsCheckListItem,
              {
                testid: void 0,
                id: "show-reaction-notifications",
                checked: ne,
                checkboxRightAligned: !0,
                onChange: E,
                disabled: re,
                ariaLabel: Y.toString(),
                children: Y,
              },
            )),
            (t[45] = ne),
            (t[46] = re),
            (t[47] = E),
            (t[48] = z))
          : (z = t[48]),
          t[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = c.jsx("div", {
                className: "x1tiyuxx x1nbhmlj",
                children: c.jsx("div", {
                  className: "x178xt8z x13fuv20 xx42vgk",
                }),
              })),
              (t[49] = j))
            : (j = t[49]),
          (K =
            ee && n("cr:7206") != null && d != null && h != null && f != null
              ? c.jsx("div", {
                  className: "x134lwj9 x1i2zvha",
                  children: c.jsx(n("cr:7206"), {
                    initialTone: d(),
                    onToneSelect: h,
                    title: f,
                  }),
                })
              : c.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
                  testid: void 0,
                  id: "play-sound",
                  checked: P,
                  checkboxRightAligned: !0,
                  onChange: N,
                  ariaLabel: J.toString(),
                  children: J,
                })),
          (t[9] = d),
          (t[10] = f),
          (t[11] = T),
          (t[12] = i),
          (t[13] = L),
          (t[14] = l),
          (t[15] = h),
          (t[16] = P),
          (t[17] = b),
          (t[18] = v),
          (t[19] = D),
          (t[20] = E),
          (t[21] = N),
          (t[22] = M),
          (t[23] = w),
          (t[24] = A),
          (t[25] = F),
          (t[26] = O),
          (t[27] = B),
          (t[28] = W),
          (t[29] = q),
          (t[30] = U),
          (t[31] = V),
          (t[32] = H),
          (t[33] = G),
          (t[34] = z),
          (t[35] = j),
          (t[36] = K));
      } else
        ((M = t[22]),
          (w = t[23]),
          (A = t[24]),
          (F = t[25]),
          (O = t[26]),
          (B = t[27]),
          (W = t[28]),
          (q = t[29]),
          (U = t[30]),
          (V = t[31]),
          (H = t[32]),
          (G = t[33]),
          (z = t[34]),
          (j = t[35]),
          (K = t[36]));
      var oe;
      t[50] !== M ||
      t[51] !== V ||
      t[52] !== H ||
      t[53] !== G ||
      t[54] !== z ||
      t[55] !== j ||
      t[56] !== K
        ? ((oe = c.jsxs(M, { theme: V, animation: H, children: [G, z, j, K] })),
          (t[50] = M),
          (t[51] = V),
          (t[52] = H),
          (t[53] = G),
          (t[54] = z),
          (t[55] = j),
          (t[56] = K),
          (t[57] = oe))
        : (oe = t[57]);
      var ae;
      t[58] !== w || t[59] !== oe
        ? ((ae = c.jsx(w, { children: oe })),
          (t[58] = w),
          (t[59] = oe),
          (t[60] = ae))
        : (ae = t[60]);
      var ie;
      t[61] !== A || t[62] !== O || t[63] !== B || t[64] !== ae
        ? ((ie = c.jsxs(A, { focusType: O, children: [B, ae] })),
          (t[61] = A),
          (t[62] = O),
          (t[63] = B),
          (t[64] = ae),
          (t[65] = ie))
        : (ie = t[65]);
      var le;
      return (
        t[66] !== F || t[67] !== W || t[68] !== q || t[69] !== U || t[70] !== ie
          ? ((le = c.jsx(F, {
              ref: W,
              testid: void 0,
              tsNavigationData: U,
              children: ie,
            })),
            (t[66] = F),
            (t[67] = W),
            (t[68] = q),
            (t[69] = U),
            (t[70] = ie),
            (t[71] = le))
          : (le = t[71]),
        le
      );
    }
    l.default = p;
  },
  226,
);
