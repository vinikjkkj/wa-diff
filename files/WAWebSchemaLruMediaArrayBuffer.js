__d(
  "WAWebSchemaLruMediaArrayBuffer",
  ["WAWebLruMediaStorageUtils", "WAWebStorageMutationBuilder"],
  function (t, n, r, o, a, i, l) {
    var e = "id",
      s = "data",
      u = "lru-media-array-buffer",
      c = o("WAWebStorageMutationBuilder").columnBuilder(),
      d = c.addColumn,
      m = c.addUserDefinedPrimaryKey;
    o("WAWebLruMediaStorageUtils")
      .getStorage()
      .add(u)
      .version(
        o("WAWebLruMediaStorageUtils").getStorage().versions.version(0),
        [m(e), d(s)],
      )
      .view(function (t) {
        var n = { id: t[e], data: t[s] };
        return n;
      });
    var p = o("WAWebLruMediaStorageUtils").getStorage().table(u);
    l.IdbArrayBufferTable = p;
  },
  98,
);
