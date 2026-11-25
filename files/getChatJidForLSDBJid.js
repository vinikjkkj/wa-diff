__d(
  "getChatJidForLSDBJid",
  ["I64", "LSMessagingThreadTypeUtil", "ReQL", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n, r) {
      var a = await o("ReQL").firstAsync(
        o("ReQL").fromTableAscending(t.threads).getKeyRange(n),
      );
      if (a != null) {
        var i = (e || (e = o("I64"))).to_string(r);
        return o("LSMessagingThreadTypeUtil").isGroup(a.threadType)
          ? o("WAJids").toGroupJid(i)
          : o("WAJids").toMsgrUserJid(i);
      }
    }
    l.getMaybeChatJidForLSDBJid = s;
  },
  98,
);
