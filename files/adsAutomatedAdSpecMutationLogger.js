__d(
  "adsAutomatedAdSpecMutationLogger",
  ["AdsInterfacesLogger", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_automated_ad_spec_mutation",
        data:
          ((a = {}),
          (a.sub_event = e),
          (a.object_level = t != null ? t.adObjectLevel : null),
          (a.eligible_ad_object_ids = t != null ? t.adObjectIDs : null),
          (a.metadata = n),
          (a.product_types = o != null ? Array.from(o) : null),
          a),
      });
    }
    function s(t, n, r, o, a, i, l, s) {
      var u = JSON.stringify({
        ongoingInteraction: i,
        isPublishedAdObjectMutation: l,
        hasActualMutations: s,
      });
      (e(t, null, u, n),
        r != null && e(t, { adObjectLevel: "campaign", adObjectIDs: r }),
        o != null && e(t, { adObjectLevel: "ad_set", adObjectIDs: o }),
        a != null && e(t, { adObjectLevel: "ad", adObjectIDs: a }));
    }
    function u(e) {
      r("FBLogger")("unintended_ad_spec_mutation").warn(
        "Infinite loops, use case: %s",
        e,
      );
    }
    ((l.logMutation = s), (l.logMutationInfiniteLoops = u));
  },
  98,
);
