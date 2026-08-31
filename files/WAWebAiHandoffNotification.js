__d(
  "WAWebAiHandoffNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebBizAiHandoffNotificationLogEvents",
    "WAWebBizAiStrings",
    "WAWebFrontendContactGetters",
    "WAWebGetNotificationStrings",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumHandoffNotifActionType",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "cr:3133",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (e = n("cr:3133")) != null ? e : {},
      c = u.canShowMessageNotificationBanner,
      d = (function (e) {
        function t(t) {
          var n,
            o = t.chat;
          return (
            (n = e.call(this) || this),
            (n.$AiHandoffNotification$p_1 = !1),
            (n.$AiHandoffNotification$p_2 = r(
              "WAWebPonyfillsCryptoRandomUUID",
            )()),
            (n.$AiHandoffNotification$p_3 = Math.floor(n.creationAt / 1e3)),
            (n.chat = o),
            n
          );
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
            return (
              "handoff:" +
              this.$AiHandoffNotification$p_2 +
              "|" +
              this.$AiHandoffNotification$p_3 +
              "|" +
              this.chat.id.toString()
            );
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
            var e = this;
            return {
              wid: this.chat.id,
              title: m(),
              body: o("WAWebGetNotificationStrings").getNotificationBody(
                babelHelpers.extends({}, p(this.chat)),
              ),
              onClick: function () {
                o(
                  "WAWebBizAiHandoffNotificationLogEvents",
                ).logAiHandoffNotificationAction(
                  e.chat,
                  o("WAWebWamEnumHandoffNotifActionType")
                    .HANDOFF_NOTIF_ACTION_TYPE.NOTIF_CLICKED_BODY,
                  e.$AiHandoffNotification$p_2,
                  e.$AiHandoffNotification$p_3,
                );
              },
            };
          }),
          (a.logDelivered = function () {
            o(
              "WAWebBizAiHandoffNotificationLogEvents",
            ).logAiHandoffNotificationAction(
              this.chat,
              o("WAWebWamEnumHandoffNotifActionType").HANDOFF_NOTIF_ACTION_TYPE
                .NOTIF_DELIVERED,
              this.$AiHandoffNotification$p_2,
              this.$AiHandoffNotification$p_3,
            );
          }),
          (a.performLogging = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n;
                (yield e.prototype.performLogging.call(this, t),
                  !t &&
                    ((n = c == null ? void 0 : c()) == null || n) &&
                    !this.$AiHandoffNotification$p_1 &&
                    ((this.$AiHandoffNotification$p_1 = !0),
                    o(
                      "WAWebBizAiHandoffNotificationLogEvents",
                    ).logAiHandoffNotificationAction(
                      this.chat,
                      o("WAWebWamEnumHandoffNotifActionType")
                        .HANDOFF_NOTIF_ACTION_TYPE.NOTIF_SHOWN,
                      this.$AiHandoffNotification$p_2,
                      this.$AiHandoffNotification$p_3,
                    )));
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
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
    function m() {
      return o("WAWebBizAiStrings").getBizAiHubTitle().toString();
    }
    function p(e) {
      var t = o("WAWebFrontendContactGetters").getFormattedName(e.contact),
        n = s._(/*BTDS*/ "{name}'s conversation needs your attention", [
          s._param("name", t),
        ]);
      return { body: n.toString() };
    }
    ((l.AiHandoffNotification = d),
      (l.getNotificationTitle = m),
      (l.getNotificationParts = p));
  },
  226,
);
