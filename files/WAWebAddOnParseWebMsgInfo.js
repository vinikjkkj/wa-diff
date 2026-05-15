__d(
  "WAWebAddOnParseWebMsgInfo",
  [
    "WALongInt",
    "WANullthrows",
    "WATimeUtils",
    "WAWebDecodeJid",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.isFromCag,
        n = e.key,
        a = e.outerParticipant,
        i = !!n.fromMe,
        l = o("WAWebDecodeJid").decodeJid(n.remoteJid),
        s =
          t === !0
            ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        u;
      if (
        (i
          ? l != null && typeof l != "string" && !l.isUser() && (u = s)
          : (u =
              a != null
                ? o("WAWebDecodeJid").decodeJid(a)
                : o("WAWebDecodeJid").decodeJid(n.participant)),
        typeof l == "string" || l == null)
      )
        return null;
      var c;
      u != null && typeof u != "string"
        ? (c = new (r("WAWebMsgKey"))({
            id: r("WANullthrows")(n.id),
            fromMe: i,
            remote: l,
            participant: u,
          }))
        : (c = new (r("WAWebMsgKey"))({
            id: r("WANullthrows")(n.id),
            fromMe: i,
            remote: l,
          }));
      var d = c.participant || c.remote,
        m = o("WAWebWidFactory").asUserWidOrThrow(i === !0 ? s : d);
      return { msgKey: c, sender: m };
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
