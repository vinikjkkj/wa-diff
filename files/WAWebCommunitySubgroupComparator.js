__d(
  "WAWebCommunitySubgroupComparator",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return e.announcementGroup === !0
        ? -1
        : t.announcementGroup === !0
          ? 1
          : e.name.toLowerCase().localeCompare(t.name.toLowerCase());
    }
    i.SubgroupComparator = e;
  },
  66,
);
