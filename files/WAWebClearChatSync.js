__d(
  "WAWebClearChatSync",
  [
    "WALogger",
    "WALongInt",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebBackendApi",
    "WAWebChatCollection",
    "WAWebChatConstants",
    "WAWebDBMessageRange",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDBReportingTokenUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebMessageRangeUtils",
    "WAWebMsgKey",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebReactionUiService",
    "WAWebRequestDeleteAddOns",
    "WAWebSchemaChat",
    "WAWebStatusCollection",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdMetricFatalError",
    "WAWebThreadMetadataJob",
    "WAWebUiRuntime",
    "WAWebWamEnumMdFeatureCode",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "countWhere",
    "decodeProtobuf",
    "encodeProtobuf",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName =
              o("WAWebSyncdConst").CollectionName.RegularHigh),
            (e.chatJidIndex = 1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getMessageRange = function (t) {
            var e;
            return (e = t.clearChatAction) == null ? void 0 : e.messageRange;
          }),
          (a.getVersion = function () {
            return 6;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.ClearChat;
          }),
          (a.$ClearChatSync$p_1 = function (t, n, a, i) {
            var e = new Set();
            return (
              t.forEach(function (t) {
                if (
                  t.actionName === o("WAWebSyncdConst").Actions.Star &&
                  t.timestamp > n
                ) {
                  var l = o(
                    "WAWebSyncdIndexUtils",
                  ).getMsgKeyFromStarActionIndex(t.index);
                  (e.add(l.toString()),
                    i != null &&
                      l.remote.equals(i) &&
                      e.add(
                        new (r("WAWebMsgKey"))({
                          fromMe: l.fromMe,
                          id: l.id,
                          remote: a,
                        }).toString(),
                      ));
                }
              }),
              e
            );
          }),
          (a.applyMutations = async function (n, a) {
            var t = this;
            r(
              "WAWebAndroidUnsupportedActionsSync",
            ).updatePrimaryAllowsAllMutationsFlag("other mutation");
            var i = a.allSupportedSetMutations,
              l = 0,
              d = 0,
              m = await Promise.all(
                n.map(async function (n) {
                  try {
                    if (n.operation === "set") {
                      var a = n.indexParts,
                        s = n.value,
                        u = a[1],
                        c = a[2],
                        m = a[3];
                      if (!u || !c || !m || !r("WAWebWid").isWid(u))
                        return t.malformedActionIndex();
                      var p = o("WAWebMessageRangeUtils").validateMessageRange(
                        t.getMessageRange(s),
                        t.collectionName,
                        t.getAction(),
                      );
                      if (p == null)
                        return (
                          l++,
                          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                              .MALFORMED_MUTATION_CLEAR_CHAT,
                            { collection: t.collectionName },
                          ),
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var _ = await o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(u),
                      );
                      if (!_.success)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: _.orphanModel,
                        };
                      var f = o("WAWebWidFactory").createWid(_.chat.id),
                        g = o(
                          "WAWebMessageRangeUtils",
                        ).replaceMessageRangeRemoteJid(f, p),
                        h = t.$ClearChatSync$p_1(
                          i,
                          n.timestamp,
                          f,
                          _.chat.accountLid == null
                            ? null
                            : o("WAWebWidFactory").createWid(_.chat.accountLid),
                        );
                      return t.$ClearChatSync$p_2({
                        chatWid: o("WAWebWidFactory").createWid(_.chat.id),
                        deleteMediaFiles: m === "0",
                        deleteStarredMessages: c === "1",
                        incomingRange: g,
                        messagesToBeSkippedFromClear: h,
                        syncActionValue: s,
                      });
                    }
                    return (
                      d++,
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (n) {
                    return (
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd][clear-chat]: failed to apply mutation: ",
                            "",
                          ])),
                        n,
                      ),
                      o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                        o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                          .FAILED_MUTATION_CLEAR_CHAT,
                        { collection: t.collectionName },
                      ),
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Failed,
                      }
                    );
                  }
                }),
              ),
              p = r("countWhere")(m, function (e) {
                return (
                  e.actionState === o("WAWebSyncdConst").SyncActionState.Success
                );
              });
            return (
              p > 0 &&
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][clear-chat]: updated chat table for ",
                      " mutations",
                    ])),
                  p,
                ),
              l > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][clear-chat]: ",
                      " malformed mutations",
                    ])),
                  l,
                ),
              d > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][clear-chat]: ",
                      " REMOVE operations not supported",
                    ])),
                  d,
                ),
              m
            );
          }),
          (a.clearChat = async function (t, n, r, a) {
            var e = !1;
            try {
              await this.$ClearChatSync$p_3(
                t,
                n,
                r,
                function () {
                  e = !0;
                },
                a,
              );
            } finally {
              e &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "chatHistoryCleared",
                  { chatId: t.toString() },
                );
            }
          }),
          (a.$ClearChatSync$p_3 = async function (t, n, r, a, i) {
            var e = await o(
              "WAWebDBQueryAndRemoveMessageHistory",
            ).queryAndRemoveMessagesInMessageRange(t, n, {
              skipStarred: !r,
              skipMessages: i,
              deleteAutomatedGreetingMessages: !0,
              skipScheduledMessages: !0,
            });
            (e.length > 0 && a(),
              await o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
                o("WAWebWidToJid").widToChatJid(t),
              ),
              await o("WAWebSchemaChat")
                .getChatTable()
                .merge(t.toString(), {
                  createdLocally: !1,
                  endOfHistoryTransferType:
                    o("WAWebChatConstants")
                      .ConversationEndOfHistoryTransferModelPropType
                      .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY,
                }),
              e.length > 0 &&
                (o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(e, {
                  removeWholeRow: !0,
                }),
                o("WAWebUiRuntime").isWebDiUiEnabled()
                  ? o("WAWebUiRuntime")
                      .uiRuntime(o("WAWebReactionUiService").ReactionUiService)
                      .deleteModelsForLastAddOnPreview(e)
                  : o("WAWebBackendApi").frontendFireAndForget(
                      "deleteModelsForLastAddOnPreview",
                      { messagesIds: e },
                    ),
                await o("WAWebRequestDeleteAddOns").requestDeleteAddOns(
                  t.toString(),
                  e,
                )));
            var l = o("WAWebChatCollection").ChatCollection.get(t);
            (l &&
              ((l.createdLocally = !1),
              (l.endOfHistoryTransferType =
                o(
                  "WAWebChatConstants",
                ).ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY),
              l.deleteMessages(e),
              o("WAWebLimitSharingModelUtils").createAcp2MsgOnChatClear(t),
              o("WAWebBackendApi").frontendFireAndForget(
                "deleteAiThreadsForChat",
                { chatId: t.toString() },
              )),
              this.maybeClearGroupStatus(t, n));
          }),
          (a.$ClearChatSync$p_2 = async function (t) {
            var e = t.chatWid,
              n = t.deleteMediaFiles,
              r = t.deleteStarredMessages,
              a = t.incomingRange,
              i = t.messagesToBeSkippedFromClear,
              l = t.syncActionValue,
              s = o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  l,
                )
                .readBuffer();
            return (
              await o("WAWebApiAddActiveMessageRange").addActiveMessageRange(
                e.toString(),
                o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                  "clearChat",
                  { deleteMedia: n, deleteStarred: r },
                ),
                s,
              ),
              await this.clearChat(e, a, r, i),
              { actionState: o("WAWebSyncdConst").SyncActionState.Success }
            );
          }),
          (a.getClearChatMutation = async function (t, n, a, i, l) {
            (l === void 0 && (l = !1),
              o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(
                o("WAWebSyncdGetChat").PnMutationCaller.GetClearChatMutation,
                n,
              ),
              r("gkx")("26258") ||
                new (o(
                  "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
                ).MdSyncdDogfoodingFeatureUsageWamEvent)({
                  mdSyncdDogfoodingFeature: a
                    ? o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE
                        .CLEAR_CHAT_REMOVE_STARRED_MUTATION
                    : o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE
                        .CLEAR_CHAT_KEEP_STARRED_MUTATION,
                }).commit());
            var e = l
                ? n.toString()
                : await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                    n,
                    o("WAWebSyncdConst").Actions.ClearChat,
                  ),
              s = await o(
                "WAWebMessageRangeUtils",
              ).constructForwardMovingMessageRange(n, e),
              u = this.$ClearChatSync$p_4(
                o("WAWebWidFactory").createWid(e),
                a,
                i || !1,
              ),
              c = await o("WAWebSyncdDb").getPendingMutationsRowsByIndex(
                ["index"],
                o("WAWebSyncdActionUtils").buildIndex(this.getAction(), u),
              );
            if (c.length) {
              var d,
                m = c.reduce(function (e, t) {
                  return e.timestamp > t.timestamp ? e : t;
                }),
                p = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  m.binarySyncAction,
                ),
                _ = (d = p.clearChatAction) == null ? void 0 : d.messageRange;
              _ &&
                ((s = o("WAWebMessageRangeUtils").mergeMessageRanges(s, _)),
                o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                  s.lastMessageTimestamp,
                  "pendingMutationRange",
                ));
            }
            var f = { clearChatAction: { messageRange: s } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: u,
              value: f,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          (a.$ClearChatSync$p_4 = function (t, n, r) {
            return [t.toJid(), n ? "1" : "0", r ? "1" : "0"];
          }),
          (a.resolveConflicts = async function (t, n) {
            var e = this,
              a = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                t.binarySyncAction,
              ),
              i = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                n.binarySyncData,
              ).value,
              l = t.timestamp,
              s = n.timestamp,
              u = r("nullthrows")(a.clearChatAction),
              c = r("nullthrows")(i == null ? void 0 : i.clearChatAction),
              p = o("WAWebMessageRangeUtils").compareMessageRanges(
                r("nullthrows")(c.messageRange),
                r("nullthrows")(u.messageRange),
              );
            e: {
              if (
                p ===
                o("WAWebMessageRangeUtils").MessageRangeEncloseType
                  .RangeAEnclosesRangeB
              )
                return o("WAWebSyncdConst").ConflictResolutionState
                  .ApplyRemoteAndDropLocal;
              if (
                p ===
                o("WAWebMessageRangeUtils").MessageRangeEncloseType
                  .RangeBEnclosesRangeA
              )
                return o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
              if (
                p ===
                  o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesAreEqual &&
                l <= s
              )
                return o("WAWebSyncdConst").ConflictResolutionState
                  .ApplyRemoteAndDropLocal;
              if (
                p ===
                o("WAWebMessageRangeUtils").MessageRangeEncloseType
                  .RangesAreEqual
              )
                return o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
              if (
                p ===
                o("WAWebMessageRangeUtils").MessageRangeEncloseType
                  .RangesNotEnclosing
              ) {
                var _ = o("WAWebMessageRangeUtils").mergeMessageRanges(
                    r("nullthrows")(c.messageRange),
                    r("nullthrows")(u.messageRange),
                  ),
                  f = { messageRange: _ },
                  g = o("encodeProtobuf")
                    .encodeProtobuf(
                      o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                      babelHelpers.extends({}, i, { clearChatAction: f }),
                    )
                    .readBuffer(),
                  h = babelHelpers.extends({}, t, { binarySyncAction: g });
                delete h.id;
                var y = null,
                  C = o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                    ["message-association", "chat", "reporting-info"],
                    [h],
                    async function () {
                      var n = JSON.parse(t.index),
                        r = o("WAWebWidFactory").createWid(n[1]),
                        a = n[2] === "1",
                        i = n[3] === "1";
                      (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] before update chat table due to conflict",
                          ])),
                      ),
                        await o(
                          "WAWebApiAddActiveMessageRange",
                        ).addActiveMessageRange(
                          r.toString(),
                          o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                            "clearChat",
                            { deleteStarred: a, deleteMedia: i },
                          ),
                          g,
                        ));
                      var l = e.$ClearChatSync$p_3(r, _, a, function () {
                        y = r.toString();
                      });
                      return (
                        o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[syncd] after update chat table due to conflict",
                            ])),
                        ),
                        l
                      );
                    },
                  );
                try {
                  await C;
                } finally {
                  y != null &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "chatHistoryCleared",
                      { chatId: y },
                    );
                }
                return o("WAWebSyncdConst").ConflictResolutionState
                  .SkipRemoteAndDropLocal;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  p,
              );
            }
          }),
          (a.maybeClearGroupStatus = function (t, n) {
            if (t.isGroup()) {
              var e,
                r =
                  (e = o("WAWebStatusCollection").StatusCollection.get(t)) ==
                  null
                    ? void 0
                    : e.getAllMsgs(),
                a =
                  r == null
                    ? void 0
                    : r.filter(function (e) {
                        return (
                          n.lastMessageTimestamp == null ||
                          e.t <
                            o("WALongInt").numberOrThrowIfTooLarge(
                              n.lastMessageTimestamp,
                            )
                        );
                      });
              a &&
                (a == null ? void 0 : a.length) > 0 &&
                (a == null ||
                  a.forEach(function (e) {
                    return e.delete();
                  }),
                a.length === (r == null ? void 0 : r.length) &&
                  o("WAWebStatusCollection").StatusCollection.remove(t));
            }
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
