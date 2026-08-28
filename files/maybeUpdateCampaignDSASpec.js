__d(
  "maybeUpdateCampaignDSASpec",
  ["AdsCampaignRecordAccessors", "adsDSALocationUtils", "isEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var a = n.defaultDSABeneficiary,
        i = n.defaultDSAPayor,
        l = n.locationApiSpec,
        s = o("adsDSALocationUtils").areLocationsRequireDSA(l),
        u = t;
      return s
        ? ((e || (e = r("isEmpty")))(t == null ? void 0 : t.dsa_beneficiary) &&
            a != null &&
            (u = r("AdsCampaignRecordAccessors").dsa_beneficiary.set(a, u)),
          (e || (e = r("isEmpty")))(t == null ? void 0 : t.dsa_payor) &&
            i != null &&
            (u = r("AdsCampaignRecordAccessors").dsa_payor.set(i, u)),
          u)
        : (t.dsa_beneficiary != null &&
            ((u = r("AdsCampaignRecordAccessors").dsa_beneficiary.set("", u)),
            t.dsa_payor != null &&
              (u = r("AdsCampaignRecordAccessors").dsa_payor.set("", u))),
          u);
    }
    l.default = s;
  },
  98,
);
