__d(
  "WASmaxInGroupsParticipantGroupJoinRequestMixin",
  ["WAResultOrError", "WASmaxInGroupsEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "membership_approval_request",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "421",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "error",
        o("WASmaxInGroupsEnums").ENUM_304_419,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            error: r.value,
            membershipApprovalRequestError: a.value,
          })
        : a;
    }
    l.parseParticipantGroupJoinRequestMixin = e;
  },
  98,
);
