__d(
  "WAWebDeleteChatSync",
  [
    "WALogger",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebBackendApi",
    "WAWebBizCoexUtils",
    "WAWebChatDeleteBridge",
    "WAWebDBMessageRange",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDBReportingTokenUtils",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebMessageRangeUtils",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebReactionUiService",
    "WAWebRequestDeleteAddOns",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUiRuntime",
    "WAWebWamEnumMdFeatureCode",
    "WAWebWid",
    "WAWebWidFactory",
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
            return (e = t.deleteChatAction) == null ? void 0 : e.messageRange;
          }),
          (a.getVersion = function () {
            return 6;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.DeleteChat;
          }),
          (a.applyMutations = async function (n) {
            var t = this;
            r(
              "WAWebAndroidUnsupportedActionsSync",
            ).updatePrimaryAllowsAllMutationsFlag("other mutation");
            var a = 0,
              i = 0,
              l = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n = e.indexParts,
                        l = e.value,
                        s = n[1],
                        u = n[2];
                      if (!s || !u || !r("WAWebWid").isWid(s))
                        return t.malformedActionIndex();
                      var c = o("WAWebMessageRangeUtils").validateMessageRange(
                        t.getMessageRange(l),
                        t.collectionName,
                        t.getAction(),
                      );
                      if (c == null)
                        return (
                          a++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var d = await o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(s),
                      );
                      if (!d.success)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: d.orphanModel,
                        };
                      var m = o("WAWebWidFactory").createWid(d.chat.id),
                        p = o(
                          "WAWebMessageRangeUtils",
                        ).replaceMessageRangeRemoteJid(m, c);
                      return t.$DeleteChatSync$p_1({
                        chatWid: m,
                        deleteMediaFiles: u === "0",
                        incomingRange: p,
                        syncActionValue: l,
                      });
                    }
                    return (
                      i++,
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][delete-chat]: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][delete-chat]: ",
                      " REMOVE operations not supported",
                    ])),
                  i,
                ),
              l
            );
          }),
          (a.deleteChat = async function (t, n) {
            var e = !1;
            try {
              await this.$DeleteChatSync$p_2(t, n, function () {
                e = !0;
              });
            } finally {
              e &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "chatHistoryCleared",
                  { chatId: t.toString() },
                );
            }
          }),
          (a.$DeleteChatSync$p_2 = async function (t, n, r) {
            if (
              (o(
                "WAWebBizCoexUtils",
              ).deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache(t),
              o("WAWebBizCoexUtils").clearDedupInitialHostedSystemMsgCache(),
              n)
            ) {
              var e = await o(
                "WAWebDBQueryAndRemoveMessageHistory",
              ).queryAndRemoveMessagesInMessageRange(t, n, {
                forceDeleteAllMessagesExceptInitialEncryption: !0,
              });
              e.length > 0 &&
                (r(),
                o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(e, {
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
                ),
                await o("WAWebBackendApi").frontendSendAndReceive(
                  "chatDeleteMessages",
                  { chatId: t.toString(), messageIds: e },
                ));
            } else
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] before use case will update chat table ",
                    "",
                  ])),
                t.toLogString(),
              ),
                await o("WAWebChatDeleteBridge").deleteFromStorage(t),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] after use case updated chat table ",
                      "",
                    ])),
                  t.toLogString(),
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "deleteAiThreadsForChat",
                  { chatId: t.toString() },
                ),
                await o("WAWebBackendApi").frontendSendAndReceive(
                  "chatDelete",
                  { chatId: t.toString() },
                ));
            await o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).deleteChatFromInitialSyncBoundary(t);
          }),
          (a.$DeleteChatSync$p_1 = async function (t) {
            var e = t.chatWid,
              n = t.deleteMediaFiles,
              r = t.incomingRange,
              a = t.syncActionValue,
              i = o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  a,
                )
                .readBuffer();
            await o("WAWebApiAddActiveMessageRange").addActiveMessageRange(
              e.toString(),
              o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                "deleteChat",
                { deleteMedia: n },
              ),
              i,
            );
            var l = await o("WAWebMessageRangeUtils").constructMessageRange(e, {
                forOutgoingMutation: !1,
              }),
              s = o("WAWebMessageRangeUtils").compareMessageRanges(l, r);
            e: {
              if (
                s ===
                  o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangeAEnclosesRangeB ||
                s ===
                  o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesNotEnclosing
              ) {
                await this.deleteChat(e, r);
                break e;
              }
              if (
                s ===
                  o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangeBEnclosesRangeA ||
                s ===
                  o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesAreEqual
              ) {
                await this.deleteChat(e);
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  s,
              );
            }
            return {
              actionState: o("WAWebSyncdConst").SyncActionState.Success,
            };
          }),
          (a.getDeleteChatMutation = async function (t, n, a) {
            r("gkx")("26258") ||
              new (o(
                "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
              ).MdSyncdDogfoodingFeatureUsageWamEvent)({
                mdSyncdDogfoodingFeature: o("WAWebWamEnumMdFeatureCode")
                  .MD_FEATURE_CODE.DELETE_MUTATION,
              }).commit();
            var e = await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                n,
                o("WAWebSyncdConst").Actions.DeleteChat,
              ),
              i = o("WAWebWidFactory").createWid(e),
              l = await o(
                "WAWebMessageRangeUtils",
              ).constructForwardMovingMessageRange(n, e),
              s = o("WAWebSyncdActionUtils").buildIndex(
                this.getAction(),
                this.buildDeleteChatIndexArgs(
                  o("WAWebWidFactory").createWid(e),
                  a || !1,
                ),
              ),
              u = await o("WAWebSyncdDb").getPendingMutationsRowsByIndex(
                ["index"],
                s,
              );
            if (u.length) {
              var c,
                d = u.reduce(function (e, t) {
                  return e.timestamp > t.timestamp ? e : t;
                }),
                m = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  d.binarySyncAction,
                ),
                p = (c = m.deleteChatAction) == null ? void 0 : c.messageRange;
              p &&
                ((l = o("WAWebMessageRangeUtils").mergeMessageRanges(l, p)),
                o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                  l.lastMessageTimestamp,
                  "pendingMutationRange",
                ));
            }
            return this.buildDeleteChatMutation({
              timestamp: t,
              indexWid: i,
              mergedRange: l,
              deleteMediaFiles: a || !1,
            });
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
              u = r("nullthrows")(a.deleteChatAction),
              c = r("nullthrows")(i == null ? void 0 : i.deleteChatAction),
              p = o("WAWebMessageRangeUtils").compareMessageRanges(
                r("nullthrows")(c.messageRange),
                r("nullthrows")(u.messageRange),
              );
            switch (p) {
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeAEnclosesRangeB:
                return o("WAWebSyncdConst").ConflictResolutionState
                  .ApplyRemoteAndDropLocal;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeBEnclosesRangeA:
                return o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesAreEqual:
                return l <= s
                  ? o("WAWebSyncdConst").ConflictResolutionState
                      .ApplyRemoteAndDropLocal
                  : o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesNotEnclosing: {
                var _ = o("WAWebMessageRangeUtils").mergeMessageRanges(
                    r("nullthrows")(c.messageRange),
                    r("nullthrows")(u.messageRange),
                  ),
                  f = { messageRange: _ },
                  g = o("encodeProtobuf")
                    .encodeProtobuf(
                      o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                      babelHelpers.extends({}, i, { deleteChatAction: f }),
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
                        r = o("WAWebWidFactory").createWid(n[1]);
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
                            "deleteChat",
                            { deleteMedia: n[2] === "1" },
                          ),
                          g,
                        ));
                      var a = await e.$DeleteChatSync$p_2(r, _, function () {
                        y = r.toString();
                      });
                      return (
                        o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[syncd] after update chat table due to conflict",
                            ])),
                        ),
                        a
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
            }
          }),
          (a.buildDeleteChatMutation = function (t) {
            var e = t.deleteMediaFiles,
              n = t.indexWid,
              r = t.mergedRange,
              a = t.timestamp,
              i = { deleteChatAction: { messageRange: r } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: this.buildDeleteChatIndexArgs(n, e),
              value: i,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: a,
              action: this.getAction(),
            });
          }),
          (a.buildDeleteChatIndexArgs = function (t, n) {
            return [t.toJid(), n ? "1" : "0"];
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
