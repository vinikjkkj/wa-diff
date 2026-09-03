__d(
  "WAWebUnjoinedSubgroupMetadataGetters",
  ["fbt", "WAWebGetters", "WAWebGettersCaches", "WAWebGroupType"],
  function (t, n, r, o, a, i, l, s) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache:
          o("WAWebGettersCaches").createUnjoinedSubgroupMetadataCache,
      }),
      u = e.clearCacheFor,
      c = e.computed,
      d = e.field,
      m = u,
      p = d("defaultSubgroup"),
      _ = d("generalSubgroup"),
      f = d("desc"),
      g = d("subject"),
      h = c(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === !0
            ? o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            : n === !0
              ? o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
              : o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
        },
        [p, _],
      ),
      y = c(
        function (e) {
          var t = e[0],
            n = e[1];
          return n ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
            (t == null || t === "")
            ? s
                ._(
                  /*BTDS*/ "Get the latest announcements from the admins of this community.",
                )
                .toString()
            : t;
        },
        [f, h],
      );
    ((l.clearUnjoinedSubgroupMetadataGetterCacheFor = m),
      (l.getSubject = g),
      (l.getGroupType = h),
      (l.getDisplayedDesc = y));
  },
  226,
);
