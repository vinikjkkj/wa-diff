__d(
  "WASmaxOutMessagePublishNewsletterAIContentMetaMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax(
          "meta",
          null,
          o("WASmaxJsx").smax("ai_content", null),
        ),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeNewsletterAIContentMetaMixin = s;
  },
  98,
);
