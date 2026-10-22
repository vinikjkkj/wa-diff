__d(
  "WAWebBizOrdersDeprecationBannerContent",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = "orders-deprecation",
      u = Object.freeze({
        CHARGES: Object.freeze({ cxtEntrypointId: e, getDescription: c }),
        ORDERS: Object.freeze({ cxtEntrypointId: e, getDescription: c }),
        PAYMENTS_HOME: Object.freeze({ cxtEntrypointId: e, getDescription: c }),
      });
    function c() {
      return s._(
        /*BTDS*/ "Order tools are ending soon. Customers can still send carts in chat.",
      );
    }
    l.OrdersDeprecationBannerContents = u;
  },
  226,
);
