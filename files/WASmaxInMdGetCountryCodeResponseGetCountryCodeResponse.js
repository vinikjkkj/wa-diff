__d(
  "WASmaxInMdGetCountryCodeResponseGetCountryCodeResponse",
  ["WAResultOrError", "WASmaxInMdIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "country_code");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(r.value, "iso");
      if (!a.success) return a;
      var i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ countryCodeIso: a.value }, i.value),
          )
        : i;
    }
    l.parseGetCountryCodeResponseGetCountryCodeResponse = e;
  },
  98,
);
