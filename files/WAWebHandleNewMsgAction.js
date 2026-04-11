__d(
  "WAWebHandleNewMsgAction",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h() {
      return !o("WAWebCmd").Cmd.isOfflineDeliveryEnd;
    }
    var y = !1;
    function C(t, a) {
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
          a.type,
          a.subtype,
        ),
        (o("WAWebChatGetters").getIsNewsletter(t) &&
          !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) ||
          !a)
      )
        return (g || (g = n("Promise"))).resolve();
      var i = (g || (g = n("Promise"))).resolve();
      return (
        o("WAWebMsgGetters").getIsSentByMe(a) &&
          !t.notSpam &&
          !o("WAWebChatGetters").getIsNewsletter(t) &&
          (i = r("WAWebSendNotSpamAction")(t, !1)),
        o("WAWebFrontendMsgGetters").getEventType(a) ===
        o("WAWebCommonMsgUtils").EventType.IGNORE
          ? (g || (g = n("Promise"))).resolve()
          : i
              .then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e = {};
                  (t.promises.updateSortTime &&
                    t.promises.updateSortTime.abortController.abort(),
                    o("WAWebMsgGetters").getIsSentByMeFromWeb(a) &&
                      t.archive &&
                      o("WAWebSetArchiveChatActionUtils").shouldUnarchiveChat(
                        o("WAWebMsgGetters").getIsSentByMe(a),
                      ) &&
                      (e.archive = !1),
                    t.promises.setArchive &&
                      t.promises.setArchive.abortController.abort(),
                    !o("WAWebChatGetters").getIsNewsletter(t) &&
                      a.subtype !==
                        o("WAWebBotGenTypingIndicatorMsg")
                          .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                      (o("WAWebMsgGetters").getIsSentByMe(a)
                        ? (t.markedUnread = !1)
                        : r("WAWebChangePresenceHandlerAction")(
                            { id: t.id, participant: a.author, type: "idle" },
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
                    yield o("WAWebDBUpdateChatTable").updateChatTable(t.id, e);
                  } catch (e) {
                    var n = yield o("WAWebSchemaChat")
                        .getChatTable()
                        .get(t.id.toString()),
                      i = n != null;
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
                        a.viewMode,
                      ) ||
                        ((_ = o("WAWebInvisiblePlaceholderViewModeProcessor")
                          .InvisiblePlaceholderViewModeProcessor
                          .compatibleMessageTypes) != null &&
                          _.includes(a.type)))
                    )
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "handleNewMsgForChat: updating UI immediatelly ",
                            "",
                          ])),
                        t.id.toLogString(),
                      ),
                        (l.t = a.t),
                        (o("WAWebFrontendMsgGetters").getEventType(a) ===
                          o("WAWebCommonMsgUtils").EventType.AMBIENT ||
                          o("WAWebFrontendMsgGetters").getEventType(a) ===
                            o("WAWebCommonMsgUtils").EventType.DEFAULT) &&
                          !a.id.fromMe &&
                          a.read !== !0 &&
                          ((l.unreadCount = t.unreadCount + 1 || 1),
                          t.activeUnreadCount > 0 &&
                            (l.activeUnreadCount = t.activeUnreadCount + 1)));
                    else {
                      var f = yield o("WAWebApiChat").getChatMeta(t.id),
                        g = f.timestamp,
                        C = f.unreadCount;
                      ((l.unreadCount = C),
                        (l.t = g),
                        t.activeUnreadCount > 0 &&
                          (l.activeUnreadCount =
                            t.activeUnreadCount +
                            Number(
                              o(
                                "WAWebViewModeUtils",
                              ).isViewModeVisibleInSurface(
                                o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                                a.viewMode,
                              ),
                            )));
                    }
                    l.unreadDividerOffset = 0;
                  } catch (e) {
                    var b = r("getErrorSafe")(e);
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
                        .catching(b),
                      !y)
                    ) {
                      var v, S;
                      y = !0;
                      var R = yield o("WAWebSchemaChat")
                          .getChatTable()
                          .get(t.id.toString()),
                        L = t.accountLid
                          ? yield o("WAWebSchemaChat")
                              .getChatTable()
                              .get(
                                (v = t.accountLid) == null
                                  ? void 0
                                  : v.toString(),
                              )
                          : null;
                      o("WAWebLidMigrationUtils").logLidMetadata();
                      var E = R != null,
                        k = L != null;
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
                          (S = t.accountLid) == null ? void 0 : S.toLogString(),
                          E,
                          k,
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
                          .catching(b)
                          .sendLogs(
                            "onNewMsg: unable to find metadata from chat table",
                          ));
                    }
                  }
                  return l;
                }),
              )
              .then(function (e) {
                (t.set(e),
                  a.ctwaContext != null &&
                    (o(
                      "WAWebCommonCTWAConsumerTransparency",
                    ).handleConsumerTransparencyForNewMsg(
                      t,
                      a.ctwaContext.conversionData,
                      a.ctwaContext.conversionSource,
                    ),
                    o(
                      "WAWebCommonCTWALogging",
                    ).maybeSetCtwaMessageReceivedInUserPreferenceStore(a)));
                var n = r("WAWebConversionTupleCollection").get(t.id);
                if (n && a.ctwaContext != null)
                  n.timestamp = o("WATimeUtils").unixTime();
                else if (a.ctwaContext != null) {
                  var i = a.ctwaContext,
                    l = i.conversionData,
                    s = i.conversionSource;
                  r("WAWebConversionTupleCollection").add(
                    {
                      conversionSource: s,
                      conversionData: l,
                      id: t.id,
                      timestamp: o("WATimeUtils").unixTime(),
                    },
                    { merge: !0 },
                  );
                }
                var u = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                  c = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                if (
                  a.type === "gp2" &&
                  (a.subtype === "add" || a.subtype === "create")
                ) {
                  var d = t.getGroupMetadataCollection(),
                    m =
                      u != null &&
                      !o(
                        "WAWebBeyondPhoneNumberGatingUtils",
                      ).removePnDependenciesEnabled()
                        ? u
                        : c;
                  d.trigger("group_participant_change_" + m.toString(), {
                    gid: t.id,
                  });
                }
                if (o("WAWebMsgGetters").getIsSentByMe(a))
                  t.activeUnreadCount > 0 &&
                    ((t.activeUnreadCount = 0), (t.markedUnread = !1));
                else {
                  switch (o("WAWebFrontendMsgGetters").getEventType(a)) {
                    case o("WAWebCommonMsgUtils").EventType.DEFAULT:
                    case o("WAWebCommonMsgUtils").EventType.AMBIENT:
                      (o("WAWebFrontendMsgGetters").getEventType(a) ===
                        o("WAWebCommonMsgUtils").EventType.DEFAULT &&
                        o("WAWebCmd").Cmd.alertNewMsg(a),
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
                                    ["chat:onNewMsg failed\n", ""],
                                    ["chat:onNewMsg failed\\n", ""],
                                  )),
                                e,
                              );
                            }));
                      break;
                    case o("WAWebCommonMsgUtils").EventType.NOTEWORTHY:
                      ((a.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
                        !r("WAWebEnvironment").isWindows) ||
                        a.subtype === "sender_invite") &&
                        o("WAWebCmd").Cmd.alertNewMsg(a);
                      break;
                    case o("WAWebCommonMsgUtils").EventType.SIGNIFICANT: {
                      if (
                        a.type === "gp2" &&
                        a.subtype === "add" &&
                        o("WAWebUserPrefsMeUser").isMeAccount(
                          a.recipients[0],
                        ) &&
                        !t.contact.name
                      )
                        return;
                      o("WAWebCmd").Cmd.alertNewMsg(a);
                      var p = t.getGroupMetadataCollection(),
                        g =
                          u != null &&
                          !o(
                            "WAWebBeyondPhoneNumberGatingUtils",
                          ).removePnDependenciesEnabled()
                            ? u
                            : c;
                      p.trigger("group_participant_change_" + g.toString(), {
                        gid: t.id,
                      });
                      break;
                    }
                    default:
                      break;
                  }
                  var y = a.mediaData;
                  if (
                    (y &&
                      (y.type === "image" || y.type === "video") &&
                      o("WAWebCmd").Cmd.newMediaMsg(a),
                    e.unreadCount != null &&
                      e.unreadCount > 0 &&
                      !h() &&
                      o("WAWebHandleMsgReceiptCommon").processOrphanPeerReceipt(
                        a.id,
                      ),
                    o("WAWebMsgGetters").getIsImportantMessage(a))
                  ) {
                    var C,
                      b = new (r("WAWebUnreadMentionModel"))({
                        id: a.id.toString(),
                        timestamp: a.t,
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
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "handleNewMsgForChat: will mark chat for archive",
                            ])),
                        ),
                        o("WAWebApiChat").updateChatArchiveDrawer(v),
                        (t.archiveAtMentionViewedInDrawer = !1));
                    }
                  }
                }
                (o(
                  "WAWebMmSignalSharingLoggingEvents",
                ).logMmSignalSharingNewMessageEvent({ chat: t, newMsg: a }),
                  o(
                    "WAWebRichOrderStatusLogger",
                  ).logRichOrderStatusInconsistencies(a));
              })
      );
    }
    l.handleNewMsgForChat = C;
  },
  98,
);
