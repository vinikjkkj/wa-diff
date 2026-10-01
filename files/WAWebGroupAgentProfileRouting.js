__d(
  "WAWebGroupAgentProfileRouting",
  [
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebHatchFrontendGating",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      BASIC_CARD: "basic_card",
      OWNER_CARD: "owner_card",
    });
    function s(t, n, r) {
      var a;
      if (
        (r === void 0 && (r = u(t)),
        !c(t, n) ||
          !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
      )
        return null;
      var i = d(r);
      return i != null && !p(t, i)
        ? null
        : _(t, i, (a = r) == null ? void 0 : a.creatorLid)
          ? e.OWNER_CARD
          : e.BASIC_CARD;
    }
    function u(e) {
      var t = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return t == null
        ? null
        : {
            creatorLid: t.creatorLid,
            isDeleted: t.isDeleted,
            isDeprecated: t.isDeprecated,
            lastFetchedTimeMs: t.lastFetchedTimeMs,
            product: t.product,
          };
    }
    function c(e, t) {
      return t == null
        ? !1
        : o("WAWebChatGetters").getIsGroup(t) &&
            e.isFbidBot() &&
            !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    function d(e) {
      return e == null || e.lastFetchedTimeMs == null
        ? null
        : o("WAWebBotProduct").botProductFromServerValue(e.product);
    }
    function m(e, t) {
      return (
        t === o("WAWebBotProduct").BotProduct.MUSE ||
        (t === o("WAWebBotProduct").BotProduct.HATCH &&
          !e.equals(o("WAWebBotUtils").HATCH_BOT_FBID_WID))
      );
    }
    function p(e, t) {
      return t === o("WAWebBotProduct").BotProduct.THIRD_PARTY || m(e, t);
    }
    function _(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return (
        m(e, t) &&
        n != null &&
        r != null &&
        n === r.user &&
        o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() &&
        o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
      );
    }
    ((l.GroupAgentProfileDestination = e),
      (l.getGroupAgentProfileDestination = s),
      (l.isMuseGroupAgentProfileProduct = m));
  },
  98,
);
