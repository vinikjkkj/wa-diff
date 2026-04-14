__d(
  "WAWebDirectMessagesNotificationsDrawer.react",
  [
    "fbt",
    "WAWebGranularNotificationsDrawer.react",
    "WAWebMuteCollection",
    "WAWebNoop",
    "cr:7293",
    "react",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = (e = n("cr:7293")) != null ? e : {},
      m = d.getNotificationToneSetting,
      p = d.setNotificationToneSetting;
    function _(e) {
      var t = e.onClose,
        n = e.ref,
        a = s._(/*BTDS*/ "Messages"),
        i = s._(/*BTDS*/ "Notification tone"),
        l = o("useWAWebSettingSync").useSettingSync(
          "defaultNotificationToneId",
          p != null ? p : r("WAWebNoop"),
        ),
        u = o("useWAWebSettingSync").useSettingSync(
          "isMessagesNotificationEnabled",
          function (e) {
            o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalNotificationsEnabled(e);
          },
        ),
        d = o("useWAWebSettingSync").useSettingSync(
          "isReactionsNotificationEnabled",
          function (e) {
            o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalNotificationReactionsEnabled(e);
          },
        ),
        _ = {
          title: a.toString(),
          testidPrefix: "direct-messages",
          getNotificationsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalNotificationsEnabled();
          },
          setNotificationsEnabled: u,
          getReactionsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalNotificationReactionsEnabled();
          },
          setReactionsEnabled: d,
          getSoundsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalSoundsEnabled();
          },
          setSoundsEnabled: function (t) {
            o("WAWebMuteCollection").MuteCollection.setGlobalSoundsEnabled(t);
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
