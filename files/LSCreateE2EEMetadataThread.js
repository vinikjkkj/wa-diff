__d(
  "LSCreateE2EEMetadataThread",
  [
    "LSArrayGetObjectAt",
    "LSBase64Encode.nop",
    "LSIsEncryptionVersionSecure",
    "LSIssueNewTask",
    "LSLogMebClientEvent.nop",
    "LSQplAnnotateInt.nop",
    "LSQplAnnotateString.nop",
    "LSQplMarkPoint.nop",
    "LSQplStartTrace.nop",
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
              return (
                (r[0] = t.i64.of_float(Date.now())),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  "[EncryptedBackups][createE2EEMetadataThread] Beginning execution.",
                ),
                (r[1] = t.i64.of_float(Date.now())),
                t
                  .islc(
                    t.filter(t.db.table(168).fetch(), function (e) {
                      return (
                        t.i64.eq(e.authorityLevel, t.i64.cast([0, 80])) || !1
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
                      ? ((r[19] = new t.Map()),
                        r[19].set(
                          "error_msg",
                          "Expected a nonempty query result",
                        ),
                        r[19].set("code", t.i64.cast([0, 3])),
                        r[19].set(
                          "src_line",
                          "MEBClientStateUtils.php:256 MEBClientStateUtils::maybeClientStateFromDatabaseDirectly()",
                        ),
                        (r[20] = t.createArray()),
                        (r[21] = (r[20].push(r[19]), r[20])),
                        (o = [void 0, r[20]]),
                        (r[2] = o[0]),
                        (r[3] = o[1]))
                      : ((n = l.item),
                        (r[19] = new t.Map()),
                        r[19].set("backup_id", n.backupId),
                        r[19].set(
                          "device_public_key_blob",
                          n.devicePublicKeyBlob,
                        ),
                        r[19].set(
                          "device_private_key_blob",
                          n.devicePrivateKeyBlob,
                        ),
                        r[19].set(
                          "epoch_storage_public_key_blob",
                          n.epochStoragePublicKeyBlob,
                        ),
                        r[19].set(
                          "epoch_storage_private_key_blob",
                          n.epochStoragePrivateKeyBlob,
                        ),
                        r[19].set(
                          "epoch_auth_public_key_blob",
                          n.epochAuthPublicKeyBlob,
                        ),
                        r[19].set(
                          "epoch_auth_private_key_blob",
                          n.epochAuthPrivateKeyBlob,
                        ),
                        r[19].set(
                          "mailbox_root_key_blob",
                          n.mailboxRootKeyBlob,
                        ),
                        r[19].set(
                          "ocmf_client_state_blob",
                          n.ocmfClientStateBlob,
                        ),
                        r[19].set("orf_client_state_v2_blob", void 0),
                        r[19].set("orf_v2_authority_level", void 0),
                        r[19].set(
                          "oblivious_validation_token_blob",
                          n.obliviousValidationTokenBlob,
                        ),
                        r[19].set("device_id", n.deviceId),
                        r[19].set("backup_tenancy", n.backupTenancy),
                        r[19].set("encryption_version", n.encryptionVersion),
                        r[19].set("revision_version", n.revisionVersion),
                        r[19].set("initialize_restore_result", void 0),
                        r[19].set("device_creation_timestamp_sec", void 0),
                        r[19].set("authority_level", n.authorityLevel),
                        (a = [r[19], void 0]),
                        (r[2] = a[0]),
                        (r[3] = a[1]));
                  })
              );
            },
            function (e) {
              return (
                (r[5] = new t.Map()),
                r[5].set("value", r[2]),
                r[5].set("errors", r[3]),
                (r[6] = r[5].get("value")),
                r[6] !== void 0
                  ? t.sequence([
                      function (e) {
                        return (
                          (r[19] = r[6].get("backup_id")),
                          (r[20] = r[6].get("device_public_key_blob")),
                          (r[21] = r[6].get("device_private_key_blob")),
                          (r[22] = r[6].get("epoch_storage_public_key_blob")),
                          (r[23] = r[6].get("epoch_storage_private_key_blob")),
                          (r[24] = r[6].get("epoch_auth_public_key_blob")),
                          (r[25] = r[6].get("epoch_auth_private_key_blob")),
                          (r[26] = r[6].get("mailbox_root_key_blob")),
                          (r[27] = r[6].get("ocmf_client_state_blob")),
                          (r[28] = r[6].get("orf_client_state_v2_blob")),
                          (r[29] = r[6].get("orf_v2_authority_level")),
                          (r[30] = r[6].get("oblivious_validation_token_blob")),
                          (r[31] = r[6].get("device_id")),
                          (r[32] = r[6].get("backup_tenancy")),
                          (r[33] = r[6].get("encryption_version")),
                          (r[34] = r[6].get("revision_version")),
                          (r[35] = r[6].get("initialize_restore_result")),
                          (r[36] = r[6].get("device_creation_timestamp_sec")),
                          (r[37] = r[6].get("authority_level")),
                          t.i64.neq(r[31], void 0)
                            ? t.sequence([
                                function (e) {
                                  return (
                                    (r[39] = void 0),
                                    t.i64.neq(r[39], void 0)
                                      ? t.resolve((r[40] = r[39]))
                                      : t.sequence([
                                          function (e) {
                                            return (
                                              (r[52] = t.createArray()),
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
                                                    (r[53] = t[0]),
                                                    t
                                                  );
                                                })
                                            );
                                          },
                                          function (e) {
                                            return (
                                              r[53] &&
                                                (r[62] =
                                                  (r[52].push(
                                                    t.i64.cast([0, 0]),
                                                  ),
                                                  r[52])),
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
                                                    (r[54] = t[0]),
                                                    t
                                                  );
                                                })
                                            );
                                          },
                                          function (e) {
                                            return (
                                              r[54] &&
                                                (r[62] =
                                                  (r[52].push(
                                                    t.i64.cast([0, 2]),
                                                  ),
                                                  r[52])),
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
                                                    (r[55] = t[0]),
                                                    t
                                                  );
                                                })
                                            );
                                          },
                                          function (e) {
                                            return (
                                              r[55] &&
                                                (r[62] =
                                                  (r[52].push(
                                                    t.i64.cast([0, 3]),
                                                  ),
                                                  r[52])),
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
                                                    (r[56] = t[0]),
                                                    t
                                                  );
                                                })
                                            );
                                          },
                                          function (e) {
                                            return (
                                              r[56] &&
                                                (r[62] =
                                                  (r[52].push(
                                                    t.i64.cast([0, 4]),
                                                  ),
                                                  r[52])),
                                              (r[57] = t.createArray()),
                                              (r[58] = t.i64.of_int32(
                                                r[52].length,
                                              )),
                                              t.i64.gt(
                                                r[58],
                                                t.i64.cast([0, 0]),
                                              )
                                                ? t.loopAsync(
                                                    r[58],
                                                    function (e) {
                                                      return (
                                                        (r[62] = e),
                                                        t.sequence([
                                                          function (e) {
                                                            return t
                                                              .nativeTypeOperation(
                                                                "Array",
                                                                n(
                                                                  "LSArrayGetObjectAt",
                                                                ),
                                                                r[52],
                                                                r[62],
                                                              )
                                                              .then(
                                                                function (e) {
                                                                  var t;
                                                                  return (
                                                                    (t = e),
                                                                    (r[63] =
                                                                      t[0]),
                                                                    (r[64] =
                                                                      t[1]),
                                                                    t
                                                                  );
                                                                },
                                                              );
                                                          },
                                                          function (e) {
                                                            return (r[65] =
                                                              (r[57].push(
                                                                r[63],
                                                              ),
                                                              r[57]));
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
                                                  (r[62] = t.createArray()),
                                                  (r[63] = t.i64.of_int32(
                                                    r[57].length,
                                                  )),
                                                  t.i64.gt(
                                                    r[63],
                                                    t.i64.cast([0, 0]),
                                                  )
                                                    ? t.loopAsync(
                                                        r[63],
                                                        function (e) {
                                                          return (
                                                            (r[65] = e),
                                                            t.sequence([
                                                              function (e) {
                                                                return t
                                                                  .nativeTypeOperation(
                                                                    "Array",
                                                                    n(
                                                                      "LSArrayGetObjectAt",
                                                                    ),
                                                                    r[57],
                                                                    r[65],
                                                                  )
                                                                  .then(
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      var t;
                                                                      return (
                                                                        (t = e),
                                                                        (r[66] =
                                                                          t[0]),
                                                                        (r[67] =
                                                                          t[1]),
                                                                        t
                                                                      );
                                                                    },
                                                                  );
                                                              },
                                                              function (e) {
                                                                return (r[68] =
                                                                  (r[62].push(
                                                                    t.i64.to_string(
                                                                      r[66],
                                                                    ),
                                                                  ),
                                                                  r[62]));
                                                              },
                                                            ])
                                                          );
                                                        },
                                                      )
                                                    : t.resolve()
                                                );
                                              },
                                              function (e) {
                                                return (
                                                  (r[64] = r[62].join(",")),
                                                  (r[59] = r[64])
                                                );
                                              },
                                            ]);
                                          },
                                          function (e) {
                                            return (
                                              r[57].some(function (e) {
                                                return t.i64.eq(r[33], e);
                                              })
                                                ? (r[60] = r[33])
                                                : (r[60] = void 0),
                                              t.i64.neq(r[60], void 0)
                                                ? (r[61] = r[60])
                                                : (r[61] = void 0),
                                              (r[40] = r[61])
                                            );
                                          },
                                        ])
                                  );
                                },
                                function (e) {
                                  return (
                                    t.i64.neq(r[40], void 0)
                                      ? (r[41] = r[40])
                                      : (r[41] = t.i64.cast([0, 0])),
                                    t.i64.neq(r[32], void 0)
                                      ? (r[42] = r[32])
                                      : (r[42] = t.i64.cast([0, 1])),
                                    t
                                      .nativeOperation(
                                        n("LSBase64Encode.nop"),
                                        r[27],
                                      )
                                      .then(function (e) {
                                        var t;
                                        return ((t = e), (r[43] = t[0]), t);
                                      })
                                  );
                                },
                                function (e) {
                                  return t
                                    .nativeOperation(
                                      n("LSBase64Encode.nop"),
                                      r[26],
                                    )
                                    .then(function (e) {
                                      var t;
                                      return ((t = e), (r[44] = t[0]), t);
                                    });
                                },
                                function (e) {
                                  return (
                                    (r[45] = new t.Map()),
                                    r[45].set(
                                      "ocmf_client_state_blob",
                                      r[43] == null ? "" : r[43],
                                    ),
                                    r[45].set(
                                      "mailbox_root_key",
                                      r[44] == null ? "" : r[44],
                                    ),
                                    (r[46] = t.createArray()),
                                    t.forEach(
                                      t.filter(
                                        t.db.table(169).fetch(),
                                        function (e) {
                                          return t.i64.eq(
                                            e.authorityLevel,
                                            t.i64.cast([0, 80]),
                                          );
                                        },
                                      ),
                                      function (e) {
                                        var t = e.item;
                                        return (r[52] =
                                          (r[46].push(t.epochId), r[46]));
                                      },
                                    )
                                  );
                                },
                                function (e) {
                                  return (
                                    (r[50] =
                                      "Queried locally available epochs. Count: "),
                                    (r[47] = t.i64.of_int32(r[46].length)),
                                    (r[51] = t.i64.to_string(r[47])),
                                    (r[48] = ""),
                                    (function (e) {
                                      t.logger(e).info(e);
                                    })(
                                      [
                                        "[EncryptedBackups][MEBEpochClientUtils] ",
                                        r[48],
                                        r[50],
                                        r[48],
                                        r[51],
                                      ].join(""),
                                    ),
                                    t.resolve()
                                  );
                                },
                                function (e) {
                                  return (
                                    (r[49] = new t.Map()),
                                    r[49].set("device_id", r[31]),
                                    r[49].set("raw_tokens", r[45]),
                                    r[49].set(
                                      "locally_available_epochs",
                                      r[46],
                                    ),
                                    (r[38] = r[49])
                                  );
                                },
                              ])
                            : t.resolve((r[38] = void 0))
                        );
                      },
                      function (e) {
                        return (r[7] = r[38]);
                      },
                    ])
                  : t.resolve(
                      ((r[19] = r[5].get("errors")),
                      (r[20] = r[5].get("errors")),
                      (r[7] = void 0)),
                    )
              );
            },
            function (e) {
              return (
                (r[8] = t.i64.random()),
                (r[9] = t.i64.to_string(r[8])),
                r[9] !== void 0
                  ? t.nativeOperation(
                      n("LSQplStartTrace.nop"),
                      t.i64.cast([0, 679677570]),
                      r[9],
                      !0,
                      void 0,
                    )
                  : t.resolve()
              );
            },
            function (e) {
              return r[9] !== void 0
                ? t.nativeOperation(
                    n("LSQplMarkPoint.nop"),
                    t.i64.cast([0, 679677570]),
                    r[9],
                    "issue_task",
                  )
                : t.resolve();
            },
            function (e) {
              return r[9] !== void 0
                ? t.nativeOperation(
                    n("LSQplAnnotateString.nop"),
                    t.i64.cast([0, 679677570]),
                    r[9],
                    "request_type",
                    "THREAD_POINT_QUERY",
                  )
                : t.resolve();
            },
            function (e) {
              return r[9] !== void 0
                ? t.nativeOperation(
                    n("LSQplAnnotateInt.nop"),
                    t.i64.cast([0, 679677570]),
                    r[9],
                    "task_creation_source",
                    t.i64.cast([0, 76]) == null
                      ? t.i64.cast([-1, 4294967295])
                      : t.i64.cast([0, 76]),
                  )
                : t.resolve();
            },
            function (o) {
              return (
                (r[10] = new t.Map()),
                r[10].set("wa_jid", e[0]),
                r[10].set("offline_thread_key", e[1]),
                r[10].set("thread_type", e[2]),
                r[10].set("folder_type", e[3]),
                r[10].set("bump_timestamp_ms", e[4]),
                r[10].set("tam_thread_subtype", t.i64.cast([0, 0])),
                r[10].set("created_by_local_device", e[5]),
                r[10].set("device_context", r[7]),
                r[10].set("qpl_instance_key", r[9]),
                r[10].set("should_run_privacy_and_folder_checks", !1),
                r[10].set("should_only_create_server_thread", !1),
                (r[11] = r[10].get("offline_thread_key")),
                (r[12] = t.toJSON(r[10])),
                t.storedProcedure(
                  n("LSIssueNewTask"),
                  t.i64.to_string(r[11]),
                  t.i64.cast([0, 388]),
                  r[12],
                  void 0,
                  void 0,
                  t.i64.cast([0, 0]),
                  t.i64.cast([0, 0]),
                  void 0,
                  void 0,
                  t.i64.cast([0, 0]),
                  t.i64.cast([0, 0]),
                )
              );
            },
            function (e) {
              return (
                (r[13] = t.i64.of_float(Date.now())),
                (r[14] = t.i64.random()),
                (r[16] = "Finishing execution. Execution time: "),
                (r[17] = t.i64.to_string(t.i64.sub(r[13], r[0]))),
                (r[18] = " ms"),
                (r[15] = ""),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  [
                    "[EncryptedBackups][createE2EEMetadataThread] ",
                    r[15],
                    r[16],
                    r[15],
                    r[17],
                    r[15],
                    r[18],
                  ].join(""),
                ),
                t.i64.eq(
                  t.i64.mod_(r[14], t.i64.cast([0, 1e3])),
                  t.i64.cast([0, 0]),
                )
                  ? ((r[19] = ","),
                    (r[20] = t.createArray()),
                    t.nativeOperation(
                      n("LSLogMebClientEvent.nop"),
                      "createE2EEMetadataThread",
                      [r[16], r[19], r[17], r[19], r[18]].join(""),
                      r[20],
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
      "LSE2EEMessagingMetadataMailboxCreateE2EEMetadataThreadStoredProcedure"),
      (e.__tables__ = [
        "secure_encrypted_backups_client_state",
        "secure_encrypted_backups_epochs",
      ]),
      (a.exports = e));
  },
  null,
);
