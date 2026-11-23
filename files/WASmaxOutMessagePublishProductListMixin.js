__d(
  "WASmaxOutMessagePublishProductListMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.listV,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "biz",
            null,
            o("WASmaxJsx").smax("list", {
              type: "product_list",
              v: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
            }),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeProductListMixin = s;
  },
  98,
);
