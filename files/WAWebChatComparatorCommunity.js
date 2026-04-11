__d(
  "WAWebChatComparatorCommunity",
  ["WAWebGroupType"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        var e, r;
        if (
          ((e = t.groupMetadata) == null ? void 0 : e.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        )
          return -1;
        if (
          ((r = n.groupMetadata) == null ? void 0 : r.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        )
          return 1;
        var a = t.previewT != null ? Math.max(t.previewT, t.t || 0) : t.t || 0,
          i = n.previewT != null ? Math.max(n.previewT, n.t || 0) : n.t || 0;
        return a !== i
          ? a > i
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
