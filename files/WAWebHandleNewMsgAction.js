__d(
  "WAWebHandleNewMsgAction",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebApiChat",
    "WAWebBackendErrors",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebCTWAGatingUtils",
    "WAWebChangePresenceHandlerAction",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatLoadMessages",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebCommonCTWADataSharing",
    "WAWebCommonCTWALogging",
    "WAWebCommonMsgUtils",
    "WAWebConversionTupleCollection",
    "WAWebCtwaConversationDepthUtils",
    "WAWebDBUpdateChatTable",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebGroupUnreadMessageType",
    "WAWebHandleMsgReceiptCommon",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebLidMigrationUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNoop",
    "WAWebRichOrderStatusLogger",
    "WAWebSchemaChat",
    "WAWebSendNotSpamAction",
    "WAWebSetArchiveChatActionUtils",
    "WAWebSmb3pdAggregatedConversionSignalAction",
    "WAWebUnreadMentionModel",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumCtwaDirectionFrom",
    "WAWebWamEnumWebcQueryTriggerType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b() {
      return !o("WAWebCmd").Cmd.isOfflineDeliveryEnd;
    }
    var v = !1;
    function S(t, n) {
      var r, a;
      if (!o("WAWebMsgGetters").getIsSentByMe(n)) {
        var i = o("WAWebChatEphemerality").getAfterReadDurationForChat(t),
          l = o("WAWebChatEphemerality").getEphemeralSetting(t);
        if (!(i == null && l == null)) {
          var s =
              (r = o("WAWebMsgGetters").getAfterReadDuration(n)) != null
                ? r
                : null,
            u =
              (a = o("WAWebMsgGetters").getEphemeralDuration(n)) != null
                ? a
                : null;
          (s === i && u === l) ||
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[after-read][diag] incoming msg ephemerality differs from chat setting: chatId=",
                    " group=",
                    " type=",
                    " msgAfterReadDuration=",
                    " chatAfterReadDuration=",
                    " msgEphemeralDuration=",
                    " chatEphemeralDuration=",
                    " afterReadEnabled=",
                    "",
                  ])),
                t.id.toLogString(),
                o("WAWebChatGetters").getIsGroup(t),
                n.type,
                s != null ? s : "none",
                i != null ? i : "none",
                u != null ? u : "none",
                l != null ? l : "none",
                o("WAWebAfterReadUtils").isAfterReadEnabled(),
              )
              .tags("after-read");
        }
      }
    }
    function R(e, t) {
      if (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "handleNewMsgForChat chatId: ",
              " type: ",
              ", sub type: ",
              "",
            ])),
          e.id.toLogString(),
          t.type,
          t.subtype,
        ),
        S(e, t),
        (o("WAWebChatGetters").getIsNewsletter(e) &&
          !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) ||
          !t)
      )
        return (C || (C = n("Promise"))).resolve();
      var a = (C || (C = n("Promise"))).resolve();
      if (
        (o("WAWebMsgGetters").getIsSentByMe(t) &&
          !e.notSpam &&
          !o("WAWebChatGetters").getIsNewsletter(e) &&
          (a = r("WAWebSendNotSpamAction")(e, !1)),
        o("WAWebFrontendMsgGetters").getEventType(t) ===
          o("WAWebCommonMsgUtils").EventType.IGNORE)
      )
        return (C || (C = n("Promise"))).resolve();
      var i = !1;
      return a
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = {};
            (e.promises.updateSortTime &&
              e.promises.updateSortTime.abortController.abort(),
              o("WAWebMsgGetters").getIsSentByMeFromWeb(t) &&
                e.archive &&
                o("WAWebSetArchiveChatActionUtils").shouldUnarchiveChat(
                  o("WAWebMsgGetters").getIsSentByMe(t),
                ) &&
                (n.archive = !1),
              e.promises.setArchive &&
                e.promises.setArchive.abortController.abort(),
              !o("WAWebChatGetters").getIsNewsletter(e) &&
                t.subtype !==
                  o("WAWebBotGenTypingIndicatorMsg")
                    .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                (o("WAWebMsgGetters").getIsSentByMe(t)
                  ? (e.markedUnread = !1)
                  : r("WAWebChangePresenceHandlerAction")(
                      { id: e.id, participant: t.author, type: "idle" },
                      !1,
                    )),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleNewMsgForChat: before updating chat table ",
                    "",
                  ])),
                e.id.toLogString(),
              ));
            try {
              yield o("WAWebDBUpdateChatTable").updateChatTable(e.id, n);
            } catch (t) {
              var a = yield o("WAWebSchemaChat")
                  .getChatTable()
                  .get(e.id.toString()),
                l = a != null;
              throw (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "handleNewMsgForChat: update chat table failed id=",
                        " exists=",
                        "",
                      ])),
                    e.id.toLogString(),
                    l,
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("handle-new-msg-cannot-update-chat"),
                t
              );
            }
            var s = babelHelpers.extends({}, n);
            try {
              var f;
              if (
                b() &&
                (o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                  o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                  t.viewMode,
                ) ||
                  ((f = o("WAWebInvisiblePlaceholderViewModeProcessor")
                    .InvisiblePlaceholderViewModeProcessor
                    .compatibleMessageTypes) != null &&
                    f.includes(t.type)) ||
                  o(
                    "WAWebViewModeUtils",
                  ).isOfflineResumeCallLogPlaceholderViewMode(t.viewMode))
              )
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "handleNewMsgForChat: updating UI immediatelly ",
                      "",
                    ])),
                  e.id.toLogString(),
                ),
                  (s.t = t.t),
                  (o("WAWebFrontendMsgGetters").getEventType(t) ===
                    o("WAWebCommonMsgUtils").EventType.AMBIENT ||
                    o("WAWebFrontendMsgGetters").getEventType(t) ===
                      o("WAWebCommonMsgUtils").EventType.DEFAULT) &&
                    !t.id.fromMe &&
                    t.read !== !0 &&
                    (o(
                      "WAWebViewModeUtils",
                    ).isOfflineResumeCallLogPlaceholderViewMode(t.viewMode)
                      ? (e.set({ unreadCount: e.unreadCount + 1 || 1 }),
                        e.activeUnreadCount > 0 &&
                          e.set({ activeUnreadCount: e.activeUnreadCount + 1 }))
                      : (i = !0)));
              else {
                var g = yield o("WAWebApiChat").getChatMeta(e.id),
                  h = g.timestamp,
                  y = g.unreadCount;
                ((s.unreadCount = y),
                  (s.t = h),
                  e.activeUnreadCount > 0 &&
                    (s.activeUnreadCount =
                      e.activeUnreadCount +
                      Number(
                        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                          t.viewMode,
                        ),
                      )));
              }
              s.unreadDividerOffset = 0;
            } catch (t) {
              var C = r("getErrorSafe")(t);
              if (
                (o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "onNewMsg: chat table metadata not found id=",
                        "",
                      ])),
                    e.id.toLogString(),
                  )
                  .catching(C),
                !v)
              ) {
                var S, R;
                v = !0;
                var L = yield o("WAWebSchemaChat")
                    .getChatTable()
                    .get(e.id.toString()),
                  E = e.accountLid
                    ? yield o("WAWebSchemaChat")
                        .getChatTable()
                        .get((S = e.accountLid) == null ? void 0 : S.toString())
                    : null;
                o("WAWebLidMigrationUtils").logLidMetadata();
                var k = L != null,
                  I = E != null;
                (o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "onNewMsg err chatId=",
                        " lid=",
                        " byId=",
                        " byLid=",
                        "",
                      ])),
                    e.id.toLogString(),
                    (R = e.accountLid) == null ? void 0 : R.toLogString(),
                    k,
                    I,
                  )
                  .tags("missing-lid"),
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "onNewMsg: chat table metadata not found id=",
                          "",
                        ])),
                      e.id.toLogString(),
                    )
                    .catching(C)
                    .sendLogs(
                      "onNewMsg: unable to find metadata from chat table",
                    ));
              }
            }
            return s;
          }),
        )
        .then(
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                if (
                  (i &&
                    ((n.unreadCount = e.unreadCount + 1 || 1),
                    e.activeUnreadCount > 0 &&
                      (n.activeUnreadCount = e.activeUnreadCount + 1)),
                  e.set(n),
                  t.ctwaContext != null &&
                    (o(
                      "WAWebCommonCTWAConsumerTransparency",
                    ).handleConsumerTransparencyForNewMsg({
                      chat: e,
                      conversionData: t.ctwaContext.conversionData,
                      conversionSource: t.ctwaContext.conversionSource,
                      ctwaSignals: t.ctwaContext.ctwaSignals,
                    }),
                    o(
                      "WAWebCommonCTWALogging",
                    ).maybeSetCtwaMessageReceivedInUserPreferenceStore(t)),
                  t.ctwaContext != null)
                ) {
                  var a = t.ctwaContext,
                    l = a.conversionData,
                    s = a.conversionDelaySeconds,
                    u = a.conversionSource,
                    c = a.ctwaSignals,
                    d = a.sourceId,
                    m =
                      s != null &&
                      s > 0 &&
                      o(
                        "WAWebCTWAGatingUtils",
                      ).isCtwaConversionCreationFromDelayEnabled()
                        ? s
                        : 0;
                  r("WAWebConversionTupleCollection").add(
                    {
                      conversionSource: u,
                      conversionData: l,
                      ctwaSignals: c,
                      sourceId: d,
                      id: e.id,
                      timestamp: o("WATimeUtils").unixTime() - m,
                      fromMe: t.id.fromMe,
                    },
                    { merge: !0 },
                  );
                }
                o(
                  "WAWebCtwaConversationDepthUtils",
                ).CTWA_CONVERSATION_COUNTER_MSG_TYPES.has(t.type) &&
                  o(
                    "WAWebCommonCTWADataSharing",
                  ).getReceivedCTWAEligibilityFromChat(e) &&
                  queueMicrotask(function () {
                    (o(
                      "WAWebCtwaConversationDepthUtils",
                    ).advanceCtwaConversationCounters(e, t.id.fromMe),
                      o(
                        "WAWebSmb3pdAggregatedConversionSignalAction",
                      ).log3pdAggregatedConversionSignal(
                        e,
                        "message",
                        "message",
                        t.id.fromMe
                          ? o("WAWebWamEnumCtwaDirectionFrom")
                              .CTWA_DIRECTION_FROM.BUSINESS
                          : o("WAWebWamEnumCtwaDirectionFrom")
                              .CTWA_DIRECTION_FROM.CUSTOMER,
                      ));
                  });
                var p = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                  _ = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                if (
                  t.type === "gp2" &&
                  (t.subtype === "add" || t.subtype === "create")
                ) {
                  var C = e.getGroupMetadataCollection(),
                    v =
                      p != null &&
                      !o(
                        "WAWebBeyondPhoneNumberGatingUtils",
                      ).removePnDependenciesEnabled()
                        ? p
                        : _;
                  C.trigger("group_participant_change_" + v.toString(), {
                    gid: e.id,
                  });
                }
                if (o("WAWebMsgGetters").getIsSentByMe(t)) {
                  if (e.unreadCount > 0 || e.markedUnread) {
                    var T,
                      D,
                      x = e.id.toString() === t.id.remote.toString();
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "selfmsg-unread: chat=",
                          " chatIsLid=",
                          " msgRemote=",
                          " msgIsLid=",
                          " sameKey=",
                          " unreadCount=",
                          " activeUnread=",
                          " markedUnread=",
                          " accountLid=",
                          "",
                        ])),
                      e.id.toLogString(),
                      e.id.isLid(),
                      t.id.remote.toLogString(),
                      t.id.remote.isLid(),
                      x,
                      e.unreadCount,
                      e.activeUnreadCount,
                      e.markedUnread,
                      (T =
                        (D = e.accountLid) == null
                          ? void 0
                          : D.toLogString()) != null
                        ? T
                        : "none",
                    );
                  }
                  e.activeUnreadCount > 0 &&
                    ((e.activeUnreadCount = 0), (e.markedUnread = !1));
                } else {
                  switch (o("WAWebFrontendMsgGetters").getEventType(t)) {
                    case o("WAWebCommonMsgUtils").EventType.DEFAULT:
                    case o("WAWebCommonMsgUtils").EventType.AMBIENT:
                      (o("WAWebFrontendMsgGetters").getEventType(t) ===
                        o("WAWebCommonMsgUtils").EventType.DEFAULT &&
                        o("WAWebCmd").Cmd.alertNewMsg(t),
                        e.msgs.length <
                          o("WAWebCollectionConstants").MSG_PRELOAD_THRESHOLD &&
                          !o("WAWebChatGetters").getIsNewsletter(e) &&
                          o("WAWebChatLoadMessages")
                            .loadEarlierMsgs({
                              chat: e,
                              trigger: o("WAWebWamEnumWebcQueryTriggerType")
                                .WEBC_QUERY_TRIGGER_TYPE.NEW_MESSAGE_PREFETCH,
                            })
                            .catch(
                              o("WAFilteredCatch").filteredCatch(
                                o("WAWebBackendErrors").E404,
                                r("WAWebNoop"),
                              ),
                            )
                            .catch(function (e) {
                              o("WALogger").LOG(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose(
                                    ["chat:onNewMsg failed\n", ""],
                                    ["chat:onNewMsg failed\\n", ""],
                                  )),
                                String(e),
                              );
                            }));
                      break;
                    case o("WAWebCommonMsgUtils").EventType.NOTEWORTHY:
                      ((t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                        !r("WAWebEnvironment").isWindows) ||
                        t.subtype === "sender_invite") &&
                        o("WAWebCmd").Cmd.alertNewMsg(t);
                      break;
                    case o("WAWebCommonMsgUtils").EventType.SIGNIFICANT: {
                      if (
                        t.type === "gp2" &&
                        t.subtype === "add" &&
                        o("WAWebUserPrefsMeUser").isMeAccount(
                          t.recipients[0],
                        ) &&
                        !e.contact.name
                      )
                        return;
                      o("WAWebCmd").Cmd.alertNewMsg(t);
                      var S = e.getGroupMetadataCollection(),
                        R =
                          p != null &&
                          !o(
                            "WAWebBeyondPhoneNumberGatingUtils",
                          ).removePnDependenciesEnabled()
                            ? p
                            : _;
                      S.trigger("group_participant_change_" + R.toString(), {
                        gid: e.id,
                      });
                      break;
                    }
                    default:
                      break;
                  }
                  var L = t.mediaData;
                  if (
                    (L &&
                      (L.type === "image" || L.type === "video") &&
                      o("WAWebCmd").Cmd.newMediaMsg(t),
                    n.unreadCount != null &&
                      n.unreadCount > 0 &&
                      !b() &&
                      o("WAWebHandleMsgReceiptCommon")
                        .processOrphanPeerReceipt(t.id)
                        .catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "[handleNewMsgForChat] processOrphanPeerReceipt failed for ",
                                  "",
                                ])),
                              t.id,
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs("orphan-peer-receipt-process-failed");
                        }),
                    o("WAWebMsgGetters").getIsImportantMessage(t))
                  ) {
                    var E,
                      k = new (r("WAWebUnreadMentionModel"))({
                        id: t.id.toString(),
                        timestamp: t.t,
                      });
                    if (
                      ((E = e.groupMetadata) == null ||
                        E.unreadMentionMetadata.addUnreadMentions(
                          k,
                          o("WAWebGroupUnreadMessageType").UnreadMessageType
                            .NEW_MESSAGE,
                        ),
                      e.archiveAtMentionViewedInDrawer)
                    ) {
                      var I = new Map();
                      (I.set(e.id.toString(), !1),
                        o("WALogger").LOG(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "handleNewMsgForChat: will mark chat for archive",
                            ])),
                        ),
                        yield o("WAWebApiChat").updateChatArchiveDrawer(I),
                        (e.archiveAtMentionViewedInDrawer = !1));
                    }
                  }
                }
                (o(
                  "WAWebMmSignalSharingLoggingEvents",
                ).logMmSignalSharingNewMessageEvent({ chat: e, newMsg: t }),
                  o(
                    "WAWebRichOrderStatusLogger",
                  ).logRichOrderStatusInconsistencies(t));
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
    }
    l.handleNewMsgForChat = R;
  },
  98,
);
