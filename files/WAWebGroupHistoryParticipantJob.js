__d(
  "WAWebGroupHistoryParticipantJob",
  [
    "WALogger",
    "WAWebGroupHistoryGating",
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
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          if (
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryAfterJoinPrerequisitesEnabled()
          ) {
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
                            l =
                              (t =
                                r == null
                                  ? void 0
                                  : r.participantMetadataMap) != null
                                ? t
                                : new Map();
                          for (var s of a) {
                            var u,
                              c,
                              d,
                              m,
                              p,
                              _ = (u = s.lid) != null ? u : s.id,
                              f = o("WAWebLidMigrationUtils").toUserLid(_);
                            if (f != null) {
                              var g = o("WAWebWidToJid").userLidtoLidUserJid(f),
                                h = l.get(g);
                              l.set(g, {
                                joinTime:
                                  (c =
                                    (d = s.joinTime) != null
                                      ? d
                                      : h == null
                                        ? void 0
                                        : h.joinTime) != null
                                    ? c
                                    : null,
                                groupHistorySentState:
                                  (m =
                                    (p = s.groupHistorySentState) != null
                                      ? p
                                      : h == null
                                        ? void 0
                                        : h.groupHistorySentState) != null
                                    ? m
                                    : null,
                              });
                            }
                          }
                          yield n.createOrMerge(i, {
                            chatId: i,
                            participantMetadataMap: l,
                          });
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ));
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryAfterJoinPrerequisitesEnabled()
          ) {
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
                        a = yield n.get(r),
                        i = a == null ? void 0 : a.participantMetadataMap;
                      if (!(i == null || i.size === 0)) {
                        var l = !1;
                        for (var s of t) {
                          var u,
                            c = o("WAWebLidMigrationUtils").toUserLid(
                              (u = s.lid) != null ? u : s.id,
                            );
                          c != null &&
                            i.delete(
                              o("WAWebWidToJid").userLidtoLidUserJid(c),
                            ) &&
                            (l = !0);
                        }
                        l &&
                          (i.size === 0
                            ? yield n.remove(r)
                            : yield n.merge(r, { participantMetadataMap: i }));
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t.actionType !== o("WAWebGroupType").GROUP_ACTIONS.ADD ||
            !o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryAfterJoinPrerequisitesEnabled()
          )
            return t;
          var n = yield _(e);
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
              var i = o("WAWebLidMigrationUtils").toUserLid(
                (t = e.lid) != null ? t : e.id,
              );
              if (i == null) return e;
              var l =
                (a = n.get(o("WAWebWidToJid").userLidtoLidUserJid(i))) == null
                  ? void 0
                  : a.groupHistorySentState;
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
        h.apply(this, arguments)
      );
    }
    ((l.updateGroupHistoryParticipantMetadataOnJoin = s),
      (l.clearGroupHistoryParticipantStateOnRemove = c),
      (l.clearGroupHistoryParticipantStateForGroup = m),
      (l.getGroupHistoryParticipantMetadataForGroup = _),
      (l.enrichGroupActionWithStoredHistoryState = g));
  },
  98,
);
