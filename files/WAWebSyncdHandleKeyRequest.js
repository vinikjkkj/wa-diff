__d(
  "WAWebSyncdHandleKeyRequest",
  ["WAWebGetSyncKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = [],
        n = [];
      return (
        await Promise.all(
          e.map(async function (e) {
            var r =
              await o("WAWebGetSyncKey").getSyncKeyInTransaction_DO_NOT_USE(e);
            r ? t.push(r) : n.push(e);
          }),
        ),
        { keys: t, orphanKeys: n }
      );
    }
    l.getKeysForKeyRequest = e;
  },
  98,
);
