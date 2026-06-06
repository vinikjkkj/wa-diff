__d(
  "WAWebChatAssignmentOpenedStatusSync",
  [
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBizChatAssignmentOpenedAction",
    "WAWebChatAssignmentCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
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
            return o("WASyncdConst").Actions.ChatAssignmentOpenedStatus;
          }),
          (n.createChatOpenedMutations = async function (t) {
            var e = this,
              n = o("WATimeUtils").unixTimeMs(),
              r = await Promise.all(
                t.map(async function (t) {
                  var r = t.agentId,
                    a = t.chatId,
                    i = t.chatOpenedByAgent,
                    l = { chatAssignmentOpenedStatus: { chatOpened: i } };
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
                        o("WASyncdConst").Actions.ChatAssignmentOpenedStatus,
                      ),
                      r,
                    ],
                    value: l,
                    action:
                      o("WASyncdConst").Actions.ChatAssignmentOpenedStatus,
                    version: o("WASyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION,
                  });
                }),
              );
            return r;
          }),
          (n.applyMutations = async function (t) {
            var e = this,
              n = [],
              r = await Promise.all(
                t.map(async function (t) {
                  try {
                    var r = t.indexParts,
                      a = r[1],
                      i = r[2];
                    if (a == null || i == null) return e.malformedActionIndex();
                    if (t.operation === "set") {
                      var l = await o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(a),
                      );
                      if (!l.success)
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: l.orphanModel,
                        };
                      var s = o("WAWebWidFactory").createWid(l.chat.id),
                        u = t.value.chatAssignmentOpenedStatus;
                      if (!u)
                        return o("WAWebSyncdIndexUtils").malformedActionValue(
                          e.collectionName,
                        );
                      var c = u.chatOpened;
                      if (c == null)
                        return o("WAWebSyncdIndexUtils").malformedActionValue(
                          e.collectionName,
                        );
                      var d = s.toJid() + "_" + i,
                        m = o(
                          "WAWebChatAssignmentCollection",
                        ).ChatAssignmentCollection.get(d);
                      return m == null
                        ? {
                            actionState:
                              o("WASyncdConst").SyncActionState.Orphan,
                            orphanModel: {
                              modelId: d,
                              modelType:
                                o("WASyncdConst").SyncModelType.ChatAssignment,
                            },
                          }
                        : (n.push({
                            id: d,
                            chatId: s.toJid(),
                            agentId: i,
                            chatOpenedByAgent: c,
                          }),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          });
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
            return (
              await o(
                "WAWebBizChatAssignmentOpenedAction",
              ).updateLocalOpenedState(n),
              r
            );
          }),
          t
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      s = new e();
    l.default = s;
  },
  98,
);
