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
    function c(e) {
      return (
        o("WAWebBotProduct").botProductFromServerValue(e) ===
        o("WAWebBotProduct").BotProduct.MUSE
      );
    }
    function d(t, n) {
      return n !== e.GROUP ||
        (t == null ? void 0 : t.isDeprecated) === !0 ||
        (t == null ? void 0 : t.isDeleted) === !0 ||
        !c(t == null ? void 0 : t.product)
        ? !1
        : s();
    }
    function m(e, t) {
      return t
        ? !1
        : o("WAWebBotUtils").isMetaAiBot(e) ||
            o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? !0
          : s();
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_enabled",
          ) === !0;
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_add_tee_enabled",
          ) === !0;
    }
    function f(e) {
      return e == null
        ? !1
        : o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
          ? p()
          : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
            ? _()
            : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    function g(e) {
      var t = e.authorWid,
        n = e.botGroupParticipant,
        r = e.chatWid,
        a = e.isBotInvoke;
      return (r == null ? void 0 : r.isGroup()) !== !0 || n == null || !f(n)
        ? !1
        : !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n) ||
            a ||
            (t == null ? void 0 : t.equals(n)) === !0;
    }
    function h() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") ===
        !0
      );
    }
    function y() {
      return (
        h() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_group_send_mentioned_pushname_enabled",
        )
      );
    }
    ((l.BotGroupContext = e),
      (l.isStandardBotProfileGroupEnabled = s),
      (l.isMuseGroupAgentRenderingEnabled = u),
      (l.isGroupAgentProduct = c),
      (l.isGroupAgent = d),
      (l.isGroupBotInvokeAllowed = m),
      (l.isOpenGroupBotParticipantAddEnabled = p),
      (l.isTEEGroupBotParticipantAddEnabled = _),
      (l.isGroupBotParticipantEnabled = f),
      (l.isGroupBotMessage = g),
      (l.isOpenGroupBotSendEnabled = h),
      (l.isGroupBotSendMentionedPushnameEnabled = y));
  },
  98,
);
