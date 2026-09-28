__d(
  "WAWebBotGroupGatingUtils",
  ["$InternalEnum", "WAWebABProps", "WAWebBotProduct"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ GROUP: "group", ONE_TO_ONE: "one_to_one" });
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_standard_bot_profile_group_enabled",
        ) === !0
      );
    }
    function u(t, n) {
      if (
        n !== e.GROUP ||
        (t == null ? void 0 : t.isDeprecated) === !0 ||
        (t == null ? void 0 : t.isDeleted) === !0
      )
        return !1;
      var r = o("WAWebBotProduct").botProductFromServerValue(
          t == null ? void 0 : t.product,
        ),
        a =
          r === o("WAWebBotProduct").BotProduct.MUSE
            ? o("WAWebBotProduct").BotProduct.MUSE
            : null;
      return a == null ? !1 : s();
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_enabled",
          ) === !0;
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_add_tee_enabled",
          ) === !0;
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") ===
        !0
      );
    }
    function p() {
      return (
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_group_send_mentioned_pushname_enabled",
        )
      );
    }
    ((l.BotGroupContext = e),
      (l.isStandardBotProfileGroupEnabled = s),
      (l.isGroupAgent = u),
      (l.isOpenGroupBotParticipantAddEnabled = c),
      (l.isTEEGroupBotParticipantAddEnabled = d),
      (l.isOpenGroupBotSendEnabled = m),
      (l.isGroupBotSendMentionedPushnameEnabled = p));
  },
  98,
);
