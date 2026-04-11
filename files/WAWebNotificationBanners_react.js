__d(
  "WAWebNotificationBanners.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebNux",
    "WAWebNuxSync",
    "WAWebSettingsConst",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsNuxPreferences",
    "WAWebWamEnumWebcButterbarActionType",
    "WAWebWamEnumWebcButterbarBbType",
    "WAWebWebcButterbarEventWamEvent",
    "WDSBanner.react",
    "react",
    "react-compiler-runtime",
    "useVisibility",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e) {
      new (o("WAWebWebcButterbarEventWamEvent").WebcButterbarEventWamEvent)({
        webcButterbarType: o("WAWebWamEnumWebcButterbarBbType")
          .WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION_AWARENESS,
        webcButterbarAction: e,
      }).commit();
    }
    function _() {
      return m(f);
    }
    function f() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      if (!e) return !1;
      var t = o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(
        o("WAWebNux").NuxSyncKey.NOTIFICATION_GRANULARITY_AWARENESS_BANNER,
      );
      if (t) return !1;
      var n = o(
        "WAWebUserPrefsNotifications",
      ).getNotificationsGranularityAwarenessBannerStatus();
      return n.isDismissed
        ? (r("WAWebNuxSync").acknowledgeNux(
            o("WAWebNux").NuxSyncKey.NOTIFICATION_GRANULARITY_AWARENESS_BANNER,
          ),
          !1)
        : !0;
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.onNavigateToNotifications,
        a = _(),
        i = a[0],
        l = a[1],
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { onVisible: h }), (t[0] = c))
        : (c = t[0]);
      var d = r("useVisibility")(c),
        m = d[0],
        f;
      t[1] !== l
        ? ((f = function () {
            (r("WAWebNuxSync").acknowledgeNux(
              o("WAWebNux").NuxSyncKey
                .NOTIFICATION_GRANULARITY_AWARENESS_BANNER,
            ),
              l(!1),
              p(
                o("WAWebWamEnumWebcButterbarActionType")
                  .WEBC_BUTTERBAR_ACTION_TYPE.CLICK_DISMISS,
              ));
          }),
          (t[1] = l),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        y;
      t[3] !== n || t[4] !== l
        ? ((y = function () {
            (n(),
              r("WAWebNuxSync").acknowledgeNux(
                o("WAWebNux").NuxSyncKey
                  .NOTIFICATION_GRANULARITY_AWARENESS_BANNER,
              ),
              l(!1),
              p(
                o("WAWebWamEnumWebcButterbarActionType")
                  .WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA,
              ));
          }),
          (t[3] = n),
          (t[4] = l),
          (t[5] = y))
        : (y = t[5]);
      var C = y;
      if (!i) return null;
      var b;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x1uvdrpn x14mko6t x1380le5 xefnzgg" }),
          (t[6] = b))
        : (b = t[6]);
      var v, S, R;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Choose your notifications")),
          (S = s._(
            /*BTDS*/ "Get notifications for messages, groups or your status.",
          )),
          (R = s._(/*BTDS*/ "Choose now")),
          (t[7] = v),
          (t[8] = S),
          (t[9] = R))
        : ((v = t[7]), (S = t[8]), (R = t[9]));
      var L;
      return (
        t[10] !== C || t[11] !== g || t[12] !== m
          ? ((L = u.jsx(
              "div",
              babelHelpers.extends({}, b, {
                children: u.jsx(r("WDSBanner.react"), {
                  ref: m,
                  type: "tip",
                  title: v,
                  body: S,
                  actionText: R,
                  onAction: C,
                  onDismiss: g,
                }),
              }),
            )),
            (t[10] = C),
            (t[11] = g),
            (t[12] = m),
            (t[13] = L))
          : (L = t[13]),
        L
      );
    }
    function h() {
      return p(
        o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE
          .IMPRESSION,
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onSettingClick,
        r;
      t[0] !== n
        ? ((r = function () {
            n(o("WAWebSettingsConst").SettingsSteps.Notifications);
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      return (
        t[2] !== a
          ? ((i = u.jsx(g, { onNavigateToNotifications: a })),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    ((l.NotificationAwarenessBanner = g), (l.WAWebNotificationBanners = y));
  },
  226,
);
