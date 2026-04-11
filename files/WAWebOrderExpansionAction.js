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
      },
      c = function (t, n, a, i, l) {
        return !o("WAWebOrdersExpansionUtils").isContactCountrySupported(i) ||
          o("WAWebOrderStatus").isPaymentRequest(i, l) ||
          n == null ||
          !u(t, n)
          ? null
          : {
              label: s._(/*BTDS*/ "Update status"),
              onClick: function () {
                o(
                  "WAWebBizOrderUpdateStatusAction",
                ).openOrderStatusUpdateDrawer(
                  t,
                  a,
                  r("WAWebBizEntryPoint").FROM_CHAT,
                );
              },
            };
      };
    l.getOrderUpdateStatusAction = c;
  },
  226,
);
