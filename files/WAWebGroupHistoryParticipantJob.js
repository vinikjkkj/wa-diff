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
            o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderEnabled()
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
                  _ = (d = c.lid) != null ? d : c.id,
                  f = o("WAWebLidMigrationUtils").toUserLid(_);
                if (f != null) {
                  var g = o("WAWebWidToJid").userLidtoLidUserJid(f);
                  u.set(g, {
                    joinTime: (m = c.joinTime) != null ? m : null,
                    groupHistorySentState:
                      (p = c.groupHistorySentState) != null ? p : null,
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
    l.updateGroupHistoryParticipantMetadataOnJoin = s;
  },
  98,
);
