__d(
  "WAWebStarMessageSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebCurrentUser",
    "WAWebDBProcessMessage",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebProtobufsServerSync.pb",
    "WAWebStarredMsgCollection",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
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
      p,
      _,
      f = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName =
              o("WAWebSyncdConst").CollectionName.RegularHigh),
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
            return o("WAWebSyncdConst").Actions.Star;
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
                var f = yield o(
                    "WAWebSyncdResolveMessages",
                  ).resolveMessagesForMutations(t),
                  g = f.incomingRemoteToLocalChatId,
                  h = f.messagesInDB;
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: after gather cache for star message",
                      ])),
                  );
                var y = 0,
                  C = [],
                  b = 0,
                  v = 0,
                  S = yield (_ || (_ = n("Promise"))).all(
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
                                  _ = g.get(u);
                                if (p == null)
                                  return (
                                    y++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(a.collectionName)
                                  );
                                var f = o(
                                  "WAWebSyncdIndexUtils",
                                ).syncKeyToMsgKey(u, c, d, m);
                                if (f == null) return a.malformedActionIndex();
                                if (_ == null)
                                  return {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Orphan,
                                    orphanModel: {
                                      modelId: f.toString(),
                                      modelType:
                                        o("WAWebSyncdConst").SyncModelType.Msg,
                                    },
                                  };
                                var S = r("nullthrows")(
                                    o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                                      _,
                                      c,
                                      d,
                                      m,
                                    ),
                                  ),
                                  R = h.find(function (e) {
                                    return e.startsWith(
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).msgKeyToDbIdWithoutFromMeParticipant(S),
                                    );
                                  });
                                if (R == null)
                                  return {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Orphan,
                                    orphanModel: {
                                      modelId: f.toString(),
                                      modelType:
                                        o("WAWebSyncdConst").SyncModelType.Msg,
                                    },
                                  };
                                p ? i.push(R.toString()) : l.push(R.toString());
                                var L =
                                  o("WAWebMsgCollection").MsgCollection.get(R);
                                if (L) {
                                  var E = L.associationType;
                                  if (E != null) {
                                    var k = o(
                                      "WAWebAssociationProcessor",
                                    ).getAssociationProcessorByAssociationType(
                                      E,
                                    );
                                    (k == null ? void 0 : k.processorType) ===
                                      o("WAWebAssociationProcessorConstants")
                                        .AssociationProcessorType
                                        .WithDetachedMessages &&
                                      L.detachAssociatedMsg();
                                  }
                                  ((L.star = p),
                                    L.star
                                      ? o(
                                          "WAWebStarredMsgCollection",
                                        ).addStarredMsgs([L])
                                      : o(
                                          "WAWebStarredMsgCollection",
                                        ).removeStarredMsgs([L]));
                                } else (b++, C.length < 3 && C.push(S));
                                return {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                };
                              }
                              return (
                                v++,
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
                  y > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "star message sync: ",
                          " malformed mutations",
                        ])),
                      y,
                    ),
                  b > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[star_msg_sync] ",
                          " msgs in db not in collection => ",
                          "",
                        ])),
                      b,
                      C,
                    ),
                  v > 0 &&
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "star message sync: ",
                          " operations not supported",
                        ])),
                      v,
                    ),
                  o("WAWebCurrentUser").isEmployee() &&
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: before persist stars",
                        ])),
                    ),
                  yield _.all([
                    o("WAWebDBProcessMessage").starMessages(i),
                    o("WAWebDBProcessMessage").unstarMessages(l),
                  ]),
                  o("WAWebCurrentUser").isEmployee() &&
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: after persist stars",
                        ])),
                    ),
                  S
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
            return (_ || (_ = n("Promise"))).all(
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
                              o("WAWebSyncdConst").Actions.Star,
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
      g = new f();
    l.default = g;
  },
  98,
);
