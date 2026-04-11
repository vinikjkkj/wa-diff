__d(
  "WASmaxOutSpamMessageWithTypeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamContentTypeTextOrMediaMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contentTypeTextOrMediaMixinGroupArgs,
        n = o(
          "WASmaxOutSpamContentTypeTextOrMediaMixinGroup",
        ).mergeContentTypeTextOrMediaMixinGroup(
          o("WASmaxJsx").smax("message", null),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageWithTypeMixin = s;
  },
  98,
);
