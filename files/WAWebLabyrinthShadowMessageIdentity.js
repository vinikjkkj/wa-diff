__d(
  "WAWebLabyrinthShadowMessageIdentity",
  [
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return {
        author: u(e, t),
        stanzaId: o("WAWebLabyrinthOpaqueTypes").makeStanzaId(e.id.id),
        thread: o("WAWebWidToJid").widToChatJid(t),
      };
    }
    function s(e) {
      var t = e.author,
        n = e.stanzaId,
        r = e.thread,
        o = t.kind === "sender" ? t.jid : t.kind;
      return r + "|" + o + "|" + n;
    }
    function u(e, t) {
      var n, r;
      if (e.id.fromMe) return { kind: "me" };
      var a = (n = e.id.participant) != null ? n : t;
      if (!a.isUserNotPSA() || a.isHosted()) return { kind: "unknown" };
      var i = o("WAWebWidFactory").asUserWidOrThrow(a);
      return {
        jid: o("WAWebWidToJid").widToUserJid(
          (r = o("WAWebLidMigrationUtils").toUserLid(i)) != null ? r : i,
        ),
        kind: "sender",
      };
    }
    ((l.getLabyrinthShadowMessageIdentity = e),
      (l.getLabyrinthShadowIdentityKey = s));
  },
  98,
);
