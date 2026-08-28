__d(
  "AdsAccountStoreUtils",
  ["DateTime", "DateUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "US",
      s = 1,
      u = 0,
      c = r("DateTime")
        .fromLegacyArgs(r("DateUtil").FACEBOOK_EPOCH * 1e3, u)
        .toISOString();
    ((l.DEFAULT_COUNTRY = e), (l.PST_TIMEZONE_ID = s), (l.FACEBOOK_EPOCH = c));
  },
  98,
);
