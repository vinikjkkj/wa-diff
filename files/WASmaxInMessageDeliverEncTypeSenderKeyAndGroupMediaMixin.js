__d(
  "WASmaxInMessageDeliverEncTypeSenderKeyAndGroupMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncLiveLocationOrListOrMediaTypeOrMediaTypeFutureproofMixinGroup",
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
        "WASmaxInMessageDeliverEncLiveLocationOrListOrMediaTypeOrMediaTypeFutureproofMixinGroup",
      ).parseEncLiveLocationOrListOrMediaTypeOrMediaTypeFutureproofMixinGroup(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              encLiveLocationOrListOrMediaTypeOrMediaTypeFutureproofMixinGroup:
                r.value,
            }),
          )
        : r;
    }
    l.parseEncTypeSenderKeyAndGroupMediaMixin = e;
  },
  98,
);
