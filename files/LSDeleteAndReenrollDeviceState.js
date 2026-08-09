__d(
  "LSDeleteAndReenrollDeviceState",
  [
    "LSArrayGetObjectAt",
    "LSDeleteBackupOnClient",
    "LSIsEncryptionVersionSecure",
    "LSLogMebClientEvent.nop",
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
            function (o) {
              return (
                (r[0] = t.i64.of_float(Date.now())),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  "[EncryptedBackups][LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure] Beginning execution.",
                ),
                t.i64.neq(e[0], void 0)
                  ? t.sequence([
                      function (e) {
                        return t
                          .islc(
                            t.filter(t.db.table(168).fetch(), function (e) {
                              return (
                                t.i64.eq(
                                  e.authorityLevel,
                                  t.i64.cast([0, 80]),
                                ) || !1
                              );
                            }),
                            0,
                            t.i64.to_float(t.i64.cast([0, 1])),
                          )
                          .next()
                          .then(function (e, n) {
                            var o,
                              a,
                              i = e.done,
                              l = e.value;
                            return i
                              ? ((r[13] = new t.Map()),
                                r[13].set(
                                  "error_msg",
                                  "Expected a nonempty query result",
                                ),
                                r[13].set("code", t.i64.cast([0, 3])),
                                r[13].set(
                                  "src_line",
                                  "MEBClientStateUtils.php:256 MEBClientStateUtils::maybeClientStateFromDatabaseDirectly()",
                                ),
                                (r[14] = t.createArray()),
                                (r[15] = (r[14].push(r[13]), r[14])),
                                (o = [void 0, r[14]]),
                                (r[7] = o[0]),
                                (r[8] = o[1]))
                              : ((n = l.item),
                                (r[13] = new t.Map()),
                                r[13].set("backup_id", n.backupId),
                                r[13].set(
                                  "device_public_key_blob",
                                  n.devicePublicKeyBlob,
                                ),
                                r[13].set(
                                  "device_private_key_blob",
                                  n.devicePrivateKeyBlob,
                                ),
                                r[13].set(
                                  "epoch_storage_public_key_blob",
                                  n.epochStoragePublicKeyBlob,
                                ),
                                r[13].set(
                                  "epoch_storage_private_key_blob",
                                  n.epochStoragePrivateKeyBlob,
                                ),
                                r[13].set(
                                  "epoch_auth_public_key_blob",
                                  n.epochAuthPublicKeyBlob,
                                ),
                                r[13].set(
                                  "epoch_auth_private_key_blob",
                                  n.epochAuthPrivateKeyBlob,
                                ),
                                r[13].set(
                                  "mailbox_root_key_blob",
                                  n.mailboxRootKeyBlob,
                                ),
                                r[13].set(
                                  "ocmf_client_state_blob",
                                  n.ocmfClientStateBlob,
                                ),
                                r[13].set("orf_client_state_v2_blob", void 0),
                                r[13].set("orf_v2_authority_level", void 0),
                                r[13].set(
                                  "oblivious_validation_token_blob",
                                  n.obliviousValidationTokenBlob,
                                ),
                                r[13].set("device_id", n.deviceId),
                                r[13].set("backup_tenancy", n.backupTenancy),
                                r[13].set(
                                  "encryption_version",
                                  n.encryptionVersion,
                                ),
                                r[13].set(
                                  "revision_version",
                                  n.revisionVersion,
                                ),
                                r[13].set("initialize_restore_result", void 0),
                                r[13].set(
                                  "device_creation_timestamp_sec",
                                  void 0,
                                ),
                                r[13].set("authority_level", n.authorityLevel),
                                (a = [r[13], void 0]),
                                (r[7] = a[0]),
                                (r[8] = a[1]));
                          });
                      },
                      function (o) {
                        return (
                          (r[10] = new t.Map()),
                          r[10].set("value", r[7]),
                          r[10].set("errors", r[8]),
                          (r[11] = r[10].get("value")),
                          r[11] !== void 0
                            ? t.sequence([
                                function (o) {
                                  return (
                                    (r[13] = r[11].get("backup_id")),
                                    (r[14] = r[11].get(
                                      "device_public_key_blob",
                                    )),
                                    (r[15] = r[11].get(
                                      "device_private_key_blob",
                                    )),
                                    (r[16] = r[11].get(
                                      "epoch_storage_public_key_blob",
                                    )),
                                    (r[17] = r[11].get(
                                      "epoch_storage_private_key_blob",
                                    )),
                                    (r[18] = r[11].get(
                                      "epoch_auth_public_key_blob",
                                    )),
                                    (r[19] = r[11].get(
                                      "epoch_auth_private_key_blob",
                                    )),
                                    (r[20] = r[11].get(
                                      "mailbox_root_key_blob",
                                    )),
                                    (r[21] = r[11].get(
                                      "ocmf_client_state_blob",
                                    )),
                                    (r[22] = r[11].get(
                                      "orf_client_state_v2_blob",
                                    )),
                                    (r[23] = r[11].get(
                                      "orf_v2_authority_level",
                                    )),
                                    (r[24] = r[11].get(
                                      "oblivious_validation_token_blob",
                                    )),
                                    (r[25] = r[11].get("device_id")),
                                    (r[26] = r[11].get("backup_tenancy")),
                                    (r[27] = r[11].get("encryption_version")),
                                    (r[28] = r[11].get("revision_version")),
                                    (r[29] = r[11].get(
                                      "initialize_restore_result",
                                    )),
                                    (r[30] = r[11].get(
                                      "device_creation_timestamp_sec",
                                    )),
                                    (r[31] = r[11].get("authority_level")),
                                    t.i64.neq(r[25], void 0)
                                      ? t.sequence([
                                          function (e) {
                                            return (
                                              (r[33] = void 0),
                                              t.i64.neq(r[33], void 0)
                                                ? t.resolve((r[34] = r[33]))
                                                : t.sequence([
                                                    function (e) {
                                                      return (
                                                        (r[37] =
                                                          t.createArray()),
                                                        t
                                                          .storedProcedure(
                                                            n(
                                                              "LSIsEncryptionVersionSecure",
                                                            ),
                                                            t.i64.cast([0, 0]),
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[38] = t[0]),
                                                              t
                                                            );
                                                          })
                                                      );
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[38] &&
                                                          (r[47] =
                                                            (r[37].push(
                                                              t.i64.cast([
                                                                0, 0,
                                                              ]),
                                                            ),
                                                            r[37])),
                                                        t
                                                          .storedProcedure(
                                                            n(
                                                              "LSIsEncryptionVersionSecure",
                                                            ),
                                                            t.i64.cast([0, 2]),
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[39] = t[0]),
                                                              t
                                                            );
                                                          })
                                                      );
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[39] &&
                                                          (r[47] =
                                                            (r[37].push(
                                                              t.i64.cast([
                                                                0, 2,
                                                              ]),
                                                            ),
                                                            r[37])),
                                                        t
                                                          .storedProcedure(
                                                            n(
                                                              "LSIsEncryptionVersionSecure",
                                                            ),
                                                            t.i64.cast([0, 3]),
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[40] = t[0]),
                                                              t
                                                            );
                                                          })
                                                      );
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[40] &&
                                                          (r[47] =
                                                            (r[37].push(
                                                              t.i64.cast([
                                                                0, 3,
                                                              ]),
                                                            ),
                                                            r[37])),
                                                        t
                                                          .storedProcedure(
                                                            n(
                                                              "LSIsEncryptionVersionSecure",
                                                            ),
                                                            t.i64.cast([0, 4]),
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[41] = t[0]),
                                                              t
                                                            );
                                                          })
                                                      );
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[41] &&
                                                          (r[47] =
                                                            (r[37].push(
                                                              t.i64.cast([
                                                                0, 4,
                                                              ]),
                                                            ),
                                                            r[37])),
                                                        (r[42] =
                                                          t.createArray()),
                                                        (r[43] = t.i64.of_int32(
                                                          r[37].length,
                                                        )),
                                                        t.i64.gt(
                                                          r[43],
                                                          t.i64.cast([0, 0]),
                                                        )
                                                          ? t.loopAsync(
                                                              r[43],
                                                              function (e) {
                                                                return (
                                                                  (r[47] = e),
                                                                  t.sequence([
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return t
                                                                        .nativeTypeOperation(
                                                                          "Array",
                                                                          n(
                                                                            "LSArrayGetObjectAt",
                                                                          ),
                                                                          r[37],
                                                                          r[47],
                                                                        )
                                                                        .then(
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            var t;
                                                                            return (
                                                                              (t =
                                                                                e),
                                                                              (r[48] =
                                                                                t[0]),
                                                                              (r[49] =
                                                                                t[1]),
                                                                              t
                                                                            );
                                                                          },
                                                                        );
                                                                    },
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return (r[50] =
                                                                        (r[42].push(
                                                                          r[48],
                                                                        ),
                                                                        r[42]));
                                                                    },
                                                                  ])
                                                                );
                                                              },
                                                            )
                                                          : t.resolve()
                                                      );
                                                    },
                                                    function (e) {
                                                      return t.sequence([
                                                        function (e) {
                                                          return (
                                                            (r[47] =
                                                              t.createArray()),
                                                            (r[48] =
                                                              t.i64.of_int32(
                                                                r[42].length,
                                                              )),
                                                            t.i64.gt(
                                                              r[48],
                                                              t.i64.cast([
                                                                0, 0,
                                                              ]),
                                                            )
                                                              ? t.loopAsync(
                                                                  r[48],
                                                                  function (e) {
                                                                    return (
                                                                      (r[50] =
                                                                        e),
                                                                      t.sequence(
                                                                        [
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            return t
                                                                              .nativeTypeOperation(
                                                                                "Array",
                                                                                n(
                                                                                  "LSArrayGetObjectAt",
                                                                                ),
                                                                                r[42],
                                                                                r[50],
                                                                              )
                                                                              .then(
                                                                                function (
                                                                                  e,
                                                                                ) {
                                                                                  var t;
                                                                                  return (
                                                                                    (t =
                                                                                      e),
                                                                                    (r[51] =
                                                                                      t[0]),
                                                                                    (r[52] =
                                                                                      t[1]),
                                                                                    t
                                                                                  );
                                                                                },
                                                                              );
                                                                          },
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            return (r[53] =
                                                                              (r[47].push(
                                                                                t.i64.to_string(
                                                                                  r[51],
                                                                                ),
                                                                              ),
                                                                              r[47]));
                                                                          },
                                                                        ],
                                                                      )
                                                                    );
                                                                  },
                                                                )
                                                              : t.resolve()
                                                          );
                                                        },
                                                        function (e) {
                                                          return (
                                                            (r[49] =
                                                              r[47].join(",")),
                                                            (r[44] = r[49])
                                                          );
                                                        },
                                                      ]);
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[42].some(
                                                          function (e) {
                                                            return t.i64.eq(
                                                              r[27],
                                                              e,
                                                            );
                                                          },
                                                        )
                                                          ? (r[45] = r[27])
                                                          : (r[45] = void 0),
                                                        t.i64.neq(r[45], void 0)
                                                          ? (r[46] = r[45])
                                                          : (r[46] = void 0),
                                                        (r[34] = r[46])
                                                      );
                                                    },
                                                  ])
                                            );
                                          },
                                          function (o) {
                                            return (
                                              t.i64.neq(r[34], void 0)
                                                ? (r[35] = r[34])
                                                : (r[35] = t.i64.cast([0, 0])),
                                              t.i64.neq(r[26], void 0)
                                                ? (r[36] = r[26])
                                                : (r[36] = t.i64.cast([0, 1])),
                                              t.i64.eq(r[25], e[0])
                                                ? t.sequence([
                                                    function (e) {
                                                      return t.storedProcedure(
                                                        n(
                                                          "LSDeleteBackupOnClient",
                                                        ),
                                                        r[13],
                                                        void 0,
                                                        !1,
                                                        void 0,
                                                        void 0,
                                                        !0,
                                                      );
                                                    },
                                                    function (n) {
                                                      return (
                                                        (r[37] = t.i64.of_float(
                                                          Date.now(),
                                                        )),
                                                        t.db
                                                          .table(343)
                                                          .add({
                                                            pk: void 0,
                                                            deviceReenrollmentReason:
                                                              e[1],
                                                            reenrollmentTimestamp:
                                                              r[37],
                                                          })
                                                      );
                                                    },
                                                  ])
                                                : t.resolve(0)
                                            );
                                          },
                                          function (e) {
                                            return (r[32] = !0);
                                          },
                                        ])
                                      : t.sequence([
                                          function (e) {
                                            return (
                                              (function (e) {
                                                t.logger(e).mustfix(e);
                                              })(
                                                "[EncryptedBackups][LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure] Failed to load client state: 24",
                                              ),
                                              (r[34] =
                                                "Failed to load client state: 24"),
                                              (function (e) {
                                                t.logger(e).mustfix(e);
                                              })(
                                                [
                                                  "[EncryptedBackups][LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure] ",
                                                  "",
                                                  r[34],
                                                ].join(""),
                                              ),
                                              (r[33] = t.createArray()),
                                              t.nativeOperation(
                                                n("LSLogMebClientEvent.nop"),
                                                "LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure",
                                                r[34],
                                                r[33],
                                                t.i64.cast([0, 3]),
                                              )
                                            );
                                          },
                                          function (e) {
                                            return (r[32] = !1);
                                          },
                                        ])
                                  );
                                },
                                function (e) {
                                  return (r[12] = r[32]);
                                },
                              ])
                            : t.sequence([
                                function (e) {
                                  return (
                                    (r[13] = r[10].get("errors")),
                                    (r[14] = r[10].get("errors")),
                                    (function (e) {
                                      t.logger(e).mustfix(e);
                                    })(
                                      "[EncryptedBackups][LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure] Failed to load client state: 1",
                                    ),
                                    (r[16] = "Failed to load client state: 1"),
                                    (function (e) {
                                      t.logger(e).mustfix(e);
                                    })(
                                      [
                                        "[EncryptedBackups][LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure] ",
                                        "",
                                        r[16],
                                      ].join(""),
                                    ),
                                    (r[15] = t.createArray()),
                                    t.nativeOperation(
                                      n("LSLogMebClientEvent.nop"),
                                      "LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure",
                                      r[16],
                                      r[15],
                                      t.i64.cast([0, 3]),
                                    )
                                  );
                                },
                                function (e) {
                                  return (r[12] = !1);
                                },
                              ])
                        );
                      },
                    ])
                  : t.sequence([
                      function (e) {
                        return t
                          .islc(
                            t.filter(t.db.table(168).fetch(), function (e) {
                              return (
                                t.i64.eq(
                                  e.authorityLevel,
                                  t.i64.cast([0, 80]),
                                ) || !0
                              );
                            }),
                            0,
                            t.i64.to_float(t.i64.cast([0, 1])),
                          )
                          .next()
                          .then(function (e, n) {
                            var o,
                              a,
                              i = e.done,
                              l = e.value;
                            return i
                              ? ((r[13] = new t.Map()),
                                r[13].set(
                                  "error_msg",
                                  "Expected a nonempty query result",
                                ),
                                r[13].set("code", t.i64.cast([0, 3])),
                                r[13].set(
                                  "src_line",
                                  "MEBClientStateUtils.php:256 MEBClientStateUtils::maybeClientStateFromDatabaseDirectly()",
                                ),
                                (r[14] = t.createArray()),
                                (r[15] = (r[14].push(r[13]), r[14])),
                                (o = [void 0, r[14]]),
                                (r[7] = o[0]),
                                (r[8] = o[1]))
                              : ((n = l.item),
                                (r[13] = new t.Map()),
                                r[13].set("backup_id", n.backupId),
                                r[13].set(
                                  "device_public_key_blob",
                                  n.devicePublicKeyBlob,
                                ),
                                r[13].set(
                                  "device_private_key_blob",
                                  n.devicePrivateKeyBlob,
                                ),
                                r[13].set(
                                  "epoch_storage_public_key_blob",
                                  n.epochStoragePublicKeyBlob,
                                ),
                                r[13].set(
                                  "epoch_storage_private_key_blob",
                                  n.epochStoragePrivateKeyBlob,
                                ),
                                r[13].set(
                                  "epoch_auth_public_key_blob",
                                  n.epochAuthPublicKeyBlob,
                                ),
                                r[13].set(
                                  "epoch_auth_private_key_blob",
                                  n.epochAuthPrivateKeyBlob,
                                ),
                                r[13].set(
                                  "mailbox_root_key_blob",
                                  n.mailboxRootKeyBlob,
                                ),
                                r[13].set(
                                  "ocmf_client_state_blob",
                                  n.ocmfClientStateBlob,
                                ),
                                r[13].set("orf_client_state_v2_blob", void 0),
                                r[13].set("orf_v2_authority_level", void 0),
                                r[13].set(
                                  "oblivious_validation_token_blob",
                                  n.obliviousValidationTokenBlob,
                                ),
                                r[13].set("device_id", n.deviceId),
                                r[13].set("backup_tenancy", n.backupTenancy),
                                r[13].set(
                                  "encryption_version",
                                  n.encryptionVersion,
                                ),
                                r[13].set(
                                  "revision_version",
                                  n.revisionVersion,
                                ),
                                r[13].set("initialize_restore_result", void 0),
                                r[13].set(
                                  "device_creation_timestamp_sec",
                                  void 0,
                                ),
                                r[13].set("authority_level", n.authorityLevel),
                                (a = [r[13], void 0]),
                                (r[7] = a[0]),
                                (r[8] = a[1]));
                          });
                      },
                      function (e) {
                        return (
                          (r[10] = new t.Map()),
                          r[10].set("value", r[7]),
                          r[10].set("errors", r[8]),
                          (r[11] = r[10].get("value")),
                          r[11] !== void 0
                            ? t.sequence([
                                function (e) {
                                  return (
                                    (r[13] = r[11].get("backup_id")),
                                    (r[14] = r[11].get(
                                      "device_public_key_blob",
                                    )),
                                    (r[15] = r[11].get(
                                      "device_private_key_blob",
                                    )),
                                    (r[16] = r[11].get(
                                      "epoch_storage_public_key_blob",
                                    )),
                                    (r[17] = r[11].get(
                                      "epoch_storage_private_key_blob",
                                    )),
                                    (r[18] = r[11].get(
                                      "epoch_auth_public_key_blob",
                                    )),
                                    (r[19] = r[11].get(
                                      "epoch_auth_private_key_blob",
                                    )),
                                    (r[20] = r[11].get(
                                      "mailbox_root_key_blob",
                                    )),
                                    (r[21] = r[11].get(
                                      "ocmf_client_state_blob",
                                    )),
                                    (r[22] = r[11].get(
                                      "orf_client_state_v2_blob",
                                    )),
                                    (r[23] = r[11].get(
                                      "orf_v2_authority_level",
                                    )),
                                    (r[24] = r[11].get(
                                      "oblivious_validation_token_blob",
                                    )),
                                    (r[25] = r[11].get("device_id")),
                                    (r[26] = r[11].get("backup_tenancy")),
                                    (r[27] = r[11].get("encryption_version")),
                                    (r[28] = r[11].get("revision_version")),
                                    (r[29] = r[11].get(
                                      "initialize_restore_result",
                                    )),
                                    (r[30] = r[11].get(
                                      "device_creation_timestamp_sec",
                                    )),
                                    (r[31] = r[11].get("authority_level")),
                                    t.i64.neq(r[25], void 0)
                                      ? t.sequence([
                                          function (e) {
                                            return (
                                              (r[33] = void 0),
                                              t.i64.neq(r[33], void 0)
                                                ? t.resolve((r[34] = r[33]))
                                                : t.sequence([
                                                    function (e) {
                                                      return (
                                                        (r[37] =
                                                          t.createArray()),
                                                        t
                                                          .storedProcedure(
                                                            n(
                                                              "LSIsEncryptionVersionSecure",
                                                            ),
                                                            t.i64.cast([0, 0]),
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[38] = t[0]),
                                                              t
                                                            );
                                                          })
                                                      );
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[38] &&
                                                          (r[47] =
                                                            (r[37].push(
                                                              t.i64.cast([
                                                                0, 0,
                                                              ]),
                                                            ),
                                                            r[37])),
                                                        t
                                                          .storedProcedure(
                                                            n(
                                                              "LSIsEncryptionVersionSecure",
                                                            ),
                                                            t.i64.cast([0, 2]),
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[39] = t[0]),
                                                              t
                                                            );
                                                          })
                                                      );
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[39] &&
                                                          (r[47] =
                                                            (r[37].push(
                                                              t.i64.cast([
                                                                0, 2,
                                                              ]),
                                                            ),
                                                            r[37])),
                                                        t
                                                          .storedProcedure(
                                                            n(
                                                              "LSIsEncryptionVersionSecure",
                                                            ),
                                                            t.i64.cast([0, 3]),
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[40] = t[0]),
                                                              t
                                                            );
                                                          })
                                                      );
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[40] &&
                                                          (r[47] =
                                                            (r[37].push(
                                                              t.i64.cast([
                                                                0, 3,
                                                              ]),
                                                            ),
                                                            r[37])),
                                                        t
                                                          .storedProcedure(
                                                            n(
                                                              "LSIsEncryptionVersionSecure",
                                                            ),
                                                            t.i64.cast([0, 4]),
                                                          )
                                                          .then(function (e) {
                                                            var t;
                                                            return (
                                                              (t = e),
                                                              (r[41] = t[0]),
                                                              t
                                                            );
                                                          })
                                                      );
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[41] &&
                                                          (r[47] =
                                                            (r[37].push(
                                                              t.i64.cast([
                                                                0, 4,
                                                              ]),
                                                            ),
                                                            r[37])),
                                                        (r[42] =
                                                          t.createArray()),
                                                        (r[43] = t.i64.of_int32(
                                                          r[37].length,
                                                        )),
                                                        t.i64.gt(
                                                          r[43],
                                                          t.i64.cast([0, 0]),
                                                        )
                                                          ? t.loopAsync(
                                                              r[43],
                                                              function (e) {
                                                                return (
                                                                  (r[47] = e),
                                                                  t.sequence([
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return t
                                                                        .nativeTypeOperation(
                                                                          "Array",
                                                                          n(
                                                                            "LSArrayGetObjectAt",
                                                                          ),
                                                                          r[37],
                                                                          r[47],
                                                                        )
                                                                        .then(
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            var t;
                                                                            return (
                                                                              (t =
                                                                                e),
                                                                              (r[48] =
                                                                                t[0]),
                                                                              (r[49] =
                                                                                t[1]),
                                                                              t
                                                                            );
                                                                          },
                                                                        );
                                                                    },
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return (r[50] =
                                                                        (r[42].push(
                                                                          r[48],
                                                                        ),
                                                                        r[42]));
                                                                    },
                                                                  ])
                                                                );
                                                              },
                                                            )
                                                          : t.resolve()
                                                      );
                                                    },
                                                    function (e) {
                                                      return t.sequence([
                                                        function (e) {
                                                          return (
                                                            (r[47] =
                                                              t.createArray()),
                                                            (r[48] =
                                                              t.i64.of_int32(
                                                                r[42].length,
                                                              )),
                                                            t.i64.gt(
                                                              r[48],
                                                              t.i64.cast([
                                                                0, 0,
                                                              ]),
                                                            )
                                                              ? t.loopAsync(
                                                                  r[48],
                                                                  function (e) {
                                                                    return (
                                                                      (r[50] =
                                                                        e),
                                                                      t.sequence(
                                                                        [
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            return t
                                                                              .nativeTypeOperation(
                                                                                "Array",
                                                                                n(
                                                                                  "LSArrayGetObjectAt",
                                                                                ),
                                                                                r[42],
                                                                                r[50],
                                                                              )
                                                                              .then(
                                                                                function (
                                                                                  e,
                                                                                ) {
                                                                                  var t;
                                                                                  return (
                                                                                    (t =
                                                                                      e),
                                                                                    (r[51] =
                                                                                      t[0]),
                                                                                    (r[52] =
                                                                                      t[1]),
                                                                                    t
                                                                                  );
                                                                                },
                                                                              );
                                                                          },
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            return (r[53] =
                                                                              (r[47].push(
                                                                                t.i64.to_string(
                                                                                  r[51],
                                                                                ),
                                                                              ),
                                                                              r[47]));
                                                                          },
                                                                        ],
                                                                      )
                                                                    );
                                                                  },
                                                                )
                                                              : t.resolve()
                                                          );
                                                        },
                                                        function (e) {
                                                          return (
                                                            (r[49] =
                                                              r[47].join(",")),
                                                            (r[44] = r[49])
                                                          );
                                                        },
                                                      ]);
                                                    },
                                                    function (e) {
                                                      return (
                                                        r[42].some(
                                                          function (e) {
                                                            return t.i64.eq(
                                                              r[27],
                                                              e,
                                                            );
                                                          },
                                                        )
                                                          ? (r[45] = r[27])
                                                          : (r[45] = void 0),
                                                        t.i64.neq(r[45], void 0)
                                                          ? (r[46] = r[45])
                                                          : (r[46] = void 0),
                                                        (r[34] = r[46])
                                                      );
                                                    },
                                                  ])
                                            );
                                          },
                                          function (e) {
                                            return (
                                              t.i64.neq(r[34], void 0)
                                                ? (r[35] = r[34])
                                                : (r[35] = t.i64.cast([0, 0])),
                                              t.i64.neq(r[26], void 0)
                                                ? (r[36] = r[26])
                                                : (r[36] = t.i64.cast([0, 1])),
                                              (r[32] = !0)
                                            );
                                          },
                                        ])
                                      : t.resolve((r[32] = !1))
                                  );
                                },
                                function (e) {
                                  return (r[12] = r[32]);
                                },
                              ])
                            : t.resolve(
                                ((r[13] = r[10].get("errors")),
                                (r[14] = r[10].get("errors")),
                                (r[12] = !1)),
                              )
                        );
                      },
                      function (o) {
                        return r[12]
                          ? ((function (e) {
                              t.logger(e).mustfix(e);
                            })(
                              "[EncryptedBackups][LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure] Failure. Attempted to reset nux flags on an onboarded device",
                            ),
                            (r[14] =
                              "Failure. Attempted to reset nux flags on an onboarded device"),
                            (function (e) {
                              t.logger(e).mustfix(e);
                            })(
                              [
                                "[EncryptedBackups][LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure] ",
                                "",
                                r[14],
                              ].join(""),
                            ),
                            (r[13] = t.createArray()),
                            t.nativeOperation(
                              n("LSLogMebClientEvent.nop"),
                              "LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure",
                              r[14],
                              r[13],
                              t.i64.cast([0, 3]),
                            ))
                          : ((r[13] = t.i64.of_float(Date.now())),
                            t.db
                              .table(343)
                              .add({
                                pk: void 0,
                                deviceReenrollmentReason: e[1],
                                reenrollmentTimestamp: r[13],
                              }));
                      },
                    ])
              );
            },
            function (e) {
              return (
                (r[1] = t.i64.of_float(Date.now())),
                (r[2] = t.i64.random()),
                (r[4] = "Finishing execution. Execution time: "),
                (r[5] = t.i64.to_string(t.i64.sub(r[1], r[0]))),
                (r[6] = " ms"),
                (r[3] = ""),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  [
                    "[EncryptedBackups][LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure] ",
                    r[3],
                    r[4],
                    r[3],
                    r[5],
                    r[3],
                    r[6],
                  ].join(""),
                ),
                t.i64.eq(
                  t.i64.mod_(r[2], t.i64.cast([0, 1e3])),
                  t.i64.cast([0, 0]),
                )
                  ? ((r[7] = ","),
                    (r[8] = t.createArray()),
                    t.nativeOperation(
                      n("LSLogMebClientEvent.nop"),
                      "LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure",
                      [r[4], r[7], r[5], r[7], r[6]].join(""),
                      r[8],
                      t.i64.cast([0, 4]),
                    ))
                  : t.resolve()
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSEncryptedBackupsDeleteAndReenrollDeviceStateStoredProcedure"),
      (e.__tables__ = [
        "secure_encrypted_backups_client_state",
        "encrypted_backups_reenrollment_trigger",
      ]),
      (a.exports = e));
  },
  null,
);
