__d(
  "WAWebGroupAgentPrivacyNoticeKind",
  [
    "$InternalEnum",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebGroupAgentPrivacyNoticeParams",
    "WAWebGroupAgentProfileRouting",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      META_AI: "meta_ai",
      MUSE: "muse",
      GENERIC: "generic",
      THIRD_PARTY: "third_party",
    });
    function s(t) {
      if (
        o("WAWebGroupAgentPrivacyNoticeParams").isGroupAgentPrivacyNoticeParams(
          t,
        )
      )
        return { agent: null, kind: e.MUSE };
      if (
        o(
          "WAWebGroupAgentPrivacyNoticeParams",
        ).isGenericGroupAgentPrivacyNoticeParams(t)
      )
        return { agent: null, kind: e.GENERIC };
      var n = o(
        "WAWebGroupAgentPrivacyNoticeParams",
      ).getThirdPartyGroupAgentPrivacyNoticeAgent(t);
      if (n != null) return { agent: n, kind: e.THIRD_PARTY };
      var r = o(
        "WAWebGroupAgentPrivacyNoticeParams",
      ).getSyncedGroupAgentPrivacyNoticeAgent(t);
      return r == null
        ? { agent: null, kind: e.META_AI }
        : { agent: r, kind: c(r) };
    }
    function u(e) {
      var t;
      return (t = o(
        "WAWebGroupAgentPrivacyNoticeParams",
      ).getThirdPartyGroupAgentPrivacyNoticeAgent(e)) != null
        ? t
        : o(
            "WAWebGroupAgentPrivacyNoticeParams",
          ).getSyncedGroupAgentPrivacyNoticeAgent(e);
    }
    function c(t) {
      var n,
        r = o("WAWebBotProduct").botProductFromServerValue(
          (n = o("WAWebBotProfileCollection").BotProfileCollection.get(t)) ==
            null
            ? void 0
            : n.product,
        );
      return o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(
        t,
        r,
      )
        ? e.MUSE
        : r === o("WAWebBotProduct").BotProduct.THIRD_PARTY
          ? e.THIRD_PARTY
          : e.GENERIC;
    }
    ((l.GroupAgentPrivacyNoticeKind = e),
      (l.getGroupAgentPrivacyNotice = s),
      (l.getGroupAgentPrivacyNoticeProfileAgent = u));
  },
  98,
);
