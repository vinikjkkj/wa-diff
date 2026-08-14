__d(
  "WASmaxOutStatusPublishStatusNoExtraFanoutMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("status", { device_fanout: "false" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeStatusNoExtraFanoutMixin = s;
  },
  98,
);
