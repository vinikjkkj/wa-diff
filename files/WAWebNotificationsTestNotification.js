__d(
  "WAWebNotificationsTestNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebNotificationIconUtils",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserUtils",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = "verify-notification",
      u = (function (e) {
        function t(t) {
          var n,
            r = t === void 0 ? {} : t,
            o = r.onClick;
          return (
            (n = e.call(this) || this),
            (n.$WATestNotification$p_1 = o),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.shouldShowBanner = function () {
            return !0;
          }),
          (n.buildKey = function () {
            return "test-notification:" + this.creationAt;
          }),
          (n.getChatKind = function () {
            return null;
          }),
          (n.getIcon = async function () {
            return o("WAWebNotificationIconUtils").WHATSAPP_DEFAULT_ICON;
          }),
          (n.getBannerOptions = function () {
            var e = s._(/*BTDS*/ "").toString(),
              t = s._(/*BTDS*/ "").toString();
            return babelHelpers.extends(
              {
                wid: o("WAWebUserUtils").getMeUserOrThrow(),
                title: e,
                body: t,
                doNotOpenChat: !0,
                onClick: this.$WATestNotification$p_1,
              },
              c(),
            );
          }),
          t
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    function c() {
      var t;
      return !o(
        "WAWebPushNotificationsGatingUtils",
      ).canSupportNotificationActions() ||
        ((t = navigator.serviceWorker) == null ? void 0 : t.controller) == null
        ? {}
        : {
            showViaServiceWorker: !0,
            actions: [{ action: e, title: r("fbs")._(/*BTDS*/ "").toString() }],
          };
    }
    l.WATestNotification = u;
  },
  226,
);
