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
    var C = { isDismissed: !1, firstSeenTime: null, lastDismissTime: null };
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
      };
      return t;
    }
    function v(e) {
      var t,
        n,
        a = b(),
        i = a.firstSeenTime,
        l = i === void 0 ? null : i,
        s = a.lastDismissTime,
        u = s === void 0 ? null : s,
        c = (t = e.firstSeenTime) != null ? t : l,
        d = (n = e.lastDismissTime) != null ? n : u;
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.WEB_NOTIFICATIONS_BB_STATUS,
        { isDismissed: e.isDismissed, firstSeenTime: c, lastDismissTime: d },
      );
    }
    var S = { isDismissed: !1, firstSeenTime: null, isLongResumeTime: !1 };
    function R() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.OFFLINE_NOTIFICATIONS_BB_STATUS,
      );
      if (e == null || typeof e != "object" || e instanceof Array) return S;
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
    function L(e) {
      var t,
        n,
        a,
        i = R(),
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
    function E() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_PREVIEWS,
      );
      return typeof e != "boolean" && r("WAWebEnvironment").isWindows
        ? !0
        : e !== !0;
    }
    function k(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_PREVIEWS,
        !e,
      );
    }
    function I() {
      return n("cr:5151")
        ? r("WAWebUserPrefsStore").getUser(
            n("cr:5151").IGNORE_NONDIRECT_GROUP_MSG,
          ) === !0
        : !1;
    }
    function T(e) {
      n("cr:5151") &&
        r("WAWebUserPrefsStore").setUser(
          n("cr:5151").IGNORE_NONDIRECT_GROUP_MSG,
          e,
        );
    }
    function D() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.OUTGOING_MESSAGE_SOUND,
        ) === !0
      );
    }
    function x(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.OUTGOING_MESSAGE_SOUND,
        e,
      );
    }
    function $() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.GLOBAL_COLLAPSE_MUTED,
        ) === !0
      );
    }
    function P(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_COLLAPSE_MUTED,
        e,
      );
    }
    function N() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS
            .GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED_ONCE,
        ) === !0
      );
    }
    function M() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED_ONCE,
        !0,
      );
    }
    function w() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? d() : e;
    }
    function A(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function F(e) {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof t != "boolean" ? (e != null ? e : !1) : t;
    }
    function O(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function B() {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_SOUNDS_ENABLED,
      );
      return typeof t != "boolean" ? e() : t;
    }
    function W(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_SOUNDS_ENABLED,
        e,
      );
    }
    function q() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? w() : e;
    }
    function U(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function V() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_GROUP_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof e != "boolean" ? F() : e;
    }
    function H(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_GROUP_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function G() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_SOUNDS_ENABLED,
      );
      return typeof e != "boolean" ? B() : e;
    }
    function z(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_SOUNDS_ENABLED,
        e,
      );
    }
    function j() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? w() : e;
    }
    function K(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function Q() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_STATUS_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof e != "boolean" ? F() : e;
    }
    function X(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_STATUS_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function Y() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_SOUNDS_ENABLED,
      );
      return typeof e != "boolean" ? B() : e;
    }
    function J(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_SOUNDS_ENABLED,
        e,
      );
    }
    var Z = { isDismissed: !1, dismissedTime: null };
    function ee() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .NOTIFICATIONS_GRANULARITY_AWARENESS_BANNER_STATUS,
      );
      if (e == null || typeof e != "object" || e instanceof Array) return Z;
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
      (l.DEFAULT_OFFLINE_NOTIFICATION_BB_STATUS = S),
      (l.getOfflineNotificationsBBStatus = R),
      (l.setOfflineNotificationsBBStatus = L),
      (l.getGlobalPreviews = E),
      (l.setGlobalPreviews = k),
      (l.getIgnoreNondirectGroupMsg = I),
      (l.setIgnoreNondirectGroupMsg = T),
      (l.getOutgoingMessageSound = D),
      (l.setOutgoingMessageSound = x),
      (l.getCollapseMuted = $),
      (l.setCollapseMuted = P),
      (l.getOfflineNotificationsEnabledOnce = N),
      (l.setOfflineNotificationsEnabledOnce = M),
      (l.getGlobalNotificationsEnabled = w),
      (l.setGlobalNotificationsEnabled = A),
      (l.getGlobalNotificationReactionsEnabled = F),
      (l.setGlobalNotificationReactionsEnabled = O),
      (l.getGlobalSoundsEnabled = B),
      (l.setGlobalSoundsEnabled = W),
      (l.getGlobalGroupNotificationsEnabled = q),
      (l.setGlobalGroupNotificationsEnabled = U),
      (l.getGlobalGroupNotificationReactionsEnabled = V),
      (l.setGlobalGroupNotificationReactionsEnabled = H),
      (l.getGlobalGroupSoundsEnabled = G),
      (l.setGlobalGroupSoundsEnabled = z),
      (l.getGlobalStatusNotificationsEnabled = j),
      (l.setGlobalStatusNotificationsEnabled = K),
      (l.getGlobalStatusNotificationReactionsEnabled = Q),
      (l.setGlobalStatusNotificationReactionsEnabled = X),
      (l.getGlobalStatusSoundsEnabled = Y),
      (l.setGlobalStatusSoundsEnabled = J),
      (l.getNotificationsGranularityAwarenessBannerStatus = ee));
  },
  98,
);
