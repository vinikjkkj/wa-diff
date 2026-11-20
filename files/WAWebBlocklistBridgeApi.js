__d(
  "WAWebBlocklistBridgeApi",
  [
    "WAWebApiHydrateWidsUtil",
    "WAWebBlocklistCollection",
    "WAWebSchemaBlocklist",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      replaceBlocklist: function (t) {
        var e = t.wids;
        (o("WAWebBlocklistCollection").BlocklistCollection.replaceAllWith(e),
          o("WAWebBlocklistCollection").BlocklistCollection.ensureContacts());
      },
      restoreBlocklist: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaBlocklist").getBlocklistTable().all();
          (o("WAWebBlocklistCollection").BlocklistCollection.replaceAllWith([]),
            o(
              "WAWebBlocklistCollection",
            ).BlocklistCollection.initializeFromCache(
              o("WAWebApiHydrateWidsUtil").hydrateWids(e),
            ),
            o("WAWebBlocklistCollection").BlocklistCollection.ensureContacts());
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.BlocklistBridgeApi = e;
  },
  98,
);
