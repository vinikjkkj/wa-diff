__d(
  "WAWebSchemaManifest",
  [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "manifest",
      s = Object.freeze({
        PREV_VERSION: "prev.version",
        CURR_VERSION: "curr.version",
        NEXT_VERSION: "next.version",
      }),
      u = o("WAWebStorageMutationBuilder").columnBuilder(),
      c = u.addColumn,
      d = u.addUserDefinedPrimaryKey;
    function m() {
      o("WAWebFtsStorageUtils")
        .getStorage()
        .add(e)
        .version(o("WAWebFtsStorageVersions").manifestCreateTable(), [
          d("key"),
          c("tokenizerVersion"),
          c("schemaVersion"),
          c("isCurrent"),
          c("lastMsgKeyViaFullIndexer"),
          c("isFullIndexingComplete"),
        ])
        .view(function (e) {
          return e || null;
        });
    }
    function p() {
      return o("WAWebFtsStorageUtils").getStorage().table(e);
    }
    ((l.ManifestKeys = s), (l.addTable = m), (l.getTable = p));
  },
  98,
);
