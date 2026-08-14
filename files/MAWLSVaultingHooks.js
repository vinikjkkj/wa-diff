__d(
  "MAWLSVaultingHooks",
  ["ReStoreVaulting"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      onAfterEntriesNext: function (t) {
        var e = t.tableName,
          n = t.value;
        return o("ReStoreVaulting").maybeVaultDbRow(n, e);
      },
      onAfterGet: function (t) {
        var e = t.tableName,
          n = t.value;
        return o("ReStoreVaulting").maybeVaultDbRow(n, e);
      },
      onBeforeAdd: function (t) {
        var e = t.tableName,
          n = t.value;
        return o("ReStoreVaulting").maybeUnvaultDbRow(n, e);
      },
      onBeforeNotify: function (t) {
        var e = t.newValue,
          n = t.prevValue,
          r = t.tableName;
        return {
          newValue: o("ReStoreVaulting").maybeVaultDbRow(e, r),
          prevValue: o("ReStoreVaulting").maybeVaultDbRow(n, r),
        };
      },
      onBeforePut: function (t) {
        var e = t.tableName,
          n = t.value;
        return o("ReStoreVaulting").maybeUnvaultDbRow(n, e);
      },
      onBeforeUpsert: function (t) {
        var e = t.tableName,
          n = t.value;
        return o("ReStoreVaulting").maybeUnvaultDbRow(n, e);
      },
    };
    l.default = e;
  },
  98,
);
