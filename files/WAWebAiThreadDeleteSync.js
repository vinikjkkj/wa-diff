__d(
  "WAWebAiThreadDeleteSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebBackendApi",
    "WAWebBotBaseGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdGetThread",
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
      u = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
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
            return o("WASyncdConst").Actions.AiThreadDelete;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = 0,
                  l = yield (s || (s = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation !== "set")
                                return (
                                  i++,
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState
                                        .Unsupported,
                                  }
                                );
                              var t = e.indexParts,
                                n = t[1],
                                l = t[2];
                              if (
                                !n ||
                                !l ||
                                !r("WAWebWid").isWid(n) ||
                                !r("isStringNotNullAndNotWhitespaceOnly")(l)
                              )
                                return a.malformedActionIndex();
                              var s = o("WAWebWidFactory").createWid(n);
                              if (!s.isBot()) return a.malformedActionIndex();
                              var u = o("WAWebWidFactory").asBotWidOrThrow(s);
                              if (
                                !o("WAWebBotBaseGating").isBotEnabled() ||
                                !o(
                                  "WAWebBotBaseGating",
                                ).isAiChatThreadsInfraEnabled()
                              )
                                return {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                };
                              var c = o(
                                  "WAWebAiThreadCreationUtils",
                                ).createAiThreadFromMutationIndex(u, l),
                                d = yield o(
                                  "WAWebSyncdGetThread",
                                ).resolveThreadForMutationIndex(c);
                              return d.success
                                ? a.$AiThreadDeleteSync$p_1(u, c, d.thread)
                                : {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: d.orphanModel,
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
                  );
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][ai-thread-delete] ",
                          " operations not supported",
                        ])),
                      i,
                    ),
                  l
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.$AiThreadDeleteSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r) {
                var a = yield o("WAWebThreadMetadataBulkJob").bulkDeleteThreads(
                  e,
                  [t],
                );
                return (
                  o("WAWebBackendApi").frontendFireAndForget(
                    "deleteChatAiThreads",
                    { chatId: e, threadIds: [t], msgIds: a },
                  ),
                  (s || (s = n("Promise"))).resolve({
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
          (i.getIndexParts = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.key.remote,
                  n = yield o(
                    "WAWebSyncdGetChat",
                  ).getChatJidMutationIndexForChat(
                    t,
                    o("WASyncdConst").Actions.AiThreadDelete,
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
          (i.sendMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = o("WATimeUtils").unixTimeMs(),
                  a = yield (s || (s = n("Promise"))).all(
                    e.map(function (e) {
                      return t.buildMutation(e, r);
                    }),
                  );
                yield o("WAWebSyncdCoreApi").lockForSync([], a, function () {
                  return (s || (s = n("Promise"))).resolve();
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.buildMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: yield this.getIndexParts(e),
                  value: {},
                  version: this.getVersion(),
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  timestamp: t,
                  action: this.getAction(),
                });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
