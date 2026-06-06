__d(
  "WAWebMarkChatAsReadSync",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WAWebApiActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebConstantsDeprecated",
    "WAWebMessageRangeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return t ===
        o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual ||
        t ===
          o("WAWebMessageRangeUtils").MessageRangeEncloseType
            .RangeAEnclosesRangeB
        ? { actionState: o("WASyncdConst").SyncActionState.Success }
        : t ===
              o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeBEnclosesRangeA ||
            t ===
              o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesNotEnclosing
          ? {
              actionState: o("WASyncdConst").SyncActionState.Orphan,
              orphanModel: {
                modelType: o("WASyncdConst").SyncModelType.Chat,
                modelId: e.toString(),
              },
            }
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    var f = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getMessageRange = function (t) {
            var e;
            return (e = t.markChatAsReadAction) == null
              ? void 0
              : e.messageRange;
          }),
          (i.getVersion = function () {
            return 3;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.MarkChatAsRead;
          }),
          (i.$MarkChatAsReadSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "updateChatReadStatus",
                  { id: e, read: t },
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$MarkChatAsReadSync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebSchemaChat")
                  .getChatTable()
                  .get(e.toString(), !1);
                return (
                  (t == null ? void 0 : t.unreadCount) ===
                  r("WAWebConstantsDeprecated").MARKED_AS_UNREAD
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.validateSyncActionValue = function (t) {
            var e = t.markChatAsReadAction,
              n = e == null ? void 0 : e.read,
              r = o("WAWebMessageRangeUtils").validateMessageRange(
                e == null ? void 0 : e.messageRange,
                this.collectionName,
                this.getAction(),
              );
            return n != null && r != null ? { read: n, messageRange: r } : null;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = 0,
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
                                  s = t[1];
                                if (!s) return a.malformedActionIndex();
                                var u = a.validateSyncActionValue(n);
                                if (u == null)
                                  return (
                                    i++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName)
                                  );
                                var c = u.messageRange,
                                  d = u.read;
                                if (!r("WAWebWid").isWid(s))
                                  return a.malformedActionIndex();
                                var m = yield o(
                                  "WAWebSyncdGetChat",
                                ).resolveChatForMutationIndex(
                                  o("WAWebWidFactory").createWid(s),
                                );
                                return m.success
                                  ? a.$MarkChatAsReadSync$p_3(
                                      o("WAWebWidFactory").createWid(m.chat.id),
                                      d,
                                      c,
                                      n,
                                    )
                                  : {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Orphan,
                                      orphanModel: m.orphanModel,
                                    };
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
                          "[syncd][mark-chat-as-read]: ",
                          " malformed mutations",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][mark-chat-as-read]: ",
                          " operations not supported",
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
          (i.$MarkChatAsReadSync$p_3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r, a) {
                yield o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
                  e.toString(),
                  o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                    "markChatAsRead",
                  ),
                );
                var i = yield o("WAWebMessageRangeUtils").constructMessageRange(
                    e,
                    { forOutgoingMutation: !1 },
                  ),
                  l = o("WAWebMessageRangeUtils").compareMessageRanges(i, r),
                  s = o("encodeProtobuf")
                    .encodeProtobuf(
                      o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                      a,
                    )
                    .readBuffer(),
                  d = function () {
                    return o(
                      "WAWebApiActiveMessageRanges",
                    ).addActiveMessageRange(
                      e.toString(),
                      o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                        "markChatAsRead",
                      ),
                      s,
                    );
                  };
                switch (
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] before use case will update chat table",
                      ])),
                  ),
                  l)
                ) {
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesAreEqual:
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangeBEnclosesRangeA:
                    return (
                      yield d(),
                      yield this.$MarkChatAsReadSync$p_1(e, t),
                      (p || (p = n("Promise"))).resolve(_(e, l))
                    );
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesNotEnclosing:
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangeAEnclosesRangeB:
                    return (
                      t &&
                        (yield this.$MarkChatAsReadSync$p_2(e)) &&
                        (yield this.$MarkChatAsReadSync$p_1(e, t)),
                      (p || (p = n("Promise"))).resolve(_(e, l))
                    );
                }
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] after use case updated chat table",
                    ])),
                );
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getMarkChatAsReadMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = yield o(
                    "WAWebSyncdGetChat",
                  ).getChatJidMutationIndexForChat(
                    n,
                    o("WASyncdConst").Actions.MarkChatAsRead,
                  ),
                  a = {
                    markChatAsReadAction: {
                      read: t,
                      messageRange: yield o(
                        "WAWebMessageRangeUtils",
                      ).constructMessageRange(n, {
                        forOutgoingMutation: !0,
                        mutationIndexJid: r,
                      }),
                    },
                  };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [r],
                  value: a,
                  version: this.getVersion(),
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  timestamp: e,
                  action: this.getAction(),
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
                  c = r("WANullthrows")(i.markChatAsReadAction),
                  p = r("WANullthrows")(
                    l == null ? void 0 : l.markChatAsReadAction,
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
                    var f,
                      g,
                      h =
                        s <= u
                          ? (f = p.read) != null
                            ? f
                            : !1
                          : (g = c.read) != null
                            ? g
                            : !1,
                      y = o("WAWebMessageRangeUtils").mergeMessageRanges(
                        r("WANullthrows")(p.messageRange),
                        r("WANullthrows")(c.messageRange),
                      ),
                      C = { read: h, messageRange: y },
                      b = o("encodeProtobuf")
                        .encodeProtobuf(
                          o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                          babelHelpers.extends({}, l, {
                            markChatAsReadAction: C,
                          }),
                        )
                        .readBuffer(),
                      v = babelHelpers.extends({}, e, { binarySyncAction: b });
                    return (
                      delete v.id,
                      yield o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                        ["chat"],
                        [v],
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
                                ).getActiveRangeAction("markChatAsRead"),
                                b,
                              ));
                            var r = yield a.$MarkChatAsReadSync$p_1(n, h);
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
          a
        );
      })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase),
      g = new f();
    l.default = g;
  },
  98,
);
