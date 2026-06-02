__d(
  "WAWebInteractiveMessageSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCurrentUser",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
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
      d,
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            (e.chatJidIndex = 1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getMessageKey = function (t) {
            var e = t[1],
              n = t[2],
              r = t[3],
              a = t[4];
            if (!(!e || !n || !r || !a))
              return o("WAWebSyncdIndexUtils").syncKeyToMsgKey(e, n, r, a);
          }),
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.InteractiveMessageAction;
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
              m = 0,
              p = 0,
              _ = 0,
              f = [],
              g = 0,
              h = [],
              y = 0,
              C = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n = e.indexParts,
                        a = e.value,
                        s = n[1],
                        u = n[2],
                        c = n[3],
                        d = n[4],
                        C = n[5];
                      if (!s || !u || !c || !d || !C)
                        return t.malformedActionIndex();
                      var b = a.interactiveMessageAction;
                      if (b == null)
                        return (
                          m++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var v = i.get(s),
                        S = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                          s,
                          u,
                          c,
                          d,
                        );
                      if (S == null) return t.malformedActionIndex();
                      if (v == null) {
                        if (
                          !o(
                            "WAWebLid1X1MigrationGating",
                          ).Lid1X1MigrationUtils.isLidMigrated()
                        ) {
                          var R = await o("WAWebSchemaChat")
                            .getChatTable()
                            .get(S.remote.toString());
                          R != null && p++;
                        }
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: S.toString(),
                            modelType: o("WASyncdConst").SyncModelType.Msg,
                          },
                        };
                      }
                      var L = r("nullthrows")(
                          o("WAWebSyncdIndexUtils").syncKeyToMsgKey(v, u, c, d),
                        ),
                        E = l.find(function (e) {
                          return e.startsWith(
                            o(
                              "WAWebSyncdIndexUtils",
                            ).msgKeyToDbIdWithoutFromMeParticipant(L),
                          );
                        }),
                        k = b.agmId;
                      if (
                        (k != null &&
                          v != null &&
                          o("WAWebBackendApi").frontendFireAndForget(
                            "addGalaxyDisableCTAByAgmId",
                            { agmId: k, chatId: v },
                          ),
                        E == null)
                      )
                        return k != null && v != null
                          ? {
                              actionState:
                                o("WASyncdConst").SyncActionState.Success,
                            }
                          : {
                              actionState:
                                o("WASyncdConst").SyncActionState.Orphan,
                              orphanModel: {
                                modelId: S.toString(),
                                modelType: o("WASyncdConst").SyncModelType.Msg,
                              },
                            };
                      var I = o("WAWebMsgCollection").MsgCollection.get(E);
                      return I &&
                        b.type ===
                          o("WAWebProtobufSyncAction.pb")
                            .SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode
                            .DISABLE_CTA
                        ? (o("WAWebBackendApi").frontendFireAndForget(
                            "addGalaxyDisableCTAMessageId",
                            { messageId: I.id.toString() },
                          ),
                          _++,
                          f.length < 3 && f.push(L.toString()),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          })
                        : (g++,
                          h.length < 3 && h.push(L.toString()),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Skipped,
                          });
                    }
                    return (
                      y++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              m > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "interactive message sync: ",
                      " malformed mutations",
                    ])),
                  m,
                ),
              p > 0 &&
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] interactive msg sync: ",
                      " chats via fallback",
                    ])),
                  p,
                ),
              g > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[star_msg_sync] ",
                      " msgs in storage not collection => ",
                      "",
                    ])),
                  g,
                  h,
                ),
              y > 0 &&
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "interactive message sync: ",
                      " operations not supported",
                    ])),
                  y,
                ),
              C
            );
          }),
          (a.$InteractiveMessageSync$p_1 = async function (t, n, a, i) {
            var e = o("WATimeUtils").unixTimeMs(),
              l = babelHelpers.extends(
                { type: a },
                i != null ? { agmId: i } : {},
              ),
              s = { interactiveMessageAction: l },
              u = new (r("WAWebMsgKey"))({
                fromMe: t.fromMe,
                participant: t.participant,
                remote: o("WAWebWidFactory").createWid(
                  await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                    t.remote,
                    o("WASyncdConst").Actions.InteractiveMessageAction,
                  ),
                ),
                id: t.id,
              });
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [].concat(
                o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(t),
                [n],
              ),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: s,
              timestamp: e,
              action: this.getAction(),
            });
          }),
          (a.sendDisableCTAMutation = async function (t, n, r) {
            var e = await this.$InteractiveMessageSync$p_1(
              t,
              n,
              o("WAWebProtobufSyncAction.pb")
                .SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode
                .DISABLE_CTA,
              r,
            );
            await o("WAWebSyncdCoreApi").lockForSync([], [e], function () {
              return Promise.resolve();
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").MessageSyncdActionBase),
      p = new m();
    l.default = p;
  },
  98,
);
