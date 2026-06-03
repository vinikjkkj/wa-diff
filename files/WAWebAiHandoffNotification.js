__d(
  "WAWebAiHandoffNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebFrontendContactGetters",
    "WAWebGetNotificationStrings",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.chat;
        return ((n = e.call(this) || this), (n.chat = r), n);
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.shouldPlaySound = function () {
          return e.prototype.shouldPlaySound.call(this)
            ? o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat)
            : !1;
        }),
        (a.shouldShowBanner = function () {
          return e.prototype.shouldShowBanner.call(this)
            ? o("WAWebNotificationHelpers").shouldEnableNotificationGranular(
                this.chat,
              )
            : !1;
        }),
        (a.shouldMute = function (t) {
          return o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)
            ? r("WAWebNotificationMuteReason").AppState
            : o("WAWebMuteGetters").getIsMuted(this.chat.mute)
              ? r("WAWebNotificationMuteReason").MutedChat
              : this.chat.archive
                ? r("WAWebNotificationMuteReason").ArchivedChat
                : o("WAWebNotificationHelpers").isOfflineResumeInProgress()
                  ? r("WAWebNotificationMuteReason").OfflineResumeInProgress
                  : null;
        }),
        (a.buildKey = function () {
          return "handoff:" + this.chat.id.toString();
        }),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              this.chat,
              this.abortController.signal,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getBannerOptions = function () {
          return {
            wid: this.chat.id,
            title: u(),
            body: o("WAWebGetNotificationStrings").getNotificationBody(
              babelHelpers.extends({}, c(this.chat)),
            ),
          };
        }),
        (a.getNotificationDeliveryWamEventData = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return {
              uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
                .NOTIFICATION_TYPE_ENUM.OTHER,
            };
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function u() {
      return s._(/*BTDS*/ "WhatsApp Business AI").toString();
    }
    function c(e) {
      var t = o("WAWebFrontendContactGetters").getFormattedName(e.contact),
        n = s._(/*BTDS*/ "{name}'s conversation needs your attention", [
          s._param("name", t),
        ]);
      return { body: n.toString() };
    }
    ((l.AiHandoffNotification = e),
      (l.getNotificationTitle = u),
      (l.getNotificationParts = c));
  },
  226,
);
