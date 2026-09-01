__d(
  "WAWebAddonDeletionQueueDef",
  ["WAWormQueueDef"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, o("WAWormQueueDef").WA_WORM_QUEUE_STORE, {
        indexes: {},
      }),
      s = o("WAWormQueueDef").defineWAWormQueue("addonDeletion", e);
    ((l.ADDON_DELETION_QUEUE_STORE = e), (l.ADDON_DELETION_QUEUE = s));
  },
  98,
);
