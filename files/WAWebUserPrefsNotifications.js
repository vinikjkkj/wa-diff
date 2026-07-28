__d(
  "WAWebUserPrefsNotifications",
  [
    "WATimeUtils",
    "WAWebBackgroundSyncReporter",
    "WAWebEnvironment",
    "WAWebNotificationConstants",
    "WAWebPrivacySettings",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumOnboardSources",
    "cr:5151",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_SOUNDS,
        ) !== !0
      );
    }
    function s(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_SOUNDS,
        !e,
      );
    }
    function u() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_RINGTONE,
        ) !== !0
      );
    }
    function c(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_RINGTONE,
        !e,
      );
    }
    function d() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_NOTIFICATIONS,
      );
      if (typeof e != "boolean") {
        var t;
        return r("WAWebEnvironment").isWindows
          ? !0
          : ((t = window.Notification) == null ? void 0 : t.permission) ===
              o("WAWebNotificationConstants").PERMISSION_ALLOWED;
      }
      return !e;
    }
    function m(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_NOTIFICATIONS,
        !e,
      );
    }
    function p() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_NOTIFICATIONS,
      );
      return typeof e != "boolean" ? !0 : !e;
    }
    function _(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_NOTIFICATIONS,
        !e,
      );
    }
    function f() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED,
      );
      if (typeof e != "boolean") {
        var t,
          n =
            ((t = window.Notification) == null ? void 0 : t.permission) ===
            o("WAWebNotificationConstants").PERMISSION_ALLOWED;
        return (
          n &&
            o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
              offboardSource: null,
              onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES
                .DEFAULT,
            }),
          n
        );
      }
      return e;
    }
    function g(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function h() {
      var e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.SECURITY_NOTIFICATIONS,
        ) !== !0 ||
        (e.defenseMode != null &&
          e.defenseMode !== o("WAWebPrivacySettings").DEFENSE_MODE_STATE.off)
      );
    }
    function y(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.SECURITY_NOTIFICATIONS,
        !e,
      );
    }
    var C = {
      isDismissed: !1,
      firstSeenTime: null,
      lastDismissTime: null,
      lastModalShownTime: null,
    };
    function b() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.WEB_NOTIFICATIONS_BB_STATUS,
      );
      if (e == null || typeof e != "object" || e instanceof Array) return C;
      var t = {
        isDismissed: e.isDismissed === !0,
        firstSeenTime:
          typeof e.firstSeenTime == "number"
            ? o("WATimeUtils").castToUnixTime(e.firstSeenTime)
            : null,
        lastDismissTime:
          typeof e.lastDismissTime == "number"
            ? o("WATimeUtils").castToUnixTime(e.lastDismissTime)
            : null,
        lastModalShownTime:
          typeof e.lastModalShownTime == "number"
            ? o("WATimeUtils").castToUnixTime(e.lastModalShownTime)
            : null,
      };
      return t;
    }
    function v(e) {
      var t,
        n,
        a,
        i = b(),
        l = i.firstSeenTime,
        s = l === void 0 ? null : l,
        u = i.lastDismissTime,
        c = u === void 0 ? null : u,
        d = i.lastModalShownTime,
        m = d === void 0 ? null : d,
        p = (t = e.firstSeenTime) != null ? t : s,
        _ = (n = e.lastDismissTime) != null ? n : c,
        f = (a = e.lastModalShownTime) != null ? a : m;
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.WEB_NOTIFICATIONS_BB_STATUS,
        {
          isDismissed: e.isDismissed,
          firstSeenTime: p,
          lastDismissTime: _,
          lastModalShownTime: f,
        },
      );
    }
    function S() {
      var e = b(),
        t = e.isDismissed;
      v({ isDismissed: t, lastModalShownTime: o("WATimeUtils").unixTime() });
    }
    var R = { isDismissed: !1, firstSeenTime: null, isLongResumeTime: !1 };
    function L() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.OFFLINE_NOTIFICATIONS_BB_STATUS,
      );
      if (e == null || typeof e != "object" || e instanceof Array) return R;
      var t = {
        isDismissed: e.isDismissed === !0,
        firstSeenTime:
          typeof e.firstSeenTime == "number"
            ? o("WATimeUtils").castToUnixTime(e.firstSeenTime)
            : null,
        isLongResumeTime: e.isLongResumeTime === !0,
      };
      return t;
    }
    function E(e) {
      var t,
        n,
        a,
        i = L(),
        l = i.firstSeenTime,
        s = l === void 0 ? null : l,
        u = i.isDismissed,
        c = u === void 0 ? !1 : u,
        d = i.isLongResumeTime,
        m = d === void 0 ? !1 : d,
        p = (t = e.isDismissed) != null ? t : c,
        _ = (n = e.firstSeenTime) != null ? n : s,
        f = (a = e.isLongResumeTime) != null ? a : m;
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.OFFLINE_NOTIFICATIONS_BB_STATUS,
        { isDismissed: p, firstSeenTime: _, isLongResumeTime: f },
      );
    }
    function k() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_PREVIEWS,
      );
      return typeof e != "boolean" && r("WAWebEnvironment").isWindows
        ? !0
        : e !== !0;
    }
    function I(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_PREVIEWS,
        !e,
      );
    }
    function T() {
      return n("cr:5151")
        ? r("WAWebUserPrefsStore").getUser(
            n("cr:5151").IGNORE_NONDIRECT_GROUP_MSG,
          ) === !0
        : !1;
    }
    function D(e) {
      n("cr:5151") &&
        r("WAWebUserPrefsStore").setUser(
          n("cr:5151").IGNORE_NONDIRECT_GROUP_MSG,
          e,
        );
    }
    function x() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.OUTGOING_MESSAGE_SOUND,
        ) === !0
      );
    }
    function $(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.OUTGOING_MESSAGE_SOUND,
        e,
      );
    }
    function P() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.GLOBAL_COLLAPSE_MUTED,
        ) === !0
      );
    }
    function N(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_COLLAPSE_MUTED,
        e,
      );
    }
    function M() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS
            .GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED_ONCE,
        ) === !0
      );
    }
    function w() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED_ONCE,
        !0,
      );
    }
    function A() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? d() : e;
    }
    function F(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function O(e) {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof t != "boolean" ? (e != null ? e : !1) : t;
    }
    function B(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function W() {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_SOUNDS_ENABLED,
      );
      return typeof t != "boolean" ? e() : t;
    }
    function q(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_SOUNDS_ENABLED,
        e,
      );
    }
    function U() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? A() : e;
    }
    function V(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function H() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_GROUP_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof e != "boolean" ? O() : e;
    }
    function G(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_GROUP_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function z() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_SOUNDS_ENABLED,
      );
      return typeof e != "boolean" ? W() : e;
    }
    function j(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_SOUNDS_ENABLED,
        e,
      );
    }
    function K() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? A() : e;
    }
    function Q(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function X() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_STATUS_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof e != "boolean" ? O() : e;
    }
    function Y(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_STATUS_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function J() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_SOUNDS_ENABLED,
      );
      return typeof e != "boolean" ? W() : e;
    }
    function Z(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_SOUNDS_ENABLED,
        e,
      );
    }
    var ee = { isDismissed: !1, dismissedTime: null };
    function te() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .NOTIFICATIONS_GRANULARITY_AWARENESS_BANNER_STATUS,
      );
      if (e == null || typeof e != "object" || e instanceof Array) return ee;
      var t = {
        isDismissed: e.isDismissed === !0,
        dismissedTime:
          typeof e.dismissedTime == "number"
            ? o("WATimeUtils").castToUnixTime(e.dismissedTime)
            : null,
      };
      return t;
    }
    ((l.getGlobalSounds = e),
      (l.setGlobalSounds = s),
      (l.getGlobalCallRingtone = u),
      (l.setGlobalCallRingtone = c),
      (l.getGlobalNotifications = d),
      (l.setGlobalNotifications = m),
      (l.getGlobalCallNotifications = p),
      (l.setGlobalCallNotifications = _),
      (l.getGlobalOfflineNotifications = f),
      (l.setGlobalOfflineNotifications = g),
      (l.getGlobalSecurityNotifications = h),
      (l.setGlobalSecurityNotifications = y),
      (l.DEFAULT_NOTIFICATION_BB_STATUS = C),
      (l.getWebNotificationsBBStatus = b),
      (l.setWebNotificationsBBStatus = v),
      (l.recordOptInModalShown = S),
      (l.DEFAULT_OFFLINE_NOTIFICATION_BB_STATUS = R),
      (l.getOfflineNotificationsBBStatus = L),
      (l.setOfflineNotificationsBBStatus = E),
      (l.getGlobalPreviews = k),
      (l.setGlobalPreviews = I),
      (l.getIgnoreNondirectGroupMsg = T),
      (l.setIgnoreNondirectGroupMsg = D),
      (l.getOutgoingMessageSound = x),
      (l.setOutgoingMessageSound = $),
      (l.getCollapseMuted = P),
      (l.setCollapseMuted = N),
      (l.getOfflineNotificationsEnabledOnce = M),
      (l.setOfflineNotificationsEnabledOnce = w),
      (l.getGlobalNotificationsEnabled = A),
      (l.setGlobalNotificationsEnabled = F),
      (l.getGlobalNotificationReactionsEnabled = O),
      (l.setGlobalNotificationReactionsEnabled = B),
      (l.getGlobalSoundsEnabled = W),
      (l.setGlobalSoundsEnabled = q),
      (l.getGlobalGroupNotificationsEnabled = U),
      (l.setGlobalGroupNotificationsEnabled = V),
      (l.getGlobalGroupNotificationReactionsEnabled = H),
      (l.setGlobalGroupNotificationReactionsEnabled = G),
      (l.getGlobalGroupSoundsEnabled = z),
      (l.setGlobalGroupSoundsEnabled = j),
      (l.getGlobalStatusNotificationsEnabled = K),
      (l.setGlobalStatusNotificationsEnabled = Q),
      (l.getGlobalStatusNotificationReactionsEnabled = X),
      (l.setGlobalStatusNotificationReactionsEnabled = Y),
      (l.getGlobalStatusSoundsEnabled = J),
      (l.setGlobalStatusSoundsEnabled = Z),
      (l.getNotificationsGranularityAwarenessBannerStatus = te));
  },
  98,
);
