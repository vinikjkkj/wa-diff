__d(
  "WASmaxInNewslettersAdminProfileMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "name");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "direct_path");
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, directPath: r.value })
        : r;
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "admin_profile");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "name", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "picture", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "id",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            id: i.value,
            name: r.value,
            picture: a.value,
          })
        : i;
    }
    ((l.parseAdminProfileName = e),
      (l.parseAdminProfilePicture = s),
      (l.parseAdminProfileMixin = u));
  },
  98,
);
