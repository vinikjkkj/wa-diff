__d(
  "WAWebDeleteMessageForMeSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAddonProcessDeleteForMe",
    "WAWebBackendApi",
    "WAWebCurrentUser",
    "WAWebDBMessageDelete",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebRequestDeleteAddOns",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdResolveMessages",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["deleteMedia", "messageTimestamp", "timestamp"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.isNewsletter()
            ? o("WAWebWidToJid").widToNewsletterJid(e)
            : e.isBroadcast()
              ? o("WAWebWidToJid").widToBroadcastJid(e)
              : o("WAWebWidToJid").widToChatJid(
                  o("WAWebWidFactory").createWid(
                    yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                      e,
                      o("WAWebSyncdConst").Actions.DeleteMessageForMe,
                    ),
                  ),
                );
        })),
        y.apply(this, arguments)
      );
    }
    var C = (function (t) {
      function a() {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh),
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
          return 3;
        }),
        (i.getAction = function () {
          return o("WAWebSyncdConst").Actions.DeleteMessageForMe;
        }),
        (i.applyMutations = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this;
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: after apply delete message for me",
                  ])),
              );
            var a = [],
              i = yield o(
                "WAWebSyncdResolveMessages",
              ).resolveMessagesForMutations(e),
              l = i.incomingRemoteToLocalChatId,
              h = i.messagesInDB;
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: after cache for delete message for me",
                  ])),
              );
            var y = 0,
              C = yield (g || (g = n("Promise"))).all(
                e.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        try {
                          if (e.operation === "set") {
                            var n = e.indexParts,
                              i = n[1],
                              s = n[2],
                              u = n[3],
                              m = n[4];
                            if (!i || !s || !u || !m) {
                              if (o("WAWebCurrentUser").isEmployee()) {
                                var p = i ? "" : "remote",
                                  _ = s ? "" : "externalID",
                                  f = u ? "" : "fromMe",
                                  g = m ? "" : "participant";
                                o("WALogger")
                                  .ERROR(
                                    c ||
                                      (c =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[syncd] deleteForMe bad index: ",
                                            " ",
                                            " ",
                                            " ",
                                            "",
                                          ],
                                        )),
                                    p,
                                    _,
                                    f,
                                    g,
                                  )
                                  .sendLogs(
                                    "missing-index-props-delete-for-me",
                                  );
                              }
                              return t.malformedActionIndex();
                            }
                            var C = l.get(i),
                              b = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                i,
                                s,
                                u,
                                m,
                              );
                            if (!b)
                              return (
                                o("WAWebCurrentUser").isEmployee() &&
                                  o("WALogger")
                                    .ERROR(
                                      d ||
                                        (d =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "syncd: malformed index for delete message for me sync.",
                                            ],
                                          )),
                                    )
                                    .sendLogs("invalid-index-delete-for-me"),
                                t.malformedActionIndex()
                              );
                            if (C == null)
                              return {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Orphan,
                                orphanModel: {
                                  modelId: b.toString(),
                                  modelType:
                                    o("WAWebSyncdConst").SyncModelType.Msg,
                                },
                              };
                            var v = r("nullthrows")(
                                o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                  C,
                                  s,
                                  u,
                                  m,
                                ),
                              ),
                              S = h.find(function (e) {
                                return e.startsWith(
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).msgKeyToDbIdWithoutFromMeParticipant(v),
                                );
                              });
                            if (S == null) {
                              var R = yield o(
                                "WAWebAddonProcessDeleteForMe",
                              ).hasDeleteAddonForMe(v);
                              if (R == null) {
                                var L = o(
                                  "WAWebLidMigrationUtils",
                                ).getAlternateMsgKey(v);
                                L != null &&
                                  (R = yield o(
                                    "WAWebAddonProcessDeleteForMe",
                                  ).hasDeleteAddonForMe(L));
                              }
                              if (R != null)
                                try {
                                  return (
                                    yield o(
                                      "WAWebAddonProcessDeleteForMe",
                                    ).processDeleteForMeSingle(R),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                } catch (e) {}
                              return {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Orphan,
                                orphanModel: {
                                  modelId: b.toString(),
                                  modelType:
                                    o("WAWebSyncdConst").SyncModelType.Msg,
                                },
                              };
                            }
                            return (
                              a.push(S),
                              yield o("WAWebBackendApi").frontendSendAndReceive(
                                "deleteMessageFromCollectionForSync",
                                { msgKey: S },
                              ),
                              {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Success,
                              }
                            );
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
            if (
              (y > 0 &&
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "delete_message_for_me_sync: ",
                      " operations not supported",
                    ])),
                  y,
                ),
              o("WAWebCurrentUser").isEmployee())
            ) {
              var v,
                S,
                R,
                L,
                E = b(C);
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: deleteForMe mutations=",
                    " success=",
                    " orphan=",
                    " failed=",
                    " malformed=",
                    "",
                  ])),
                e.length,
                (v = E.get(o("WAWebSyncdConst").SyncActionState.Success)) !=
                  null
                  ? v
                  : 0,
                (S = E.get(o("WAWebSyncdConst").SyncActionState.Orphan)) != null
                  ? S
                  : 0,
                (R = E.get(o("WAWebSyncdConst").SyncActionState.Failed)) != null
                  ? R
                  : 0,
                (L = E.get(o("WAWebSyncdConst").SyncActionState.Malformed)) !=
                  null
                  ? L
                  : 0,
              ),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: before deleting messages",
                    ])),
                ));
            }
            if (a.length > 0) {
              yield o("WAWebDBMessageDelete").removeMessagesFromHistory(a);
              var k = new Set();
              a.forEach(function (e) {
                return k.add(r("WAWebMsgKey").fromString(e).remote.toString());
              });
              var I = Array.from(k.values()).join(",").toString();
              (o("WAWebBackendApi").frontendFireAndForget(
                "deleteModelsForLastAddOnPreview",
                { messagesIds: a },
              ),
                yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(I, a));
            }
            return (
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: after deleting messages",
                    ])),
                ),
              C
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (i.resolveConflicts = function (t, a) {
          var e,
            i,
            l = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
              t.binarySyncAction,
            ),
            s = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              a.binarySyncData,
            ).value,
            u = r("nullthrows")(
              (e = l.deleteMessageForMeAction) == null ? void 0 : e.deleteMedia,
            ),
            c = r("nullthrows")(
              s == null || (i = s.deleteMessageForMeAction) == null
                ? void 0
                : i.deleteMedia,
            );
          return !c && u
            ? (g || (g = n("Promise"))).resolve(
                o("WAWebSyncdConst").ConflictResolutionState.SkipRemote,
              )
            : (g || (g = n("Promise"))).resolve(
                o("WAWebSyncdConst").ConflictResolutionState
                  .SkipRemoteAndDropLocal,
              );
        }),
        (i.buildDeleteForMeMutation = function (n) {
          var t = n.deleteMedia,
            r = n.messageTimestamp,
            a = n.timestamp,
            i = babelHelpers.objectWithoutPropertiesLoose(n, e),
            l = {
              deleteMessageForMeAction: { deleteMedia: t, messageTimestamp: r },
            };
          return o("WAWebSyncdActionUtils").buildPendingMutation({
            collection: this.collectionName,
            indexArgs: o("WAWebSyncdActionUtils").buildMessageKey(i),
            value: l,
            version: this.getVersion(),
            operation: o("WAWebProtobufsServerSync.pb")
              .SyncdMutation$SyncdOperation.SET,
            timestamp: a,
            action: this.getAction(),
          });
        }),
        (i.getDeleteForMeMutations = function (t, r) {
          var e = this,
            a = o("WATimeUtils").unixTimeMs();
          return (g || (g = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t.id.remote,
                      i = o("WAWebMsgGetters").getSender(t),
                      l = i ? o("WAWebWidToJid").widToUserJid(i) : null,
                      s = yield h(n);
                    return e.buildDeleteForMeMutation({
                      timestamp: a,
                      deleteMedia: r,
                      messageTimestamp: o("WAWebMsgGetters").getT(t),
                      remoteJid: s,
                      id: t.id.id,
                      fromMe: t.id.fromMe,
                      participant:
                        o("WAWebMsgGetters").getIsGroupMsg(t) && !t.id.fromMe
                          ? l
                          : null,
                    });
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
        }),
        a
      );
    })(o("WAWebSyncdAction").MessageSyncdActionBase);
    function b(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          o = n.actionState;
        t.set(o, ((r = t.get(o)) != null ? r : 0) + 1);
      }
      return t;
    }
    var v = new C();
    l.default = v;
  },
  98,
);
