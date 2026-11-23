__d(
  "WAWebArchiveChatSync",
  [
    "WALogger",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebChatDbUpdatesApi",
    "WAWebMessageRangeUtils",
    "WAWebNewsletterArchiveUtils",
    "WAWebPinChatSync",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "WAWebWidFactory",
    "decodeProtobuf",
    "encodeProtobuf",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t) {
      return t ===
        o("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesAreEqual ||
        t ===
          o("WAWebMessageRangeUtils").MessageRangeEncloseType
            .RangeAEnclosesRangeB
        ? { actionState: o("WAWebSyncdConst").SyncActionState.Success }
        : t ===
              o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeBEnclosesRangeA ||
            t ===
              o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesNotEnclosing
          ? {
              actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
              orphanModel: {
                modelType: o("WAWebSyncdConst").SyncModelType.Chat,
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
    var h = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getMessageRange = function (t) {
            var e;
            return (e = t.archiveChatAction) == null ? void 0 : e.messageRange;
          }),
          (a.getVersion = function () {
            return 3;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.Archive;
          }),
          (a.validateSyncActionValue = function (t) {
            var e = t.archiveChatAction,
              n = e == null ? void 0 : e.archived,
              r = this.getMessageRange(t);
            return !o("WAWebMessageRangeUtils").validateMessageRange(
              r,
              this.collectionName,
              this.getAction(),
            ) ||
              n == null ||
              r == null
              ? null
              : { archived: n, messageRange: r };
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = [],
              i = 0,
              l = 0,
              d = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n = e.indexParts,
                        s = e.value,
                        u = n[1];
                      if (!u || !r("WAWebWid").isWid(u))
                        return t.malformedActionIndex();
                      var c = await o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(u),
                      );
                      if (!c.success)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: c.orphanModel,
                        };
                      var d = c.chat.id,
                        m = t.validateSyncActionValue(s);
                      if (m == null)
                        return (
                          i++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var p = m.archived,
                        _ = m.messageRange,
                        f = o("WAWebWidFactory").createWid(d);
                      await t.$ArchiveChatSync$p_1(f, "before apply");
                      var g = await t.$ArchiveChatSync$p_2({
                        archived: p,
                        chatWid: f,
                        incomingRange: _,
                        syncActionValue: s,
                      });
                      return (
                        g.updates &&
                          (a.push(g.updates),
                          await t.$ArchiveChatSync$p_1(f, "after push")),
                        g.syncApplyActionResult
                      );
                    }
                    return (
                      l++,
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
              i > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][archive-chat]: ",
                      " malformed mutations",
                    ])),
                  i,
                ),
              l > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][archive-chat]: ",
                      " REMOVE operations not supported",
                    ])),
                  l,
                ),
              a.length > 0 &&
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] before archive use case will update chat table",
                    ])),
                ),
                await o("WAWebChatDbUpdatesApi").setArchive(a),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] after archive use case updated chat table",
                    ])),
                )),
              d
            );
          }),
          (a.$ArchiveChatSync$p_1 = async function (t, n) {
            try {
              if (!t.isRegularUser()) return;
              var e = await o("WAWebSchemaChat")
                .getChatTable()
                .get(t.toString());
              (e == null &&
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][archive-chat]: chat expected to exist ",
                      ". context: ",
                      "",
                    ])),
                  t.toLogString(),
                  n,
                ),
                (e == null ? void 0 : e.accountLid) == null &&
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][archive-chat]: chat expected to have accountLid ",
                        ". ",
                        "",
                      ])),
                    t.toLogString(),
                    n,
                  ));
            } catch (e) {
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd][archive-chat]: error validating chat exists ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (a.$ArchiveChatSync$p_2 = async function (t) {
            var e = t.archived,
              n = t.chatWid,
              r = t.incomingRange,
              a = t.syncActionValue;
            if (
              (await o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
                n.toString(),
                o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                  "archive",
                ),
              ),
              !e)
            )
              return {
                updates: { id: n.toString(), archive: e },
                syncApplyActionResult: {
                  actionState: o("WAWebSyncdConst").SyncActionState.Success,
                },
              };
            var i = await o("WAWebMessageRangeUtils").constructMessageRange(n, {
                forOutgoingMutation: !1,
              }),
              l = o("WAWebMessageRangeUtils").compareMessageRanges(i, r),
              s = o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  a,
                )
                .readBuffer(),
              u = function () {
                return o("WAWebApiAddActiveMessageRange").addActiveMessageRange(
                  n.toString(),
                  o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                    "archive",
                  ),
                  s,
                );
              },
              c = o("WAWebUserPrefsMultiDevice").getArchiveV2EnabledSetting(),
              d = o("WAWebUserPrefsMultiDevice").getUnarchiveChatsSetting(),
              m = c && !d,
              p =
                o(
                  "WAWebNewsletterArchiveUtils",
                ).shouldKeepChannelArchivedUntilMigration(n) || m;
            switch (l) {
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesAreEqual:
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeBEnclosesRangeA:
                return (
                  await u(),
                  {
                    updates: { id: n.toString(), archive: e },
                    syncApplyActionResult: g(n, l),
                  }
                );
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeAEnclosesRangeB:
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesNotEnclosing:
                return p
                  ? (m || (await u()),
                    {
                      updates: { id: n.toString(), archive: e },
                      syncApplyActionResult: g(n, l),
                    })
                  : (await u(),
                    { updates: void 0, syncApplyActionResult: g(n, l) });
            }
          }),
          (a.getArchiveChatMutation = async function (t, n, r) {
            o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(
              o("WAWebSyncdGetChat").PnMutationCaller.GetArchiveChatMutation,
              r,
            );
            var e = await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                r,
                o("WAWebSyncdConst").Actions.Archive,
              ),
              a = {
                archiveChatAction: {
                  archived: n,
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
          (a.getMutationsForArchive = async function (t, n, r) {
            var e = [this.getArchiveChatMutation(t, n, r)];
            return (
              n &&
                e.push(
                  o("WAWebPinChatSync").PinChatSync.getPinMutation(t, !1, r),
                ),
              Promise.all(e)
            );
          }),
          (a.resolveConflicts = async function (t, n) {
            var e = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                t.binarySyncAction,
              ),
              a = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                n.binarySyncData,
              ).value,
              i = t.timestamp,
              l = n.timestamp,
              s = r("nullthrows")(e.archiveChatAction),
              u = r("nullthrows")(a == null ? void 0 : a.archiveChatAction),
              c = o("WAWebMessageRangeUtils").compareMessageRanges(
                r("nullthrows")(u.messageRange),
                r("nullthrows")(s.messageRange),
              );
            switch (c) {
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeAEnclosesRangeB:
                return o("WAWebSyncdConst").ConflictResolutionState
                  .ApplyRemoteAndDropLocal;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangeBEnclosesRangeA:
                return o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesAreEqual:
                return i <= l
                  ? o("WAWebSyncdConst").ConflictResolutionState
                      .ApplyRemoteAndDropLocal
                  : o("WAWebSyncdConst").ConflictResolutionState.SkipRemote;
              case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                .RangesNotEnclosing: {
                var d,
                  m,
                  p =
                    i <= l
                      ? (d = u.archived) != null
                        ? d
                        : !1
                      : (m = s.archived) != null
                        ? m
                        : !1,
                  g = o("WAWebMessageRangeUtils").mergeMessageRanges(
                    r("nullthrows")(u.messageRange),
                    r("nullthrows")(s.messageRange),
                  ),
                  h = { archived: p, messageRange: g },
                  y = o("encodeProtobuf")
                    .encodeProtobuf(
                      o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                      babelHelpers.extends({}, a, { archiveChatAction: h }),
                    )
                    .readBuffer(),
                  C = babelHelpers.extends({}, t, { binarySyncAction: y });
                return (
                  delete C.id,
                  await o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                    ["chat"],
                    [C],
                    async function () {
                      var e = JSON.parse(t.index),
                        n = o("WAWebWidFactory").createWid(e[1]);
                      (o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] before update chat table due to conflict",
                          ])),
                      ),
                        await o(
                          "WAWebApiAddActiveMessageRange",
                        ).addActiveMessageRange(
                          n.toString(),
                          o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                            "archive",
                          ),
                          y,
                        ));
                      var r = await o("WAWebChatDbUpdatesApi").setArchive([
                        { id: n.toString(), archive: p },
                      ]);
                      return (
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[syncd] after update chat table due to conflict",
                            ])),
                        ),
                        r
                      );
                    },
                  ),
                  o("WAWebSyncdConst").ConflictResolutionState
                    .SkipRemoteAndDropLocal
                );
              }
            }
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatMessageRangeSyncdActionBase),
      y = new h();
    l.default = y;
  },
  98,
);
