__d(
  "WAWebClearChatSync",
  [
    "Promise",
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WASyncdConst",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebApiActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebChatCollection",
    "WAWebChatConstants",
    "WAWebDBMessageRange",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebMessageRangeUtils",
    "WAWebMsgKey",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebStatusCollection",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebThreadMetadataJob",
    "WAWebWamEnumMdFeatureCode",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            (e.chatJidIndex = 1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getMessageRange = function (t) {
            var e;
            return (e = t.clearChatAction) == null ? void 0 : e.messageRange;
          }),
          (i.getVersion = function () {
            return 6;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.ClearChat;
          }),
          (i.$ClearChatSync$p_1 = function (t, n, a, i) {
            var e = new Set();
            return (
              t.forEach(function (t) {
                if (
                  t.actionName === o("WASyncdConst").Actions.Star &&
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
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a) {
                var i = this;
                r(
                  "WAWebAndroidUnsupportedActionsSync",
                ).updatePrimaryAllowsAllMutationsFlag("other mutation");
                var l = a.allSupportedSetMutations,
                  u = 0,
                  c = 0,
                  d = yield (p || (p = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var t = e.indexParts,
                                  n = e.value,
                                  a = t[1],
                                  s = t[2],
                                  d = t[3];
                                if (!a || !s || !d || !r("WAWebWid").isWid(a))
                                  return i.malformedActionIndex();
                                var m = o(
                                  "WAWebMessageRangeUtils",
                                ).validateMessageRange(
                                  i.getMessageRange(n),
                                  i.collectionName,
                                  i.getAction(),
                                );
                                if (m == null)
                                  return (
                                    u++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(i.collectionName)
                                  );
                                var p = yield o(
                                  "WAWebSyncdGetChat",
                                ).resolveChatForMutationIndex(
                                  o("WAWebWidFactory").createWid(a),
                                );
                                if (!p.success)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: p.orphanModel,
                                  };
                                var _ = o("WAWebWidFactory").createWid(
                                    p.chat.id,
                                  ),
                                  f = o(
                                    "WAWebMessageRangeUtils",
                                  ).replaceMessageRangeRemoteJid(_, m),
                                  g = i.$ClearChatSync$p_1(
                                    l,
                                    e.timestamp,
                                    _,
                                    p.chat.accountLid == null
                                      ? null
                                      : o("WAWebWidFactory").createWid(
                                          p.chat.accountLid,
                                        ),
                                  );
                                return i.$ClearChatSync$p_2(
                                  o("WAWebWidFactory").createWid(p.chat.id),
                                  f,
                                  s === "1",
                                  d === "0",
                                  g,
                                  n,
                                );
                              }
                              return (
                                c++,
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
                            } catch (e) {
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Failed,
                              };
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  u > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][clear-chat]: ",
                          " malformed mutations",
                        ])),
                      u,
                    ),
                  c > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][clear-chat]: ",
                          " REMOVE operations not supported",
                        ])),
                      c,
                    ),
                  d
                );
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.clearChat = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var a = yield o(
                  "WAWebDBQueryAndRemoveMessageHistory",
                ).queryAndRemoveMessagesInMessageRange(e, t, {
                  skipStarred: !n,
                  skipMessages: r,
                  deleteAutomatedGreetingMessages: !0,
                });
                (yield o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
                  o("WAWebWidToJid").widToChatJid(e),
                ),
                  yield o("WAWebSchemaChat")
                    .getChatTable()
                    .merge(e.toString(), {
                      endOfHistoryTransferType:
                        o("WAWebChatConstants")
                          .ConversationEndOfHistoryTransferModelPropType
                          .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY,
                    }),
                  a.length > 0 &&
                    (o("WAWebBackendApi").frontendFireAndForget(
                      "deleteModelsForLastAddOnPreview",
                      { messagesIds: a },
                    ),
                    yield o("WAWebPersistedJobManagerWorkerCompatible")
                      .getJobManager()
                      .waitUntilPersisted(
                        o(
                          "WAWebPersistedJobDefinitions",
                        ).jobSerializers.deleteAddOns(e.toString(), a),
                      )));
                var i = o("WAWebChatCollection").ChatCollection.get(e);
                (i &&
                  ((i.endOfHistoryTransferType =
                    o(
                      "WAWebChatConstants",
                    ).ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY),
                  i.deleteMessages(a),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "deleteAiThreadsForChat",
                    { chatId: e.toString() },
                  )),
                  this.maybeClearGroupStatus(e, t));
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ClearChatSync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, a, i) {
                var l = o("encodeProtobuf")
                  .encodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                    i,
                  )
                  .readBuffer();
                return (
                  yield o("WAWebApiActiveMessageRanges").addActiveMessageRange(
                    e.toString(),
                    o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                      "clearChat",
                      { deleteMedia: r, deleteStarred: n },
                    ),
                    l,
                  ),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] before use case will update chat table",
                      ])),
                  ),
                  yield this.clearChat(e, t, n, a),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] after use case updated chat table",
                      ])),
                  ),
                  { actionState: o("WASyncdConst").SyncActionState.Success }
                );
              },
            );
            function t(t, n, r, o, a, i) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getClearChatMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, i) {
                (i === void 0 && (i = !1),
                  o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(
                    o("WAWebSyncdGetChat").PnMutationCaller
                      .GetClearChatMutation,
                    t,
                  ),
                  r("gkx")("26258") ||
                    new (o(
                      "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
                    ).MdSyncdDogfoodingFeatureUsageWamEvent)({
                      mdSyncdDogfoodingFeature: n
                        ? o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE
                            .CLEAR_CHAT_REMOVE_STARRED_MUTATION
                        : o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE
                            .CLEAR_CHAT_KEEP_STARRED_MUTATION,
                    }).commit());
                var l = i
                    ? t.toString()
                    : yield o(
                        "WAWebSyncdGetChat",
                      ).getChatJidMutationIndexForChat(
                        t,
                        o("WASyncdConst").Actions.ClearChat,
                      ),
                  s = yield o(
                    "WAWebMessageRangeUtils",
                  ).constructForwardMovingMessageRange(t, l),
                  u = this.$ClearChatSync$p_3(
                    o("WAWebWidFactory").createWid(l),
                    n,
                    a || !1,
                  ),
                  c = yield o("WAWebSyncdDb").getPendingMutationsRowsByIndex(
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
                    _ =
                      (d = p.clearChatAction) == null ? void 0 : d.messageRange;
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
                  timestamp: e,
                  action: this.getAction(),
                });
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ClearChatSync$p_3 = function (t, n, r) {
            return [t.toJid(), n ? "1" : "0", r ? "1" : "0"];
          }),
          (i.resolveConflicts = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this,
                  i = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                    e.binarySyncAction,
                  ),
                  l = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    t.binarySyncData,
                  ).value,
                  s = e.timestamp,
                  u = t.timestamp,
                  c = r("WANullthrows")(i.clearChatAction),
                  p = r("WANullthrows")(l == null ? void 0 : l.clearChatAction),
                  _ = o("WAWebMessageRangeUtils").compareMessageRanges(
                    r("WANullthrows")(p.messageRange),
                    r("WANullthrows")(c.messageRange),
                  );
                e: {
                  if (
                    _ ===
                    o("WAWebMessageRangeUtils").MessageRangeEncloseType
                      .RangeAEnclosesRangeB
                  )
                    return o("WASyncdConst").ConflictResolutionState
                      .ApplyRemoteAndDropLocal;
                  if (
                    _ ===
                    o("WAWebMessageRangeUtils").MessageRangeEncloseType
                      .RangeBEnclosesRangeA
                  )
                    return o("WASyncdConst").ConflictResolutionState.SkipRemote;
                  if (
                    _ ===
                      o("WAWebMessageRangeUtils").MessageRangeEncloseType
                        .RangesAreEqual &&
                    s <= u
                  )
                    return o("WASyncdConst").ConflictResolutionState
                      .ApplyRemoteAndDropLocal;
                  if (
                    _ ===
                    o("WAWebMessageRangeUtils").MessageRangeEncloseType
                      .RangesAreEqual
                  )
                    return o("WASyncdConst").ConflictResolutionState.SkipRemote;
                  if (
                    _ ===
                    o("WAWebMessageRangeUtils").MessageRangeEncloseType
                      .RangesNotEnclosing
                  ) {
                    var f = o("WAWebMessageRangeUtils").mergeMessageRanges(
                        r("WANullthrows")(p.messageRange),
                        r("WANullthrows")(c.messageRange),
                      ),
                      g = { messageRange: f },
                      h = o("encodeProtobuf")
                        .encodeProtobuf(
                          o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                          babelHelpers.extends({}, l, { clearChatAction: g }),
                        )
                        .readBuffer(),
                      y = babelHelpers.extends({}, e, { binarySyncAction: h });
                    return (
                      delete y.id,
                      yield o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                        ["message-association", "chat"],
                        [y],
                        n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            var t = JSON.parse(e.index),
                              n = o("WAWebWidFactory").createWid(t[1]),
                              r = t[2] === "1",
                              i = t[3] === "1";
                            (o("WALogger").LOG(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "[syncd] before update chat table due to conflict",
                                ])),
                            ),
                              yield o(
                                "WAWebApiActiveMessageRanges",
                              ).addActiveMessageRange(
                                n.toString(),
                                o(
                                  "WAWebApiActiveMessageRanges",
                                ).getActiveRangeAction("clearChat", {
                                  deleteStarred: r,
                                  deleteMedia: i,
                                }),
                                h,
                              ));
                            var l = a.clearChat(n, f, r);
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
                        ),
                      ),
                      o("WASyncdConst").ConflictResolutionState
                        .SkipRemoteAndDropLocal
                    );
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      _,
                  );
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.maybeClearGroupStatus = function (t, n) {
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
          a
        );
      })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase),
      f = new _();
    l.default = f;
  },
  98,
);
