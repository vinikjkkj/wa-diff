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
    "asyncToGeneratorRuntime",
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
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = (n = t.preMatChat) != null ? n : t.chat;
          if (!R({ encDestination: e, envelopeDestination: a }))
            return (
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "encDestination: ",
                      ", destination: ",
                      ", type: ",
                      "",
                    ])),
                  e.toString(),
                  a.toString(),
                  t.type,
                )
                .sendLogs(
                  "validateMsgDestination: drop due to the deviceSentMessage meta mismatch.",
                ),
              !1
            );
          var i = t.author;
          if (!o("WAWebUserPrefsMeUser").isMeAccount(i))
            return (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "sender: ",
                      "",
                    ])),
                  i.toString(),
                )
                .sendLogs(
                  "validateMsgDestination: drop due to msg is not sent from your own device.",
                ),
              !1
            );
          var l = yield o("WAWebApiDeviceList").hasDevice(
            i,
            (r = i.device) != null ? r : 0,
          );
          return (
            l ||
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "no record found for sender: ",
                      "",
                    ])),
                  i.toString(),
                )
                .sendLogs("validateMsgDestination:drop due to invalid device"),
            l
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(t) {
      var n = t.encDestination,
        a = t.envelopeDestination;
      if (n.equals(a)) return !0;
      var i = o(
        "WAWebSimpleSignalPNToFBIDMigration",
      ).getDeprecatedPnChatForFbidThread(n);
      if (r("WAWebWid").equals(i, a)) return !0;
      if (
        n.isUser() &&
        r("WAWebWid").equals(o("WAWebApiContact").getAlternateUserWid(n), a)
      ) {
        var l = a.toLogString(),
          s = n.toLogString();
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "validateMsgDestination: match but addressing mode mismatch: envelope: ",
                  ", enc: ",
                  "",
                ])),
              l,
              s,
            )
            .sendLogs("validateMsgDestination-addressing-mode-mismatch"),
          !0
        );
      }
      return !1;
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r =
              t.type ===
              o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                ? t.bclParticipants.map(function (e) {
                    var t;
                    return (t = e.preMatWid) != null ? t : e.wid;
                  })
                : (n = t.directPeerStatusBclParticipants) != null
                  ? n
                  : [],
            a = yield o("WAWebPhashUtils").phashV2(r);
          return a !== e
            ? (o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.device == null ? o("WAJids").DEFAULT_DEVICE_ID : e.device;
          if (t === o("WAJids").DEFAULT_DEVICE_ID) return !0;
          var n = yield o("WAWebApiDeviceList").getDeviceIds([e]),
            r = n[0];
          return (
            r != null &&
            r.devices.some(function (e) {
              return e.id === t;
            })
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n = e.buttonsMessage,
        r = e.highlyStructuredMessage,
        a = e.listMessage,
        i = e.templateMessage;
      if (a && (t == null ? void 0 : t.verifiedListEnvelope) !== !0)
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
          d,
          m =
            (t == null ? void 0 : t.verifiedButtonsEnvelope) === !0 ||
            (t == null ? void 0 : t.nativeFlowName) != null ||
            (((l = n.contextInfo) == null ? void 0 : l.isForwarded) === !0 &&
              (n == null || (d = n.buttons) == null ? void 0 : d.length) === 0);
        return (
          m ||
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "button message is invalid",
                  ])),
              )
              .sendLogs(
                "validateBizNode:drop due to invalid SMAX for buttons message",
              ),
          m
        );
      }
      return (r || i) && (t == null ? void 0 : t.verifiedHsmEnvelope) !== !0
        ? (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "no biz node found in HSM",
                ])),
            )
            .sendLogs(
              "validateBizNode:drop due to missing biz node in invalid SMAX in HSM",
            ),
          !1)
        : !0;
    }
    function D(e) {
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
    function x(e) {
      for (var t of Object.keys(e)) {
        var n = e[t];
        if (n != null && typeof n == "object" && "contextInfo" in n) {
          var r = n.contextInfo;
          if (r != null) return r;
        }
      }
      return null;
    }
    function $(e, t) {
      var n = x(e),
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
    function P(e, t) {
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function N(e) {
      var t = e.bizInfo,
        n = e.info,
        a = e.msgMeta,
        i = e.proto,
        l = e.renderableMsgs;
      if (l.length > 0 && !T(i, t))
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
            g = new Set([
              o("WAWebMsgType").MsgKind.CommentEncrypted,
              o("WAWebMsgType").MsgKind.CommentDecrypted,
              o("WAWebMsgType").MsgKind.RevokedAddon,
              o("WAWebMsgType").MsgKind.ProtocolRevoke,
              o("WAWebMsgType").MsgKind.NewsletterQuestionResponse,
            ]);
          if (!d && !g.has(s.kind))
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_COMMENT_STANZA,
            );
        }
        if (n.edit !== o("WAWebAck").EDIT_ATTR.NONE)
          if (n.edit === o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT) {
            var h =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE;
            if (s.type !== o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE && !h)
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
            var y =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofSubtype === b;
            if (s.subtype !== b && !y)
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
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
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
              var C,
                v = [
                  (C = o("WAWebMsgType")).MSG_TYPE.REACTION,
                  C.MSG_TYPE.REACTION_ENC,
                  C.MSG_TYPE.PROTOCOL,
                  C.MSG_TYPE.KEEP_IN_CHAT,
                ];
              if (!v.includes(s.type))
                throw (
                  r("gkx")("26259") &&
                    o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            E = s.type === o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED;
          if (!L && !E)
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_EVENT_EDIT_STANZA,
            );
        }
        if (o("WAWebHandleMsgMetaUtils").isPollEditMsgMeta(a)) {
          var k =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType ===
                o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED,
            I = s.type === o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED;
          if (!k && !I)
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                .INVALID_POLL_EDIT_STANZA,
            );
        }
        if (r("gkx")("26259")) {
          var x = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(i);
          x !== (a == null ? void 0 : a.type) &&
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Type in stanza [",
                    "] is different from the one derived from protobuf [",
                    "]. Message type: ",
                    "",
                  ])),
                a == null ? void 0 : a.type,
                x,
                s.type,
              )
              .tags("messaging")
              .sendLogs("report-token-stanza-protobuf-type-mismatched", {
                sampling: 0.01,
              });
        }
        (P(a, s), $(i, s), D(s));
      }
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = e.forceDualEncryptedValidation,
            i = a === void 0 ? !1 : a,
            l = e.renderableMsgs;
          if (
            o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()
          ) {
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
                var f =
                    (t = s.protocolMessageKey) == null ? void 0 : t.toString(),
                  g = {
                    msgKey: f != null ? f : s.id.toString(),
                    stanzaId: s.id.id,
                    reportingTag: d,
                    receivedTs: o("WATimeUtils").unixTimeMs(),
                    msgTs:
                      (n = (r = c.stanzaTs) != null ? r : s.t) != null ? n : 0,
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
                      s.kind ===
                        o("WAWebMsgType").MsgKind.MessageEditEncrypted) &&
                    i === !1
                  )
                ) {
                  var h = yield o(
                      "WAWebReportingTokenUtils",
                    ).validateReportingTokenInfo(s, u),
                    y = h.reportingTokenContent,
                    C = h.reportingTokenKey,
                    b = h.res,
                    v = A(s, m)
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
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return !(
        t == null ||
        o("WAWebReportingTokenUtils").shouldSkipProcessingEditedMsg(e) ||
        o("WAWebReportingTokenUtils").shouldSkipProcessingDualEncryptedMsg(e)
      );
    }
    ((l.validateMsgDestination = v),
      (l.validateBclHash = L),
      (l.isFromKnownDevice = k),
      (l.validateBizNode = T),
      (l.renderableMessagesValidation = N),
      (l.validateAndProcessReportingTokenInfo = M));
  },
  98,
);
