__d(
  "WAWebMemberLabelDebug",
  [
    "Promise",
    "WAJids",
    "WAWebMemberLabelBridgeApi",
    "WAWebMemberLabelBulkJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.map(function (e) {
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
            a = yield (e || (e = n("Promise"))).all(
              r.map(o("WAWebMemberLabelBulkJob").updateMemberLabelsBatched),
            );
          return (
            o(
              "WAWebMemberLabelBridgeApi",
            ).MemberLabelBridgeApi.updateMemberLabelCollection({ updates: r }),
            a
          );
        })),
        u.apply(this, arguments)
      );
    }
    s.doc = "Update member labels in batch";
    var c = { updateMemberLabelsBatched: s };
    l.default = c;
  },
  98,
);
