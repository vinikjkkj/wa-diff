__d(
  "WAWebChatAssignmentSync",
  [
    "Promise",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebBizChatAssignmentAction",
    "WAWebChatAssignmentCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChatAssignment",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return o("WASyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.ChatAssignment;
          }),
          (i.createChatAssignmentMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = o("WATimeUtils").unixTimeMs(),
                  i = yield (e || (e = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var t = e.agentId,
                              n = e.chatId,
                              i = { chatAssignment: { deviceAgentID: t } };
                            return o(
                              "WAWebSyncdActionUtils",
                            ).buildPendingMutation({
                              timestamp: a,
                              collection: r.collectionName,
                              operation: o("WAWebProtobufsServerSync.pb")
                                .SyncdMutation$SyncdOperation.SET,
                              indexArgs: [
                                yield o(
                                  "WAWebSyncdGetChat",
                                ).getChatJidMutationIndexForChat(
                                  o("WAWebWidFactory").createWid(n),
                                  o("WASyncdConst").Actions.ChatAssignment,
                                ),
                              ],
                              value: i,
                              action: o("WASyncdConst").Actions.ChatAssignment,
                              version:
                                o("WASyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION,
                            });
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return i;
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = [],
                  l = [],
                  s = [],
                  u = yield (e || (e = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = e.indexParts,
                                n = t[1];
                              if (!n) return a.malformedActionIndex();
                              if (e.operation === "set") {
                                var u,
                                  c = e.value.chatAssignment;
                                if (!c)
                                  return o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(a.collectionName);
                                var d = (u = c.deviceAgentID) != null ? u : "",
                                  m = o(
                                    "WAWebAgentCollection",
                                  ).AgentCollection.get(d);
                                if (d !== "" && m == null)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                      modelId: d,
                                      modelType:
                                        o("WASyncdConst").SyncModelType.Agent,
                                    },
                                  };
                                var p = yield o(
                                  "WAWebSyncdGetChat",
                                ).resolveChatForMutationIndex(
                                  o("WAWebWidFactory").createWid(n),
                                );
                                if (!p.success)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: p.orphanModel,
                                  };
                                var _ = o("WAWebWidFactory").createWid(
                                  p.chat.id,
                                );
                                return (
                                  o("WAWebChatAssignmentCollection")
                                    .ChatAssignmentCollection.getAgentCollectionForChatId(
                                      _,
                                    )
                                    .filter(function (e) {
                                      return e.id !== d;
                                    })
                                    .forEach(function (e) {
                                      return l.push(_.toJid() + "_" + e.id);
                                    }),
                                  d !== "" &&
                                    i.push({
                                      id: _.toJid() + "_" + d,
                                      chatId: _.toJid(),
                                      agentId: d,
                                      chatOpenedByAgent: !1,
                                    }),
                                  r(
                                    "WAWebSyncBootstrap",
                                  ).isSyncDBootstrapInProcess() ||
                                    s.push({
                                      chatId: _,
                                      agent: m,
                                      timestamp: Math.floor(e.timestamp / 1e3),
                                    }),
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Success,
                                  }
                                );
                              }
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Unsupported,
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
                (yield o("WAWebSchemaChatAssignment")
                  .getChatAssignmentTable()
                  .bulkCreateOrMerge(i),
                  o(
                    "WAWebChatAssignmentCollection",
                  ).ChatAssignmentCollection.processChatAssignments(i),
                  yield o("WAWebSchemaChatAssignment")
                    .getChatAssignmentTable()
                    .bulkRemove(l),
                  o(
                    "WAWebChatAssignmentCollection",
                  ).ChatAssignmentCollection.remove(l),
                  o(
                    "WAWebBizChatAssignmentAction",
                  ).createChatAssignmentSystemMsgs(s),
                  o(
                    "WAWebBizChatAssignmentAction",
                  ).triggerChatAssignmentNotification(
                    i,
                    t
                      .map(function (e) {
                        return e.timestamp;
                      })
                      .join("-"),
                  ));
                var c = i.map(function (e) {
                  return e.id.toString();
                });
                return (o("WAWebSyncdOrphan").checkOrphanChatAssignments(c), u);
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
