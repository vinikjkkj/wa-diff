__d(
  "WAWebHandleNewMsgAction",
  [
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChat",
    "WAWebBackendErrors",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebChangePresenceHandlerAction",
    "WAWebChatGetters",
    "WAWebChatLoadMessages",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebCommonCTWALogging",
    "WAWebCommonMsgUtils",
    "WAWebConversionTupleCollection",
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
    "WAWebUnreadMentionModel",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumWebcQueryTriggerType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h() {
      return !o("WAWebCmd").Cmd.isOfflineDeliveryEnd;
    }
    var y = !1;
    function C(t, n) {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleNewMsgForChat chatId: ",
              " type: ",
              ", sub type: ",
              "",
            ])),
          t.id.toLogString(),
          n.type,
          n.subtype,
        ),
        (o("WAWebChatGetters").getIsNewsletter(t) &&
          !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) ||
          !n)
      )
        return Promise.resolve();
      var a = Promise.resolve();
      return (
        o("WAWebMsgGetters").getIsSentByMe(n) &&
          !t.notSpam &&
          !o("WAWebChatGetters").getIsNewsletter(t) &&
          (a = r("WAWebSendNotSpamAction")(t, !1)),
        o("WAWebFrontendMsgGetters").getEventType(n) ===
        o("WAWebCommonMsgUtils").EventType.IGNORE
          ? Promise.resolve()
          : a
              .then(async function () {
                var e = {};
                (t.promises.updateSortTime &&
                  t.promises.updateSortTime.abortController.abort(),
                  o("WAWebMsgGetters").getIsSentByMeFromWeb(n) &&
                    t.archive &&
                    o("WAWebSetArchiveChatActionUtils").shouldUnarchiveChat(
                      o("WAWebMsgGetters").getIsSentByMe(n),
                    ) &&
                    (e.archive = !1),
                  t.promises.setArchive &&
                    t.promises.setArchive.abortController.abort(),
                  !o("WAWebChatGetters").getIsNewsletter(t) &&
                    n.subtype !==
                      o("WAWebBotGenTypingIndicatorMsg")
                        .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                    (o("WAWebMsgGetters").getIsSentByMe(n)
                      ? (t.markedUnread = !1)
                      : r("WAWebChangePresenceHandlerAction")(
                          { id: t.id, participant: n.author, type: "idle" },
                          !1,
                        )),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleNewMsgForChat: before updating chat table ",
                        "",
                      ])),
                    t.id.toLogString(),
                  ));
                try {
                  await o("WAWebDBUpdateChatTable").updateChatTable(t.id, e);
                } catch (e) {
                  var a = await o("WAWebSchemaChat")
                      .getChatTable()
                      .get(t.id.toString()),
                    i = a != null;
                  throw (
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "handleNewMsgForChat: update chat table failed id=",
                            " exists=",
                            "",
                          ])),
                        t.id.toLogString(),
                        i,
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("handle-new-msg-cannot-update-chat"),
                    e
                  );
                }
                var l = babelHelpers.extends({}, e);
                try {
                  var _;
                  if (
                    h() &&
                    (o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                      o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                      n.viewMode,
                    ) ||
                      ((_ = o("WAWebInvisiblePlaceholderViewModeProcessor")
                        .InvisiblePlaceholderViewModeProcessor
                        .compatibleMessageTypes) != null &&
                        _.includes(n.type)) ||
                      o(
                        "WAWebViewModeUtils",
                      ).isOfflineResumeCallLogPlaceholderViewMode(n.viewMode))
                  ) {
                    if (
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "handleNewMsgForChat: updating UI immediatelly ",
                            "",
                          ])),
                        t.id.toLogString(),
                      ),
                      (l.t = n.t),
                      (o("WAWebFrontendMsgGetters").getEventType(n) ===
                        o("WAWebCommonMsgUtils").EventType.AMBIENT ||
                        o("WAWebFrontendMsgGetters").getEventType(n) ===
                          o("WAWebCommonMsgUtils").EventType.DEFAULT) &&
                        !n.id.fromMe &&
                        n.read !== !0)
                    )
                      if (
                        o("WAWebABProps").getABPropConfigValue(
                          "web_calling_offline_resume_ordering",
                        )
                      ) {
                        var f;
                        (t.set({
                          unreadCount:
                            ((f = t.unreadCount) != null ? f : 0) + 1,
                        }),
                          t.activeUnreadCount > 0 &&
                            t.set({
                              activeUnreadCount: t.activeUnreadCount + 1,
                            }));
                      } else
                        ((l.unreadCount = t.unreadCount + 1 || 1),
                          t.activeUnreadCount > 0 &&
                            (l.activeUnreadCount = t.activeUnreadCount + 1));
                  } else {
                    var g = await o("WAWebApiChat").getChatMeta(t.id),
                      C = g.timestamp,
                      b = g.unreadCount;
                    ((l.unreadCount = b),
                      (l.t = C),
                      t.activeUnreadCount > 0 &&
                        (l.activeUnreadCount =
                          t.activeUnreadCount +
                          Number(
                            o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                              n.viewMode,
                            ),
                          )));
                  }
                  l.unreadDividerOffset = 0;
                } catch (e) {
                  var v = r("getErrorSafe")(e);
                  if (
                    (o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "onNewMsg: chat table metadata not found id=",
                            "",
                          ])),
                        t.id.toLogString(),
                      )
                      .catching(v),
                    !y)
                  ) {
                    var S, R;
                    y = !0;
                    var L = await o("WAWebSchemaChat")
                        .getChatTable()
                        .get(t.id.toString()),
                      E = t.accountLid
                        ? await o("WAWebSchemaChat")
                            .getChatTable()
                            .get(
                              (S = t.accountLid) == null
                                ? void 0
                                : S.toString(),
                            )
                        : null;
                    o("WAWebLidMigrationUtils").logLidMetadata();
                    var k = L != null,
                      I = E != null;
                    (o("WALogger")
                      .LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "onNewMsg err chatId=",
                            " lid=",
                            " byId=",
                            " byLid=",
                            "",
                          ])),
                        t.id.toLogString(),
                        (R = t.accountLid) == null ? void 0 : R.toLogString(),
                        k,
                        I,
                      )
                      .tags("missing-lid"),
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "onNewMsg: chat table metadata not found id=",
                              "",
                            ])),
                          t.id.toLogString(),
                        )
                        .catching(v)
                        .sendLogs(
                          "onNewMsg: unable to find metadata from chat table",
                        ));
                  }
                }
                return l;
              })
              .then(async function (e) {
                if (
                  (t.set(e),
                  n.ctwaContext != null &&
                    (o(
                      "WAWebCommonCTWAConsumerTransparency",
                    ).handleConsumerTransparencyForNewMsg(
                      t,
                      n.ctwaContext.conversionData,
                      n.ctwaContext.conversionSource,
                    ),
                    o(
                      "WAWebCommonCTWALogging",
                    ).maybeSetCtwaMessageReceivedInUserPreferenceStore(n)),
                  n.ctwaContext != null)
                ) {
                  var a = n.ctwaContext,
                    i = a.conversionData,
                    l = a.conversionSource;
                  r("WAWebConversionTupleCollection").add(
                    {
                      conversionSource: l,
                      conversionData: i,
                      id: t.id,
                      timestamp: o("WATimeUtils").unixTime(),
                      fromMe: n.id.fromMe,
                    },
                    { merge: !0 },
                  );
                }
                var s = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                  u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                if (
                  n.type === "gp2" &&
                  (n.subtype === "add" || n.subtype === "create")
                ) {
                  var c = t.getGroupMetadataCollection(),
                    d =
                      s != null &&
                      !o(
                        "WAWebBeyondPhoneNumberGatingUtils",
                      ).removePnDependenciesEnabled()
                        ? s
                        : u;
                  c.trigger("group_participant_change_" + d.toString(), {
                    gid: t.id,
                  });
                }
                if (o("WAWebMsgGetters").getIsSentByMe(n))
                  t.activeUnreadCount > 0 &&
                    ((t.activeUnreadCount = 0), (t.markedUnread = !1));
                else {
                  switch (o("WAWebFrontendMsgGetters").getEventType(n)) {
                    case o("WAWebCommonMsgUtils").EventType.DEFAULT:
                    case o("WAWebCommonMsgUtils").EventType.AMBIENT:
                      (o("WAWebFrontendMsgGetters").getEventType(n) ===
                        o("WAWebCommonMsgUtils").EventType.DEFAULT &&
                        o("WAWebCmd").Cmd.alertNewMsg(n),
                        t.msgs.length <
                          o("WAWebCollectionConstants").MSG_PRELOAD_THRESHOLD &&
                          !o("WAWebChatGetters").getIsNewsletter(t) &&
                          o("WAWebChatLoadMessages")
                            .loadEarlierMsgs({
                              chat: t,
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
                                _ ||
                                  (_ = babelHelpers.taggedTemplateLiteralLoose(
                                    [
                                      `chat:onNewMsg failed
`,
                                      "",
                                    ],
                                    ["chat:onNewMsg failed\\n", ""],
                                  )),
                                String(e),
                              );
                            }));
                      break;
                    case o("WAWebCommonMsgUtils").EventType.NOTEWORTHY:
                      ((n.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                        !r("WAWebEnvironment").isWindows) ||
                        n.subtype === "sender_invite") &&
                        o("WAWebCmd").Cmd.alertNewMsg(n);
                      break;
                    case o("WAWebCommonMsgUtils").EventType.SIGNIFICANT: {
                      if (
                        n.type === "gp2" &&
                        n.subtype === "add" &&
                        o("WAWebUserPrefsMeUser").isMeAccount(
                          n.recipients[0],
                        ) &&
                        !t.contact.name
                      )
                        return;
                      o("WAWebCmd").Cmd.alertNewMsg(n);
                      var m = t.getGroupMetadataCollection(),
                        p =
                          s != null &&
                          !o(
                            "WAWebBeyondPhoneNumberGatingUtils",
                          ).removePnDependenciesEnabled()
                            ? s
                            : u;
                      m.trigger("group_participant_change_" + p.toString(), {
                        gid: t.id,
                      });
                      break;
                    }
                    default:
                      break;
                  }
                  var y = n.mediaData;
                  if (
                    (y &&
                      (y.type === "image" || y.type === "video") &&
                      o("WAWebCmd").Cmd.newMediaMsg(n),
                    e.unreadCount != null &&
                      e.unreadCount > 0 &&
                      !h() &&
                      o("WAWebHandleMsgReceiptCommon")
                        .processOrphanPeerReceipt(n.id)
                        .catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
                                  "[handleNewMsgForChat] processOrphanPeerReceipt failed for ",
                                  "",
                                ])),
                              n.id,
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs("orphan-peer-receipt-process-failed");
                        }),
                    o("WAWebMsgGetters").getIsImportantMessage(n))
                  ) {
                    var C,
                      b = new (r("WAWebUnreadMentionModel"))({
                        id: n.id.toString(),
                        timestamp: n.t,
                      });
                    if (
                      ((C = t.groupMetadata) == null ||
                        C.unreadMentionMetadata.addUnreadMentions(
                          b,
                          o("WAWebGroupUnreadMessageType").UnreadMessageType
                            .NEW_MESSAGE,
                        ),
                      t.archiveAtMentionViewedInDrawer)
                    ) {
                      var v = new Map();
                      (v.set(t.id.toString(), !1),
                        o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "handleNewMsgForChat: will mark chat for archive",
                            ])),
                        ),
                        await o("WAWebApiChat").updateChatArchiveDrawer(v),
                        (t.archiveAtMentionViewedInDrawer = !1));
                    }
                  }
                }
                (o(
                  "WAWebMmSignalSharingLoggingEvents",
                ).logMmSignalSharingNewMessageEvent({ chat: t, newMsg: n }),
                  o(
                    "WAWebRichOrderStatusLogger",
                  ).logRichOrderStatusInconsistencies(n));
              })
      );
    }
    l.handleNewMsgForChat = C;
  },
  98,
);
