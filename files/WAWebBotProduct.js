__d(
  "WAWebBotProduct",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
      META_AI: "meta_ai",
      OPEN_META_AI_FOR_GROUP: "open_meta_ai_for_group",
      TEE_META_AI_GROUP: "tee_meta_ai_group",
      SIDE_CHAT: "side_chat",
      MANUS: "manus",
      HATCH: "hatch",
      THIRD_PARTY: "3p_bot",
    });
    function l(t) {
      var n;
      return t == null ? null : (n = e.cast(t)) != null ? n : null;
    }
    ((i.BotProduct = e), (i.botProductFromServerValue = l));
  },
  66,
);
