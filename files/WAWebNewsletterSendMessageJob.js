__d(
  "WAWebNewsletterSendMessageJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebMediaMetadata",
    "WAWebMessageAssociation.flow",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMessageQueryJob",
    "WAWebNewsletterValidationUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebOutgoingMessage",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgTypes",
    "encodeProtobuf",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = /[?&]id=([0-9]+)(?=&|#|$)/i;
    function m(e) {
      if (r("isStringNullOrEmpty")(e)) return null;
      var t = e.match(d);
      return t ? t[1] : null;
    }
    var p = "&";
    function _(e, t) {
      try {
        if (
          e.type !== o("WAWebMsgType").MSG_TYPE.VIDEO ||
          !o(
            "WAWebChannelVideoServerTranscodeGating",
          ).isChannelVideoServerTranscodeUploadEnabled()
        )
          return t;
        var n = o("WAWebMediaMetadata").mediaMetadata(e),
          a = n == null ? void 0 : n.metadataUrl;
        if (a == null) return t;
        var i = m(a);
        if (r("isStringNullOrEmpty")(i)) return t;
        var l = t || "";
        return (l && (l += p), (l += i), l);
      } catch (e) {
        return t;
      }
    }
    function f(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendNewsletterMessage",
          function () {
            return y(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function g(e) {
      var t;
      return (o("WAWebMsgGetters").getIsNewsletterMsg(e) ||
        o("WAWebMsgGetters").getIsNewsletterStatus(e)) &&
        ((t = o("WAWebMsgGetters").getAiProvenance(e)) == null
          ? void 0
          : t.selfDisclosed) === !0 &&
        o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled()
        ? !0
        : void 0;
    }
    function h(e, t) {
      var n = e.msg,
        r = e.type,
        a = {
          messageId: n.id.id,
          newsletterJid: e.newsletterJid,
          payload: o("encodeProtobuf")
            .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, t)
            .readByteArrayView(),
          isWamoSub: n.isWamoSub === !0 || void 0,
        };
      if (r === "pollCreation")
        return babelHelpers.extends({}, a, {
          type: "pollCreation",
          contentType:
            (n == null ? void 0 : n.pollContentType) ===
            o("WAWebPollCreationUtils").PollContentType.IMAGE
              ? "image"
              : "text",
        });
      var i = g(n),
        l = babelHelpers.extends({}, a, {
          isQuestion: n.isQuestion,
          questionReplyQuotedMessage: n.questionReplyQuotedMessage,
          hasNewsletterAIContentMeta: i,
        });
      if (r === "media") {
        var s = _(n, e.mediaHandle);
        return babelHelpers.extends({}, l, {
          mediaHandle: s,
          type: b(t),
          messageAssociationTypeMixinArgs: C(n),
          contentId: e.contentId,
        });
      }
      return babelHelpers.extends({}, l, { type: r });
    }
    function y(e) {
      switch (
        (o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
          e.newsletterJid,
        ),
        e.type)
      ) {
        case "edit": {
          var t = o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Newsletter,
              e.msg,
            ),
            a = o("encodeProtobuf").encodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              t,
            ),
            i = e.msg.isWamoSub === !0 || void 0,
            l = g(e.msg),
            s = {
              messageId: e.msg.id.id,
              newsletterJid: e.newsletterJid,
              payload: a.readByteArrayView(),
              isWamoSub: i,
              hasNewsletterAIContentMeta: l,
            },
            u =
              e.editType === "media"
                ? babelHelpers.extends({}, s, {
                    type: "editMedia",
                    mediaType: b(t),
                    contentId: e.contentId,
                  })
                : babelHelpers.extends({}, s, { type: "editText" });
          return o(
            "WAWebNewsletterSendMessageQueryJob",
          ).querySendNewsletterMessage(u);
        }
        case "pollCreation":
        case "pollResultSnapshot":
        case "text":
        case "media": {
          var d = o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Newsletter,
              e.msg,
            ),
            m = h(e, d);
          return o(
            "WAWebNewsletterSendMessageQueryJob",
          ).querySendNewsletterMessage(m);
        }
        case "revoke":
          return o(
            "WAWebNewsletterSendMessageQueryJob",
          ).querySendNewsletterMessage({
            messageId: e.messageId,
            newsletterJid: e.newsletterJid,
            type: "revoke",
            isContentMedia: e.isContentMedia,
            isWamoSub: e.isWamoSub === !0 || void 0,
          });
        case "reaction":
          return o(
            "WAWebNewsletterSendMessageQueryJob",
          ).querySendNewsletterMessage({
            type: "reaction",
            newsletterJid: e.newsletterJid,
            reactionCode: e.reactionCode,
            messageId: e.msg.id.id,
            parentMsgServerId: e.parentMsgServerId,
          });
        case "pollVote":
          return o(
            "WAWebNewsletterSendMessageQueryJob",
          ).querySendNewsletterMessage({
            type: "pollVote",
            newsletterJid: e.newsletterJid,
            votes: e.votes,
            messageId: e.msg.id.id,
            parentMsgServerId: e.parentMsgServerId,
          });
        case "newsletterQuestionResponse": {
          var p = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.Newsletter,
            {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
              data: e.msg,
            },
          );
          return o(
            "WAWebNewsletterSendMessageQueryJob",
          ).querySendNewsletterMessage({
            messageId: e.msg.id.id,
            newsletterJid: e.newsletterJid,
            payload: o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, p)
              .readByteArrayView(),
            type: "newsletterQuestionResponse",
            parentMsgServerId: e.parentMsgServerId,
          });
        }
        default:
          return (
            e.type,
            (c || (c = n("Promise"))).reject(
              r("err")("Unexpected message type: " + e.type),
            )
          );
      }
    }
    function C(t) {
      var n = t.associationType;
      if (n == null) return null;
      switch (n) {
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .MEDIA_POLL:
          return { metaMessageAssociationType: "media_poll" };
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .MEDIA_ALBUM:
          return null;
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .BOT_PLUGIN:
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD:
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_VIDEO_DUAL_UPLOAD:
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .HEVC_VIDEO_DUAL_UPLOAD:
        case o("WAWebMessageAssociation.flow").MessageAssociationType
          .POLL_ADD_OPTION:
        case o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN:
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] unexpected msg association type: ",
                    "",
                  ])),
                n,
              )
              .tags("newsletter")
              .sendLogs("newsletter-message-association-type-" + n),
            null
          );
      }
    }
    function b(e) {
      var t = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(e);
      if (t == null)
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] Failed to get media type from protobuf",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-failed-media-type-from-protobuf"),
          r("err")("Failed to get media type from protobuf")
        );
      switch (t) {
        case o("WAWebBackendJobs.flow").EncMediaType.Audio:
          return "audio";
        case o("WAWebBackendJobs.flow").EncMediaType.Document:
          return "document";
        case o("WAWebBackendJobs.flow").EncMediaType.Gif:
          return "gif";
        case o("WAWebBackendJobs.flow").EncMediaType.Image:
          return "image";
        case o("WAWebBackendJobs.flow").EncMediaType.Ptt:
          return "ptt";
        case o("WAWebBackendJobs.flow").EncMediaType.Sticker:
          return "sticker";
        case o("WAWebBackendJobs.flow").EncMediaType.Url:
          return "url";
        case o("WAWebBackendJobs.flow").EncMediaType.VCard:
          return "vcard";
        case o("WAWebBackendJobs.flow").EncMediaType.Video:
          return "video";
        case o("WAWebBackendJobs.flow").EncMediaType.StickerPack:
          return "sticker_pack";
        default:
          throw (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Unsupported media type",
                  ])),
              )
              .tags("newsletter")
              .sendLogs("newsletter-unsupported-media-type-" + t),
            r("err")("Unsupported media type " + t)
          );
      }
    }
    ((l.extractVideoIdFromMetadataUrl = m),
      (l.maybeAddVideoIdToMediaHandle = _),
      (l.sendNewsletterMessageJob = f),
      (l.sendNewsletterMessage = y));
  },
  98,
);
