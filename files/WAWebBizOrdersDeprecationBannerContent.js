__d(
  "WAWebBizOrdersDeprecationBannerContent",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = "orders-deprecation",
      u = "orders-deprecation-charges",
      c = "orders-deprecation-payments-home",
      d = Object.freeze({
        CHARGES: Object.freeze({ cxtEntrypointId: u, getDescription: m }),
        ORDERS: Object.freeze({ cxtEntrypointId: e, getDescription: m }),
        PAYMENTS_HOME: Object.freeze({ cxtEntrypointId: c, getDescription: m }),
      });
    function m() {
      return s._(
        /*BTDS*/ "Order tools are ending soon. Customers can still send carts in chat.",
      );
    }
    l.OrdersDeprecationBannerContents = d;
  },
  226,
);
