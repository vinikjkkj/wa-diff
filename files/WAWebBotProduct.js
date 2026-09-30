__d(
  "WAWebBotProduct",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
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
    function l(t) {
      var n;
      return t == null
        ? null
        : t === "MUSE"
          ? e.MUSE
          : (n = e.cast(t)) != null
            ? n
            : null;
    }
    function s(t) {
      return l(t) === e.MUSE;
    }
    ((i.BotProduct = e),
      (i.botProductFromServerValue = l),
      (i.usesMuseGroupTosNotice = s));
  },
  66,
);
