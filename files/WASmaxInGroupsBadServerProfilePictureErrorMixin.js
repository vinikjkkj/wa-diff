__d(
  "WASmaxInGroupsBadServerProfilePictureErrorMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "status",
        "500",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ status: n.value })
        : n;
    }
    l.parseBadServerProfilePictureErrorMixin = e;
  },
  98,
);
