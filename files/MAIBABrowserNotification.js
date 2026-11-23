__d(
  "MAIBABrowserNotification",
  ["ExecutionEnvironment", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "granted",
      u = "denied",
      c = "default",
      d = "unsupported";
    function m() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? globalThis.Notification != null
        : !1;
    }
    function p() {
      return m() ? globalThis.Notification.permission : d;
    }
    async function _() {
      if (!m()) return d;
      try {
        return await globalThis.Notification.requestPermission();
      } catch (e) {
        return (
          r("FBLogger")("axp_maiba_foundations_ux").warn(
            "MAIBA browser notification permission request failed",
            String(e),
          ),
          p()
        );
      }
    }
    function f(e) {
      if (p() !== s) return !1;
      try {
        var t = new globalThis.Notification(e.title, {
          body: e.body,
          tag: e.tag,
        });
        return (
          (t.onclick = function () {
            try {
              (globalThis.focus(), t.close(), e.onClick());
            } catch (e) {
              r("FBLogger")("axp_maiba_foundations_ux").warn(
                "MAIBA browser notification click handler failed",
                String(e),
              );
            }
          }),
          !0
        );
      } catch (e) {
        return (
          r("FBLogger")("axp_maiba_foundations_ux").warn(
            "MAIBA browser notification failed to post",
            String(e),
          ),
          !1
        );
      }
    }
    ((l.PERMISSION_GRANTED = s),
      (l.PERMISSION_DENIED = u),
      (l.PERMISSION_DEFAULT = c),
      (l.PERMISSION_UNSUPPORTED = d),
      (l.isBrowserNotificationSupported = m),
      (l.getBrowserNotificationPermission = p),
      (l.requestBrowserNotificationPermission = _),
      (l.showBrowserNotification = f));
  },
  98,
);
