__d(
  "WAWebHandleNewMsgAction",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAfterReadUtils",
    "WAWebApiChat",
    "WAWebBackendErrors",
    "WAWebBeyondPhoneNumberGatingUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebChangePresenceHandlerAction",
    "WAWebChatEphemerality",
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
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C() {
      return !o("WAWebCmd").Cmd.isOfflineDeliveryEnd;
    }
    var b = !1;
    function v(t, n) {
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
    function S(e, t) {
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
        v(e, t),
        (o("WAWebChatGetters").getIsNewsletter(e) &&
          !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) ||
          !t)
      )
        return (y || (y = n("Promise"))).resolve();
      var a = (y || (y = n("Promise"))).resolve();
      return (
        o("WAWebMsgGetters").getIsSentByMe(t) &&
          !e.notSpam &&
          !o("WAWebChatGetters").getIsNewsletter(e) &&
          (a = r("WAWebSendNotSpamAction")(e, !1)),
        o("WAWebFrontendMsgGetters").getEventType(t) ===
        o("WAWebCommonMsgUtils").EventType.IGNORE
          ? (y || (y = n("Promise"))).resolve()
          : a
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
                      i = a != null;
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
                          i,
                        )
                        .catching(r("getErrorSafe")(t))
                        .sendLogs("handle-new-msg-cannot-update-chat"),
                      t
                    );
                  }
                  var l = babelHelpers.extends({}, n);
                  try {
                    var s;
                    if (
                      C() &&
                      (o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                        o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                        t.viewMode,
                      ) ||
                        ((s = o("WAWebInvisiblePlaceholderViewModeProcessor")
                          .InvisiblePlaceholderViewModeProcessor
                          .compatibleMessageTypes) != null &&
                          s.includes(t.type)) ||
                        o(
                          "WAWebViewModeUtils",
                        ).isOfflineResumeCallLogPlaceholderViewMode(t.viewMode))
                    ) {
                      if (
                        (o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "handleNewMsgForChat: updating UI immediatelly ",
                              "",
                            ])),
                          e.id.toLogString(),
                        ),
                        (l.t = t.t),
                        (o("WAWebFrontendMsgGetters").getEventType(t) ===
                          o("WAWebCommonMsgUtils").EventType.AMBIENT ||
                          o("WAWebFrontendMsgGetters").getEventType(t) ===
                            o("WAWebCommonMsgUtils").EventType.DEFAULT) &&
                          !t.id.fromMe &&
                          t.read !== !0)
                      )
                        if (
                          o("WAWebABProps").getABPropConfigValue(
                            "web_calling_offline_resume_ordering",
                          )
                        ) {
                          var f;
                          (e.set({
                            unreadCount:
                              ((f = e.unreadCount) != null ? f : 0) + 1,
                          }),
                            e.activeUnreadCount > 0 &&
                              e.set({
                                activeUnreadCount: e.activeUnreadCount + 1,
                              }));
                        } else
                          ((l.unreadCount = e.unreadCount + 1 || 1),
                            e.activeUnreadCount > 0 &&
                              (l.activeUnreadCount = e.activeUnreadCount + 1));
                    } else {
                      var g = yield o("WAWebApiChat").getChatMeta(e.id),
                        h = g.timestamp,
                        y = g.unreadCount;
                      ((l.unreadCount = y),
                        (l.t = h),
                        e.activeUnreadCount > 0 &&
                          (l.activeUnreadCount =
                            e.activeUnreadCount +
                            Number(
                              o(
                                "WAWebViewModeUtils",
                              ).isViewModeVisibleInSurface(
                                o("WAWebViewMode.flow").ViewModeSurface.CHAT,
                                t.viewMode,
                              ),
                            )));
                    }
                    l.unreadDividerOffset = 0;
                  } catch (t) {
                    var v = r("getErrorSafe")(t);
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
                        .catching(v),
                      !b)
                    ) {
                      var S, R;
                      b = !0;
                      var L = yield o("WAWebSchemaChat")
                          .getChatTable()
                          .get(e.id.toString()),
                        E = e.accountLid
                          ? yield o("WAWebSchemaChat")
                              .getChatTable()
                              .get(
                                (S = e.accountLid) == null
                                  ? void 0
                                  : S.toString(),
                              )
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
                          .catching(v)
                          .sendLogs(
                            "onNewMsg: unable to find metadata from chat table",
                          ));
                    }
                  }
                  return l;
                }),
              )
              .then(
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      if (
                        (e.set(n),
                        t.ctwaContext != null &&
                          (o(
                            "WAWebCommonCTWAConsumerTransparency",
                          ).handleConsumerTransparencyForNewMsg(
                            e,
                            t.ctwaContext.conversionData,
                            t.ctwaContext.conversionSource,
                          ),
                          o(
                            "WAWebCommonCTWALogging",
                          ).maybeSetCtwaMessageReceivedInUserPreferenceStore(
                            t,
                          )),
                        t.ctwaContext != null)
                      ) {
                        var a = t.ctwaContext,
                          i = a.conversionData,
                          l = a.conversionSource;
                        r("WAWebConversionTupleCollection").add(
                          {
                            conversionSource: l,
                            conversionData: i,
                            id: e.id,
                            timestamp: o("WATimeUtils").unixTime(),
                            fromMe: t.id.fromMe,
                          },
                          { merge: !0 },
                        );
                      }
                      var s = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                        u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                      if (
                        t.type === "gp2" &&
                        (t.subtype === "add" || t.subtype === "create")
                      ) {
                        var c = e.getGroupMetadataCollection(),
                          d =
                            s != null &&
                            !o(
                              "WAWebBeyondPhoneNumberGatingUtils",
                            ).removePnDependenciesEnabled()
                              ? s
                              : u;
                        c.trigger("group_participant_change_" + d.toString(), {
                          gid: e.id,
                        });
                      }
                      if (o("WAWebMsgGetters").getIsSentByMe(t))
                        e.activeUnreadCount > 0 &&
                          ((e.activeUnreadCount = 0), (e.markedUnread = !1));
                      else {
                        switch (o("WAWebFrontendMsgGetters").getEventType(t)) {
                          case o("WAWebCommonMsgUtils").EventType.DEFAULT:
                          case o("WAWebCommonMsgUtils").EventType.AMBIENT:
                            (o("WAWebFrontendMsgGetters").getEventType(t) ===
                              o("WAWebCommonMsgUtils").EventType.DEFAULT &&
                              o("WAWebCmd").Cmd.alertNewMsg(t),
                              e.msgs.length <
                                o("WAWebCollectionConstants")
                                  .MSG_PRELOAD_THRESHOLD &&
                                !o("WAWebChatGetters").getIsNewsletter(e) &&
                                o("WAWebChatLoadMessages")
                                  .loadEarlierMsgs({
                                    chat: e,
                                    trigger: o(
                                      "WAWebWamEnumWebcQueryTriggerType",
                                    ).WEBC_QUERY_TRIGGER_TYPE
                                      .NEW_MESSAGE_PREFETCH,
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
                                        (f =
                                          babelHelpers.taggedTemplateLiteralLoose(
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
                            var m = e.getGroupMetadataCollection(),
                              p =
                                s != null &&
                                !o(
                                  "WAWebBeyondPhoneNumberGatingUtils",
                                ).removePnDependenciesEnabled()
                                  ? s
                                  : u;
                            m.trigger(
                              "group_participant_change_" + p.toString(),
                              { gid: e.id },
                            );
                            break;
                          }
                          default:
                            break;
                        }
                        var _ = t.mediaData;
                        if (
                          (_ &&
                            (_.type === "image" || _.type === "video") &&
                            o("WAWebCmd").Cmd.newMediaMsg(t),
                          n.unreadCount != null &&
                            n.unreadCount > 0 &&
                            !C() &&
                            o("WAWebHandleMsgReceiptCommon")
                              .processOrphanPeerReceipt(t.id)
                              .catch(function (e) {
                                o("WALogger")
                                  .ERROR(
                                    g ||
                                      (g =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[handleNewMsgForChat] processOrphanPeerReceipt failed for ",
                                            "",
                                          ],
                                        )),
                                    t.id,
                                  )
                                  .catching(r("getErrorSafe")(e))
                                  .sendLogs(
                                    "orphan-peer-receipt-process-failed",
                                  );
                              }),
                          o("WAWebMsgGetters").getIsImportantMessage(t))
                        ) {
                          var y,
                            b = new (r("WAWebUnreadMentionModel"))({
                              id: t.id.toString(),
                              timestamp: t.t,
                            });
                          if (
                            ((y = e.groupMetadata) == null ||
                              y.unreadMentionMetadata.addUnreadMentions(
                                b,
                                o("WAWebGroupUnreadMessageType")
                                  .UnreadMessageType.NEW_MESSAGE,
                              ),
                            e.archiveAtMentionViewedInDrawer)
                          ) {
                            var v = new Map();
                            (v.set(e.id.toString(), !1),
                              o("WALogger").LOG(
                                h ||
                                  (h = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleNewMsgForChat: will mark chat for archive",
                                  ])),
                              ),
                              yield o("WAWebApiChat").updateChatArchiveDrawer(
                                v,
                              ),
                              (e.archiveAtMentionViewedInDrawer = !1));
                          }
                        }
                      }
                      (o(
                        "WAWebMmSignalSharingLoggingEvents",
                      ).logMmSignalSharingNewMessageEvent({
                        chat: e,
                        newMsg: t,
                      }),
                        o(
                          "WAWebRichOrderStatusLogger",
                        ).logRichOrderStatusInconsistencies(t));
                    },
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })(),
              )
      );
    }
    l.handleNewMsgForChat = S;
  },
  98,
);
