__d(
  "AdsDSABeneficiaryAndPayorListProviderPlugin",
  [
    "AdsApplicationUtils",
    "AdsDSABeneficiaryAndPayorListDataLoader",
    "AdsEditingCampaignEditorContext",
    "AdsUEditorDSABeneficiaryAndPayorListLoadedAction",
    "AdsUEditorHostIDs",
    "LoadObject",
    "LoadObjectMap",
    "adsMgmtTrayStateSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            var n = new Map();
            e.forEach(function (e) {
              (n.set(e, r("LoadObject").loading({ creatorModuleID: i.id })),
                t(function (e) {
                  return e.merge(n);
                }),
                r("promiseDone")(
                  o(
                    "AdsDSABeneficiaryAndPayorListDataLoader",
                  ).loadDSABeneficiaryAndPayorList(e),
                  function (n) {
                    var a =
                      o("AdsApplicationUtils").isPowerEditor() &&
                      r("adsMgmtTrayStateSelector")() !== null;
                    if (a) {
                      var l = r("adsUEditorSelectedCampaignIDsSelector")(
                        r("AdsEditingCampaignEditorContext"),
                      );
                      r(
                        "AdsUEditorDSABeneficiaryAndPayorListLoadedAction",
                      ).dispatch(
                        {
                          campaignIDs: l,
                          accountID: e,
                          response: n,
                          hostID: r("AdsUEditorHostIDs").EDITING,
                        },
                        {
                          line: "58",
                          module:
                            "AdsDSABeneficiaryAndPayorListProviderPlugin.js",
                          moduleID: i.id,
                        },
                      );
                    }
                    t(function (t) {
                      return t.set(
                        e,
                        r("LoadObject").withValue(n, { creatorModuleID: i.id }),
                      );
                    });
                  },
                  function (n) {
                    t(function (t) {
                      return t.set(
                        e,
                        r("LoadObject").withError(n, { creatorModuleID: i.id }),
                      );
                    });
                  },
                ));
            });
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
