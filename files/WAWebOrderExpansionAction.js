__d(
  "WAWebOrderExpansionAction",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizOrderUpdateStatusAction",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = function (t) {
        var e = t.interactiveType,
          n = t.nativeFlowName;
        return (
          e === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
          n === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          o("WAWebMsgGetters").getIsSentByMe(t)
        );
      },
      u = function (n, r) {
        var t = !(
          r === o("WAWebOrderStatus").OrderStatus.Canceled ||
          r === o("WAWebOrderStatus").OrderStatus.Complete
        );
        return t && e(n);
      };
    function c(e, t, n, a, i) {
      return !o("WAWebOrdersExpansionUtils").isContactCountrySupported(a) ||
        o("WAWebOrderStatus").isPaymentRequest(a, i) ||
        t == null ||
        !u(e, t)
        ? null
        : {
            label: s._(/*BTDS*/ "Update status"),
            onClick: function () {
              o("WAWebBizOrderUpdateStatusAction").openOrderStatusUpdateDrawer(
                e,
                n,
                r("WAWebBizEntryPoint").FROM_CHAT,
              );
            },
          };
    }
    l.getOrderUpdateStatusAction = c;
  },
  226,
);
