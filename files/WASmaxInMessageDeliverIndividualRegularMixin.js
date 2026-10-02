__d(
  "WASmaxInMessageDeliverIndividualRegularMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncTypeIndividualMixin",
    "WASmaxInMessageDeliverEncVersion",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(n.value);
      if (!r.success) return r;
      var a = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            encEncTypeIndividualMixin: r.value,
            encEncVersion: a.value,
          })
        : a;
    }
    l.parseIndividualRegularMixin = e;
  },
  98,
);
