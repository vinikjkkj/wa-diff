__d(
  "WAWebChatAssignmentSync",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.ChatAssignment;
          }),
          (a.createChatAssignmentMutations = async function (t) {
            var e = this,
              n = o("WATimeUtils").unixTimeMs(),
              r = await Promise.all(
                t.map(async function (t) {
                  var r = t.agentId,
                    a = t.chatId,
                    i = { chatAssignment: { deviceAgentId: r } };
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
                        o("WAWebSyncdConst").Actions.ChatAssignment,
                      ),
                    ],
                    value: i,
                    action: o("WAWebSyncdConst").Actions.ChatAssignment,
                    version: o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION,
                  });
                }),
              );
            return r;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = [],
              i = [],
              l = [],
              s = await Promise.all(
                n.map(async function (e) {
                  try {
                    var n = e.indexParts,
                      s = n[1];
                    if (!s) return t.malformedActionIndex();
                    if (e.operation === "set") {
                      var u,
                        c = e.value.chatAssignment;
                      if (!c)
                        return o("WAWebSyncdIndexUtils").malformedActionValue(
                          t.collectionName,
                        );
                      var d = (u = c.deviceAgentId) != null ? u : "",
                        m = o("WAWebAgentCollection").AgentCollection.get(d);
                      if (d !== "" && m == null)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: d,
                            modelType: o("WAWebSyncdConst").SyncModelType.Agent,
                          },
                        };
                      var p = await o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(s),
                      );
                      if (!p.success)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
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
                            return i.push(_.toJid() + "_" + e.id);
                          }),
                        d !== "" &&
                          a.push({
                            id: _.toJid() + "_" + d,
                            chatId: _.toJid(),
                            agentId: d,
                            chatOpenedByAgent: !1,
                          }),
                        r("WAWebSyncBootstrap").isSyncDBootstrapInProcess() ||
                          l.push({
                            chatId: _,
                            agent: m,
                            timestamp: Math.floor(e.timestamp / 1e3),
                          }),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    };
                  } catch (e) {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            (await o("WAWebSchemaChatAssignment")
              .getChatAssignmentTable()
              .bulkCreateOrMerge(a),
              o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.processChatAssignments(a),
              await o("WAWebSchemaChatAssignment")
                .getChatAssignmentTable()
                .bulkRemove(i),
              o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.remove(i),
              o("WAWebBizChatAssignmentAction").createChatAssignmentSystemMsgs(
                l,
              ),
              o(
                "WAWebBizChatAssignmentAction",
              ).triggerChatAssignmentNotification(
                a,
                n
                  .map(function (e) {
                    return e.timestamp;
                  })
                  .join("-"),
              ));
            var u = a.map(function (e) {
              return e.id.toString();
            });
            return (
              o("WAWebSyncdOrphan")
                .checkOrphanChatAssignments(u)
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
              s
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
