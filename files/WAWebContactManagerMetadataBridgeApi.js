__d(
  "WAWebContactManagerMetadataBridgeApi",
  ["WAWebContactManagerMetadataChangeNotifier"],
  function (t, n, r, o, a, i, l) {
    var e = {
      contactManagerMetadataChanged: function (t) {
        var e = t.metadataJids;
        o(
          "WAWebContactManagerMetadataChangeNotifier",
        ).notifyContactManagerMetadataChanged(e);
      },
    };
    l.ContactManagerMetadataBridgeApi = e;
  },
  98,
);
