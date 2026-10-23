__d(
  "WAWebOrderExpansionAction",
  [
    "fbt",
    "WALogger",
    "WAWebBizEntryPoint",
    "WAWebBizOrderUpdateStatusAction",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebOrdersExpansionUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      var t = e.interactiveType,
        n = e.isSentByMe,
        o = e.nativeFlowName;
      return (
        t === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        o === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
        n
      );
    }
    function c(e, t) {
      var n = !(
        t === o("WAWebOrderStatus").OrderStatus.Canceled ||
        t === o("WAWebOrderStatus").OrderStatus.Complete
      );
      return n && u(e);
    }
    function d(t) {
      var n = t.chat,
        a = t.msgKey,
        i = t.orderInfo,
        l = t.orderStatus,
        u = t.uimContext,
        d = t.values;
      return !o("WAWebOrdersExpansionUtils").isContactCountrySupported(n) ||
        o("WAWebOrderStatus").isPaymentRequest(n, i) ||
        o("WAWebOrderStatusButton").isInboxCreatedOrderFor({
          interactivePayload: d.interactivePayload,
          type: d.type,
        }) ||
        l == null ||
        !c(d, l)
        ? null
        : {
            label: s._(/*BTDS*/ "Update status"),
            onClick: function () {
              var t,
                n =
                  (t = o("WAWebMsgCollection").MsgCollection.get(a)) == null
                    ? void 0
                    : t.safe();
              if (
                n == null ||
                n.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
              ) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[order-expansion] update status skipped, message left the collection",
                    ])),
                );
                return;
              }
              o("WAWebBizOrderUpdateStatusAction").openOrderStatusUpdateDrawer(
                n,
                u,
                r("WAWebBizEntryPoint").FROM_CHAT,
              );
            },
          };
    }
    l.getOrderUpdateStatusAction = d;
  },
  226,
);
