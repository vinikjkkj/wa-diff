__d(
  "AdsDSASetBeneficiaryAndPayorListReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.accountID,
            o = n.response;
          return t.set(
            e,
            r("LoadObject").withValue(o, { creatorModuleID: i.id }),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
