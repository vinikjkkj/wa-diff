__d(
  "WAWebHandleNewsletterMsgLogger",
  [
    "WASmaxMessageDeliverNewsletterRPC",
    "WAWebHandleMsgError",
    "WAWebIncomingMessageDropWamEvent",
    "WAWebWamEnumE2eDestination",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageDropReasonType",
    "WAWebWamEnumRevokeType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      try {
        return o("WASmaxMessageDeliverNewsletterRPC").receiveNewsletterRPC(e);
      } catch (e) {
        return null;
      }
    }
    function s(t, n) {
      var r = e(n.stanza);
      t instanceof o("WAWebHandleMsgError").MessageValidationError && u(r, t);
    }
    function u(e, t) {
      var n,
        r = new (o(
          "WAWebIncomingMessageDropWamEvent",
        ).IncomingMessageDropWamEvent)({
          messageDropReason: o("WAWebWamEnumMessageDropReasonType")
            .MESSAGE_DROP_REASON_TYPE.INVALID_PROTOBUF,
          e2eDestination: o("WAWebWamEnumE2eDestination").E2E_DESTINATION
            .CHANNEL,
          offline:
            (e == null ||
            (n = e.parsedRequest) == null ||
            (n = n.offlineMixin) == null
              ? void 0
              : n.offline) != null,
          e2eFailureReason: t == null ? void 0 : t.e2eFailureReason,
          messageMediaType: c(e),
          revokeType:
            (e == null
              ? void 0
              : e.parsedRequest.newsletterMessageFanoutContent.name) ===
            "NewsletterRevoke"
              ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
              : void 0,
        });
      r.commit();
    }
    function c(e) {
      var t =
        e == null ? void 0 : e.parsedRequest.newsletterMessageFanoutContent;
      if (t == null) return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
      switch (t.name) {
        case "NewsletterReaction":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.REACTION;
        case "NewsletterMedia":
          return d(t.value.plaintextMediatype);
        case "NewsletterEdit": {
          var n,
            r = t.value.newsletterQuestionReplyOrTextOrMediaMixinGroup;
          return ((n = r.value.newsletterTextOrMediaMixinGroup) == null
            ? void 0
            : n.value.type) === "media"
            ? d(
                r.value.newsletterTextOrMediaMixinGroup.value
                  .plaintextMediatype,
              )
            : o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        }
        case "NewsletterText":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "NewsletterRevoke":
        case "NewsletterReactionRevoke":
        case "NewsletterWAMOEmpty":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "NewsletterPollCreation":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_CREATE;
        case "NewsletterPollVote":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_VOTE;
        case "NewsletterPollResultSnapshot":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_RESULT_SNAPSHOT;
        case "NewsletterQuestion":
        case "NewsletterQuestionReply":
          return t.value.newsletterTextOrMediaMixinGroup.value.type === "media"
            ? d(
                t.value.newsletterTextOrMediaMixinGroup.value
                  .plaintextMediatype,
              )
            : o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "NewsletterQuestionResponse":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "NewsletterQuizCreation":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_CREATE;
        default:
          return (t.name, o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE);
      }
    }
    function d(e) {
      switch (e) {
        case "video":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
        case "vcard":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT;
        case "url":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.URL;
        case "sticker":
        case "genai_sticker":
        case "1p_sticker":
        case "avatar_sticker":
        case "user_created_sticker":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER;
        case "ptt":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT;
        case "ptv":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PUSH_TO_VIDEO;
        case "productlink":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_LINK;
        case "image":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
        case "gif":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF;
        case "document":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.DOCUMENT;
        case "cataloglink":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.CATALOG_LINK;
        case "sticker_pack":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER_PACK;
        case "collection":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.MEDIA_ALBUM;
        case "motion_photo":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.MOTION_PHOTO;
        case "motion_video":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.MOTION_VIDEO;
        default:
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO;
      }
    }
    l.handleNewsletterMsgError = s;
  },
  98,
);
