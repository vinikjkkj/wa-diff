__d(
  "WASmaxOutStatusPublishEncStateMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encState,
        n = o("WASmaxJsx").smax("enc", { state: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncStateMixin = s;
  },
  98,
);
