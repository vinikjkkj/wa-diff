__d(
  "WAWebChatAssignmentSync",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.chatJidIndex = 1),
            (t.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getVersion = function () {
            return o("WASyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
          }),
          (n.getAction = function () {
            return o("WASyncdConst").Actions.ChatAssignment;
          }),
          (n.createChatAssignmentMutations = async function (t) {
            var e = this,
              n = o("WATimeUtils").unixTimeMs(),
              r = await Promise.all(
                t.map(async function (t) {
                  var r = t.agentId,
                    a = t.chatId,
                    i = { chatAssignment: { deviceAgentID: r } };
                  return o("WAWebSyncdActionUtils").buildPendingMutation({
                    timestamp: n,
                    collection: e.collectionName,
                    operation: o("WAWebProtobufsServerSync.pb")
                      .SyncdMutation$SyncdOperation.SET,
                    indexArgs: [
                      await o(
                        "WAWebSyncdGetChat",
                      ).getChatJidMutationIndexForChat(
                        o("WAWebWidFactory").createWid(a),
                        o("WASyncdConst").Actions.ChatAssignment,
                      ),
                    ],
                    value: i,
                    action: o("WASyncdConst").Actions.ChatAssignment,
                    version: o("WASyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION,
                  });
                }),
              );
            return r;
          }),
          (n.applyMutations = async function (t) {
            var e = this,
              n = [],
              a = [],
              i = [],
              l = await Promise.all(
                t.map(async function (t) {
                  try {
                    var l = t.indexParts,
                      s = l[1];
                    if (!s) return e.malformedActionIndex();
                    if (t.operation === "set") {
                      var u,
                        c = t.value.chatAssignment;
                      if (!c)
                        return o("WAWebSyncdIndexUtils").malformedActionValue(
                          e.collectionName,
                        );
                      var d = (u = c.deviceAgentID) != null ? u : "",
                        m = o("WAWebAgentCollection").AgentCollection.get(d);
                      if (d !== "" && m == null)
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: d,
                            modelType: o("WASyncdConst").SyncModelType.Agent,
                          },
                        };
                      var p = await o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(s),
                      );
                      if (!p.success)
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: p.orphanModel,
                        };
                      var _ = o("WAWebWidFactory").createWid(p.chat.id);
                      return (
                        o("WAWebChatAssignmentCollection")
                          .ChatAssignmentCollection.getAgentCollectionForChatId(
                            _,
                          )
                          .filter(function (e) {
                            return e.id !== d;
                          })
                          .forEach(function (e) {
                            return a.push(_.toJid() + "_" + e.id);
                          }),
                        d !== "" &&
                          n.push({
                            id: _.toJid() + "_" + d,
                            chatId: _.toJid(),
                            agentId: d,
                            chatOpenedByAgent: !1,
                          }),
                        r("WAWebSyncBootstrap").isSyncDBootstrapInProcess() ||
                          i.push({
                            chatId: _,
                            agent: m,
                            timestamp: Math.floor(t.timestamp / 1e3),
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
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            (await o("WAWebSchemaChatAssignment")
              .getChatAssignmentTable()
              .bulkCreateOrMerge(n),
              o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.processChatAssignments(n),
              await o("WAWebSchemaChatAssignment")
                .getChatAssignmentTable()
                .bulkRemove(a),
              o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.remove(a),
              o("WAWebBizChatAssignmentAction").createChatAssignmentSystemMsgs(
                i,
              ),
              o(
                "WAWebBizChatAssignmentAction",
              ).triggerChatAssignmentNotification(
                n,
                t
                  .map(function (e) {
                    return e.timestamp;
                  })
                  .join("-"),
              ));
            var s = n.map(function (e) {
              return e.id.toString();
            });
            return (o("WAWebSyncdOrphan").checkOrphanChatAssignments(s), l);
          }),
          t
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      s = new e();
    l.default = s;
  },
  98,
);
