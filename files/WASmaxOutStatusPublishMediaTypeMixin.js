__d(
  "WASmaxOutStatusPublishMediaTypeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encMediatype,
        n = o("WASmaxJsx").smax("enc", {
          mediatype: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMediaTypeMixin = s;
  },
  98,
);
