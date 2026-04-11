__d(
  "WAWebGetInteractiveFooterText",
  [
    "fbt",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebOrderStatusButton",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var t = o("WAWebOrderStatusButton").getOrderStatusButton(e);
        if (t != null) {
          var n = t.order,
            a = n.shipping_method,
            i = n.tracking;
          if (i) return i.courier_name + " \u2022 " + i.tracking_ref;
          var l = r("isStringNullOrEmpty")(a)
            ? s._(/*BTDS*/ "Not available")
            : a;
          return s
            ._(/*BTDS*/ "Shipping method: {shipping_method}", [
              s._param("shipping_method", l),
            ])
            .toString();
        }
      }
      return e.footer;
    }
    l.getInteractiveFooterText = e;
  },
  226,
);
