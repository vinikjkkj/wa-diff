__d(
  "WAWebBaseNotification",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebEnvironment",
    "WAWebNotificationBanner",
    "WAWebNotificationConstants",
    "WAWebNotificationDeliveryWamEvent",
    "WAWebNotificationHelpers",
    "WAWebNotificationMuteReason",
    "WAWebNotificationTone",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumNotificationActionType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function () {
        function t() {
          var t = this;
          ((this.creationAt = Date.now()),
            (this.$1 = null),
            (this.$2 = r("WAWebPonyfillsCryptoRandomUUID")()),
            (this.closeBanner = function () {
              t.notificationBanner != null &&
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WABaseNotification:_closeNotification()",
                    ])),
                ),
                t.notificationBanner.close());
            }));
        }
        var a = t.prototype;
        return (
          (a.shouldPlaySound = function () {
            return r("WAWebEnvironment").isWindows &&
              Number(o("WAWebBuildConstants").WINDOWS_BUILD) >= 257300
              ? !1
              : o("WAWebNotificationHelpers").shouldPlaySoundGranular();
          }),
          (a.shouldMute = function (t) {
            return null;
          }),
          (a.shouldShowBanner = function () {
            return o(
              "WAWebNotificationHelpers",
            ).shouldEnableNotificationGranular();
          }),
          (a.shouldSquelch = function () {
            return null;
          }),
          (a.shouldSuppressBanner = function (t) {
            return (
              t === r("WAWebNotificationMuteReason").GroupFlood ||
              t === r("WAWebNotificationMuteReason").OfflineResumeInProgress
            );
          }),
          (a.buildKey = function () {
            throw r("err")(
              "WABaseNotification: must implement `buildKey` method",
            );
          }),
          (a.getBannerOptions = function () {
            throw r("err")(
              "WABaseNotification: must implement `getBannerOptions` method",
            );
          }),
          (a.getIcon = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              throw r("err")(
                "WABaseNotification: must implement `getIcon` method",
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.matchesChat = function (t) {
            return !1;
          }),
          (a.beforeBannerShown = function () {
            return (c || (c = n("Promise"))).resolve();
          }),
          (a.afterBannerShown = function (t) {}),
          (a.getChatKind = function () {
            throw r("err")(
              "WABaseNotification: must implement `getChatKind` method",
            );
          }),
          (a.getNotificationDeliveryWamEventData = function () {
            return null;
          }),
          (a.performLogging = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.getNotificationDeliveryWamEventData();
                ((this.$1 = t),
                  t != null &&
                    new (o(
                      "WAWebNotificationDeliveryWamEvent",
                    ).NotificationDeliveryWamEvent)({
                      uiNotificationType: t.uiNotificationType,
                      notificationId: this.$2,
                      notificationAction: o(
                        "WAWebWamEnumNotificationActionType",
                      ).NOTIFICATION_ACTION_TYPE.SHOW,
                      isSilenced: e,
                      triggeredByOfflineMessage: t.triggeredByOfflineMessage,
                    }).commit());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.performClickLogging = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n =
                    (t = this.$1) != null
                      ? t
                      : yield this.getNotificationDeliveryWamEventData();
                n != null &&
                  new (o(
                    "WAWebNotificationDeliveryWamEvent",
                  ).NotificationDeliveryWamEvent)({
                    uiNotificationType: n.uiNotificationType,
                    notificationId: this.$2,
                    notificationAction: o("WAWebWamEnumNotificationActionType")
                      .NOTIFICATION_ACTION_TYPE.CLICK,
                    isSilenced: e,
                    triggeredByOfflineMessage: n.triggeredByOfflineMessage,
                  }).commit();
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.isReplyable = function () {
            return !1;
          }),
          (a.triggerNotification = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.shouldMute(e);
                (t || (t = yield this.shouldSquelch()),
                  t &&
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "WABaseNotification:triggerNotification muteReason ",
                          "",
                        ])),
                      t,
                    ));
                var n = !1;
                if (t)
                  if (this.shouldSuppressBanner(t)) n = !0;
                  else
                    throw new (o("WAAbortError").AbortError)(
                      "Notification mute/squelched " + t,
                    );
                var a;
                return (
                  (yield this.shouldShowBanner()) &&
                    ((r("WAWebEnvironment").isWindows || !n) &&
                      (yield this.beforeBannerShown(),
                      (a = yield this.showBanner(n)),
                      this.afterBannerShown(a)),
                    yield this.performLogging(n)),
                  !t && (yield this.shouldPlaySound()) && this.playSound(),
                  a
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.showBanner = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                (e === void 0 && (e = !1),
                  (this.abortController = new AbortController()));
                var n = this.getBannerOptions(),
                  a = yield this.getIcon();
                if (this.abortController.signal.aborted)
                  throw new (o("WAAbortError").AbortError)(
                    "Aborted through abortController",
                  );
                if (
                  !r("WAWebEnvironment").isWindows &&
                  window.Notification.permission !==
                    o("WAWebNotificationConstants").PERMISSION_ALLOWED
                )
                  throw new (o("WAAbortError").AbortError)("Permission Denied");
                var i = new (r("WAWebNotificationBanner"))(
                  babelHelpers.extends({}, n, {
                    onClick: function () {
                      try {
                        n.onClick == null || n.onClick();
                      } finally {
                        t.performClickLogging(e).catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "Notification click logging failed",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs("notification-click-log-fail");
                        });
                      }
                    },
                    icon: a,
                    key: this.buildKey(),
                    isReplyable: this.isReplyable(),
                    suppressBanner: e,
                  }),
                );
                return ((this.notificationBanner = i), i);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.playSound = function () {
            o("WAWebNotificationTone").playNotification();
          }),
          t
        );
      })();
    l.WABaseNotification = d;
  },
  98,
);
