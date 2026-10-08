__d(
  "WAWebInteractiveMessage",
  [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActions",
    "WAWebInteractiveActionMenuDialog.react",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsBloksOnlyMessage",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebPrimaryFeaturesGetters",
    "WAWebShowMessageActionFallbackErrorAction",
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
        i = e.msg,
        l = e.quotedMsg,
        u = r("useWAWebUIM")(),
        d = o("useWAWebMsgValues").useMsgValues(i.id, [
          (t = o("WAWebMsgGetters")).getNativeFlowName,
          t.getGalaxyFlowDisabled,
          t.getInteractivePayload,
          t.getSignupCtaTapped,
        ]),
        m = d[0],
        p = d[1];
      o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues([
        o("WAWebPrimaryFeaturesGetters").getCustomPaymentMethodsSyncSupport,
      ]);
      var _ = o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
        f = r("useWAWebConversationPanelCanCompose")(_),
        g = f[0],
        h = g || o("WAWebChatGetters").getIsBroadcast(_),
        y = o("WAWebOrderDetails").getOrderInfo(i),
        C = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          _,
          y == null ? void 0 : y.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(y),
        ),
        b = r("WAWebGetInteractiveActions")({
          msg: i,
          uimContext: u,
          canCompose: h,
          orderPaymentStatus: C,
        }),
        v =
          b == null
            ? void 0
            : b.map(function (e) {
                var t =
                  e.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
                  p === !0;
                return {
                  testid: e.testid,
                  label: e.label,
                  disabled: e.disabled === !0 || t === !0,
                  onClick: c(e),
                  Icon: e.Icon,
                };
              }),
        S = m === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS;
      return s.jsx(r("WAWebInteractiveBubble.react"), {
        msg: i,
        displayAuthor: n,
        displayType: a,
        displayFooter: !S || o("WAWebOrderStatus").hasOrderStatusButton(i),
        header: s.jsx(r("WAWebInteractiveHeader"), {
          msg: i,
          quotedMsg: l,
          displayType: a,
        }),
        actions: v,
        hideMeta:
          (m === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
            o("WAWebOrderStatus").isPaymentRequest(_, y)) ||
          r("WAWebIsBloksOnlyMessage")(i),
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
    l.default = u;
  },
  98,
);
