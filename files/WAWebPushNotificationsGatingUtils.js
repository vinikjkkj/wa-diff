__d(
  "WAWebPushNotificationsGatingUtils",
  ["WAWebEnvironment", "WAWebNotificationConstants", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return u() && !r("WAWebEnvironment").isWindows;
    }
    function s(e, t) {
      return (
        e === o("WAWebNotificationConstants").PERMISSION_DEFAULT ||
        (e === o("WAWebNotificationConstants").PERMISSION_DENIED &&
          t &&
          (o("WAWebUA").UA.isChrome ||
            o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.EDGE ||
            o("WAWebUA").UA.isFirefox ||
            o("WAWebUA").UA.browser === "opera"))
      );
    }
    function u() {
      try {
        var e =
          o("WAWebUA").UA.isSafari &&
          Number(o("WAWebUA").UA.browserVersion.split(".")[0]) < 16;
        return !e;
      } catch (e) {
        return !1;
      }
    }
    function c() {
      try {
        var e =
          o("WAWebUA").UA.isSafari ||
          o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.FIREFOX ||
          (o("WAWebUA").UA.isChrome &&
            Number(o("WAWebUA").UA.browserVersion.split(".")[0]) < 80);
        return !e;
      } catch (e) {
        return !1;
      }
    }
    function d() {
      return !(o("WAWebUA").UA.isSafari || o("WAWebUA").UA.isFirefox);
    }
    ((l.canEnableOfflineNotifications = e),
      (l.canShowNotificationsBanner = s),
      (l.canSupportOfflineNotifications = u),
      (l.canSupportPeriodicBackgroundSync = c),
      (l.canSupportNotificationActions = d));
  },
  98,
);
