__d(
  "WASmaxOutMessagePublishEncLiveLocationMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encDuration,
        n = o("WASmaxJsx").smax("enc", {
          mediatype: "livelocation",
          duration: o("WAWap").INT(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncLiveLocationMixin = s;
  },
  98,
);
