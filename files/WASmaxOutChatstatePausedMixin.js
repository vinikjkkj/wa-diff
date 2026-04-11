__d(
  "WASmaxOutChatstatePausedMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "chatstate",
        null,
        o("WASmaxJsx").smax("paused", null),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergePausedMixin = s;
  },
  98,
);
