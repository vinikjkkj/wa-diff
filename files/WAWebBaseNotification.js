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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t() {
          var t = this;
          ((this.creationAt = Date.now()),
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
            return (u || (u = n("Promise"))).resolve();
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
                t != null &&
                  new (o(
                    "WAWebNotificationDeliveryWamEvent",
                  ).NotificationDeliveryWamEvent)({
                    uiNotificationType: t.uiNotificationType,
                    isSilenced: e,
                    triggeredByOfflineMessage: t.triggeredByOfflineMessage,
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
                (e === void 0 && (e = !1),
                  (this.abortController = new AbortController()));
                var t = this.getBannerOptions(),
                  n = yield this.getIcon();
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
                var a = new (r("WAWebNotificationBanner"))(
                  babelHelpers.extends({}, t, {
                    icon: n,
                    key: this.buildKey(),
                    isReplyable: this.isReplyable(),
                    suppressBanner: e,
                  }),
                );
                return ((this.notificationBanner = a), a);
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
    l.WABaseNotification = c;
  },
  98,
);
