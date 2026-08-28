__d(
  "AdsMgmtCampaignDynamicFieldGranularProviderPlugin",
  [
    "AdsCampaignPlacementsFieldsValueHelper",
    "AdsDynamicAdObjectDataManager",
    "AdsPENumericStringFieldUtils",
    "FieldGranularLoadObjectMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = {
        initialState: function (n) {
          return new (r("FieldGranularLoadObjectMap"))(
            function (e) {
              var t = r("FieldGranularLoadObjectMap").splitKeyFieldPairs(e),
                n = t.fields,
                a = t.keys;
              return o("AdsDynamicAdObjectDataManager").loadCampaigns(a, n);
            },
            function (e, t) {
              n(function (n) {
                return n.setLoadingWithClearKeysForThisFrame(e, t);
              });
            },
            function (e) {
              return n(function (t) {
                return t.mergeFieldGranular(e);
              });
            },
            function (e) {
              return e.key + ":" + e.field;
            },
            e,
            function (e) {
              var t = o(
                "AdsPENumericStringFieldUtils",
              ).convertPartialCampaignNumericStringFields(e);
              return (
                o(
                  "AdsCampaignPlacementsFieldsValueHelper",
                ).fixPlacementsDestructive(t),
                t
              );
            },
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
