__d(
  "WASmaxInBizLinkingAdStatusMixin",
  ["WAResultOrError", "WASmaxInBizLinkingEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "ad_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        t.value,
        "has_created_ad",
        o("WASmaxInBizLinkingEnums").ENUM_FALSE_TRUE,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        t.value,
        "has_active_ctwa_ad",
        o("WASmaxInBizLinkingEnums").ENUM_FALSE_TRUE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            adStatusHasCreatedAd: n.value,
            adStatusHasActiveCtwaAd: r.value,
          })
        : r;
    }
    l.parseAdStatusMixin = e;
  },
  98,
);
