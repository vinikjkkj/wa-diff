__d(
  "MAIBABrowserNotificationOptInStore",
  [
    "FBLogger",
    "MAIBABrowserNotification",
    "MAIBABrowserNotificationEligibility",
    "WebStorage",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "maiba_browser_notification_opt_in_answered",
      u = null,
      c = !1,
      d = new Set();
    function m() {
      for (var e of d) e();
    }
    function p() {
      var t;
      return (
        ((t = (e || (e = r("WebStorage"))).getLocalStorageForRead()) == null
          ? void 0
          : t.getItem(s)) != null
      );
    }
    function _() {
      var t = (e || (e = r("WebStorage"))).getLocalStorage();
      t != null && (e || (e = r("WebStorage"))).setItemGuarded(t, s, "1");
    }
    function f(e) {
      if (
        u == null &&
        o(
          "MAIBABrowserNotificationEligibility",
        ).isMAIBABrowserNotificationEligible() &&
        o("MAIBABrowserNotification").getBrowserNotificationPermission() ===
          o("MAIBABrowserNotification").PERMISSION_DEFAULT &&
        !p()
      ) {
        var t = r("qex")._("2135") === !0;
        t && ((u = e), (c = !1), m());
      }
    }
    function g(e) {
      try {
        f(e);
      } catch (e) {
        r("FBLogger")("axp_maiba_foundations_ux").warn(
          "MAIBA browser notification opt-in failed: %s",
          String(e),
        );
      }
    }
    function h() {
      u != null && (_(), (u = null), m());
    }
    function y() {
      return u == null || c ? !1 : ((c = !0), !0);
    }
    function C() {
      return u;
    }
    function b(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    ((l.noteMAIBAMessageSentForBrowserNotificationOptIn = g),
      (l.dismissMAIBABrowserNotificationOptIn = h),
      (l.markMAIBABrowserNotificationOptInImpressionLogged = y),
      (l.getMAIBABrowserNotificationOptInConversationId = C),
      (l.subscribeMAIBABrowserNotificationOptIn = b));
  },
  98,
);
