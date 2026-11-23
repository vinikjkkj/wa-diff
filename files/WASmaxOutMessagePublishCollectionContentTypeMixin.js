__d(
  "WASmaxOutMessagePublishCollectionContentTypeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaCollectionType,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", {
            collection_type: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCollectionContentTypeMixin = s;
  },
  98,
);
