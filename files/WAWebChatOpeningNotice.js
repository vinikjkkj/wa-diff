__d(
  "WAWebChatOpeningNotice",
  ["WAWebCommonMsgUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        ENCRYPT: "encrypt",
        PSA: "chat_psa",
        META_PRIVACY: "biz_privacy_mode_init_fb",
        BSP_PRIVACY: "biz_privacy_mode_init_bsp",
        HOSTED_GROUP: "is_capi_hosted_group",
        HOSTED_SELF: "biz_me_account_type_is_hosted",
        HOSTED_CONTACT: "biz_account_type_is_hosted",
        BOT: "bot_init",
        BIZ_BOT_1P: "biz_bot_1p_disclosure",
        BIZ_BOT_3P: "biz_bot_3p_disclosure",
        SUPPORT: "support_system_message",
        SAGA: "saga_init",
        DEFAULT_TIMER: "disappearing_mode",
        UPDATED_TIMER: "disappearing_mode_update",
      },
      s = Object.values(e);
    function u(e) {
      return (
        o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype) &&
        s.includes(e.subtype)
      );
    }
    ((l.CHAT_OPENING_NOTICE = e), (l.isChatOpeningNotice = u));
  },
  98,
);
