__d(
  "WASmaxInBizLinkingHasShowOnProfileMixin",
  ["WAResultOrError", "WASmaxInBizLinkingEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "show_on_profile");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentStringEnum(
        t.value,
        o("WASmaxInBizLinkingEnums").ENUM_FALSE_TRUE,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            showOnProfileElementValue: n.value,
          })
        : n;
    }
    l.parseHasShowOnProfileMixin = e;
  },
  98,
);
