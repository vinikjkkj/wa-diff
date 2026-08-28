__d(
  "AdsTypeaheadCampaignProviderPlugin",
  ["AdsTypeaheadCampaignDataManager", "LoadObject", "PaginationLoadObjectMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return new (r("PaginationLoadObjectMap"))(
            { after: null, searchableEntries: [] },
            r("AdsTypeaheadCampaignDataManager").load,
            function (e, n) {
              t(function (t) {
                var o = t
                  .get(e)
                  .getValueEnforcing()
                  .searchableEntries.concat(n.searchableEntries);
                return t.set(
                  e,
                  r("LoadObject").withValue(
                    { searchableEntries: o, after: n.after },
                    { creatorModuleID: i.id },
                  ),
                );
              });
            },
            function (e, n) {
              t(function (t) {
                return t.update(e, function (e) {
                  return e.setError(n).done();
                });
              });
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
