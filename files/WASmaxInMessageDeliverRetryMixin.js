__d(
  "WASmaxInMessageDeliverRetryMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncRetryMixin",
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
      var r = o("WASmaxInMessageDeliverEncRetryMixin").parseEncRetryMixin(
        n.value,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(n.value);
      if (!a.success) return a;
      var i = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(n.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            encEncRetryMixin: r.value,
            encEncTypeIndividualMixin: a.value,
            encEncVersion: i.value,
          })
        : i;
    }
    l.parseRetryMixin = e;
  },
  98,
);
