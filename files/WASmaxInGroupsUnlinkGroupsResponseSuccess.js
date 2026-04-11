__d(
  "WASmaxInGroupsUnlinkGroupsResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsSubGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "remove_orphaned_members",
        "true",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsSubGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup",
      ).parseSubGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup(
        e,
      );
      return o("WAResultOrError").makeResult({
        jid: n.value,
        removeOrphanedMembers: r.value,
        subGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup:
          a.success ? a.value : null,
      });
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "unlink");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        a.value,
        "unlink_type",
        "sub_group",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "group",
        1,
        1e3,
        e,
      );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ unlinkUnlinkType: i.value }, l.value, {
              unlinkGroup: s.value,
            }),
          )
        : s;
    }
    ((l.parseUnlinkGroupsResponseSuccessUnlinkGroup = e),
      (l.parseUnlinkGroupsResponseSuccess = s));
  },
  98,
);
