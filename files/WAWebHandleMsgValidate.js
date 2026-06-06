__d(
  "WAWebHandleMsgValidate",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebBizGatingUtils",
    "WAWebBotUtils",
    "WAWebBroadcastInvalidChannelsContextSourceMessageDropWamEvent",
    "WAWebE2EProtoUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMessageTypes.flow",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebMessagingGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPhashUtils",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenUtils",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = "message_edit";
    async function v(t, n) {
      var r,
        a,
        i = (r = n.preMatChat) != null ? r : n.chat;
      if (!S({ encDestination: t, envelopeDestination: i }))
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encDestination: ",
                  ", destination: ",
                  ", type: ",
                  "",
                ])),
              t.toString(),
              i.toString(),
              n.type,
            )
            .sendLogs(
              "validateMsgDestination: drop due to the deviceSentMessage meta mismatch.",
            ),
          !1
        );
      var l = n.author;
      if (!o("WAWebUserPrefsMeUser").isMeAccount(l))
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose(["sender: ", ""])),
              l.toString(),
            )
            .sendLogs(
              "validateMsgDestination: drop due to msg is not sent from your own device.",
            ),
          !1
        );
      var c = await o("WAWebApiDeviceList").hasDevice(
        l,
        (a = l.device) != null ? a : 0,
      );
      return (
        c ||
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "no record found for sender: ",
                  "",
                ])),
              l.toString(),
            )
            .sendLogs("validateMsgDestination:drop due to invalid device"),
        c
      );
    }
    function S(e) {
      var t = e.encDestination,
        n = e.envelopeDestination;
      if (t.equals(n)) return !0;
      var a = o(
        "WAWebSimpleSignalPNToFBIDMigration",
      ).getDeprecatedPnChatForFbidThread(t);
      if (r("WAWebWid").equals(a, n)) return !0;
      if (
        t.isUser() &&
        r("WAWebWid").equals(o("WAWebApiContact").getAlternateUserWid(t), n)
      ) {
        var i = n.toLogString(),
          l = t.toLogString();
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "validateMsgDestination: match but addressing mode mismatch: envelope: ",
                  ", enc: ",
                  "",
                ])),
              i,
              l,
            )
            .sendLogs("validateMsgDestination-addressing-mode-mismatch"),
          !0
        );
      }
      return !1;
    }
    async function R(e, t) {
      var n,
        r =
          t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
            ? t.bclParticipants.map(function (e) {
                var t;
                return (t = e.preMatWid) != null ? t : e.wid;
              })
            : (n = t.directPeerStatusBclParticipants) != null
              ? n
              : [],
        a = await o("WAWebPhashUtils").phashV2(r);
      return a !== e
        ? (o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "received: ",
                  " from peer, computed: ",
                  "",
                ])),
              e,
              a,
            )
            .sendLogs("validateBclHash: drop due to invalid hash."),
          !1)
        : ((t.bclHashValidated = !0), !0);
    }
    async function L(e) {
      var t = e.device == null ? o("WAJids").DEFAULT_DEVICE_ID : e.device;
      if (t === o("WAJids").DEFAULT_DEVICE_ID) return !0;
      var n = await o("WAWebApiDeviceList").getDeviceIds([e]),
        r = n[0];
      return (
        r != null &&
        r.devices.some(function (e) {
          return e.id === t;
        })
      );
    }
    function E(e, t) {
      var n = e.buttonsMessage,
        r = e.highlyStructuredMessage,
        a = e.listMessage,
        i = e.templateMessage;
      if (a && (t == null ? void 0 : t.verifiedListEnvelope) !== !0)
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "no biz node found in list message",
                ])),
            )
            .sendLogs(
              "validateBizNode:drop due to missing biz node in invalid SMAX in list message",
              { sampling: 0.01 },
            ),
          !1
        );
      if (n) {
        var l,
          s,
          u =
            (t == null ? void 0 : t.verifiedButtonsEnvelope) === !0 ||
            (t == null ? void 0 : t.nativeFlowName) != null ||
            (((l = n.contextInfo) == null ? void 0 : l.isForwarded) === !0 &&
              (n == null || (s = n.buttons) == null ? void 0 : s.length) === 0);
        return (
          u ||
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "button message is invalid",
                  ])),
              )
              .sendLogs(
                "validateBizNode:drop due to invalid SMAX for buttons message",
              ),
          u
        );
      }
      return (r || i) && (t == null ? void 0 : t.verifiedHsmEnvelope) !== !0
        ? (o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "no biz node found in HSM",
                ])),
            )
            .sendLogs(
              "validateBizNode:drop due to missing biz node in invalid SMAX in HSM",
            ),
          !1)
        : !0;
    }
    function k(e) {
      var t,
        n = (t = e.ctwaContext) == null ? void 0 : t.alwaysShowAdAttribution;
      if (
        !o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebMsgGetters").getSender(e),
        ) &&
        n === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_suppress_message_via_ad_spam_web",
        )
      )
        throw new (o("WAWebHandleMsgError").MessageValidationError)(
          "This is a spam message sent to consumer number with 'Message Via Ad' header",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
    }
    function I(e) {
      for (var t of Object.keys(e)) {
        var n = e[t];
        if (n != null && typeof n == "object" && "contextInfo" in n) {
          var r = n.contextInfo;
          if (r != null) return r;
        }
      }
      return null;
    }
    function T(e, t) {
      var n = I(e),
        r = n == null ? void 0 : n.externalAdReply;
      if (
        !o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebMsgGetters").getIsSentByMe(t) &&
        r != null &&
        o(
          "WAWebBizGatingUtils",
        ).suppressMessageWithExternalAdReplyConsumerEnabled()
      )
        throw new (o("WAWebHandleMsgError").MessageValidationError)(
          "This is a spam message sent to consumer number with externalAdReply",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
          { sendLogs: 0 },
        );
    }
    function D(e, t) {
      var n =
        (e == null ? void 0 : e.context_source) ===
        o("WAWebHandleMsgCommon").CONTEXT_SOURCE;
      if (
        n &&
        t.type !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isChannelInviteContactsToFollowInvalidDroppingEnabled()
      ) {
        var r;
        throw (
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "Dropping NEWSLETTER_FOLLOWER_INVITE message without valid context_source. Message type: ",
                  ", Context source: ",
                  "",
                ])),
              t.type,
              (r = e == null ? void 0 : e.context_source) != null ? r : "null",
            )
            .sendLogs("newsletter-follower-invite-invalid-context-source"),
          new (o(
            "WAWebBroadcastInvalidChannelsContextSourceMessageDropWamEvent",
          ).BroadcastInvalidChannelsContextSourceMessageDropWamEvent)({
            wasDropped: !0,
          }).commit(),
          new (o("WAWebHandleMsgError").MessageValidationError)(
            "NEWSLETTER_FOLLOWER_INVITE message without valid context_source",
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          )
        );
      }
    }
    function x(e) {
      var t = e.bizInfo,
        n = e.info,
        a = e.msgMeta,
        i = e.proto,
        l = e.renderableMsgs;
      if (l.length > 0 && !E(i, t))
        throw new (o("WAWebHandleMsgError").BizNodeValidationError)(
          "[messaging] Biz node validation failed due to absence of biz node in SMAX",
        );
      var s = l[0];
      if (s != null) {
        if (
          o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(a) &&
          s.type !== o("WAWebMsgType").MSG_TYPE.REACTION &&
          s.type !== o("WAWebMsgType").MSG_TYPE.REACTION_ENC
        )
          throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
            o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
              .INVALID_REACTION_STANZA,
          );
        if (o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(a)) {
          var u =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            c =
              s.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE &&
              s.subtype === "poll_vote";
          if (!u && !c)
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_POLL_UPDATE_STANZA,
            );
        }
        if (o("WAWebHandleMsgMetaUtils").isCommentMsgMeta(a)) {
          var d =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType === o("WAWebMsgType").MSG_TYPE.COMMENT,
            m = new Set([
              o("WAWebMsgType").MsgKind.CommentEncrypted,
              o("WAWebMsgType").MsgKind.CommentDecrypted,
              o("WAWebMsgType").MsgKind.RevokedAddon,
              o("WAWebMsgType").MsgKind.ProtocolRevoke,
              o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
            ]);
          if (!d && !m.has(s.kind))
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_COMMENT_STANZA,
            );
        }
        if (n.edit !== o("WAWebAck").EDIT_ATTR.NONE)
          if (n.edit === o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT) {
            var p =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE;
            if (s.type !== o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE && !p)
              throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                  .INVALID_PIN_IN_CHAT_STANZA,
              );
          } else if (
            n.edit === o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT &&
            !(
              o("WAWebHandleMsgMetaUtils").isEventEditMsgMeta(a) ||
              o("WAWebHandleMsgMetaUtils").isPollEditMsgMeta(a) ||
              (o("WAWebHandleMsgMetaUtils").isMediaMsgMeta(a) &&
                o("WAWebBotUtils").isMetaAiBot(n.author))
            )
          ) {
            var _ =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofSubtype === b;
            if (s.subtype !== b && !_)
              throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                  .INVALID_EDIT_STANZA,
              );
          } else {
            if (n.edit === o("WAWebAck").EDIT_ATTR.NEWSLETTER_MSG_EDIT)
              throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                  .INVALID_NEWSLETTER_EDIT_STANZA,
              );
            if (n.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE) {
              if (s.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL)
                throw (
                  r("gkx")("26259") &&
                    o("WALogger")
                      .ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "RenderableMessagesValidation: msg.type: ",
                            "",
                          ])),
                        s.type,
                      )
                      .sendLogs("invalid-edit-attribute-admin-revoke"),
                  new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                    o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                      .INVALID_EDIT_STANZA,
                  )
                );
            } else if (n.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE) {
              var f,
                v = [
                  (f = o("WAWebMsgType")).MSG_TYPE.REACTION,
                  f.MSG_TYPE.REACTION_ENC,
                  f.MSG_TYPE.PROTOCOL,
                  f.MSG_TYPE.KEEP_IN_CHAT,
                ];
              if (!v.includes(s.type))
                throw (
                  r("gkx")("26259") &&
                    o("WALogger")
                      .ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "RenderableMessagesValidation: msg.type: ",
                            "",
                          ])),
                        s.type,
                      )
                      .sendLogs("invalid-edit-attribute-sender-revoke"),
                  new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                    o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                      .INVALID_EDIT_STANZA,
                  )
                );
            } else
              o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "RenderableMessagesValidation: Unvalidated edit attribute ",
                      "",
                    ])),
                  n.edit,
                )
                .sendLogs("unvalidated-edit-attribute");
          }
        if (o("WAWebHandleMsgMetaUtils").isEventResponseMsgMeta(a)) {
          var S =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
            R = s.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE;
          if (!S && !R)
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_EVENT_RESPONSE_STANZA,
            );
        }
        if (o("WAWebHandleMsgMetaUtils").isEventEditMsgMeta(a)) {
          var L =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType ===
                o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED,
            I = s.type === o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED;
          if (!L && !I)
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_EVENT_EDIT_STANZA,
            );
        }
        if (o("WAWebHandleMsgMetaUtils").isPollEditMsgMeta(a)) {
          var x =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType ===
                o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED,
            $ = s.type === o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED;
          if (!x && !$)
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_POLL_EDIT_STANZA,
            );
        }
        if (o("WAWebHandleMsgMetaUtils").isMemberTagMsgMeta(a)) {
          var P =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              s.futureproofSubtype === "member_label",
            N =
              s.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              s.subtype === "member_label";
          if (!P && !N)
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_MEMBER_TAG_STANZA,
            );
        }
        if (r("gkx")("26259")) {
          var M = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(i);
          M !== (a == null ? void 0 : a.type) &&
            o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "Type in stanza [",
                    "] is different from the one derived from protobuf [",
                    "]. Message type: ",
                    "",
                  ])),
                a == null ? void 0 : a.type,
                M,
                s.type,
              )
              .tags("messaging")
              .sendLogs("report-token-stanza-protobuf-type-mismatched", {
                sampling: 0.01,
              });
        }
        (D(a, s), T(i, s), k(s));
      }
    }
    async function $(e) {
      var t,
        n,
        r,
        a = e.forceDualEncryptedValidation,
        i = a === void 0 ? !1 : a,
        l = e.renderableMsgs;
      if (o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()) {
        var s = l[0];
        if (
          !(
            s == null ||
            s.plainProtobufBytes == null ||
            s.reportingTokenInfo == null
          )
        ) {
          var u = s.plainProtobufBytes,
            c = s.reportingTokenInfo,
            d = c.reportingTag,
            m = c.reportingToken,
            p = c.version,
            _ =
              p === void 0
                ? o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION
                    .DEFAULT
                : p;
          if (d != null) {
            var f = (t = s.protocolMessageKey) == null ? void 0 : t.toString(),
              g = {
                msgKey: f != null ? f : s.id.toString(),
                stanzaId: s.id.id,
                reportingTag: d,
                receivedTs: o("WATimeUtils").unixTimeMs(),
                msgTs: (n = (r = c.stanzaTs) != null ? r : s.t) != null ? n : 0,
              };
            if (s.kind === o("WAWebMsgType").MsgKind.Unknown) {
              o("WAWebGetMessageCache")
                .getMessageCache()
                .addAdditionalInfo(
                  {
                    type: o("WAWebHandleMessageTypes.flow")
                      .MsgAdditionalInfoType.ReportingInfo,
                    data: babelHelpers.extends({}, g),
                  },
                  f != null,
                );
              return;
            }
            if (
              !(
                (s.kind === o("WAWebMsgType").MsgKind.CommentEncrypted ||
                  s.kind === o("WAWebMsgType").MsgKind.EventEditEncrypted ||
                  s.kind === o("WAWebMsgType").MsgKind.MessageEditEncrypted) &&
                i === !1
              )
            ) {
              var h = await o(
                  "WAWebReportingTokenUtils",
                ).validateReportingTokenInfo(s, u),
                y = h.reportingTokenContent,
                C = h.reportingTokenKey,
                b = h.res,
                v = P(s, m)
                  ? babelHelpers.extends(
                      {
                        reportingToken:
                          m == null
                            ? void 0
                            : m.slice(
                                0,
                                b
                                  ? o("WAWebReportingTokenUtils")
                                      .REPORTING_TOKEN_STORAGE_SIZE
                                  : o("WAWebReportingTokenUtils")
                                      .REPORTING_TOKEN_INVALID_STORAGE_SIZE,
                              ),
                        reportingTokenContentOpaqueData: y,
                        version: _,
                      },
                      C != null && { reportingTokenKey: C },
                    )
                  : null;
              o("WAWebGetMessageCache")
                .getMessageCache()
                .addAdditionalInfo(
                  {
                    type: o("WAWebHandleMessageTypes.flow")
                      .MsgAdditionalInfoType.ReportingInfo,
                    data: babelHelpers.extends({}, g, v),
                  },
                  f != null || i === !0,
                );
            }
          }
        }
      }
    }
    function P(e, t) {
      return !(
        t == null ||
        o("WAWebReportingTokenUtils").shouldSkipProcessingEditedMsg(e)
      );
    }
    ((l.validateMsgDestination = v),
      (l.validateBclHash = R),
      (l.isFromKnownDevice = L),
      (l.validateBizNode = E),
      (l.renderableMessagesValidation = x),
      (l.validateAndProcessReportingTokenInfo = $));
  },
  98,
);
