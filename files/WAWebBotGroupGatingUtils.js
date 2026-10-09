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
    function m(e) {
      return (
        o("WAWebBotProduct").botProductFromServerValue(e) ===
        o("WAWebBotProduct").BotProduct.MUSE
      );
    }
    function p(t, n) {
      return n !== e.GROUP ||
        (t == null ? void 0 : t.isDeprecated) === !0 ||
        (t == null ? void 0 : t.isDeleted) === !0 ||
        !m(t == null ? void 0 : t.product)
        ? !1
        : s();
    }
    function _(e, t) {
      return t
        ? !1
        : o("WAWebBotUtils").isMetaAiBot(e) ||
            o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? !0
          : s();
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_enabled",
          ) === !0;
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_add_tee_enabled",
          ) === !0;
    }
    function h(e) {
      return o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
        ? f()
        : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? g()
          : s();
    }
    function y(e) {
      return e == null
        ? !1
        : o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
          ? b()
          : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
            ? g()
            : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    function C(e) {
      var t = e.authorWid,
        n = e.botGroupParticipant,
        r = e.chatWid,
        a = e.isBotInvoke;
      return (r == null ? void 0 : r.isGroup()) !== !0 || n == null || !y(n)
        ? !1
        : !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n) ||
            a ||
            (t == null ? void 0 : t.equals(n)) === !0;
    }
    function b() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") ===
        !0
      );
    }
    function v(e) {
      return b() && (e == null ? void 0 : e.isOpenBotGroup) === !0
        ? o("WAWebBotUtils").META_BOT_FBID_WID
        : g() && (e == null ? void 0 : e.isTeeBotGroup) === !0
          ? o("WAWebBotUtils").META_BOT_TEE_FBID_WID
          : null;
    }
    function S(e) {
      return o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
        ? b()
        : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    function R() {
      return (
        b() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_group_send_mentioned_pushname_enabled",
        )
      );
    }
    ((l.BotGroupContext = e),
      (l.isStandardBotProfileGroupEnabled = s),
      (l.isMuseGroupAgentRenderingEnabled = u),
      (l.isMuseProductSupported = c),
      (l.isMuseGroupAddEnabled = d),
      (l.isGroupAgentProduct = m),
      (l.isGroupAgent = p),
      (l.isGroupBotInvokeAllowed = _),
      (l.isOpenGroupBotParticipantAddEnabled = f),
      (l.isTEEGroupBotParticipantAddEnabled = g),
      (l.isAgentListedInGroupInfoResponse = h),
      (l.isGroupBotParticipantEnabled = y),
      (l.isGroupBotMessage = C),
      (l.isOpenGroupBotSendEnabled = b),
      (l.getSendGroupBotParticipant = v),
      (l.isGroupRevokeAgentTarget = S),
      (l.isGroupBotSendMentionedPushnameEnabled = R));
  },
  98,
);
