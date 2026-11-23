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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = (function (t) {
        function n(e) {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.buildKey = function () {
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
          (a.getIcon = async function () {
            return o("WAWebNotificationIconUtils").getChatNotificationIcon(
              this.chat,
              this.abortController.signal,
            );
          }),
          (a.shouldMute = function (n) {
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
          (a.shouldPlaySound = function () {
            return t.prototype.shouldPlaySound.call(this)
              ? o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat)
              : !1;
          }),
          (a.getBody = function () {
            return this.msg
              ? this.milestoneType === "FOLLOWS"
                ? ""
                : o("WAWebGetNotificationStrings").getNotificationMessageBody(
                    this.msg,
                  )
              : this.getBodyForNullMsg();
          }),
          (a.getAction = function () {
            var t = this.msg ? ":" : "";
            e: {
              var n = this.milestoneType;
              if (n === "FOLLOWS")
                return s
                  ._(/*BTDS*/ "", [
                    s._plural(this.value),
                    s._param(
                      "channel_followers_count",
                      r("WAWebL10N").d(this.value),
                    ),
                  ])
                  .toString();
              if (n === "MESSAGE_REACTIONS")
                return this.value <= 1
                  ? s
                      ._(/*BTDS*/ "", [
                        s._param("channel_reaction", this.reactionCode),
                        s._param("colon", t),
                      ])
                      .toString()
                  : s
                      ._(/*BTDS*/ "", [
                        s._param(
                          "channel_reaction_count",
                          r("WAWebL10N").d(this.value),
                        ),
                        s._param("colon", t),
                      ])
                      .toString();
              if (n === "MESSAGE_RESPONSES")
                return s
                  ._(/*BTDS*/ "", [
                    s._plural(this.value),
                    s._param(
                      "channel_question_response_count",
                      r("WAWebL10N").d(this.value),
                    ),
                    s._param("colon", t),
                  ])
                  .toString();
              if (n === "MESSAGE_VOTES") {
                var a;
                return ((a = this.msg) == null ? void 0 : a.pollType) ===
                  o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s
                      ._(/*BTDS*/ "", [
                        s._plural(this.value),
                        s._param(
                          "channel_quiz_responses_count",
                          r("WAWebL10N").d(this.value),
                        ),
                        s._param("colon", t),
                      ])
                      .toString()
                  : s
                      ._(/*BTDS*/ "", [
                        s._plural(this.value),
                        s._param(
                          "channel_poll_votes_count",
                          r("WAWebL10N").d(this.value),
                        ),
                        s._param("colon", t),
                      ])
                      .toString();
              }
              if (n === "MESSAGE_FORWARDS")
                return s
                  ._(/*BTDS*/ "", [
                    s._plural(this.value),
                    s._param(
                      "channel_forwards_count",
                      r("WAWebL10N").d(this.value),
                    ),
                    s._param("colon", t),
                  ])
                  .toString();
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
          (a.getBodyForNullMsg = function () {
            e: {
              var e = this.milestoneType;
              if (e === "FOLLOWS") return "";
              if (e === "MESSAGE_REACTIONS") return s._(/*BTDS*/ "").toString();
              if (e === "MESSAGE_RESPONSES")
                return o("WAWebUA").UA.hasEmoji ? "\u2753" : "";
              if (e === "MESSAGE_VOTES")
                return o("WAWebUA").UA.hasEmoji ? "\u{1F4CA}" : "";
              if (e === "MESSAGE_FORWARDS") return s._(/*BTDS*/ "").toString();
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
          (a.getBannerOptions = function () {
            var e,
              t = o("WAWebGetNotificationStrings").getNotificationBody({
                action: this.getAction(),
                body: this.getBody(),
                msgDir: this.msg
                  ? o("WAWebFrontendMsgGetters").getDir(this.msg)
                  : void 0,
              });
            return {
              wid: this.chat.id,
              msgId: (e = this.msg) == null ? void 0 : e.id.toString(),
              alwaysHighlightMsg: this.msg != null,
              onClick: r("WAWebNoop"),
              tag: this.buildKey(),
              doNotOpenChat: !1,
              title: o("WAWebNotificationHelpers").getNotificationTitle(
                this.chat,
              ),
              body: t,
            };
          }),
          (a.matchesChat = function (t) {
            return t.equals(this.chat);
          }),
          (a.getChatKind = function () {
            return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
          }),
          n
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    l.WANewsletterMilestoneNotification = c;
  },
  226,
);
