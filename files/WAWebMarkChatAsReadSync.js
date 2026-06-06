__d(
  "WAWebMarkChatAsReadSync",
  [
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
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
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
    var _ = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getMessageRange = function (t) {
            var e;
            return (e = t.markChatAsReadAction) == null
              ? void 0
              : e.messageRange;
          }),
          (a.getVersion = function () {
            return 3;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.MarkChatAsRead;
          }),
          (a.$MarkChatAsReadSync$p_1 = async function (t, n) {
            await o("WAWebBackendApi").frontendSendAndReceive(
              "updateChatReadStatus",
              { id: t, read: n },
            );
          }),
          (a.$MarkChatAsReadSync$p_2 = async function (t) {
            var e = await o("WAWebSchemaChat")
              .getChatTable()
              .get(t.toString(), !1);
            return (
              (e == null ? void 0 : e.unreadCount) ===
              r("WAWebConstantsDeprecated").MARKED_AS_UNREAD
            );
          }),
          (a.validateSyncActionValue = function (t) {
            var e = t.markChatAsReadAction,
              n = e == null ? void 0 : e.read,
              r = o("WAWebMessageRangeUtils").validateMessageRange(
                e == null ? void 0 : e.messageRange,
                this.collectionName,
                this.getAction(),
              );
            return n != null && r != null ? { read: n, messageRange: r } : null;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = 0,
              i = 0,
              l = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n = e.indexParts,
                        l = e.value,
                        s = n[1];
                      if (!s) return t.malformedActionIndex();
                      var u = t.validateSyncActionValue(l);
                      if (u == null)
                        return (
                          a++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var c = u.messageRange,
                        d = u.read;
                      if (!r("WAWebWid").isWid(s))
                        return t.malformedActionIndex();
                      var m = await o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(s),
                      );
                      return m.success
                        ? t.$MarkChatAsReadSync$p_3(
                            o("WAWebWidFactory").createWid(m.chat.id),
                            d,
                            c,
                            l,
                          )
                        : {
                            actionState:
                              o("WASyncdConst").SyncActionState.Orphan,
                            orphanModel: m.orphanModel,
                          };
                    }
                    return (
                      i++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][mark-chat-as-read]: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][mark-chat-as-read]: ",
                      " operations not supported",
                    ])),
                  i,
                ),
              l
            );
          }),
          (a.$MarkChatAsReadSync$p_3 = async function (t, n, r, a) {
            await o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
              t.toString(),
              o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                "markChatAsRead",
              ),
            );
            var e = await o("WAWebMessageRangeUtils").constructMessageRange(t, {
                forOutgoingMutation: !1,
              }),
              i = o("WAWebMessageRangeUtils").compareMessageRanges(e, r),
              l = o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  a,
                )
                .readBuffer(),
              s = function () {
                return o("WAWebApiActiveMessageRanges").addActiveMessageRange(
                  t.toString(),
                  o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                    "markChatAsRead",
                  ),
                  l,
                );
              };
            switch (
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] before use case will update chat table",
                  ])),
              ),
              i)
            ) {
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesAreEqual:
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeBEnclosesRangeA:
                return (
                  await s(),
                  await this.$MarkChatAsReadSync$p_1(t, n),
                  Promise.resolve(p(t, i))
                );
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesNotEnclosing:
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeAEnclosesRangeB:
                return (
                  n &&
                    (await this.$MarkChatAsReadSync$p_2(t)) &&
                    (await this.$MarkChatAsReadSync$p_1(t, n)),
                  Promise.resolve(p(t, i))
                );
            }
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] after use case updated chat table",
                ])),
            );
          }),
          (a.getMarkChatAsReadMutation = async function (t, n, r) {
            var e = await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                r,
                o("WASyncdConst").Actions.MarkChatAsRead,
              ),
              a = {
                markChatAsReadAction: {
                  read: n,
                  messageRange: await o(
                    "WAWebMessageRangeUtils",
                  ).constructMessageRange(r, {
                    forOutgoingMutation: !0,
                    mutationIndexJid: e,
                  }),
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [e],
              value: a,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
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
              u = r("WANullthrows")(a.markChatAsReadAction),
              c = r("WANullthrows")(
                i == null ? void 0 : i.markChatAsReadAction,
              ),
              p = o("WAWebMessageRangeUtils").compareMessageRanges(
                r("WANullthrows")(c.messageRange),
                r("WANullthrows")(u.messageRange),
              );
            switch (p) {
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeAEnclosesRangeB:
                return o("WASyncdConst").ConflictResolutionState
                  .ApplyRemoteAndDropLocal;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeBEnclosesRangeA:
                return o("WASyncdConst").ConflictResolutionState.SkipRemote;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesAreEqual:
                return l <= s
                  ? o("WASyncdConst").ConflictResolutionState
                      .ApplyRemoteAndDropLocal
                  : o("WASyncdConst").ConflictResolutionState.SkipRemote;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesNotEnclosing: {
                var _,
                  f,
                  g =
                    l <= s
                      ? (_ = c.read) != null
                        ? _
                        : !1
                      : (f = u.read) != null
                        ? f
                        : !1,
                  h = o("WAWebMessageRangeUtils").mergeMessageRanges(
                    r("WANullthrows")(c.messageRange),
                    r("WANullthrows")(u.messageRange),
                  ),
                  y = { read: g, messageRange: h },
                  C = o("encodeProtobuf")
                    .encodeProtobuf(
                      o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                      babelHelpers.extends({}, i, { markChatAsReadAction: y }),
                    )
                    .readBuffer(),
                  b = babelHelpers.extends({}, t, { binarySyncAction: C });
                return (
                  delete b.id,
                  await o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                    ["chat"],
                    [b],
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
                          "WAWebApiActiveMessageRanges",
                        ).addActiveMessageRange(
                          r.toString(),
                          o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                            "markChatAsRead",
                          ),
                          C,
                        ));
                      var a = await e.$MarkChatAsReadSync$p_1(r, g);
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
                  ),
                  o("WASyncdConst").ConflictResolutionState
                    .SkipRemoteAndDropLocal
                );
              }
            }
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase),
      f = new _();
    l.default = f;
  },
  98,
);
