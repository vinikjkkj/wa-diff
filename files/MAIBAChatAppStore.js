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
    var R = new Set();
    function L() {
      return R.size > 0;
    }
    function E() {
      var e = Symbol("MAIBAChatDockingHost");
      return (
        R.add(e),
        k(h),
        function () {
          R.delete(e) && k(h);
        }
      );
    }
    function k(e) {
      if (document.body) {
        var t =
            e.isMAIBAChatAppOpen &&
            !e.isFullScreen &&
            e.surfaceMode !== "workspace",
          n = t && L();
        (o("CSS").conditionClass(document.body, "has-maibachat-open", t && !n),
          n
            ? (o("CSS").removeClass(document.body, "has-maibachat"),
              document.documentElement.style.removeProperty(
                "--ads-maiba-chat-window-width",
              ))
            : document.documentElement.style.setProperty(
                "--ads-maiba-chat-window-width",
                e.chatWindowWidth + "px",
              ));
      }
    }
    function I(e, t) {
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
        D,
        x,
        $,
        P = e.chatWindowWidth,
        N = e.entrypoint,
        M = e.igBoostLoggingSource;
      if ("igBoostLoggingSource" in t) {
        var w;
        M = (w = t.igBoostLoggingSource) != null ? w : null;
      } else
        (((n = t.chatAction) == null ? void 0 : n.actionType) === "open" ||
          ((a = t.windowAction) == null ? void 0 : a.actionType) === "open" ||
          ((i = t.windowAction) == null ? void 0 : i.actionType) ===
            "toggle") &&
          (M = null);
      var A = e.isMAIBAChatAppOpen,
        F = e.selectedChatState,
        O = e.isFullScreen,
        B = e.surfaceMode,
        W = e.shouldAutoExpandThreadList;
      switch ((l = t.windowAction) == null ? void 0 : l.actionType) {
        case "open":
          ((A = !0),
            (O =
              (s = (u = t.windowAction) == null ? void 0 : u.isFullScreen) !=
              null
                ? s
                : O),
            (B =
              (c = (d = t.windowAction) == null ? void 0 : d.surfaceMode) !=
              null
                ? c
                : B),
            (W =
              (m =
                (p = t.windowAction) == null
                  ? void 0
                  : p.shouldAutoExpandThreadList) != null
                ? m
                : W));
          break;
        case "close":
          ((A = !1), (B = "none"));
          break;
        case "toggle":
          e.isMAIBAChatAppOpen &&
          (((_ = e.selectedChatState) == null
            ? void 0
            : _.externalConversationId) == null ||
            ((f = e.selectedChatState) == null
              ? void 0
              : f.externalConversationId) === "")
            ? ((A = !1), (B = "none"))
            : ((A = !0), (F = {}));
          break;
        case "resize":
          ((P =
            (g = (h = t.windowAction) == null ? void 0 : h.chatWindowWidth) !=
            null
              ? g
              : P),
            (O =
              (y = (C = t.windowAction) == null ? void 0 : C.isFullScreen) !=
              null
                ? y
                : O),
            (B =
              (b = (v = t.windowAction) == null ? void 0 : v.surfaceMode) !=
              null
                ? b
                : B),
            (W =
              (S =
                (R = t.windowAction) == null
                  ? void 0
                  : R.shouldAutoExpandThreadList) != null
                ? S
                : W));
          break;
        default:
          break;
      }
      (B === "canvas" && !O && (B = "none"),
        B === "workspace" && O && (B = "none"));
      var q =
        (L = (E = t.chatAction) == null ? void 0 : E.selectedChatState) != null
          ? L
          : {};
      switch ((k = t.chatAction) == null ? void 0 : k.actionType) {
        case "open":
          ((N = o("MAIBAChatAppUtils").getMAIBAEntrypointForOpenAction(
            (I = t.chatAction) == null ? void 0 : I.entrypoint,
            e.entrypoint,
            q.isExplicitNewThread,
          )),
            (F = {
              entrypointOverride: q.entrypointOverride,
              externalConversationId: q.externalConversationId,
              initialSelectedAssets: q.initialSelectedAssets,
              isExplicitNewThread: q.isExplicitNewThread,
              linkedAdAccountId:
                (T = q.linkedAdAccountId) != null
                  ? T
                  : q.externalConversationId == null
                    ? (D =
                        (x = e.selectedChatState) == null
                          ? void 0
                          : x.linkedAdAccountId) != null
                      ? D
                      : r("getMAIBAPageAdAccountID")()
                    : null,
              pendingExternalConversationId: q.pendingExternalConversationId,
              pendingUserInput: q.pendingUserInput,
              pfrAdObjectIDs: q.pfrAdObjectIDs,
              pfrAdObjectTree: q.pfrAdObjectTree,
              showConsentDisclaimer: q.showConsentDisclaimer,
              showMAIBAChatDisclosure: q.showMAIBAChatDisclosure,
            }),
            q.externalConversationId !==
              (($ = e.selectedChatState) == null
                ? void 0
                : $.externalConversationId) &&
              B === "canvas" &&
              (B = "none"));
          break;
        default:
          break;
      }
      var U = {
          chatWindowWidth: A
            ? P
            : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
          entrypoint: N,
          igBoostLoggingSource: A ? M : null,
          isFullScreen: O,
          isMAIBAChatAppOpen: A,
          selectedChatState: F,
          shouldAutoExpandThreadList: W,
          surfaceMode: A ? B : "none",
        },
        V = babelHelpers.extends({}, U, {
          chatWindowWidth:
            o("MAIBAChatAppUtils").getMAIBAChatWindowWidthForState(U),
        });
      return r("deepEquals")(e, V)
        ? e
        : (o("MAIBAChatAppUtils").storeMAIBAChatAppStateToSessionStorage(V), V);
    }
    function T(e) {
      var t = h;
      ((h = I(h, e)), h !== t && (k(h), b()));
    }
    function D(e) {
      return (
        C.add(e),
        function () {
          C.delete(e);
        }
      );
    }
    function x() {
      return c(D, v, v);
    }
    ((l.getState = v),
      (l.shouldUseLaminarForMAIBA = S),
      (l.isMAIBAChatDockedByHost = L),
      (l.registerMAIBAChatDockingHost = E),
      (l.dispatch = T),
      (l.subscribe = D),
      (l.useMAIBAChatAppState = x));
  },
  98,
);
