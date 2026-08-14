__d(
  "WASmaxOutStatusPublishEncVersionFutureproofMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encV,
        n = o("WASmaxJsx").smax("enc", { v: o("WAWap").INT(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncVersionFutureproofMixin = s;
  },
  98,
);
