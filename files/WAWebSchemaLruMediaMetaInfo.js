__d(
  "WAWebSchemaLruMediaMetaInfo",
  ["WAWebLruMediaStorageUtils", "WAWebStorageMutationBuilder"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "id",
      u = "timestamp",
      c = "size",
      d = "lru-media-meta-info",
      m = o("WAWebStorageMutationBuilder").columnBuilder(),
      p = m.addColumn,
      _ = m.addIndex,
      f = m.addUserDefinedPrimaryKey;
    (e = o("WAWebLruMediaStorageUtils"))
      .getStorage()
      .add(d)
      .version(e.getStorage().versions.version(1), [f(s), p(u), _(u)])
      .version(e.getStorage().versions.version(2), [p(c)])
      .view(function (e) {
        var t = { id: e.id, timestamp: e.timestamp, size: e.size || 0 };
        return t;
      });
    var g = e.getStorage().table(d);
    ((l.metaInfoPrimaryIndex = s),
      (l.metaInfoDateIndex = u),
      (l.metaInfoSizeIndex = c),
      (l.IdbMetaInfoTable = g));
  },
  98,
);
