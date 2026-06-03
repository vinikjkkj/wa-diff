__d(
  "WAWebDeleteChatSync",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WAWebAndroidUnsupportedActionsSync",
    "WAWebApiActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebChatDeleteBridge",
    "WAWebDBMessageRange",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
    "WAWebMessageRangeUtils",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWamEnumMdFeatureCode",
    "WAWebWid",
    "WAWebWidFactory",
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
            return (e = t.deleteChatAction) == null ? void 0 : e.messageRange;
          }),
          (i.getVersion = function () {
            return 6;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.DeleteChat;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this;
                r(
                  "WAWebAndroidUnsupportedActionsSync",
                ).updatePrimaryAllowsAllMutationsFlag("other mutation");
                var i = 0,
                  l = 0,
                  u = yield (p || (p = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var t = e.indexParts,
                                  n = e.value,
                                  s = t[1],
                                  u = t[2];
                                if (!s || !u || !r("WAWebWid").isWid(s))
                                  return a.malformedActionIndex();
                                var c = o(
                                  "WAWebMessageRangeUtils",
                                ).validateMessageRange(
                                  a.getMessageRange(n),
                                  a.collectionName,
                                  a.getAction(),
                                );
                                if (c == null)
                                  return (
                                    i++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName)
                                  );
                                var d = yield o(
                                  "WAWebSyncdGetChat",
                                ).resolveChatForMutationIndex(
                                  o("WAWebWidFactory").createWid(s),
                                );
                                if (!d.success)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: d.orphanModel,
                                  };
                                var m = o("WAWebWidFactory").createWid(
                                    d.chat.id,
                                  ),
                                  p = o(
                                    "WAWebMessageRangeUtils",
                                  ).replaceMessageRangeRemoteJid(m, c);
                                return a.$DeleteChatSync$p_1(
                                  m,
                                  p,
                                  u === "0",
                                  n,
                                );
                              }
                              return (
                                l++,
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
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][delete-chat]: ",
                          " malformed mutations",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][delete-chat]: ",
                          " REMOVE operations not supported",
                        ])),
                      l,
                    ),
                  u
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.deleteChat = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (
                  (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                    (o(
                      "WAWebBizCoexUtils",
                    ).deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache(
                      e,
                    ),
                    o(
                      "WAWebBizCoexUtils",
                    ).clearDedupInitialHostedSystemMsgCache()),
                  t)
                ) {
                  var n = yield o(
                    "WAWebDBQueryAndRemoveMessageHistory",
                  ).queryAndRemoveMessagesInMessageRange(e, t, {
                    forceDeleteAllMessagesExceptInitialEncryption: !0,
                  });
                  n.length > 0 &&
                    (o("WAWebBackendApi").frontendFireAndForget(
                      "deleteModelsForLastAddOnPreview",
                      { messagesIds: n },
                    ),
                    yield o("WAWebPersistedJobManagerWorkerCompatible")
                      .getJobManager()
                      .waitUntilPersisted(
                        o(
                          "WAWebPersistedJobDefinitions",
                        ).jobSerializers.deleteAddOns(e.toString(), n),
                      ),
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "chatDeleteMessages",
                      { chatId: e.toString(), messageIds: n },
                    ));
                } else
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] before use case will update chat table ",
                        "",
                      ])),
                    e.toLogString(),
                  ),
                    yield o("WAWebChatDeleteBridge").deleteFromStorage(e),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] after use case updated chat table ",
                          "",
                        ])),
                      e.toLogString(),
                    ),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "deleteAiThreadsForChat",
                      { chatId: e.toString() },
                    ),
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "chatDelete",
                      { chatId: e.toString() },
                    ));
                yield o(
                  "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                ).deleteChatFromInitialSyncBoundary(e);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$DeleteChatSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var a = o("encodeProtobuf")
                  .encodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                    r,
                  )
                  .readBuffer();
                yield o("WAWebApiActiveMessageRanges").addActiveMessageRange(
                  e.toString(),
                  o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                    "deleteChat",
                    { deleteMedia: n },
                  ),
                  a,
                );
                var i = yield o("WAWebMessageRangeUtils").constructMessageRange(
                    e,
                    { forOutgoingMutation: !1 },
                  ),
                  l = o("WAWebMessageRangeUtils").compareMessageRanges(i, t);
                e: {
                  if (
                    l ===
                      o("WAWebMessageRangeUtils").MessageRangeEncloseType
                        .RangeAEnclosesRangeB ||
                    l ===
                      o("WAWebMessageRangeUtils").MessageRangeEncloseType
                        .RangesNotEnclosing
                  ) {
                    yield this.deleteChat(e, t);
                    break e;
                  }
                  if (
                    l ===
                      o("WAWebMessageRangeUtils").MessageRangeEncloseType
                        .RangeBEnclosesRangeA ||
                    l ===
                      o("WAWebMessageRangeUtils").MessageRangeEncloseType
                        .RangesAreEqual
                  ) {
                    yield this.deleteChat(e);
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      l,
                  );
                }
                return {
                  actionState: o("WASyncdConst").SyncActionState.Success,
                };
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getDeleteChatMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                r("gkx")("26258") ||
                  new (o(
                    "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
                  ).MdSyncdDogfoodingFeatureUsageWamEvent)({
                    mdSyncdDogfoodingFeature: o("WAWebWamEnumMdFeatureCode")
                      .MD_FEATURE_CODE.DELETE_MUTATION,
                  }).commit();
                var a = yield o(
                    "WAWebSyncdGetChat",
                  ).getChatJidMutationIndexForChat(
                    t,
                    o("WASyncdConst").Actions.DeleteChat,
                  ),
                  i = o("WAWebWidFactory").createWid(a),
                  l = yield o(
                    "WAWebMessageRangeUtils",
                  ).constructForwardMovingMessageRange(t, a),
                  s = o("WAWebSyncdActionUtils").buildIndex(
                    this.getAction(),
                    this.buildDeleteChatIndexArgs(
                      o("WAWebWidFactory").createWid(a),
                      n || !1,
                    ),
                  ),
                  u = yield o("WAWebSyncdDb").getPendingMutationsRowsByIndex(
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
                    p =
                      (c = m.deleteChatAction) == null
                        ? void 0
                        : c.messageRange;
                  p &&
                    ((l = o("WAWebMessageRangeUtils").mergeMessageRanges(l, p)),
                    o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(
                      l.lastMessageTimestamp,
                      "pendingMutationRange",
                    ));
                }
                return this.buildDeleteChatMutation({
                  timestamp: e,
                  indexWid: i,
                  mergedRange: l,
                  deleteMediaFiles: n || !1,
                });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
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
                  c = r("WANullthrows")(i.deleteChatAction),
                  p = r("WANullthrows")(
                    l == null ? void 0 : l.deleteChatAction,
                  ),
                  _ = o("WAWebMessageRangeUtils").compareMessageRanges(
                    r("WANullthrows")(p.messageRange),
                    r("WANullthrows")(c.messageRange),
                  );
                switch (_) {
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangeAEnclosesRangeB:
                    return o("WASyncdConst").ConflictResolutionState
                      .ApplyRemoteAndDropLocal;
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangeBEnclosesRangeA:
                    return o("WASyncdConst").ConflictResolutionState.SkipRemote;
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesAreEqual:
                    return s <= u
                      ? o("WASyncdConst").ConflictResolutionState
                          .ApplyRemoteAndDropLocal
                      : o("WASyncdConst").ConflictResolutionState.SkipRemote;
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesNotEnclosing: {
                    var f = o("WAWebMessageRangeUtils").mergeMessageRanges(
                        r("WANullthrows")(p.messageRange),
                        r("WANullthrows")(c.messageRange),
                      ),
                      g = { messageRange: f },
                      h = o("encodeProtobuf")
                        .encodeProtobuf(
                          o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                          babelHelpers.extends({}, l, { deleteChatAction: g }),
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
                              n = o("WAWebWidFactory").createWid(t[1]);
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
                                ).getActiveRangeAction("deleteChat", {
                                  deleteMedia: t[2] === "1",
                                }),
                                h,
                              ));
                            var r = yield a.deleteChat(n, f);
                            return (
                              o("WALogger").LOG(
                                m ||
                                  (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[syncd] after update chat table due to conflict",
                                  ])),
                              ),
                              r
                            );
                          },
                        ),
                      ),
                      o("WASyncdConst").ConflictResolutionState
                        .SkipRemoteAndDropLocal
                    );
                  }
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.buildDeleteChatMutation = function (t) {
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
          (i.buildDeleteChatIndexArgs = function (t, n) {
            return [t.toJid(), n ? "1" : "0"];
          }),
          a
        );
      })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase),
      f = new _();
    l.default = f;
  },
  98,
);
