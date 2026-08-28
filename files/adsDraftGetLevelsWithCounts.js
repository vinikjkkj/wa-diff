__d(
  "adsDraftGetLevelsWithCounts",
  ["AdAsyncRequestStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          var n = e.ad_object_type,
            o = e.status;
          t[n] || (t[n] = { success: 0, error: 0 });
          var a = o === r("AdAsyncRequestStatus").SUCCESS;
          a ? (t[n].success += 1) : (t[n].error += 1);
        }),
        t
      );
    }
    l.default = e;
  },
  98,
);
