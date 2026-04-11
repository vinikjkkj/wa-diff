__d(
  "WASmaxInGroupsBatchGetGroupInfoResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(e),
        r = o(
          "WASmaxInGroupsGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup",
        ).parseGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup(
          e,
        );
      return r.success
        ? o("WAResultOrError").makeResult({
            dedupAttrsMixin: n.success ? n.value : null,
            groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup:
              r.value,
          })
        : r;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "groups");
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(n, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "result",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseReference").attrStringFromReference(n, ["id"]);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "id",
        u.value,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "group",
        1,
        1e4,
        e,
      );
      return d.success
        ? o("WAResultOrError").makeResult({
            type: s.value,
            groupsGroup: d.value,
          })
        : d;
    }
    ((l.parseBatchGetGroupInfoResponseSuccessGroupsGroup = e),
      (l.parseBatchGetGroupInfoResponseSuccess = s));
  },
  98,
);
