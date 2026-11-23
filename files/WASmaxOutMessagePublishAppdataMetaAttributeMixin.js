__d(
  "WASmaxOutMessagePublishAppdataMetaAttributeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaAppdata,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", { appdata: o("WAWap").CUSTOM_STRING(t) }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeAppdataMetaAttributeMixin = s;
  },
  98,
);
