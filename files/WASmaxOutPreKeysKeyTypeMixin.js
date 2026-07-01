__d(
  "WASmaxOutPreKeysKeyTypeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "smax$any",
        null,
        o("WASmaxJsx").smax("type", null, new Uint8Array([5])),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeKeyTypeMixin = s;
  },
  98,
);
