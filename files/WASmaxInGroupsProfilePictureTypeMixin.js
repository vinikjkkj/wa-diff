__d(
  "WASmaxInGroupsProfilePictureTypeMixin",
  ["WAResultOrError", "WASmaxInGroupsEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_IMAGE_PREVIEW,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    l.parseProfilePictureTypeMixin = e;
  },
  98,
);
