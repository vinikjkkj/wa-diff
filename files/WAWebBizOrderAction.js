__d(
  "WAWebBizOrderAction",
  ["WAWebBizOrderBridge"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.height,
        n = e.orderId,
        r = e.sellerJid,
        a = e.token,
        i = e.width;
      return o("WAWebBizOrderBridge").queryOrder({
        height: t,
        orderId: n,
        sellerJid: r,
        token: a,
        width: i,
      });
    }
    function s(e, t) {
      return o("WAWebBizOrderBridge").createOrder(e, t);
    }
    ((l.queryOrder = e), (l.createOrder = s));
  },
  98,
);
