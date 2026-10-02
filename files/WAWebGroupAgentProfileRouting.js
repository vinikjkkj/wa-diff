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
      }),
      s = n("$InternalEnum")({ HATCH_CHAT: "hatch_chat", NONE: "none" });
    function u(t, n, r) {
      var a;
      if ((r === void 0 && (r = f(t)), !g(t, n))) return null;
      var i = h(r);
      return (i != null && !C(t, i)) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? null
        : b(t, i, (a = r) == null ? void 0 : a.creatorLid)
          ? e.OWNER_CARD
          : e.BASIC_CARD;
    }
    function c(e, t) {
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      if (
        (n == null ? void 0 : n.lastFetchedTimeMs) == null ||
        n.isDeleted === !0 ||
        n.isDeprecated === !0 ||
        !g(e, t)
      )
        return !1;
      var r = o("WAWebBotProduct").botProductFromServerValue(n.product);
      return r != null &&
        r !== o("WAWebBotProduct").BotProduct.THIRD_PARTY &&
        !C(e, r)
        ? !1
        : o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function d(e, t, n) {
      return m(u(e, t), n);
    }
    function m(t, n) {
      return t == null ? null : { info: t === e.OWNER_CARD, remove: n };
    }
    function p(e) {
      return e.info || e.remove;
    }
    function _(t, n) {
      return (function (t) {
        if (t === e.OWNER_CARD) return s.HATCH_CHAT;
        if (t === e.BASIC_CARD) return s.NONE;
        if (t == null) return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(u(t, n));
    }
    function f(e) {
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
    function g(e, t) {
      return t == null
        ? !1
        : o("WAWebChatGetters").getIsGroup(t) &&
            e.isFbidBot() &&
            !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    function h(e) {
      return e == null || e.lastFetchedTimeMs == null
        ? null
        : o("WAWebBotProduct").botProductFromServerValue(e.product);
    }
    function y(e, t) {
      return (
        t === o("WAWebBotProduct").BotProduct.MUSE ||
        (t === o("WAWebBotProduct").BotProduct.HATCH &&
          !e.equals(o("WAWebBotUtils").HATCH_BOT_FBID_WID))
      );
    }
    function C(e, t) {
      return y(e, t);
    }
    function b(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return (
        y(e, t) &&
        n != null &&
        r != null &&
        n === r.user &&
        o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() &&
        o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
      );
    }
    ((l.GroupAgentProfileDestination = e),
      (l.GroupAgentOneToOneTarget = s),
      (l.getGroupAgentProfileDestination = u),
      (l.isOpenGroupAiAgent = c),
      (l.getGroupAgentParticipantActions = d),
      (l.getGroupAgentParticipantActionsForDestination = m),
      (l.hasGroupAgentParticipantAction = p),
      (l.getGroupAgentOneToOneTarget = _),
      (l.isMuseGroupAgentProfileProduct = y));
  },
  98,
);
