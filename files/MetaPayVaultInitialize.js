__d(
  "MetaPayVaultInitialize",
  ["MetaPayVaultInitializeMutation.graphql", "WorkerRelay"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WorkerRelay").createWorkerMutation(
        e !== void 0 ? e : (e = n("MetaPayVaultInitializeMutation.graphql")),
      ),
      u = s[0];
    function c() {
      return u({
        input: {
          platform_trust_token: "dummy-ptt",
          primary_access_key_fingerprint:
            "maw-debug-dummy-primary-access-key-fingerprint",
        },
      });
    }
    l.initializeMetaPayVault = c;
  },
  98,
);
