__d(
  "WAWebOrgAdminBulkGroupTags",
  ["fbt", "WAWebOrgAdminBulkGroupPlan"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["member_tag", "secondary_member_tag"];
    function u(t) {
      return e.filter(function (e) {
        return t.some(function (t) {
          return (
            o("WAWebOrgAdminBulkGroupPlan").getOrgAdminBulkGroupCandidateTag(
              t,
              e,
            ) != null
          );
        });
      });
    }
    function c(e, t) {
      var n =
        e === "member_tag"
          ? t == null
            ? void 0
            : t.memberTagName
          : t == null
            ? void 0
            : t.secondaryMemberTagName;
      return n != null
        ? n
        : e === "member_tag"
          ? s._(/*BTDS*/ "Member tag")
          : s._(/*BTDS*/ "Second member tag");
    }
    ((l.getOrgAdminBulkGroupTagsWithValues = u),
      (l.getOrgAdminBulkGroupTagLabel = c));
  },
  226,
);
