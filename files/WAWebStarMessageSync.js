__d(
  "WAWebStarMessageSync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCurrentUser",
    "WAWebDBProcessMessage",
    "WAWebMessageAssociationStarUtils",
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
      _ = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 2;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.Star;
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
              _ = l.incomingRemoteToLocalChatId,
              f = l.messagesInDB;
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: after gather cache for star message",
                  ])),
              );
            var g = 0,
              h = [],
              y = 0,
              C = 0,
              b = await Promise.all(
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
                        b = _.get(u);
                      if (p == null)
                        return (
                          g++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var v = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(
                        u,
                        c,
                        d,
                        m,
                      );
                      if (v == null) return t.malformedActionIndex();
                      if (b == null)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: v.toString(),
                            modelType: o("WAWebSyncdConst").SyncModelType.Msg,
                          },
                        };
                      var S = r("nullthrows")(
                          o("WAWebSyncdIndexUtils").syncKeyToMsgKey(b, c, d, m),
                        ),
                        R = f.find(function (e) {
                          return e.startsWith(
                            o(
                              "WAWebSyncdIndexUtils",
                            ).msgKeyToDbIdWithoutFromMeParticipant(S),
                          );
                        });
                      if (R == null)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: v.toString(),
                            modelType: o("WAWebSyncdConst").SyncModelType.Msg,
                          },
                        };
                      p ? a.push(R.toString()) : i.push(R.toString());
                      var L = o("WAWebMsgCollection").MsgCollection.get(R);
                      return (
                        L
                          ? (o(
                              "WAWebMessageAssociationStarUtils",
                            ).detachAssociatedMsgOnStarChange(L),
                            (L.star = p),
                            L.star
                              ? o("WAWebStarredMsgCollection").addStarredMsgs([
                                  L,
                                ])
                              : o(
                                  "WAWebStarredMsgCollection",
                                ).removeStarredMsgs([L]))
                          : (y++, h.length < 3 && h.push(S)),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return (
                      C++,
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
            return (
              g > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "star message sync: ",
                      " malformed mutations",
                    ])),
                  g,
                ),
              y > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[star_msg_sync] ",
                      " msgs in db not in collection => ",
                      "",
                    ])),
                  y,
                  h,
                ),
              C > 0 &&
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "star message sync: ",
                      " operations not supported",
                    ])),
                  C,
                ),
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: before persist stars",
                    ])),
                ),
              await Promise.all([
                o("WAWebDBProcessMessage").starMessages(a),
                o("WAWebDBProcessMessage").unstarMessages(i),
              ]),
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: after persist stars",
                    ])),
                ),
              b
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
                        o("WAWebSyncdConst").Actions.Star,
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
      f = new _();
    l.default = f;
  },
  98,
);
