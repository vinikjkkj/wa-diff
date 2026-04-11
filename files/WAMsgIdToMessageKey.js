__d(
  "WAMsgIdToMessageKey",
  ["WAGlobals", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.author,
        n = e.chat,
        r = e.externalId,
        a = o("WAJids").isAuthorMe(t),
        i = o("WAJids").interpretAsGroupJid(n),
        l = a ? o("WAGlobals").getMyUserJid() : t,
        s = n,
        u = i != null ? l : void 0;
      return { fromMe: a, id: r, remoteJid: s, participant: u };
    }
    l.msgIdToMessageKey = e;
  },
  98,
);
