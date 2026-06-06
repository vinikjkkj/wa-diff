__d(
  "WAWebSendMsgRecordAction",
  [
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
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    async function f(t) {
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
      return ((t.isNewMsg = !0), h({ type: "message", data: t }, i, r));
    }
    async function g(e) {
      var t = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
          e,
          o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        ),
        n = await o("WAWebFindChatAction").findExistingChat(
          e.id.remote,
          "sendMsgRecord",
        );
      return h({ type: "addon", data: e }, n, t);
    }
    async function h(e, t, n) {
      var a = e.data,
        i = r("WANullthrows")(a.to),
        l = a.id,
        _ = l.remote;
      (r("WAWebWid").isGroup(i) &&
        (await r("WAWebGroupMetadataCollection").find(i)),
        t.isTrusted() || r("WAWebSendNotSpamAction")(t).catch(r("WAWebNoop")));
      var f =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          ["sender_revoke", "admin_revoke"].includes(a.subtype),
        g =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          a.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSyncResponse,
        h =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          a.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSetting,
        C =
          o("WAWebMsgGetters").getIsReaction(a) &&
          a.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
      if (
        !o("WAWebMsgGetters").getIsGroupMsg(a) &&
        !f &&
        !C &&
        o("WAWebBlocklistCollection").BlocklistCollection.get(i)
      )
        return Promise.reject(
          new (r("WAWebContactBlockedErrorAction"))(
            "Contact is blocked",
            o("WAWebContactCollection").ContactCollection.assertGet(i),
          ),
        );
      var b;
      return (
        f ||
          (b = new (o("WAWebWebcMessageSendWamEvent").WebcMessageSendWamEvent)({
            messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
            messageIsForward: !!a.isForwarded,
          })),
        g ||
          o("WAWebUpdateUnreadChatAction").sendSeen({
            chat: t,
            threadId: o("WAWebBotGating").isAiChatThreadsEnabled()
              ? o("WAWebThreadMsgUtils").getMsgAiThread(a)
              : void 0,
          }),
        e.type !== "addon" &&
          a.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
          !g &&
          !f &&
          o("WAWebMsgCollection").MsgCollection.trigger(
            r("WAWebConstantsDeprecated").NEW_MSG_SENT,
          ),
        Promise.resolve()
          .then(function () {
            return e.type === "message"
              ? y(e.data, n)
              : o("WAWebAddonSendMsgData").sendAddonProcess(e.data, n);
          })
          .then(async function (n) {
            var i =
              l.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(_)
                ? o("WAWebAck").ACK.READ
                : o("WAWebAck").ACK.SENT;
            return (
              e.type === "message" &&
                (e.data.updateAck(i),
                o(
                  "WAWebAddOnsUpdateSendStatesAction",
                ).maybeUpdateAddOnAckForMsgAction(e.data, i)),
              o(
                "WAWebBotGenTypingIndicatorMsg",
              ).maybeGenBotTypingIndicatorMessage(t, a),
              b && (b.markMessageSendT(), b.commit()),
              !f &&
                o("WAWebABProps").getABPropConfigValue(
                  "single_emoji_logging_enabled",
                ) &&
                o(
                  "WAWebSingleEmojiDailyUtils",
                ).maybeIncrementSingleEmojiDailyStatsCount(a),
              a.utm != null &&
                o("WAWebUpdateUtmAction").clearUtmAfterMessageSent(_),
              await o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(
                a,
              ),
              [
                o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                o("WAWebMsgType").MSG_TYPE.REACTION,
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
              ].includes(a.type) || (t.lastReceivedKey = l),
              !r("gkx")("26258") &&
                !f &&
                !g &&
                o("WAWebOutgoingMessageTone").playOutgoingMessageTone(),
              o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
                o("WAWebExternalEntryPointPrefs").deleteExternalEntryPoint(_),
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
                !h
              ) {
                var r = o("WATimeUtils").unixTime() + n;
                (o("WAWebDBUpdateMessageTable").updateMessageTable(l, {
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
                    a.id.toString(),
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
                  }
                );
              },
            ),
          )
          .catch(function (t) {
            var i,
              l = r("getErrorSafe")(t);
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord dropped msg: ",
                    "",
                  ])),
                a.id.toString(),
              ),
              e.type === "message"
                ? o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(l)
                    .tags("messaging")
                    .sendLogs("send-msg-error")
                : o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(l)
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
              }
            );
          })
      );
    }
    async function y(e, t) {
      var n;
      e.isForwarded &&
        (n = o("WAWebMsgUtilsBridge").createMessageForwardMetric(e));
      try {
        var r = await o("WAWebSendMsgJob").encryptAndSendMsg(
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
              o("WAWebCreateNackFromStanza").NackReason.NewChatMessagesCapped &&
              ((a = babelHelpers.extends({}, a, {
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
                new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
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
    }
    ((l.sendMsgRecord = f), (l.sendAddonRecord = g));
  },
  98,
);
