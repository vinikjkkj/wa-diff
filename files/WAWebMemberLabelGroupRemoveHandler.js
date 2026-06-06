__d(
  "WAWebMemberLabelGroupRemoveHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelGating",
    "WAWebMemberLabelJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n) {
      if (o("WAWebMemberLabelGating").isMemberLabelInfraEnabled())
        try {
          var r = [],
            a = t.chatId,
            i = o("WAWebWidToJid").widToGroupJid(a),
            l = [],
            s = n.participants.some(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            });
          if (s) {
            var u = await o(
              "WAWebMemberLabelJob",
            ).deleteAllMemberLabelsForGroup({ chatId: i });
            for (var c of u)
              r.push({ type: "DELETE", data: { chatId: i, member: c } });
          } else {
            for (var d of n.participants) {
              var m = o("WAWebLidMigrationUtils").toUserLid(d.id);
              if (m) {
                var p = o("WAWebWidToJid").userLidtoLidUserJid(m);
                l.push(p);
              }
            }
            var _ = await o("WAWebMemberLabelJob").deleteMemberLabelsForGroup({
              chatId: i,
              members: l,
            });
            for (var f of _)
              r.push({ type: "DELETE", data: { chatId: i, member: f } });
          }
          r.length > 0 &&
            o("WAWebBackendApi").frontendFireAndForget(
              "updateMemberLabelCollection",
              { updates: r },
            );
        } catch (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Member Labels] cleanup failed for removed members",
              ])),
          );
        }
    }
    l.handleMemberLabelUpdatesOnGroupParticipantRemoval = s;
  },
  98,
);
