__d(
  "WAWebAiThreadRenameSync",
  [
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
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.AiThreadRename;
          }),
          (a.getIndexParts = async function (t) {
            var e = t.key.remote,
              n = await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                e,
                o("WASyncdConst").Actions.AiThreadRename,
              ),
              r = t.key.id;
            return [n, r];
          }),
          (a.validateSyncActionValue = function (t) {
            var e = t.aiThreadRenameAction;
            if (e == null) return !1;
            var n = e.newTitle;
            return r("isStringNotNullAndNotWhitespaceOnly")(n);
          }),
          (a.applyMutations = function (n) {
            var t = this,
              a = 0,
              i = 0;
            return Promise.all(
              n.map(async function (e) {
                try {
                  if (e.operation !== "set")
                    return (
                      a++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  var n = e.indexParts,
                    l = e.value,
                    s = n[1],
                    u = n[2];
                  if (
                    !s ||
                    !u ||
                    !r("WAWebWid").isWid(s) ||
                    !r("isStringNotNullAndNotWhitespaceOnly")(u)
                  )
                    return t.malformedActionIndex();
                  if (!t.validateSyncActionValue(l))
                    return (
                      i++,
                      o("WAWebSyncdIndexUtils").malformedActionValue(
                        t.collectionName,
                      )
                    );
                  var c = o("WAWebWidFactory").createWid(s);
                  if (!c.isBot()) return t.malformedActionIndex();
                  var d = o("WAWebWidFactory").asBotWidOrThrow(c);
                  if (
                    !o("WAWebBotBaseGating").isBotEnabled() ||
                    !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()
                  )
                    return {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    };
                  var m = o(
                      "WAWebAiThreadCreationUtils",
                    ).createAiThreadFromMutationIndex(d, u),
                    p = await o(
                      "WAWebSyncdGetThread",
                    ).resolveThreadForMutationIndex(m);
                  return p.success
                    ? t.$AiThreadRenameSync$p_1(m, p.thread, l)
                    : {
                        actionState: o("WASyncdConst").SyncActionState.Orphan,
                        orphanModel: p.orphanModel,
                      };
                } catch (e) {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Failed,
                  };
                }
              }),
            ).then(function (t) {
              return (
                a > 0 &&
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-rename] ",
                        " operations not supported",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-rename]: ",
                        " malformed mutations",
                      ])),
                    i,
                  ),
                t
              );
            });
          }),
          (a.$AiThreadRenameSync$p_1 = async function (t, n, a) {
            var e,
              i,
              l = r("WANullthrows")(
                (e = a.aiThreadRenameAction) == null ? void 0 : e.newTitle,
              ),
              s = o("WATimeUtils").castToUnixTime(
                r("WANullthrows")(n.lastMessageTimestamp),
              ),
              u = o("WATimeUtils").castToUnixTime(
                r("WANullthrows")(n.creationTimestamp),
              ),
              c = r("WANullthrows")(
                (i = n.aiThreadInfo) == null ? void 0 : i.aiThreadType,
              ),
              d = {
                threadId: t,
                chatId: t.key.remote,
                lastMessageTimestamp: s,
                creationTimestamp: u,
                aiThreadInfo: o(
                  "WAWebAiThreadTypeUtils",
                ).getAiThreadInfoFromType(l, c),
              };
            return (
              await o(
                "WAWebThreadMetadataBulkJob",
              ).bulkCreateOrUpdateThreadsMetadata([d]),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateChatAiThreads",
                { aiThreads: [d] },
              ),
              Promise.resolve({
                actionState: o("WASyncdConst").SyncActionState.Success,
              })
            );
          }),
          (a.sendMutation = async function (t, n) {
            var e = await this.buildMutation(
              t,
              n,
              o("WATimeUtils").unixTimeMs(),
            );
            await o("WAWebSyncdCoreApi").lockForSync([], [e], function () {
              return Promise.resolve();
            });
          }),
          (a.buildMutation = async function (t, n, r) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: await this.getIndexParts(t),
              value: { aiThreadRenameAction: { newTitle: n } },
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: r,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
