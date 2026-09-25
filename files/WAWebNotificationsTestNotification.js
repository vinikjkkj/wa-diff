__d(
  "WAWebNotificationsTestNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebNotificationIconUtils",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
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
        var r = t.prototype;
        return (
          (r.shouldShowBanner = function () {
            return !0;
          }),
          (r.buildKey = function () {
            return "test-notification:" + this.creationAt;
          }),
          (r.getChatKind = function () {
            return null;
          }),
          (r.getIcon = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return o("WAWebNotificationIconUtils").WHATSAPP_DEFAULT_ICON;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getBannerOptions = function () {
            var e = s._(/*BTDS*/ "WhatsApp").toString(),
              t = s
                ._(/*BTDS*/ "Click here to complete notification verification")
                .toString();
            return babelHelpers.extends(
              {
                wid: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
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
            actions: [
              { action: e, title: r("fbs")._(/*BTDS*/ "Verify").toString() },
            ],
          };
    }
    l.WATestNotification = u;
  },
  226,
);
