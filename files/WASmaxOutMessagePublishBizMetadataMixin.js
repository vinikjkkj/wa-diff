__d(
  "WASmaxOutMessagePublishBizMetadataMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.metadataAppOwner,
        a = e.metadataCsidBm,
        i = e.metadataPaymentBm,
        l = e.metadataCustomerCategory,
        s = e.metadataDidBepRun,
        u = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "biz",
            null,
            o("WASmaxJsx").smax("metadata", {
              app_owner: (t = o("WASmaxAttrs")).OPTIONAL(
                (n = o("WAWap")).CUSTOM_STRING,
                r,
              ),
              csid_bm: t.OPTIONAL(n.CUSTOM_STRING, a),
              payment_bm: t.OPTIONAL(n.CUSTOM_STRING, i),
              customer_category: t.OPTIONAL(n.CUSTOM_STRING, l),
              did_bep_run: t.OPTIONAL(n.CUSTOM_STRING, s),
            }),
          ),
        );
      return u;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizMetadataMixin = s;
  },
  98,
);
