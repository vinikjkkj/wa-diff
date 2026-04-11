__d(
  "WASmaxInWaffleGetCertificateResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInWaffleGetCertificateResponseMixin",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "reply");
      if (!r.success) return r;
      var a = o(
        "WASmaxInWaffleGetCertificateResponseMixin",
      ).parseGetCertificateResponseMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { replyGetCertificateResponseMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseGetCertificateResponseSuccess = e;
  },
  98,
);
