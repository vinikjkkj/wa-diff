__d(
  "WAWebSendMsgRecordAction",
  [
    "Promise",
    "WAErrors",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebAddonSendMsgData",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebBlocklistCollection",
    "WAWebBotGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebConstantsDeprecated",
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
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
          return ((t.isNewMsg = !0), b({ type: "message", data: t }, i, r));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
              e,
              o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            ),
            n = yield o("WAWebFindChatAction").findExistingChat(
              e.id.remote,
              "sendMsgRecord",
            );
          return b({ type: "addon", data: e }, n, t);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = e.data,
            l = r("WANullthrows")(i.to),
            _ = i.id,
            g = _.remote;
          (r("WAWebWid").isGroup(l) &&
            (yield r("WAWebGroupMetadataCollection").find(l)),
            t.isTrusted() ||
              r("WAWebSendNotSpamAction")(t).catch(r("WAWebNoop")));
          var h =
              i.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              ["sender_revoke", "admin_revoke"].includes(i.subtype),
            y =
              i.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              i.subtype ===
                o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                  .EphemeralSyncResponse,
            C =
              o("WAWebMsgGetters").getIsReaction(i) &&
              i.reactionText ===
                o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
          if (
            !o("WAWebMsgGetters").getIsGroupMsg(i) &&
            !h &&
            !C &&
            o("WAWebBlocklistCollection").BlocklistCollection.get(l)
          )
            return (f || (f = n("Promise"))).reject(
              new (r("WAWebContactBlockedErrorAction"))(
                "Contact is blocked",
                o("WAWebContactCollection").ContactCollection.assertGet(l),
              ),
            );
          var b;
          return (
            h ||
              (b = new (o(
                "WAWebWebcMessageSendWamEvent",
              ).WebcMessageSendWamEvent)({
                messageType: o("WAWebWamMsgUtils").getWamMessageType(i),
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(i),
                messageIsForward: !!i.isForwarded,
              })),
            y ||
              o("WAWebUpdateUnreadChatAction").sendSeen({
                chat: t,
                threadId: o("WAWebBotGating").isAiChatThreadsEnabled()
                  ? o("WAWebThreadMsgUtils").getMsgAiThread(i)
                  : void 0,
              }),
            e.type !== "addon" &&
              i.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
              !y &&
              !h &&
              o("WAWebMsgCollection").MsgCollection.trigger(
                r("WAWebConstantsDeprecated").NEW_MSG_SENT,
              ),
            (f || (f = n("Promise")))
              .resolve()
              .then(function () {
                return e.type === "message"
                  ? S(e.data, a)
                  : o("WAWebAddonSendMsgData").sendAddonProcess(e.data, a);
              })
              .then(
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var a =
                        _.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(g)
                          ? o("WAWebAck").ACK.READ
                          : o("WAWebAck").ACK.SENT;
                      return (
                        e.type === "message" &&
                          (e.data.updateAck(a),
                          o(
                            "WAWebAddOnsUpdateSendStatesAction",
                          ).maybeUpdateAddOnAckForMsgAction(e.data, a)),
                        o(
                          "WAWebBotGenTypingIndicatorMsg",
                        ).maybeGenBotTypingIndicatorMessage(t, i),
                        b && (b.markMessageSendT(), b.commit()),
                        !h &&
                          o("WAWebABProps").getABPropConfigValue(
                            "single_emoji_logging_enabled",
                          ) &&
                          o(
                            "WAWebSingleEmojiDailyUtils",
                          ).maybeIncrementSingleEmojiDailyStatsCount(i),
                        i.utm != null &&
                          o("WAWebUpdateUtmAction").clearUtmAfterMessageSent(g),
                        yield o(
                          "WAWebMsgUtilsBridge",
                        ).logMessageSendForChatThreadLogging(i),
                        [
                          o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                          o("WAWebMsgType").MSG_TYPE.REACTION,
                          o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
                        ].includes(i.type) || (t.lastReceivedKey = _),
                        !r("gkx")("26258") &&
                          !h &&
                          !y &&
                          o(
                            "WAWebOutgoingMessageTone",
                          ).playOutgoingMessageTone(),
                        o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
                          o(
                            "WAWebExternalEntryPointPrefs",
                          ).deleteExternalEntryPoint(g),
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
                    return a.apply(this, arguments);
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
                    o("WAWebAfterReadUtils").isAfterReadEnabled()
                  ) {
                    var r = o("WATimeUtils").unixTime() + n;
                    (o("WAWebDBUpdateMessageTable").updateMessageTable(_, {
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
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
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
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "model:msg:createRecord dropped msg: ",
                            "",
                          ])),
                        i.id.toString(),
                      ),
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
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
              .catch(function (t) {
                var n;
                return (
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "model:msg:createRecord dropped msg: ",
                        "",
                      ])),
                    i.id.toString(),
                  ),
                  e.type === "message"
                    ? o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "Got error",
                            ])),
                        )
                        .catching(t)
                        .tags("messaging")
                        .sendLogs("send-msg-error")
                    : o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "Got error",
                            ])),
                        )
                        .catching(t)
                        .tags("messaging", "addons")
                        .sendLogs("send-addon-error: " + i.type),
                  (n = a.sendReporter) == null ||
                    n.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                      isTerminal: !0,
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
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        R.apply(this, arguments)
      );
    }
    ((l.sendMsgRecord = g), (l.sendAddonRecord = y));
  },
  98,
);
