__d(
  "WASmaxOutMessagePublishTraceContextMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishRequestOrTraceIDMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.requestOrTraceIDMixinGroupArgs,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o(
            "WASmaxOutMessagePublishRequestOrTraceIDMixinGroup",
          ).mergeRequestOrTraceIDMixinGroup(
            o("WASmaxJsx").smax("trace", null),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeTraceContextMixin = s;
  },
  98,
);
