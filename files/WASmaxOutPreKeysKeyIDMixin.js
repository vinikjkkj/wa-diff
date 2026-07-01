__d(
  "WASmaxOutPreKeysKeyIDMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.idElementValue,
        n = o("WASmaxJsx").smax("id", null, t);
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeKeyIDMixin = s;
  },
  98,
);
