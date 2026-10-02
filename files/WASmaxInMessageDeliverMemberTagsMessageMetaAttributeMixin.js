__d(
  "WASmaxInMessageDeliverMemberTagsMessageMetaAttributeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "tag_reason",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_NEWMEMBER_REREGRECOVERYREQUEST_REREGRECOVERYRESPONSE_USERDELETE_USERUPDATE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaTagReason: r.value })
        : r;
    }
    l.parseMemberTagsMessageMetaAttributeMixin = e;
  },
  98,
);
