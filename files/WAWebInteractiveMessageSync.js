__d(
  "WAWebInteractiveMessageSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function a() {
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
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getMessageKey = function (t) {
            var e = t[1],
              n = t[2],
              r = t[3],
              a = t[4];
            if (!(!e || !n || !r || !a))
              return o("WAWebSyncdIndexUtils").syncKeyToMsgKey(e, n, r, a);
          }),
          (i.getVersion = function () {
            return 1;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.InteractiveMessageAction;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this;
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: start apply interactive message",
                      ])),
                  );
                var i = yield o(
                    "WAWebSyncdResolveMessages",
                  ).resolveMessagesForMutations(t),
                  l = i.incomingRemoteToLocalChatId,
                  p = i.messagesInDB,
                  _ = 0,
                  f = 0,
                  g = 0,
                  h = [],
                  y = 0,
                  C = [],
                  b = 0,
                  v = yield (m || (m = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var t = e.indexParts,
                                  n = e.value,
                                  i = t[1],
                                  s = t[2],
                                  u = t[3],
                                  c = t[4],
                                  d = t[5];
                                if (!i || !s || !u || !c || !d)
                                  return a.malformedActionIndex();
                                var m = n.interactiveMessageAction;
                                if (m == null)
                                  return (
                                    _++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName)
                                  );
                                var v = l.get(i),
                                  S = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                    i,
                                    s,
                                    u,
                                    c,
                                  );
                                if (S == null) return a.malformedActionIndex();
                                if (v == null) {
                                  if (
                                    !o(
                                      "WAWebLid1X1MigrationGating",
                                    ).Lid1X1MigrationUtils.isLidMigrated()
                                  ) {
                                    var R = yield o("WAWebSchemaChat")
                                      .getChatTable()
                                      .get(S.remote.toString());
                                    R != null && f++;
                                  }
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                      modelId: S.toString(),
                                      modelType:
                                        o("WASyncdConst").SyncModelType.Msg,
                                    },
                                  };
                                }
                                var L = r("nullthrows")(
                                    o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                      v,
                                      s,
                                      u,
                                      c,
                                    ),
                                  ),
                                  E = p.find(function (e) {
                                    return e.startsWith(
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).msgKeyToDbIdWithoutFromMeParticipant(L),
                                    );
                                  }),
                                  k = m.agmId;
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
                                          o("WASyncdConst").SyncActionState
                                            .Success,
                                      }
                                    : {
                                        actionState:
                                          o("WASyncdConst").SyncActionState
                                            .Orphan,
                                        orphanModel: {
                                          modelId: S.toString(),
                                          modelType:
                                            o("WASyncdConst").SyncModelType.Msg,
                                        },
                                      };
                                var I =
                                  o("WAWebMsgCollection").MsgCollection.get(E);
                                return I &&
                                  m.type ===
                                    o("WAWebProtobufSyncAction.pb")
                                      .SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode
                                      .DISABLE_CTA
                                  ? (o("WAWebBackendApi").frontendFireAndForget(
                                      "addGalaxyDisableCTAMessageId",
                                      { messageId: I.id.toString() },
                                    ),
                                    g++,
                                    h.length < 3 && h.push(L.toString()),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    })
                                  : (y++,
                                    C.length < 3 && C.push(L.toString()),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Skipped,
                                    });
                              }
                              return (
                                b++,
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
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
                  _ > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "interactive message sync: ",
                          " malformed mutations",
                        ])),
                      _,
                    ),
                  f > 0 &&
                    o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] interactive msg sync: ",
                          " chats via fallback",
                        ])),
                      f,
                    ),
                  y > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[star_msg_sync] ",
                          " msgs in storage not collection => ",
                          "",
                        ])),
                      y,
                      C,
                    ),
                  b > 0 &&
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "interactive message sync: ",
                          " operations not supported",
                        ])),
                      b,
                    ),
                  v
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.$InteractiveMessageSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                var i = o("WATimeUtils").unixTimeMs(),
                  l = babelHelpers.extends(
                    { type: n },
                    a != null ? { agmId: a } : {},
                  ),
                  s = { interactiveMessageAction: l },
                  u = new (r("WAWebMsgKey"))({
                    fromMe: e.fromMe,
                    participant: e.participant,
                    remote: o("WAWebWidFactory").createWid(
                      yield o(
                        "WAWebSyncdGetChat",
                      ).getChatJidMutationIndexForChat(
                        e.remote,
                        o("WASyncdConst").Actions.InteractiveMessageAction,
                      ),
                    ),
                    id: e.id,
                  });
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [].concat(
                    o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(e),
                    [t],
                  ),
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  version: this.getVersion(),
                  value: s,
                  timestamp: i,
                  action: this.getAction(),
                });
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.sendDisableCTAMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r) {
                var a = yield this.$InteractiveMessageSync$p_1(
                  e,
                  t,
                  o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode
                    .DISABLE_CTA,
                  r,
                );
                yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
                  return (m || (m = n("Promise"))).resolve();
                });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").MessageSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
