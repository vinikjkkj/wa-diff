__d(
  "WAWebBaseNotification",
  [
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
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
        var n = t.prototype;
        return (
          (n.shouldPlaySound = function () {
            return r("WAWebEnvironment").isWindows &&
              Number(o("WAWebBuildConstants").WINDOWS_BUILD) >= 257300
              ? !1
              : o("WAWebNotificationHelpers").shouldPlaySoundGranular();
          }),
          (n.shouldMute = function (t) {
            return null;
          }),
          (n.shouldShowBanner = function () {
            return o(
              "WAWebNotificationHelpers",
            ).shouldEnableNotificationGranular();
          }),
          (n.shouldSquelch = function () {
            return null;
          }),
          (n.shouldSuppressBanner = function (t) {
            return (
              t === r("WAWebNotificationMuteReason").GroupFlood ||
              t === r("WAWebNotificationMuteReason").OfflineResumeInProgress
            );
          }),
          (n.buildKey = function () {
            throw r("err")(
              "WABaseNotification: must implement `buildKey` method",
            );
          }),
          (n.getBannerOptions = function () {
            throw r("err")(
              "WABaseNotification: must implement `getBannerOptions` method",
            );
          }),
          (n.getIcon = async function () {
            throw r("err")(
              "WABaseNotification: must implement `getIcon` method",
            );
          }),
          (n.matchesChat = function (t) {
            return !1;
          }),
          (n.beforeBannerShown = function () {
            return Promise.resolve();
          }),
          (n.afterBannerShown = function (t) {}),
          (n.getChatKind = function () {
            throw r("err")(
              "WABaseNotification: must implement `getChatKind` method",
            );
          }),
          (n.getNotificationDeliveryWamEventData = function () {
            return null;
          }),
          (n.performLogging = async function (t) {
            var e = await this.getNotificationDeliveryWamEventData();
            e != null &&
              new (o(
                "WAWebNotificationDeliveryWamEvent",
              ).NotificationDeliveryWamEvent)({
                uiNotificationType: e.uiNotificationType,
                isSilenced: t,
                triggeredByOfflineMessage: e.triggeredByOfflineMessage,
              }).commit();
          }),
          (n.isReplyable = function () {
            return !1;
          }),
          (n.triggerNotification = async function (t) {
            var e = await this.shouldMute(t);
            (e || (e = await this.shouldSquelch()),
              e &&
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WABaseNotification:triggerNotification muteReason ",
                      "",
                    ])),
                  e,
                ));
            var n = !1;
            if (e)
              if (this.shouldSuppressBanner(e)) n = !0;
              else
                throw new (o("WAAbortError").AbortError)(
                  "Notification mute/squelched " + e,
                );
            var a;
            return (
              (await this.shouldShowBanner()) &&
                ((r("WAWebEnvironment").isWindows || !n) &&
                  (await this.beforeBannerShown(),
                  (a = await this.showBanner(n)),
                  this.afterBannerShown(a)),
                await this.performLogging(n)),
              !e && (await this.shouldPlaySound()) && this.playSound(),
              a
            );
          }),
          (n.showBanner = async function (t) {
            (t === void 0 && (t = !1),
              (this.abortController = new AbortController()));
            var e = this.getBannerOptions(),
              n = await this.getIcon();
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
              babelHelpers.extends({}, e, {
                icon: n,
                key: this.buildKey(),
                isReplyable: this.isReplyable(),
                suppressBanner: t,
              }),
            );
            return ((this.notificationBanner = a), a);
          }),
          (n.playSound = function () {
            o("WAWebNotificationTone").playNotification();
          }),
          t
        );
      })();
    l.WABaseNotification = u;
  },
  98,
);
