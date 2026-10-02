__d(
  "WASmaxInMessageDeliverFrankingMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverClientFrankingTagMixin",
    "WASmaxInMessageDeliverServerFrankingTagMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
          "WASmaxInMessageDeliverClientFrankingTagMixin",
        ).parseClientFrankingTagMixin(e),
        r = o(
          "WASmaxInMessageDeliverServerFrankingTagMixin",
        ).parseServerFrankingTagMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { clientFrankingTagMixin: n.success ? n.value : null },
              r.value,
            ),
          )
        : r;
    }
    l.parseFrankingMixin = e;
  },
  98,
);
