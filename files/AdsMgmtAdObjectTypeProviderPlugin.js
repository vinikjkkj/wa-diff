__d(
  "AdsMgmtAdObjectTypeProviderPlugin",
  ["AdsObjectTypes", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        initialState: (e = r("immutable")).Map([
          [r("AdsObjectTypes").CAMPAIGN_GROUP, e.Set()],
          [r("AdsObjectTypes").CAMPAIGN, e.Set()],
          [r("AdsObjectTypes").ADGROUP, e.Set()],
        ]),
      },
      u = s;
    l.default = u;
  },
  98,
);
