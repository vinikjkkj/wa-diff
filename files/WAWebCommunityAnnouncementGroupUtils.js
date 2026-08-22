__d(
  "WAWebCommunityAnnouncementGroupUtils",
  [
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e == null ? void 0 : e.getSubgroupsMetadata();
      return t == null
        ? void 0
        : t.find(function (e) {
            return (
              o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(e) ===
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            );
          });
    }
    function s(t) {
      var n,
        o = e(t);
      return (o == null ? void 0 : o.id) == null
        ? null
        : (n = r("WAWebGroupMetadataCollection").get(o.id)) != null
          ? n
          : null;
    }
    function u(e) {
      var t = e != null ? r("WAWebGroupMetadataCollection").get(e) : null;
      return (t == null ? void 0 : t.isLidAddressingMode) === !0;
    }
    ((l.getCommunityAnnouncementGroup = e),
      (l.getCommunityAnnouncementGroupMetadata = s),
      (l.isLidAddressingModeGivenCAGId = u));
  },
  98,
);
