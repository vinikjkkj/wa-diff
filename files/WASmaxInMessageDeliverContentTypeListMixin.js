__d(
  "WASmaxInMessageDeliverContentTypeListMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverEncListMixin",
    "WASmaxInMessageDeliverSingleSelectOrProductListMixinGroup",
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
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInMessageDeliverSingleSelectOrProductListMixinGroup",
      ).parseSingleSelectOrProductListMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ encEncListMixin: r.value }, a.value, {
          singleSelectOrProductListMixinGroup: i.success ? i.value : null,
        }),
      );
    }
    l.parseContentTypeListMixin = e;
  },
  98,
);
