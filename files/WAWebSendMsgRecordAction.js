__d(
  "WAWebSendMsgRecordAction",
  [
    "Promise",
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
    "WAWebBotGenTypingIndicatorMsg",
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
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsTypes",
    "WAWebUtmBizUtils",
    "WAWebVoipInCallMessageSendLogger",
    "WAWebWamEnumMessageCappingActionType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamMsgUtils",
    "WAWebWebcMessageSendWamEvent",
    "WAWebWid",
    "asyncToGeneratorRuntime",
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose(["sendMsgRecord"])),
          );
          var r = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
            t,
            o("WAWebMessageSendReporterFrontendDeps")
              .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
          );
          r.sendReporter =
            (n = r.sendReporter) != null ? n : r.createSendReporter();
          var a = t.id.remote,
            i = yield o("WAWebFindChatAction").findExistingChat(
              a,
              "sendMsgRecord",
            );
          if (
            i.contact.isEnterprise &&
            !o("WAWebMsgGetters").getIsGroupMsg(t)
          ) {
            var l = o("WAWebUpdateUtmAction").getUtmForChat(a);
            l != null && o("WAWebUtmBizUtils").isUtmValid(i, l) && (t.utm = l);
          }
          return ((t.isNewMsg = !0), $({ type: "message", data: t }, i, r));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
              e,
              o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            ),
            n = yield o("WAWebFindChatAction").findExistingChat(
              e.id.remote,
              "sendMsgRecord",
            );
          return $({ type: "addon", data: e }, n, t);
        })),
        R.apply(this, arguments)
      );
    }
    var L = new Set([
        (h = o("WAWebMsgType")).MSG_TYPE.POLL_UPDATE,
        h.MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
        h.MSG_TYPE.POLL_EDIT_ENCRYPTED,
        h.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
        h.MSG_TYPE.EVENT_RESPONSE,
      ]),
      E = new Set([h.MSG_TYPE.POLL_UPDATE, h.MSG_TYPE.EVENT_RESPONSE]);
    function k(e, t) {
      return r("WAWebWid").isGroup(t)
        ? e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? D(e.data)
          : x(e.data)
        : !1;
    }
    function I(e) {
      return e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
        ? e.data.subtype !==
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit
        : T(e.data);
    }
    function T(e) {
      return e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
        ? e.selectedOptionLocalIds.length > 0
        : E.has(e.type);
    }
    function D(e) {
      return e.forwardedFromWeb === !0
        ? !1
        : e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit ||
            (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT);
    }
    function x(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.REACTION
        ? e.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
        : e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
          ? e.selectedOptionLocalIds.length > 0
          : e.kind === o("WAWebMsgType").MsgKind.PinInChat
            ? e.pinMessageType ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .PIN_FOR_ALL
            : L.has(e.type);
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = e.data,
            l = r("nullthrows")(i.to),
            f = i.id,
            h = f.remote;
          (r("WAWebWid").isGroup(h) &&
            (yield r("WAWebGroupMetadataCollection").find(h)),
            t.isTrusted() ||
              r("WAWebSendNotSpamAction")(t).catch(r("WAWebNoop")));
          var y =
              i.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              ["sender_revoke", "admin_revoke"].includes(i.subtype),
            b = N(i),
            v =
              i.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              i.subtype ===
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSetting,
            S =
              o("WAWebMsgGetters").getIsReaction(i) &&
              i.reactionText ===
                o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
          if (
            !o("WAWebMsgGetters").getIsGroupMsg(i) &&
            !y &&
            !S &&
            o("WAWebBlocklistCollection").BlocklistCollection.get(l)
          )
            return (g || (g = n("Promise"))).reject(
              new (r("WAWebContactBlockedErrorAction"))(
                "Contact is blocked",
                o("WAWebContactCollection").ContactCollection.assertGet(l),
              ),
            );
          if (
            o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t) &&
            i.subtype !== "sender_revoke"
          ) {
            var R;
            if (
              (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord blocked send in ACP2-restricted chat: ",
                    "",
                  ])),
                i.id.toString(),
              ),
              (R = a.sendReporter) == null ||
                R.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_SEND_PRECONDITION_FAILED,
                  isTerminal: !0,
                  qplFailReason: "acp2_send_blocked",
                }),
              (a.sendReporter = null),
              e.type === "message")
            ) {
              var L = {
                isSendFailure: !0,
                ack: o("WAWebAck").ACK.FAILED,
                errorCode:
                  o("WAWebErrorType").SendFailureErrorCode.Acp2Restricted,
              };
              ((o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).updateMessageTable
                : o("WAWebDBUpdateMessageTable").updateMessageTable)(f, L),
                e.data.set(L),
                o(
                  "WAWebAddOnsUpdateSendStatesAction",
                ).updateAddOnSendStatesForMsgAction(e.data, L));
            } else yield o("WAWebAddonSendProcess").markAddonSendFailed(e.data);
            return {
              messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                .ERROR_UNKNOWN,
              failureReason: "acp2_send_blocked",
            };
          }
          var E;
          (y ||
            (E = new (o(
              "WAWebWebcMessageSendWamEvent",
            ).WebcMessageSendWamEvent)({
              messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
              messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(i),
              messageIsForward: !!i.isForwarded,
            })),
            b ||
              o("WAWebUpdateUnreadChatAction").sendSeen({
                chat: t,
                threadId: o("WAWebBotGating").isAiChatThreadsEnabled()
                  ? o("WAWebThreadMsgUtils").getMsgAiThread(i)
                  : void 0,
              }),
            k(e, h) &&
              (I(e)
                ? o("WAWebMetaAiOpenGroupNux").maybeShowGroupAgentNuxes(t)
                : o(
                    "WAWebGroupAgentNonInitiatorNux",
                  ).maybeShowGroupAgentNonInitiatorNux(t)));
          var T;
          if (
            r("WAWebWid").isGroup(h) &&
            i.messageSecret == null &&
            o("WAWebSendMsgChatActionUtils").hasGroupAgentParticipant(t)
          ) {
            var D = self.crypto.getRandomValues(new Uint8Array(32));
            e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
              ? (e.data.set({ messageSecret: D }),
                yield o("WAWebDBProcessMessage").updateExistingMessages(
                  [o("WAWebMsgDataFromModel").msgDataFromMsgModel(e.data)],
                  h,
                ))
              : (T = babelHelpers.extends({}, e.data, { messageSecret: D }));
          }
          return (
            e.type !== "addon" &&
              i.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
              !b &&
              !y &&
              o("WAWebMsgCollection").MsgCollection.trigger("new_msg_sent"),
            (g || (g = n("Promise")))
              .resolve()
              .then(function () {
                return e.type === "message"
                  ? M(e.data, a)
                  : o("WAWebAddonSendProcess").sendAddonProcess(
                      T != null ? T : e.data,
                      a,
                    );
              })
              .then(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r =
                        f.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(h)
                          ? o("WAWebAck").ACK.READ
                          : o("WAWebAck").ACK.SENT;
                      return (
                        e.type === "message" &&
                          (e.data.updateAck(r),
                          o(
                            "WAWebAddOnsUpdateSendStatesAction",
                          ).maybeUpdateAddOnAckForMsgAction(e.data, r)),
                        o(
                          "WAWebBotGenTypingIndicatorMsg",
                        ).maybeGenBotTypingIndicatorMessage(t, i),
                        E && (E.markMessageSendT(), E.commit()),
                        y ||
                          o(
                            "WAWebSingleEmojiDailyUtils",
                          ).maybeIncrementSingleEmojiDailyStatsCount(i),
                        i.utm != null &&
                          o("WAWebUpdateUtmAction").clearUtmAfterMessageSent(h),
                        b ||
                          o(
                            "WAWebVoipInCallMessageSendLogger",
                          ).logInCallMessageSendIfNeeded(t),
                        yield o(
                          "WAWebMsgUtilsBridge",
                        ).logMessageSendForChatThreadLogging(i),
                        [
                          o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                          o("WAWebMsgType").MSG_TYPE.REACTION,
                          o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
                        ].includes(i.type) || (t.lastReceivedKey = f),
                        !y &&
                          !b &&
                          o(
                            "WAWebOutgoingMessageTone",
                          ).playOutgoingMessageTone(),
                        o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
                          o(
                            "WAWebExternalEntryPointPrefs",
                          ).deleteExternalEntryPoint(h),
                        {
                          messageSendResult: o("WAWebSendMsgResultAction")
                            .SendMsgResult.OK,
                          t: n.t,
                          count: n.count,
                        }
                      );
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              )
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
                    !v
                  ) {
                    var r = o("WATimeUtils").unixTime() + n;
                    ((o("WAWebBackendRuntime").isWebDiBackendEnabled()
                      ? o("WAWebBackendRuntime").runtime(
                          o("WAWebMessageStoreService").MessageStoreService,
                        ).updateMessageTable
                      : o("WAWebDBUpdateMessageTable").updateMessageTable)(f, {
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
                      (t = a.sendReporter) == null ||
                        t.postFailure({
                          result: o("WAWebWamEnumMessageSendResultType")
                            .MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
                          isTerminal: !1,
                          qplFailReason: "server_status_code_error",
                        }),
                      (a.sendReporter = null),
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
                      (e = a.sendReporter) == null ||
                        e.postFailure({
                          result: o("WAWebWamEnumMessageSendResultType")
                            .MESSAGE_SEND_RESULT_TYPE.ERROR_PAYLOAD_TOO_BIG,
                          isTerminal: !0,
                          qplFailReason: "buffer_too_large",
                        }),
                      (a.sendReporter = null),
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
                      (e = a.sendReporter) == null ||
                        e.postFailure({
                          result: o("WAWebWamEnumMessageSendResultType")
                            .MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_PROTOBUF,
                          isTerminal: !0,
                          qplFailReason: "message_validation_error",
                        }),
                      (a.sendReporter = null),
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
                      (e = a.sendReporter) == null ||
                        e.postFailure({
                          result: o("WAWebWamEnumMessageSendResultType")
                            .MESSAGE_SEND_RESULT_TYPE
                            .AEA_SEND_RECONCILATION_FAILURE,
                          isTerminal: !0,
                          qplFailReason: "aea_send_reconciliation_failure",
                        }),
                      (a.sendReporter = null),
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
                        i.id.toString(),
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
                      (t = a.sendReporter) == null ||
                        t.postFailure({
                          result: o("WAWebWamEnumMessageSendResultType")
                            .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                          isTerminal: !0,
                          qplFailReason: "message_sent_ack_error",
                        }),
                      (a.sendReporter = null),
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
                var n,
                  l,
                  s = r("getErrorSafe")(t);
                return (
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "model:msg:createRecord dropped msg: ",
                        "",
                      ])),
                    i.id.toString(),
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
                        .sendLogs("send-addon-error: " + i.type),
                  (n = a.sendReporter) == null ||
                    n.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                      isTerminal: !0,
                      qplFailReason: "unknown_error",
                    }),
                  (a.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                    failureReason: "unknown_error",
                    failureErrorName:
                      (l = C.get(s.name)) != null ? l : "other_error",
                  }
                );
              })
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return (
        o("WAWebSilentProtocolMsg").isSilentProtocolMsg(e) ||
        o("WAWebSilentPaymentMsg").isSilentPaymentMsg(e)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          e.isForwarded &&
            (n = o("WAWebMsgUtilsBridge").createMessageForwardMetric(e));
          try {
            var r = yield y.load(),
              a = r.encryptAndSendMsg,
              i = yield a(
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
                      (yield o(
                        "WAWebIndividualNewChatMessageCappingLimitUtils",
                      ).resetCappingStatus(
                        o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
                          .CAPPED,
                      ),
                      o("WAWebCmd").Cmd.newChatMessageCappingStateChange(),
                      new (o(
                        "WAWebMessageCappingWamEvent",
                      ).MessageCappingWamEvent)({
                        messageCappingActionType: o(
                          "WAWebWamEnumMessageCappingActionType",
                        ).MESSAGE_CAPPING_ACTION_TYPE.API,
                        userActionTarget: "nack_received",
                        extraAttributes: JSON.stringify(
                          o(
                            "WAWebIndividualNewChatMessageCappingLimitUtils",
                          ).getCappingData() || {},
                        ),
                      }).commit()))),
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
        })),
        w.apply(this, arguments)
      );
    }
    ((l.sendMsgRecord = b), (l.sendAddonRecord = S));
  },
  98,
);
