__d(
  "MAIBACompassMediaSelectionScope",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^[1-9][0-9]{0,19}$/;
    function l(t) {
      if (t == null || t === "") return null;
      try {
        var n = JSON.parse(t);
        if (n == null || typeof n != "object" || Array.isArray(n)) return null;
        var r = n.insight_unit_id,
          o = n.target_adset_id,
          a = n.target_ad_ids;
        if (
          n.version !== 1 ||
          typeof r != "string" ||
          !e.test(r) ||
          typeof o != "string" ||
          !e.test(o) ||
          !Array.isArray(a) ||
          a.length === 0 ||
          a.length > 100
        )
          return null;
        var i = [];
        for (var l of a) {
          if (typeof l != "string" || !e.test(l) || i.includes(l)) return null;
          i.push(l);
        }
        return {
          insight_unit_id: r,
          target_ad_ids: i,
          target_adset_id: o,
          version: 1,
        };
      } catch (e) {
        return null;
      }
    }
    i.parseCompassMediaSelectionScope = l;
  },
  66,
);
