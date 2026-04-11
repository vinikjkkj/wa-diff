__d(
  "WAWebSchemaDeviceList",
  ["WAWebModelStorageUtils", "WAWebModelStorageVersions"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage();
      e.add_OPTIMIZED_EXPERIMENT("device-list", function (e, t) {
        var n = t.addColumn,
          r = t.addUserDefinedPrimaryKey;
        return e
          .version(o("WAWebModelStorageVersions").deviceListCreateTable(), [
            r("id"),
            n("devices"),
            n("rawId"),
            n("timestamp"),
            n("validIndexes"),
            n("currentIndex"),
          ])
          .version(o("WAWebModelStorageVersions").deviceListAddDelete(), [
            n("deleted"),
            n("deletedChangedToHost"),
          ])
          .version(o("WAWebModelStorageVersions").deviceListAddV2Fields(), [
            n("expectedTs"),
            n("expectedTsLastDeviceJobTs"),
            n("expectedTsUpdateTs"),
            n("advAccountType"),
          ])
          .view(function (e) {
            return e;
          })
          .commit();
      });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("device-list");
    }
    ((l.addTable = e), (l.getDeviceListTable = s));
  },
  98,
);
