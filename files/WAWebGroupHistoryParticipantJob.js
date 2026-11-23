__d(
  "WAWebGroupHistoryParticipantJob",
  [
    "WALogger",
    "WAWebBotUtils",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaGroupHistoryParticipant",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      if (o("WAWebBotUtils").isWidGroupAgentFbidWid(e)) {
        var t = o("WAWebWidToJid").widToJidWithType(e);
        return t.jidType === "bot" ? t.botJid : null;
      }
      var n = o("WAWebLidMigrationUtils").toUserLid(e);
      return n == null ? null : o("WAWebWidToJid").userLidtoLidUserJid(n);
    }
    async function u(t, n) {
      var r = n.filter(function (e) {
        return e.joinTime != null;
      });
      if (r.length !== 0) {
        var a;
        try {
          a = o("WAWebWidToJid").widToGroupJid(t);
        } catch (e) {
          return;
        }
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-history][M2] Storing join metadata for ",
              " participants",
            ])),
          r.length,
        ),
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["group-history-participant"], async function (e) {
              var t,
                n = e[0],
                o = await n.get(a),
                i =
                  (t = o == null ? void 0 : o.participantMetadataMap) != null
                    ? t
                    : new Map();
              for (var l of r) {
                var u,
                  c,
                  d,
                  m,
                  p,
                  _ = s((u = l.lid) != null ? u : l.id);
                if (_ != null) {
                  var f = i.get(_);
                  i.set(_, {
                    joinTime:
                      (c =
                        (d = l.joinTime) != null
                          ? d
                          : f == null
                            ? void 0
                            : f.joinTime) != null
                        ? c
                        : null,
                    groupHistorySentState:
                      (m =
                        (p = l.groupHistorySentState) != null
                          ? p
                          : f == null
                            ? void 0
                            : f.groupHistorySentState) != null
                        ? m
                        : null,
                  });
                }
              }
              await n.createOrMerge(a, {
                chatId: a,
                participantMetadataMap: i,
              });
            }));
      }
    }
    async function c(e, t) {
      var n;
      try {
        n = o("WAWebWidToJid").widToGroupJid(e);
      } catch (e) {
        return;
      }
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["group-history-participant"], async function (e) {
          var r = e[0],
            o = await r.get(n),
            a = o == null ? void 0 : o.participantMetadataMap;
          if (!(a == null || a.size === 0)) {
            var i = !1;
            for (var l of t) {
              var u,
                c = s((u = l.lid) != null ? u : l.id);
              c != null && a.delete(c) && (i = !0);
            }
            i &&
              (a.size === 0
                ? await r.remove(n)
                : await r.merge(n, { participantMetadataMap: a }));
          }
        });
    }
    async function d(e) {
      var t;
      try {
        t = o("WAWebWidToJid").widToGroupJid(e);
      } catch (e) {
        return;
      }
      await o("WAWebSchemaGroupHistoryParticipant")
        .getGroupHistoryParticipantTable()
        .remove(t);
    }
    async function m(e) {
      var t, n;
      try {
        n = o("WAWebWidToJid").widToGroupJid(e);
      } catch (e) {
        return null;
      }
      var r = await o("WAWebSchemaGroupHistoryParticipant")
        .getGroupHistoryParticipantTable()
        .get(n);
      return (t = r == null ? void 0 : r.participantMetadataMap) != null
        ? t
        : null;
    }
    async function p(e, t) {
      if (t.actionType !== o("WAWebGroupType").GROUP_ACTIONS.ADD) return t;
      var n = await m(e);
      if (n == null || n.size === 0) return t;
      var r = !1,
        a = t.participants.map(function (e) {
          var t, a;
          if (
            e.groupHistorySentState ===
              o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
                .HISTORY_SENT ||
            e.groupHistorySentState ===
              o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
                .NOTICE_SENT
          )
            return e;
          var i = s((t = e.lid) != null ? t : e.id);
          if (i == null) return e;
          var l = (a = n.get(i)) == null ? void 0 : a.groupHistorySentState;
          return l !==
            o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
              .HISTORY_SENT &&
            l !==
              o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
                .NOTICE_SENT
            ? e
            : ((r = !0),
              babelHelpers.extends({}, e, { groupHistorySentState: l }));
        });
      return r ? babelHelpers.extends({}, t, { participants: a }) : t;
    }
    ((l.toGroupHistoryParticipantKey = s),
      (l.updateGroupHistoryParticipantMetadataOnJoin = u),
      (l.clearGroupHistoryParticipantStateOnRemove = c),
      (l.clearGroupHistoryParticipantStateForGroup = d),
      (l.getGroupHistoryParticipantMetadataForGroup = m),
      (l.enrichGroupActionWithStoredHistoryState = p));
  },
  98,
);
