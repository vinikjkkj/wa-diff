__d(
  "WASmaxInMessageDeliverEncTypeSenderKeyAndBroadcastMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup",
    "WASmaxInMessageDeliverEncTypeSenderKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverEncTypeSenderKeyMixin",
      ).parseEncTypeSenderKeyMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup",
      ).parseEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              encMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup:
                r.value,
            }),
          )
        : r;
    }
    l.parseEncTypeSenderKeyAndBroadcastMediaMixin = e;
  },
  98,
);
