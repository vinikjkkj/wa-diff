__d(
  "WAWebBizOrderAction",
  ["WAWebBizOrderBridge"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bizWid,
        n = e.height,
        r = e.orderId,
        a = e.token,
        i = e.width;
      return o("WAWebBizOrderBridge").queryOrder(t, r, i, n, a);
    }
    function s(e, t) {
      return o("WAWebBizOrderBridge").createOrder(e, t);
    }
    ((l.queryOrder = e), (l.createOrder = s));
  },
  98,
);
