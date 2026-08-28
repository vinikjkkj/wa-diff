__d(
  "AdsPEAccountUtils",
  ["AdsAPIAccountConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.6,
      s = 0.8;
    function u() {
      var t = r("AdsAPIAccountConstants").MAX_ARCHIVED_OBJECTS_PER_TYPE;
      return {
        finalArchiveSize: t * e,
        hardArchiveLimit: t,
        warnArchiveSize: t * s,
      };
    }
    l.getArchiveInfo = u;
  },
  98,
);
