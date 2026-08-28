__d(
  "AdsBidTypes",
  ["AdsAPIBidType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        BID_TYPE_CPC: 1,
        BID_TYPE_CPM: 2,
        BID_TYPE_FCPM: 4,
        BID_TYPE_MULTI_PREMIUM: 5,
        BID_TYPE_MULTI_RELATIVE: 6,
        BID_TYPE_MULTI_ABSOLUTE: 7,
        BID_TYPE_CPM_RTB: 8,
        BID_TYPE_CPA: 9,
        MIGRATION_MAP: {},
        REVERSE_MIGRATION_MAP: {},
      },
      u = s.MIGRATION_MAP,
      c = s.REVERSE_MIGRATION_MAP;
    ((u[String(s.BID_TYPE_CPC)] = (e = r("AdsAPIBidType")).CPC),
      (u[String(s.BID_TYPE_CPM)] = e.CPM),
      (u[String(s.BID_TYPE_FCPM)] = e.FIXED_CPM),
      (u[String(s.BID_TYPE_MULTI_PREMIUM)] = e.MULTI_PREMIUM),
      (u[String(s.BID_TYPE_MULTI_RELATIVE)] = e.RELATIVE_OCPM),
      (u[String(s.BID_TYPE_MULTI_ABSOLUTE)] = e.ABSOLUTE_OCPM),
      (u[String(s.BID_TYPE_CPM_RTB)] = e.RTB),
      (u[String(s.BID_TYPE_CPA)] = e.CPA));
    for (var d in u) c[u[d]] = d;
    var m = s;
    l.default = m;
  },
  98,
);
