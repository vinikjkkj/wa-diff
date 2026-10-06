__d(
  "WAWebBotProduct",
  ["$InternalEnum", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      META_AI: "meta_ai",
      META_AI_THREAD: "meta_ai_thread",
      OPEN_META_AI_FOR_GROUP: "open_meta_ai_for_group",
      TEE_META_AI_GROUP: "tee_meta_ai_group",
      SIDE_CHAT: "side_chat",
      MANUS: "manus",
      HATCH: "hatch",
      MUSE: "muse",
      THIRD_PARTY: "3p_bot",
      SUPPORT: "wa_ias",
    });
    function s(t) {
      var n;
      return t == null
        ? null
        : t === "MUSE"
          ? e.MUSE
          : (n = e.cast(t)) != null
            ? n
            : null;
    }
    function u(t) {
      return s(t) === e.MUSE;
    }
    function c(t, n) {
      return (
        n === e.MUSE ||
        (n === e.HATCH && !t.equals(o("WAWebBotUtils").HATCH_BOT_FBID_WID))
      );
    }
    ((l.BotProduct = e),
      (l.botProductFromServerValue = s),
      (l.usesMuseGroupTosNotice = u),
      (l.isMuseAgentProduct = c));
  },
  98,
);
