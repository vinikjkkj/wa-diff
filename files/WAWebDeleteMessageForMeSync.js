__d(
  "WAWebDeleteMessageForMeSync",
  [
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
    "WAWebReactionUiService",
    "WAWebRequestDeleteAddOns",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdResolveMessages",
    "WAWebUiRuntime",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
      f;
    async function g(e) {
      return e.isNewsletter()
        ? o("WAWebWidToJid").widToNewsletterJid(e)
        : e.isBroadcast()
          ? o("WAWebWidToJid").widToBroadcastJid(e)
          : o("WAWebWidToJid").widToChatJid(
              o("WAWebWidFactory").createWid(
                await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                  e,
                  o("WAWebSyncdConst").Actions.DeleteMessageForMe,
                ),
              ),
            );
    }
    var h = (function (t) {
      function n() {
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
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.getVersion = function () {
          return 3;
        }),
        (a.getAction = function () {
          return o("WAWebSyncdConst").Actions.DeleteMessageForMe;
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
          var g = 0,
            h = await Promise.all(
              t.map(async function (t) {
                try {
                  if (t.operation === "set") {
                    var a = t.indexParts,
                      s = a[1],
                      u = a[2],
                      m = a[3],
                      p = a[4];
                    if (!s || !u || !m || !p) {
                      if (o("WAWebCurrentUser").isEmployee()) {
                        var _ = s ? "" : "remote",
                          f = u ? "" : "externalID",
                          h = m ? "" : "fromMe",
                          y = p ? "" : "participant";
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
                            _,
                            f,
                            h,
                            y,
                          )
                          .sendLogs("missing-index-props-delete-for-me");
                      }
                      return e.malformedActionIndex();
                    }
                    var C = i.get(s),
                      b = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(s, u, m, p);
                    if (!b)
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
                    if (C == null)
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Orphan,
                        orphanModel: {
                          modelId: b.toString(),
                          modelType: o("WAWebSyncdConst").SyncModelType.Msg,
                        },
                      };
                    var v = r("nullthrows")(
                        o("WAWebSyncdIndexUtils").syncKeyToMsgKey(C, u, m, p),
                      ),
                      S = l.find(function (e) {
                        return e.startsWith(
                          o(
                            "WAWebSyncdIndexUtils",
                          ).msgKeyToDbIdWithoutFromMeParticipant(v),
                        );
                      });
                    if (S == null) {
                      var R = await o(
                        "WAWebAddonProcessDeleteForMe",
                      ).hasDeleteAddonForMe(v);
                      if (R == null) {
                        var L = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                          v,
                        );
                        L != null &&
                          (R = await o(
                            "WAWebAddonProcessDeleteForMe",
                          ).hasDeleteAddonForMe(L));
                      }
                      if (R != null)
                        try {
                          return (
                            await o(
                              "WAWebAddonProcessDeleteForMe",
                            ).processDeleteForMeSingle(R),
                            {
                              actionState:
                                o("WAWebSyncdConst").SyncActionState.Success,
                            }
                          );
                        } catch (e) {}
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Orphan,
                        orphanModel: {
                          modelId: b.toString(),
                          modelType: o("WAWebSyncdConst").SyncModelType.Msg,
                        },
                      };
                    }
                    return (
                      n.push(S),
                      await o("WAWebBackendApi").frontendSendAndReceive(
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
          if (
            (g > 0 &&
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "delete_message_for_me_sync: ",
                    " operations not supported",
                  ])),
                g,
              ),
            o("WAWebCurrentUser").isEmployee())
          ) {
            var C,
              b,
              v,
              S,
              R = y(h);
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
              t.length,
              (C = R.get(o("WAWebSyncdConst").SyncActionState.Success)) != null
                ? C
                : 0,
              (b = R.get(o("WAWebSyncdConst").SyncActionState.Orphan)) != null
                ? b
                : 0,
              (v = R.get(o("WAWebSyncdConst").SyncActionState.Failed)) != null
                ? v
                : 0,
              (S = R.get(o("WAWebSyncdConst").SyncActionState.Malformed)) !=
                null
                ? S
                : 0,
            ),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: before deleting messages",
                  ])),
              ));
          }
          if (n.length > 0) {
            await o("WAWebDBMessageDelete").removeMessagesFromHistory(n);
            var L = new Set();
            n.forEach(function (e) {
              return L.add(r("WAWebMsgKey").fromString(e).remote.toString());
            });
            var E = Array.from(L.values()).join(",").toString();
            (o("WAWebUiRuntime").isWebDiUiEnabled()
              ? o("WAWebUiRuntime")
                  .uiRuntime(o("WAWebReactionUiService").ReactionUiService)
                  .deleteModelsForLastAddOnPreview(n)
              : o("WAWebBackendApi").frontendFireAndForget(
                  "deleteModelsForLastAddOnPreview",
                  { messagesIds: n },
                ),
              await o("WAWebRequestDeleteAddOns").requestDeleteAddOns(E, n));
          }
          return (
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: after deleting messages",
                  ])),
              ),
            h
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
            s = r("nullthrows")(
              (e = i.deleteMessageForMeAction) == null ? void 0 : e.deleteMedia,
            ),
            u = r("nullthrows")(
              l == null || (a = l.deleteMessageForMeAction) == null
                ? void 0
                : a.deleteMedia,
            );
          return !u && s
            ? Promise.resolve(
                o("WAWebSyncdConst").ConflictResolutionState.SkipRemote,
              )
            : Promise.resolve(
                o("WAWebSyncdConst").ConflictResolutionState
                  .SkipRemoteAndDropLocal,
              );
        }),
        (a.buildDeleteForMeMutation = function (n) {
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
        (a.getDeleteForMeMutations = function (t, n) {
          var e = this,
            r = o("WATimeUtils").unixTimeMs();
          return Promise.all(
            t.map(async function (t) {
              var a = t.id.remote,
                i = o("WAWebMsgGetters").getSender(t),
                l = i ? o("WAWebWidToJid").widToUserJid(i) : null,
                s = await g(a);
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
    })(o("WAWebSyncdAction").MessageSyncdActionBase);
    function y(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          o = n.actionState;
        t.set(o, ((r = t.get(o)) != null ? r : 0) + 1);
      }
      return t;
    }
    var C = new h();
    l.default = C;
  },
  98,
);
