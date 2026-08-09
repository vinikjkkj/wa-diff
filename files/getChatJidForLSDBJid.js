__d(
  "getChatJidForLSDBJid",
  [
    "I64",
    "LSMessagingThreadTypeUtil",
    "ReQL",
    "WAJids",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = yield o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(t.threads).getKeyRange(n),
          );
          if (a != null) {
            var i = (e || (e = o("I64"))).to_string(r);
            return o("LSMessagingThreadTypeUtil").isGroup(a.threadType)
              ? o("WAJids").toGroupJid(i)
              : o("WAJids").toMsgrUserJid(i);
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.getMaybeChatJidForLSDBJid = s;
  },
  98,
);
