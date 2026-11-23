__d(
  "WASmaxOutMessagePublishRetryMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishEncRetryMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageT,
        n = e.encRetryMixinArgs,
        r = o("WASmaxJsx").smax(
          "message",
          { t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t) },
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishEncRetryMixin").mergeEncRetryMixin,
            o("WASmaxJsx").smax("enc", null),
            n,
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRetryMixin = s;
  },
  98,
);
