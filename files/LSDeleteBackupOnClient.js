__d(
  "LSDeleteBackupOnClient",
  [
    "LSAppendDataTraceAddon",
    "LSArrayGetObjectAt",
    "LSIsEncryptionVersionSecure",
    "LSIsMobileClient",
    "LSLogMEBUploadSuccessEvent.nop",
    "LSLogMebClientEvent.nop",
    "LSQplAnnotateBool.nop",
    "LSQplAnnotateString.nop",
    "LSQplMarkEnd.nop",
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
            function (o) {
              return (
                (r[0] = t.i64.of_float(Date.now())),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  "[EncryptedBackups][LSEncryptedBackupsDeleteBackupOnClientStoredProcedure] Beginning execution.",
                ),
                (r[1] = t.i64.random()),
                (r[2] = t.i64.to_string(r[1])),
                r[2] !== void 0
                  ? t.nativeOperation(
                      n("LSQplStartTrace.nop"),
                      t.i64.cast([0, 1021656516]),
                      r[2],
                      !0,
                      e[3],
                    )
                  : t.resolve()
              );
            },
            function (e) {
              return t.i64.neq(void 0, void 0)
                ? ((r[14] = t.i64.to_string(void 0)),
                  r[2] !== void 0 && r[14] !== void 0
                    ? t.nativeOperation(
                        n("LSQplAnnotateString.nop"),
                        t.i64.cast([0, 1021656516]),
                        r[2],
                        "reason",
                        r[14],
                      )
                    : t.resolve())
                : t.resolve();
            },
            function (o) {
              return r[2] !== void 0 && e[1] !== void 0
                ? t.nativeOperation(
                    n("LSQplAnnotateString.nop"),
                    t.i64.cast([0, 1021656516]),
                    r[2],
                    "trace_context",
                    e[1],
                  )
                : t.resolve();
            },
            function (o) {
              return r[2] !== void 0 && e[4] !== void 0
                ? t.nativeOperation(
                    n("LSQplAnnotateString.nop"),
                    t.i64.cast([0, 1021656516]),
                    r[2],
                    "dasm_delete_backup_on_client_error_message",
                    e[4],
                  )
                : t.resolve();
            },
            function (o) {
              return r[2] !== void 0
                ? t.nativeOperation(
                    n("LSQplAnnotateBool.nop"),
                    t.i64.cast([0, 1021656516]),
                    r[2],
                    "clear_backups_table",
                    e[2],
                  )
                : t.resolve();
            },
            function (e) {
              return r[2] !== void 0
                ? t.nativeOperation(
                    n("LSQplAnnotateBool.nop"),
                    t.i64.cast([0, 1021656516]),
                    r[2],
                    "has_cleared_tables_on_previous_run",
                    !1,
                  )
                : t.resolve();
            },
            function (e) {
              return r[2] !== void 0
                ? t.nativeOperation(
                    n("LSQplAnnotateBool.nop"),
                    t.i64.cast([0, 1021656516]),
                    r[2],
                    "is_on_main_database",
                    !0,
                  )
                : t.resolve();
            },
            function (e) {
              return r[2] !== void 0
                ? t.nativeOperation(
                    n("LSQplMarkPoint.nop"),
                    t.i64.cast([0, 1021656516]),
                    r[2],
                    "dasm_delete_backup_on_client_sproc_start",
                  )
                : t.resolve();
            },
            function (e) {
              return t.i64.neq(void 0, void 0)
                ? ((r[14] = [
                    "deleteBackupOnClient reason: ",
                    " ",
                    t.i64.to_string(void 0),
                  ].join("")),
                  (function (e) {
                    t.logger(e).info(e);
                  })(
                    [
                      "[EncryptedBackups][LSEncryptedBackupsDeleteBackupOnClientStoredProcedure] ",
                      "",
                      r[14],
                    ].join(""),
                  ),
                  (r[15] = t.createArray()),
                  t.nativeOperation(
                    n("LSLogMebClientEvent.nop"),
                    "LSEncryptedBackupsDeleteBackupOnClientStoredProcedure",
                    [r[14]].join(""),
                    r[15],
                    t.i64.cast([0, 4]),
                  ))
                : t.resolve();
            },
            function (e) {
              return (
                (r[3] = "Beginning deleteBackupOnClient stored procedure"),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  ["[EncryptedBackups][deleteBackupOnClient] ", "", r[3]].join(
                    "",
                  ),
                ),
                (r[4] = t.createArray()),
                t.nativeOperation(
                  n("LSLogMebClientEvent.nop"),
                  "deleteBackupOnClient",
                  [r[3]].join(""),
                  r[4],
                  t.i64.cast([0, 4]),
                )
              );
            },
            function (e) {
              return (
                (r[5] = t.i64.eq(void 0, t.i64.cast([0, 41])) && !0),
                r[5] && r[2] !== void 0
                  ? t.nativeOperation(
                      n("LSQplMarkPoint.nop"),
                      t.i64.cast([0, 1021656516]),
                      r[2],
                      "dasm_delete_backup_on_client_verify_client_state",
                    )
                  : t.resolve()
              );
            },
            function (o) {
              return r[5]
                ? t.sequence([
                    function (e) {
                      return t
                        .islc(
                          t.filter(t.db.table(168).fetch(), function (e) {
                            return (
                              t.i64.eq(e.authorityLevel, t.i64.cast([0, 80])) ||
                              !1
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
                            ? ((r[20] = new t.Map()),
                              r[20].set(
                                "error_msg",
                                "Expected a nonempty query result",
                              ),
                              r[20].set("code", t.i64.cast([0, 3])),
                              r[20].set(
                                "src_line",
                                "MEBClientStateUtils.php:256 MEBClientStateUtils::maybeClientStateFromDatabaseDirectly()",
                              ),
                              (r[21] = t.createArray()),
                              (r[22] = (r[21].push(r[20]), r[21])),
                              (o = [void 0, r[21]]),
                              (r[14] = o[0]),
                              (r[15] = o[1]))
                            : ((n = l.item),
                              (r[20] = new t.Map()),
                              r[20].set("backup_id", n.backupId),
                              r[20].set(
                                "device_public_key_blob",
                                n.devicePublicKeyBlob,
                              ),
                              r[20].set(
                                "device_private_key_blob",
                                n.devicePrivateKeyBlob,
                              ),
                              r[20].set(
                                "epoch_storage_public_key_blob",
                                n.epochStoragePublicKeyBlob,
                              ),
                              r[20].set(
                                "epoch_storage_private_key_blob",
                                n.epochStoragePrivateKeyBlob,
                              ),
                              r[20].set(
                                "epoch_auth_public_key_blob",
                                n.epochAuthPublicKeyBlob,
                              ),
                              r[20].set(
                                "epoch_auth_private_key_blob",
                                n.epochAuthPrivateKeyBlob,
                              ),
                              r[20].set(
                                "mailbox_root_key_blob",
                                n.mailboxRootKeyBlob,
                              ),
                              r[20].set(
                                "ocmf_client_state_blob",
                                n.ocmfClientStateBlob,
                              ),
                              r[20].set("orf_client_state_v2_blob", void 0),
                              r[20].set("orf_v2_authority_level", void 0),
                              r[20].set(
                                "oblivious_validation_token_blob",
                                n.obliviousValidationTokenBlob,
                              ),
                              r[20].set("device_id", n.deviceId),
                              r[20].set("backup_tenancy", n.backupTenancy),
                              r[20].set(
                                "encryption_version",
                                n.encryptionVersion,
                              ),
                              r[20].set("revision_version", n.revisionVersion),
                              r[20].set("initialize_restore_result", void 0),
                              r[20].set(
                                "device_creation_timestamp_sec",
                                void 0,
                              ),
                              r[20].set("authority_level", n.authorityLevel),
                              (a = [r[20], void 0]),
                              (r[14] = a[0]),
                              (r[15] = a[1]));
                        });
                    },
                    function (o) {
                      return (
                        (r[17] = new t.Map()),
                        r[17].set("value", r[14]),
                        r[17].set("errors", r[15]),
                        (r[18] = r[17].get("value")),
                        r[18] !== void 0
                          ? t.sequence([
                              function (o) {
                                return (
                                  (r[20] = r[18].get("backup_id")),
                                  (r[21] = r[18].get("device_public_key_blob")),
                                  (r[22] = r[18].get(
                                    "device_private_key_blob",
                                  )),
                                  (r[23] = r[18].get(
                                    "epoch_storage_public_key_blob",
                                  )),
                                  (r[24] = r[18].get(
                                    "epoch_storage_private_key_blob",
                                  )),
                                  (r[25] = r[18].get(
                                    "epoch_auth_public_key_blob",
                                  )),
                                  (r[26] = r[18].get(
                                    "epoch_auth_private_key_blob",
                                  )),
                                  (r[27] = r[18].get("mailbox_root_key_blob")),
                                  (r[28] = r[18].get("ocmf_client_state_blob")),
                                  (r[29] = r[18].get(
                                    "orf_client_state_v2_blob",
                                  )),
                                  (r[30] = r[18].get("orf_v2_authority_level")),
                                  (r[31] = r[18].get(
                                    "oblivious_validation_token_blob",
                                  )),
                                  (r[32] = r[18].get("device_id")),
                                  (r[33] = r[18].get("backup_tenancy")),
                                  (r[34] = r[18].get("encryption_version")),
                                  (r[35] = r[18].get("revision_version")),
                                  (r[36] = r[18].get(
                                    "initialize_restore_result",
                                  )),
                                  (r[37] = r[18].get(
                                    "device_creation_timestamp_sec",
                                  )),
                                  (r[38] = r[18].get("authority_level")),
                                  t.i64.neq(r[32], void 0)
                                    ? t.sequence([
                                        function (e) {
                                          return (
                                            (r[40] = void 0),
                                            t.i64.neq(r[40], void 0)
                                              ? t.resolve((r[41] = r[40]))
                                              : t.sequence([
                                                  function (e) {
                                                    return (
                                                      (r[45] = t.createArray()),
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
                                                            (r[46] = t[0]),
                                                            t
                                                          );
                                                        })
                                                    );
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[46] &&
                                                        (r[55] =
                                                          (r[45].push(
                                                            t.i64.cast([0, 0]),
                                                          ),
                                                          r[45])),
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
                                                            (r[47] = t[0]),
                                                            t
                                                          );
                                                        })
                                                    );
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[47] &&
                                                        (r[55] =
                                                          (r[45].push(
                                                            t.i64.cast([0, 2]),
                                                          ),
                                                          r[45])),
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
                                                            (r[48] = t[0]),
                                                            t
                                                          );
                                                        })
                                                    );
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[48] &&
                                                        (r[55] =
                                                          (r[45].push(
                                                            t.i64.cast([0, 3]),
                                                          ),
                                                          r[45])),
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
                                                            (r[49] = t[0]),
                                                            t
                                                          );
                                                        })
                                                    );
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[49] &&
                                                        (r[55] =
                                                          (r[45].push(
                                                            t.i64.cast([0, 4]),
                                                          ),
                                                          r[45])),
                                                      (r[50] = t.createArray()),
                                                      (r[51] = t.i64.of_int32(
                                                        r[45].length,
                                                      )),
                                                      t.i64.gt(
                                                        r[51],
                                                        t.i64.cast([0, 0]),
                                                      )
                                                        ? t.loopAsync(
                                                            r[51],
                                                            function (e) {
                                                              return (
                                                                (r[55] = e),
                                                                t.sequence([
                                                                  function (e) {
                                                                    return t
                                                                      .nativeTypeOperation(
                                                                        "Array",
                                                                        n(
                                                                          "LSArrayGetObjectAt",
                                                                        ),
                                                                        r[45],
                                                                        r[55],
                                                                      )
                                                                      .then(
                                                                        function (
                                                                          e,
                                                                        ) {
                                                                          var t;
                                                                          return (
                                                                            (t =
                                                                              e),
                                                                            (r[56] =
                                                                              t[0]),
                                                                            (r[57] =
                                                                              t[1]),
                                                                            t
                                                                          );
                                                                        },
                                                                      );
                                                                  },
                                                                  function (e) {
                                                                    return (r[58] =
                                                                      (r[50].push(
                                                                        r[56],
                                                                      ),
                                                                      r[50]));
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
                                                          (r[55] =
                                                            t.createArray()),
                                                          (r[56] =
                                                            t.i64.of_int32(
                                                              r[50].length,
                                                            )),
                                                          t.i64.gt(
                                                            r[56],
                                                            t.i64.cast([0, 0]),
                                                          )
                                                            ? t.loopAsync(
                                                                r[56],
                                                                function (e) {
                                                                  return (
                                                                    (r[58] = e),
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
                                                                            r[50],
                                                                            r[58],
                                                                          )
                                                                          .then(
                                                                            function (
                                                                              e,
                                                                            ) {
                                                                              var t;
                                                                              return (
                                                                                (t =
                                                                                  e),
                                                                                (r[59] =
                                                                                  t[0]),
                                                                                (r[60] =
                                                                                  t[1]),
                                                                                t
                                                                              );
                                                                            },
                                                                          );
                                                                      },
                                                                      function (
                                                                        e,
                                                                      ) {
                                                                        return (r[61] =
                                                                          (r[55].push(
                                                                            t.i64.to_string(
                                                                              r[59],
                                                                            ),
                                                                          ),
                                                                          r[55]));
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
                                                          (r[57] =
                                                            r[55].join(",")),
                                                          (r[52] = r[57])
                                                        );
                                                      },
                                                    ]);
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[50].some(function (e) {
                                                        return t.i64.eq(
                                                          r[34],
                                                          e,
                                                        );
                                                      })
                                                        ? (r[53] = r[34])
                                                        : (r[53] = void 0),
                                                      t.i64.neq(r[53], void 0)
                                                        ? (r[54] = r[53])
                                                        : (r[54] = void 0),
                                                      (r[41] = r[54])
                                                    );
                                                  },
                                                ])
                                          );
                                        },
                                        function (n) {
                                          return (
                                            t.i64.neq(r[41], void 0)
                                              ? (r[42] = r[41])
                                              : (r[42] = t.i64.cast([0, 0])),
                                            t.i64.neq(r[33], void 0)
                                              ? (r[43] = r[33])
                                              : (r[43] = t.i64.cast([0, 1])),
                                            t.i64.neq(e[0], void 0)
                                              ? (t.i64.eq(r[20], e[0])
                                                  ? (r[45] = void 0)
                                                  : (r[45] =
                                                      "backup_id_mismatch"),
                                                (r[44] = r[45]))
                                              : (r[44] = void 0),
                                            (r[39] = r[44])
                                          );
                                        },
                                      ])
                                    : t.resolve((r[39] = "no_device_id"))
                                );
                              },
                              function (e) {
                                return (r[19] = r[39]);
                              },
                            ])
                          : t.resolve(
                              ((r[20] = r[17].get("errors")),
                              (r[21] = r[17].get("errors")),
                              (r[19] = "no_authoritative_client_state")),
                            )
                      );
                    },
                    function (e) {
                      return (r[6] = r[19]);
                    },
                  ])
                : t.resolve((r[6] = void 0));
            },
            function (o) {
              return r[6] !== void 0
                ? t.sequence([
                    function (e) {
                      return r[2] !== void 0
                        ? t.nativeOperation(
                            n("LSQplMarkPoint.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "dasm_delete_backup_on_client_cleanup_not_required",
                          )
                        : t.resolve();
                    },
                    function (e) {
                      return r[2] !== void 0 && r[6] !== void 0
                        ? t.nativeOperation(
                            n("LSQplAnnotateString.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "cleanup_not_required_reason",
                            r[6],
                          )
                        : t.resolve();
                    },
                  ])
                : t.sequence([
                    function (e) {
                      return r[5] && r[2] !== void 0
                        ? t.nativeOperation(
                            n("LSQplMarkPoint.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "dasm_delete_backup_on_client_cleanup_required",
                          )
                        : t.resolve();
                    },
                    function (e) {
                      return r[2] !== void 0
                        ? t.nativeOperation(
                            n("LSQplAnnotateBool.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "split_execution",
                            !1,
                          )
                        : t.resolve();
                    },
                    function (e) {
                      return r[2] !== void 0
                        ? t.nativeOperation(
                            n("LSQplMarkPoint.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "dasm_delete_backup_on_client_clear_state_management_tables_start",
                          )
                        : t.resolve();
                    },
                    function (n) {
                      return t.i64.neq(e[0], void 0)
                        ? t.forEach(
                            t.db.table(168).fetch([[[e[0]]]]),
                            function (e) {
                              return e.delete();
                            },
                          )
                        : t.forEach(t.db.table(168).fetch(), function (e) {
                            return e.delete();
                          });
                    },
                    function (n) {
                      return t.i64.neq(e[0], void 0)
                        ? t.forEach(
                            t.db
                              .table(169)
                              .fetch([
                                [[e[0]]],
                                "fk_secure_encrypted_backups_client_state",
                              ]),
                            function (e) {
                              return e.delete();
                            },
                          )
                        : t.forEach(t.db.table(169).fetch(), function (e) {
                            return e.delete();
                          });
                    },
                    function (e) {
                      return t.forEach(t.db.table(174).fetch(), function (e) {
                        return e.delete();
                      });
                    },
                    function (n) {
                      return e[1] === "fetch_virtual_device"
                        ? t.db
                            .table(178)
                            .put({
                              pk: t.i64.cast([0, 1]),
                              recoveryCodeStatus: t.i64.cast([0, 4]),
                            })
                        : t.resolve();
                    },
                    function (o) {
                      return e[2]
                        ? t.sequence([
                            function (e) {
                              return (
                                (r[14] =
                                  "Clearing state management backups tables"),
                                (function (e) {
                                  t.logger(e).info(e);
                                })(
                                  [
                                    "[EncryptedBackups][deleteBackupOnClient] ",
                                    "",
                                    r[14],
                                  ].join(""),
                                ),
                                (r[15] = t.createArray()),
                                t.nativeOperation(
                                  n("LSLogMebClientEvent.nop"),
                                  "deleteBackupOnClient",
                                  [r[14]].join(""),
                                  r[15],
                                  t.i64.cast([0, 4]),
                                )
                              );
                            },
                            function (e) {
                              return t.forEach(
                                t.db.table(172).fetch([[[t.i64.cast([0, 1])]]]),
                                function (e) {
                                  var t = e.update,
                                    n = e.item;
                                  return t({ backupId: void 0 });
                                },
                              );
                            },
                            function (n) {
                              return t.i64.neq(e[0], void 0)
                                ? t.forEach(
                                    t.filter(
                                      t.db.table(184).fetch(),
                                      function (n) {
                                        return t.i64.eq(n.backupId, e[0]);
                                      },
                                    ),
                                    function (e) {
                                      return e.delete();
                                    },
                                  )
                                : t.forEach(
                                    t.db.table(184).fetch(),
                                    function (e) {
                                      return e.delete();
                                    },
                                  );
                            },
                            function (n) {
                              return t.i64.neq(e[0], void 0)
                                ? t.forEach(
                                    t.db.table(196).fetch([[[e[0]]]]),
                                    function (e) {
                                      return e.delete();
                                    },
                                  )
                                : t.forEach(
                                    t.db.table(196).fetch(),
                                    function (e) {
                                      return e.delete();
                                    },
                                  );
                            },
                          ])
                        : t.resolve();
                    },
                    function (e) {
                      return r[2] !== void 0
                        ? t.nativeOperation(
                            n("LSQplMarkPoint.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "dasm_delete_backup_on_client_clear_state_management_tables_end",
                          )
                        : t.resolve();
                    },
                    function (e) {
                      return r[2] !== void 0
                        ? t.nativeOperation(
                            n("LSQplMarkPoint.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "dasm_delete_backup_on_client_clear_data_flow_tables_start",
                          )
                        : t.resolve();
                    },
                    function (e) {
                      return t.sequence([
                        function (e) {
                          return t.sequence([
                            function (e) {
                              return t.resolve();
                            },
                            function (e) {
                              return t
                                .storedProcedure(n("LSIsMobileClient"))
                                .then(function (e) {
                                  var t;
                                  return ((t = e), (r[15] = t[0]), t);
                                });
                            },
                            function (e) {
                              return (
                                r[15] ? (r[16] = !0) : (r[16] = !1),
                                r[16]
                                  ? ((function (e) {
                                      t.logger(e).mustfix(e);
                                    })(
                                      "[EncryptedBackups][MEBTraceUtils] LSDataTraceMciTraceLog native op not supported",
                                    ),
                                    (r[18] =
                                      "LSDataTraceMciTraceLog native op not supported"),
                                    (function (e) {
                                      t.logger(e).mustfix(e);
                                    })(
                                      [
                                        "[EncryptedBackups][MEBTraceUtils] ",
                                        "",
                                        r[18],
                                      ].join(""),
                                    ),
                                    (r[17] = t.createArray()),
                                    t.nativeOperation(
                                      n("LSLogMebClientEvent.nop"),
                                      "MEBTraceUtils",
                                      r[18],
                                      r[17],
                                      t.i64.cast([0, 3]),
                                    ))
                                  : t.resolve()
                              );
                            },
                          ]);
                        },
                        function (e) {
                          return t.forEach(
                            t.db.table(177).fetch(),
                            function (e) {
                              var r = e.item;
                              return t.sequence([
                                function (e) {
                                  return t.forEach(
                                    t.db
                                      .table(2)
                                      .fetch([[[r.pendingBackupTaskId]]]),
                                    function (e) {
                                      return e.delete();
                                    },
                                  );
                                },
                                function (e) {
                                  return t.i64.eq(
                                    r.contentType,
                                    t.i64.cast([0, 1]),
                                  )
                                    ? t.nativeOperation(
                                        n("LSLogMEBUploadSuccessEvent.nop"),
                                        r.uniqueKey,
                                        r.lsTraceId,
                                        !0,
                                      )
                                    : t.resolve();
                                },
                              ]);
                            },
                          );
                        },
                        function (e) {
                          return t
                            .count(t.db.table(177).fetch())
                            .then(function (e) {
                              return (r[14] = e);
                            });
                        },
                        function (e) {
                          return t.i64.eq(r[14], t.i64.cast([0, 0]))
                            ? t.sequence([
                                function (e) {
                                  return t.resolve();
                                },
                                function (e) {
                                  return t
                                    .storedProcedure(n("LSIsMobileClient"))
                                    .then(function (e) {
                                      var t;
                                      return ((t = e), (r[15] = t[0]), t);
                                    });
                                },
                                function (e) {
                                  return (
                                    r[15] ? (r[16] = !0) : (r[16] = !1),
                                    r[16]
                                      ? ((function (e) {
                                          t.logger(e).mustfix(e);
                                        })(
                                          "[EncryptedBackups][MEBTraceUtils] LSDataTraceMciTraceLog native op not supported",
                                        ),
                                        (r[18] =
                                          "LSDataTraceMciTraceLog native op not supported"),
                                        (function (e) {
                                          t.logger(e).mustfix(e);
                                        })(
                                          [
                                            "[EncryptedBackups][MEBTraceUtils] ",
                                            "",
                                            r[18],
                                          ].join(""),
                                        ),
                                        (r[17] = t.createArray()),
                                        t.nativeOperation(
                                          n("LSLogMebClientEvent.nop"),
                                          "MEBTraceUtils",
                                          r[18],
                                          r[17],
                                          t.i64.cast([0, 3]),
                                        ))
                                      : t.resolve()
                                  );
                                },
                              ])
                            : t.sequence([
                                function (e) {
                                  return t.resolve();
                                },
                                function (e) {
                                  return t
                                    .storedProcedure(n("LSIsMobileClient"))
                                    .then(function (e) {
                                      var t;
                                      return ((t = e), (r[15] = t[0]), t);
                                    });
                                },
                                function (e) {
                                  return (
                                    r[15] ? (r[16] = !0) : (r[16] = !1),
                                    r[16]
                                      ? ((function (e) {
                                          t.logger(e).mustfix(e);
                                        })(
                                          "[EncryptedBackups][MEBTraceUtils] LSDataTraceMciTraceLog native op not supported",
                                        ),
                                        (r[18] =
                                          "LSDataTraceMciTraceLog native op not supported"),
                                        (function (e) {
                                          t.logger(e).mustfix(e);
                                        })(
                                          [
                                            "[EncryptedBackups][MEBTraceUtils] ",
                                            "",
                                            r[18],
                                          ].join(""),
                                        ),
                                        (r[17] = t.createArray()),
                                        t.nativeOperation(
                                          n("LSLogMebClientEvent.nop"),
                                          "MEBTraceUtils",
                                          r[18],
                                          r[17],
                                          t.i64.cast([0, 3]),
                                        ))
                                      : t.resolve()
                                  );
                                },
                              ]);
                        },
                      ]);
                    },
                    function (o) {
                      return e[2]
                        ? ((r[14] = "Clearing data flow backups tables"),
                          (function (e) {
                            t.logger(e).info(e);
                          })(
                            [
                              "[EncryptedBackups][deleteBackupOnClient] ",
                              "",
                              r[14],
                            ].join(""),
                          ),
                          (r[15] = t.createArray()),
                          t.nativeOperation(
                            n("LSLogMebClientEvent.nop"),
                            "deleteBackupOnClient",
                            [r[14]].join(""),
                            r[15],
                            t.i64.cast([0, 4]),
                          ))
                        : t.resolve();
                    },
                    function (e) {
                      return r[2] !== void 0
                        ? t.nativeOperation(
                            n("LSQplMarkPoint.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "dasm_delete_backup_on_client_clear_data_flow_tables_end",
                          )
                        : t.resolve();
                    },
                    function (o) {
                      return e[5]
                        ? t.resolve(0)
                        : e[4] !== void 0
                          ? ((function (e) {
                              t.logger(e).mustfix(e);
                            })(
                              [
                                "[EncryptedBackups][LSEncryptedBackupsDeleteBackupOnClientStoredProcedure] ",
                                "",
                                e[4],
                              ].join(""),
                            ),
                            (r[14] = t.createArray()),
                            e[3] !== void 0 &&
                              (r[15] = (r[14].push(e[3]), r[14])),
                            t.nativeOperation(
                              n("LSLogMebClientEvent.nop"),
                              "LSEncryptedBackupsDeleteBackupOnClientStoredProcedure",
                              e[4],
                              r[14],
                              t.i64.cast([0, 3]),
                            ))
                          : t.resolve();
                    },
                  ]);
            },
            function (o) {
              return r[5] && r[6] === void 0
                ? t.sequence([
                    function (e) {
                      return t
                        .islc(
                          t.filter(t.db.table(168).fetch(), function (e) {
                            return (
                              t.i64.eq(e.authorityLevel, t.i64.cast([0, 80])) ||
                              !1
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
                            ? ((r[20] = new t.Map()),
                              r[20].set(
                                "error_msg",
                                "Expected a nonempty query result",
                              ),
                              r[20].set("code", t.i64.cast([0, 3])),
                              r[20].set(
                                "src_line",
                                "MEBClientStateUtils.php:256 MEBClientStateUtils::maybeClientStateFromDatabaseDirectly()",
                              ),
                              (r[21] = t.createArray()),
                              (r[22] = (r[21].push(r[20]), r[21])),
                              (o = [void 0, r[21]]),
                              (r[14] = o[0]),
                              (r[15] = o[1]))
                            : ((n = l.item),
                              (r[20] = new t.Map()),
                              r[20].set("backup_id", n.backupId),
                              r[20].set(
                                "device_public_key_blob",
                                n.devicePublicKeyBlob,
                              ),
                              r[20].set(
                                "device_private_key_blob",
                                n.devicePrivateKeyBlob,
                              ),
                              r[20].set(
                                "epoch_storage_public_key_blob",
                                n.epochStoragePublicKeyBlob,
                              ),
                              r[20].set(
                                "epoch_storage_private_key_blob",
                                n.epochStoragePrivateKeyBlob,
                              ),
                              r[20].set(
                                "epoch_auth_public_key_blob",
                                n.epochAuthPublicKeyBlob,
                              ),
                              r[20].set(
                                "epoch_auth_private_key_blob",
                                n.epochAuthPrivateKeyBlob,
                              ),
                              r[20].set(
                                "mailbox_root_key_blob",
                                n.mailboxRootKeyBlob,
                              ),
                              r[20].set(
                                "ocmf_client_state_blob",
                                n.ocmfClientStateBlob,
                              ),
                              r[20].set("orf_client_state_v2_blob", void 0),
                              r[20].set("orf_v2_authority_level", void 0),
                              r[20].set(
                                "oblivious_validation_token_blob",
                                n.obliviousValidationTokenBlob,
                              ),
                              r[20].set("device_id", n.deviceId),
                              r[20].set("backup_tenancy", n.backupTenancy),
                              r[20].set(
                                "encryption_version",
                                n.encryptionVersion,
                              ),
                              r[20].set("revision_version", n.revisionVersion),
                              r[20].set("initialize_restore_result", void 0),
                              r[20].set(
                                "device_creation_timestamp_sec",
                                void 0,
                              ),
                              r[20].set("authority_level", n.authorityLevel),
                              (a = [r[20], void 0]),
                              (r[14] = a[0]),
                              (r[15] = a[1]));
                        });
                    },
                    function (o) {
                      return (
                        (r[17] = new t.Map()),
                        r[17].set("value", r[14]),
                        r[17].set("errors", r[15]),
                        (r[18] = r[17].get("value")),
                        r[18] !== void 0
                          ? t.sequence([
                              function (o) {
                                return (
                                  (r[20] = r[18].get("backup_id")),
                                  (r[21] = r[18].get("device_public_key_blob")),
                                  (r[22] = r[18].get(
                                    "device_private_key_blob",
                                  )),
                                  (r[23] = r[18].get(
                                    "epoch_storage_public_key_blob",
                                  )),
                                  (r[24] = r[18].get(
                                    "epoch_storage_private_key_blob",
                                  )),
                                  (r[25] = r[18].get(
                                    "epoch_auth_public_key_blob",
                                  )),
                                  (r[26] = r[18].get(
                                    "epoch_auth_private_key_blob",
                                  )),
                                  (r[27] = r[18].get("mailbox_root_key_blob")),
                                  (r[28] = r[18].get("ocmf_client_state_blob")),
                                  (r[29] = r[18].get(
                                    "orf_client_state_v2_blob",
                                  )),
                                  (r[30] = r[18].get("orf_v2_authority_level")),
                                  (r[31] = r[18].get(
                                    "oblivious_validation_token_blob",
                                  )),
                                  (r[32] = r[18].get("device_id")),
                                  (r[33] = r[18].get("backup_tenancy")),
                                  (r[34] = r[18].get("encryption_version")),
                                  (r[35] = r[18].get("revision_version")),
                                  (r[36] = r[18].get(
                                    "initialize_restore_result",
                                  )),
                                  (r[37] = r[18].get(
                                    "device_creation_timestamp_sec",
                                  )),
                                  (r[38] = r[18].get("authority_level")),
                                  t.i64.neq(r[32], void 0)
                                    ? t.sequence([
                                        function (e) {
                                          return (
                                            (r[40] = void 0),
                                            t.i64.neq(r[40], void 0)
                                              ? t.resolve((r[41] = r[40]))
                                              : t.sequence([
                                                  function (e) {
                                                    return (
                                                      (r[45] = t.createArray()),
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
                                                            (r[46] = t[0]),
                                                            t
                                                          );
                                                        })
                                                    );
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[46] &&
                                                        (r[55] =
                                                          (r[45].push(
                                                            t.i64.cast([0, 0]),
                                                          ),
                                                          r[45])),
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
                                                            (r[47] = t[0]),
                                                            t
                                                          );
                                                        })
                                                    );
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[47] &&
                                                        (r[55] =
                                                          (r[45].push(
                                                            t.i64.cast([0, 2]),
                                                          ),
                                                          r[45])),
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
                                                            (r[48] = t[0]),
                                                            t
                                                          );
                                                        })
                                                    );
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[48] &&
                                                        (r[55] =
                                                          (r[45].push(
                                                            t.i64.cast([0, 3]),
                                                          ),
                                                          r[45])),
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
                                                            (r[49] = t[0]),
                                                            t
                                                          );
                                                        })
                                                    );
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[49] &&
                                                        (r[55] =
                                                          (r[45].push(
                                                            t.i64.cast([0, 4]),
                                                          ),
                                                          r[45])),
                                                      (r[50] = t.createArray()),
                                                      (r[51] = t.i64.of_int32(
                                                        r[45].length,
                                                      )),
                                                      t.i64.gt(
                                                        r[51],
                                                        t.i64.cast([0, 0]),
                                                      )
                                                        ? t.loopAsync(
                                                            r[51],
                                                            function (e) {
                                                              return (
                                                                (r[55] = e),
                                                                t.sequence([
                                                                  function (e) {
                                                                    return t
                                                                      .nativeTypeOperation(
                                                                        "Array",
                                                                        n(
                                                                          "LSArrayGetObjectAt",
                                                                        ),
                                                                        r[45],
                                                                        r[55],
                                                                      )
                                                                      .then(
                                                                        function (
                                                                          e,
                                                                        ) {
                                                                          var t;
                                                                          return (
                                                                            (t =
                                                                              e),
                                                                            (r[56] =
                                                                              t[0]),
                                                                            (r[57] =
                                                                              t[1]),
                                                                            t
                                                                          );
                                                                        },
                                                                      );
                                                                  },
                                                                  function (e) {
                                                                    return (r[58] =
                                                                      (r[50].push(
                                                                        r[56],
                                                                      ),
                                                                      r[50]));
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
                                                          (r[55] =
                                                            t.createArray()),
                                                          (r[56] =
                                                            t.i64.of_int32(
                                                              r[50].length,
                                                            )),
                                                          t.i64.gt(
                                                            r[56],
                                                            t.i64.cast([0, 0]),
                                                          )
                                                            ? t.loopAsync(
                                                                r[56],
                                                                function (e) {
                                                                  return (
                                                                    (r[58] = e),
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
                                                                            r[50],
                                                                            r[58],
                                                                          )
                                                                          .then(
                                                                            function (
                                                                              e,
                                                                            ) {
                                                                              var t;
                                                                              return (
                                                                                (t =
                                                                                  e),
                                                                                (r[59] =
                                                                                  t[0]),
                                                                                (r[60] =
                                                                                  t[1]),
                                                                                t
                                                                              );
                                                                            },
                                                                          );
                                                                      },
                                                                      function (
                                                                        e,
                                                                      ) {
                                                                        return (r[61] =
                                                                          (r[55].push(
                                                                            t.i64.to_string(
                                                                              r[59],
                                                                            ),
                                                                          ),
                                                                          r[55]));
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
                                                          (r[57] =
                                                            r[55].join(",")),
                                                          (r[52] = r[57])
                                                        );
                                                      },
                                                    ]);
                                                  },
                                                  function (e) {
                                                    return (
                                                      r[50].some(function (e) {
                                                        return t.i64.eq(
                                                          r[34],
                                                          e,
                                                        );
                                                      })
                                                        ? (r[53] = r[34])
                                                        : (r[53] = void 0),
                                                      t.i64.neq(r[53], void 0)
                                                        ? (r[54] = r[53])
                                                        : (r[54] = void 0),
                                                      (r[41] = r[54])
                                                    );
                                                  },
                                                ])
                                          );
                                        },
                                        function (n) {
                                          return (
                                            t.i64.neq(r[41], void 0)
                                              ? (r[42] = r[41])
                                              : (r[42] = t.i64.cast([0, 0])),
                                            t.i64.neq(r[33], void 0)
                                              ? (r[43] = r[33])
                                              : (r[43] = t.i64.cast([0, 1])),
                                            t.i64.neq(e[0], void 0)
                                              ? (t.i64.eq(r[20], e[0])
                                                  ? (r[45] = void 0)
                                                  : (r[45] =
                                                      "backup_id_mismatch"),
                                                (r[44] = r[45]))
                                              : (r[44] = void 0),
                                            (r[39] = r[44])
                                          );
                                        },
                                      ])
                                    : t.resolve((r[39] = "no_device_id"))
                                );
                              },
                              function (e) {
                                return (r[19] = r[39]);
                              },
                            ])
                          : t.resolve(
                              ((r[20] = r[17].get("errors")),
                              (r[21] = r[17].get("errors")),
                              (r[19] = "no_authoritative_client_state")),
                            )
                      );
                    },
                    function (e) {
                      return (r[7] = r[19] === void 0);
                    },
                  ])
                : t.resolve((r[7] = !1));
            },
            function (e) {
              return r[7]
                ? t.sequence([
                    function (e) {
                      return r[2] !== void 0
                        ? t.nativeOperation(
                            n("LSQplMarkPoint.nop"),
                            t.i64.cast([0, 1021656516]),
                            r[2],
                            "dasm_delete_backup_on_client_client_state_remaining",
                          )
                        : t.resolve();
                    },
                    function (e) {
                      return (
                        (r[16] = "client_state_remaining_after_clear"),
                        r[2] !== void 0 && r[16] !== void 0
                          ? t.nativeOperation(
                              n("LSQplAnnotateString.nop"),
                              t.i64.cast([0, 1021656516]),
                              r[2],
                              "error",
                              r[16],
                            )
                          : t.resolve()
                      );
                    },
                    function (e) {
                      return (
                        (function (e) {
                          t.logger(e).mustfix(e);
                        })(
                          "[EncryptedBackups][LSEncryptedBackupsDeleteBackupOnClientStoredProcedure] deleteBackupOnClient left the authoritative client state in place",
                        ),
                        (r[15] =
                          "deleteBackupOnClient left the authoritative client state in place"),
                        (function (e) {
                          t.logger(e).mustfix(e);
                        })(
                          [
                            "[EncryptedBackups][LSEncryptedBackupsDeleteBackupOnClientStoredProcedure] ",
                            "",
                            r[15],
                          ].join(""),
                        ),
                        (r[14] = t.createArray()),
                        t.nativeOperation(
                          n("LSLogMebClientEvent.nop"),
                          "LSEncryptedBackupsDeleteBackupOnClientStoredProcedure",
                          r[15],
                          r[14],
                          t.i64.cast([0, 3]),
                        )
                      );
                    },
                  ])
                : t.resolve();
            },
            function (e) {
              return r[2] !== void 0
                ? t.nativeOperation(
                    n("LSQplMarkPoint.nop"),
                    t.i64.cast([0, 1021656516]),
                    r[2],
                    "dasm_delete_backup_on_client_sproc_end",
                  )
                : t.resolve();
            },
            function (e) {
              return r[2] !== void 0
                ? t.nativeOperation(
                    n("LSQplMarkEnd.nop"),
                    t.i64.cast([0, 1021656516]),
                    r[2],
                    !r[7],
                  )
                : t.resolve();
            },
            function (e) {
              return (
                (r[8] = t.i64.of_float(Date.now())),
                (r[9] = t.i64.random()),
                (r[11] = "Finishing execution. Execution time: "),
                (r[12] = t.i64.to_string(t.i64.sub(r[8], r[0]))),
                (r[13] = " ms"),
                (r[10] = ""),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  [
                    "[EncryptedBackups][LSEncryptedBackupsDeleteBackupOnClientStoredProcedure] ",
                    r[10],
                    r[11],
                    r[10],
                    r[12],
                    r[10],
                    r[13],
                  ].join(""),
                ),
                t.i64.eq(
                  t.i64.mod_(r[9], t.i64.cast([0, 1e3])),
                  t.i64.cast([0, 0]),
                )
                  ? ((r[14] = ","),
                    (r[15] = t.createArray()),
                    t.nativeOperation(
                      n("LSLogMebClientEvent.nop"),
                      "LSEncryptedBackupsDeleteBackupOnClientStoredProcedure",
                      [r[11], r[14], r[12], r[14], r[13]].join(""),
                      r[15],
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
      "LSEncryptedBackupsDeleteBackupOnClientStoredProcedure"),
      (e.__tables__ = [
        "secure_encrypted_backups_client_state",
        "secure_encrypted_backups_epochs",
        "secure_encrypted_backups_generated_recovery_code",
        "secure_encrypted_backups_recovery_code_status",
        "encrypted_backups",
        "encrypted_backups_virtual_devices",
        "encrypted_backups_metadata",
        "pending_backups_context_v2",
        "pending_tasks",
      ]),
      (a.exports = e));
  },
  null,
);
