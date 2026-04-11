__d(
  "WASmaxInGroupsProfilePictureUrlResponseMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "url");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "direct_path");
      return r.success
        ? o("WAResultOrError").makeResult({ url: n.value, directPath: r.value })
        : r;
    }
    l.parseProfilePictureUrlResponseMixin = e;
  },
  98,
);
