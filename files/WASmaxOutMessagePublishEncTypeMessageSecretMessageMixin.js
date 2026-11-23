__d(
  "WASmaxOutMessagePublishEncTypeMessageSecretMessageMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutMessagePublishEncPayloadMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutMessagePublishEncPayloadMixin").mergeEncPayloadMixin(
        o("WASmaxJsx").smax("enc", { type: "msmsg" }),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncTypeMessageSecretMessageMixin = s;
  },
  98,
);
