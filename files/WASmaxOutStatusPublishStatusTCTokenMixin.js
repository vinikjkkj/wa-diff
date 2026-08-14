__d(
  "WASmaxOutStatusPublishStatusTCTokenMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.tctokenElementValue,
        n = o("WASmaxJsx").smax(
          "to",
          null,
          o("WASmaxJsx").smax("tctoken", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusTCTokenMixin = s;
  },
  98,
);
