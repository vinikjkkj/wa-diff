__d(
  "WAWebBotGroupGatingUtils",
  ["$InternalEnum", "WAWebABProps", "WAWebBotProduct", "WAWebBotUtils"],
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
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_3p_bot_enabled") === !0
      );
    }
    function c(t, n) {
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
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_enabled",
          ) === !0;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_add_tee_enabled",
          ) === !0;
    }
    function p(e) {
      return e == null
        ? !1
        : o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
          ? d()
          : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
            ? m()
            : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    function _(e) {
      var t = e.authorWid,
        n = e.botGroupParticipant,
        r = e.chatWid,
        a = e.isBotInvoke;
      return (r == null ? void 0 : r.isGroup()) !== !0 || n == null || !p(n)
        ? !1
        : !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n) ||
            a ||
            (t == null ? void 0 : t.equals(n)) === !0;
    }
    function f() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") ===
        !0
      );
    }
    function g() {
      return (
        f() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_group_send_mentioned_pushname_enabled",
        )
      );
    }
    ((l.BotGroupContext = e),
      (l.isStandardBotProfileGroupEnabled = s),
      (l.isMuseGroupAgentRenderingEnabled = u),
      (l.isGroupAgent = c),
      (l.isOpenGroupBotParticipantAddEnabled = d),
      (l.isTEEGroupBotParticipantAddEnabled = m),
      (l.isGroupBotParticipantEnabled = p),
      (l.isGroupBotMessage = _),
      (l.isOpenGroupBotSendEnabled = f),
      (l.isGroupBotSendMentionedPushnameEnabled = g));
  },
  98,
);
