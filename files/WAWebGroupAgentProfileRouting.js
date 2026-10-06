__d(
  "WAWebGroupAgentProfileRouting",
  [
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
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
      if ((r === void 0 && (r = g(t)), !h(t, n))) return null;
      var i = y(r);
      return (i != null && !b(t, i)) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? null
        : v(t, i, (a = r) == null ? void 0 : a.creatorLid)
          ? e.OWNER_CARD
          : e.BASIC_CARD;
    }
    function c(e, t) {
      if (!h(e, t)) return !1;
      var n = g(e);
      return S(e, y(n), n == null ? void 0 : n.creatorLid);
    }
    function d(e, t) {
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      if (
        (n == null ? void 0 : n.lastFetchedTimeMs) == null ||
        n.isDeleted === !0 ||
        n.isDeprecated === !0 ||
        !h(e, t)
      )
        return !1;
      var r = o("WAWebBotProduct").botProductFromServerValue(n.product);
      return r != null &&
        r !== o("WAWebBotProduct").BotProduct.THIRD_PARTY &&
        !b(e, r)
        ? !1
        : o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function m(e, t, n) {
      return p(u(e, t), n);
    }
    function p(t, n) {
      return t == null ? null : { info: t === e.OWNER_CARD, remove: n };
    }
    function _(e) {
      return e.info || e.remove;
    }
    function f(t, n) {
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
    function g(e) {
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
    function h(e, t) {
      return t == null
        ? !1
        : o("WAWebChatGetters").getIsGroup(t) &&
            e.isFbidBot() &&
            !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    function y(e) {
      return e == null || e.lastFetchedTimeMs == null
        ? null
        : o("WAWebBotProduct").botProductFromServerValue(e.product);
    }
    function C(e, t) {
      return o("WAWebBotProduct").isMuseAgentProduct(e, t);
    }
    function b(e, t) {
      return C(e, t);
    }
    function v(e, t, n) {
      return (
        S(e, t, n) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
      );
    }
    function S(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return (
        C(e, t) &&
        n != null &&
        r != null &&
        n === r.user &&
        o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()
      );
    }
    ((l.GroupAgentProfileDestination = e),
      (l.GroupAgentOneToOneTarget = s),
      (l.getGroupAgentProfileDestination = u),
      (l.isViewerOwnMuseGroupAgent = c),
      (l.isOpenGroupAiAgent = d),
      (l.getGroupAgentParticipantActions = m),
      (l.getGroupAgentParticipantActionsForDestination = p),
      (l.hasGroupAgentParticipantAction = _),
      (l.getGroupAgentOneToOneTarget = f),
      (l.isMuseGroupAgentProfileProduct = C));
  },
  98,
);
