__d(
  "WAWebRestoreGroupParticipantsAction",
  [
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebDBParticipantTypes",
    "WAWebGroupMetadataCollection",
    "WAWebGroupParticipantModel",
    "WAWebGroupQueryBridge",
    "WAWebSchemaParticipant",
    "WAWebWamGroupMetricCache",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = new Map(),
            i = 0;
          if (
            (t.forEach(function (e) {
              var t = r("WAWebGroupMetadataCollection").get(e);
              if (!t || t.participantQueryPromise || !t.stale) {
                i++;
                return;
              }
              t.participantQueryPromise = new (c || (c = n("Promise")))(
                function (t) {
                  a.set(e, t);
                },
              );
            }),
            i > 0)
          ) {
            var l = t
              .filter(function (e) {
                var t = r("WAWebGroupMetadataCollection").get(e);
                return !t || t.participantQueryPromise || !t.stale;
              })
              .slice(0, 3);
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage]: restoreGroupParticipantsForChats: skipped ",
                  " chats => ",
                  "",
                ])),
              i,
              l,
            );
          }
          var d = Array.from(a.keys());
          try {
            var m = yield o("WAWebSchemaParticipant")
                .getParticipantTable()
                .bulkGet(d),
              p = [],
              _ = 0,
              f = [],
              g = 0;
            (m.forEach(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    var n,
                      i = r("WAWebGroupMetadataCollection").get(d[t]),
                      l = !!(
                        (n = o("WAWebChatCollection").ChatCollection.get(
                          d[t],
                        )) != null && n.isReadOnly
                      );
                    if (i)
                      try {
                        var s,
                          u,
                          c = [],
                          m = [];
                        if (
                          e == null ||
                          (e.deviceSyncComplete != null &&
                            !e.deviceSyncComplete) ||
                          e.staleType ===
                            o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT
                        )
                          if (l) (g++, f.length < 3 && f.push(d[t]));
                          else {
                            var h;
                            (_++, p.length < 3 && p.push(d[t]));
                            var y = yield o(
                              "WAWebGroupQueryBridge",
                            ).sendQueryGroup(
                              o("WAWebWidFactory").createWid(d[t]),
                            );
                            c = (
                              (h = y == null ? void 0 : y.participants) != null
                                ? h
                                : []
                            ).map(function (e) {
                              var t = e.id,
                                n = e.isAdmin,
                                o = e.isSuperAdmin;
                              return new (r("WAWebGroupParticipantModel"))({
                                id: t,
                                isAdmin: n,
                                isSuperAdmin: o,
                              });
                            });
                          }
                        else {
                          var C,
                            b,
                            v = new Set(e.admins),
                            S =
                              e.superAdmins != null
                                ? new Set(e.superAdmins)
                                : void 0;
                          c =
                            (C =
                              (b = e.participants) == null
                                ? void 0
                                : b.map(function (e) {
                                    var t;
                                    if (S === void 0) {
                                      var n;
                                      t =
                                        ((n = i.owner) == null
                                          ? void 0
                                          : n.toString()) === e;
                                    } else t = S.has(e);
                                    var a =
                                      o("WAWebWidFactory").createUserWidOrThrow(
                                        e,
                                      );
                                    return (
                                      o(
                                        "WAWebBotGroupGatingUtils",
                                      ).isOpenGroupBotParticipantAddEnabled() &&
                                        o(
                                          "WAWebBotUtils",
                                        ).isWidOpenGroupMetaBotFbidWid(a) &&
                                        (i.isOpenBotGroup = !0),
                                      o(
                                        "WAWebBotGroupGatingUtils",
                                      ).isTEEGroupBotParticipantAddEnabled() &&
                                        o(
                                          "WAWebBotUtils",
                                        ).isWidTeeGroupMetaBotFbidWid(a) &&
                                        (i.isTeeBotGroup = !0),
                                      new (r("WAWebGroupParticipantModel"))({
                                        id: a,
                                        isAdmin: v.has(e),
                                        isSuperAdmin: t,
                                      })
                                    );
                                  })) != null
                              ? C
                              : [];
                        }
                        ((m =
                          (s =
                            e == null || (u = e.pastParticipants) == null
                              ? void 0
                              : u.map(function (e) {
                                  var t = e.jid,
                                    n = e.leaveReason,
                                    a = e.leaveTs;
                                  return new (r("WAWebGroupParticipantModel"))({
                                    id: o("WAWebWidFactory").createWid(t),
                                    leaveTs: a,
                                    leaveReason: n,
                                  });
                                })) != null
                            ? s
                            : []),
                          i.participants.add(c, { merge: !0 }),
                          i.pastParticipants.add(m, { merge: !0 }),
                          (i.stale = !1),
                          (i.deviceStale =
                            (e == null ? void 0 : e.staleType) ===
                            o("WAWebDBParticipantTypes").STALE_TYPES.DEVICE),
                          e != null &&
                            o("WAWebWamGroupMetricCache").cacheGroupMetrics(e));
                      } finally {
                        var R = a.get(d[t]);
                        (R == null || R(), (i.participantQueryPromise = null));
                      }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
              _ > 0 &&
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[init-from-storage]: restoreGroupParticipantsForChats: synced stale participants for ",
                      " chats => ",
                      "",
                    ])),
                  _,
                  p,
                ),
              g > 0 &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[init-from-storage]: restoreGroupParticipantsForChats: skipped sync stale participant for ",
                      " read only chats => ",
                      "",
                    ])),
                  g,
                  f,
                ));
          } catch (e) {
            d.forEach(function (e) {
              var t = a.get(e);
              t == null || t();
              var n = r("WAWebGroupMetadataCollection").get(e);
              n && (n.participantQueryPromise = null);
            });
            return;
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.restoreGroupParticipantsForChats = d;
  },
  98,
);
