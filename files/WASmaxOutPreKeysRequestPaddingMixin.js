__d(
  "WASmaxOutPreKeysRequestPaddingMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.paddingElementValue,
        n = o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("padding", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRequestPaddingMixin = s;
  },
  98,
);
