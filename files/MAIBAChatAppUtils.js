__d(
  "MAIBAChatAppUtils",
  [
    "fbt",
    "ALToolTab",
    "AdsAIUtils",
    "AdsPERouterHelper",
    "MAIBAChatAppStorageKey",
    "MAIBAChatConstants",
    "MAIBAEntrypointConstants",
    "MAIBAScreenSizeUtils",
    "URI",
    "WebStorage",
    "getMAIBAPageAdAccountID",
    "gkx",
    "isMAIBACreatorMarketplaceEntrypoint",
    "useIsMobileForBHC",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c;
    function d(e) {
      return e === "MBS"
        ? s._(/*BTDS*/ "Ask Meta AI business assistant for help")
        : e === "Ads Manager (Campaigns)"
          ? s._(
              /*BTDS*/ "Ask Meta AI business assistant for help with your ads",
            )
          : e === "Business Help Center"
            ? s._(/*BTDS*/ "Get support from Meta AI business assistant")
            : e === "Organization Manager"
              ? s._(/*BTDS*/ "Ask Meta AI business assistant for help")
              : s._(
                  /*BTDS*/ "Ask Meta AI business assistant for help with your ads",
                );
    }
    function m(e) {
      return e === "MBS"
        ? s._(
            /*BTDS*/ "You have early access to our AI assistant just for businesses and creators.",
          )
        : e === "Ads Manager (Campaigns)"
          ? s._(
              /*BTDS*/ "You've got early access to our AI assistant for advertisers.",
            )
          : e === "Business Help Center"
            ? s._(
                /*BTDS*/ "You have early access to our AI assistant to help with any advertising issues.",
              )
            : e === "Organization Manager"
              ? s._(
                  /*BTDS*/ "You have early access to our AI assistant for businesses.",
                )
              : s._(
                  /*BTDS*/ "You've got early access to our AI assistant for advertisers.",
                );
    }
    function p() {
      return r("gkx")("3722");
    }
    function _() {
      return o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
        "MAIBAOnAlrBSH",
      );
    }
    function f(e) {
      var t = (u || (u = r("WebStorage"))).getSessionStorage();
      u.setItemGuarded(
        t,
        o("MAIBAChatAppStorageKey").MAIBA_CHAT_APP_STATE_LOCAL_STORAGE_KEY,
        JSON.stringify({ pathname: window.location.pathname, state: e }),
      );
    }
    function g(e) {
      return (
        e.isMAIBAChatAppOpen && !e.isFullScreen && e.surfaceMode !== "workspace"
      );
    }
    function h(e) {
      return g(e)
        ? o("MAIBAScreenSizeUtils").getCurrentMAIBAResponsiveChatWidth()
        : e.chatWindowWidth;
    }
    function y(e, t, n) {
      if (e != null) return e;
      if (!(n === !0 && !r("isMAIBACreatorMarketplaceEntrypoint")(t))) return t;
    }
    function C() {
      var e = r("AdsPERouterHelper").getConfig().RouteBuilder;
      return e != null && typeof e == "function";
    }
    function b(e, t) {
      var n = S(e),
        a = new URL(window.location.href),
        i = new URLSearchParams(a.search),
        l = i.get("thread_key"),
        s = i.get("maiba_chat_autoopen") === "false",
        u = t;
      if (l != null) {
        var d = !(
          o("ALToolTab").getCurrentToolTab().tool === "Business Help Center" &&
          o("useIsMobileForBHC").isMobileForBHC()
        );
        ((u = {
          chatWindowWidth: o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
          entrypoint: t.entrypoint,
          isFullScreen: !1,
          isMAIBAChatAppOpen: d,
          selectedChatState: {
            linkedAdAccountId: r("getMAIBAPageAdAccountID")(),
            externalConversationId: l,
          },
          shouldAutoExpandThreadList: !0,
          surfaceMode: "none",
        }),
          i.delete("thread_key"));
        var m = new (c || (c = r("URI")))(a.pathname + "?" + i.toString());
        window.history.replaceState(null, null, m.toString());
      } else if (
        ((u = {
          chatWindowWidth:
            n === "unchanged"
              ? t.chatWindowWidth
              : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
          entrypoint: t.entrypoint,
          isFullScreen: n === "unchanged" ? t.isFullScreen : !1,
          isMAIBAChatAppOpen: s || n === "close" ? !1 : t.isMAIBAChatAppOpen,
          selectedChatState: v(t),
          shouldAutoExpandThreadList: t.shouldAutoExpandThreadList,
          surfaceMode: "none",
        }),
        s)
      ) {
        i.delete("maiba_chat_autoopen");
        var p = new (c || (c = r("URI")))(a.pathname + "?" + i.toString());
        window.history.replaceState(null, null, p.toString());
      }
      return (f(u), u);
    }
    var v = function (t) {
        var e,
          n,
          o = r("getMAIBAPageAdAccountID")(),
          a = (e = t.selectedChatState) == null ? void 0 : e.linkedAdAccountId,
          i = o != null && o !== a;
        if (i) {
          var l, s;
          return {
            showConsentDisclaimer:
              ((l = t.selectedChatState) == null
                ? void 0
                : l.externalConversationId) == null
                ? (s = t.selectedChatState) == null
                  ? void 0
                  : s.showConsentDisclaimer
                : void 0,
            linkedAdAccountId: o,
          };
        }
        return (n = t.selectedChatState) != null ? n : {};
      },
      S = function (t) {
        var e = window.location.pathname;
        return t === e ? "unchanged" : "default_size";
      };
    ((l.getMAIBANUXHeading = d),
      (l.getMAIBANUXModalDescription = m),
      (l.MAIBA_CHAT_APP_STATE_LOCAL_STORAGE_KEY = o(
        "MAIBAChatAppStorageKey",
      ).MAIBA_CHAT_APP_STATE_LOCAL_STORAGE_KEY),
      (l.getIsMAIBATableRowSelectionEnabled = p),
      (l.getIsMAIBAOnAlrBSHEnabled = _),
      (l.storeMAIBAChatAppStateToSessionStorage = f),
      (l.isMAIBANormalSidePanelState = g),
      (l.getMAIBAChatWindowWidthForState = h),
      (l.getMAIBAEntrypointForOpenAction = y),
      (l.DORA_ADMIN_TEXT = (e = o("MAIBAEntrypointConstants")).DORA_ADMIN_TEXT),
      (l.DORA_INPUT_TEXT = e.DORA_INPUT_TEXT),
      (l.DSL_ADMIN_TEXT = e.DSL_ADMIN_TEXT),
      (l.DSL_INPUT_TEXT = e.DSL_INPUT_TEXT),
      (l.canRenderMAIBACTAWithRouting = C),
      (l.processInitialStateForMAIBA = b));
  },
  226,
);
