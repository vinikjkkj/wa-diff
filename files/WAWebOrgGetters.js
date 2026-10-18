__d(
  "WAWebOrgGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createOrgCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("name"),
      m = u("iconThumbUrl"),
      p = u("memberCount"),
      _ = u("memberTagOptions");
    ((l.clearOrgGetterCacheFor = c),
      (l.getOrgName = d),
      (l.getOrgIconThumbUrl = m),
      (l.getOrgMemberCount = p),
      (l.getOrgMemberTagOptions = _));
  },
  98,
);
