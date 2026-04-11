__d(
  "WASmaxOutSpamContentTypeMediaMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("message", { type: "media" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeContentTypeMediaMixin = s;
  },
  98,
);
