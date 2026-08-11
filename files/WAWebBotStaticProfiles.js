__d(
  "WAWebBotStaticProfiles",
  ["WAWebBotProduct", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map([
        [
          (e = o("WAWebBotUtils")).META_BOT_PN_WID.toString(),
          (s = o("WAWebBotProduct")).BotProduct.META_AI,
        ],
        [e.META_BOT_FBID_WID.toString(), s.BotProduct.META_AI],
        [e.META_BOT_TEE_FBID_WID.toString(), s.BotProduct.TEE_META_AI_GROUP],
        [e.MANUS_BOT_FBID_WID.toString(), s.BotProduct.MANUS],
        [e.HATCH_BOT_FBID_WID.toString(), s.BotProduct.HATCH],
        [e.META_BOT_SIDECHAT_FBID_WID.toString(), s.BotProduct.SIDE_CHAT],
        [
          e.META_BOT_SIDECHAT_LEGACY_FBID_WID.toString(),
          s.BotProduct.SIDE_CHAT,
        ],
      ]);
    function c(e) {
      return u.has(e.toString());
    }
    function d(e) {
      var t = u.get(e.toString());
      return t == null ? null : { product: t.valueOf(), isDeprecated: !1 };
    }
    ((l.isStaticProfile = c), (l.getStaticBotSupportInput = d));
  },
  98,
);
