__d(
  "WAWebInteractiveMessage",
  [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActions",
    "WAWebGetInteractiveFooterText",
    "WAWebInteractiveActionMenuDialog.react",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsBloksOnlyMessage",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPrimaryFeaturesGetters",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebStateUtils",
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
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msgKey,
        l = e.quotedMsg,
        u = r("useWAWebUIM")(),
        m = o("useWAWebMsgValues").useMsgValues(i, [
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
          o("WAWebFrontendMsgGetters").getSafeMsg,
        ]),
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
        E = m[12];
      o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues([
        o("WAWebPrimaryFeaturesGetters").getCustomPaymentMethodsSyncSupport,
      ]);
      var k = o("WAWebFrontendMsgGetters").getChatByMsgKey(i, L),
        I = r("useWAWebConversationPanelCanCompose")(k),
        T = I[0],
        D = T || o("WAWebChatGetters").getIsBroadcast(k),
        x = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: f,
          interactiveType: y,
          nativeFlowButtons: C,
          nativeFlowName: p,
          type: h,
        }),
        $ = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          k,
          x == null ? void 0 : x.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(x),
        ),
        P = d(E),
        N =
          P == null
            ? null
            : r("WAWebGetInteractiveActions")({
                msg: o("WAWebStateUtils").unproxy(P),
                uimContext: u,
                canCompose: D,
                orderPaymentStatus: $,
              }),
        M =
          N == null
            ? void 0
            : N.map(function (e) {
                var t =
                  e.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
                  _ === !0;
                return {
                  testid: e.testid,
                  label: e.label,
                  disabled: e.disabled === !0 || t === !0,
                  onClick: c(e),
                  Icon: e.Icon,
                };
              }),
        w = p === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS;
      return s.jsx(r("WAWebInteractiveBubble.react"), {
        msgKey: i,
        displayAuthor: n,
        displayType: a,
        displayFooter:
          !w ||
          o("WAWebOrderStatusButton").getOrderStatusButtonFor({
            interactivePayload: f,
            type: h,
          }) != null,
        header: s.jsx(r("WAWebInteractiveHeader"), {
          msgKey: i,
          quotedMsg: l,
          displayType: a,
        }),
        actions: M,
        hideMeta:
          (p === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
            o("WAWebOrderStatus").isPaymentRequest(k, x)) ||
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
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t,
        n = e.menu;
      return n != null
        ? function () {
            return o("WDSDialogBridge").openWDSDialog(
              s.jsx(r("WAWebInteractiveActionMenuDialog.react"), { menu: n }),
            );
          }
        : (t = e.onClick) != null
          ? t
          : function () {
              return r("WAWebShowMessageActionFallbackErrorAction")();
            };
    }
    function d(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ? e : null;
    }
    l.default = u;
  },
  98,
);
