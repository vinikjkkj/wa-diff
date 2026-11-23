__d(
  "MAWMpsEbMetadata",
  ["EBMessageMetadataCache"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.success ? e.value : null;
    }
    var s = function (n) {
        return e(o("EBMessageMetadataCache").getEBMetadataFromCache(n));
      },
      u = async function (n) {
        return e(await o("EBMessageMetadataCache").fetchEBMetadata(n));
      };
    ((l.MAWMpsGetEbMetadataFromCache = s), (l.MAWMpsFetchEbMetadata = u));
  },
  98,
);
