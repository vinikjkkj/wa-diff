__d(
  "WAWebDeleteMessageForMeSync",
  [
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
      h;
    async function y(e) {
      return e.isNewsletter()
        ? o("WAWebWidToJid").widToNewsletterJid(e)
        : e.isBroadcast()
          ? o("WAWebWidToJid").widToBroadcastJid(e)
          : o("WAWebWidToJid").widToChatJid(
              o("WAWebWidFactory").createWid(
                await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                  e,
                  o("WASyncdConst").Actions.DeleteMessageForMe,
                ),
              ),
            );
    }
    var C = (function (t) {
        function n() {
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
            return 3;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.DeleteMessageForMe;
          }),
          (a.applyMutations = async function (t) {
            var e = this;
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: after apply delete message for me",
                  ])),
              );
            var n = [],
              a = await o(
                "WAWebSyncdResolveMessages",
              ).resolveMessagesForMutations(t),
              i = a.incomingRemoteToLocalChatId,
              l = a.messagesInDB;
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: after cache for delete message for me",
                  ])),
              );
            var y = 0,
              C = await Promise.all(
                t.map(async function (t) {
                  try {
                    if (t.operation === "set") {
                      var a = t.indexParts,
                        s = a[1],
                        u = a[2],
                        f = a[3],
                        g = a[4];
                      if (!s || !u || !f || !g) {
                        if (o("WAWebCurrentUser").isEmployee()) {
                          var h = s ? "" : "remote",
                            C = u ? "" : "externalID",
                            b = f ? "" : "fromMe",
                            v = g ? "" : "participant";
                          o("WALogger")
                            .ERROR(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "[syncd] deleteForMe bad index: ",
                                  " ",
                                  " ",
                                  " ",
                                  "",
                                ])),
                              h,
                              C,
                              b,
                              v,
                            )
                            .sendLogs("missing-index-props-delete-for-me");
                        }
                        return e.malformedActionIndex();
                      }
                      var S = i.get(s),
                        R = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                          s,
                          u,
                          f,
                          g,
                        );
                      if (!R)
                        return (
                          o("WAWebCurrentUser").isEmployee() &&
                            o("WALogger")
                              .ERROR(
                                d ||
                                  (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: malformed index for delete message for me sync.",
                                  ])),
                              )
                              .sendLogs("invalid-index-delete-for-me"),
                          e.malformedActionIndex()
                        );
                      if (S == null)
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: R.toString(),
                            modelType: o("WASyncdConst").SyncModelType.Msg,
                          },
                        };
                      var L = r("WANullthrows")(
                          o("WAWebSyncdIndexUtils").syncKeyToMsgKey(S, u, f, g),
                        ),
                        E = l.find(function (e) {
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
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: no direct msg found. Trying to match addon",
                              ])),
                          );
                        var k = await o(
                          "WAWebAddonProcessDeleteForMe",
                        ).hasDeleteAddonForMe(L);
                        if (k == null) {
                          var I = o(
                            "WAWebLidMigrationUtils",
                          ).getAlternateMsgKey(L);
                          I != null &&
                            (k = await o(
                              "WAWebAddonProcessDeleteForMe",
                            ).hasDeleteAddonForMe(I));
                        }
                        if (k != null) {
                          o("WAWebCurrentUser").isEmployee() &&
                            o("WALogger").LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "syncd: addon found for deleteForMe. Applying mutation",
                                ])),
                            );
                          try {
                            return (
                              await o(
                                "WAWebAddonProcessDeleteForMe",
                              ).processDeleteForMeSingle(k),
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              }
                            );
                          } catch (e) {}
                        }
                        return (
                          o("WAWebCurrentUser").isEmployee() &&
                            o("WALogger").LOG(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "syncd: no message or addon found for deleteForMe",
                                ])),
                            ),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Orphan,
                            orphanModel: {
                              modelId: R.toString(),
                              modelType: o("WASyncdConst").SyncModelType.Msg,
                            },
                          }
                        );
                      }
                      return (
                        n.push(E),
                        await o("WAWebBackendApi").frontendSendAndReceive(
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
            if (
              (y > 0 &&
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "delete_message_for_me_sync: ",
                      " operations not supported",
                    ])),
                  y,
                ),
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: before deleting messages",
                    ])),
                ),
              n.length > 0)
            ) {
              await o("WAWebDBMessageDelete").removeMessagesFromHistory(n);
              var b = new Set();
              n.forEach(function (e) {
                return b.add(r("WAWebMsgKey").fromString(e).remote.toString());
              });
              var v = Array.from(b.values()).join(",").toString();
              (o("WAWebBackendApi").frontendFireAndForget(
                "deleteModelsForLastAddOnPreview",
                { messagesIds: n },
              ),
                await o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .waitUntilPersisted(
                    o(
                      "WAWebPersistedJobDefinitions",
                    ).jobSerializers.deleteAddOns(v, n),
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
              C
            );
          }),
          (a.resolveConflicts = function (t, n) {
            var e,
              a,
              i = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                t.binarySyncAction,
              ),
              l = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                n.binarySyncData,
              ).value,
              s = r("WANullthrows")(
                (e = i.deleteMessageForMeAction) == null
                  ? void 0
                  : e.deleteMedia,
              ),
              u = r("WANullthrows")(
                l == null || (a = l.deleteMessageForMeAction) == null
                  ? void 0
                  : a.deleteMedia,
              );
            return !u && s
              ? Promise.resolve(
                  o("WASyncdConst").ConflictResolutionState.SkipRemote,
                )
              : Promise.resolve(
                  o("WASyncdConst").ConflictResolutionState
                    .SkipRemoteAndDropLocal,
                );
          }),
          (a.buildDeleteForMeMutation = function (n) {
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
          (a.getDeleteForMeMutations = function (t, n) {
            var e = this,
              r = o("WATimeUtils").unixTimeMs();
            return Promise.all(
              t.map(async function (t) {
                var a = t.id.remote,
                  i = o("WAWebMsgGetters").getSender(t),
                  l = i ? o("WAWebWidToJid").widToUserJid(i) : null,
                  s = await y(a);
                return e.buildDeleteForMeMutation({
                  timestamp: r,
                  deleteMedia: n,
                  messageTimestamp: o("WAWebMsgGetters").getT(t),
                  remoteJid: s,
                  id: t.id.id,
                  fromMe: t.id.fromMe,
                  participant:
                    o("WAWebMsgGetters").getIsGroupMsg(t) && !t.id.fromMe
                      ? l
                      : null,
                });
              }),
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").MessageSyncdActionBase),
      b = new C();
    l.default = b;
  },
  98,
);
