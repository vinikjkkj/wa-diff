__d(
  "MAIBAChatAppReducerPlugin",
  [
    "CSS",
    "ExecutionEnvironment",
    "MAIBAChatAppStore",
    "MAIBAChatAppUtils",
    "MAIBAChatConstants",
    "getMAIBAPageAdAccountID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, a) {
          var t,
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
            O,
            B = n.chatWindowWidth,
            W = n.entrypoint,
            q = n.isMAIBAChatAppOpen,
            U = n.selectedChatState,
            V = n.isFullScreen,
            H = n.surfaceMode,
            G = n.shouldAutoExpandThreadList;
          switch ((t = a.windowAction) == null ? void 0 : t.actionType) {
            case "open":
              ((q = !0),
                (V =
                  (i =
                    (l = a.windowAction) == null ? void 0 : l.isFullScreen) !=
                  null
                    ? i
                    : V),
                (H =
                  (s = (u = a.windowAction) == null ? void 0 : u.surfaceMode) !=
                  null
                    ? s
                    : H),
                (G =
                  (c =
                    (d = a.windowAction) == null
                      ? void 0
                      : d.shouldAutoExpandThreadList) != null
                    ? c
                    : G));
              break;
            case "close":
              ((q = !1), (H = "none"));
              break;
            case "toggle":
              n.isMAIBAChatAppOpen &&
              (((m = n.selectedChatState) == null
                ? void 0
                : m.externalConversationId) == null ||
                n.selectedChatState.externalConversationId === "")
                ? ((q = !1), (H = "none"))
                : ((q = !0), (U = {}));
              break;
            case "resize":
              ((B =
                (p =
                  (_ = a.windowAction) == null ? void 0 : _.chatWindowWidth) !=
                null
                  ? p
                  : B),
                (V =
                  (f =
                    (g = a.windowAction) == null ? void 0 : g.isFullScreen) !=
                  null
                    ? f
                    : V),
                (H =
                  (h = (y = a.windowAction) == null ? void 0 : y.surfaceMode) !=
                  null
                    ? h
                    : H),
                (G =
                  (C =
                    (b = a.windowAction) == null
                      ? void 0
                      : b.shouldAutoExpandThreadList) != null
                    ? C
                    : G));
              break;
            case "noopUpdate":
              ((q =
                (v =
                  (S = a.windowAction) == null
                    ? void 0
                    : S.isMAIBAChatAppOpen) != null
                  ? v
                  : q),
                (B =
                  (R =
                    (L = a.windowAction) == null
                      ? void 0
                      : L.chatWindowWidth) != null
                    ? R
                    : B),
                (V =
                  (E =
                    (k = a.windowAction) == null ? void 0 : k.isFullScreen) !=
                  null
                    ? E
                    : V),
                (H =
                  (I = (T = a.windowAction) == null ? void 0 : T.surfaceMode) !=
                  null
                    ? I
                    : H),
                (G =
                  (D =
                    (x = a.windowAction) == null
                      ? void 0
                      : x.shouldAutoExpandThreadList) != null
                    ? D
                    : G));
              break;
            default:
              break;
          }
          var z =
            ($ = (P = a.chatAction) == null ? void 0 : P.selectedChatState) !=
            null
              ? $
              : {};
          switch ((N = a.chatAction) == null ? void 0 : N.actionType) {
            case "open":
              ((W = o("MAIBAChatAppUtils").getMAIBAEntrypointForOpenAction(
                (M = a.chatAction) == null ? void 0 : M.entrypoint,
                n.entrypoint,
                z.isExplicitNewThread,
              )),
                (U = {
                  entrypointOverride: z.entrypointOverride,
                  externalConversationId: z.externalConversationId,
                  initialSelectedAssets: z.initialSelectedAssets,
                  isExplicitNewThread: z.isExplicitNewThread,
                  linkedAdAccountId:
                    (w = z.linkedAdAccountId) != null
                      ? w
                      : z.externalConversationId == null
                        ? (A =
                            (F = n.selectedChatState) == null
                              ? void 0
                              : F.linkedAdAccountId) != null
                          ? A
                          : r("getMAIBAPageAdAccountID")()
                        : null,
                  pendingExternalConversationId:
                    z.pendingExternalConversationId,
                  pendingUserInput: z.pendingUserInput,
                  pfrAdObjectIDs: z.pfrAdObjectIDs,
                  pfrAdObjectTree: z.pfrAdObjectTree,
                  showConsentDisclaimer: z.showConsentDisclaimer,
                  showMAIBAChatDisclosure: z.showMAIBAChatDisclosure,
                }),
                z.externalConversationId !==
                  ((O = n.selectedChatState) == null
                    ? void 0
                    : O.externalConversationId) &&
                  H === "canvas" &&
                  (H = "none"));
              break;
            default:
              break;
          }
          (H === "canvas" && !V && (H = "none"),
            H === "workspace" && V && (H = "none"));
          var j = {
              chatWindowWidth: q
                ? B
                : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
              entrypoint: W,
              isFullScreen: V,
              isMAIBAChatAppOpen: q,
              selectedChatState: U,
              shouldAutoExpandThreadList: G,
              surfaceMode: q ? H : "none",
              noopUpdated: !0,
            },
            K = o("MAIBAChatAppUtils").getMAIBAChatWindowWidthForState(j);
          if (
            (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            document.body &&
            o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
          ) {
            var Q;
            (o("CSS").conditionClass(
              document.body,
              "has-maibachat",
              o("MAIBAChatAppUtils").isMAIBANormalSidePanelState(j) &&
                !o("MAIBAChatAppStore").isMAIBAChatDockedByHost(),
            ),
              ((Q = a.windowAction) == null ? void 0 : Q.actionType) ===
                "resize" &&
                !o("MAIBAChatAppStore").isMAIBAChatDockedByHost() &&
                document.documentElement.style.setProperty(
                  "--ads-maiba-chat-window-width",
                  K + "px",
                ));
          }
          var X = babelHelpers.extends({}, j, { chatWindowWidth: K });
          return (
            o("MAIBAChatAppStore").shouldUseLaminarForMAIBA() &&
              o("MAIBAChatAppUtils").storeMAIBAChatAppStateToSessionStorage(X),
            X
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
