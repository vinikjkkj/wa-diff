__d(
  "WASmaxOutMessagePublishOrderMessageMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.orderOrderId,
        a = e.orderOrderMessageId,
        i = e.orderExpiryTs,
        l = e.orderOrderType,
        s = e.orderDiscountProgramName,
        u = o("WASmaxJsx").smax("order", {
          "order-id": (t = o("WAWap")).CUSTOM_STRING(r),
          "order-message-id": (n = o("WASmaxAttrs")).OPTIONAL(
            t.CUSTOM_STRING,
            a,
          ),
          "expiry-ts": n.OPTIONAL(t.INT, i),
          "order-type": n.OPTIONAL(t.CUSTOM_STRING, l),
          "discount-program-name": n.OPTIONAL(t.CUSTOM_STRING, s),
        });
      return u;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeOrderMessageMixin = s;
  },
  98,
);
