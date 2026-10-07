__d(
  "WAWebGroupAgentAuthorName",
  [
    "fbt",
    "WAWebBotExposedName",
    "WAWebBotFrontendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebGroupAgentProfileRouting",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e =
      /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]+$/;
    function u(e) {
      var t = e.agentWid,
        n = e.chat,
        a = e.product,
        i = e.profileName;
      if (
        n == null ||
        !o("WAWebChatGetters").getIsGroup(n) ||
        !m(t) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      )
        return !1;
      var l = o("WAWebBotProduct").botProductFromServerValue(a);
      return l == null ||
        r("isStringNullOrEmpty")(i == null ? void 0 : i.trim()) ||
        d(t, l, i)
        ? !0
        : o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() &&
            o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(
              t,
              l,
            );
    }
    function c(e) {
      var t = e.agentWid,
        n = e.product,
        a = e.profileName,
        i = e.pushname,
        l = o("WAWebBotProduct").botProductFromServerValue(n);
      if (d(t, l, a)) return s._(/*BTDS*/ "Muse").toString();
      var u = a == null ? void 0 : a.trim();
      if (l != null && !r("isStringNullOrEmpty")(u)) return u;
      var c = i == null ? void 0 : i.trim();
      return !r("isStringNullOrEmpty")(c) &&
        c !== "Meta AI" &&
        c !== o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName()
        ? c
        : o("WAWebBotExposedName").getUnknownAccountName();
    }
    function d(t, n, r) {
      return (
        o("WAWebBotProduct").isMuseAgentProduct(t, n) && r != null && e.test(r)
      );
    }
    function m(e) {
      return (
        o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
        !o("WAWebBotUtils").isAnyMetaAiBot(e) &&
        !o("WAWebBotUtils").isHatchBot(e) &&
        !o("WAWebBotStaticProfiles").isStaticProfile(e)
      );
    }
    ((l.shouldUseGroupAgentAuthorName = u), (l.getGroupAgentAuthorName = c));
  },
  226,
);
