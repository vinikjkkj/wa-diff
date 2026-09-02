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
      m = e.unsafeIdentityGetter,
      p = u,
      _ = m,
      f = d("defaultSubgroup"),
      g = d("generalSubgroup"),
      h = d("desc"),
      y = d("subject"),
      C = c(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === !0
            ? o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            : n === !0
              ? o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
              : o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
        },
        [f, g],
      ),
      b = c(
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
        [h, C],
      );
    ((l.clearUnjoinedSubgroupMetadataGetterCacheFor = p),
      (l.getUnjoinedSubgroupMetadataUnsafe = _),
      (l.getDefaultSubgroup = f),
      (l.getGeneralSubgroup = g),
      (l.getDesc = h),
      (l.getSubject = y),
      (l.getGroupType = C),
      (l.getDisplayedDesc = b));
  },
  226,
);
