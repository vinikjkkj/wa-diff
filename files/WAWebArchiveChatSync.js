__d(
  "WAWebArchiveChatSync",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WAWebApiActiveMessageRanges",
    "WAWebChatDbUpdatesApi",
    "WAWebMessageRangeUtils",
    "WAWebPinChatSync",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
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
    var y = (function (t) {
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
            return (e = t.archiveChatAction) == null ? void 0 : e.messageRange;
          }),
          (i.getVersion = function () {
            return 3;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.Archive;
          }),
          (i.validateSyncActionValue = function (t) {
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
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = [],
                  l = 0,
                  d = 0,
                  m = yield (g || (g = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var t = e.indexParts,
                                  n = e.value,
                                  s = t[1];
                                if (!s || !r("WAWebWid").isWid(s))
                                  return a.malformedActionIndex();
                                var u = yield o(
                                  "WAWebSyncdGetChat",
                                ).resolveChatForMutationIndex(
                                  o("WAWebWidFactory").createWid(s),
                                );
                                if (!u.success)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: u.orphanModel,
                                  };
                                var c = u.chat.id,
                                  m = a.validateSyncActionValue(n);
                                if (m == null)
                                  return (
                                    l++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName)
                                  );
                                var p = m.archived,
                                  _ = m.messageRange,
                                  f = o("WAWebWidFactory").createWid(c);
                                yield a.$ArchiveChatSync$p_1(f, "before apply");
                                var g = yield a.$ArchiveChatSync$p_2(
                                  f,
                                  p,
                                  _,
                                  n,
                                );
                                return (
                                  g.updates &&
                                    (i.push(g.updates),
                                    yield a.$ArchiveChatSync$p_1(
                                      f,
                                      "after push",
                                    )),
                                  g.syncApplyActionResult
                                );
                              }
                              return (
                                d++,
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
                  l > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][archive-chat]: ",
                          " malformed mutations",
                        ])),
                      l,
                    ),
                  d > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][archive-chat]: ",
                          " REMOVE operations not supported",
                        ])),
                      d,
                    ),
                  i.length > 0 &&
                    (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] before archive use case will update chat table",
                        ])),
                    ),
                    yield o("WAWebChatDbUpdatesApi").setArchive(i),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] after archive use case updated chat table",
                        ])),
                    )),
                  m
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.$ArchiveChatSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                try {
                  if (!e.isRegularUser()) return;
                  var n = yield o("WAWebSchemaChat")
                    .getChatTable()
                    .get(e.toString());
                  (n == null &&
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][archive-chat]: chat expected to exist ",
                          ". context: ",
                          "",
                        ])),
                      e.toLogString(),
                      t,
                    ),
                    (n == null ? void 0 : n.accountLid) == null &&
                      o("WALogger").WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd][archive-chat]: chat expected to have accountLid ",
                            ". ",
                            "",
                          ])),
                        e.toLogString(),
                        t,
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
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ArchiveChatSync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                if (
                  (yield o(
                    "WAWebApiActiveMessageRanges",
                  ).removeActiveMessageRange(
                    e.toString(),
                    o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                      "archive",
                    ),
                  ),
                  !t)
                )
                  return {
                    updates: { id: e.toString(), archive: t },
                    syncApplyActionResult: {
                      actionState: o("WASyncdConst").SyncActionState.Success,
                    },
                  };
                var a = yield o("WAWebMessageRangeUtils").constructMessageRange(
                    e,
                    { forOutgoingMutation: !1 },
                  ),
                  i = o("WAWebMessageRangeUtils").compareMessageRanges(a, n),
                  l = o("encodeProtobuf")
                    .encodeProtobuf(
                      o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                      r,
                    )
                    .readBuffer(),
                  s = function () {
                    return o(
                      "WAWebApiActiveMessageRanges",
                    ).addActiveMessageRange(
                      e.toString(),
                      o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                        "archive",
                      ),
                      l,
                    );
                  },
                  u = o(
                    "WAWebUserPrefsMultiDevice",
                  ).getArchiveV2EnabledSetting(),
                  c = o("WAWebUserPrefsMultiDevice").getUnarchiveChatsSetting(),
                  d = u && !c;
                switch (i) {
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesAreEqual:
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangeBEnclosesRangeA:
                    return (
                      yield s(),
                      {
                        updates: { id: e.toString(), archive: t },
                        syncApplyActionResult: h(e, i),
                      }
                    );
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangeAEnclosesRangeB:
                  case o("WAWebMessageRangeUtils").MessageRangeEncloseType
                    .RangesNotEnclosing:
                    return d
                      ? {
                          updates: { id: e.toString(), archive: t },
                          syncApplyActionResult: h(e, i),
                        }
                      : (yield s(),
                        { updates: void 0, syncApplyActionResult: h(e, i) });
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getArchiveChatMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                o("WAWebSyncdGetChat").warnIfPnMutationWithForcedLid(
                  o("WAWebSyncdGetChat").PnMutationCaller
                    .GetArchiveChatMutation,
                  n,
                );
                var r = yield o(
                    "WAWebSyncdGetChat",
                  ).getChatJidMutationIndexForChat(
                    n,
                    o("WASyncdConst").Actions.Archive,
                  ),
                  a = {
                    archiveChatAction: {
                      archived: t,
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
          (i.getMutationsForArchive = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r) {
                var a = [this.getArchiveChatMutation(e, t, r)];
                return (
                  t &&
                    a.push(
                      o("WAWebPinChatSync").PinChatSync.getPinMutation(
                        e,
                        !1,
                        r,
                      ),
                    ),
                  (g || (g = n("Promise"))).all(a)
                );
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
                var a = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                    e.binarySyncAction,
                  ),
                  i = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    t.binarySyncData,
                  ).value,
                  l = e.timestamp,
                  s = t.timestamp,
                  u = r("WANullthrows")(a.archiveChatAction),
                  c = r("WANullthrows")(
                    i == null ? void 0 : i.archiveChatAction,
                  ),
                  d = o("WAWebMessageRangeUtils").compareMessageRanges(
                    r("WANullthrows")(c.messageRange),
                    r("WANullthrows")(u.messageRange),
                  );
                switch (d) {
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
                    var m,
                      p,
                      g =
                        l <= s
                          ? (m = c.archived) != null
                            ? m
                            : !1
                          : (p = u.archived) != null
                            ? p
                            : !1,
                      h = o("WAWebMessageRangeUtils").mergeMessageRanges(
                        r("WANullthrows")(c.messageRange),
                        r("WANullthrows")(u.messageRange),
                      ),
                      y = { archived: g, messageRange: h },
                      C = o("encodeProtobuf")
                        .encodeProtobuf(
                          o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                          babelHelpers.extends({}, i, { archiveChatAction: y }),
                        )
                        .readBuffer(),
                      b = babelHelpers.extends({}, e, { binarySyncAction: C });
                    return (
                      delete b.id,
                      yield o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                        ["chat"],
                        [b],
                        n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            var t = JSON.parse(e.index),
                              n = o("WAWebWidFactory").createWid(t[1]);
                            (o("WALogger").LOG(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "[syncd] before update chat table due to conflict",
                                ])),
                            ),
                              yield o(
                                "WAWebApiActiveMessageRanges",
                              ).addActiveMessageRange(
                                n.toString(),
                                o(
                                  "WAWebApiActiveMessageRanges",
                                ).getActiveRangeAction("archive"),
                                C,
                              ));
                            var r = yield o("WAWebChatDbUpdatesApi").setArchive(
                              [{ id: n.toString(), archive: g }],
                            );
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
      C = new y();
    l.default = C;
  },
  98,
);
