__d(
  "WASmaxInMessageDeliverHSMReviewMetadataMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "category",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "tag",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "sub_tag",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "library_template_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_template_from_library_edited",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            category: t.value,
            tag: n.value,
            id: r.value,
            subTag: a.value,
            libraryTemplateId: i.value,
            isTemplateFromLibraryEdited: l.value,
          })
        : l;
    }
    l.parseHSMReviewMetadataMixin = e;
  },
  98,
);
