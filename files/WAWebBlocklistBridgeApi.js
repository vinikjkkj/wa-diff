__d(
  "WAWebBlocklistBridgeApi",
  [
    "WAWebApiHydrateWidsUtil",
    "WAWebBlocklistCollection",
    "WAWebSchemaBlocklist",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      replaceBlocklist: function (t) {
        var e = t.wids;
        o("WAWebBlocklistCollection").BlocklistCollection.replaceAllWith(e);
      },
      restoreBlocklist: async function () {
        var e = await o("WAWebSchemaBlocklist").getBlocklistTable().all();
        (o("WAWebBlocklistCollection").BlocklistCollection.replaceAllWith([]),
          o("WAWebBlocklistCollection").BlocklistCollection.initializeFromCache(
            o("WAWebApiHydrateWidsUtil").hydrateWids(e),
          ));
      },
    };
    l.BlocklistBridgeApi = e;
  },
  98,
);
