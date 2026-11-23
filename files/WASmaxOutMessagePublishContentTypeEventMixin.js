__d(
  "WASmaxOutMessagePublishContentTypeEventMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaEventType,
        n = o("WASmaxJsx").smax(
          "message",
          { type: "event" },
          o("WASmaxJsx").smax("meta", {
            event_type: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeContentTypeEventMixin = s;
  },
  98,
);
