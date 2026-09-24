__d(
  "WAWebNotificationsTestNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebNotificationIconUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = t === void 0 ? {} : t,
          o = r.onClick;
        return ((n = e.call(this) || this), (n.$WATestNotification$p_1 = o), n);
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
            t = s._(/*BTDS*/ "Here\u2019s an example notification").toString();
          return {
            wid: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            title: e,
            body: t,
            doNotOpenChat: !0,
            onClick: this.$WATestNotification$p_1,
          };
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WATestNotification = e;
  },
  226,
);
