__d(
  "WAWebKmpLidMutationHelper",
  ["WAWebLid1X1MigrationGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.isLidMigrated();
    }
    var s = {
      isLidMutationEnabled: e,
      migrateMutationToLidIfNeeded: async function (t) {
        return t;
      },
      findPhoneJidKeyStringFromMutation: function (t) {
        return Promise.resolve(null);
      },
    };
    l.lidMutationHelper = s;
  },
  98,
);
