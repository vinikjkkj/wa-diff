__d(
  "WASmaxInMessageDeliverContentTypeLiveLocationSingleMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
    "WASmaxInMessageDeliverLiveLocationModeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (!r.success) return r;
      var a = o(
          "WASmaxInMessageDeliverLiveLocationModeMixin",
        ).parseLiveLocationModeMixin(e),
        i = o(
          "WASmaxInMessageDeliverEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup",
        ).parseEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup(
          n.value,
        );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, {
              liveLocationModeMixin: a.success ? a.value : null,
              encEncLiveLocationEncLiveLocationOrEncLiveLocationDeprecatedMixinGroup:
                i.value,
            }),
          )
        : i;
    }
    l.parseContentTypeLiveLocationSingleMixin = e;
  },
  98,
);
