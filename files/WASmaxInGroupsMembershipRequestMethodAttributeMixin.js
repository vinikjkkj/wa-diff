__d(
  "WASmaxInGroupsMembershipRequestMethodAttributeMixin",
  ["WAResultOrError", "WASmaxInGroupsEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "request_method",
        o("WASmaxInGroupsEnums").ENUM_INVITELINK_LINKEDGROUPJOIN_NONADMINADD,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ requestMethod: t.value })
        : t;
    }
    l.parseMembershipRequestMethodAttributeMixin = e;
  },
  98,
);
