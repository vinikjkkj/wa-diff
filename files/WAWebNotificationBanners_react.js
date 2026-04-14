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
      return m(function () {
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
              o("WAWebNux").NuxSyncKey
                .NOTIFICATION_GRANULARITY_AWARENESS_BANNER,
            ),
            !1)
          : !0;
      });
    }
    function f(e) {
      var t = e.onNavigateToNotifications,
        n = _(),
        a = n[0],
        i = n[1],
        l = r("useVisibility")({
          onVisible: function () {
            return p(
              o("WAWebWamEnumWebcButterbarActionType")
                .WEBC_BUTTERBAR_ACTION_TYPE.IMPRESSION,
            );
          },
        }),
        c = l[0],
        m = d(
          function () {
            (r("WAWebNuxSync").acknowledgeNux(
              o("WAWebNux").NuxSyncKey
                .NOTIFICATION_GRANULARITY_AWARENESS_BANNER,
            ),
              i(!1),
              p(
                o("WAWebWamEnumWebcButterbarActionType")
                  .WEBC_BUTTERBAR_ACTION_TYPE.CLICK_DISMISS,
              ));
          },
          [i],
        ),
        f = d(
          function () {
            (t(),
              r("WAWebNuxSync").acknowledgeNux(
                o("WAWebNux").NuxSyncKey
                  .NOTIFICATION_GRANULARITY_AWARENESS_BANNER,
              ),
              i(!1),
              p(
                o("WAWebWamEnumWebcButterbarActionType")
                  .WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA,
              ));
          },
          [t, i],
        );
      return a
        ? u.jsx("div", {
            className: "x1uvdrpn x14mko6t x1380le5 xefnzgg",
            children: u.jsx(r("WDSBanner.react"), {
              ref: c,
              type: "tip",
              title: s._(/*BTDS*/ "Choose your notifications"),
              body: s._(
                /*BTDS*/ "Get notifications for messages, groups or your status.",
              ),
              actionText: s._(/*BTDS*/ "Choose now"),
              onAction: f,
              onDismiss: m,
            }),
          })
        : null;
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.onSettingClick,
        n = d(
          function () {
            t(o("WAWebSettingsConst").SettingsSteps.Notifications);
          },
          [t],
        );
      return u.jsx(f, { onNavigateToNotifications: n });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.NotificationAwarenessBanner = f),
      (l.WAWebNotificationBanners = g));
  },
  226,
);
