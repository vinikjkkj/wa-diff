__d(
  "MAIBAChatAppStore",
  [
    "ALToolTab",
    "AdsAIUtils",
    "CSS",
    "FBLogger",
    "MAIBAChatAppUtils",
    "MAIBAChatConstants",
    "ReactDOM",
    "WebStorage",
    "deepEquals",
    "getMAIBAPageAdAccountID",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useSyncExternalStore,
      d = {
        chatWindowWidth: o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
        isFullScreen: !1,
        isMAIBAChatAppOpen: !1,
        selectedChatState: {
          externalConversationId: void 0,
          linkedAdAccountId: void 0,
          showConsentDisclaimer: void 0,
        },
        shouldAutoExpandThreadList: !0,
        surfaceMode: "none",
      },
      m =
        (e = (s || (s = r("WebStorage"))).getSessionStorageForRead()) == null
          ? void 0
          : e.getItem(
              o("MAIBAChatAppUtils").MAIBA_CHAT_APP_STATE_LOCAL_STORAGE_KEY,
            ),
      p = null;
    if (m != null)
      try {
        p = JSON.parse(m);
      } catch (e) {
        r("FBLogger")("MAIBA").warn(
          "Failed to parse session storage data: %s",
          e instanceof Error ? e.message : String(e),
        );
      }
    var _ = p != null ? p : {},
      f = _.pathname,
      g = _.state,
      h = o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
        "MAIBAChatAppStore",
      )
        ? o("MAIBAChatAppUtils").processInitialStateForMAIBA(
            f != null ? f : "",
            babelHelpers.extends({}, d, g),
          )
        : d;
    if (
      ((h = babelHelpers.extends({}, h, {
        chatWindowWidth:
          o("MAIBAChatAppUtils").getMAIBAChatWindowWidthForState(h),
      })),
      h.isMAIBAChatAppOpen && document.body != null)
    ) {
      var y = !h.isFullScreen && h.surfaceMode !== "workspace";
      (S()
        ? o("CSS").conditionClass(document.body, "has-maibachat", y)
        : o("CSS").conditionClass(document.body, "has-maibachat-open", y),
        document.documentElement.style.setProperty(
          "--ads-maiba-chat-window-width",
          h.chatWindowWidth + "px",
        ));
    }
    var C = new Set();
    function b() {
      o("ReactDOM").flushSync(function () {
        C.forEach(function (e) {
          return e();
        });
      });
    }
    function v() {
      return h;
    }
    function S() {
      var e = o("ALToolTab").getCurrentToolTab(),
        t = e.tool,
        n = t === "Instagram" || t === "MBS";
      return n ? !1 : !r("gkx")("20085");
    }
    function R(e) {
      if (document.body) {
        var t =
          e.isMAIBAChatAppOpen &&
          !e.isFullScreen &&
          e.surfaceMode !== "workspace";
        (o("CSS").conditionClass(document.body, "has-maibachat-open", t),
          document.documentElement.style.setProperty(
            "--ads-maiba-chat-window-width",
            e.chatWindowWidth + "px",
          ));
      }
    }
    function L(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D = e.chatWindowWidth,
        x = e.entrypoint,
        $ = e.isMAIBAChatAppOpen,
        P = e.selectedChatState,
        N = e.isFullScreen,
        M = e.surfaceMode,
        w = e.shouldAutoExpandThreadList;
      switch ((n = t.windowAction) == null ? void 0 : n.actionType) {
        case "open":
          (($ = !0),
            (N =
              (a = (i = t.windowAction) == null ? void 0 : i.isFullScreen) !=
              null
                ? a
                : N),
            (M =
              (l = (s = t.windowAction) == null ? void 0 : s.surfaceMode) !=
              null
                ? l
                : M),
            (w =
              (u =
                (c = t.windowAction) == null
                  ? void 0
                  : c.shouldAutoExpandThreadList) != null
                ? u
                : w));
          break;
        case "close":
          (($ = !1), (M = "none"));
          break;
        case "toggle":
          e.isMAIBAChatAppOpen &&
          (((d = e.selectedChatState) == null
            ? void 0
            : d.externalConversationId) == null ||
            ((m = e.selectedChatState) == null
              ? void 0
              : m.externalConversationId) === "")
            ? (($ = !1), (M = "none"))
            : (($ = !0), (P = {}));
          break;
        case "resize":
          ((D =
            (p = (_ = t.windowAction) == null ? void 0 : _.chatWindowWidth) !=
            null
              ? p
              : D),
            (N =
              (f = (g = t.windowAction) == null ? void 0 : g.isFullScreen) !=
              null
                ? f
                : N),
            (M =
              (h = (y = t.windowAction) == null ? void 0 : y.surfaceMode) !=
              null
                ? h
                : M),
            (w =
              (C =
                (b = t.windowAction) == null
                  ? void 0
                  : b.shouldAutoExpandThreadList) != null
                ? C
                : w));
          break;
        default:
          break;
      }
      (M === "canvas" && !N && (M = "none"),
        M === "workspace" && N && (M = "none"));
      var A =
        (v = (S = t.chatAction) == null ? void 0 : S.selectedChatState) != null
          ? v
          : {};
      switch ((R = t.chatAction) == null ? void 0 : R.actionType) {
        case "open":
          ((x = o("MAIBAChatAppUtils").getMAIBAEntrypointForOpenAction(
            (L = t.chatAction) == null ? void 0 : L.entrypoint,
            e.entrypoint,
            A.isExplicitNewThread,
          )),
            (P = {
              entrypointOverride: A.entrypointOverride,
              externalConversationId: A.externalConversationId,
              initialSelectedAssets: A.initialSelectedAssets,
              isExplicitNewThread: A.isExplicitNewThread,
              linkedAdAccountId:
                (E = A.linkedAdAccountId) != null
                  ? E
                  : A.externalConversationId == null
                    ? (k =
                        (I = e.selectedChatState) == null
                          ? void 0
                          : I.linkedAdAccountId) != null
                      ? k
                      : r("getMAIBAPageAdAccountID")()
                    : null,
              pendingExternalConversationId: A.pendingExternalConversationId,
              pendingUserInput: A.pendingUserInput,
              pfrAdObjectIDs: A.pfrAdObjectIDs,
              pfrAdObjectTree: A.pfrAdObjectTree,
              showConsentDisclaimer: A.showConsentDisclaimer,
              showMAIBAChatDisclosure: A.showMAIBAChatDisclosure,
            }),
            A.externalConversationId !==
              ((T = e.selectedChatState) == null
                ? void 0
                : T.externalConversationId) &&
              M === "canvas" &&
              (M = "none"));
          break;
        default:
          break;
      }
      var F = {
          chatWindowWidth: $
            ? D
            : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
          entrypoint: x,
          isFullScreen: N,
          isMAIBAChatAppOpen: $,
          selectedChatState: P,
          shouldAutoExpandThreadList: w,
          surfaceMode: $ ? M : "none",
        },
        O = babelHelpers.extends({}, F, {
          chatWindowWidth:
            o("MAIBAChatAppUtils").getMAIBAChatWindowWidthForState(F),
        });
      return r("deepEquals")(e, O)
        ? e
        : (o("MAIBAChatAppUtils").storeMAIBAChatAppStateToSessionStorage(O), O);
    }
    function E(e) {
      var t = h;
      ((h = L(h, e)), h !== t && (R(h), b()));
    }
    function k(e) {
      return (
        C.add(e),
        function () {
          C.delete(e);
        }
      );
    }
    function I() {
      return c(k, v, v);
    }
    ((l.getState = v),
      (l.shouldUseLaminarForMAIBA = S),
      (l.dispatch = E),
      (l.subscribe = k),
      (l.useMAIBAChatAppState = I));
  },
  98,
);
