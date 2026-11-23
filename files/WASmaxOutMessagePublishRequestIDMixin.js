__d(
  "WASmaxOutMessagePublishRequestIDMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.requestIdElementValue,
        n = o("WASmaxJsx").smax(
          "trace",
          null,
          o("WASmaxJsx").smax("request_id", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRequestIDMixin = s;
  },
  98,
);
