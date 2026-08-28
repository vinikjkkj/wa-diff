__d(
  "AdsUEditorDSASetDefaultBeneficiaryAndPayorReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorDSABeneficiaryAndPayorListLoadedActionFlux",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "maybeUpdateCampaignDSASpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            autofillValues: o("adsDSABeneficiaryAndPayorAutofillValuesSelector")
              .adsDSABeneficiaryAndPayorAutofillValuesSelector,
          },
          function (e, t, n) {
            var a = t.campaignIDs,
              i = n.autofillValues;
            return o("AdsMutators").mutateEach(e, a, function (e) {
              var t;
              return r("maybeUpdateCampaignDSASpec")(e, {
                defaultDSABeneficiary: i.beneficiary,
                defaultDSAPayor: i.payor,
                locationApiSpec:
                  (t = e.targeting) == null || (t = t.geo_locations) == null
                    ? void 0
                    : t.toJS(),
              });
            });
          },
          r("AdsUEditorDSABeneficiaryAndPayorListLoadedActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
