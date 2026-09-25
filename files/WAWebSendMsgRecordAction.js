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
    "WAWebBlocklistCollection",
    "WAWebBotGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactBlockedErrorAction",
    "WAWebContactCollection",
    "WAWebCreateNackFromStanza",
    "WAWebDBUpdateMessageTable",
    "WAWebErrorType",
    "WAWebExternalCtxConfig",
    "WAWebExternalEntryPointPrefs",
    "WAWebFindChatAction",
    "WAWebGroupMetadataCollection",
    "WAWebHandleMsgError",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMsgUtilsBridge",
    "WAWebNoop",
    "WAWebOutgoingMessageTone",
    "WAWebReactionsBEUtils",
    "WAWebSendMsgJob",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebSendNotSpamAction",
    "WAWebSilentProtocolMsg",
    "WAWebSingleEmojiDailyUtils",
    "WAWebThreadMsgUtils",
    "WAWebUpdateUnreadChatAction",
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsTypes",
    "WAWebUtmBizUtils",
    "WAWebWamEnumMessageCappingActionType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamMsgUtils",
    "WAWebWebcMessageSendWamEvent",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
          return ((t.isNewMsg = !0), v({ type: "message", data: t }, i, r));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
              e,
              o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            ),
            n = yield o("WAWebFindChatAction").findExistingChat(
              e.id.remote,
              "sendMsgRecord",
            );
          return v({ type: "addon", data: e }, n, t);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = e.data,
            l = r("nullthrows")(i.to),
            f = i.id,
            h = f.remote;
          (r("WAWebWid").isGroup(l) &&
            (yield r("WAWebGroupMetadataCollection").find(l)),
            t.isTrusted() ||
              r("WAWebSendNotSpamAction")(t).catch(r("WAWebNoop")));
          var y =
              i.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              ["sender_revoke", "admin_revoke"].includes(i.subtype),
            C = o("WAWebSilentProtocolMsg").isSilentProtocolMsg(i),
            b =
              i.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              i.subtype ===
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSetting,
            v =
              o("WAWebMsgGetters").getIsReaction(i) &&
              i.reactionText ===
                o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
          if (
            !o("WAWebMsgGetters").getIsGroupMsg(i) &&
            !y &&
            !v &&
            o("WAWebBlocklistCollection").BlocklistCollection.get(l)
          )
            return (g || (g = n("Promise"))).reject(
              new (r("WAWebContactBlockedErrorAction"))(
                "Contact is blocked",
                o("WAWebContactCollection").ContactCollection.assertGet(l),
              ),
            );
          if (o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t)) {
            var S;
            if (
              (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord blocked send in ACP2-restricted chat: ",
                    "",
                  ])),
                i.id.toString(),
              ),
              (S = a.sendReporter) == null ||
                S.postFailure({
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
              (o("WAWebDBUpdateMessageTable").updateMessageTable(f, L),
                e.data.set(L),
                o(
                  "WAWebAddOnsUpdateSendStatesAction",
                ).updateAddOnSendStatesForMsgAction(e.data, L));
            } else yield o("WAWebAddonSendProcess").markAddonSendFailed(e.data);
            return {
              messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                .ERROR_UNKNOWN,
            };
          }
          var E;
          return (
            y ||
              (E = new (o(
                "WAWebWebcMessageSendWamEvent",
              ).WebcMessageSendWamEvent)({
                messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(i),
                messageIsForward: !!i.isForwarded,
              })),
            C ||
              o("WAWebUpdateUnreadChatAction").sendSeen({
                chat: t,
                threadId: o("WAWebBotGating").isAiChatThreadsEnabled()
                  ? o("WAWebThreadMsgUtils").getMsgAiThread(i)
                  : void 0,
              }),
            e.type !== "addon" &&
              i.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
              !C &&
              !y &&
              o("WAWebMsgCollection").MsgCollection.trigger("new_msg_sent"),
            (g || (g = n("Promise")))
              .resolve()
              .then(function () {
                return e.type === "message"
                  ? R(e.data, a)
                  : o("WAWebAddonSendProcess").sendAddonProcess(e.data, a);
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
                        yield o(
                          "WAWebMsgUtilsBridge",
                        ).logMessageSendForChatThreadLogging(i),
                        [
                          o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                          o("WAWebMsgType").MSG_TYPE.REACTION,
                          o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
                        ].includes(i.type) || (t.lastReceivedKey = f),
                        !y &&
                          !C &&
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
                    !b
                  ) {
                    var r = o("WATimeUtils").unixTime() + n;
                    (o("WAWebDBUpdateMessageTable").updateMessageTable(f, {
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
                        ackErrorCode: e.ackErrorCode,
                      }
                    );
                  },
                ),
              )
              .catch(function (t) {
                var n,
                  l = r("getErrorSafe")(t);
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
                        .catching(l)
                        .tags("messaging")
                        .sendLogs("send-msg-error")
                    : o("WALogger")
                        .ERROR(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "Got error",
                            ])),
                        )
                        .catching(l)
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
                  }
                );
              })
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          e.isForwarded &&
            (n = o("WAWebMsgUtilsBridge").createMessageForwardMetric(e));
          try {
            var r = yield o("WAWebSendMsgJob").encryptAndSendMsg(
              {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: e,
              },
              t,
            );
            if (
              (n && n.then(o("WAWebMsgUtilsBridge").logMessageMetric),
              r.error != null)
            )
              throw new (o("WAWebHandleMsgError").MessageSentAckError)(r.error);
            return { t: parseInt(r.t, 10), count: r.count };
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
            var a = { isSendFailure: !0 };
            throw (
              t instanceof o("WAWebHandleMsgError").MessageSentAckError &&
                ((a = babelHelpers.extends({}, a, {
                  ack: o("WAWebAck").ACK.FAILED,
                })),
                t.ackErrorCode ===
                  o("WAWebCreateNackFromStanza").NackReason
                    .NewChatMessagesCapped &&
                  ((a = babelHelpers.extends({}, a, {
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
              o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, a),
              e.set(a),
              o(
                "WAWebAddOnsUpdateSendStatesAction",
              ).updateAddOnSendStatesForMsgAction(e, a),
              t
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    ((l.sendMsgRecord = h), (l.sendAddonRecord = C));
  },
  98,
);
