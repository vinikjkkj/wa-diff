__d(
  "WAWebKmpLidMutationHelper",
  ["Promise", "WAWebLid1X1MigrationGating", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.isLidMigrated();
    }
    var u = {
      isLidMutationEnabled: s,
      migrateMutationToLidIfNeeded: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e;
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      findPhoneJidKeyStringFromMutation: function (r) {
        return (e || (e = n("Promise"))).resolve(null);
      },
    };
    l.lidMutationHelper = u;
  },
  98,
);
