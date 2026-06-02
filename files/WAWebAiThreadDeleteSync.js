__d(
  "WAWebAiThreadDeleteSync",
  [
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
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.AiThreadDelete;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = 0,
              i = await Promise.all(
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
                      i = n[1],
                      l = n[2];
                    if (
                      !i ||
                      !l ||
                      !r("WAWebWid").isWid(i) ||
                      !r("isStringNotNullAndNotWhitespaceOnly")(l)
                    )
                      return t.malformedActionIndex();
                    var s = o("WAWebWidFactory").createWid(i);
                    if (!s.isBot()) return t.malformedActionIndex();
                    var u = o("WAWebWidFactory").asBotWidOrThrow(s);
                    if (
                      !o("WAWebBotBaseGating").isBotEnabled() ||
                      !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()
                    )
                      return {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      };
                    var c = o(
                        "WAWebAiThreadCreationUtils",
                      ).createAiThreadFromMutationIndex(u, l),
                      d = await o(
                        "WAWebSyncdGetThread",
                      ).resolveThreadForMutationIndex(c);
                    return d.success
                      ? t.$AiThreadDeleteSync$p_1(u, c, d.thread)
                      : {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: d.orphanModel,
                        };
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][ai-thread-delete] ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i
            );
          }),
          (a.$AiThreadDeleteSync$p_1 = async function (t, n, r) {
            var e = await o("WAWebThreadMetadataBulkJob").bulkDeleteThreads(t, [
              n,
            ]);
            return (
              o("WAWebBackendApi").frontendFireAndForget(
                "deleteChatAiThreads",
                { chatId: t, threadIds: [n], msgIds: e },
              ),
              Promise.resolve({
                actionState: o("WASyncdConst").SyncActionState.Success,
              })
            );
          }),
          (a.getIndexParts = async function (t) {
            var e = t.key.remote,
              n = await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                e,
                o("WASyncdConst").Actions.AiThreadDelete,
              ),
              r = t.key.id;
            return [n, r];
          }),
          (a.sendMutation = async function (t) {
            var e = this,
              n = o("WATimeUtils").unixTimeMs(),
              r = await Promise.all(
                t.map(function (t) {
                  return e.buildMutation(t, n);
                }),
              );
            await o("WAWebSyncdCoreApi").lockForSync([], r, function () {
              return Promise.resolve();
            });
          }),
          (a.buildMutation = async function (t, n) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: await this.getIndexParts(t),
              value: {},
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: n,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
