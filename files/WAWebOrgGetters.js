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
      _ = u("memberTagOptions"),
      f = u("isMemberDirectoryEnabled"),
      g = u("viewerRole");
    ((l.clearOrgGetterCacheFor = c),
      (l.getOrgName = d),
      (l.getOrgIconThumbUrl = m),
      (l.getOrgMemberCount = p),
      (l.getOrgMemberTagOptions = _),
      (l.getOrgIsMemberDirectoryEnabled = f),
      (l.getOrgViewerRole = g));
  },
  98,
);
