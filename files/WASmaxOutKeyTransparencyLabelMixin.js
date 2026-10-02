__d(
  "WASmaxOutKeyTransparencyLabelMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.labelElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("label", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeLabelMixin = s;
  },
  98,
);
