__d(
  "LSVerifyAndSaveNewCredentials",
  [
    "LSArrayGetObjectAt",
    "LSBase64Decode.nop",
    "LSRemoveBlindedTokens",
    "LSVoprfComputeSharedSecret.nop",
    "LSVoprfUnblind.nop",
  ],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.db
            .table(307)
            .fetch([[[e[0]]]])
            .next()
            .then(function (o, a) {
              var i = o.done,
                l = o.value;
              return i
                ? ((r[1] = t.createArray()),
                  (r[2] =
                    (r[1].push(
                      "No valid config found when saving signed credentials for project: ",
                    ),
                    r[1])),
                  (r[3] = (r[1].push("unknown"), r[1])),
                  (r[4] = t.toJSON(r[1])),
                  (function (e) {
                    t.logger(e).mustfix(e);
                  })(r[4]))
                : ((a = l.item),
                  t.sequence([
                    function (o) {
                      return (
                        (r[1] = t.i64.of_int32(e[1].length)),
                        t.i64.gt(r[1], t.i64.cast([0, 0]))
                          ? t.loopAsync(r[1], function (o) {
                              return (
                                (r[2] = o),
                                t.sequence([
                                  function (o) {
                                    return t
                                      .nativeTypeOperation(
                                        "Array",
                                        n("LSArrayGetObjectAt"),
                                        e[1],
                                        r[2],
                                      )
                                      .then(function (e) {
                                        var t;
                                        return (
                                          (t = e),
                                          (r[3] = t[0]),
                                          (r[4] = t[1]),
                                          t
                                        );
                                      });
                                  },
                                  function (e) {
                                    return (
                                      (r[5] = r[3].get("token_id")),
                                      t.db
                                        .table(308)
                                        .fetch([[[r[5]]]])
                                        .next()
                                        .then(function (e, n) {
                                          var o,
                                            a,
                                            i = e.done,
                                            l = e.value;
                                          return i
                                            ? ((o = [
                                                t.blob(""),
                                                t.blob(""),
                                                t.blob(""),
                                              ]),
                                              (r[6] = o[0]),
                                              (r[7] = o[1]),
                                              (r[8] = o[2]),
                                              o)
                                            : ((n = l.item),
                                              (a = [
                                                n.nonce,
                                                n.blindedNonce,
                                                n.blindingFactor,
                                              ]),
                                              (r[6] = a[0]),
                                              (r[7] = a[1]),
                                              (r[8] = a[2]));
                                        })
                                    );
                                  },
                                  function (e) {
                                    return t.forEach(
                                      t.db.table(308).fetch([[[r[5]]]]),
                                      function (e) {
                                        return e.delete();
                                      },
                                    );
                                  },
                                  function (e) {
                                    return (
                                      (r[10] = r[3].get("signed_nonce")),
                                      t
                                        .nativeOperation(
                                          n("LSBase64Decode.nop"),
                                          r[10],
                                        )
                                        .then(function (e) {
                                          var t;
                                          return ((t = e), (r[11] = t[0]), t);
                                        })
                                    );
                                  },
                                  function (e) {
                                    return (
                                      (r[12] = r[3].get("proof_c")),
                                      t
                                        .nativeOperation(
                                          n("LSBase64Decode.nop"),
                                          r[12],
                                        )
                                        .then(function (e) {
                                          var t;
                                          return ((t = e), (r[13] = t[0]), t);
                                        })
                                    );
                                  },
                                  function (e) {
                                    return (
                                      (r[14] = r[3].get("proof_s")),
                                      t
                                        .nativeOperation(
                                          n("LSBase64Decode.nop"),
                                          r[14],
                                        )
                                        .then(function (e) {
                                          var t;
                                          return ((t = e), (r[15] = t[0]), t);
                                        })
                                    );
                                  },
                                  function (e) {
                                    return t
                                      .nativeOperation(
                                        n("LSVoprfUnblind.nop"),
                                        a.publicKey,
                                        r[8],
                                        r[7],
                                        r[11] == null ? t.blob("") : r[11],
                                        r[13] == null ? t.blob("") : r[13],
                                        r[15] == null ? t.blob("") : r[15],
                                      )
                                      .then(function (e) {
                                        var t;
                                        return ((t = e), (r[16] = t[0]), t);
                                      });
                                  },
                                  function (o) {
                                    return t.blobs.neq(r[16], void 0)
                                      ? t.sequence([
                                          function (e) {
                                            return t
                                              .nativeOperation(
                                                n(
                                                  "LSVoprfComputeSharedSecret.nop",
                                                ),
                                                r[6],
                                                r[16],
                                              )
                                              .then(function (e) {
                                                var t;
                                                return (
                                                  (t = e),
                                                  (r[17] = t[0]),
                                                  t
                                                );
                                              });
                                          },
                                          function (n) {
                                            return t.blobs.neq(r[17], void 0)
                                              ? t.db
                                                  .table(309)
                                                  .add({
                                                    tokenId: r[5],
                                                    configId: e[0],
                                                    nonce: r[6],
                                                    redeemLimit:
                                                      a.redemptionLimit,
                                                    sharedSecret: r[17],
                                                  })
                                              : t.resolve();
                                          },
                                        ])
                                      : t.resolve();
                                  },
                                ])
                              );
                            })
                          : t.resolve()
                      );
                    },
                    function (r) {
                      return t.storedProcedure(
                        n("LSRemoveBlindedTokens"),
                        e[0],
                      );
                    },
                  ]));
            });
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSAnonymousCredentialsVerifyAndSaveNewCredentialsStoredProcedure"),
      (e.__tables__ = [
        "secure_acs_configurations",
        "secure_acs_blinded_tokens",
        "secure_acs_tokens",
      ]),
      (a.exports = e));
  },
  null,
);
