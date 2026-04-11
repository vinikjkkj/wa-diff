__d(
  "WASmaxInBizLinkingFBBizResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInBizLinkingEnums",
    "WASmaxInBizLinkingHasDisplayNameMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "catalog");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "state",
        o("WASmaxInBizLinkingEnums").ENUM_DISABLE_IMPORT,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "id");
      return r.success
        ? o("WAResultOrError").makeResult({ state: n.value, id: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "fb_biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "catalog", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(t, "id");
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizLinkingHasDisplayNameMixin",
      ).parseHasDisplayNameMixin(t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: a.value }, i.value, {
              catalog: r.value,
            }),
          )
        : i;
    }
    ((l.parseFBBizResponseCatalog = e), (l.parseFBBizResponseMixin = s));
  },
  98,
);
