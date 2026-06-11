__d(
  "WAWebGroupHistoryParticipantJob",
  [
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebLidMigrationUtils",
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        d.apply(this, arguments)
      );
    }
    ((l.updateGroupHistoryParticipantMetadataOnJoin = s),
      (l.getGroupHistoryParticipantMetadataForGroup = c));
  },
  98,
);
