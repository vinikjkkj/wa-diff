__d(
  "AdsBidUtils",
  [
    "fbt",
    "AdsAPIBidInfoFieldsLabels",
    "AdsAPIBidType",
    "AdsBidOptions",
    "AdsBidTypes",
    "AdsPEImportExportConstants",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = {};
    ((m[(e = r("AdsBidTypes")).BID_TYPE_MULTI_PREMIUM] = {
      apiValue: (u = r("AdsAPIBidType")).MULTI_PREMIUM,
      text: s._(/*BTDS*/ "Multi premium"),
      value: e.BID_TYPE_MULTI_PREMIUM,
      tabSeparated: [
        (c = r("AdsPEImportExportConstants")).Bid.MULTI_PREMIUM,
        "multi premium",
        "multi_premium",
      ],
      bidOption: (d = r("AdsBidOptions")).IMPRESSIONS,
    }),
      (m[e.BID_TYPE_FCPM] = {
        apiValue: u.FIXED_CPM,
        text: s._(/*BTDS*/ "FCPM"),
        value: e.BID_TYPE_FCPM,
        tabSeparated: [c.Bid.FIXED_CPM, "cpm_fixed"],
        bidOption: d.IMPRESSIONS,
      }),
      (m[e.BID_TYPE_CPC] = {
        apiValue: u.CPC,
        text: s._(/*BTDS*/ "CPC"),
        value: e.BID_TYPE_CPC,
        tabSeparated: [c.Bid.CPC],
        bidOption: d.CLICKS,
      }),
      (m[e.BID_TYPE_CPM] = {
        apiValue: u.CPM,
        text: s._(/*BTDS*/ "CPM"),
        value: e.BID_TYPE_CPM,
        tabSeparated: [c.Bid.CPM],
        bidOption: d.IMPRESSIONS,
      }),
      (m[e.BID_TYPE_MULTI_ABSOLUTE] = {
        apiValue: u.ABSOLUTE_OCPM,
        text: s._(/*BTDS*/ "Optimized CPM"),
        value: e.BID_TYPE_MULTI_ABSOLUTE,
        tabSeparated: [c.Bid.ABSOLUTE_OCPM, "multi_absolute"],
        bidOption: d.IMPRESSIONS,
      }),
      (m[e.BID_TYPE_CPA] = {
        apiValue: u.CPA,
        text: s._(/*BTDS*/ "CPA"),
        value: e.BID_TYPE_CPA,
        tabSeparated: [c.Bid.CPA],
        bidOption: d.OCPM_ACTIONS,
      }));
    var p = {};
    for (var _ in m)
      if (Object.prototype.hasOwnProperty.call(m, _)) {
        var f = m[_];
        f.tabSeparated.forEach(function (e) {
          p[e] = f;
        });
      }
    var g = 5;
    function h(e) {
      switch (e) {
        case r("AdsAPIBidType").ABSOLUTE_OCPM:
          return s._(/*BTDS*/ "Optimized CPM");
        case r("AdsAPIBidType").CPA:
          return s._(/*BTDS*/ "CPA");
        case r("AdsAPIBidType").CPC:
          return s._(/*BTDS*/ "CPC");
        case r("AdsAPIBidType").CPM:
          return s._(/*BTDS*/ "CPM");
        case r("AdsAPIBidType").FIXED_CPM:
          return s._(/*BTDS*/ "FCPM");
        case r("AdsAPIBidType").FIXED_PRICING:
          return s._(/*BTDS*/ "FCPC");
        case r("AdsAPIBidType").MULTI_PREMIUM:
          return s._(/*BTDS*/ "Multi");
        case r("AdsAPIBidType").RELATIVE_OCPM:
          return s._(/*BTDS*/ "Optimized CPM");
        case r("AdsAPIBidType").RTB:
          return s._(/*BTDS*/ "CPM RTB");
        default:
          return "";
      }
    }
    function y(e) {
      return r("AdsAPIBidInfoFieldsLabels")[e] || e;
    }
    function C(e) {
      var t = R(e);
      return m[t];
    }
    function b() {
      return s._(/*BTDS*/ "Auto");
    }
    function v() {
      return s._(/*BTDS*/ "Highest value");
    }
    function S() {
      return s._(/*BTDS*/ "Minimum ROAS");
    }
    function R(e) {
      var t = r("AdsAPIBidType");
      if (t[e]) {
        var n = t[e];
        return +r("AdsBidTypes").REVERSE_MIGRATION_MAP[n];
      }
      return +e;
    }
    ((l.RANGE_THRESHOLD = g),
      (l.getBidTypeString = h),
      (l.getBidInfoFieldLabel = y),
      (l.getBidTypeInfo = C),
      (l.getAutoLabel = b),
      (l.getHighestValueLabel = v),
      (l.getMinimumROASLabel = S),
      (l.bidTypeToLegacyValue = R));
  },
  226,
);
