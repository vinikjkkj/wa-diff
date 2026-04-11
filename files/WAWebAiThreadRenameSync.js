__d(
  "WAWebAiThreadRenameSync",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBackendApi",
    "WAWebBotBaseGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdGetThread",
    "WAWebSyncdIndexUtils",
    "WAWebThreadMetadataBulkJob",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function (t) {
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
          (i.getVersion = function () {
            return 7;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.AiThreadRename;
          }),
          (i.getIndexParts = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.key.remote,
                  n = yield o(
                    "WAWebSyncdGetChat",
                  ).getChatJidMutationIndexForChat(
                    t,
                    o("WASyncdConst").Actions.AiThreadRename,
                  ),
                  r = e.key.id;
                return [n, r];
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.validateSyncActionValue = function (t) {
            var e = t.aiThreadRenameAction;
            if (e == null) return !1;
            var n = e.newTitle;
            return r("isStringNotNullAndNotWhitespaceOnly")(n);
          }),
          (i.applyMutations = function (a) {
            var t = this,
              i = 0,
              l = 0;
            return (u || (u = n("Promise")))
              .all(
                a.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        try {
                          if (e.operation !== "set")
                            return (
                              i++,
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Unsupported,
                              }
                            );
                          var n = e.indexParts,
                            a = e.value,
                            s = n[1],
                            u = n[2];
                          if (
                            !s ||
                            !u ||
                            !r("WAWebWid").isWid(s) ||
                            !r("isStringNotNullAndNotWhitespaceOnly")(u)
                          )
                            return t.malformedActionIndex();
                          if (!t.validateSyncActionValue(a))
                            return (
                              l++,
                              o("WAWebSyncdIndexUtils").malformedActionValue(
                                t.collectionName,
                              )
                            );
                          var c = o("WAWebWidFactory").createWid(s);
                          if (!c.isBot()) return t.malformedActionIndex();
                          var d = o("WAWebWidFactory").asBotWidOrThrow(c);
                          if (
                            !o("WAWebBotBaseGating").isBotEnabled() ||
                            !o(
                              "WAWebBotBaseGating",
                            ).isAiChatThreadsInfraEnabled()
                          )
                            return {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
                            };
                          var m = o(
                              "WAWebAiThreadCreationUtils",
                            ).createAiThreadFromMutationIndex(d, u),
                            p = yield o(
                              "WAWebSyncdGetThread",
                            ).resolveThreadForMutationIndex(m);
                          return p.success
                            ? t.$AiThreadRenameSync$p_1(m, p.thread, a)
                            : {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Orphan,
                                orphanModel: p.orphanModel,
                              };
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
              )
              .then(function (t) {
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][ai-thread-rename] ",
                          " operations not supported",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][ai-thread-rename]: ",
                          " malformed mutations",
                        ])),
                      l,
                    ),
                  t
                );
              });
          }),
          (i.$AiThreadRenameSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a) {
                var i,
                  l,
                  s = r("WANullthrows")(
                    (i = a.aiThreadRenameAction) == null ? void 0 : i.newTitle,
                  ),
                  c = o("WATimeUtils").castToUnixTime(
                    r("WANullthrows")(t.lastMessageTimestamp),
                  ),
                  d = o("WATimeUtils").castToUnixTime(
                    r("WANullthrows")(t.creationTimestamp),
                  ),
                  m = r("WANullthrows")(
                    (l = t.aiThreadInfo) == null ? void 0 : l.aiThreadType,
                  ),
                  p = {
                    threadId: e,
                    chatId: e.key.remote,
                    lastMessageTimestamp: c,
                    creationTimestamp: d,
                    aiThreadInfo: o(
                      "WAWebAiThreadTypeUtils",
                    ).getAiThreadInfoFromType(s, m),
                  };
                return (
                  yield o(
                    "WAWebThreadMetadataBulkJob",
                  ).bulkCreateOrUpdateThreadsMetadata([p]),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateChatAiThreads",
                    { aiThreads: [p] },
                  ),
                  (u || (u = n("Promise"))).resolve({
                    actionState: o("WASyncdConst").SyncActionState.Success,
                  })
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.sendMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = yield this.buildMutation(
                  e,
                  t,
                  o("WATimeUtils").unixTimeMs(),
                );
                yield o("WAWebSyncdCoreApi").lockForSync([], [r], function () {
                  return (u || (u = n("Promise"))).resolve();
                });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.buildMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: yield this.getIndexParts(e),
                  value: { aiThreadRenameAction: { newTitle: t } },
                  version: this.getVersion(),
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  timestamp: n,
                  action: this.getAction(),
                });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
