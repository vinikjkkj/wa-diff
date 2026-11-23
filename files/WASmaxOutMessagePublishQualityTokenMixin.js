__d(
  "WASmaxOutMessagePublishQualityTokenMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasQualityTokenV1,
        n = e.qualityTokenElementValue,
        r = o("WASmaxJsx").smax(
          "hsm",
          null,
          o("WASmaxJsx").smax(
            "quality_token",
            { v: o("WASmaxAttrs").OPTIONAL_LITERAL("1", t) },
            n,
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeQualityTokenMixin = s;
  },
  98,
);
