__d(
  "adsCFCampaignGroupRecordSelector",
  [
    "invariant",
    "AdsCFActiveCampaignGroupIDProvider",
    "AdsCFCampaignGroupRecordProvider",
    "adsCreateSelector",
    "adsStoreToSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("AdsCFCampaignGroupRecordProvider").toFluxStore(),
      u = r("AdsCFActiveCampaignGroupIDProvider").toFluxSelector(),
      c = r("adsCreateSelector")(
        [r("adsStoreToSelector")(e), u],
        function (t, n) {
          var e = n.first();
          e != null || s(0, 13145);
          var r = t.get(e);
          return (
            r != null || s(0, 13146, e, t.keySeq().toJSON()),
            r.hasValue() === !0 || s(0, 13144, e),
            r.getValueEnforcing()
          );
        },
        { name: i.id },
      ),
      d = c;
    l.default = d;
  },
  98,
);
