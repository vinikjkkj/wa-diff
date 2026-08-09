__d(
  "LSUpdateOrInsertOhaiGatewayKeyConfigs",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.db
            .table(313)
            .put({
              keyId: e[0],
              publicKey: e[1],
              kemId: e[2],
              kdfId: e[3],
              aeadId: e[4],
              expirationDate: e[5],
              lastUpdatedTime: e[6],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSOhaiUpdateOrInsertOhaiGatewayKeyConfigsStoredProcedure"),
      (e.__tables__ = ["ohai_gateway_key_configs"]),
      (a.exports = e));
  },
  null,
);
