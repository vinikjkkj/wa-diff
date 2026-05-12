__d(
  "WAWebResolveMetaAiPersonaId",
  ["WAWebBotProfileCollection", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      return o("WAWebBotUtils").isMetaAiBot(e.id)
        ? (t =
            (n = s(e.id)) != null
              ? n
              : s(o("WAWebBotUtils").META_BOT_FBID_WID)) != null
          ? t
          : s(o("WAWebBotUtils").META_BOT_PN_WID)
        : null;
    }
    function s(e) {
      var t,
        n =
          (t = o("WAWebBotProfileCollection").BotProfileCollection.get(e)) ==
          null
            ? void 0
            : t.personaId;
      return n != null && n !== "" ? n : null;
    }
    l.resolveMetaAiPersonaId = e;
  },
  98,
);
