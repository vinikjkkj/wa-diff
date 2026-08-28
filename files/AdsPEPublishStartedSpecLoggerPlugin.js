__d(
  "AdsPEPublishStartedSpecLoggerPlugin",
  ["AdsDraftFragmentStore", "AdsInterfacesUsageLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          if (r("gkx")("21267")) {
            var e = new Map(),
              n = r("AdsDraftFragmentStore").getAllCached(t.fragmentIDs);
            for (var a of n) {
              var i = a[0],
                l = a[1];
              e.set(String(i), l);
            }
            o("AdsInterfacesUsageLogger").logPESpecPublishAction(e);
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
