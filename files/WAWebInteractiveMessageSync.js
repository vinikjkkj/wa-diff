__d(
  "WAWebInteractiveMessageSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function a() {
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
            return o("WAWebSyncdConst").Actions.InteractiveMessageAction;
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
                  m = i.messagesInDB,
                  p = 0,
                  _ = 0,
                  f = [],
                  g = 0,
                  h = [],
                  y = 0,
                  C = yield (d || (d = n("Promise"))).all(
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
                                var C = n.interactiveMessageAction;
                                if (C == null)
                                  return (
                                    p++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName)
                                  );
                                var b = l.get(i),
                                  v = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                    i,
                                    s,
                                    u,
                                    c,
                                  );
                                if (v == null) return a.malformedActionIndex();
                                if (b == null)
                                  return {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Orphan,
                                    orphanModel: {
                                      modelId: v.toString(),
                                      modelType:
                                        o("WAWebSyncdConst").SyncModelType.Msg,
                                    },
                                  };
                                var S = r("nullthrows")(
                                    o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                      b,
                                      s,
                                      u,
                                      c,
                                    ),
                                  ),
                                  R = m.find(function (e) {
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
                                          o("WAWebSyncdConst").SyncActionState
                                            .Success,
                                      }
                                    : {
                                        actionState:
                                          o("WAWebSyncdConst").SyncActionState
                                            .Orphan,
                                        orphanModel: {
                                          modelId: v.toString(),
                                          modelType:
                                            o("WAWebSyncdConst").SyncModelType
                                              .Msg,
                                        },
                                      };
                                var E =
                                  o("WAWebMsgCollection").MsgCollection.get(R);
                                return E &&
                                  C.type ===
                                    o("WAWebProtobufSyncAction.pb")
                                      .SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode
                                      .DISABLE_CTA
                                  ? (o("WAWebBackendApi").frontendFireAndForget(
                                      "addGalaxyDisableCTAMessageId",
                                      { messageId: E.id.toString() },
                                    ),
                                    _++,
                                    f.length < 3 && f.push(S.toString()),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Success,
                                    })
                                  : (g++,
                                    h.length < 3 && h.push(S.toString()),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Skipped,
                                    });
                              }
                              return (
                                y++,
                                {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
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
                  p > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "interactive message sync: ",
                          " malformed mutations",
                        ])),
                      p,
                    ),
                  g > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[star_msg_sync] ",
                          " msgs in storage not collection => ",
                          "",
                        ])),
                      g,
                      h,
                    ),
                  y > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "interactive message sync: ",
                          " operations not supported",
                        ])),
                      y,
                    ),
                  C
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
              function* (e) {
                var t = e.actionType,
                  n = e.agmId,
                  a = e.flowId,
                  i = e.msgKey,
                  l = o("WATimeUtils").unixTimeMs(),
                  s = babelHelpers.extends(
                    { type: t },
                    n != null ? { agmId: n } : {},
                  ),
                  u = { interactiveMessageAction: s },
                  c = new (r("WAWebMsgKey"))({
                    fromMe: i.fromMe,
                    participant: i.participant,
                    remote: o("WAWebWidFactory").createWid(
                      yield o(
                        "WAWebSyncdGetChat",
                      ).getChatJidMutationIndexForChat(
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.sendDisableCTAMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r) {
                var a = yield this.$InteractiveMessageSync$p_1({
                  actionType: o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode
                    .DISABLE_CTA,
                  agmId: r,
                  flowId: t,
                  msgKey: e,
                });
                yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
                  return (d || (d = n("Promise"))).resolve();
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
      p = new m();
    l.default = p;
  },
  98,
);
