__d(
  "WAWebGroupMessagesNotificationsDrawer.react",
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
      m = d.getNotificationToneGroupSetting,
      p = d.setNotificationToneGroupSetting;
    function _(e) {
      var t = e.onClose,
        n = e.ref,
        a = s._(/*BTDS*/ "Groups"),
        i = s._(/*BTDS*/ "Notification tone"),
        l = o("useWAWebSettingSync").useSettingSync(
          "groupDefaultNotificationToneId",
          p != null ? p : r("WAWebNoop"),
        ),
        u = o("useWAWebSettingSync").useSettingSync(
          "isGroupMessageNotificationEnabled",
          function (e) {
            o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalGroupNotificationsEnabled(e);
          },
        ),
        d = o("useWAWebSettingSync").useSettingSync(
          "isGroupReactionsNotificationEnabled",
          function (e) {
            o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalGroupNotificationReactionsEnabled(e);
          },
        ),
        _ = {
          title: a.toString(),
          testidPrefix: "group-messages",
          getNotificationsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupNotificationsEnabled();
          },
          setNotificationsEnabled: u,
          getReactionsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupNotificationReactionsEnabled();
          },
          setReactionsEnabled: d,
          getSoundsEnabled: function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupSoundsEnabled();
          },
          setSoundsEnabled: function (t) {
            o("WAWebMuteCollection").MuteCollection.setGlobalGroupSoundsEnabled(
              t,
            );
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
