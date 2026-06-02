__d(
  "WAWebRestoreGroupParticipantsAction",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = new Map(),
        a = 0;
      if (
        (t.forEach(function (e) {
          var t = r("WAWebGroupMetadataCollection").get(e);
          if (!t || t.participantQueryPromise || !t.stale) {
            a++;
            return;
          }
          t.participantQueryPromise = new Promise(function (t) {
            n.set(e, t);
          });
        }),
        a > 0)
      ) {
        var i = t
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
          a,
          i,
        );
      }
      var l = Array.from(n.keys());
      try {
        var c = await o("WAWebSchemaParticipant")
            .getParticipantTable()
            .bulkGet(l),
          d = [],
          m = 0,
          p = [],
          _ = 0;
        (c.forEach(async function (e, t) {
          var a,
            i = r("WAWebGroupMetadataCollection").get(l[t]),
            s = !!(
              (a = o("WAWebChatCollection").ChatCollection.get(l[t])) != null &&
              a.isReadOnly
            );
          if (i)
            try {
              var u,
                c,
                f = [],
                g = [];
              if (
                e == null ||
                (e.deviceSyncComplete != null && !e.deviceSyncComplete) ||
                e.staleType ===
                  o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT
              )
                if (s) (_++, p.length < 3 && p.push(l[t]));
                else {
                  var h;
                  (m++, d.length < 3 && d.push(l[t]));
                  var y = await o("WAWebGroupQueryBridge").sendQueryGroup(
                    o("WAWebWidFactory").createWid(l[t]),
                  );
                  f = (
                    (h = y == null ? void 0 : y.participants) != null ? h : []
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
                  S = e.superAdmins != null ? new Set(e.superAdmins) : void 0;
                f =
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
                          var a = o("WAWebWidFactory").createUserWidOrThrow(e);
                          return (
                            o(
                              "WAWebBotGroupGatingUtils",
                            ).isOpenGroupBotParticipantAddEnabled() &&
                              o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(
                                a,
                              ) &&
                              (i.isOpenBotGroup = !0),
                            o(
                              "WAWebBotGroupGatingUtils",
                            ).isTEEGroupBotParticipantAddEnabled() &&
                              o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(
                                a,
                              ) &&
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
              ((g =
                (u =
                  e == null || (c = e.pastParticipants) == null
                    ? void 0
                    : c.map(function (e) {
                        var t = e.jid,
                          n = e.leaveReason,
                          a = e.leaveTs;
                        return new (r("WAWebGroupParticipantModel"))({
                          id: o("WAWebWidFactory").createWid(t),
                          leaveTs: a,
                          leaveReason: n,
                        });
                      })) != null
                  ? u
                  : []),
                i.participants.add(f, { merge: !0 }),
                i.pastParticipants.add(g, { merge: !0 }),
                (i.stale = !1),
                (i.deviceStale =
                  (e == null ? void 0 : e.staleType) ===
                  o("WAWebDBParticipantTypes").STALE_TYPES.DEVICE),
                e != null &&
                  o("WAWebWamGroupMetricCache").cacheGroupMetrics(e));
            } finally {
              var R = n.get(l[t]);
              (R == null || R(), (i.participantQueryPromise = null));
            }
        }),
          m > 0 &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage]: restoreGroupParticipantsForChats: synced stale participants for ",
                  " chats => ",
                  "",
                ])),
              m,
              d,
            ),
          _ > 0 &&
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage]: restoreGroupParticipantsForChats: skipped sync stale participant for ",
                  " read only chats => ",
                  "",
                ])),
              _,
              p,
            ));
      } catch (e) {
        l.forEach(function (e) {
          var t = n.get(e);
          t == null || t();
          var o = r("WAWebGroupMetadataCollection").get(e);
          o && (o.participantQueryPromise = null);
        });
        return;
      }
    }
    l.restoreGroupParticipantsForChats = c;
  },
  98,
);
