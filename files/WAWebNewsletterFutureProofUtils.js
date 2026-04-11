__d(
  "WAWebNewsletterFutureProofUtils",
  [
    "WAWebABProps",
    "WAWebCompactSet",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMusicGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebPollsGatingUtils",
    "WAWebQuestionsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map([
        [1, (e = o("WAWebMsgType")).MSG_TYPE.CHAT],
        [2, e.MSG_TYPE.IMAGE],
        [3, e.MSG_TYPE.VIDEO],
        [4, e.MSG_TYPE.AUDIO],
        [5, e.MSG_TYPE.PTT],
        [6, e.MSG_TYPE.LOCATION],
        [7, e.MSG_TYPE.VCARD],
        [8, e.MSG_TYPE.DOCUMENT],
        [11, e.MSG_TYPE.MULTI_VCARD],
        [12, e.MSG_TYPE.REACTION],
        [13, e.MSG_TYPE.POLL_CREATION],
        [14, e.MSG_TYPE.POLL_UPDATE],
        [15, e.MSG_TYPE.STICKER],
        [16, e.MSG_TYPE.POLL_RESULT_SNAPSHOT],
        [17, e.MSG_TYPE.STICKER_PACK],
      ]);
    function u() {
      return r("WAWebCompactSet")(
        o("WAWebABProps")
          .getABPropConfigValue("channel_supported_message_types")
          .split(","),
        function (e) {
          var t = Number.parseInt(e, 10);
          return Number.isSafeInteger(t) ? s.get(t) : null;
        },
      );
    }
    function c(e) {
      var t = u().has(e);
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterPTTReceivingEnabled();
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterPTVReceivingEnabled();
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
        case o("WAWebMsgType").MSG_TYPE.POLL_UPDATE:
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterPollsReceivingEnabled();
        case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
          return o(
            "WAWebPollsGatingUtils",
          ).isPollResultSnapshotReceivingEnabled();
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterAudioFileReceivingEnabled();
        case o("WAWebMsgType").MSG_TYPE.ALBUM:
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterAlbumsV2ReceiverEnabled();
        case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE:
          return o(
            "WAWebNewsletterGatingUtils",
          ).isChannelInviteContactsToFollowConsumerEnabled();
        default:
          return t;
      }
    }
    function d(e) {
      var t =
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN
          ? e.futureproofType
          : e.type;
      return t == null
        ? { supported: !1 }
        : c(t)
          ? o("WAWebMsgGetters").getIsReply(e) &&
            !o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterReceivingAdminRepliesEnabled()
            ? { supported: !1 }
            : o("WAWebMsgGetters").getIsQuestion(e) &&
                !o("WAWebQuestionsGatingUtils").isQuestionReceiverEnabledForMsg(
                  e,
                )
              ? { supported: !1 }
              : o("WAWebMsgGetters").getIsQuestionReply(e) &&
                  !o(
                    "WAWebQuestionsGatingUtils",
                  ).isQuestionReplyReceiverEnabledForMsg(e)
                ? { supported: !1 }
                : o("WAWebMsgGetters").getPollType(e) ===
                      o("WAWebPollCreationUtils").PollType.QUIZ &&
                    !o(
                      "WAWebNewsletterGatingUtils",
                    ).isNewsletterQuizReceiverEnabled()
                  ? { supported: !1 }
                  : e.newsletterAdminProfile != null &&
                      !o(
                        "WAWebNewsletterGatingUtils",
                      ).isNewsletterAdminProfilesReceiverEnabled()
                    ? { supported: !1 }
                    : o("WAWebMsgGetters").isNewsletterMsgWithMusic(e) &&
                        !o(
                          "WAWebMusicGatingUtils",
                        ).isStatusMusicReceiverEnabledForNewsletter()
                      ? { supported: !1, reason: "phone_only_feature" }
                      : { supported: !0 }
          : { supported: !1 };
    }
    ((l.isMsgTypeSupported = c), (l.isMsgSupported = d));
  },
  98,
);
