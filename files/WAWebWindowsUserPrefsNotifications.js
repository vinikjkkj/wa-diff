__d(
  "WAWebWindowsUserPrefsNotifications",
  [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWindowsNotificationToneOption",
    "WAWebWindowsShowNotificationBannerOption",
    "WAWebWindowsTaskbarNotificationOption",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !0;
    function s(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsNotificationBannerSetting,
        e,
      );
    }
    function u() {
      var e,
        t = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").UserPrefs.WindowsNotificationBannerSetting,
        );
      return t == null || typeof t != "string"
        ? o("WAWebWindowsShowNotificationBannerOption")
            .ShowNotificationBannerOption.Always
        : (e = o(
              "WAWebWindowsShowNotificationBannerOption",
            ).ShowNotificationBannerOption.cast(t)) != null
          ? e
          : o("WAWebWindowsShowNotificationBannerOption")
              .ShowNotificationBannerOption.Always;
    }
    function c() {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsStatusReactionsSetting,
      );
      return t === !1 ? !1 : e;
    }
    function d(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsStatusReactionsSetting,
        e,
      );
    }
    function m(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsTaskbarNotificationSetting,
        e,
      );
    }
    function p() {
      var e,
        t = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").UserPrefs.WindowsTaskbarNotificationSetting,
        );
      return t == null || typeof t != "string"
        ? o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption
            .Always
        : (e = o(
              "WAWebWindowsTaskbarNotificationOption",
            ).TaskbarNotificationOption.cast(t)) != null
          ? e
          : o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption
              .Always;
    }
    function _(e) {
      r("WAWebUserPrefsStore").setUser(
        String(
          o("WAWebUserPrefsKeys").UserPrefs.WindowsNotificationToneSetting,
        ),
        e,
      );
    }
    function f() {
      var e,
        t = r("WAWebUserPrefsStore").getUser(
          String(
            o("WAWebUserPrefsKeys").UserPrefs.WindowsNotificationToneSetting,
          ),
        );
      return t == null || typeof t != "number"
        ? o("WAWebWindowsNotificationToneOption").NotificationToneOption.Default
        : (e = o(
              "WAWebWindowsNotificationToneOption",
            ).NotificationToneOption.cast(t)) != null
          ? e
          : o("WAWebWindowsNotificationToneOption").NotificationToneOption
              .Default;
    }
    function g(e) {
      r("WAWebUserPrefsStore").setUser(
        String(
          o("WAWebUserPrefsKeys").UserPrefs.WindowsGroupNotificationToneSetting,
        ),
        e,
      );
    }
    function h() {
      var e,
        t = r("WAWebUserPrefsStore").getUser(
          String(
            o("WAWebUserPrefsKeys").UserPrefs
              .WindowsGroupNotificationToneSetting,
          ),
        );
      return t == null || typeof t != "number"
        ? o("WAWebWindowsNotificationToneOption").NotificationToneOption.Default
        : (e = o(
              "WAWebWindowsNotificationToneOption",
            ).NotificationToneOption.cast(t)) != null
          ? e
          : o("WAWebWindowsNotificationToneOption").NotificationToneOption
              .Default;
    }
    function y() {
      return (
        u() !==
        o("WAWebWindowsShowNotificationBannerOption")
          .ShowNotificationBannerOption.Never
      );
    }
    function C(e) {
      r("WAWebUserPrefsStore").setUser(
        String(
          o("WAWebUserPrefsKeys").UserPrefs
            .WindowsStatusNotificationToneSetting,
        ),
        e,
      );
    }
    function b() {
      var e,
        t = r("WAWebUserPrefsStore").getUser(
          String(
            o("WAWebUserPrefsKeys").UserPrefs
              .WindowsStatusNotificationToneSetting,
          ),
        );
      return t == null || typeof t != "number"
        ? o("WAWebWindowsNotificationToneOption").NotificationToneOption.Default
        : (e = o(
              "WAWebWindowsNotificationToneOption",
            ).NotificationToneOption.cast(t)) != null
          ? e
          : o("WAWebWindowsNotificationToneOption").NotificationToneOption
              .Default;
    }
    ((l.setNotificationBannerSetting = s),
      (l.getNotificationBannerSetting = u),
      (l.getStatusReactionsSetting = c),
      (l.setStatusReactionsSetting = d),
      (l.setTaskbarNotificationSetting = m),
      (l.getTaskbarNotificationSetting = p),
      (l.setNotificationToneSetting = _),
      (l.getNotificationToneSetting = f),
      (l.setNotificationToneGroupSetting = g),
      (l.getNotificationToneGroupSetting = h),
      (l.isNotificationBannerEnabled = y),
      (l.setNotificationToneStatusSetting = C),
      (l.getNotificationToneStatusSetting = b));
  },
  98,
);
