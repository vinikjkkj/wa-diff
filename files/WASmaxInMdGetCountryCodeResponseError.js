__d(
  "WASmaxInMdGetCountryCodeResponseError",
  [
    "WAResultOrError",
    "WASmaxInMdCountryCodeErrors",
    "WASmaxInMdIQErrorResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxInMdIQErrorResponseMixin").parseIQErrorResponseMixin(
        e,
        t,
      );
      if (!a.success) return a;
      var i = o("WASmaxInMdCountryCodeErrors").parseCountryCodeErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCountryCodeErrors: i.value,
            }),
          )
        : i;
    }
    l.parseGetCountryCodeResponseError = e;
  },
  98,
);
