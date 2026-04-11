__d(
  "WAWebChatThreadLoggingEventUploader",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotTypes",
    "WAWebChatMessageCountsWamEvent",
    "WAWebChatThreadLoggingBoolFlagFields",
    "WAWebChatThreadLoggingCountFields",
    "WAWebChatThreadLoggingUtils",
    "WAWebGroupType",
    "WAWebThreadLoggingAi",
    "WAWebThreadLoggingBiz",
    "WAWebThreadLoggingCoreConsumer",
    "WAWebThreadLoggingIntegrity",
    "WAWebThreadLoggingNotification",
    "WAWebThreadLoggingVoip",
    "WAWebWamEnumChatMutedType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = o("WAWebABProps").getABPropConfigValue("threads_logging_v2_enabled"),
      _ = (function () {
        function t(e, t) {
          ((this.eventStore = t), (this.metadataStore = e));
        }
        var a = t.prototype;
        return (
          (a.uploadEvents = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a,
                  i,
                  l = this,
                  _ = (a = t == null ? void 0 : t.purgeAfter) != null ? a : !0,
                  g = yield this.metadataStore.getOffset();
                if (g == null)
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "ChatThreadLoggingBatchEventUploader: offset not in store!",
                        ])),
                    ),
                    -1
                  );
                var h =
                  (i = t == null ? void 0 : t.lastStartTs) != null
                    ? i
                    : o("WAWebChatThreadLoggingUtils").computeStartTs(
                        g,
                        o("WATimeUtils").unixTime() -
                          o("WATimeUtils").DAY_SECONDS,
                      );
                if (this.secret == null) {
                  var y = yield this.metadataStore.getSecret();
                  if (y == null)
                    return (
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "ChatThreadLoggingBatchEventUploader: secret not in store!",
                          ])),
                      ),
                      -1
                    );
                  this.secret = y;
                }
                var C = yield this.eventStore.getBeforeInclusive(h);
                if (p)
                  try {
                    yield f(C, r("WANullthrows")(this.secret));
                  } catch (e) {
                    o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "CTLV2: Error uploading all events",
                        ])),
                    );
                  }
                else
                  try {
                    yield (m || (m = n("Promise"))).all(
                      C.map(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var t,
                                n,
                                a,
                                i = (a = o(
                                  "WAWebChatThreadLoggingUtils",
                                )).getThreadDs(e.startTs),
                                s = yield a.generateThreadID(
                                  r("WANullthrows")(l.secret),
                                  e.chatId,
                                  i,
                                ),
                                u = yield a.generateThreadID(
                                  r("WANullthrows")(l.secret),
                                  e.chatId,
                                  a.getThreadMonthDs(e.startTs),
                                ),
                                c = e.contactInfo,
                                d = {
                                  threadDs: i,
                                  threadId: s,
                                  threadIdMonthly: u,
                                  messagesSent: e.msgsSent,
                                  messagesReceived: e.msgsReceived,
                                  commentsReceived: e.commentsReceived,
                                  viewOnceMessagesSent: e.viewOnceMsgsSent,
                                  viewOnceMessagesReceived:
                                    e.viewOnceMsgsReceived,
                                  viewOnceMessagesOpened:
                                    e.viewOnceMessagesOpened,
                                  isAGroup: e.contactInfo.isAGroup,
                                  groupSize: c.isAGroup ? c.groupSize : void 0,
                                  isAContact: c.isAGroup
                                    ? void 0
                                    : c.isAContact,
                                  isArchived: e.isArchived,
                                  isPinned: e.isPinned,
                                  messagesStarred: e.messagesStarred,
                                  messagesRead: e.msgsRead,
                                  messagesUnread: e.messagesUnread,
                                  chatMuted: e.isMuted
                                    ? o("WAWebWamEnumChatMutedType")
                                        .CHAT_MUTED_TYPE.MUTED_NO_NOTIFICATIONS
                                    : o("WAWebWamEnumChatMutedType")
                                        .CHAT_MUTED_TYPE.NOT_MUTED,
                                  callOffersSent: e.callOffersSent,
                                  callOffersReceived: e.callOffersReceived,
                                  totalCallDuration: e.totalCallDuration,
                                  typeOfGroup:
                                    e.contactInfo.groupType != null
                                      ? o("WAWebGroupType").groupTypeToWamEnum(
                                          e.contactInfo.groupType,
                                        )
                                      : void 0,
                                  isPnhEnabledChat: e.isPnhEnabledChat,
                                  reactionsSent: e.reactionsSent,
                                  reactionsReceived: e.reactionsReceived,
                                  isMessageYourself: e.isMessageYourself,
                                  forwardMessagesSent: e.forwardMessagesSent,
                                  forwardMessagesReceived:
                                    e.forwardMessagesReceived,
                                  editedMsgsSent: e.editedMsgsSent,
                                  totalMessageToAgentCnt: e.botMessagesSent,
                                  totalMessageFromAgentCnt:
                                    e.botMessagesReceived,
                                  totalMessageEditsFromAgentCnt:
                                    e.botMessagesEdited,
                                  isUserAgent: e.isUserAgent,
                                  hasUsername: e.hasUsername,
                                  hasUsernamePin: e.hasUsernamePin,
                                  oppositeVisibleIdentification:
                                    (t = e.oppositeVisibleIdentification) !=
                                    null
                                      ? t
                                      : void 0,
                                  isUsernameThread: e.isUsernameThread,
                                  isUsernameThreadAtCreation:
                                    e.isUsernameThreadAtCreation,
                                  hasReplied1On1: e.hasReplied1On1,
                                  sharesCommonGroup: e.sharesCommonGroup,
                                  oppositePartyHasProfilePhoto:
                                    e.oppositePartyHasProfilePhoto,
                                  chatOrigins:
                                    (n = e.chatOrigins) != null ? n : void 0,
                                  eventCreationMessagesReceived:
                                    e.eventCreationMessagesReceived,
                                  eventCreationMessagesSent:
                                    e.eventCreationMessagesSent,
                                  eventResponseMessagesReceived:
                                    e.eventResponseMessagesReceived,
                                  eventResponseMessagesSent:
                                    e.eventResponseMessagesSent,
                                },
                                m = new (o(
                                  "WAWebChatMessageCountsWamEvent",
                                ).ChatMessageCountsWamEvent)(d);
                              (o("WAWebABProps").getABPropConfigValue(
                                "group_status_receiver_enabled",
                              ) &&
                                ((m.groupStatusLikesOthersToOthers =
                                  e.eventGroupStatusLikeOthersToOthers),
                                (m.groupStatusLikesOthersToOwn =
                                  e.eventGroupStatusLikeOthersToOwn),
                                (m.groupStatusRepliesOthersToOthers =
                                  e.eventGroupStatusReplyOthersToOthers),
                                (m.groupStatusRepliesOthersToOwn =
                                  e.eventGroupStatusReplyOthersToOwn),
                                (m.groupStatusRepliesOwnToOthers =
                                  e.eventGroupStatusReplyOwnToOthers),
                                (m.groupStatusRepliesOwnToOwn =
                                  e.eventGroupStatusReplyOwnToOwn)),
                                e.ephemeralityTriggerAction != null &&
                                  (m.ephemeralityTriggerAction =
                                    e.ephemeralityTriggerAction),
                                e.ephemeralityInitiator != null &&
                                  (m.ephemeralityInitiator =
                                    e.ephemeralityInitiator),
                                o(
                                  "WAWebChatThreadLoggingCountFields",
                                ).COUNT_FIELD_NAMES.forEach(function (t) {
                                  m[t] = e[t];
                                }),
                                o(
                                  "WAWebChatThreadLoggingBoolFlagFields",
                                ).FLAG_FIELD_NAMES.forEach(function (t) {
                                  m[t] = e[t];
                                }),
                                c.isAGroup ||
                                  (o(
                                    "WAWebBotBaseGating",
                                  ).isBizBot3pEnabled() &&
                                    (m.isUser3pBotChat =
                                      c.automatedType ===
                                      o("WAWebBotTypes").BizBotAutomatedType
                                        .FULL_3P),
                                  o("WAWebBotBaseGating").isBizBot1pEnabled() &&
                                    (m.isUser1pBizBotChat =
                                      c.automatedType ===
                                      o("WAWebBotTypes").BizBotAutomatedType
                                        .PARTIAL_1P)),
                                m.commit());
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      ),
                    );
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "chat_thread_logging: error uploading events: ",
                            "",
                          ])),
                        r("getErrorSafe")(e).toString(),
                      )
                      .sendLogs("thread-logging-upload-failure");
                  }
                if (_) {
                  var b = yield this.eventStore.deleteBeforeInclusive(h);
                  b !== C.length &&
                    o("WALogger").ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "uploadEvents: uploaded=",
                          " deleted=",
                          " mismatch!",
                        ])),
                      C.length,
                      b,
                    );
                }
                return (
                  yield this.metadataStore.setLastUploadedStartTs(h),
                  C.length
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })();
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (m || (m = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = o("WAWebChatThreadLoggingUtils").getThreadDs(
                        e.startTs,
                      ),
                      r = yield o(
                        "WAWebChatThreadLoggingUtils",
                      ).generateThreadID(
                        t,
                        e.chatId,
                        o("WAWebChatThreadLoggingUtils").getThreadMonthDs(
                          e.startTs,
                        ),
                      );
                    return { event: e, threadDs: n, threadId: r };
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          (o(
            "WAWebThreadLoggingCoreConsumer",
          ).ThreadInteractionCoreConsumerWamTrigger(r),
            o("WAWebThreadLoggingVoip").ThreadInteractionVoipWamTrigger(r),
            o("WAWebThreadLoggingBiz").ThreadInteractionBizWamTrigger(r),
            o("WAWebThreadLoggingAi").ThreadInteractionAiWamTrigger(r),
            o(
              "WAWebThreadLoggingNotification",
            ).ThreadInteractionNotificationWamTrigger(r),
            o(
              "WAWebThreadLoggingIntegrity",
            ).ThreadInteractionIntegrityWamTrigger(r));
        })),
        g.apply(this, arguments)
      );
    }
    l.ChatThreadLoggingEventUploaderImpl = _;
  },
  98,
);
