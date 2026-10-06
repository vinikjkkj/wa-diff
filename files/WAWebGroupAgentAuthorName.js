__d(
  "WAWebGroupAgentAuthorName",
  [
    "WAWebBotExposedName",
    "WAWebBotFrontendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebGroupAgentProfileRouting",
    "WAWebInitializeBotContact",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.agentWid,
        n = e.chat,
        a = e.product,
        i = e.profileName;
      if (
        n == null ||
        !o("WAWebChatGetters").getIsGroup(n) ||
        !u(t) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      )
        return !1;
      var l = o("WAWebBotProduct").botProductFromServerValue(a);
      return l == null ||
        r("isStringNullOrEmpty")(i == null ? void 0 : i.trim())
        ? !0
        : o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() &&
            o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(
              t,
              l,
            );
    }
    function s(e) {
      var t = e.contactName,
        n = e.notifyName,
        a = e.product,
        i = e.profileName,
        l = e.pushname,
        s = i == null ? void 0 : i.trim();
      if (
        o("WAWebBotProduct").botProductFromServerValue(a) != null &&
        !r("isStringNullOrEmpty")(s)
      )
        return s;
      var u = o("WAWebInitializeBotContact").getBotPlaceholderName(),
        c = o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName(),
        d = o("WAWebBotExposedName").getUnknownAccountName();
      for (var m of [t, n, l]) {
        var p = m == null ? void 0 : m.trim();
        if (
          !r("isStringNullOrEmpty")(p) &&
          p !== u &&
          p !== c &&
          p !== "Meta AI" &&
          p !== d
        )
          return p;
      }
      return d;
    }
    function u(e) {
      return (
        o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
        !o("WAWebBotUtils").isAnyMetaAiBot(e) &&
        !o("WAWebBotUtils").isHatchBot(e) &&
        !o("WAWebBotStaticProfiles").isStaticProfile(e)
      );
    }
    ((l.shouldUseGroupAgentAuthorName = e), (l.getGroupAgentAuthorName = s));
  },
  98,
);
