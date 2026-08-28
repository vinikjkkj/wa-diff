__d(
  "AdsMgmtAdgroupDynamicFieldGranularProviderPlugin",
  [
    "AdsDynamicAdObjectDataManager",
    "FieldGranularLoadObjectMap",
    "adsCopyEffectiveAuthorizationCategorytoAuthorizationCategory",
    "adsCopyEffectiveOSIDtoOSID",
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
              return o("AdsDynamicAdObjectDataManager").loadAdgroups(a, n);
            },
            function (e, t) {
              n(function (n) {
                return n.setLoadingWithClearKeysForThisFrame(e, t);
              });
            },
            function (e) {
              n(function (t) {
                return t.mergeFieldGranular(e);
              });
            },
            function (e) {
              return e.key + ":" + e.field;
            },
            e,
            function (e) {
              return (
                r("adsCopyEffectiveOSIDtoOSID")(e),
                r(
                  "adsCopyEffectiveAuthorizationCategorytoAuthorizationCategory",
                )(e),
                e
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
