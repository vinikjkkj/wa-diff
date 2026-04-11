__d(
  "WAWebDataSharing3pdLidBridgeApi",
  ["WAWebDataSharing3pdLidCollection", "WAWebSchemaDataSharing3pdLidV2"],
  function (t, n, r, o, a, i, l) {
    var e = {
      restoreDataSharing3pdLid: function () {
        return o("WAWebSchemaDataSharing3pdLidV2")
          .getDataSharing3pdLidTable()
          .all()
          .then(function (e) {
            o(
              "WAWebDataSharing3pdLidCollection",
            ).DataSharing3pdLidCollection.initializeFromCache(e);
          });
      },
    };
    l.DataSharing3pdLidBridgeApi = e;
  },
  98,
);
