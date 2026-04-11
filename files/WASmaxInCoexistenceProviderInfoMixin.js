__d(
  "WASmaxInCoexistenceProviderInfoMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "logo_url");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "name");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentInt(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function c(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "provider_info");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "logo_url",
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(n.value, "name", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(n.value, "id", u);
      return i.success
        ? o("WAResultOrError").makeResult({
            providerInfoLogoUrl: r.value,
            providerInfoName: a.value,
            providerInfoId: i.value,
          })
        : i;
    }
    ((l.parseProviderInfoProviderInfoLogoUrl = e),
      (l.parseProviderInfoProviderInfoName = s),
      (l.parseProviderInfoProviderInfoId = u),
      (l.parseProviderInfoMixin = c));
  },
  98,
);
