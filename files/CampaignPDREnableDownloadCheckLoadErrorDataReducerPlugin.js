__d(
  "CampaignPDREnableDownloadCheckLoadErrorDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.setSingleValueOrError(n.queryParameters, n.error);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
