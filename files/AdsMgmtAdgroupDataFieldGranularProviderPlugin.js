__d(
  "AdsMgmtAdgroupDataFieldGranularProviderPlugin",
  [
    "AdsDynamicAdObjectDataManager",
    "FieldGranularLoadObjectMap_New",
    "adsCopyEffectiveAuthorizationCategorytoAuthorizationCategory",
    "adsCopyEffectiveOSIDtoOSID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 20,
      s = {
        initialState: function (n) {
          var t = function (t) {
              var e = r("FieldGranularLoadObjectMap_New").splitKeyFieldPairs(t),
                n = e.fields,
                a = e.keys;
              return o("AdsDynamicAdObjectDataManager").loadAdgroups(
                a,
                n,
                "AdsPEAdObjectTableDataManager",
              );
            },
            a = function (t, r) {
              n(function (e) {
                return e.setLoadingWithClearKeysForThisFrame(t, r);
              });
            },
            i = function (t) {
              n(function (e) {
                return e.mergeFieldGranular(t);
              });
            },
            l = function (t) {
              return t.key + ":" + t.field;
            },
            s = function (t) {
              return (
                r("adsCopyEffectiveOSIDtoOSID")(t),
                r(
                  "adsCopyEffectiveAuthorizationCategorytoAuthorizationCategory",
                )(t),
                t
              );
            };
          return new (r("FieldGranularLoadObjectMap_New"))(t, a, i, l, e, s);
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
