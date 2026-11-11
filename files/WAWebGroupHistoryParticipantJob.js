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
    "asyncToGeneratorRuntime",
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
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = r.filter(function (e) {
            return e.joinTime != null;
          });
          if (a.length !== 0) {
            var i;
            try {
              i = o("WAWebWidToJid").widToGroupJid(t);
            } catch (e) {
              return;
            }
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history][M2] Storing join metadata for ",
                  " participants",
                ])),
              a.length,
            ),
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["group-history-participant"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t,
                          n = e[0],
                          r = yield n.get(i),
                          o =
                            (t =
                              r == null ? void 0 : r.participantMetadataMap) !=
                            null
                              ? t
                              : new Map();
                        for (var l of a) {
                          var u,
                            c,
                            d,
                            m,
                            p,
                            _ = s((u = l.lid) != null ? u : l.id);
                          if (_ != null) {
                            var f = o.get(_);
                            o.set(_, {
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
                        yield n.createOrMerge(i, {
                          chatId: i,
                          participantMetadataMap: o,
                        });
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r;
          try {
            r = o("WAWebWidToJid").widToGroupJid(e);
          } catch (e) {
            return;
          }
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["group-history-participant"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      o = yield n.get(r),
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
                          ? yield n.remove(r)
                          : yield n.merge(r, { participantMetadataMap: a }));
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = o("WAWebWidToJid").widToGroupJid(e);
          } catch (e) {
            return;
          }
          yield o("WAWebSchemaGroupHistoryParticipant")
            .getGroupHistoryParticipantTable()
            .remove(t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          try {
            n = o("WAWebWidToJid").widToGroupJid(e);
          } catch (e) {
            return null;
          }
          var r = yield o("WAWebSchemaGroupHistoryParticipant")
            .getGroupHistoryParticipantTable()
            .get(n);
          return (t = r == null ? void 0 : r.participantMetadataMap) != null
            ? t
            : null;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.actionType !== o("WAWebGroupType").GROUP_ACTIONS.ADD) return t;
          var n = yield f(e);
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
        })),
        y.apply(this, arguments)
      );
    }
    ((l.toGroupHistoryParticipantKey = s),
      (l.updateGroupHistoryParticipantMetadataOnJoin = u),
      (l.clearGroupHistoryParticipantStateOnRemove = d),
      (l.clearGroupHistoryParticipantStateForGroup = p),
      (l.getGroupHistoryParticipantMetadataForGroup = f),
      (l.enrichGroupActionWithStoredHistoryState = h));
  },
  98,
);
