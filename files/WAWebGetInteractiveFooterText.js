__d(
  "WAWebGetInteractiveFooterText",
  [
    "fbt",
    "WAWebABProps",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMsgType",
    "WAWebOrderStatusButton",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
      month: "short",
      day: "numeric",
      weekday: "short",
    });
    function u(t) {
      if (
        t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        t.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var n = o("WAWebOrderStatusButton").getOrderStatusButton(t);
        if (n != null) {
          var a = n.order,
            i = a.order_creator_surface,
            l = a.order_date,
            u = a.shipping_method,
            c = a.tracking;
          if (
            i === "biz_inbox" &&
            o("WAWebABProps").getABPropConfigValue(
              "utility_order_view_mbs_enabled",
            )
          ) {
            if (l == null) return null;
            var d = e.format(Number(l) * 1e3);
            return s
              ._(/*BTDS*/ "Placed on {order_date}", [s._param("order_date", d)])
              .toString();
          }
          if (c) return c.courier_name + " \u2022 " + c.tracking_ref;
          var m = r("isStringNullOrEmpty")(u)
            ? s._(/*BTDS*/ "Not available")
            : u;
          return s
            ._(/*BTDS*/ "Shipping method: {shipping_method}", [
              s._param("shipping_method", m),
            ])
            .toString();
        }
      }
      return t.footer;
    }
    l.getInteractiveFooterText = u;
  },
  226,
);
