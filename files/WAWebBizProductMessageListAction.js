__d(
  "WAWebBizProductMessageListAction",
  ["WAWebMsgCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = o("WAWebMsgCollection").MsgCollection.get(t),
        a =
          r == null ||
          (n = r.list) == null ||
          (n = n.productListInfo) == null ||
          (n = n.headerImage) == null
            ? void 0
            : n.productId;
      e.id === a && r != null && (r.productHeaderImageRejected = !0);
    }
    l.updateProductListHeaderImageRejected = e;
  },
  98,
);
