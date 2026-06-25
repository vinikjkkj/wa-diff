__d(
  "WAWebGroupHistoryParticipantJob",
  [
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes.flow",
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
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r;
          if (
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(t)
          ) {
            var a = n.filter(function (e) {
              return e.joinTime != null;
            });
            if (a.length !== 0) {
              var i;
              try {
                i = o("WAWebWidToJid").widToGroupJid(t);
              } catch (e) {
                return;
              }
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history][M2] Storing join metadata for ",
                    " participants",
                  ])),
                a.length,
              );
              var l = o(
                  "WAWebSchemaGroupHistoryParticipant",
                ).getGroupHistoryParticipantTable(),
                s = yield l.get(i),
                u =
                  (r = s == null ? void 0 : s.participantMetadataMap) != null
                    ? r
                    : new Map();
              for (var c of a) {
                var d,
                  m,
                  p,
                  _,
                  f,
                  g = (d = c.lid) != null ? d : c.id,
                  h = o("WAWebLidMigrationUtils").toUserLid(g);
                if (h != null) {
                  var y = o("WAWebWidToJid").userLidtoLidUserJid(h),
                    C = u.get(y);
                  u.set(y, {
                    joinTime:
                      (m =
                        (p = c.joinTime) != null
                          ? p
                          : C == null
                            ? void 0
                            : C.joinTime) != null
                        ? m
                        : null,
                    groupHistorySentState:
                      (_ =
                        (f = c.groupHistorySentState) != null
                          ? f
                          : C == null
                            ? void 0
                            : C.groupHistorySentState) != null
                        ? _
                        : null,
                  });
                }
              }
              yield l.createOrMerge(i, {
                chatId: i,
                participantMetadataMap: u,
              });
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
            ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e)
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
            ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e)
          )
            return t;
          var n = yield _(e);
          if (n == null || n.size === 0) return t;
          var r = !1,
            a = t.participants.map(function (e) {
              var t, a;
              if (
                e.groupHistorySentState ===
                  o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
                    .HISTORY_SENT ||
                e.groupHistorySentState ===
                  o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
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
                o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
                  .HISTORY_SENT &&
                l !==
                  o("WAWebGroupHistoryPostJoinTypes.flow").GroupHistorySentState
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
