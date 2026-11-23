__d(
  "WAWebSendMsgRecordAction",
  [
    "WAErrors",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebAddonSendProcess",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebBlocklistCollection",
    "WAWebBotGating",
    "WAWebBotTypingIndicatorAfterSend",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactBlockedErrorAction",
    "WAWebContactCollection",
    "WAWebDBProcessMessage",
    "WAWebDBUpdateMessageTable",
    "WAWebErrorType",
    "WAWebExternalCtxConfig",
    "WAWebExternalEntryPointPrefs",
    "WAWebFindChatAction",
    "WAWebGroupAgentNonInitiatorNux",
    "WAWebGroupMetadataCollection",
    "WAWebHandleMsgError",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIsUserInitiatedOutgoingMsg",
    "WAWebLimitSharingGatingUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageStoreService",
    "WAWebMetaAiOpenGroupNux",
    "WAWebMsgCollection",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMsgUtilsBridge",
    "WAWebNoop",
    "WAWebOutgoingMessageTone",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionsBEUtils",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebSendNotSpamAction",
    "WAWebSilentPaymentMsg",
    "WAWebSilentProtocolMsg",
    "WAWebSingleEmojiDailyUtils",
    "WAWebThreadMsgUtils",
    "WAWebUpdateUnreadChatAction",
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsTypes",
    "WAWebUserUtils",
    "WAWebUtmBizUtils",
    "WAWebVoipInCallMessageSendLogger",
    "WAWebWamEnumMessageCappingActionType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamMsgUtils",
    "WAWebWebcMessageSendWamEvent",
    "WAWebWid",
    "getErrorSafe",
    "nullthrows",
    "requireDeferred",
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
      h = r("requireDeferred")("WAWebSendMsgJob").__setRef(
        "WAWebSendMsgRecordAction",
      ),
      y = new Map([
        ["AggregateError", "AggregateError"],
        ["Error", "Error"],
        ["EvalError", "EvalError"],
        ["RangeError", "RangeError"],
        ["ReferenceError", "ReferenceError"],
        ["SyntaxError", "SyntaxError"],
        ["TypeError", "TypeError"],
        ["URIError", "URIError"],
      ]);
    async function C(t) {
      var n;
      o("WALogger").LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendMsgRecord"])),
      );
      var r = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
        t,
        o("WAWebMessageSendReporterFrontendDeps")
          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
      );
      r.sendReporter =
        (n = r.sendReporter) != null ? n : r.createSendReporter();
      var a = t.id.remote,
        i = await o("WAWebFindChatAction").findExistingChat(a, "sendMsgRecord");
      if (i.contact.isEnterprise && !o("WAWebMsgGetters").getIsGroupMsg(t)) {
        var l = o("WAWebUpdateUtmAction").getUtmForChat(a);
        l != null && o("WAWebUtmBizUtils").isUtmValid(i, l) && (t.utm = l);
      }
      return ((t.isNewMsg = !0), T({ type: "message", data: t }, i, r));
    }
    async function b(e) {
      var t = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
          e,
          o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        ),
        n = await o("WAWebFindChatAction").findExistingChat(
          e.id.remote,
          "sendMsgRecord",
        );
      return T({ type: "addon", data: e }, n, t);
    }
    var v = new Set([
        (g = o("WAWebMsgType")).MSG_TYPE.POLL_UPDATE,
        g.MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
        g.MSG_TYPE.POLL_EDIT_ENCRYPTED,
        g.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
        g.MSG_TYPE.EVENT_RESPONSE,
      ]),
      S = new Set([g.MSG_TYPE.POLL_UPDATE, g.MSG_TYPE.EVENT_RESPONSE]);
    function R(e, t) {
      return r("WAWebWid").isGroup(t)
        ? e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? k(e.data)
          : I(e.data)
        : !1;
    }
    function L(e) {
      return e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
        ? e.data.subtype !==
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit
        : E(e.data);
    }
    function E(e) {
      return e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
        ? e.selectedOptionLocalIds.length > 0
        : S.has(e.type);
    }
    function k(e) {
      return e.forwardedFromWeb === !0
        ? !1
        : e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit ||
            (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT);
    }
    function I(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.REACTION
        ? e.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
        : e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
          ? e.selectedOptionLocalIds.length > 0
          : e.kind === o("WAWebMsgType").MsgKind.PinInChat
            ? e.pinMessageType ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .PIN_FOR_ALL
            : v.has(e.type);
    }
    async function T(e, t, n) {
      var a = e.data,
        i = r("nullthrows")(a.to),
        l = a.id,
        f = l.remote;
      r("WAWebWid").isGroup(f) &&
        (await r("WAWebGroupMetadataCollection").find(f));
      var g =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          ["sender_revoke", "admin_revoke"].includes(a.subtype),
        h = x(a),
        C =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          a.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSetting,
        b =
          o("WAWebMsgGetters").getIsReaction(a) &&
          a.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
      if (
        !o("WAWebMsgGetters").getIsGroupMsg(a) &&
        !g &&
        !b &&
        o("WAWebBlocklistCollection").BlocklistCollection.get(i)
      )
        return Promise.reject(
          new (r("WAWebContactBlockedErrorAction"))(
            "Contact is blocked",
            o("WAWebContactCollection").ContactCollection.assertGet(i),
          ),
        );
      if (
        o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t) &&
        a.subtype !== "sender_revoke"
      ) {
        var v;
        if (
          (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "model:msg:createRecord blocked send in ACP2-restricted chat: ",
                "",
              ])),
            a.id.toString(),
          ),
          (v = n.sendReporter) == null ||
            v.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_SEND_PRECONDITION_FAILED,
              isTerminal: !0,
              qplFailReason: "acp2_send_blocked",
            }),
          (n.sendReporter = null),
          e.type === "message")
        ) {
          var S = {
            isSendFailure: !0,
            ack: o("WAWebAck").ACK.FAILED,
            errorCode: o("WAWebErrorType").SendFailureErrorCode.Acp2Restricted,
          };
          ((o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).updateMessageTable
            : o("WAWebDBUpdateMessageTable").updateMessageTable)(l, S),
            e.data.set(S),
            o(
              "WAWebAddOnsUpdateSendStatesAction",
            ).updateAddOnSendStatesForMsgAction(e.data, S));
        } else await o("WAWebAddonSendProcess").markAddonSendFailed(e.data);
        return {
          messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
            .ERROR_UNKNOWN,
          failureReason: "acp2_send_blocked",
        };
      }
      var E;
      (g ||
        (E = new (o("WAWebWebcMessageSendWamEvent").WebcMessageSendWamEvent)({
          messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
          messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
          messageIsForward: !!a.isForwarded,
        })),
        h ||
          (D(t, e),
          o("WAWebUpdateUnreadChatAction").sendSeen({
            chat: t,
            threadId: o("WAWebBotGating").isAiChatThreadsEnabled()
              ? o("WAWebThreadMsgUtils").getMsgAiThread(a)
              : void 0,
          })),
        R(e, f) &&
          (L(e)
            ? o("WAWebMetaAiOpenGroupNux").maybeShowGroupAgentNuxes(t)
            : o(
                "WAWebGroupAgentNonInitiatorNux",
              ).maybeShowGroupAgentNonInitiatorNux(t)));
      var k;
      if (
        r("WAWebWid").isGroup(f) &&
        a.messageSecret == null &&
        o("WAWebSendMsgChatActionUtils").hasGroupAgentParticipant(t)
      ) {
        var I = self.crypto.getRandomValues(new Uint8Array(32));
        e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? (e.data.set({ messageSecret: I }),
            await o("WAWebDBProcessMessage").updateExistingMessages(
              [o("WAWebMsgDataFromModel").msgDataFromMsgModel(e.data)],
              f,
            ))
          : (k = babelHelpers.extends({}, e.data, { messageSecret: I }));
      }
      return (
        e.type !== "addon" &&
          a.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
          !h &&
          !g &&
          o("WAWebMsgCollection").MsgCollection.trigger("new_msg_sent"),
        Promise.resolve()
          .then(function () {
            return e.type === "message"
              ? $(e.data, n)
              : o("WAWebAddonSendProcess").sendAddonProcess(
                  k != null ? k : e.data,
                  n,
                );
          })
          .then(async function (n) {
            var r =
              l.fromMe && o("WAWebUserUtils").isMePrimary(f)
                ? o("WAWebAck").ACK.READ
                : o("WAWebAck").ACK.SENT;
            return (
              e.type === "message" &&
                (e.data.updateAck(r),
                o(
                  "WAWebAddOnsUpdateSendStatesAction",
                ).maybeUpdateAddOnAckForMsgAction(e.data, r)),
              o(
                "WAWebBotTypingIndicatorAfterSend",
              ).maybeGenBotTypingIndicatorMessage(t, a),
              E && (E.markMessageSendT(), E.commit()),
              g ||
                o(
                  "WAWebSingleEmojiDailyUtils",
                ).maybeIncrementSingleEmojiDailyStatsCount(a),
              a.utm != null &&
                o("WAWebUpdateUtmAction").clearUtmAfterMessageSent(f),
              h ||
                o(
                  "WAWebVoipInCallMessageSendLogger",
                ).logInCallMessageSendIfNeeded(t),
              await o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(
                a,
              ),
              [
                o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                o("WAWebMsgType").MSG_TYPE.REACTION,
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
              ].includes(a.type) || (t.lastReceivedKey = l),
              !g &&
                !h &&
                o("WAWebOutgoingMessageTone").playOutgoingMessageTone(),
              o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
                o("WAWebExternalEntryPointPrefs").deleteExternalEntryPoint(f),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                t: n.t,
                count: n.count,
              }
            );
          })
          .then(function (t) {
            if (
              t.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK &&
              e.type === "message"
            ) {
              var n = e.data.afterReadDuration;
              if (
                n != null &&
                n > 0 &&
                o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                !C
              ) {
                var r = o("WATimeUtils").unixTime() + n;
                ((o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageStoreService").MessageStoreService,
                    ).updateMessageTable
                  : o("WAWebDBUpdateMessageTable").updateMessageTable)(l, {
                  expiredTimestamp: r,
                }),
                  e.data.set({ expiredTimestamp: r }));
              }
            }
            return t;
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                var t;
                return (
                  e.status !== 408 &&
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Phone responded ",
                            "",
                          ])),
                        e.status,
                      )
                      .sendLogs("send-not-200"),
                  (t = n.sendReporter) == null ||
                    t.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
                      isTerminal: !1,
                      qplFailReason: "server_status_code_error",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_NETWORK,
                    failureReason: "server_status_code_error",
                  }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAErrors").BufferTooLargeError,
              function () {
                var e;
                return (
                  (e = n.sendReporter) == null ||
                    e.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_PAYLOAD_TOO_BIG,
                      isTerminal: !0,
                      qplFailReason: "buffer_too_large",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                    failureReason: "buffer_too_large",
                  }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebHandleMsgError").MessageValidationError,
              function () {
                var e;
                return (
                  (e = n.sendReporter) == null ||
                    e.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_PROTOBUF,
                      isTerminal: !0,
                      qplFailReason: "message_validation_error",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                    failureReason: "message_validation_error",
                  }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebHandleMsgError").AeaSendBlockedError,
              function () {
                var e;
                return (
                  (e = n.sendReporter) == null ||
                    e.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE
                        .AEA_SEND_RECONCILATION_FAILURE,
                      isTerminal: !0,
                      qplFailReason: "aea_send_reconciliation_failure",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                    failureReason: "aea_send_reconciliation_failure",
                  }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebHandleMsgError").MessageSentAckError,
              function (e) {
                var t;
                return (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "model:msg:createRecord dropped msg: ",
                        "",
                      ])),
                    a.id.toString(),
                  ),
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("send-msg-server-nack-error"),
                  (t = n.sendReporter) == null ||
                    t.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                      isTerminal: !0,
                      qplFailReason: "message_sent_ack_error",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                    failureReason: "message_sent_ack_error",
                    ackErrorCode: e.ackErrorCode,
                  }
                );
              },
            ),
          )
          .catch(function (t) {
            var i,
              l,
              s = r("getErrorSafe")(t);
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord dropped msg: ",
                    "",
                  ])),
                a.id.toString(),
              ),
              e.type === "message"
                ? o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(s)
                    .tags("messaging")
                    .sendLogs("send-msg-error")
                : o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(s)
                    .tags("messaging", "addons")
                    .sendLogs("send-addon-error: " + a.type),
              (i = n.sendReporter) == null ||
                i.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !0,
                  qplFailReason: "unknown_error",
                }),
              (n.sendReporter = null),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
                failureReason: "unknown_error",
                failureErrorName:
                  (l = y.get(s.name)) != null ? l : "other_error",
              }
            );
          })
      );
    }
    function D(e, t) {
      !e.isTrusted() &&
        (t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon ||
          o("WAWebIsUserInitiatedOutgoingMsg").isUserInitiatedOutgoingMsg(
            t.data,
          )) &&
        r("WAWebSendNotSpamAction")(e).catch(r("WAWebNoop"));
    }
    function x(e) {
      return (
        o("WAWebSilentProtocolMsg").isSilentProtocolMsg(e) ||
        o("WAWebSilentPaymentMsg").isSilentPaymentMsg(e)
      );
    }
    async function $(e, t) {
      var n;
      e.isForwarded &&
        (n = o("WAWebMsgUtilsBridge").createMessageForwardMetric(e));
      try {
        var r = await h.load(),
          a = r.encryptAndSendMsg,
          i = await a(
            {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
              data: e,
            },
            t,
          );
        if (
          (n && n.then(o("WAWebMsgUtilsBridge").logMessageMetric),
          i.error != null)
        )
          throw new (o("WAWebHandleMsgError").MessageSentAckError)(i.error);
        return { t: parseInt(String(i.t), 10), count: i.count };
      } catch (t) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "sendMsgRecord: send failure, msg: ",
                "",
              ])),
            e.id.toString(),
          )
          .tags("messaging");
        var l = { isSendFailure: !0 };
        throw (
          t instanceof o("WAWebHandleMsgError").AeaSendBlockedError
            ? (l = babelHelpers.extends({}, l, {
                ack: o("WAWebAck").ACK.FAILED,
              }))
            : t instanceof o("WAWebHandleMsgError").MessageSentAckError &&
              ((l = babelHelpers.extends({}, l, {
                ack: o("WAWebAck").ACK.FAILED,
              })),
              t.ackErrorCode ===
                o("WAWebHandleMsgError").MessageSentAckErrorCode
                  .NewChatMessagesCapped &&
                ((l = babelHelpers.extends({}, l, {
                  errorCode:
                    o("WAWebErrorType").SendFailureErrorCode
                      .UserReachedMaxMonthlyLimitForNewMessages,
                })),
                o(
                  "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
                ).isIndividualNewChatMessageCappingEnabled() &&
                  (await o(
                    "WAWebIndividualNewChatMessageCappingLimitUtils",
                  ).resetCappingStatus(
                    o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
                      .CAPPED,
                  ),
                  o("WAWebCmd").Cmd.newChatMessageCappingStateChange(),
                  new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)(
                    {
                      messageCappingActionType: o(
                        "WAWebWamEnumMessageCappingActionType",
                      ).MESSAGE_CAPPING_ACTION_TYPE.API,
                      userActionTarget: "nack_received",
                      extraAttributes: JSON.stringify(
                        o(
                          "WAWebIndividualNewChatMessageCappingLimitUtils",
                        ).getCappingData() || {},
                      ),
                    },
                  ).commit()))),
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).updateMessageTable
            : o("WAWebDBUpdateMessageTable").updateMessageTable)(e.id, l),
          e.set(l),
          o(
            "WAWebAddOnsUpdateSendStatesAction",
          ).updateAddOnSendStatesForMsgAction(e, l),
          t
        );
      }
    }
    ((l.sendMsgRecord = C), (l.sendAddonRecord = b));
  },
  98,
);
