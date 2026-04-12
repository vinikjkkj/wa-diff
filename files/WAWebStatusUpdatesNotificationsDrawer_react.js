__d(
  "WAWebStatusUpdatesNotificationsDrawer.react",
  [
    "fbt",
    "WAWebGranularNotificationsDrawer.react",
    "WAWebMuteCollection",
    "WAWebNoop",
    "WAWebSettingsSyncBridge",
    "cr:7293",
    "react",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = (e = n("cr:7293")) != null ? e : {},
      m = d.getNotificationToneStatusSetting,
      p = d.setNotificationToneStatusSetting;
    function _(e) {
      var t = e.onClose,
        n = e.ref,
        a = s._(/*BTDS*/ "Status"),
        i = s._(/*BTDS*/ "Notification tone"),
        l = o("useWAWebSettingSync").useSettingSync(
          "statusNotificationToneId",
          p != null ? p : r("WAWebNoop"),
        ),
        u = o("useWAWebSettingSync").useSettingSync(
          "isStatusNotificationEnabled",
          function (e) {
            o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalStatusNotificationsEnabled(e);
          },
        ),
        d = o("useWAWebSettingSync").useSettingSync(
          "isStatusReactionsNotificationEnabled",
          function (e) {
            o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalStatusNotificationReactionsEnabled(e);
          },
        ),
        _ = {
          title: a.toString(),
          testidPrefix: "status-updates",
          getNotificationsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalStatusNotificationsEnabled();
          },
          setNotificationsEnabled: u,
          getReactionsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalStatusNotificationReactionsEnabled();
          },
          setReactionsEnabled: d,
          getSoundsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalStatusSoundsEnabled();
          },
          setSoundsEnabled: function (t) {
            (o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalStatusSoundsEnabled(t),
              o("WAWebSettingsSyncBridge").sendSettingChange(
                "statusNotificationToneId",
                t ? 1 : 0,
              ));
          },
          getNotificationToneSetting: m,
          setNotificationToneSetting: l,
          notificationToneDropdownTitle: i,
        };
      return c.jsx(r("WAWebGranularNotificationsDrawer.react"), {
        config: _,
        onClose: t,
        ref: n,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
