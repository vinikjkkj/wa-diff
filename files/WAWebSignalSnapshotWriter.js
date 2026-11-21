__d(
  "WAWebSignalSnapshotWriter",
  ["WAWebSignalProtocolStore"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .commitSnapshot(e, t);
    }
    l.writeSignalSnapshot = e;
  },
  98,
);
