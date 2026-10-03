__d(
  "WAWebGroupAgentPrivacyNoticeParams",
  ["WAWebBotUtils", "WAWebDecodeJid"],
  function (t, n, r, o, a, i, l) {
    var e = "group_agent",
      s = "group_agent_generic",
      u = "group_agent_third_party";
    function c(t) {
      return (t == null ? void 0 : t[0]) === e;
    }
    function d(e) {
      return (e == null ? void 0 : e[0]) === s;
    }
    function m(e) {
      var t = e == null ? void 0 : e[1];
      return (e == null ? void 0 : e[0]) === u &&
        t != null &&
        typeof t != "string"
        ? t
        : null;
    }
    function p(e) {
      var t = e == null ? void 0 : e[0],
        n = typeof t == "string" ? o("WAWebDecodeJid").decodeJid(t) : t;
      return n != null &&
        typeof n != "string" &&
        o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n)
        ? n
        : null;
    }
    ((l.GROUP_AGENT_PRIVACY_NOTICE_PARAM = e),
      (l.GENERIC_GROUP_AGENT_PRIVACY_NOTICE_PARAM = s),
      (l.THIRD_PARTY_GROUP_AGENT_PRIVACY_NOTICE_PARAM = u),
      (l.isGroupAgentPrivacyNoticeParams = c),
      (l.isGenericGroupAgentPrivacyNoticeParams = d),
      (l.getThirdPartyGroupAgentPrivacyNoticeAgent = m),
      (l.getSyncedGroupAgentPrivacyNoticeAgent = p));
  },
  98,
);
