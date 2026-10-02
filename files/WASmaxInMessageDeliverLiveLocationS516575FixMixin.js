__d(
  "WASmaxInMessageDeliverLiveLocationS516575FixMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverLiveLocationModeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverLiveLocationModeMixin",
      ).parseLiveLocationModeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseLiveLocationS516575FixMixin = e;
  },
  98,
);
