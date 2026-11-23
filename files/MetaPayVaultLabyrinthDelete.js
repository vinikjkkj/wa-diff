__d(
  "MetaPayVaultLabyrinthDelete",
  ["FBLogger", "MetaPayVaultLabyrinthDeleteMutation.graphql", "WorkerRelay"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WorkerRelay").createWorkerMutation(
        e !== void 0
          ? e
          : (e = n("MetaPayVaultLabyrinthDeleteMutation.graphql")),
      ),
      c = u[0],
      d = "maw-debug-dummy-primary-access-key-fingerprint";
    function m() {
      return (
        r("FBLogger")("messaging_eb")
          .tags(["payment_labyrinth"])
          .DEBUG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "deleting Meta Pay Vault for Payment Labyrinth debug reset",
              ])),
          ),
        c({
          input: {
            device_key_fingerprint: d,
            platform_trust_token: "dummy-ptt",
          },
        })
      );
    }
    l.deleteLabyrinthVault = m;
  },
  98,
);
