__d(
  "WAWebSignalStorageVersions",
  ["WAWebSignalStorageUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebSignalStorageUtils").getStorage().versions.version(0);
    }
    function s() {
      return o("WAWebSignalStorageUtils").getStorage().versions.version(1);
    }
    function u() {
      return o("WAWebSignalStorageUtils").getStorage().versions.version(2);
    }
    function c() {
      return o("WAWebSignalStorageUtils").getStorage().versions.version(3);
    }
    function d() {
      return o("WAWebSignalStorageUtils").getStorage().versions.version(4);
    }
    function m() {
      return o("WAWebSignalStorageUtils").getStorage().versions.version(5);
    }
    function p() {
      return o("WAWebSignalStorageUtils").getStorage().versions.version(6);
    }
    ((l.identityCreateTable = e),
      (l.metaCreateTable = s),
      (l.preKeyCreateTable = u),
      (l.sessionCreateTable = c),
      (l.signedPreKeyCreateTable = d),
      (l.baseKeyCreateTable = m),
      (l.senderKeyCreateTable = p));
  },
  98,
);
