__d(
  "WAWebDeleteMessageForMeSync",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAddonProcessDeleteForMe",
    "WAWebBackendApi",
    "WAWebCurrentUser",
    "WAWebDBMessageDelete",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdResolveMessages",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
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
      g,
      h,
      y;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.isNewsletter()
            ? o("WAWebWidToJid").widToNewsletterJid(e)
            : e.isBroadcast()
              ? o("WAWebWidToJid").widToBroadcastJid(e)
              : o("WAWebWidToJid").widToChatJid(
                  o("WAWebWidFactory").createWid(
                    yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                      e,
                      o("WASyncdConst").Actions.DeleteMessageForMe,
                    ),
                  ),
                );
        })),
        b.apply(this, arguments)
      );
    }
    var v = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
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
            return o("WASyncdConst").Actions.DeleteMessageForMe;
          }),
          (i.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
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
                  C = i.messagesInDB;
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: after cache for delete message for me",
                      ])),
                  );
                var b = 0,
                  v = yield (y || (y = n("Promise"))).all(
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
                                  f = n[4];
                                if (!i || !s || !u || !f) {
                                  if (o("WAWebCurrentUser").isEmployee()) {
                                    var g = i ? "" : "remote",
                                      h = s ? "" : "externalID",
                                      y = u ? "" : "fromMe",
                                      v = f ? "" : "participant";
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
                                        g,
                                        h,
                                        y,
                                        v,
                                      )
                                      .sendLogs(
                                        "missing-index-props-delete-for-me",
                                      );
                                  }
                                  return t.malformedActionIndex();
                                }
                                var S = l.get(i),
                                  R = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                    i,
                                    s,
                                    u,
                                    f,
                                  );
                                if (!R)
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
                                        .sendLogs(
                                          "invalid-index-delete-for-me",
                                        ),
                                    t.malformedActionIndex()
                                  );
                                if (S == null)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                      modelId: R.toString(),
                                      modelType:
                                        o("WASyncdConst").SyncModelType.Msg,
                                    },
                                  };
                                var L = r("WANullthrows")(
                                    o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                      S,
                                      s,
                                      u,
                                      f,
                                    ),
                                  ),
                                  E = C.find(function (e) {
                                    return e.startsWith(
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).msgKeyToDbIdWithoutFromMeParticipant(L),
                                    );
                                  });
                                if (E == null) {
                                  o("WAWebCurrentUser").isEmployee() &&
                                    o("WALogger").LOG(
                                      m ||
                                        (m =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "syncd: no direct msg found. Trying to match addon",
                                            ],
                                          )),
                                    );
                                  var k = yield o(
                                    "WAWebAddonProcessDeleteForMe",
                                  ).hasDeleteAddonForMe(L);
                                  if (k == null) {
                                    var I = o(
                                      "WAWebLidMigrationUtils",
                                    ).getAlternateMsgKey(L);
                                    I != null &&
                                      (k = yield o(
                                        "WAWebAddonProcessDeleteForMe",
                                      ).hasDeleteAddonForMe(I));
                                  }
                                  if (k != null) {
                                    o("WAWebCurrentUser").isEmployee() &&
                                      o("WALogger").LOG(
                                        p ||
                                          (p =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "syncd: addon found for deleteForMe. Applying mutation",
                                              ],
                                            )),
                                      );
                                    try {
                                      return (
                                        yield o(
                                          "WAWebAddonProcessDeleteForMe",
                                        ).processDeleteForMeSingle(k),
                                        {
                                          actionState:
                                            o("WASyncdConst").SyncActionState
                                              .Success,
                                        }
                                      );
                                    } catch (e) {}
                                  }
                                  return (
                                    o("WAWebCurrentUser").isEmployee() &&
                                      o("WALogger").LOG(
                                        _ ||
                                          (_ =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "syncd: no message or addon found for deleteForMe",
                                              ],
                                            )),
                                      ),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Orphan,
                                      orphanModel: {
                                        modelId: R.toString(),
                                        modelType:
                                          o("WASyncdConst").SyncModelType.Msg,
                                      },
                                    }
                                  );
                                }
                                return (
                                  a.push(E),
                                  yield o(
                                    "WAWebBackendApi",
                                  ).frontendSendAndReceive(
                                    "deleteMessageFromCollectionForSync",
                                    { msgKey: E },
                                  ),
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Success,
                                  }
                                );
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
                if (
                  (b > 0 &&
                    o("WALogger").WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "delete_message_for_me_sync: ",
                          " operations not supported",
                        ])),
                      b,
                    ),
                  o("WAWebCurrentUser").isEmployee() &&
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: before deleting messages",
                        ])),
                    ),
                  a.length > 0)
                ) {
                  yield o("WAWebDBMessageDelete").removeMessagesFromHistory(a);
                  var S = new Set();
                  a.forEach(function (e) {
                    return S.add(
                      r("WAWebMsgKey").fromString(e).remote.toString(),
                    );
                  });
                  var R = Array.from(S.values()).join(",").toString();
                  (o("WAWebBackendApi").frontendFireAndForget(
                    "deleteModelsForLastAddOnPreview",
                    { messagesIds: a },
                  ),
                    yield o("WAWebPersistedJobManagerWorkerCompatible")
                      .getJobManager()
                      .waitUntilPersisted(
                        o(
                          "WAWebPersistedJobDefinitions",
                        ).jobSerializers.deleteAddOns(R, a),
                      ));
                }
                return (
                  o("WAWebCurrentUser").isEmployee() &&
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: after deleting messages",
                        ])),
                    ),
                  v
                );
              },
            );
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
              u = r("WANullthrows")(
                (e = l.deleteMessageForMeAction) == null
                  ? void 0
                  : e.deleteMedia,
              ),
              c = r("WANullthrows")(
                s == null || (i = s.deleteMessageForMeAction) == null
                  ? void 0
                  : i.deleteMedia,
              );
            return !c && u
              ? (y || (y = n("Promise"))).resolve(
                  o("WASyncdConst").ConflictResolutionState.SkipRemote,
                )
              : (y || (y = n("Promise"))).resolve(
                  o("WASyncdConst").ConflictResolutionState
                    .SkipRemoteAndDropLocal,
                );
          }),
          (i.buildDeleteForMeMutation = function (n) {
            var t = n.deleteMedia,
              r = n.messageTimestamp,
              a = n.timestamp,
              i = babelHelpers.objectWithoutPropertiesLoose(n, e),
              l = {
                deleteMessageForMeAction: {
                  deleteMedia: t,
                  messageTimestamp: r,
                },
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
            return (y || (y = n("Promise"))).all(
              t.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t.id.remote,
                        i = o("WAWebMsgGetters").getSender(t),
                        l = i ? o("WAWebWidToJid").widToUserJid(i) : null,
                        s = yield C(n);
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
      })(o("WAWebSyncdAction").MessageSyncdActionBase),
      S = new v();
    l.default = S;
  },
  98,
);
