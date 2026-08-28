__d(
  "MAIBAChatAppReducerPlugin",
  [
    "CSS",
    "MAIBAChatAppStore",
    "MAIBAChatAppUtils",
    "MAIBAChatConstants",
    "getMAIBAPageAdAccountID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
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
            P,
            N,
            M,
            w,
            A,
            F,
            O = t.chatWindowWidth,
            B = t.entrypoint,
            W = t.isMAIBAChatAppOpen,
            q = t.selectedChatState,
            U = t.isFullScreen,
            V = t.surfaceMode,
            H = t.shouldAutoExpandThreadList;
          switch ((e = n.windowAction) == null ? void 0 : e.actionType) {
            case "open":
              ((W = !0),
                (U =
                  (a =
                    (i = n.windowAction) == null ? void 0 : i.isFullScreen) !=
                  null
                    ? a
                    : U),
                (V =
                  (l = (s = n.windowAction) == null ? void 0 : s.surfaceMode) !=
                  null
                    ? l
                    : V),
                (H =
                  (u =
                    (c = n.windowAction) == null
                      ? void 0
                      : c.shouldAutoExpandThreadList) != null
                    ? u
                    : H));
              break;
            case "close":
              ((W = !1), (V = "none"));
              break;
            case "toggle":
              t.isMAIBAChatAppOpen &&
              (((d = t.selectedChatState) == null
                ? void 0
                : d.externalConversationId) == null ||
                t.selectedChatState.externalConversationId === "")
                ? ((W = !1), (V = "none"))
                : ((W = !0), (q = {}));
              break;
            case "resize":
              ((O =
                (m =
                  (p = n.windowAction) == null ? void 0 : p.chatWindowWidth) !=
                null
                  ? m
                  : O),
                (U =
                  (_ =
                    (f = n.windowAction) == null ? void 0 : f.isFullScreen) !=
                  null
                    ? _
                    : U),
                (V =
                  (g = (h = n.windowAction) == null ? void 0 : h.surfaceMode) !=
                  null
                    ? g
                    : V),
                (H =
                  (y =
                    (C = n.windowAction) == null
                      ? void 0
                      : C.shouldAutoExpandThreadList) != null
                    ? y
                    : H));
              break;
            case "noopUpdate":
              ((W =
                (b =
                  (v = n.windowAction) == null
                    ? void 0
                    : v.isMAIBAChatAppOpen) != null
                  ? b
                  : W),
                (O =
                  (S =
                    (R = n.windowAction) == null
                      ? void 0
                      : R.chatWindowWidth) != null
                    ? S
                    : O),
                (U =
                  (L =
                    (E = n.windowAction) == null ? void 0 : E.isFullScreen) !=
                  null
                    ? L
                    : U),
                (V =
                  (k = (I = n.windowAction) == null ? void 0 : I.surfaceMode) !=
                  null
                    ? k
                    : V),
                (H =
                  (T =
                    (D = n.windowAction) == null
                      ? void 0
                      : D.shouldAutoExpandThreadList) != null
                    ? T
                    : H));
              break;
            default:
              break;
          }
          var G =
            (x = ($ = n.chatAction) == null ? void 0 : $.selectedChatState) !=
            null
              ? x
              : {};
          switch ((P = n.chatAction) == null ? void 0 : P.actionType) {
            case "open":
              ((B = o("MAIBAChatAppUtils").getMAIBAEntrypointForOpenAction(
                (N = n.chatAction) == null ? void 0 : N.entrypoint,
                t.entrypoint,
                G.isExplicitNewThread,
              )),
                (q = {
                  entrypointOverride: G.entrypointOverride,
                  externalConversationId: G.externalConversationId,
                  initialSelectedAssets: G.initialSelectedAssets,
                  isExplicitNewThread: G.isExplicitNewThread,
                  linkedAdAccountId:
                    (M = G.linkedAdAccountId) != null
                      ? M
                      : G.externalConversationId == null
                        ? (w =
                            (A = t.selectedChatState) == null
                              ? void 0
                              : A.linkedAdAccountId) != null
                          ? w
                          : r("getMAIBAPageAdAccountID")()
                        : null,
                  pendingExternalConversationId:
                    G.pendingExternalConversationId,
                  pendingUserInput: G.pendingUserInput,
                  pfrAdObjectIDs: G.pfrAdObjectIDs,
                  pfrAdObjectTree: G.pfrAdObjectTree,
                  showConsentDisclaimer: G.showConsentDisclaimer,
                  showMAIBAChatDisclosure: G.showMAIBAChatDisclosure,
                }),
                G.externalConversationId !==
                  ((F = t.selectedChatState) == null
                    ? void 0
                    : F.externalConversationId) &&
                  V === "canvas" &&
                  (V = "none"));
              break;
            default:
              break;
          }
          (V === "canvas" && !U && (V = "none"),
            V === "workspace" && U && (V = "none"));
          var z = {
              chatWindowWidth: W
                ? O
                : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
              entrypoint: B,
              isFullScreen: U,
              isMAIBAChatAppOpen: W,
              selectedChatState: q,
              shouldAutoExpandThreadList: H,
              surfaceMode: W ? V : "none",
              noopUpdated: !0,
            },
            j = o("MAIBAChatAppUtils").getMAIBAChatWindowWidthForState(z);
          if (
            document.body &&
            o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
          ) {
            var K;
            (o("CSS").conditionClass(
              document.body,
              "has-maibachat",
              o("MAIBAChatAppUtils").isMAIBANormalSidePanelState(z),
            ),
              ((K = n.windowAction) == null ? void 0 : K.actionType) ===
                "resize" &&
                document.documentElement.style.setProperty(
                  "--ads-maiba-chat-window-width",
                  j + "px",
                ));
          }
          var Q = babelHelpers.extends({}, z, { chatWindowWidth: j });
          return (
            o("MAIBAChatAppStore").shouldUseLaminarForMAIBA() &&
              o("MAIBAChatAppUtils").storeMAIBAChatAppStateToSessionStorage(Q),
            Q
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
