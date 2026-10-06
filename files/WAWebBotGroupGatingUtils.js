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
    function d(e) {
      return (
        o("WAWebBotProduct").botProductFromServerValue(e) ===
        o("WAWebBotProduct").BotProduct.MUSE
      );
    }
    function m(t, n) {
      return n !== e.GROUP ||
        (t == null ? void 0 : t.isDeprecated) === !0 ||
        (t == null ? void 0 : t.isDeleted) === !0 ||
        !d(t == null ? void 0 : t.product)
        ? !1
        : s();
    }
    function p(e, t) {
      return t
        ? !1
        : o("WAWebBotUtils").isMetaAiBot(e) ||
            o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? !0
          : s();
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_enabled",
          ) === !0;
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_add_tee_enabled",
          ) === !0;
    }
    function g(e) {
      return e == null
        ? !1
        : o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
          ? _()
          : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
            ? f()
            : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    function h(e) {
      var t = e.authorWid,
        n = e.botGroupParticipant,
        r = e.chatWid,
        a = e.isBotInvoke;
      return (r == null ? void 0 : r.isGroup()) !== !0 || n == null || !g(n)
        ? !1
        : !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n) ||
            a ||
            (t == null ? void 0 : t.equals(n)) === !0;
    }
    function y() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") ===
        !0
      );
    }
    function C(e) {
      return o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
        ? y()
        : o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    function b() {
      return (
        y() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_group_send_mentioned_pushname_enabled",
        )
      );
    }
    ((l.BotGroupContext = e),
      (l.isStandardBotProfileGroupEnabled = s),
      (l.isMuseGroupAgentRenderingEnabled = u),
      (l.isMuseProductSupported = c),
      (l.isGroupAgentProduct = d),
      (l.isGroupAgent = m),
      (l.isGroupBotInvokeAllowed = p),
      (l.isOpenGroupBotParticipantAddEnabled = _),
      (l.isTEEGroupBotParticipantAddEnabled = f),
      (l.isGroupBotParticipantEnabled = g),
      (l.isGroupBotMessage = h),
      (l.isOpenGroupBotSendEnabled = y),
      (l.isGroupRevokeAgentTarget = C),
      (l.isGroupBotSendMentionedPushnameEnabled = b));
  },
  98,
);
