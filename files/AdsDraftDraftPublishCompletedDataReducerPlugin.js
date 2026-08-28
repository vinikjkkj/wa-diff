__d(
  "AdsDraftDraftPublishCompletedDataReducerPlugin",
  ["AdsApplicationUtils", "AdsInstreamVideosDefaultOptInDuplicationStoreState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return o("AdsApplicationUtils").isPowerEditor()
            ? new (r("AdsInstreamVideosDefaultOptInDuplicationStoreState"))()
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
