__d(
  "WAWebGroupMetadataGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebGroupType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createGroupMetadataCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("subject"),
      f = u(
        function (e) {
          var t = e[0];
          return t === "";
        },
        [_],
      ),
      g = c("parentGroup"),
      h = c("isParentGroup"),
      y = c("defaultSubgroup"),
      C = c("generalSubgroup"),
      b = u(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return r === !0
            ? o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            : a === !0
              ? o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
              : t != null
                ? o("WAWebGroupType").GroupType.LINKED_SUBGROUP
                : n === !0
                  ? o("WAWebGroupType").GroupType.COMMUNITY
                  : o("WAWebGroupType").GroupType.DEFAULT;
        },
        [g, h, y, C],
      ),
      v = u(
        function (e) {
          var t = e[0];
          return t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        },
        [b],
      );
    ((l.clearGroupMetadataGetterCacheFor = m),
      (l.getGroupMetadataUnsafe = p),
      (l.getSubject = _),
      (l.getIsUnnamed = f),
      (l.getGroupType = b),
      (l.getIsCag = v));
  },
  98,
);
