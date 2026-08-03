__d(
  "WAWebAiThreadPinSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadPinSyncUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdGetThread",
    "WAWebSyncdIndexUtils",
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
      c,
      d,
      m = (function (t) {
        function a() {
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
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 7;
          }),
          (i.getAction = function () {
            return o("WAWebSyncdConst").Actions.AiThreadPin;
          }),
          (i.getIndexParts = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.key.remote,
                  n = yield o(
                    "WAWebSyncdGetChat",
                  ).getChatJidMutationIndexForChat(
                    t,
                    o("WAWebSyncdConst").Actions.AiThreadPin,
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
            var e = t.threadPinAction;
            return e == null ? !1 : e.pinned != null;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = 0,
                  l = 0,
                  u = yield (d || (d = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, t) {
                            try {
                              if (e.operation !== "set")
                                return (
                                  i++,
                                  {
                                    index: t,
                                    result: {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Unsupported,
                                    },
                                  }
                                );
                              var n = e.indexParts,
                                s = e.value,
                                u = n[1],
                                c = n[2];
                              if (!u || !c)
                                return {
                                  index: t,
                                  result: a.malformedActionIndex(),
                                };
                              if (
                                !r("WAWebWid").isWid(u) ||
                                !r("isStringNotNullAndNotWhitespaceOnly")(c)
                              )
                                return {
                                  index: t,
                                  result: a.malformedActionIndex(),
                                };
                              if (!a.validateSyncActionValue(s))
                                return (
                                  l++,
                                  {
                                    index: t,
                                    result: o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName),
                                  }
                                );
                              var d = o("WAWebWidFactory").createWid(u);
                              if (!d.isBot())
                                return {
                                  index: t,
                                  result: a.malformedActionIndex(),
                                };
                              var m = o("WAWebWidFactory").asBotWidOrThrow(d);
                              if (
                                !o("WAWebBotBaseGating").isBotEnabled() ||
                                !o(
                                  "WAWebBotBaseGating",
                                ).isAiChatThreadsInfraEnabled()
                              )
                                return {
                                  index: t,
                                  result: {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Unsupported,
                                  },
                                };
                              var p = o(
                                  "WAWebAiThreadCreationUtils",
                                ).createAiThreadFromMutationIndex(m, c),
                                _ = yield o(
                                  "WAWebSyncdGetThread",
                                ).resolveThreadForMutationIndex(p);
                              return _.success
                                ? {
                                    index: t,
                                    threadId: p,
                                    thread: _.thread,
                                    value: s,
                                    timestamp: e.timestamp,
                                  }
                                : {
                                    index: t,
                                    result: {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Orphan,
                                      orphanModel: _.orphanModel,
                                    },
                                  };
                            } catch (e) {
                              return {
                                index: t,
                                result: {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState.Failed,
                                },
                              };
                            }
                          },
                        );
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  ),
                  c = [];
                for (var m of u)
                  if (m.result != null) c.push(m.result);
                  else
                    try {
                      var p = yield this.$AiThreadPinSync$p_1({
                        incomingTimestamp: m.timestamp,
                        threadDbRow: m.thread,
                        threadId: m.threadId,
                        value: m.value,
                      });
                      c.push(p);
                    } catch (e) {
                      c.push({
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Failed,
                      });
                    }
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][ai-thread-pin] ",
                          " operations not supported",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][ai-thread-pin]: ",
                          " malformed mutations",
                        ])),
                      l,
                    ),
                  c
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.$AiThreadPinSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.incomingTimestamp,
                  r = e.threadDbRow,
                  a = e.threadId,
                  i = e.value,
                  l =
                    ((t = i.threadPinAction) == null ? void 0 : t.pinned) ===
                    !0;
                if (!l)
                  return (
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(
                      a,
                      r,
                      void 0,
                    ),
                    {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    }
                  );
                var s = r.pinThreadTimestamp;
                if (s != null && s > 0)
                  return (
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(
                      a,
                      r,
                      n,
                    ),
                    {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    }
                  );
                var c = a.key.remote.toString(),
                  d = yield o("WAWebAiThreadPinSyncUtils").getLocalThreadPins(
                    c,
                  ),
                  m = o("WAWebBotGating").getAiThreadPinMaxCount();
                if (d.length < m)
                  return (
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(
                      a,
                      r,
                      n,
                    ),
                    {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    }
                  );
                var p = d.filter(function (e) {
                  return e.isOrphan !== !0;
                });
                if (p.length === 0)
                  return (
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][ai-thread-pin] all pins orphan, drop incoming ",
                          "",
                        ])),
                      a.toString(),
                    ),
                    {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    }
                  );
                var _ = p.reduce(function (e, t) {
                  return t.timestamp < e.timestamp ? t : e;
                });
                return (
                  n > _.timestamp &&
                    (yield this.$AiThreadPinSync$p_2(_.threadId, _.dbRow, n),
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(
                      a,
                      r,
                      n,
                    )),
                  { actionState: o("WAWebSyncdConst").SyncActionState.Success }
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$AiThreadPinSync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                (t != null
                  ? yield o("WAWebAiThreadPinSyncUtils").updatePinState(
                      e,
                      t,
                      void 0,
                    )
                  : o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][ai-thread-pin] evict pin, no DB row ",
                          "",
                        ])),
                      e.toString(),
                    ),
                  yield o("WAWebSyncdDb").appendPendingMutationsRows([
                    yield this.buildMutation(e, !1, n),
                  ]));
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
                  return (d || (d = n("Promise"))).resolve();
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
                  value: { threadPinAction: { pinned: t } },
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
      p = new m();
    l.default = p;
  },
  98,
);
