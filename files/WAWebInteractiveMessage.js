__d(
  "WAWebInteractiveMessage",
  [
    "WAWebA2uiInteractiveBubble.react",
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActions",
    "WAWebGetInteractiveFooterText",
    "WAWebInteractiveActionMenuDialogLoadable.react",
    "WAWebInteractiveActionsChanges",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsBloksOnlyMessage",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPrimaryFeaturesGetters",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebShowMessageActionRetryErrorAction",
    "WDSDialogBridge",
    "react",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus",
    "useWAWebPrimaryFeaturesValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useSyncExternalStore;
    function c(e) {
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msgKey,
        l = e.quotedMsg,
        c = r("useWAWebUIM")(),
        m = o("useWAWebMsgValues").useMsgValues(
          i,
          o("WAWebMsgCasts").castToInteractiveMsg,
          [
            (t = o("WAWebMsgGetters")).getNativeFlowName,
            t.getGalaxyFlowDisabled,
            t.getInteractivePayload,
            t.getSignupCtaTapped,
            t.getType,
            t.getInteractiveType,
            t.getNativeFlowButtons,
            t.getBloksWidget,
            t.getInteractiveHeader,
            t.getFooter,
            o("WAWebFrontendMsgGetters").getText,
            t.getIsNewsletterMsg,
            t.getIsFromTemplate,
            t.getIsSentByMe,
            t.getSender,
            t.getT,
            t.getBizBotType,
            t.getIsCarouselCard,
          ],
        ),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = m[4],
        y = m[5],
        C = m[6],
        b = m[7],
        v = m[8],
        S = m[9],
        R = m[10],
        L = m[11],
        E = m[12],
        k = m[13],
        I = m[14],
        T = m[15],
        D = m[16],
        x = m[17];
      (o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues([
        o("WAWebPrimaryFeaturesGetters").getCustomPaymentMethodsSyncSupport,
      ]),
        u(
          o("WAWebInteractiveActionsChanges")
            .subscribeToInteractiveActionsChanges,
          o("WAWebInteractiveActionsChanges").getInteractiveActionsChangeCount,
        ));
      var $ = o("WAWebFrontendMsgGetters").getChatByMsgKey(i, L),
        P = r("useWAWebConversationPanelCanCompose")($),
        N = P[0],
        M = N || o("WAWebChatGetters").getIsBroadcast($),
        w = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: f,
          interactiveType: y,
          nativeFlowButtons: C,
          nativeFlowName: p,
          type: h,
        }),
        A = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          $.id,
          w == null ? void 0 : w.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(w),
        ),
        F =
          h !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
            ? null
            : r("WAWebGetInteractiveActions")({
                canCompose: M,
                msgKey: i,
                orderPaymentStatus: A,
                uimContext: c,
                values: {
                  chat: $,
                  galaxyFlowDisabled: _,
                  interactivePayload: f,
                  interactiveType: y,
                  isCarouselCard: x,
                  isFromTemplate: E,
                  isOutgoingBizBot: i.fromMe && D != null,
                  isSentByMe: k,
                  nativeFlowName: p,
                  sender: I,
                  signupCtaTapped: g,
                  t: T,
                  type: h,
                },
              }),
        O =
          F == null
            ? void 0
            : F.map(function (e) {
                var t =
                  e.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
                  _ === !0;
                return {
                  testid: e.testid,
                  label: e.label,
                  disabled: e.disabled === !0 || t === !0,
                  onClick: d(e),
                  onImpression: e.onImpression,
                  Icon: e.Icon,
                };
              }),
        B = p === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS;
      return s.jsx(r("WAWebA2uiInteractiveBubble.react"), {
        bloksWidget: b,
        msgKey: i,
        displayAuthor: n,
        displayType: a,
        displayFooter:
          !B ||
          o("WAWebOrderStatusButton").getOrderStatusButtonFor({
            interactivePayload: f,
            type: h,
          }) != null,
        header: s.jsx(r("WAWebInteractiveHeader"), {
          msgKey: i,
          quotedMsg: l,
          displayType: a,
        }),
        actions: O,
        hideMeta:
          (p === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
            o("WAWebOrderStatus").isPaymentRequest($, w)) ||
          r("WAWebIsBloksOnlyMessage")({
            bloksWidget: b,
            footerText: o(
              "WAWebGetInteractiveFooterText",
            ).getInteractiveFooterTextFor({
              footer: S,
              interactivePayload: f,
              nativeFlowName: p,
              type: h,
            }),
            interactiveHeader: v,
            text: R,
          }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t,
        n = e.menu;
      return n != null
        ? function () {
            if ((n.isEligible == null ? void 0 : n.isEligible()) === !1) {
              r("WAWebShowMessageActionRetryErrorAction")();
              return;
            }
            o("WDSDialogBridge").openWDSDialog(
              s.jsx(
                o("WAWebInteractiveActionMenuDialogLoadable.react")
                  .InteractiveActionMenuDialogLoadable,
                { menu: n },
              ),
            );
          }
        : (t = e.onClick) != null
          ? t
          : function () {
              return r("WAWebShowMessageActionFallbackErrorAction")();
            };
    }
    l.default = c;
  },
  98,
);
