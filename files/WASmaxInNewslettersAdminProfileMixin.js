__d(
  "WASmaxInNewslettersAdminProfileMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "admin_profile");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "picture");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentString(n.value);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "id");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(r.value, "direct_path");
      return s.success
        ? o("WAResultOrError").makeResult({
            id: a.value,
            nameElementValue: i.value,
            pictureId: l.value,
            pictureDirectPath: s.value,
          })
        : s;
    }
    l.parseAdminProfileMixin = e;
  },
  98,
);
