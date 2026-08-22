__d(
  "WAWebChatComparatorCommunity",
  ["WAWebGroupMetadataTypeUtils", "WAWebGroupType"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        if (
          o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
            t.groupMetadata,
          ) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        )
          return -1;
        if (
          o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
            n.groupMetadata,
          ) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        )
          return 1;
        var e = t.previewT != null ? Math.max(t.previewT, t.t || 0) : t.t || 0,
          r = n.previewT != null ? Math.max(n.previewT, n.t || 0) : n.t || 0;
        return e !== r
          ? e > r
            ? -1
            : 1
          : t.id.toString() < n.id.toString()
            ? -1
            : 1;
      },
      s = e;
    l.default = s;
  },
  98,
);
