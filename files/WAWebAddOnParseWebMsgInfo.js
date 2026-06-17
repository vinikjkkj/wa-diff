__d(
  "WAWebAddOnParseWebMsgInfo",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebDecodeJid",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.key,
        n = e.outerParticipant,
        a = !!t.fromMe,
        i = o("WAWebDecodeJid").decodeJid(t.remoteJid),
        l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        s;
      if (
        (a
          ? i != null && typeof i != "string" && !i.isUser() && (s = l)
          : (s =
              n != null
                ? o("WAWebDecodeJid").decodeJid(n)
                : o("WAWebDecodeJid").decodeJid(t.participant)),
        typeof i == "string" || i == null)
      )
        return null;
      var u;
      s != null && typeof s != "string"
        ? (u = new (r("WAWebMsgKey"))({
            id: r("nullthrows")(t.id),
            fromMe: a,
            remote: i,
            participant: s,
          }))
        : (u = new (r("WAWebMsgKey"))({
            id: r("nullthrows")(t.id),
            fromMe: a,
            remote: i,
          }));
      var c = u.participant || u.remote,
        d = o("WAWebWidFactory").asUserWidOrThrow(a === !0 ? l : c);
      return { msgKey: u, sender: d };
    }
    function s(e) {
      return e == null
        ? null
        : Math.floor(o("WALongInt").numberOrThrowIfTooLarge(e) / 1e3);
    }
    function u(e) {
      var t = o("WATimeUtils").unixTimeMs();
      return e == null ? t : Math.max(e + 1, t);
    }
    ((l.buildAddonMsgKey = e),
      (l.getAddonServerTimestamp = s),
      (l.getIncreasingLatestSenderTimestampMs = u));
  },
  98,
);
