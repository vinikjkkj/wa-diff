__d(
  "WASmaxOutStatusPublishStatusEncHashMetaAttributeMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaStatusH,
        n = e.metaStatusOts,
        r = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            status_h: o("WAWap").CUSTOM_STRING(t),
            status_ots: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
          }),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusEncHashMetaAttributeMixin = s;
  },
  98,
);
