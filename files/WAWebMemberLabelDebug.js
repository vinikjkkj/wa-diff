__d(
  "WAWebMemberLabelDebug",
  [
    "WAJids",
    "WAWebMemberLabelBridgeApi",
    "WAWebMemberLabelBulkJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.map(function (e) {
          var t = {
            chatId: o("WAWebWidToJid").widToGroupJid(
              o("WAWebWidFactory").createWid(e.data.chatId),
            ),
            member: o("WAJids").toLidUserJid(
              o("WAWebWidFactory").createWid(e.data.member).user,
            ),
          };
          switch (e.type) {
            case "UPSERT":
              return {
                type: "UPSERT",
                data: babelHelpers.extends({}, t, {
                  memberLabel: e.data.memberLabel,
                }),
              };
            case "DELETE":
              return { type: "DELETE", data: t };
          }
        }),
        n = await Promise.all(
          t.map(o("WAWebMemberLabelBulkJob").updateMemberLabelsBatched),
        );
      return (
        o(
          "WAWebMemberLabelBridgeApi",
        ).MemberLabelBridgeApi.updateMemberLabelCollection({ updates: t }),
        n
      );
    }
    e.doc = "Update member labels in batch";
    var s = { updateMemberLabelsBatched: e };
    l.default = s;
  },
  98,
);
