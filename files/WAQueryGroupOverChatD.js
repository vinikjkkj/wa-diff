__d(
  "WAQueryGroupOverChatD",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAGroupParserUtils",
    "WAResultOrError",
    "WAWap",
    "WmiOds",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WADeprecatedWapParser"))(
      "queryAllGroupsResponse",
      function (e) {
        return (
          e.assertTag("iq"),
          { group: o("WAGroupParserUtils").parseGroupNode(e.child("group")) }
        );
      },
    );
    async function s(t) {
      var n,
        r = t.groupJid,
        a = await o("WADeprecatedSendIq").deprecatedSendIq(
          (n = o("WAWap")).wap(
            "iq",
            {
              id: n.generateId(),
              to: n.GROUP_JID(r),
              type: "get",
              xmlns: "w:g2",
            },
            n.wap("query", null),
          ),
          e,
        );
      return a.success
        ? (o("WmiOds").wmiOdsBump("wa_query_group", "ok"),
          o("WAResultOrError").makeResult(a.result.group))
        : (o("WmiOds").wmiOdsBump("wa_query_group", "fail-" + a.errorCode),
          o("WAResultOrError").makeError(a.errorText));
    }
    l.queryGroupOverChatD = s;
  },
  98,
);
