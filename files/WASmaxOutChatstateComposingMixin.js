__d(
  "WASmaxOutChatstateComposingMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasComposingMediaAudio,
        n = o("WASmaxJsx").smax(
          "chatstate",
          null,
          o("WASmaxJsx").smax("composing", {
            media: o("WASmaxAttrs").OPTIONAL_LITERAL("audio", t),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeComposingMixin = s;
  },
  98,
);
