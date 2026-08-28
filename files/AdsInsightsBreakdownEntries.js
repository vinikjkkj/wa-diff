__d(
  "AdsInsightsBreakdownEntries",
  [
    "invariant",
    "AdsInsightsBreakdownEntryConfig",
    "AdsInsightsBreakdownEntryGroups",
    "memoize",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("memoize")(o("AdsInsightsBreakdownEntryConfig").build),
      u = r("memoize")(function () {
        return Object.keys(e().configsByID);
      });
    function c(e) {
      var t = m(e);
      return (t || s(0, 1898, e), t);
    }
    function d(t) {
      var n = e(),
        r = n.configsByID,
        o = t.indexOf(",") === -1 ? t : t.split(",").sort().join(",");
      return Object.prototype.hasOwnProperty.call(r, o);
    }
    function m(t) {
      var n = e(),
        r = n.configsByID,
        o = t.indexOf(",") === -1 ? t : t.split(",").sort().join(",");
      return r[o];
    }
    function p() {
      return e().entriesByType;
    }
    function _(e) {
      return m(e) != null;
    }
    function f(e) {
      return p().asset.includes(e);
    }
    function g() {
      var e;
      return [
        (e = r("AdsInsightsBreakdownEntryGroups")).ACTION,
        e.ASSET,
        e.DEMOGRAPHICS,
        e.GEOGRAPHY,
        e.IMPRESSION,
        e.TIME,
        e.OBJECT,
        e.CREATIVE,
        e.ATTRIBUTION_SETTING_BREAKDOWNS,
      ];
    }
    ((l.getAllEntries = u),
      (l.getConfig = c),
      (l.hasConfig = d),
      (l.getConfigOrNull = m),
      (l.getEntriesByType = p),
      (l.isValid = _),
      (l.isAssetEntry = f),
      (l.getTypes = g),
      (l.makeID = o("AdsInsightsBreakdownEntryConfig").makeID));
  },
  98,
);
