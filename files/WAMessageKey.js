__d(
  "WAMessageKey",
  ["WAGlobals", "WAJids", "WAStanzaUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === o("WAJids").AUTHOR_ME || e == o("WAGlobals").getMyUserJid();
    }
    function s(t, n, a) {
      if (a == null) throw r("err")("messageKey is null");
      var i = a.id,
        l = a.remoteJid;
      if (i == null) throw r("err")("messageKey.id is null");
      if (l == null) throw r("err")("messageKey.remoteJid is null");
      var s = o("WAJids").interpretAndValidateJid(l);
      if (s.jidType === "unknown")
        throw r("err")("messageKey.remoteJid is invalid");
      var u,
        c = o("WAJids").AUTHOR_ME;
      if (s.jidType === "group")
        if (((u = s.groupJid), e(n) && a.fromMe === !0))
          c = o("WAJids").AUTHOR_ME;
        else if (a.fromMe == !0) c = n;
        else {
          var d = a.participant;
          if (d == null) throw r("err")("key.participant is null");
          var m = o("WAJids").interpretAndValidateJid(d);
          if (m.jidType === "msgrUser") c = m.userJid;
          else throw r("err")("key.participant is invalid");
        }
      else if (s.jidType === "msgrUser" || s.jidType === "msgrDevice") {
        var p = o("WAJids").interpretAndValidateJid(t);
        if (p.jidType !== "msgrUser") throw r("err")("expected user type jid.");
        ((u = p.userJid),
          e(n)
            ? a.fromMe === !0
              ? (c = o("WAJids").AUTHOR_ME)
              : (c = p.userJid)
            : a.fromMe === !0 && (c = p.userJid));
      } else throw r("err")("Unsupported jidtype type");
      return {
        chat: u,
        author: e(c) ? o("WAJids").AUTHOR_ME : c,
        externalId: o("WAStanzaUtils").toStanzaId(i),
      };
    }
    l.extractProtocolMessageId = s;
  },
  98,
);
