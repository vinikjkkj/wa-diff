__d(
  "WAWebInteractiveMessageSync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCurrentUser",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdResolveMessages",
    "WAWebSyncdUtils",
    "WAWebWidFactory",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
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
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            (e.chatJidIndex = 1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.InteractiveMessageAction;
          }),
          (a.applyMutations = async function (n) {
            var t = this;
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: start apply interactive message",
                  ])),
              );
            var a = await o(
                "WAWebSyncdResolveMessages",
              ).resolveMessagesForMutations(n),
              i = a.incomingRemoteToLocalChatId,
              l = a.messagesInDB,
              d = 0,
              m = 0,
              p = [],
              _ = 0,
              f = [],
              g = 0,
              h = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n = e.indexParts,
                        a = e.value,
                        s = n[1],
                        u = n[2],
                        c = n[3],
                        h = n[4],
                        y = n[5];
                      if (!s || !u || !c || !h || !y)
                        return t.malformedActionIndex();
                      var C = a.interactiveMessageAction;
                      if (C == null)
                        return (
                          d++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var b = i.get(s),
                        v = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                          s,
                          u,
                          c,
                          h,
                        );
                      if (v == null) return t.malformedActionIndex();
                      if (b == null)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: v.toString(),
                            modelType: o("WAWebSyncdConst").SyncModelType.Msg,
                          },
                        };
                      var S = r("nullthrows")(
                          o("WAWebSyncdIndexUtils").syncKeyToMsgKey(b, u, c, h),
                        ),
                        R = l.find(function (e) {
                          return e.startsWith(
                            o(
                              "WAWebSyncdIndexUtils",
                            ).msgKeyToDbIdWithoutFromMeParticipant(S),
                          );
                        }),
                        L = C.agmId;
                      if (
                        (L != null &&
                          b != null &&
                          o("WAWebBackendApi").frontendFireAndForget(
                            "addGalaxyDisableCTAByAgmId",
                            { agmId: L, chatId: b },
                          ),
                        R == null)
                      )
                        return L != null && b != null
                          ? {
                              actionState:
                                o("WAWebSyncdConst").SyncActionState.Success,
                            }
                          : {
                              actionState:
                                o("WAWebSyncdConst").SyncActionState.Orphan,
                              orphanModel: {
                                modelId: v.toString(),
                                modelType:
                                  o("WAWebSyncdConst").SyncModelType.Msg,
                              },
                            };
                      var E = o("WAWebMsgCollection").MsgCollection.get(R);
                      return E &&
                        C.type ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode
                            .DISABLE_CTA
                        ? (o("WAWebBackendApi").frontendFireAndForget(
                            "addGalaxyDisableCTAMessageId",
                            { messageId: E.id.toString() },
                          ),
                          m++,
                          p.length < 3 && p.push(S.toString()),
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Success,
                          })
                        : (_++,
                          f.length < 3 && f.push(S.toString()),
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Skipped,
                          });
                    }
                    return (
                      g++,
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              d > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "interactive message sync: ",
                      " malformed mutations",
                    ])),
                  d,
                ),
              _ > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[star_msg_sync] ",
                      " msgs in storage not collection => ",
                      "",
                    ])),
                  _,
                  f,
                ),
              g > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "interactive message sync: ",
                      " operations not supported",
                    ])),
                  g,
                ),
              h
            );
          }),
          (a.$InteractiveMessageSync$p_1 = async function (t) {
            var e = t.actionType,
              n = t.agmId,
              a = t.flowId,
              i = t.msgKey,
              l = o("WATimeUtils").unixTimeMs(),
              s = babelHelpers.extends(
                { type: e },
                n != null ? { agmId: n } : {},
              ),
              u = { interactiveMessageAction: s },
              c = new (r("WAWebMsgKey"))({
                fromMe: i.fromMe,
                participant: i.participant,
                remote: o("WAWebWidFactory").createWid(
                  await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                    i.remote,
                    o("WAWebSyncdConst").Actions.InteractiveMessageAction,
                  ),
                ),
                id: i.id,
              });
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [].concat(
                o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(i),
                [a],
              ),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: u,
              timestamp: l,
              action: this.getAction(),
            });
          }),
          (a.sendDisableCTAMutation = async function (t, n, r) {
            var e = await this.$InteractiveMessageSync$p_1({
              actionType: o("WAWebProtobufSyncAction.pb")
                .SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode
                .DISABLE_CTA,
              agmId: r,
              flowId: n,
              msgKey: t,
            });
            await o("WAWebSyncdCoreApi").lockForSync([], [e], function () {
              return Promise.resolve();
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").MessageSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
