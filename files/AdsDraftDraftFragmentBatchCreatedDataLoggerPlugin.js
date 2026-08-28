__d(
  "AdsDraftDraftFragmentBatchCreatedDataLoggerPlugin",
  ["AdsInterfacesUsageLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          o("AdsInterfacesUsageLogger").logPESpecCreationAction(t.fragments);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
