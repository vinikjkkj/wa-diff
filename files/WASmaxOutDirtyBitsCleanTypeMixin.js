__d(
  "WASmaxOutDirtyBitsCleanTypeMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.cleanType,
        n = e.cleanTimestamp,
        r = o("WASmaxJsx").smax("clean", {
          type: o("WAWap").CUSTOM_STRING(t),
          timestamp: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCleanTypeMixin = s;
  },
  98,
);
