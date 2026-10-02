__d(
  "WASmaxInMessageDeliverContentTypeProductListMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverEncListMixin",
    "WASmaxInMessageDeliverProductListMixin",
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
      var i = o("WASmaxInMessageDeliverProductListMixin").parseProductListMixin(
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { encEncListMixin: r.value },
              a.value,
              i.value,
            ),
          )
        : i;
    }
    l.parseContentTypeProductListMixin = e;
  },
  98,
);
