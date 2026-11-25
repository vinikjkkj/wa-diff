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
      return s() && c();
    }
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue("ai_hatch_3p_bot_enabled") === !0
      );
    }
    function d() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_3p_bot_group_add_companion_enabled",
        ) === !0 &&
        s() &&
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_3p_bot_group_add_enabled",
        ) === !0
      );
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_group_agent_mutual_exclusion_enabled",
        ) === !0
      );
    }
    function p(e) {
      return (
        o("WAWebBotProduct").botProductFromServerValue(e) ===
        o("WAWebBotProduct").BotProduct.MUSE
      );
    }
    function _(t, n) {
      return n !== e.GROUP ||
        (t == null ? void 0 : t.isDeprecated) === !0 ||
        (t == null ? void 0 : t.isDeleted) === !0 ||
        !p(t == null ? void 0 : t.product)
        ? !1
        : s();
    }
    function f(e, t) {
      return t
        ? !1
        : o("WAWebBotUtils").isMetaAiBot(e) ||
            o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? !0
          : s();
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_enabled",
          ) === !0;
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_add_tee_enabled",
          ) === !0;
    }
    function y(e) {
      return o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
        ? g()
        : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? !0
          : s();
    }
    function C(e) {
      return e == null
        ? !1
        : o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
          ? v()
          : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
            ? h()
            : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    function b(e) {
      var t = e.authorWid,
        n = e.botGroupParticipant,
        r = e.chatWid,
        a = e.isBotInvoke;
      return (r == null ? void 0 : r.isGroup()) !== !0 || n == null || !C(n)
        ? !1
        : !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n) ||
            a ||
            (t == null ? void 0 : t.equals(n)) === !0;
    }
    function v() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") ===
        !0
      );
    }
    function S(e) {
      return v() && (e == null ? void 0 : e.isOpenBotGroup) === !0
        ? o("WAWebBotUtils").META_BOT_FBID_WID
        : h() && (e == null ? void 0 : e.isTeeBotGroup) === !0
          ? o("WAWebBotUtils").META_BOT_TEE_FBID_WID
          : null;
    }
    function R(e) {
      return o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
        ? v()
        : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    ((l.BotGroupContext = e),
      (l.isStandardBotProfileGroupEnabled = s),
      (l.isMuseGroupAgentRenderingEnabled = u),
      (l.isMuseProductSupported = c),
      (l.isMuseGroupAddEnabled = d),
      (l.isGroupAgentMutualExclusionEnabled = m),
      (l.isGroupAgentProduct = p),
      (l.isGroupAgent = _),
      (l.isGroupBotInvokeAllowed = f),
      (l.isOpenGroupBotParticipantAddEnabled = g),
      (l.isTEEGroupBotParticipantAddEnabled = h),
      (l.isAgentListedInGroupInfoResponse = y),
      (l.isGroupBotParticipantEnabled = C),
      (l.isGroupBotMessage = b),
      (l.isOpenGroupBotSendEnabled = v),
      (l.getSendGroupBotParticipant = S),
      (l.isGroupRevokeAgentTarget = R));
  },
  98,
);
