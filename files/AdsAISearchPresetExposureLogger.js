__d(
  "AdsAISearchPresetExposureLogger",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap();
    function s(t) {
      var n;
      return (n = e.get(t)) != null ? n : null;
    }
    function u() {
      var t = new Set();
      return function (n) {
        var o,
          a = n.defaultRank,
          i = n.entry,
          l = n.exposureID,
          s = n.presetID,
          u = n.prrRank,
          c = n.rankingResolved,
          d = n.slot,
          m = n.source;
        if (s !== "freeform") {
          i != null && e.set(i, l);
          var p = l + ":" + s + ":" + m;
          t.has(p) ||
            (t.add(p),
            r("AdsInterfacesLogger").log({
              eventName: "ai_search_preset_shown",
              eventCategory: "impression",
              data:
                ((o = {}),
                (o.custom_event_type = s),
                (o.default_rank = a != null ? a : d),
                (o.prr_rank = u != null ? u : d),
                (o.ranking_resolved = c),
                (o.recommendation_rank = d),
                (o.session_id = l),
                (o.source = m),
                o),
            }));
        }
      };
    }
    ((l.getQualifiedPresetExposureID = s),
      (l.createQualifiedPresetExposureLogger = u));
  },
  98,
);
