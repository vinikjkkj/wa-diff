__d(
  "WAWebHandleMsgValidate",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebBotUtils",
    "WAWebBrAddPixKeyOfferReceipt",
    "WAWebBroadcastInvalidChannelsContextSourceMessageDropWamEvent",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebE2EProtoUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMessageTypes",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgMetaUtils",
    "WAWebHandleMsgTypes",
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
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "asyncToGeneratorRuntime",
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
      R,
      L = "message_edit",
      E = new Set([
        (v = o("WAWebMsgType")).MSG_TYPE.REACTION,
        v.MSG_TYPE.REACTION_ENC,
        v.MSG_TYPE.KEEP_IN_CHAT,
      ]),
      k = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebBrAddPixKeyOfferReceiptLogging",
          )
            .__setRef("WAWebHandleMsgValidate")
            .load();
        }),
        "BrAddPixKeyOfferReceiptLogging",
      );
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = (n = t.preMatChat) != null ? n : t.chat;
          if (!D({ encDestination: e, envelopeDestination: a }))
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
        T.apply(this, arguments)
      );
    }
    function D(t) {
      var n = t.encDestination,
        a = t.envelopeDestination;
      if (n.equals(a)) return !0;
      var i = o(
        "WAWebSimpleSignalPNToFBIDMigration",
      ).getDeprecatedPnChatForFbidThread(n);
      if (r("WAWebWid").equals(i, a)) return !0;
      var l = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(n);
      if (r("WAWebWid").equals(l, a)) return !0;
      if (
        n.isUser() &&
        r("WAWebWid").equals(o("WAWebApiContact").getAlternateUserWid(n), a)
      ) {
        var s = a.toLogString(),
          u = n.toLogString();
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "validateMsgDestination: match but addressing mode mismatch: envelope: ",
                  ", enc: ",
                  "",
                ])),
              s,
              u,
            )
            .sendLogs("validateMsgDestination-addressing-mode-mismatch"),
          !0
        );
      }
      return !1;
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
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
    function w(e) {
      var t,
        n = (t = e.ctwaContext) == null ? void 0 : t.alwaysShowAdAttribution;
      if (
        !o("WAWebMobilePlatforms").isSMB() &&
        !o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebMsgGetters").getSender(e),
        ) &&
        n === !0
      )
        throw new (o("WAWebHandleMsgError").MessageValidationError)(
          "This is a spam message sent to consumer number with 'Message Via Ad' header",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
    }
    function A(e) {
      for (var t of Object.keys(e)) {
        var n = e[t];
        if (n != null && typeof n == "object" && "contextInfo" in n) {
          var r = n.contextInfo;
          if (r != null) return r;
        }
      }
      return null;
    }
    function F(e, t) {
      var n = A(e),
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
    function O(e, t) {
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
    function B(e) {
      var t = e.bizInfo,
        n = e.info,
        a = e.msgMeta,
        i = e.proto,
        l = e.renderableMsgs;
      if (l.length > 0 && !M(i, t))
        throw new (o("WAWebHandleMsgError").BizNodeValidationError)(
          "[messaging] Biz node validation failed due to absence of biz node in SMAX",
        );
      var s = l[0];
      if (s != null && s.type !== o("WAWebMsgType").MSG_TYPE.QUARANTINED) {
        var u = q.find(function (e) {
          return e.isMarkedAs(a) && !e.carries(s);
        });
        if (u != null)
          throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
            u.errorCode,
          );
        if (n.edit !== o("WAWebAck").EDIT_ATTR.NONE)
          if (n.edit === o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT) {
            var c =
              s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
              s.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE;
            if (s.type !== o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE && !c)
              throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                  .INVALID_PIN_IN_CHAT_STANZA,
              );
          } else if (n.edit === o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT) {
            if (
              !(
                o("WAWebHandleMsgMetaUtils").isEventEditMsgMeta(a) ||
                o("WAWebHandleMsgMetaUtils").isPollEditMsgMeta(a) ||
                (o("WAWebHandleMsgMetaUtils").isMediaMsgMeta(a) &&
                  o("WAWebBotUtils").isMetaAiBot(n.author))
              )
            ) {
              var d =
                s.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
                s.futureproofSubtype === L;
              if (s.subtype !== L && !d)
                throw new (o(
                  "WAWebHandleMsgError",
                ).MessageProtobufMismatchError)(
                  o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                    .INVALID_EDIT_STANZA,
                );
            }
          } else {
            if (n.edit === o("WAWebAck").EDIT_ATTR.NEWSLETTER_MSG_EDIT)
              throw new (o("WAWebHandleMsgError").MessageProtobufMismatchError)(
                o("WAWebHandleMsgError").MessageProtobufMismatchErrorCode
                  .INVALID_NEWSLETTER_EDIT_STANZA,
              );
            n.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE ||
            n.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE
              ? V(s, n.edit)
              : o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "RenderableMessagesValidation: Unvalidated edit attribute ",
                        "",
                      ])),
                    n.edit,
                  )
                  .sendLogs("unvalidated-edit-attribute");
          }
        if (r("gkx")("26259")) {
          var _ = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(i);
          _ !== (a == null ? void 0 : a.type) &&
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Type in stanza [",
                    "] is different from the one derived from protobuf [",
                    "]. Message type: ",
                    "",
                  ])),
                a == null ? void 0 : a.type,
                _,
                s.type,
              )
              .tags("messaging")
              .sendLogs("report-token-stanza-protobuf-type-mismatched", {
                sampling: 0.01,
              });
        }
        (O(a, s), F(i, s), w(s));
      }
    }
    var W = new Set([
        v.MsgKind.CommentEncrypted,
        v.MsgKind.CommentDecrypted,
        v.MsgKind.RevokedAddon,
        v.MsgKind.ProtocolRevoke,
        v.MsgKind.NewsletterQuestionResponse,
      ]),
      q = [
        {
          isMarkedAs: (S = o("WAWebHandleMsgMetaUtils")).isReactionMsgMeta,
          carries: function (t) {
            return (
              t.type === o("WAWebMsgType").MSG_TYPE.REACTION ||
              t.type === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
            );
          },
          errorCode: (R = o("WAWebHandleMsgError"))
            .MessageProtobufMismatchErrorCode.INVALID_REACTION_STANZA,
        },
        {
          isMarkedAs: S.isPollVoteMsgMeta,
          carries: function (t) {
            return (
              U(t, o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) ||
              (t.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE &&
                t.subtype === "poll_vote")
            );
          },
          errorCode:
            R.MessageProtobufMismatchErrorCode.INVALID_POLL_UPDATE_STANZA,
        },
        {
          isMarkedAs: S.isCommentMsgMeta,
          carries: function (t) {
            return U(t, o("WAWebMsgType").MSG_TYPE.COMMENT) || W.has(t.kind);
          },
          errorCode: R.MessageProtobufMismatchErrorCode.INVALID_COMMENT_STANZA,
        },
        {
          isMarkedAs: S.isEventResponseMsgMeta,
          carries: function (t) {
            return (
              U(t, o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE) ||
              t.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE
            );
          },
          errorCode:
            R.MessageProtobufMismatchErrorCode.INVALID_EVENT_RESPONSE_STANZA,
        },
        {
          isMarkedAs: S.isEventEditMsgMeta,
          carries: function (t) {
            return (
              U(t, o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED) ||
              t.type === o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED
            );
          },
          errorCode:
            R.MessageProtobufMismatchErrorCode.INVALID_EVENT_EDIT_STANZA,
        },
        {
          isMarkedAs: S.isPollEditMsgMeta,
          carries: function (t) {
            return (
              U(t, o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED) ||
              t.type === o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED
            );
          },
          errorCode:
            R.MessageProtobufMismatchErrorCode.INVALID_POLL_EDIT_STANZA,
        },
        {
          isMarkedAs: S.isMemberTagMsgMeta,
          carries: function (t) {
            return (
              (U(t, o("WAWebMsgType").MSG_TYPE.PROTOCOL) &&
                t.futureproofSubtype === "member_label") ||
              (t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                t.subtype === "member_label")
            );
          },
          errorCode:
            R.MessageProtobufMismatchErrorCode.INVALID_MEMBER_TAG_STANZA,
        },
      ];
    function U(e, t) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && e.futureproofType === t
      );
    }
    function V(e, t) {
      var n =
        t === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
          ? "admin_revoke"
          : "sender_revoke";
      if (
        !(
          e.kind === o("WAWebMsgType").MsgKind.ProtocolRevoke && e.subtype === n
        ) &&
        !(t === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE && H(e))
      )
        throw (
          r("gkx")("26259") &&
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    function H(e) {
      return (
        E.has(e.type) ||
        (e.kind === o("WAWebMsgType").MsgKind.Protocol &&
          e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .ScheduledMessageUnschedule)
      );
    }
    function G(e) {
      var t = e.info,
        a = e.isFirstReceipt,
        i = e.isQuarantined,
        l = e.proto,
        s = e.renderableMsgs;
      return !a ||
        i ||
        s.some(function (e) {
          return e.id.fromMe;
        }) ||
        !o("WAWebBrAddPixKeyOfferReceipt").isAddPixKeyOfferForThisAccount(l)
        ? (b || (b = n("Promise"))).resolve()
        : k()
            .then(function (e) {
              return e.logAddPixKeyOfferReceived({
                msg: s[0],
                senders: [t.author, t.senderPn, t.senderLid],
              });
            })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[add-pix-key] receipt row not logged",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("br-add-pix-key-offer-receipt-failed");
            });
    }
    function z(e) {
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
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = e.forceDualEncryptedValidation,
            i = a === void 0 ? !1 : a,
            l = e.renderableMsgs,
            s = e.reparsing,
            u = s === void 0 ? !1 : s;
          if (
            o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()
          ) {
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
                var g =
                    (t = c.protocolMessageKey) == null ? void 0 : t.toString(),
                  h = {
                    msgKey: Q(c),
                    stanzaId: c.id.id,
                    reportingTag: p,
                    receivedTs: o("WATimeUtils").unixTimeMs(),
                    msgTs:
                      (n = (r = m.stanzaTs) != null ? r : c.t) != null ? n : 0,
                  };
                if (X(c)) {
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
                      c.kind ===
                        o("WAWebMsgType").MsgKind.MessageEditEncrypted ||
                      c.kind === o("WAWebMsgType").MsgKind.PollEditEncrypted ||
                      c.kind ===
                        o("WAWebMsgType").MsgKind.PollAddOptionEncrypted) &&
                    i === !1
                  )
                ) {
                  var y = yield o(
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
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      var t, n;
      return e.kind === o("WAWebMsgType").MsgKind.PollAddOptionDecrypted
        ? e.id.toString()
        : (t = (n = e.protocolMessageKey) == null ? void 0 : n.toString()) !=
            null
          ? t
          : e.id.toString();
    }
    function X(e) {
      return (
        e.kind === o("WAWebMsgType").MsgKind.Unknown ||
        e.kind === o("WAWebMsgType").MsgKind.AssociatedUnknown
      );
    }
    ((l.validateMsgDestination = I),
      (l.validateBclHash = x),
      (l.isFromKnownDevice = P),
      (l.validateBizNode = M),
      (l.renderableMessagesValidation = B),
      (l.logAddPixKeyOfferReceipt = G),
      (l.validateAddPixKeyOfferSender = z),
      (l.validateAndProcessReportingTokenInfo = j));
  },
  98,
);
