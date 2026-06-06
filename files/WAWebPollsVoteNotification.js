__d(
  "WAWebPollsVoteNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebPollsPollVoteCollection",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.creationMsg;
        return (
          (n = e.call(this) || this),
          (n.$PollVoteNotification$p_3 = function () {
            n.$PollVoteNotification$p_2.getUnreadCount() === 0 &&
              n.closeBanner();
          }),
          (n.$PollVoteNotification$p_1 = r),
          (n.$PollVoteNotification$p_2 = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([
            r.id,
          ])[0]),
          (n.bodyText = u({
            unreadCount: n.$PollVoteNotification$p_2.getUnreadCount(),
            pollName: n.$PollVoteNotification$p_1.pollName,
          })),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.shouldPlaySound = function () {
          if (!e.prototype.shouldPlaySound.call(this)) return !1;
          var t = o("WAWebFrontendMsgGetters").getChat(
            this.$PollVoteNotification$p_1.unsafe(),
          );
          return (
            o("WAWebNotificationHelpers").shouldPlaySoundGranular(t) &&
            !o("WAWebNotificationHelpers").shouldSquelch(t, !1)
          );
        }),
        (a.shouldShowBanner = function () {
          if (!e.prototype.shouldShowBanner.call(this)) return !1;
          var t = o("WAWebFrontendMsgGetters").getChat(
            this.$PollVoteNotification$p_1.unsafe(),
          );
          return o("WAWebNotificationHelpers").shouldEnableNotificationGranular(
            t,
          );
        }),
        (a.shouldMute = function (t) {
          return o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)
            ? r("WAWebNotificationMuteReason").AppState
            : o("WAWebNotificationHelpers").isMutedAndNotMentioned(
                  this.$PollVoteNotification$p_1.unsafe(),
                )
              ? r("WAWebNotificationMuteReason").MutedChat
              : o("WAWebNotificationHelpers").isArchivedAndNotMentioned(
                    this.$PollVoteNotification$p_1.unsafe(),
                  )
                ? r("WAWebNotificationMuteReason").ArchivedChat
                : !r("gkx")("26258") &&
                    o("WAWebNotificationHelpers").shouldIgnoreGroupMsg(
                      this.$PollVoteNotification$p_1.unsafe(),
                    )
                  ? r("WAWebNotificationMuteReason").IgnoreGroupMsg
                  : o("WAWebNotificationHelpers").isOfflineResumeInProgress()
                    ? r("WAWebNotificationMuteReason").OfflineResumeInProgress
                    : null;
        }),
        (a.shouldSquelch = function () {
          if (
            o(
              "WAWebNotificationController",
            ).WANotificationController.notificationExists(this.buildKey())
          )
            return null;
          var e = o("WAWebFrontendMsgGetters").getChat(
            this.$PollVoteNotification$p_1.unsafe(),
          );
          return o("WAWebNotificationHelpers").shouldSquelch(e, !1)
            ? r("WAWebNotificationMuteReason").GroupFlood
            : null;
        }),
        (a.afterBannerShown = function (t) {
          var e = this;
          (this.$PollVoteNotification$p_2.on(
            "change add remove reset",
            this.$PollVoteNotification$p_3,
          ),
            t.waitForClose().then(function () {
              e.$PollVoteNotification$p_2.off(
                "change add remove reset",
                e.$PollVoteNotification$p_3,
              );
            }));
        }),
        (a.buildKey = function () {
          return "vote:" + this.$PollVoteNotification$p_1.id.toString();
        }),
        (a.matchesChat = function (t) {
          return o("WAWebFrontendMsgGetters")
            .getChat(this.$PollVoteNotification$p_1.unsafe())
            .equals(t);
        }),
        (a.getChatKind = function () {
          return o("WAWebFrontendChatGetters").getKind(
            o("WAWebFrontendMsgGetters").getChat(
              this.$PollVoteNotification$p_1.unsafe(),
            ),
          );
        }),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = o("WAWebFrontendMsgGetters").getChat(
              this.$PollVoteNotification$p_1.unsafe(),
            );
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              e,
              this.abortController.signal,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getBannerOptions = function () {
          var e = this.$PollVoteNotification$p_1,
            t = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
          return {
            wid: t.id,
            msgId: e.id.toString(),
            tag: this.buildKey(),
            title: o("WAWebNotificationHelpers").getNotificationTitle(t),
            body: o("WAWebGetNotificationStrings").getNotificationBody(
              babelHelpers.extends({}, this.$PollVoteNotification$p_4(), {
                msgDir: o("WAWebFrontendMsgGetters").getDir(e),
              }),
            ),
          };
        }),
        (a.$PollVoteNotification$p_4 = function () {
          return { body: this.bodyText };
        }),
        (a.getNotificationDeliveryWamEventData = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return {
              uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
                .NOTIFICATION_TYPE_ENUM.POLL_MESSAGE,
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
    function u(e) {
      var t = e.pollName,
        n = e.unreadCount;
      return s
        ._(
          /*BTDS*/ '_j{"*":"{number_of_votes} new votes: \\ud83d\\udcca {pollName}","_1":"1 new vote: \\ud83d\\udcca {pollName}"}',
          [s._plural(n, "number_of_votes"), s._param("pollName", t)],
        )
        .toString();
    }
    l.PollVoteNotification = e;
  },
  226,
);
