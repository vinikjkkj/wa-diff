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
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_CALL_NOTIFICATIONS_MUTE_EXPIRATION,
      );
      return typeof e == "number" ? e : null;
    }
    function g(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_CALL_NOTIFICATIONS_MUTE_EXPIRATION,
        e,
      );
    }
    function h() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_CALL_NOTIFICATIONS_MUTED_AT,
      );
      return typeof e == "number" ? e : null;
    }
    function y(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_CALL_NOTIFICATIONS_MUTED_AT,
        e,
      );
    }
    function C() {
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
    function b(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function v() {
      var e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.SECURITY_NOTIFICATIONS,
        ) !== !0 ||
        (e.defenseMode != null &&
          e.defenseMode !== o("WAWebPrivacySettings").DEFENSE_MODE_STATE.off)
      );
    }
    function S(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.SECURITY_NOTIFICATIONS,
        !e,
      );
    }
    var R = {
      isDismissed: !1,
      firstSeenTime: null,
      lastDismissTime: null,
      lastModalShownTime: null,
    };
    function L() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.WEB_NOTIFICATIONS_BB_STATUS,
      );
      if (e == null || typeof e != "object" || e instanceof Array) return R;
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
    function E(e) {
      var t,
        n,
        a,
        i = L(),
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
    function k() {
      var e = L(),
        t = e.isDismissed;
      E({ isDismissed: t, lastModalShownTime: o("WATimeUtils").unixTime() });
    }
    var I = { isDismissed: !1, firstSeenTime: null, isLongResumeTime: !1 };
    function T() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.OFFLINE_NOTIFICATIONS_BB_STATUS,
      );
      if (e == null || typeof e != "object" || e instanceof Array) return I;
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
    function D(e) {
      var t,
        n,
        a,
        i = T(),
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
    function x() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_PREVIEWS,
      );
      return typeof e != "boolean" && r("WAWebEnvironment").isWindows
        ? !0
        : e !== !0;
    }
    function $(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_PREVIEWS,
        !e,
      );
    }
    function P() {
      return n("cr:5151")
        ? r("WAWebUserPrefsStore").getUser(
            n("cr:5151").IGNORE_NONDIRECT_GROUP_MSG,
          ) === !0
        : !1;
    }
    function N(e) {
      n("cr:5151") &&
        r("WAWebUserPrefsStore").setUser(
          n("cr:5151").IGNORE_NONDIRECT_GROUP_MSG,
          e,
        );
    }
    function M() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.OUTGOING_MESSAGE_SOUND,
        ) === !0
      );
    }
    function w(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.OUTGOING_MESSAGE_SOUND,
        e,
      );
    }
    function A() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.GLOBAL_COLLAPSE_MUTED,
        ) === !0
      );
    }
    function F(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_COLLAPSE_MUTED,
        e,
      );
    }
    function O() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS
            .GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED_ONCE,
        ) === !0
      );
    }
    function B() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED_ONCE,
        !0,
      );
    }
    function W() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? d() : e;
    }
    function q(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function U(e) {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof t != "boolean" ? (e != null ? e : !1) : t;
    }
    function V(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function H() {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_SOUNDS_ENABLED,
      );
      return typeof t != "boolean" ? e() : t;
    }
    function G(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_SOUNDS_ENABLED,
        e,
      );
    }
    function z() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? W() : e;
    }
    function j(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function K() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_GROUP_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof e != "boolean" ? U() : e;
    }
    function Q(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_GROUP_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function X() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_SOUNDS_ENABLED,
      );
      return typeof e != "boolean" ? H() : e;
    }
    function Y(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_SOUNDS_ENABLED,
        e,
      );
    }
    function J() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATIONS_ENABLED,
      );
      return typeof e != "boolean" ? W() : e;
    }
    function Z(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    function ee() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_STATUS_NOTIFICATION_REACTIONS_ENABLED,
      );
      return typeof e != "boolean" ? U() : e;
    }
    function te(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS
          .GLOBAL_STATUS_NOTIFICATION_REACTIONS_ENABLED,
        e,
      );
    }
    function ne() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_SOUNDS_ENABLED,
      );
      return typeof e != "boolean" ? H() : e;
    }
    function re(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_SOUNDS_ENABLED,
        e,
      );
    }
    var oe = { isDismissed: !1, dismissedTime: null };
    function ae() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS
          .NOTIFICATIONS_GRANULARITY_AWARENESS_BANNER_STATUS,
      );
      if (e == null || typeof e != "object" || e instanceof Array) return oe;
      var t = {
        isDismissed: e.isDismissed === !0,
        dismissedTime:
          typeof e.dismissedTime == "number"
            ? o("WATimeUtils").castToUnixTime(e.dismissedTime)
            : null,
      };
      return t;
    }
    function ie() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.NOTIFICATION_TEST_VERIFIED,
        ) === !0
      );
    }
    function le() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.NOTIFICATION_TEST_VERIFIED,
        !0,
      );
    }
    function se() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.NOTIFICATION_TEST_VERIFIED,
        !1,
      );
    }
    ((l.getGlobalSounds = e),
      (l.setGlobalSounds = s),
      (l.getGlobalCallRingtone = u),
      (l.setGlobalCallRingtone = c),
      (l.getGlobalNotifications = d),
      (l.setGlobalNotifications = m),
      (l.getGlobalCallNotifications = p),
      (l.setGlobalCallNotifications = _),
      (l.getGlobalCallNotificationsMuteExpiration = f),
      (l.setGlobalCallNotificationsMuteExpiration = g),
      (l.getGlobalCallNotificationsMutedAt = h),
      (l.setGlobalCallNotificationsMutedAt = y),
      (l.getGlobalOfflineNotifications = C),
      (l.setGlobalOfflineNotifications = b),
      (l.getGlobalSecurityNotifications = v),
      (l.setGlobalSecurityNotifications = S),
      (l.DEFAULT_NOTIFICATION_BB_STATUS = R),
      (l.getWebNotificationsBBStatus = L),
      (l.setWebNotificationsBBStatus = E),
      (l.recordOptInModalShown = k),
      (l.DEFAULT_OFFLINE_NOTIFICATION_BB_STATUS = I),
      (l.getOfflineNotificationsBBStatus = T),
      (l.setOfflineNotificationsBBStatus = D),
      (l.getGlobalPreviews = x),
      (l.setGlobalPreviews = $),
      (l.getIgnoreNondirectGroupMsg = P),
      (l.setIgnoreNondirectGroupMsg = N),
      (l.getOutgoingMessageSound = M),
      (l.setOutgoingMessageSound = w),
      (l.getCollapseMuted = A),
      (l.setCollapseMuted = F),
      (l.getOfflineNotificationsEnabledOnce = O),
      (l.setOfflineNotificationsEnabledOnce = B),
      (l.getGlobalNotificationsEnabled = W),
      (l.setGlobalNotificationsEnabled = q),
      (l.getGlobalNotificationReactionsEnabled = U),
      (l.setGlobalNotificationReactionsEnabled = V),
      (l.getGlobalSoundsEnabled = H),
      (l.setGlobalSoundsEnabled = G),
      (l.getGlobalGroupNotificationsEnabled = z),
      (l.setGlobalGroupNotificationsEnabled = j),
      (l.getGlobalGroupNotificationReactionsEnabled = K),
      (l.setGlobalGroupNotificationReactionsEnabled = Q),
      (l.getGlobalGroupSoundsEnabled = X),
      (l.setGlobalGroupSoundsEnabled = Y),
      (l.getGlobalStatusNotificationsEnabled = J),
      (l.setGlobalStatusNotificationsEnabled = Z),
      (l.getGlobalStatusNotificationReactionsEnabled = ee),
      (l.setGlobalStatusNotificationReactionsEnabled = te),
      (l.getGlobalStatusSoundsEnabled = ne),
      (l.setGlobalStatusSoundsEnabled = re),
      (l.getNotificationsGranularityAwarenessBannerStatus = ae),
      (l.getNotificationTestVerified = ie),
      (l.setNotificationTestVerified = le),
      (l.clearNotificationTestVerified = se));
  },
  98,
);
