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
    function u(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? c({
            footer: e.footer,
            interactivePayload: e.interactivePayload,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          })
        : e.footer;
    }
    function c(t) {
      var n = t.footer,
        a = t.interactivePayload,
        i = t.nativeFlowName,
        l = t.type;
      if (
        l === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        i === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var u = o("WAWebOrderStatusButton").getOrderStatusButtonFor({
          interactivePayload: a,
          type: l,
        });
        if (u != null) {
          var c = u.order,
            d = c.order_creator_surface,
            m = c.order_date,
            p = c.shipping_method,
            _ = c.tracking;
          if (
            d === "biz_inbox" &&
            o("WAWebABProps").getABPropConfigValue(
              "utility_order_view_mbs_enabled",
            )
          ) {
            if (m == null) return null;
            var f = e.format(Number(m) * 1e3);
            return s
              ._(/*BTDS*/ "Placed on {order_date}", [s._param("order_date", f)])
              .toString();
          }
          if (_) return _.courier_name + " \u2022 " + _.tracking_ref;
          var g = r("isStringNullOrEmpty")(p)
            ? s._(/*BTDS*/ "Not available")
            : p;
          return s
            ._(/*BTDS*/ "Shipping method: {shipping_method}", [
              s._param("shipping_method", g),
            ])
            .toString();
        }
      }
      return n;
    }
    ((l.getInteractiveFooterText = u), (l.getInteractiveFooterTextFor = c));
  },
  226,
);
