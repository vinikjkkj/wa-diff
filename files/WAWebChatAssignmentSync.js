__d(
  "WAWebChatAssignmentSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebBizChatAssignmentAction",
    "WAWebChatAssignmentCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChatAssignment",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
          }),
          (i.getAction = function () {
            return o("WAWebSyncdConst").Actions.ChatAssignment;
          }),
          (i.createChatAssignmentMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = o("WATimeUtils").unixTimeMs(),
                  a = yield (s || (s = n("Promise"))).all(
                    e.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var n = e.agentId,
                              a = e.chatId,
                              i = { chatAssignment: { deviceAgentId: n } };
                            return o(
                              "WAWebSyncdActionUtils",
                            ).buildPendingMutation({
                              timestamp: r,
                              collection: t.collectionName,
                              operation: o("WAWebProtobufsServerSync.pb")
                                .SyncdMutation$SyncdOperation.SET,
                              indexArgs: [
                                yield o(
                                  "WAWebSyncdGetChat",
                                ).getChatJidMutationIndexForChat(
                                  o("WAWebWidFactory").createWid(a),
                                  o("WAWebSyncdConst").Actions.ChatAssignment,
                                ),
                              ],
                              value: i,
                              action:
                                o("WAWebSyncdConst").Actions.ChatAssignment,
                              version:
                                o("WAWebSyncdConst")
                                  .CHAT_ASSIGNMENT_SYNC_VERSION,
                            });
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return a;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = [],
                  l = [],
                  u = [],
                  c = yield (s || (s = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = e.indexParts,
                                n = t[1];
                              if (!n) return a.malformedActionIndex();
                              if (e.operation === "set") {
                                var s,
                                  c = e.value.chatAssignment;
                                if (!c)
                                  return o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(a.collectionName);
                                var d = (s = c.deviceAgentId) != null ? s : "",
                                  m = o(
                                    "WAWebAgentCollection",
                                  ).AgentCollection.get(d);
                                if (d !== "" && m == null)
                                  return {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Orphan,
                                    orphanModel: {
                                      modelId: d,
                                      modelType:
                                        o("WAWebSyncdConst").SyncModelType
                                          .Agent,
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
                                      o("WAWebSyncdConst").SyncActionState
                                        .Orphan,
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
                                    u.push({
                                      chatId: _,
                                      agent: m,
                                      timestamp: Math.floor(e.timestamp / 1e3),
                                    }),
                                  {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Success,
                                  }
                                );
                              }
                              return {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState
                                    .Unsupported,
                              };
                            } catch (e) {
                              return {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Failed,
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
                  ).createChatAssignmentSystemMsgs(u),
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
                var d = i.map(function (e) {
                  return e.id.toString();
                });
                return (
                  o("WAWebSyncdOrphan")
                    .checkOrphanChatAssignments(d)
                    .catch(function () {
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[syncd] chat_assignment: orphan chat assignments check failed",
                            ])),
                        )
                        .sendLogs("failed-to-check-orphan-chat-assignments");
                    }),
                  c
                );
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
      c = new u();
    l.default = c;
  },
  98,
);
