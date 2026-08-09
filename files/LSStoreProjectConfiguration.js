__d(
  "LSStoreProjectConfiguration",
  ["LSBase64Decode.nop", "LSIssueNewTask"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (o) {
              return t
                .nativeOperation(n("LSBase64Decode.nop"), e[4])
                .then(function (e) {
                  var t;
                  return ((t = e), (r[0] = t[0]), t);
                });
            },
            function (o) {
              return t.blobs.neq(r[0], void 0)
                ? t.db
                    .table(307)
                    .put({
                      configId: e[1],
                      projectName: e[0],
                      cipherSuite: e[5],
                      publicKey: r[0],
                      maxEvals: e[2],
                      redemptionLimit: e[3],
                      expirationTimestampMs: e[6],
                      tokenPollFrequencyMs: e[7],
                      maxClientTokenPoolSize: e[8],
                    })
                : ((function (e) {
                    t.logger(e).info(e);
                  })(
                    "issuing retry for project configurations task since public key was null",
                  ),
                  (r[1] = new t.Map()),
                  r[1].set("project_name", e[0]),
                  (r[2] = r[1].get("project_name")),
                  (r[3] = t.toJSON(r[1])),
                  t.storedProcedure(
                    n("LSIssueNewTask"),
                    ["acs_credentials", "_", r[2]].join(""),
                    t.i64.cast([0, 351]),
                    r[3],
                    void 0,
                    void 0,
                    t.i64.cast([0, 0]),
                    t.i64.cast([0, 0]),
                    void 0,
                    void 0,
                    t.i64.cast([0, 0]),
                    t.i64.cast([0, 0]),
                  ));
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSAnonymousCredentialsStoreProjectConfigurationStoredProcedure"),
      (e.__tables__ = ["secure_acs_configurations"]),
      (a.exports = e));
  },
  null,
);
