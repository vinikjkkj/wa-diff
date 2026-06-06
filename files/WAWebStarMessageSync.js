__d(
  "WAWebStarMessageSync",
  [
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebCurrentUser",
    "WAWebDBProcessMessage",
    "WAWebLid1X1MigrationGating",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebStarredMsgCollection",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdResolveMessages",
    "WAWebSyncdUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (function (t) {
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
            return 2;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.Star;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = [],
              i = [];
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: start apply star message",
                  ])),
              );
            var l = await o(
                "WAWebSyncdResolveMessages",
              ).resolveMessagesForMutations(n),
              f = l.incomingRemoteToLocalChatId,
              g = l.messagesInDB;
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: after gather cache for star message",
                  ])),
              );
            var h = 0,
              y = 0,
              C = [],
              b = 0,
              v = 0,
              S = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n,
                        l = e.indexParts,
                        s = e.value,
                        u = l[1],
                        c = l[2],
                        d = l[3],
                        m = l[4];
                      if (!u || !c || !d || !m) return t.malformedActionIndex();
                      var p = (n = s.starAction) == null ? void 0 : n.starred,
                        _ = f.get(u);
                      if (p == null)
                        return (
                          h++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var S = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                        u,
                        c,
                        d,
                        m,
                      );
                      if (S == null) return t.malformedActionIndex();
                      if (_ == null) {
                        if (
                          !o(
                            "WAWebLid1X1MigrationGating",
                          ).Lid1X1MigrationUtils.isLidMigrated()
                        ) {
                          var R = await o("WAWebSchemaChat")
                            .getChatTable()
                            .get(S.remote.toString());
                          R != null && y++;
                        }
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: S.toString(),
                            modelType: o("WASyncdConst").SyncModelType.Msg,
                          },
                        };
                      }
                      var L = r("WANullthrows")(
                          o("WAWebSyncdIndexUtils").syncKeyToMsgKey(_, c, d, m),
                        ),
                        E = g.find(function (e) {
                          return e.startsWith(
                            o(
                              "WAWebSyncdIndexUtils",
                            ).msgKeyToDbIdWithoutFromMeParticipant(L),
                          );
                        });
                      if (E == null)
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: S.toString(),
                            modelType: o("WASyncdConst").SyncModelType.Msg,
                          },
                        };
                      p ? a.push(E.toString()) : i.push(E.toString());
                      var k = o("WAWebMsgCollection").MsgCollection.get(E);
                      if (k) {
                        var I = k.associationType;
                        if (
                          I != null &&
                          o(
                            "WAWebMessageAssociationGatingUtils",
                          ).isMessageAssociationInfraEnabled()
                        ) {
                          var T = o(
                            "WAWebAssociationProcessor",
                          ).getAssociationProcessorByAssociationType(I);
                          (T == null ? void 0 : T.processorType) ===
                            o("WAWebAssociationProcessorConstants")
                              .AssociationProcessorType.WithDetachedMessages &&
                            k.detachAssociatedMsg();
                        }
                        ((k.star = p),
                          k.star
                            ? o("WAWebStarredMsgCollection").addStarredMsgs([k])
                            : o("WAWebStarredMsgCollection").removeStarredMsgs([
                                k,
                              ]));
                      } else (b++, C.length < 3 && C.push(L));
                      return {
                        actionState: o("WASyncdConst").SyncActionState.Success,
                      };
                    }
                    return (
                      v++,
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
              h > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "star message sync: ",
                      " malformed mutations",
                    ])),
                  h,
                ),
              y > 0 &&
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "star message sync: found chat via fallback ",
                        " times",
                      ])),
                    y,
                  )
                  .sendLogs("star-message-sync-found-chat-via-fallback", {
                    sampling: 0.01,
                  }),
              b > 0 &&
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[star_msg_sync] ",
                      " msgs in db not in collection => ",
                      "",
                    ])),
                  b,
                  C,
                ),
              v > 0 &&
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "star message sync: ",
                      " operations not supported",
                    ])),
                  v,
                ),
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: before persist stars",
                    ])),
                ),
              await Promise.all([
                o("WAWebDBProcessMessage").starMessages(a),
                o("WAWebDBProcessMessage").unstarMessages(i),
              ]),
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: after persist stars",
                    ])),
                ),
              S
            );
          }),
          (a.getStarMessageMutations = function (t, n) {
            var e = this,
              a = o("WATimeUtils").unixTimeMs();
            return Promise.all(
              t.map(async function (t) {
                var i = { starAction: { starred: n } },
                  l = new (r("WAWebMsgKey"))({
                    fromMe: t.fromMe,
                    participant: t.participant,
                    remote: o("WAWebWidFactory").createWid(
                      await o(
                        "WAWebSyncdGetChat",
                      ).getChatJidMutationIndexForChat(
                        t.remote,
                        o("WASyncdConst").Actions.Star,
                      ),
                    ),
                    id: t.id,
                  });
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: e.collectionName,
                  indexArgs:
                    o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(l),
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  version: e.getVersion(),
                  value: i,
                  timestamp: a,
                  action: e.getAction(),
                });
              }),
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").MessageSyncdActionBase),
      g = new f();
    l.default = g;
  },
  98,
);
