__d(
  "WAWebChatAssignmentOpenedStatusSync",
  [
    "Promise",
    "WATimeUtils",
    "WAWebBizChatAssignmentOpenedAction",
    "WAWebChatAssignmentCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
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
            (e.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.ChatAssignmentOpenedStatus;
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
                                  o("WAWebSyncdConst").Actions
                                    .ChatAssignmentOpenedStatus,
                                ),
                                t,
                              ],
                              value: l,
                              action:
                                o("WAWebSyncdConst").Actions
                                  .ChatAssignmentOpenedStatus,
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
                                      o("WAWebSyncdConst").SyncActionState
                                        .Orphan,
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
                                        o("WAWebSyncdConst").SyncActionState
                                          .Orphan,
                                      orphanModel: {
                                        modelId: d,
                                        modelType:
                                          o("WAWebSyncdConst").SyncModelType
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
                                        o("WAWebSyncdConst").SyncActionState
                                          .Success,
                                    });
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
