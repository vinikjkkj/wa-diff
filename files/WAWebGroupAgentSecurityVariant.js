__d(
  "WAWebGroupAgentSecurityVariant",
  [
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebGroupAgentProfileRouting",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        META_AI: "meta_ai",
        MUSE: "muse",
        GENERIC: "generic",
      }),
      s = n("$InternalEnum")({
        META_AI_OPEN: "meta_ai_open",
        MUSE: "muse",
        OTHER: "other",
      });
    function u(t) {
      var n = [];
      for (var r of t) {
        var a = d(r);
        a != null && n.push(a);
      }
      if (n.length === 0) return null;
      if (n.length === 1 && n[0] === s.META_AI_OPEN) return e.META_AI;
      var i = n.every(function (e) {
        return e === s.MUSE;
      })
        ? e.MUSE
        : e.GENERIC;
      return o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? i
        : null;
    }
    function c(t, n) {
      return o("WAWebGroupAgentProfileRouting").isOpenGroupAiAgent(t, n)
        ? m(t)
          ? e.MUSE
          : e.GENERIC
        : null;
    }
    function d(e) {
      return e.isFbidBot()
        ? e.equals(o("WAWebBotUtils").META_BOT_FBID_WID)
          ? s.META_AI_OPEN
          : o("WAWebBotStaticProfiles").isStaticProfile(e)
            ? null
            : m(e)
              ? s.MUSE
              : s.OTHER
        : null;
    }
    function m(e) {
      var t = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return (t == null ? void 0 : t.lastFetchedTimeMs) == null
        ? !1
        : o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(
            e,
            o("WAWebBotProduct").botProductFromServerValue(t.product),
          ) && o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled();
    }
    ((l.GroupAgentSecurityVariant = e),
      (l.getGroupAgentSecurityVariant = u),
      (l.getPrivacyNoticeSecurityVariant = c));
  },
  98,
);
