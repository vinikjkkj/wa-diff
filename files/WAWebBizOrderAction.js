__d(
  "WAWebBizOrderAction",
  ["WAWebBizOrderBridge"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      return o("WAWebBizOrderBridge").queryOrder(e, t, n, r, a);
    }
    function s(e, t) {
      return o("WAWebBizOrderBridge").createOrder(e, t);
    }
    ((l.queryOrder = e), (l.createOrder = s));
  },
  98,
);
