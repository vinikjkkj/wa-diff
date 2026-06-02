__d(
  "WAWebWamGroupMetadataMetricUtils",
  ["WAWebDBGroupsGroupMetadata", "WAWebGroupType"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (e != null && e.isGroup()) {
        var t = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
        if (t != null)
          return o("WAWebGroupType").groupTypeToWamEnum(
            o("WAWebGroupType").getGroupTypeFromGroupMetadata(t),
          );
      }
    }
    async function s(e) {
      var t = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
      return t == null ? null : u(t);
    }
    function u(e) {
      return (
        o("WAWebGroupType").getGroupTypeFromGroupMetadata(e) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      );
    }
    ((l.getGroupTypeFromChatWid = e),
      (l.isCagFromChatWid = s),
      (l.isCagFromGroupMetadata = u));
  },
  98,
);
