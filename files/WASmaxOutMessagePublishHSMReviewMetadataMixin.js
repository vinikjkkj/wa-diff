__d(
  "WASmaxOutMessagePublishHSMReviewMetadataMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.anyCategory,
        a = e.anyTag,
        i = e.anyId,
        l = e.anySubTag,
        s = e.anyLibraryTemplateId,
        u = e.anyIsTemplateFromLibraryEdited,
        c = o("WASmaxJsx").smax("smax$any", {
          category: (t = o("WASmaxAttrs")).OPTIONAL(
            (n = o("WAWap")).CUSTOM_STRING,
            r,
          ),
          tag: t.OPTIONAL(n.CUSTOM_STRING, a),
          id: t.OPTIONAL(n.CUSTOM_STRING, i),
          sub_tag: t.OPTIONAL(n.CUSTOM_STRING, l),
          library_template_id: t.OPTIONAL(n.CUSTOM_STRING, s),
          is_template_from_library_edited: t.OPTIONAL(n.CUSTOM_STRING, u),
        });
      return c;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeHSMReviewMetadataMixin = s;
  },
  98,
);
