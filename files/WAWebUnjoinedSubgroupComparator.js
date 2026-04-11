__d(
  "WAWebUnjoinedSubgroupComparator",
  ["WAWebGroupType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return function (t, n) {
        var r, a;
        if (
          t.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        )
          return -1;
        if (
          n.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        )
          return 1;
        if (t.groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP)
          return -1;
        if (n.groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP)
          return 1;
        var i = e.some(function (e) {
            return t.id.equals(e);
          }),
          l = e.some(function (e) {
            return n.id.equals(e);
          });
        if (i && !l) return -1;
        if (!i && l) return 1;
        var s = (r = t.size) != null ? r : 0,
          u = (a = n.size) != null ? a : 0;
        return s > u ? -1 : s < u ? 1 : t.subject.localeCompare(n.subject);
      };
    }
    l.default = e;
  },
  98,
);
