__d(
  "WASmaxOutGroupsDedupAttrsMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyKey,
        n = e.anyCreateCtx,
        r = o("WASmaxJsx").smax("smax$any", {
          key: o("WAWap").CUSTOM_STRING(t),
          create_ctx: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeDedupAttrsMixin = s;
  },
  98,
);
