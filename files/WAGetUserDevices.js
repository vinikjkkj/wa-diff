__d(
  "WAGetUserDevices",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    async function e(e, t) {
      var n = await t.storage.bulkLoadIdentities(e);
      return Array.from(n).flatMap(function (e) {
        var t = e[1];
        return Array.from(t.keys());
      });
    }
    i.getUserDevices = e;
  },
  66,
);
