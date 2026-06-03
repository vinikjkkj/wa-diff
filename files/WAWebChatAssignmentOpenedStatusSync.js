__d(
  "WAWebChatAssignmentOpenedStatusSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
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
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return o("WASyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.ChatAssignmentOpenedStatus;
          }),
          (a.createChatOpenedMutations = (function () {
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
                              i = e.chatOpenedByAgent,
                              l = {
                                chatAssignmentOpenedStatus: { chatOpened: i },
                              };
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
                                  o("WASyncdConst").Actions
                                    .ChatAssignmentOpenedStatus,
                                ),
                                t,
                              ],
                              value: l,
                              action:
                                o("WASyncdConst").Actions
                                  .ChatAssignmentOpenedStatus,
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
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = [],
                  i = yield (e || (e = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = e.indexParts,
                                n = t[1],
                                i = t[2];
                              if (n == null || i == null)
                                return r.malformedActionIndex();
                              if (e.operation === "set") {
                                var l = yield o(
                                  "WAWebSyncdGetChat",
                                ).resolveChatForMutationIndex(
                                  o("WAWebWidFactory").createWid(n),
                                );
                                if (!l.success)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: l.orphanModel,
                                  };
                                var s = o("WAWebWidFactory").createWid(
                                    l.chat.id,
                                  ),
                                  u = e.value.chatAssignmentOpenedStatus;
                                if (!u)
                                  return o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(r.collectionName);
                                var c = u.chatOpened;
                                if (c == null)
                                  return o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(r.collectionName);
                                var d = s.toJid() + "_" + i,
                                  m = o(
                                    "WAWebChatAssignmentCollection",
                                  ).ChatAssignmentCollection.get(d);
                                return m == null
                                  ? {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Orphan,
                                      orphanModel: {
                                        modelId: d,
                                        modelType:
                                          o("WASyncdConst").SyncModelType
                                            .ChatAssignment,
                                      },
                                    }
                                  : (a.push({
                                      id: d,
                                      chatId: s.toJid(),
                                      agentId: i,
                                      chatOpenedByAgent: c,
                                    }),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    });
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
                return (
                  yield o(
                    "WAWebBizChatAssignmentOpenedAction",
                  ).updateLocalOpenedState(a),
                  i
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
