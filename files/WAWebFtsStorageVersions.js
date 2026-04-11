__d(
  "WAWebFtsStorageVersions",
  ["WAWebFtsStorageUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(0);
    }
    function s() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(1);
    }
    function u() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(2);
    }
    function c() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(3);
    }
    function d() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(4);
    }
    function m() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(5);
    }
    function p() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(6);
    }
    function _() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(7);
    }
    function f() {
      return o("WAWebFtsStorageUtils").getStorage().versions.version(8);
    }
    ((l.ftsV1IndexCreateTable = e),
      (l.manifestCreateTable = s),
      (l.purgeRangeQueueCreateTable = u),
      (l.ftsV2IndexCreateTable = c),
      (l.ftsV2TokenToPrefixesCreateTable = d),
      (l.ftsV3IndexCreateTable = m),
      (l.ftsV1DeleteAndDeprecate = p),
      (l.ftsV2Delete = _),
      (l.ftsV2DeleteTokenPrefixes = f));
  },
  98,
);
