__d(
  "CampaignPDREnableDownloadCheckLoadSuccessDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.setSingleValueOrError(
            n.queryParameters,
            n.enableDownloadButton,
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
