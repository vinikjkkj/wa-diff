__d(
  "ZenonIdentityStoreFactory",
  ["ZenonAlwaysTrustIdentityStore", "ZenonMAWIdentityStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e
        ? o("ZenonMAWIdentityStore").createNewMAWIdentityStore(t)
        : o("ZenonAlwaysTrustIdentityStore").createNewAlwaysTrustIdentityStore(
            t,
          );
    }
    var s = { create: e };
    l.ZenonIdentityStoreFactory = s;
  },
  98,
);
