__d(
  "WAWebAiThreadPinSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadPinSyncUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdGetThread",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function (t) {
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
            return o("WASyncdConst").Actions.AiThreadPin;
          }),
          (a.getIndexParts = async function (t) {
            var e = t.key.remote,
              n = await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                e,
                o("WASyncdConst").Actions.AiThreadPin,
              ),
              r = t.key.id;
            return [n, r];
          }),
          (a.validateSyncActionValue = function (t) {
            var e = t.threadPinAction;
            return e == null ? !1 : e.pinned != null;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = 0,
              i = 0,
              l = await Promise.all(
                n.map(async function (e, n) {
                  try {
                    if (e.operation !== "set")
                      return (
                        a++,
                        {
                          index: n,
                          result: {
                            actionState:
                              o("WASyncdConst").SyncActionState.Unsupported,
                          },
                        }
                      );
                    var l = e.indexParts,
                      s = e.value,
                      u = l[1],
                      c = l[2];
                    if (!u || !c)
                      return { index: n, result: t.malformedActionIndex() };
                    if (
                      !r("WAWebWid").isWid(u) ||
                      !r("isStringNotNullAndNotWhitespaceOnly")(c)
                    )
                      return { index: n, result: t.malformedActionIndex() };
                    if (!t.validateSyncActionValue(s))
                      return (
                        i++,
                        {
                          index: n,
                          result: o(
                            "WAWebSyncdIndexUtils",
                          ).malformedActionValue(t.collectionName),
                        }
                      );
                    var d = o("WAWebWidFactory").createWid(u);
                    if (!d.isBot())
                      return { index: n, result: t.malformedActionIndex() };
                    var m = o("WAWebWidFactory").asBotWidOrThrow(d);
                    if (
                      !o("WAWebBotBaseGating").isBotEnabled() ||
                      !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()
                    )
                      return {
                        index: n,
                        result: {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        },
                      };
                    var p = o(
                        "WAWebAiThreadCreationUtils",
                      ).createAiThreadFromMutationIndex(m, c),
                      _ = await o(
                        "WAWebSyncdGetThread",
                      ).resolveThreadForMutationIndex(p);
                    return _.success
                      ? {
                          index: n,
                          threadId: p,
                          thread: _.thread,
                          value: s,
                          timestamp: e.timestamp,
                        }
                      : {
                          index: n,
                          result: {
                            actionState:
                              o("WASyncdConst").SyncActionState.Orphan,
                            orphanModel: _.orphanModel,
                          },
                        };
                  } catch (e) {
                    return {
                      index: n,
                      result: {
                        actionState: o("WASyncdConst").SyncActionState.Failed,
                      },
                    };
                  }
                }),
              ),
              u = [];
            for (var c of l)
              if (c.result != null) u.push(c.result);
              else
                try {
                  var d = await this.$AiThreadPinSync$p_1(
                    c.threadId,
                    c.thread,
                    c.value,
                    c.timestamp,
                  );
                  u.push(d);
                } catch (e) {
                  u.push({
                    actionState: o("WASyncdConst").SyncActionState.Failed,
                  });
                }
            return (
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][ai-thread-pin] ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][ai-thread-pin]: ",
                      " malformed mutations",
                    ])),
                  i,
                ),
              u
            );
          }),
          (a.$AiThreadPinSync$p_1 = async function (t, n, r, a) {
            var e,
              i = ((e = r.threadPinAction) == null ? void 0 : e.pinned) === !0;
            if (!i)
              return (
                await o("WAWebAiThreadPinSyncUtils").updatePinState(
                  t,
                  n,
                  void 0,
                ),
                { actionState: o("WASyncdConst").SyncActionState.Success }
              );
            var l = n.pinThreadTimestamp;
            if (l != null && l > 0)
              return (
                await o("WAWebAiThreadPinSyncUtils").updatePinState(t, n, a),
                { actionState: o("WASyncdConst").SyncActionState.Success }
              );
            var s = t.key.remote.toString(),
              c = await o("WAWebAiThreadPinSyncUtils").getLocalThreadPins(s),
              d = o("WAWebBotGating").getAiThreadPinMaxCount();
            if (c.length < d)
              return (
                await o("WAWebAiThreadPinSyncUtils").updatePinState(t, n, a),
                { actionState: o("WASyncdConst").SyncActionState.Success }
              );
            var m = c.filter(function (e) {
              return e.isOrphan !== !0;
            });
            if (m.length === 0)
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][ai-thread-pin] all pins orphan, drop incoming ",
                      "",
                    ])),
                  t.toString(),
                ),
                { actionState: o("WASyncdConst").SyncActionState.Success }
              );
            var p = m.reduce(function (e, t) {
              return t.timestamp < e.timestamp ? t : e;
            });
            return (
              a > p.timestamp &&
                (await this.$AiThreadPinSync$p_2(p.threadId, p.dbRow, a),
                await o("WAWebAiThreadPinSyncUtils").updatePinState(t, n, a)),
              { actionState: o("WASyncdConst").SyncActionState.Success }
            );
          }),
          (a.$AiThreadPinSync$p_2 = async function (t, n, r) {
            (n != null
              ? await o("WAWebAiThreadPinSyncUtils").updatePinState(
                  t,
                  n,
                  void 0,
                )
              : o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][ai-thread-pin] evict pin, no DB row ",
                      "",
                    ])),
                  t.toString(),
                ),
              await o("WAWebSyncdDb").appendPendingMutationsRows([
                await this.buildMutation(t, !1, r),
              ]));
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
              value: { threadPinAction: { pinned: n } },
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
      m = new d();
    l.default = m;
  },
  98,
);
