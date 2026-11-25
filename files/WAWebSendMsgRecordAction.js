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
      h,
      y = r("requireDeferred")("WAWebSendMsgJob").__setRef(
        "WAWebSendMsgRecordAction",
      ),
      C = new Map([
        ["AggregateError", "AggregateError"],
        ["Error", "Error"],
        ["EvalError", "EvalError"],
        ["RangeError", "RangeError"],
        ["ReferenceError", "ReferenceError"],
        ["SyntaxError", "SyntaxError"],
        ["TypeError", "TypeError"],
        ["URIError", "URIError"],
      ]);
    async function b(t) {
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
      return ((t.isNewMsg = !0), D({ type: "message", data: t }, i, r));
    }
    async function v(e) {
      var t = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
          e,
          o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        ),
        n = await o("WAWebFindChatAction").findExistingChat(
          e.id.remote,
          "sendMsgRecord",
        );
      return D({ type: "addon", data: e }, n, t);
    }
    var S = new Set([
        (h = o("WAWebMsgType")).MSG_TYPE.POLL_UPDATE,
        h.MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
        h.MSG_TYPE.POLL_EDIT_ENCRYPTED,
        h.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
        h.MSG_TYPE.EVENT_RESPONSE,
      ]),
      R = new Set([h.MSG_TYPE.POLL_UPDATE, h.MSG_TYPE.EVENT_RESPONSE]);
    function L(e, t) {
      return r("WAWebWid").isGroup(t)
        ? e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? I(e.data)
          : T(e.data)
        : !1;
    }
    function E(e) {
      return e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
        ? e.data.subtype !==
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit
        : k(e.data);
    }
    function k(e) {
      return e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
        ? e.selectedOptionLocalIds.length > 0
        : R.has(e.type);
    }
    function I(e) {
      return e.forwardedFromWeb === !0
        ? !1
        : e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit ||
            (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT);
    }
    function T(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.REACTION
        ? e.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
        : e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
          ? e.selectedOptionLocalIds.length > 0
          : e.kind === o("WAWebMsgType").MsgKind.PinInChat
            ? e.pinMessageType ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .PIN_FOR_ALL
            : S.has(e.type);
    }
    async function D(e, t, n) {
      var a = e.data,
        i = r("nullthrows")(a.to),
        l = a.id,
        g = l.remote;
      r("WAWebWid").isGroup(g) &&
        (await r("WAWebGroupMetadataCollection").find(g));
      var h =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          ["sender_revoke", "admin_revoke"].includes(a.subtype),
        y = $(a),
        b =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          a.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSetting,
        v =
          o("WAWebMsgGetters").getIsReaction(a) &&
          a.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
      if (
        !o("WAWebMsgGetters").getIsGroupMsg(a) &&
        !h &&
        !v &&
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
        var S;
        if (
          (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "model:msg:createRecord blocked send in ACP2-restricted chat: ",
                "",
              ])),
            a.id.toString(),
          ),
          (S = n.sendReporter) == null ||
            S.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_SEND_PRECONDITION_FAILED,
              isTerminal: !0,
              qplFailReason: "acp2_send_blocked",
            }),
          (n.sendReporter = null),
          e.type === "message")
        ) {
          var R = {
            isSendFailure: !0,
            ack: o("WAWebAck").ACK.FAILED,
            errorCode: o("WAWebErrorType").SendFailureErrorCode.Acp2Restricted,
          };
          ((o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).updateMessageTable
            : o("WAWebDBUpdateMessageTable").updateMessageTable)(l, R),
            e.data.set(R),
            o(
              "WAWebAddOnsUpdateSendStatesAction",
            ).updateAddOnSendStatesForMsgAction(e.data, R));
        } else await o("WAWebAddonSendProcess").markAddonSendFailed(e.data);
        return {
          messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
            .ERROR_UNKNOWN,
          failureReason: "acp2_send_blocked",
        };
      }
      var k;
      (h ||
        (k = new (o("WAWebWebcMessageSendWamEvent").WebcMessageSendWamEvent)({
          messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
          messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
          messageIsForward: !!a.isForwarded,
        })),
        y ||
          (x(t, e),
          o("WAWebUpdateUnreadChatAction")
            .sendSeen({
              chat: t,
              threadId: o("WAWebBotGating").isAiChatThreadsEnabled()
                ? o("WAWebThreadMsgUtils").getMsgAiThread(a)
                : void 0,
            })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Outgoing message read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("outgoing-message-send-seen-failed");
            })),
        L(e, g) &&
          (E(e)
            ? o("WAWebMetaAiOpenGroupNux").maybeShowGroupAgentNuxes(t)
            : o(
                "WAWebGroupAgentNonInitiatorNux",
              ).maybeShowGroupAgentNonInitiatorNux(t)));
      var I;
      if (
        r("WAWebWid").isGroup(g) &&
        a.messageSecret == null &&
        o("WAWebSendMsgChatActionUtils").hasGroupAgentParticipant(t)
      ) {
        var T = self.crypto.getRandomValues(new Uint8Array(32));
        e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? (e.data.set({ messageSecret: T }),
            await o("WAWebDBProcessMessage").updateExistingMessages(
              [o("WAWebMsgDataFromModel").msgDataFromMsgModel(e.data)],
              g,
            ))
          : (I = babelHelpers.extends({}, e.data, { messageSecret: T }));
      }
      return (
        e.type !== "addon" &&
          a.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
          !y &&
          !h &&
          o("WAWebMsgCollection").MsgCollection.trigger("new_msg_sent"),
        Promise.resolve()
          .then(function () {
            return e.type === "message"
              ? P(e.data, n)
              : o("WAWebAddonSendProcess").sendAddonProcess(
                  I != null ? I : e.data,
                  n,
                );
          })
          .then(async function (n) {
            var r =
              l.fromMe && o("WAWebUserUtils").isMePrimary(g)
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
              k && (k.markMessageSendT(), k.commit()),
              h ||
                o(
                  "WAWebSingleEmojiDailyUtils",
                ).maybeIncrementSingleEmojiDailyStatsCount(a),
              a.utm != null &&
                o("WAWebUpdateUtmAction").clearUtmAfterMessageSent(g),
              y ||
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
              !h &&
                !y &&
                o("WAWebOutgoingMessageTone").playOutgoingMessageTone(),
              o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
                o("WAWebExternalEntryPointPrefs").deleteExternalEntryPoint(g),
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
                !b
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
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "model:msg:createRecord dropped msg: ",
                        "",
                      ])),
                    a.id.toString(),
                  ),
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord dropped msg: ",
                    "",
                  ])),
                a.id.toString(),
              ),
              e.type === "message"
                ? o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(s)
                    .tags("messaging")
                    .sendLogs("send-msg-error")
                : o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
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
                  (l = C.get(s.name)) != null ? l : "other_error",
              }
            );
          })
      );
    }
    function x(e, t) {
      !e.isTrusted() &&
        (t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon ||
          o("WAWebIsUserInitiatedOutgoingMsg").isUserInitiatedOutgoingMsg(
            t.data,
          )) &&
        r("WAWebSendNotSpamAction")(e).catch(r("WAWebNoop"));
    }
    function $(e) {
      return (
        o("WAWebSilentProtocolMsg").isSilentProtocolMsg(e) ||
        o("WAWebSilentPaymentMsg").isSilentPaymentMsg(e)
      );
    }
    async function P(e, t) {
      var n;
      e.isForwarded &&
        (n = o("WAWebMsgUtilsBridge").createMessageForwardMetric(e));
      try {
        var r = await y.load(),
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
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.sendMsgRecord = b), (l.sendAddonRecord = v));
  },
  98,
);
