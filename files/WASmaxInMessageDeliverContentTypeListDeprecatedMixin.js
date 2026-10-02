__d(
  "WASmaxInMessageDeliverContentTypeListDeprecatedMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverEncListMixin",
    "WASmaxInMessageDeliverSingleSelectListOrProductListDeprecatedOrProductListMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverEncListMixin").parseEncListMixin(
          n.value,
        ),
        a = o(
          "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
        ).parseContentTypeTextOrMediaMixinGroup(e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInMessageDeliverSingleSelectListOrProductListDeprecatedOrProductListMixinGroup",
      ).parseSingleSelectListOrProductListDeprecatedOrProductListMixinGroup(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            encEncListMixin: r.success ? r.value : null,
            contentTypeTextOrMediaMixinGroup: a.value,
            singleSelectListOrProductListDeprecatedOrProductListMixinGroup:
              i.value,
          })
        : i;
    }
    l.parseContentTypeListDeprecatedMixin = e;
  },
  98,
);
