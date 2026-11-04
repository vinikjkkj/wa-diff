__d(
  "WAWebLabyrinthDebugStores",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        backup: { indexes: {}, primaryKey: "id", secure: !0 },
        companionOnboarding: { indexes: {}, primaryKey: "id", secure: !0 },
        device: { indexes: {}, primaryKey: "id", secure: !0 },
        epoch: { indexes: {}, primaryKey: "serverEpochId", secure: !0 },
      },
      l = "current";
    ((i.LABYRINTH_DEBUG_SCHEMA = e), (i.LABYRINTH_DEBUG_SINGLETON_ID = l));
  },
  66,
);
