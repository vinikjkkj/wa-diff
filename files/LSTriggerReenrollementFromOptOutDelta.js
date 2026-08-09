__d(
  "LSTriggerReenrollementFromOptOutDelta",
  [
    "LSArrayGetObjectAt",
    "LSDeleteAndReenrollDeviceState",
    "LSIsEncryptionVersionSecure",
  ],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (e) {
              return t
                .islc(
                  t.filter(t.db.table(168).fetch(), function (e) {
                    return t.i64.eq(e.authorityLevel, t.i64.cast([0, 80]));
                  }),
                  0,
                  t.i64.to_float(t.i64.cast([0, 1])),
                )
                .next()
                .then(function (e, o) {
                  var a,
                    i = e.done,
                    l = e.value;
                  return i
                    ? ((a = [
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        t.i64.cast([0, 1]),
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        t.i64.cast([0, 20]),
                        void 0,
                        void 0,
                      ]),
                      (r[0] = a[0]),
                      (r[1] = a[1]),
                      (r[2] = a[2]),
                      (r[3] = a[3]),
                      (r[4] = a[4]),
                      (r[5] = a[5]),
                      (r[6] = a[6]),
                      (r[7] = a[7]),
                      (r[8] = a[8]),
                      (r[9] = a[9]),
                      (r[10] = a[10]),
                      (r[11] = a[11]),
                      (r[12] = a[12]),
                      (r[13] = a[13]),
                      (r[14] = a[14]),
                      (r[15] = a[15]),
                      (r[16] = a[16]),
                      (r[17] = a[17]),
                      a)
                    : ((o = l.item),
                      t.sequence([
                        function (e) {
                          return (
                            (r[26] = o.backupTenancy),
                            (r[25] = o.encryptionVersion),
                            (r[21] = void 0),
                            t.i64.neq(r[21], void 0)
                              ? t.resolve((r[22] = r[21]))
                              : t.sequence([
                                  function (e) {
                                    return (
                                      (r[27] = t.createArray()),
                                      t
                                        .storedProcedure(
                                          n("LSIsEncryptionVersionSecure"),
                                          t.i64.cast([0, 0]),
                                        )
                                        .then(function (e) {
                                          var t;
                                          return ((t = e), (r[28] = t[0]), t);
                                        })
                                    );
                                  },
                                  function (e) {
                                    return (
                                      r[28] &&
                                        (r[37] =
                                          (r[27].push(t.i64.cast([0, 0])),
                                          r[27])),
                                      t
                                        .storedProcedure(
                                          n("LSIsEncryptionVersionSecure"),
                                          t.i64.cast([0, 2]),
                                        )
                                        .then(function (e) {
                                          var t;
                                          return ((t = e), (r[29] = t[0]), t);
                                        })
                                    );
                                  },
                                  function (e) {
                                    return (
                                      r[29] &&
                                        (r[37] =
                                          (r[27].push(t.i64.cast([0, 2])),
                                          r[27])),
                                      t
                                        .storedProcedure(
                                          n("LSIsEncryptionVersionSecure"),
                                          t.i64.cast([0, 3]),
                                        )
                                        .then(function (e) {
                                          var t;
                                          return ((t = e), (r[30] = t[0]), t);
                                        })
                                    );
                                  },
                                  function (e) {
                                    return (
                                      r[30] &&
                                        (r[37] =
                                          (r[27].push(t.i64.cast([0, 3])),
                                          r[27])),
                                      t
                                        .storedProcedure(
                                          n("LSIsEncryptionVersionSecure"),
                                          t.i64.cast([0, 4]),
                                        )
                                        .then(function (e) {
                                          var t;
                                          return ((t = e), (r[31] = t[0]), t);
                                        })
                                    );
                                  },
                                  function (e) {
                                    return (
                                      r[31] &&
                                        (r[37] =
                                          (r[27].push(t.i64.cast([0, 4])),
                                          r[27])),
                                      (r[32] = t.createArray()),
                                      (r[33] = t.i64.of_int32(r[27].length)),
                                      t.i64.gt(r[33], t.i64.cast([0, 0]))
                                        ? t.loopAsync(r[33], function (e) {
                                            return (
                                              (r[37] = e),
                                              t.sequence([
                                                function (e) {
                                                  return t
                                                    .nativeTypeOperation(
                                                      "Array",
                                                      n("LSArrayGetObjectAt"),
                                                      r[27],
                                                      r[37],
                                                    )
                                                    .then(function (e) {
                                                      var t;
                                                      return (
                                                        (t = e),
                                                        (r[38] = t[0]),
                                                        (r[39] = t[1]),
                                                        t
                                                      );
                                                    });
                                                },
                                                function (e) {
                                                  return (r[40] =
                                                    (r[32].push(r[38]), r[32]));
                                                },
                                              ])
                                            );
                                          })
                                        : t.resolve()
                                    );
                                  },
                                  function (e) {
                                    return t.sequence([
                                      function (e) {
                                        return (
                                          (r[37] = t.createArray()),
                                          (r[38] = t.i64.of_int32(
                                            r[32].length,
                                          )),
                                          t.i64.gt(r[38], t.i64.cast([0, 0]))
                                            ? t.loopAsync(r[38], function (e) {
                                                return (
                                                  (r[40] = e),
                                                  t.sequence([
                                                    function (e) {
                                                      return t
                                                        .nativeTypeOperation(
                                                          "Array",
                                                          n(
                                                            "LSArrayGetObjectAt",
                                                          ),
                                                          r[32],
                                                          r[40],
                                                        )
                                                        .then(function (e) {
                                                          var t;
                                                          return (
                                                            (t = e),
                                                            (r[41] = t[0]),
                                                            (r[42] = t[1]),
                                                            t
                                                          );
                                                        });
                                                    },
                                                    function (e) {
                                                      return (r[43] =
                                                        (r[37].push(
                                                          t.i64.to_string(
                                                            r[41],
                                                          ),
                                                        ),
                                                        r[37]));
                                                    },
                                                  ])
                                                );
                                              })
                                            : t.resolve()
                                        );
                                      },
                                      function (e) {
                                        return (
                                          (r[39] = r[37].join(",")),
                                          (r[34] = r[39])
                                        );
                                      },
                                    ]);
                                  },
                                  function (e) {
                                    return (
                                      r[32].some(function (e) {
                                        return t.i64.eq(r[25], e);
                                      })
                                        ? (r[35] = r[25])
                                        : (r[35] = void 0),
                                      t.i64.neq(r[35], void 0)
                                        ? (r[36] = r[35])
                                        : (r[36] = void 0),
                                      (r[22] = r[36])
                                    );
                                  },
                                ])
                          );
                        },
                        function (e) {
                          var n;
                          return (
                            t.i64.neq(r[22], void 0)
                              ? (r[23] = r[22])
                              : (r[23] = t.i64.cast([0, 0])),
                            t.i64.neq(r[26], void 0)
                              ? (r[24] = r[26])
                              : (r[24] = t.i64.cast([0, 1])),
                            (n = [
                              o.backupId,
                              o.deviceId,
                              o.mailboxRootKeyBlob,
                              o.ocmfClientStateBlob,
                              void 0,
                              void 0,
                              r[23],
                              r[24],
                              o.epochAuthPublicKeyBlob,
                              o.epochAuthPrivateKeyBlob,
                              o.devicePublicKeyBlob,
                              o.devicePrivateKeyBlob,
                              o.epochStoragePublicKeyBlob,
                              o.epochStoragePrivateKeyBlob,
                              o.obliviousValidationTokenBlob,
                              o.authorityLevel,
                              void 0,
                              void 0,
                            ]),
                            (r[0] = n[0]),
                            (r[1] = n[1]),
                            (r[2] = n[2]),
                            (r[3] = n[3]),
                            (r[4] = n[4]),
                            (r[5] = n[5]),
                            (r[6] = n[6]),
                            (r[7] = n[7]),
                            (r[8] = n[8]),
                            (r[9] = n[9]),
                            (r[10] = n[10]),
                            (r[11] = n[11]),
                            (r[12] = n[12]),
                            (r[13] = n[13]),
                            (r[14] = n[14]),
                            (r[15] = n[15]),
                            (r[16] = n[16]),
                            (r[17] = n[17])
                          );
                        },
                      ]));
                });
            },
            function (o) {
              return (
                (r[19] = !1),
                (r[20] = t.i64.of_int32(e[1].length)),
                t.i64.gt(r[20], t.i64.cast([0, 0]))
                  ? t.loopAsync(r[20], function (o) {
                      return (
                        (r[21] = o),
                        t.sequence([
                          function (o) {
                            return t
                              .nativeTypeOperation(
                                "Array",
                                n("LSArrayGetObjectAt"),
                                e[1],
                                r[21],
                              )
                              .then(function (e) {
                                var t;
                                return (
                                  (t = e),
                                  (r[22] = t[0]),
                                  (r[23] = t[1]),
                                  t
                                );
                              });
                          },
                          function (e) {
                            return (r[19] = r[19] || t.i64.eq(r[22], r[1]));
                          },
                        ])
                      );
                    })
                  : t.resolve()
              );
            },
            function (o) {
              return r[19] && t.i64.eq(e[0], r[0]) && t.i64.neq(r[1], void 0)
                ? t.storedProcedure(
                    n("LSDeleteAndReenrollDeviceState"),
                    r[1],
                    t.i64.cast([0, 6]),
                  )
                : t.resolve();
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSEncryptedBackupsTriggerReenrollementFromOptOutDeltaStoredProcedure"),
      (e.__tables__ = ["secure_encrypted_backups_client_state"]),
      (a.exports = e));
  },
  null,
);
