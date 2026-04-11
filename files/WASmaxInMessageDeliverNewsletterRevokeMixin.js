__d(
  "WASmaxInMessageDeliverNewsletterRevokeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAdminRevokeMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverWAMOSubMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverAdminRevokeMixin").parseAdminRevokeMixin(
        e,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!a.success) return a;
      var i = o("WASmaxInMessageDeliverWAMOSubMixin").parseWAMOSubMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, r.value, a.value, {
          wAMOSubMixin: i.success ? i.value : null,
        }),
      );
    }
    l.parseNewsletterRevokeMixin = e;
  },
  98,
);
