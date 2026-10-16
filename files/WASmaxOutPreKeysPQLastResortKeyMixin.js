__d(
  "WASmaxOutPreKeysPQLastResortKeyMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutPreKeysPQPreKeyContentsMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        o("WASmaxOutPreKeysPQPreKeyContentsMixin").mergePQPreKeyContentsMixin(
          o("WASmaxJsx").smax("pq_last_resort_key", null),
          e,
        ),
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePQLastResortKeyMixin = s;
  },
  98,
);
