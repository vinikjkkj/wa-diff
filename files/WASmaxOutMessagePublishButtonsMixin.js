__d(
  "WASmaxOutMessagePublishButtonsMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("biz", null, o("WASmaxJsx").smax("buttons", null)),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeButtonsMixin = s;
  },
  98,
);
