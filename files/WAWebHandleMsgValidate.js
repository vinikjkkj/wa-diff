__d(
  "WAWebHandleMsgValidate",
  [
    "JSResourceForInteraction",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebBackendJobs.flow",
    "WAWebBoolFunc",
    "WAWebBotUtils",
    "WAWebBrAddPixKeyOfferReceipt",
    "WAWebBroadcastInvalidChannelsContextSourceMessageDropWamEvent",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMessageTypes",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgTypes",
    "WAWebInstantMsgTypes",
    "WAWebLazyLoadedRetriable",
    "WAWebMaibaWASSMigration",
    "WAWebMessagingGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPhashUtils",
    "WAWebReportingTokenUtils",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserUtils",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "getErrorSafe",
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
      b,
      v,
      S,
      R = "message_edit",
      L = new Set([
        (b = o("WAWebMsgType")).MSG_TYPE.REACTION,
        b.MSG_TYPE.REACTION_ENC,
        b.MSG_TYPE.KEEP_IN_CHAT,
      ]),
      E = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebBrAddPixKeyOfferReceiptLogging",
        )
          .__setRef("WAWebHandleMsgValidate")
          .load();
      }, "BrAddPixKeyOfferReceiptLogging");
    async function k(t, n) {
      var r,
        a,
        i = (r = n.preMatChat) != null ? r : n.chat;
      if (!I({ encDestination: t, envelopeDestination: i }))
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
      if (!o("WAWebUserUtils").isMeAccount(l))
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
    function I(e) {
      var t = e.encDestination,
        n = e.envelopeDestination;
      if (t.equals(n)) return !0;
      var a = o(
        "WAWebSimpleSignalPNToFBIDMigration",
      ).getDeprecatedPnChatForFbidThread(t);
      if (r("WAWebWid").equals(a, n)) return !0;
      var i = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(t);
      if (r("WAWebWid").equals(i, n)) return !0;
      if (
        t.isUser() &&
        r("WAWebWid").equals(o("WAWebApiContact").getAlternateUserWid(t), n)
      ) {
        var l = n.toLogString(),
          s = t.toLogString();
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
    async function T(e, t) {
      var n,
        r =
          t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
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
    async function D(e) {
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
    function x(e, t) {
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
    function $(e) {
      var t,
        n = (t = e.ctwaContext) == null ? void 0 : t.alwaysShowAdAttribution;
      if (
        !o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebUserUtils").isMeAccount(o("WAWebMsgGetters").getSender(e)) &&
        n === !0
      )
        throw new (o("WAWebHandleMsgError").MessageValidationError)(
          "This is a spam message sent to consumer number with 'Message Via Ad' header",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
    }
    function P(e) {
      for (var t of Object.keys(e)) {
        var n = e[t];
        if (n != null && typeof n == "object" && "contextInfo" in n) {
          var r = n.contextInfo;
          if (r != null) return r;
        }
      }
      return null;
    }
    function N(e, t) {
      var n = P(e),
        r = n == null ? void 0 : n.externalAdReply;
      if (
        !o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebMsgGetters").getIsSentByMe(t) &&
        r != null &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
        )
      )
        throw new (o("WAWebHandleMsgError").MessageValidationError)(
          "This is a spam message sent to consumer number with externalAdReply",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
          { sendLogs: 0 },
        );
    }
    function M(e, t) {
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
    function w(e) {
      var t = e.bizInfo,
        n = e.e2eInfo,
        a = e.info,
        i = e.msgMeta,
        l = e.proto,
        s = e.renderableMsgs;
      if (s.length > 0 && !x(l, t))
        throw new (o("WAWebHandleMsgError").BizNodeValidationError)(
          "[messaging] Biz node validation failed due to absence of biz node in SMAX",
        );
      var u = s[0];
      if (u != null && u.type !== o("WAWebMsgType").MSG_TYPE.QUARANTINED) {
        var c = F.find(function (e) {
          return e.isMarkedAs(i) && !e.carries(u);
        });
        if (c != null)
          throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
            c.errorCode,
          );
        if (n != null) {
          var d,
            m =
              (d = o(
                "WAWebDeviceSentMessageProtoUtils",
              ).unwrapDeviceSentMessage(l)) != null
                ? d
                : l,
            p = O.find(function (e) {
              return B(e, m, n.encMediaType);
            });
          if (p != null)
            throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
              p.errorCode,
            );
        }
        if (a.edit !== o("WAWebAck").EDIT_ATTR.NONE)
          if (a.edit === o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT) {
            var _ =
              u.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              u.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE;
            if (u.type !== o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE && !_)
              throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                  .INVALID_PIN_IN_CHAT_STANZA,
              );
          } else if (a.edit === o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT) {
            if (
              !(
                o("WAWebHandleMsgMetaUtils").isEventEditMsgMeta(i) ||
                o("WAWebHandleMsgMetaUtils").isPollEditMsgMeta(i) ||
                (o("WAWebHandleMsgMetaUtils").isMediaMsgMeta(i) &&
                  o("WAWebBotUtils").isMetaAiBot(a.author))
              )
            ) {
              var f =
                u.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                u.futureproofSubtype === R;
              if (u.subtype !== R && !f)
                throw new (o(
                  "WAWebHandleMsgError",
                ).MessageProtobufMismatchError)(
                  o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                    .INVALID_EDIT_STANZA,
                );
            }
          } else {
            if (a.edit === o("WAWebAck").EDIT_ATTR.NEWSLETTER_MSG_EDIT)
              throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                  .INVALID_NEWSLETTER_EDIT_STANZA,
              );
            a.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE ||
            a.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE
              ? q(u, a.edit)
              : o("WALogger")
                  .WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "RenderableMessagesValidation: Unvalidated edit attribute ",
                        "",
                      ])),
                    a.edit,
                  )
                  .sendLogs("unvalidated-edit-attribute");
          }
        if (r("gkx")("26259")) {
          var y = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(l);
          y !== (i == null ? void 0 : i.type) &&
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Type in stanza [",
                    "] is different from the one derived from protobuf [",
                    "]. Message type: ",
                    "",
                  ])),
                i == null ? void 0 : i.type,
                y,
                u.type,
              )
              .tags("messaging")
              .sendLogs("report-token-stanza-protobuf-type-mismatched", {
                sampling: 0.01,
              });
        }
        (M(i, u), N(l, u), $(u));
      }
    }
    var A = new Set([
        b.MsgKind.CommentEncrypted,
        b.MsgKind.CommentDecrypted,
        b.MsgKind.RevokedAddon,
        b.MsgKind.ProtocolRevoke,
        b.MsgKind.NewsletterQuestionResponse,
      ]),
      F = [
        {
          isMarkedAs: (v = o("WAWebHandleMsgMetaUtils")).isReactionMsgMeta,
          carries: function (t) {
            return (
              t.type === o("WAWebMsgType").MSG_TYPE.REACTION ||
              t.type === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
            );
          },
          errorCode: (S = o("WAWebHandleMsgError"))
            .MessageProtobufMismatchErrorCode.INVALID_REACTION_STANZA,
        },
        {
          isMarkedAs: v.isPollVoteMsgMeta,
          carries: function (t) {
            return (
              W(t, o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) ||
              (t.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE &&
                t.subtype === "poll_vote")
            );
          },
          errorCode:
            S.MessageProtobufMismatchErrorCode.INVALID_POLL_UPDATE_STANZA,
        },
        {
          isMarkedAs: v.isCommentMsgMeta,
          carries: function (t) {
            return W(t, o("WAWebMsgType").MSG_TYPE.COMMENT) || A.has(t.kind);
          },
          errorCode: S.MessageProtobufMismatchErrorCode.INVALID_COMMENT_STANZA,
        },
        {
          isMarkedAs: v.isEventResponseMsgMeta,
          carries: function (t) {
            return (
              W(t, o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE) ||
              t.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE
            );
          },
          errorCode:
            S.MessageProtobufMismatchErrorCode.INVALID_EVENT_RESPONSE_STANZA,
        },
        {
          isMarkedAs: v.isEventEditMsgMeta,
          carries: function (t) {
            return (
              W(t, o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED) ||
              t.type === o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED
            );
          },
          errorCode:
            S.MessageProtobufMismatchErrorCode.INVALID_EVENT_EDIT_STANZA,
        },
        {
          isMarkedAs: v.isPollEditMsgMeta,
          carries: function (t) {
            return (
              W(t, o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED) ||
              t.type === o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED
            );
          },
          errorCode:
            S.MessageProtobufMismatchErrorCode.INVALID_POLL_EDIT_STANZA,
        },
        {
          isMarkedAs: v.isMemberTagMsgMeta,
          carries: function (t) {
            return (
              (W(t, o("WAWebMsgType").MSG_TYPE.PROTOCOL) &&
                t.futureproofSubtype === "member_label") ||
              (t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                t.subtype === "member_label")
            );
          },
          errorCode:
            S.MessageProtobufMismatchErrorCode.INVALID_MEMBER_TAG_STANZA,
        },
      ],
      O = [
        {
          encMediaType: o("WAWebBackendJobs.flow").EncMediaType.InstantImage,
          carries: function (t) {
            return t.instantImageMessage != null;
          },
          isAllowedBody: function (t) {
            var e;
            return (
              ((e = t.instantImageMessage) == null ? void 0 : e.viewOnce) !== !0
            );
          },
          isReceiverEnabled: function () {
            return o("WAWebABProps").getABPropConfigValue(
              "instants_receiver_enabled",
            );
          },
          errorCode:
            S.MessageProtobufMismatchErrorCode.INVALID_INSTANT_IMAGE_STANZA,
        },
        {
          encMediaType: o("WAWebBackendJobs.flow").EncMediaType.InstantVideo,
          carries: function (t) {
            return t.instantVideoMessage != null;
          },
          isAllowedBody: o("WAWebBoolFunc").returnTrue,
          isReceiverEnabled: function () {
            return o("WAWebInstantMsgTypes").isInstantTypeReceiverEnabled(
              o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
            );
          },
          errorCode:
            S.MessageProtobufMismatchErrorCode.INVALID_INSTANT_VIDEO_STANZA,
        },
      ];
    function B(e, t, n) {
      var r = n === e.encMediaType,
        o = e.carries(t);
      return (!r && !o) || !e.isReceiverEnabled()
        ? !1
        : r !== o || !e.isAllowedBody(t);
    }
    function W(e, t) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && e.futureproofType === t
      );
    }
    function q(e, t) {
      var n =
        t === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
          ? "admin_revoke"
          : "sender_revoke";
      if (
        !(
          e.kind === o("WAWebMsgType").MsgKind.ProtocolRevoke && e.subtype === n
        ) &&
        !(t === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE && U(e))
      )
        throw (
          r("gkx")("26259") &&
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "RenderableMessagesValidation: msg.type: ",
                    "",
                  ])),
                e.type,
              )
              .sendLogs(
                t === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
                  ? "invalid-edit-attribute-admin-revoke"
                  : "invalid-edit-attribute-sender-revoke",
              ),
          new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
            o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
              .INVALID_EDIT_STANZA,
          )
        );
    }
    function U(e) {
      return (
        L.has(e.type) ||
        (e.kind === o("WAWebMsgType").MsgKind.Protocol &&
          e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .ScheduledMessageUnschedule)
      );
    }
    function V(e) {
      var t = e.info,
        n = e.isFirstReceipt,
        a = e.isQuarantined,
        i = e.proto,
        l = e.renderableMsgs;
      return !n ||
        a ||
        l.some(function (e) {
          return e.id.fromMe;
        }) ||
        !o("WAWebBrAddPixKeyOfferReceipt").isAddPixKeyOfferForThisAccount(i)
        ? Promise.resolve()
        : E()
            .then(function (e) {
              return e.logAddPixKeyOfferReceived({
                msg: l[0],
                senders: [t.author, t.senderPn, t.senderLid],
              });
            })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[add-pix-key] receipt row not logged",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("br-add-pix-key-offer-receipt-failed");
            });
    }
    function H(e) {
      var t = e.info,
        n = e.proto,
        r = e.renderableMsgs;
      if (
        o("WAWebBrAddPixKeyOfferReceipt").shouldDropAddPixKeyOffer({
          fromMe: r.some(function (e) {
            return e.id.fromMe;
          }),
          proto: n,
          senders: [t.author, t.senderPn, t.senderLid],
        })
      )
        throw new (o("WAWebHandleMsgError").MessageValidationError)(
          "offer_payment_account from a sender no Pix key partner claims",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
          { sendLogs: 0 },
        );
    }
    async function G(e) {
      var t,
        n,
        r,
        a = e.forceDualEncryptedValidation,
        i = a === void 0 ? !1 : a,
        l = e.renderableMsgs,
        s = e.reparsing,
        u = s === void 0 ? !1 : s;
      if (o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()) {
        var c = l[0];
        if (
          !(
            c == null ||
            c.plainProtobufBytes == null ||
            c.reportingTokenInfo == null
          )
        ) {
          var d = c.plainProtobufBytes,
            m = c.reportingTokenInfo,
            p = m.reportingTag,
            _ = m.reportingToken,
            f = m.version;
          if (p != null) {
            var g = (t = c.protocolMessageKey) == null ? void 0 : t.toString(),
              h = {
                msgKey: z(c),
                stanzaId: c.id.id,
                reportingTag: p,
                receivedTs: o("WATimeUtils").unixTimeMs(),
                msgTs: (n = (r = m.stanzaTs) != null ? r : c.t) != null ? n : 0,
              };
            if (j(c)) {
              if (u) return;
              o("WAWebGetMessageCache")
                .getMessageCache()
                .addAdditionalInfo(
                  {
                    type: o("WAWebHandleMessageTypes").MsgAdditionalInfoType
                      .ReportingInfo,
                    data: babelHelpers.extends({}, h),
                  },
                  g != null,
                );
              return;
            }
            if (
              !(
                (c.kind === o("WAWebMsgType").MsgKind.CommentEncrypted ||
                  c.kind === o("WAWebMsgType").MsgKind.EventEditEncrypted ||
                  c.kind === o("WAWebMsgType").MsgKind.MessageEditEncrypted ||
                  c.kind === o("WAWebMsgType").MsgKind.PollEditEncrypted ||
                  c.kind ===
                    o("WAWebMsgType").MsgKind.PollAddOptionEncrypted) &&
                i === !1
              )
            ) {
              var y = await o(
                  "WAWebReportingTokenUtils",
                ).validateReportingTokenInfo(c, d),
                C = y.reportingTokenContent,
                b = y.reportingTokenKey,
                v = y.res,
                S =
                  _ != null
                    ? babelHelpers.extends(
                        {
                          reportingToken:
                            _ == null
                              ? void 0
                              : _.slice(
                                  0,
                                  v
                                    ? o("WAWebReportingTokenUtils")
                                        .REPORTING_TOKEN_STORAGE_SIZE
                                    : o("WAWebReportingTokenUtils")
                                        .REPORTING_TOKEN_INVALID_STORAGE_SIZE,
                                ),
                          reportingTokenContentOpaqueData: C,
                          version: f,
                        },
                        b != null && { reportingTokenKey: b },
                      )
                    : null;
              o("WAWebGetMessageCache")
                .getMessageCache()
                .addAdditionalInfo(
                  {
                    type: o("WAWebHandleMessageTypes").MsgAdditionalInfoType
                      .ReportingInfo,
                    data: babelHelpers.extends({}, h, S),
                  },
                  g != null || i === !0,
                );
            }
          }
        }
      }
    }
    function z(e) {
      var t, n;
      return e.kind === o("WAWebMsgType").MsgKind.PollAddOptionDecrypted
        ? e.id.toString()
        : (t = (n = e.protocolMessageKey) == null ? void 0 : n.toString()) !=
            null
          ? t
          : e.id.toString();
    }
    function j(e) {
      return (
        e.kind === o("WAWebMsgType").MsgKind.Unknown ||
        e.kind === o("WAWebMsgType").MsgKind.AssociatedUnknown
      );
    }
    ((l.validateMsgDestination = k),
      (l.validateBclHash = T),
      (l.isFromKnownDevice = D),
      (l.validateBizNode = x),
      (l.renderableMessagesValidation = w),
      (l.logAddPixKeyOfferReceipt = V),
      (l.validateAddPixKeyOfferSender = H),
      (l.validateAndProcessReportingTokenInfo = G));
  },
  98,
);
