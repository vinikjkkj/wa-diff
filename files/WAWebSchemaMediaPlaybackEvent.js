__d(
  "WAWebSchemaMediaPlaybackEvent",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addAutoIncrementingPrimaryKey,
        r = t.addColumn;
      e.add("media-playback-event")
        .version(
          o("WAWebModelStorageVersions").mediaPlaybackEventCreateTable(),
          [n("id"), r("event")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("media-playback-event");
    }
    ((l.addTable = e), (l.getMediaPlaybackEventTable = s));
  },
  98,
);
