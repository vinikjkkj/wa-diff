__d(
  "WASmaxOutStatusPublishStatusAIContentMetaMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "status",
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
    l.mergeStatusAIContentMetaMixin = s;
  },
  98,
);
