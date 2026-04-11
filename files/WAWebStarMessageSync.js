__d(
  "WAWebStarMessageSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      f,
      g = (function (t) {
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
            return 2;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.Star;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = [],
                  l = [];
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: start apply star message",
                      ])),
                  );
                var g = yield o(
                    "WAWebSyncdResolveMessages",
                  ).resolveMessagesForMutations(t),
                  h = g.incomingRemoteToLocalChatId,
                  y = g.messagesInDB;
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: after gather cache for star message",
                      ])),
                  );
                var C = 0,
                  b = 0,
                  v = [],
                  S = 0,
                  R = 0,
                  L = yield (f || (f = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var t,
                                  n = e.indexParts,
                                  s = e.value,
                                  u = n[1],
                                  c = n[2],
                                  d = n[3],
                                  m = n[4];
                                if (!u || !c || !d || !m)
                                  return a.malformedActionIndex();
                                var p =
                                    (t = s.starAction) == null
                                      ? void 0
                                      : t.starred,
                                  _ = h.get(u);
                                if (p == null)
                                  return (
                                    C++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName)
                                  );
                                var f = o(
                                  "WAWebSyncdIndexUtils",
                                ).syncKeyToMsgKey(u, c, d, m);
                                if (f == null) return a.malformedActionIndex();
                                if (_ == null) {
                                  if (
                                    !o(
                                      "WAWebLid1X1MigrationGating",
                                    ).Lid1X1MigrationUtils.isLidMigrated()
                                  ) {
                                    var g = yield o("WAWebSchemaChat")
                                      .getChatTable()
                                      .get(f.remote.toString());
                                    g != null && b++;
                                  }
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                      modelId: f.toString(),
                                      modelType:
                                        o("WASyncdConst").SyncModelType.Msg,
                                    },
                                  };
                                }
                                var L = r("WANullthrows")(
                                    o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                      _,
                                      c,
                                      d,
                                      m,
                                    ),
                                  ),
                                  E = y.find(function (e) {
                                    return e.startsWith(
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).msgKeyToDbIdWithoutFromMeParticipant(L),
                                    );
                                  });
                                if (E == null)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                      modelId: f.toString(),
                                      modelType:
                                        o("WASyncdConst").SyncModelType.Msg,
                                    },
                                  };
                                p ? i.push(E.toString()) : l.push(E.toString());
                                var k =
                                  o("WAWebMsgCollection").MsgCollection.get(E);
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
                                    ).getAssociationProcessorByAssociationType(
                                      I,
                                    );
                                    (T == null ? void 0 : T.processorType) ===
                                      o("WAWebAssociationProcessorConstants")
                                        .AssociationProcessorType
                                        .WithDetachedMessages &&
                                      k.detachAssociatedMsg();
                                  }
                                  ((k.star = p),
                                    k.star
                                      ? o(
                                          "WAWebStarredMsgCollection",
                                        ).addStarredMsgs([k])
                                      : o(
                                          "WAWebStarredMsgCollection",
                                        ).removeStarredMsgs([k]));
                                } else (S++, v.length < 3 && v.push(L));
                                return {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                };
                              }
                              return (
                                R++,
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
                  C > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "star message sync: ",
                          " malformed mutations",
                        ])),
                      C,
                    ),
                  b > 0 &&
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "star message sync: found chat via fallback ",
                            " times",
                          ])),
                        b,
                      )
                      .sendLogs("star-message-sync-found-chat-via-fallback", {
                        sampling: 0.01,
                      }),
                  S > 0 &&
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[star_msg_sync] ",
                          " msgs in db not in collection => ",
                          "",
                        ])),
                      S,
                      v,
                    ),
                  R > 0 &&
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "star message sync: ",
                          " operations not supported",
                        ])),
                      R,
                    ),
                  o("WAWebCurrentUser").isEmployee() &&
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: before persist stars",
                        ])),
                    ),
                  yield f.all([
                    o("WAWebDBProcessMessage").starMessages(i),
                    o("WAWebDBProcessMessage").unstarMessages(l),
                  ]),
                  o("WAWebCurrentUser").isEmployee() &&
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: after persist stars",
                        ])),
                    ),
                  L
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getStarMessageMutations = function (t, a) {
            var e = this,
              i = o("WATimeUtils").unixTimeMs();
            return (f || (f = n("Promise"))).all(
              t.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = { starAction: { starred: a } },
                        l = new (r("WAWebMsgKey"))({
                          fromMe: t.fromMe,
                          participant: t.participant,
                          remote: o("WAWebWidFactory").createWid(
                            yield o(
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
                          o(
                            "WAWebSyncdUtils",
                          ).constructMsgKeySegmentsFromMsgKey(l),
                        operation: o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.SET,
                        version: e.getVersion(),
                        value: n,
                        timestamp: i,
                        action: e.getAction(),
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
      h = new g();
    l.default = h;
  },
  98,
);
