__d(
  "WASmaxOutMessagePublishContentTypeQuizCreationMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaContenttype,
        n = o("WASmaxJsx").smax(
          "message",
          { type: "poll" },
          o("WASmaxJsx").smax("meta", {
            polltype: "quiz_creation",
            contenttype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeContentTypeQuizCreationMixin = s;
  },
  98,
);
