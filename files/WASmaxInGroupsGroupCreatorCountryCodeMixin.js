__d(
  "WASmaxInGroupsGroupCreatorCountryCodeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "creator_country_code");
      return t.success
        ? o("WAResultOrError").makeResult({ creatorCountryCode: t.value })
        : t;
    }
    l.parseGroupCreatorCountryCodeMixin = e;
  },
  98,
);
