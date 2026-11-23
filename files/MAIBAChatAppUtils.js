__d(
  "MAIBAChatAppUtils",
  [
    "fbt",
    "ALToolTab",
    "AdsAIUtils",
    "AdsPERouterHelper",
    "ExecutionEnvironment",
    "MAIBABoostCanvasDraftRegistry",
    "MAIBAChatAppAutoOpenUtils",
    "MAIBAChatAppStorageKey",
    "MAIBAChatConstants",
    "MAIBAEntrypointConstants",
    "MAIBAScreenSizeUtils",
    "URI",
    "WebStorage",
    "getMAIBAPageAdAccountID",
    "isMAIBACreatorMarketplaceEntrypoint",
    "useIsMobileForBHC",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d;
    function m(e) {
      return e === "MBS"
        ? s._(/*BTDS*/ "")
        : e === "Ads Manager (Campaigns)"
          ? s._(/*BTDS*/ "")
          : e === "Business Help Center"
            ? s._(/*BTDS*/ "")
            : e === "Organization Manager"
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
    }
    function p(e) {
      return e === "MBS"
        ? s._(/*BTDS*/ "")
        : e === "Ads Manager (Campaigns)"
          ? s._(/*BTDS*/ "")
          : e === "Business Help Center"
            ? s._(/*BTDS*/ "")
            : e === "Organization Manager"
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
    }
    function _() {
      return o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
        "MAIBAOnAlrBSH",
      );
    }
    function f(e) {
      if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        var t = (c || (c = r("WebStorage"))).getSessionStorage();
        c.setItemGuarded(
          t,
          o("MAIBAChatAppStorageKey").MAIBA_CHAT_APP_STATE_LOCAL_STORAGE_KEY,
          JSON.stringify({ pathname: window.location.pathname, state: e }),
        );
      }
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
      return e != null
        ? e
        : n === !0 && !r("isMAIBACreatorMarketplaceEntrypoint")(t)
          ? o("ALToolTab").getCurrentToolTab().tool === "Organization Manager"
            ? "MAIBA_FAB"
            : "ASK_META_AI"
          : t;
    }
    function C() {
      var e = r("AdsPERouterHelper").getConfig().RouteBuilder;
      return e != null && typeof e == "function";
    }
    function b(e, t) {
      return t !== "MAIBA_FAB_IG_LWI" && t !== "MAIBA_IG_LWI_SESSION_RESTORE"
        ? null
        : e === "/ad_tools/"
          ? "ad_tools"
          : /^\/b\/(?:[^/]+\/)?$/.test(e)
            ? "boost_creation_page"
            : null;
    }
    function v(e, t) {
      var n,
        a = L(e),
        i = null,
        l = !1;
      if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        var s = new URLSearchParams(new URL(window.location.href).search);
        ((i = s.get("thread_key")),
          (l = s.get("maiba_chat_autoopen") === "false"));
      }
      var c = babelHelpers.extends({}, t);
      if (i != null) {
        var d = !(
          o("ALToolTab").getCurrentToolTab().tool === "Business Help Center" &&
          o("useIsMobileForBHC").isMobileForBHC()
        );
        ((c = {
          chatWindowWidth: o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
          entrypoint: t.entrypoint,
          isFullScreen: !1,
          isMAIBAChatAppOpen: d,
          selectedChatState: {
            linkedAdAccountId: r("getMAIBAPageAdAccountID")(),
            externalConversationId: i,
          },
          shouldAutoExpandThreadList: !0,
          surfaceMode: "none",
        }),
          S("thread_key"));
      } else
        ((c = {
          chatWindowWidth:
            a === "unchanged"
              ? t.chatWindowWidth
              : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
          entrypoint: t.entrypoint,
          isFullScreen: a === "unchanged" ? t.isFullScreen : !1,
          isMAIBAChatAppOpen: l || a === "close" ? !1 : t.isMAIBAChatAppOpen,
          selectedChatState: R(t),
          shouldAutoExpandThreadList: t.shouldAutoExpandThreadList,
          surfaceMode: "none",
        }),
          l && S("maiba_chat_autoopen"),
          (c = o(
            "MAIBAChatAppAutoOpenUtils",
          ).applyMAIBAChatAppAutoOpenURLOverride(c)));
      return (
        (c = babelHelpers.extends({}, c, {
          igBoostLoggingSource:
            i == null &&
            o("ALToolTab").getCurrentToolTab().tool === "Instagram" &&
            t.isMAIBAChatAppOpen &&
            c.isMAIBAChatAppOpen &&
            c.entrypoint === t.entrypoint
              ? (n = t.igBoostLoggingSource) != null
                ? n
                : a === "unchanged"
                  ? b(e, t.entrypoint)
                  : null
              : null,
        })),
        f(c),
        c
      );
    }
    function S(e) {
      if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        var t = new URL(window.location.href),
          n = new URLSearchParams(t.search);
        n.delete(e);
        var o = new (d || (d = r("URI")))(t.pathname + "?" + n.toString());
        window.history.replaceState(null, null, o.toString());
      }
    }
    var R = function (t) {
        var e,
          n,
          a,
          i = r("getMAIBAPageAdAccountID")(),
          l = (e = t.selectedChatState) == null ? void 0 : e.linkedAdAccountId,
          s = i != null && i !== l;
        if (s) {
          var c, d;
          return {
            showConsentDisclaimer:
              ((c = t.selectedChatState) == null
                ? void 0
                : c.externalConversationId) == null
                ? (d = t.selectedChatState) == null
                  ? void 0
                  : d.showConsentDisclaimer
                : void 0,
            linkedAdAccountId: i,
          };
        }
        return (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
          o("ALToolTab").getCurrentToolTab().tool === "Instagram" &&
          window.location.pathname === "/ad_tools/" &&
          o(
            "MAIBABoostCanvasDraftRegistry",
          ).hasMAIBABoostCanvasDraftForConversation(
            (n = t.selectedChatState) == null
              ? void 0
              : n.externalConversationId,
          )
          ? { linkedAdAccountId: l }
          : (a = t.selectedChatState) != null
            ? a
            : {};
      },
      L = function (t) {
        if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
          var e = window.location.pathname;
          return t === e ? "unchanged" : "default_size";
        }
        return "unchanged";
      };
    ((l.getMAIBANUXHeading = m),
      (l.getMAIBANUXModalDescription = p),
      (l.MAIBA_CHAT_APP_STATE_LOCAL_STORAGE_KEY = o(
        "MAIBAChatAppStorageKey",
      ).MAIBA_CHAT_APP_STATE_LOCAL_STORAGE_KEY),
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
      (l.processInitialStateForMAIBA = v));
  },
  226,
);
