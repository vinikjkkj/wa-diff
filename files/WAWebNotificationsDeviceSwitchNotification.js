__d(
  "WAWebNotificationsDeviceSwitchNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.otpCode,
          o = t.wid;
        return ((n = e.call(this) || this), (n.wid = o), (n.otpCode = r), n);
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.shouldMute = function (t) {
          return o("WAWebNotificationHelpers").appIsActive()
            ? r("WAWebNotificationMuteReason").AppState
            : null;
        }),
        (a.buildKey = function () {
          return "registration:" + this.wid.toString();
        }),
        (a.getChatKind = function () {
          return null;
        }),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebNotificationIconUtils").getNotificationIconByWid(
              this.wid,
              this.abortController.signal,
              o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getBannerOptions = function () {
          var e = s
              ._(
                /*BTDS*/ "Do not share it with anyone. Your code is {otpCode}.",
                [s._param("otpCode", this.otpCode)],
              )
              .toString(),
            t = s._(/*BTDS*/ "Code for new phone").toString();
          return { wid: this.wid, title: t, body: e, doNotOpenChat: !0 };
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WADeviceSwitchNotification = e;
  },
  226,
);
