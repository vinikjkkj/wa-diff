__d(
  "WAWebCommunityAnnouncementGroupUtils",
  ["WAWebGroupMetadataCollection", "WAWebGroupType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e == null ? void 0 : e.getSubgroupsMetadata();
      return t == null
        ? void 0
        : t.find(function (e) {
            return (
              e.groupType ===
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            );
          });
    }
    function s(e) {
      var t = e != null ? r("WAWebGroupMetadataCollection").get(e) : null;
      return (t == null ? void 0 : t.isLidAddressingMode) === !0;
    }
    ((l.getCommunityAnnouncementGroup = e),
      (l.isLidAddressingModeGivenCAGId = s));
  },
  98,
);
