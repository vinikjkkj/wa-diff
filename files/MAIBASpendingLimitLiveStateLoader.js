__d(
  "MAIBASpendingLimitLiveStateLoader",
  ["AdsGraphAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .setPriority("HIGH")
        .get({ fields: ["currency", "spend_cap"] });
    }
    l.loadMAIBASpendingLimitLiveState = e;
  },
  98,
);
