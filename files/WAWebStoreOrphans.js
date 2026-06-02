__d(
  "WAWebStoreOrphans",
  ["WAWebAddonProcessMsgsUtils", "WAWebDBStoreMessageOrphans"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      e.length !== 0 &&
        (await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
          e,
          function (e) {
            return o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
          },
        ));
    }
    l.storeOrphans = e;
  },
  98,
);
