__d(
  "LSDeleteBackupOnClient",
  [
    "LSAppendDataTraceAddon",
    "LSIsMobileClient",
    "LSLogMEBUploadSuccessEvent.nop",
    "LSLogMebClientEvent.nop",
    "LSQplAnnotateString.nop",
    "LSQplMarkPoint.nop",
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
            function (r) {
              return e[3] !== void 0
                ? t.nativeOperation(
                    n("LSQplMarkPoint.nop"),
                    t.i64.cast([0, 1021646192]),
                    e[3],
                    "dasm_delete_backup_on_client_sproc_start",
                  )
                : t.resolve();
            },
            function (r) {
              return e[3] !== void 0 && e[4] !== void 0
                ? t.nativeOperation(
                    n("LSQplAnnotateString.nop"),
                    t.i64.cast([0, 1021646192]),
                    e[3],
                    "dasm_delete_backup_on_client_error_message",
                    e[4],
                  )
                : t.resolve();
            },
            function (e) {
              return (
                (r[0] = t.i64.of_float(Date.now())),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  "[EncryptedBackups][LSEncryptedBackupsDeleteBackupOnClientStoredProcedure] Beginning execution.",
                ),
                t.i64.neq(void 0, void 0)
                  ? ((r[9] = [
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
                        r[9],
                      ].join(""),
                    ),
                    (r[10] = t.createArray()),
                    t.nativeOperation(
                      n("LSLogMebClientEvent.nop"),
                      "LSEncryptedBackupsDeleteBackupOnClientStoredProcedure",
                      [r[9]].join(""),
                      r[10],
                      t.i64.cast([0, 4]),
                    ))
                  : t.resolve()
              );
            },
            function (e) {
              return (
                (r[1] = "Beginning deleteBackupOnClient stored procedure"),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  ["[EncryptedBackups][deleteBackupOnClient] ", "", r[1]].join(
                    "",
                  ),
                ),
                (r[2] = t.createArray()),
                t.nativeOperation(
                  n("LSLogMebClientEvent.nop"),
                  "deleteBackupOnClient",
                  [r[1]].join(""),
                  r[2],
                  t.i64.cast([0, 4]),
                )
              );
            },
            function (n) {
              return t.i64.neq(e[0], void 0)
                ? t.forEach(t.db.table(168).fetch([[[e[0]]]]), function (e) {
                    return e.delete();
                  })
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
                        (r[9] = "Clearing state management backups tables"),
                        (function (e) {
                          t.logger(e).info(e);
                        })(
                          [
                            "[EncryptedBackups][deleteBackupOnClient] ",
                            "",
                            r[9],
                          ].join(""),
                        ),
                        (r[10] = t.createArray()),
                        t.nativeOperation(
                          n("LSLogMebClientEvent.nop"),
                          "deleteBackupOnClient",
                          [r[9]].join(""),
                          r[10],
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
                            t.filter(t.db.table(184).fetch(), function (n) {
                              return t.i64.eq(n.backupId, e[0]);
                            }),
                            function (e) {
                              return e.delete();
                            },
                          )
                        : t.forEach(t.db.table(184).fetch(), function (e) {
                            return e.delete();
                          });
                    },
                    function (n) {
                      return t.i64.neq(e[0], void 0)
                        ? t.forEach(
                            t.db.table(196).fetch([[[e[0]]]]),
                            function (e) {
                              return e.delete();
                            },
                          )
                        : t.forEach(t.db.table(196).fetch(), function (e) {
                            return e.delete();
                          });
                    },
                  ])
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
                          return ((t = e), (r[10] = t[0]), t);
                        });
                    },
                    function (e) {
                      return (
                        r[10] ? (r[11] = !0) : (r[11] = !1),
                        r[11]
                          ? ((function (e) {
                              t.logger(e).mustfix(e);
                            })(
                              "[EncryptedBackups][MEBTraceUtils] LSDataTraceMciTraceLog native op not supported",
                            ),
                            (r[13] =
                              "LSDataTraceMciTraceLog native op not supported"),
                            (function (e) {
                              t.logger(e).mustfix(e);
                            })(
                              [
                                "[EncryptedBackups][MEBTraceUtils] ",
                                "",
                                r[13],
                              ].join(""),
                            ),
                            (r[12] = t.createArray()),
                            t.nativeOperation(
                              n("LSLogMebClientEvent.nop"),
                              "MEBTraceUtils",
                              r[13],
                              r[12],
                              t.i64.cast([0, 3]),
                            ))
                          : t.resolve()
                      );
                    },
                  ]);
                },
                function (e) {
                  return t.forEach(t.db.table(177).fetch(), function (e) {
                    var r = e.item;
                    return t.sequence([
                      function (e) {
                        return t.forEach(
                          t.db.table(2).fetch([[[r.pendingBackupTaskId]]]),
                          function (e) {
                            return e.delete();
                          },
                        );
                      },
                      function (e) {
                        return t.i64.eq(r.contentType, t.i64.cast([0, 1]))
                          ? t.nativeOperation(
                              n("LSLogMEBUploadSuccessEvent.nop"),
                              r.uniqueKey,
                              r.lsTraceId,
                              !0,
                            )
                          : t.resolve();
                      },
                    ]);
                  });
                },
                function (e) {
                  return t.count(t.db.table(177).fetch()).then(function (e) {
                    return (r[9] = e);
                  });
                },
                function (e) {
                  return t.i64.eq(r[9], t.i64.cast([0, 0]))
                    ? t.sequence([
                        function (e) {
                          return t.resolve();
                        },
                        function (e) {
                          return t
                            .storedProcedure(n("LSIsMobileClient"))
                            .then(function (e) {
                              var t;
                              return ((t = e), (r[10] = t[0]), t);
                            });
                        },
                        function (e) {
                          return (
                            r[10] ? (r[11] = !0) : (r[11] = !1),
                            r[11]
                              ? ((function (e) {
                                  t.logger(e).mustfix(e);
                                })(
                                  "[EncryptedBackups][MEBTraceUtils] LSDataTraceMciTraceLog native op not supported",
                                ),
                                (r[13] =
                                  "LSDataTraceMciTraceLog native op not supported"),
                                (function (e) {
                                  t.logger(e).mustfix(e);
                                })(
                                  [
                                    "[EncryptedBackups][MEBTraceUtils] ",
                                    "",
                                    r[13],
                                  ].join(""),
                                ),
                                (r[12] = t.createArray()),
                                t.nativeOperation(
                                  n("LSLogMebClientEvent.nop"),
                                  "MEBTraceUtils",
                                  r[13],
                                  r[12],
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
                              return ((t = e), (r[10] = t[0]), t);
                            });
                        },
                        function (e) {
                          return (
                            r[10] ? (r[11] = !0) : (r[11] = !1),
                            r[11]
                              ? ((function (e) {
                                  t.logger(e).mustfix(e);
                                })(
                                  "[EncryptedBackups][MEBTraceUtils] LSDataTraceMciTraceLog native op not supported",
                                ),
                                (r[13] =
                                  "LSDataTraceMciTraceLog native op not supported"),
                                (function (e) {
                                  t.logger(e).mustfix(e);
                                })(
                                  [
                                    "[EncryptedBackups][MEBTraceUtils] ",
                                    "",
                                    r[13],
                                  ].join(""),
                                ),
                                (r[12] = t.createArray()),
                                t.nativeOperation(
                                  n("LSLogMebClientEvent.nop"),
                                  "MEBTraceUtils",
                                  r[13],
                                  r[12],
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
                ? ((r[9] = "Clearing data flow backups tables"),
                  (function (e) {
                    t.logger(e).info(e);
                  })(
                    [
                      "[EncryptedBackups][deleteBackupOnClient] ",
                      "",
                      r[9],
                    ].join(""),
                  ),
                  (r[10] = t.createArray()),
                  t.nativeOperation(
                    n("LSLogMebClientEvent.nop"),
                    "deleteBackupOnClient",
                    [r[9]].join(""),
                    r[10],
                    t.i64.cast([0, 4]),
                  ))
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
                    (r[9] = t.createArray()),
                    e[3] !== void 0 && (r[10] = (r[9].push(e[3]), r[9])),
                    t.nativeOperation(
                      n("LSLogMebClientEvent.nop"),
                      "LSEncryptedBackupsDeleteBackupOnClientStoredProcedure",
                      e[4],
                      r[9],
                      t.i64.cast([0, 3]),
                    ))
                  : t.resolve();
            },
            function (e) {
              return (
                (r[3] = t.i64.of_float(Date.now())),
                (r[4] = t.i64.random()),
                (r[6] = "Finishing execution. Execution time: "),
                (r[7] = t.i64.to_string(t.i64.sub(r[3], r[0]))),
                (r[8] = " ms"),
                (r[5] = ""),
                (function (e) {
                  t.logger(e).info(e);
                })(
                  [
                    "[EncryptedBackups][LSEncryptedBackupsDeleteBackupOnClientStoredProcedure] ",
                    r[5],
                    r[6],
                    r[5],
                    r[7],
                    r[5],
                    r[8],
                  ].join(""),
                ),
                t.i64.eq(
                  t.i64.mod_(r[4], t.i64.cast([0, 1e3])),
                  t.i64.cast([0, 0]),
                )
                  ? ((r[9] = ","),
                    (r[10] = t.createArray()),
                    t.nativeOperation(
                      n("LSLogMebClientEvent.nop"),
                      "LSEncryptedBackupsDeleteBackupOnClientStoredProcedure",
                      [r[6], r[9], r[7], r[9], r[8]].join(""),
                      r[10],
                      t.i64.cast([0, 4]),
                    ))
                  : t.resolve()
              );
            },
            function (r) {
              return e[3] !== void 0
                ? t.nativeOperation(
                    n("LSQplMarkPoint.nop"),
                    t.i64.cast([0, 1021646192]),
                    e[3],
                    "dasm_delete_backup_on_client_sproc_end",
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
