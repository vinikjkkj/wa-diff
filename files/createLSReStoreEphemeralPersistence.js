__d(
  "createLSReStoreEphemeralPersistence",
  [
    "LSReStoreQplLogger",
    "MAWCurrentUser",
    "createReStoreEphemeralPersistence",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("MAWCurrentUser").getID();
      return r("createReStoreEphemeralPersistence")(
        "LSEphemeral " + e,
        o("LSReStoreQplLogger").createQplLogger(r("qpl")._(25303045, "817")),
      );
    }
    l.createLSReStoreEphemeralPersistence = e;
  },
  98,
);
