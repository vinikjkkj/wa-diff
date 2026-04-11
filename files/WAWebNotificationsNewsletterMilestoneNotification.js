__d(
  "WAWebNotificationsNewsletterMilestoneNotification",
  [
    "fbt",
    "WALogger",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebL10N",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterModelUtils",
    "WAWebNoop",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebPollCreationUtils",
    "WAWebUA",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = (function (t) {
        function a(e) {
          var n,
            r = e.chat,
            o = e.milestoneType,
            a = e.msg,
            i = e.reactionCode,
            l = e.value;
          return (
            (n = t.call(this) || this),
            (n.msg = a),
            (n.milestoneType = o),
            (n.value = l),
            (n.reactionCode = i),
            (n.chat = r),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.buildKey = function () {
            var e, t, n;
            return (
              "newsletter-milestone:" +
              ((e = (t = this.msg) == null ? void 0 : t.serverId) != null
                ? e
                : 0) +
              ":" +
              this.chat.id.toString() +
              ":" +
              this.milestoneType +
              ":" +
              this.value +
              ":" +
              ((n = this.reactionCode) != null ? n : "")
            );
          }),
          (i.getIcon = (function () {
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
          (i.shouldMute = function (n) {
            var e = t.prototype.shouldMute.call(this, n);
            if (e != null) return e;
            var a = this.chat.newsletterMetadata;
            return o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterAdminNotificationsEnabled(a)
              ? o("WAWebNewsletterModelUtils").isMuted(
                  a.followerActivityMuteExpiration,
                )
                ? r("WAWebNotificationMuteReason")
                    .NewsletterFollowerActivityMuted
                : null
              : r("WAWebNotificationMuteReason")
                  .NewsletterFollowerActivityDisabled;
          }),
          (i.shouldPlaySound = function () {
            return t.prototype.shouldPlaySound.call(this)
              ? o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat)
              : !1;
          }),
          (i.getBody = function () {
            return this.msg
              ? this.milestoneType === "FOLLOWS"
                ? ""
                : o("WAWebGetNotificationStrings").getNotificationMessageBody(
                    this.msg,
                  )
              : this.getBodyForNullMsg();
          }),
          (i.getAction = function () {
            var t = this.msg ? ":" : "";
            e: {
              var n = this.milestoneType;
              if (n === "FOLLOWS")
                return s
                  ._(
                    /*BTDS*/ '_j{"*":"\\ud83c\\udf89 Your channel has {channel_followers_count} followers!","_1":"\\ud83c\\udf89 Your channel has {channel_followers_count} new follower!"}',
                    [
                      s._plural(this.value),
                      s._param(
                        "channel_followers_count",
                        r("WAWebL10N").d(this.value),
                      ),
                    ],
                  )
                  .toString();
              if (n === "MESSAGE_REACTIONS")
                return this.value <= 1
                  ? s
                      ._(/*BTDS*/ "{channel_reaction} reaction to{colon}", [
                        s._param("channel_reaction", this.reactionCode),
                        s._param("colon", t),
                      ])
                      .toString()
                  : s
                      ._(
                        /*BTDS*/ "{channel_reaction_count} reactions to{colon}",
                        [
                          s._param(
                            "channel_reaction_count",
                            r("WAWebL10N").d(this.value),
                          ),
                          s._param("colon", t),
                        ],
                      )
                      .toString();
              if (n === "MESSAGE_RESPONSES")
                return s
                  ._(
                    /*BTDS*/ '_j{"*":"{channel_question_response_count} responses to{colon}","_1":"{channel_question_response_count} response to{colon}"}',
                    [
                      s._plural(this.value),
                      s._param(
                        "channel_question_response_count",
                        r("WAWebL10N").d(this.value),
                      ),
                      s._param("colon", t),
                    ],
                  )
                  .toString();
              if (n === "MESSAGE_VOTES") {
                var a;
                return ((a = this.msg) == null ? void 0 : a.pollType) ===
                  o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s
                      ._(
                        /*BTDS*/ '_j{"*":"{channel_quiz_responses_count} responses to{colon}","_1":"{channel_quiz_responses_count} response to{colon}"}',
                        [
                          s._plural(this.value),
                          s._param(
                            "channel_quiz_responses_count",
                            r("WAWebL10N").d(this.value),
                          ),
                          s._param("colon", t),
                        ],
                      )
                      .toString()
                  : s
                      ._(
                        /*BTDS*/ '_j{"*":"{channel_poll_votes_count} votes in{colon}","_1":"{channel_poll_votes_count} vote in{colon}"}',
                        [
                          s._plural(this.value),
                          s._param(
                            "channel_poll_votes_count",
                            r("WAWebL10N").d(this.value),
                          ),
                          s._param("colon", t),
                        ],
                      )
                      .toString();
              }
              {
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] unsupported milestone type: ",
                        "",
                      ])),
                    this.milestoneType,
                  ),
                  ""
                );
                break e;
              }
            }
          }),
          (i.getBodyForNullMsg = function () {
            e: {
              var e = this.milestoneType;
              if (e === "FOLLOWS") return "";
              if (e === "MESSAGE_REACTIONS")
                return s._(/*BTDS*/ "your update").toString();
              if (e === "MESSAGE_RESPONSES")
                return o("WAWebUA").UA.hasEmoji ? "\u2753" : "";
              if (e === "MESSAGE_VOTES")
                return o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCCA" : "";
              {
                return (
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] unsupported milestone type: ",
                        "",
                      ])),
                    this.milestoneType,
                  ),
                  ""
                );
                break e;
              }
            }
          }),
          (i.getBannerOptions = function () {
            var e,
              t,
              n = o("WAWebGetNotificationStrings").getNotificationBody({
                action: this.getAction(),
                body: this.getBody(),
                msgDir: this.msg
                  ? o("WAWebFrontendMsgGetters").getDir(this.msg)
                  : void 0,
              });
            return {
              wid: this.chat.id,
              msgId: (e = this.msg) == null ? void 0 : e.id.toString(),
              onClick: r("WAWebNoop"),
              tag: (t = this.msg) == null ? void 0 : t.id.toString(),
              doNotOpenChat: !1,
              title: o("WAWebNotificationHelpers").getNotificationTitle(
                this.chat,
              ),
              body: n,
            };
          }),
          (i.matchesChat = function (t) {
            return t.equals(this.chat);
          }),
          (i.getChatKind = function () {
            return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
          }),
          a
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    l.WANewsletterMilestoneNotification = c;
  },
  226,
);
