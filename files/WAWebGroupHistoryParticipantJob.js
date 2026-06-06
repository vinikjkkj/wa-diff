__d(
  "WAWebGroupHistoryParticipantJob",
  [
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebLidMigrationUtils",
    "WAWebSchemaGroupHistoryParticipant",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n) {
      var r;
      if (o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderEnabled()) {
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
            s = await l.get(i),
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
          await l.createOrMerge(i, { chatId: i, participantMetadataMap: u });
        }
      }
    }
    l.updateGroupHistoryParticipantMetadataOnJoin = s;
  },
  98,
);
