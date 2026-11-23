__d(
  "WACreateGroup",
  ["WADbPersonalSenderKeyStatusTxns", "WAGlobals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      (await o("WAGlobals").getDependencies().createGroups(t),
        await o(
          "WADbPersonalSenderKeyStatusTxns",
        ).bulkPutNewPersonalSenderKeyStatus(
          t.map(function (e) {
            return e.groupToCreate.jid;
          }),
        ));
    };
    l.createGroups = e;
  },
  98,
);
