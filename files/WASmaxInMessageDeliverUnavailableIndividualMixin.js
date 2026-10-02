__d(
  "WASmaxInMessageDeliverUnavailableIndividualMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBusinessBotMessageMixin",
    "WASmaxInMessageDeliverContentUnavailableMixins",
    "WASmaxInMessageDeliverUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
          "WASmaxInMessageDeliverBusinessBotMessageMixin",
        ).parseBusinessBotMessageMixin(e),
        r = o("WASmaxInMessageDeliverUnavailableMixin").parseUnavailableMixin(
          e,
        );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentUnavailableMixins",
      ).parseContentUnavailableMixins(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { businessBotMessageMixin: n.success ? n.value : null },
              r.value,
              { contentUnavailableMixins: a.value },
            ),
          )
        : a;
    }
    l.parseUnavailableIndividualMixin = e;
  },
  98,
);
