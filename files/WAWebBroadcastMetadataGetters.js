__d(
  "WAWebBroadcastMetadataGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createBroadcastMetadataCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("customAudienceFbid");
    ((l.clearBroadcastMetadataGetterCacheFor = c),
      (l.getCustomAudienceFbid = d));
  },
  98,
);
