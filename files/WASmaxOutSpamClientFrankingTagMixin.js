__d(
  "WASmaxOutSpamClientFrankingTagMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.frankingTagElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "franking",
            null,
            o("WASmaxJsx").smax("franking_tag", null, t),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeClientFrankingTagMixin = s;
  },
  98,
);
