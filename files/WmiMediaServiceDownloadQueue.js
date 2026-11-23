__d(
  "WmiMediaServiceDownloadQueue",
  ["WormPersistedQueue", "WormPersistedQueueDef"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        o("WormPersistedQueueDef").BASE_QUEUE_STORE,
        {
          indexes: { attemptCount: { fields: ["attemptCount"], unique: !1 } },
          nonEncryptedFields: ["attemptCount"],
        },
      ),
      s = o("WormPersistedQueue").defineWormPersistedQueue(
        "mediaDownloadQueue",
        e,
      );
    function u(e) {
      return o("WormPersistedQueueDef").toWormPersistedQueueId(e);
    }
    ((l.MEDIA_DOWNLOAD_QUEUE = s), (l.generateDownloadQueueId = u));
  },
  98,
);
