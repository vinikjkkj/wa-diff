__d(
  "LSDeleteThenInsertContact",
  [
    "LSBase64Decode.nop",
    "LSGetViewerFBID",
    "LSMinosVerifySingleEpoch.nop",
    "LSQplAnnotateString.nop",
    "LSQplMarkEnd.nop",
    "LSQplMarkPoint.nop",
    "LSQplStartTrace.nop",
    "LSSetThreadImageURL",
    "LSWriteMinosPublicKey.nop",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        o = [],
        a = [];
      return t.sequence([
        function (a) {
          return t.sequence([
            function (r) {
              return e[50] !== void 0
                ? t.sequence([
                    function (r) {
                      return t
                        .nativeOperation(n("LSBase64Decode.nop"), e[50])
                        .then(function (e) {
                          var t;
                          return ((t = e), (o[17] = t[0]), t);
                        });
                    },
                    function (e) {
                      return (o[0] = o[17]);
                    },
                  ])
                : t.resolve((o[0] = void 0));
            },
            function (r) {
              return e[52] !== void 0
                ? t.sequence([
                    function (r) {
                      return t
                        .nativeOperation(n("LSBase64Decode.nop"), e[52])
                        .then(function (e) {
                          var t;
                          return ((t = e), (o[17] = t[0]), t);
                        });
                    },
                    function (e) {
                      return (o[1] = o[17]);
                    },
                  ])
                : t.resolve((o[1] = void 0));
            },
            function (r) {
              return e[53] !== void 0
                ? t.sequence([
                    function (r) {
                      return t
                        .nativeOperation(n("LSBase64Decode.nop"), e[53])
                        .then(function (e) {
                          var t;
                          return ((t = e), (o[17] = t[0]), t);
                        });
                    },
                    function (e) {
                      return (o[2] = o[17]);
                    },
                  ])
                : t.resolve((o[2] = void 0));
            },
            function (r) {
              return e[55] !== void 0
                ? t.sequence([
                    function (r) {
                      return t
                        .nativeOperation(n("LSBase64Decode.nop"), e[55])
                        .then(function (e) {
                          var t;
                          return ((t = e), (o[17] = t[0]), t);
                        });
                    },
                    function (e) {
                      return (o[3] = o[17]);
                    },
                  ])
                : t.resolve((o[3] = void 0));
            },
            function (r) {
              return e[56] !== void 0
                ? t.sequence([
                    function (r) {
                      return t
                        .nativeOperation(n("LSBase64Decode.nop"), e[56])
                        .then(function (e) {
                          var t;
                          return ((t = e), (o[17] = t[0]), t);
                        });
                    },
                    function (e) {
                      return (o[4] = o[17]);
                    },
                  ])
                : t.resolve((o[4] = void 0));
            },
            function (r) {
              return e[57] !== void 0
                ? t.sequence([
                    function (r) {
                      return t
                        .nativeOperation(n("LSBase64Decode.nop"), e[57])
                        .then(function (e) {
                          var t;
                          return ((t = e), (o[17] = t[0]), t);
                        });
                    },
                    function (e) {
                      return (o[5] = o[17]);
                    },
                  ])
                : t.resolve((o[5] = void 0));
            },
            function (r) {
              return e[58] !== void 0
                ? t.sequence([
                    function (r) {
                      return t
                        .nativeOperation(n("LSBase64Decode.nop"), e[58])
                        .then(function (e) {
                          var t;
                          return ((t = e), (o[17] = t[0]), t);
                        });
                    },
                    function (e) {
                      return (o[6] = o[17]);
                    },
                  ])
                : t.resolve((o[6] = void 0));
            },
            function (a) {
              var i, l, s;
              return (
                (o[16] = "LSContactDeleteThenInsertContactStoredProcedure"),
                r("gkx")("11690") && r("gkx")("16269")
                  ? t.sequence([
                      function (r) {
                        var a;
                        return (
                          (o[17] = t.i64.random()),
                          (o[27] = t.i64.to_string(o[17])),
                          t.blobs.eq(o[2], void 0) &&
                          t.blobs.eq(o[1], void 0) &&
                          t.i64.eq(e[51], void 0) &&
                          t.i64.eq(e[54], void 0) &&
                          t.blobs.eq(o[3], void 0) &&
                          t.blobs.eq(o[4], void 0) &&
                          t.blobs.eq(o[5], void 0) &&
                          t.blobs.eq(o[0], void 0)
                            ? t.resolve(
                                ((a = [
                                  o[0],
                                  o[2],
                                  o[1],
                                  e[51],
                                  e[54],
                                  o[3],
                                  o[4],
                                  o[5],
                                  o[6],
                                ]),
                                (o[18] = a[0]),
                                (o[19] = a[1]),
                                (o[20] = a[2]),
                                (o[21] = a[3]),
                                (o[22] = a[4]),
                                (o[23] = a[5]),
                                (o[24] = a[6]),
                                (o[25] = a[7]),
                                (o[26] = a[8]),
                                a),
                              )
                            : t.sequence([
                                function (e) {
                                  return o[27] !== void 0
                                    ? t.nativeOperation(
                                        n("LSQplStartTrace.nop"),
                                        t.i64.cast([0, 1021650676]),
                                        o[27],
                                        !0,
                                        void 0,
                                      )
                                    : t.resolve();
                                },
                                function (e) {
                                  return o[27] !== void 0 && o[16] !== void 0
                                    ? t.nativeOperation(
                                        n("LSQplAnnotateString.nop"),
                                        t.i64.cast([0, 1021650676]),
                                        o[27],
                                        "source_for_validation",
                                        o[16],
                                      )
                                    : t.resolve();
                                },
                                function (r) {
                                  return t.blobs.neq(o[2], void 0)
                                    ? t.sequence([
                                        function (r) {
                                          return t.blobs.neq(o[4], void 0)
                                            ? t.sequence([
                                                function (r) {
                                                  return t.blobs.neq(
                                                    o[3],
                                                    void 0,
                                                  )
                                                    ? t.sequence([
                                                        function (r) {
                                                          return t.blobs.neq(
                                                            o[0],
                                                            void 0,
                                                          )
                                                            ? t.sequence([
                                                                function (r) {
                                                                  return t.blobs.neq(
                                                                    o[5],
                                                                    void 0,
                                                                  )
                                                                    ? t.sequence(
                                                                        [
                                                                          function (
                                                                            r,
                                                                          ) {
                                                                            return t
                                                                              .nativeOperation(
                                                                                n(
                                                                                  "LSMinosVerifySingleEpoch.nop",
                                                                                ),
                                                                                o[2],
                                                                                e[0],
                                                                                o[3],
                                                                                o[0],
                                                                                o[4],
                                                                                o[6],
                                                                                o[5],
                                                                              )
                                                                              .then(
                                                                                function (
                                                                                  e,
                                                                                ) {
                                                                                  var t;
                                                                                  return (
                                                                                    (t =
                                                                                      e),
                                                                                    (o[42] =
                                                                                      t[0]),
                                                                                    t
                                                                                  );
                                                                                },
                                                                              );
                                                                          },
                                                                          function (
                                                                            r,
                                                                          ) {
                                                                            return o[42]
                                                                              ? t.sequence(
                                                                                  [
                                                                                    function (
                                                                                      e,
                                                                                    ) {
                                                                                      return o[27] !==
                                                                                        void 0
                                                                                        ? t.nativeOperation(
                                                                                            n(
                                                                                              "LSQplMarkPoint.nop",
                                                                                            ),
                                                                                            t.i64.cast(
                                                                                              [
                                                                                                0,
                                                                                                1021650676,
                                                                                              ],
                                                                                            ),
                                                                                            o[27],
                                                                                            "native_op_success",
                                                                                          )
                                                                                        : t.resolve();
                                                                                    },
                                                                                    function (
                                                                                      e,
                                                                                    ) {
                                                                                      return o[27] !==
                                                                                        void 0
                                                                                        ? t.nativeOperation(
                                                                                            n(
                                                                                              "LSQplMarkEnd.nop",
                                                                                            ),
                                                                                            t.i64.cast(
                                                                                              [
                                                                                                0,
                                                                                                1021650676,
                                                                                              ],
                                                                                            ),
                                                                                            o[27],
                                                                                            !0,
                                                                                          )
                                                                                        : t.resolve();
                                                                                    },
                                                                                  ],
                                                                                )
                                                                              : t.sequence(
                                                                                  [
                                                                                    function (
                                                                                      r,
                                                                                    ) {
                                                                                      return (
                                                                                        (o[43] =
                                                                                          [
                                                                                            "MinosPublicKeyClientUtils",
                                                                                            ".",
                                                                                            [
                                                                                              "Key verification failed for contact id: ",
                                                                                              "",
                                                                                              t.i64.to_string(
                                                                                                e[0],
                                                                                              ),
                                                                                            ].join(
                                                                                              "",
                                                                                            ),
                                                                                          ].join(
                                                                                            "",
                                                                                          )),
                                                                                        o[27] !==
                                                                                          void 0 &&
                                                                                        o[43] !==
                                                                                          void 0
                                                                                          ? t.nativeOperation(
                                                                                              n(
                                                                                                "LSQplAnnotateString.nop",
                                                                                              ),
                                                                                              t.i64.cast(
                                                                                                [
                                                                                                  0,
                                                                                                  1021650676,
                                                                                                ],
                                                                                              ),
                                                                                              o[27],
                                                                                              "error",
                                                                                              o[43],
                                                                                            )
                                                                                          : t.resolve()
                                                                                      );
                                                                                    },
                                                                                    function (
                                                                                      e,
                                                                                    ) {
                                                                                      return o[27] !==
                                                                                        void 0
                                                                                        ? t.nativeOperation(
                                                                                            n(
                                                                                              "LSQplMarkEnd.nop",
                                                                                            ),
                                                                                            t.i64.cast(
                                                                                              [
                                                                                                0,
                                                                                                1021650676,
                                                                                              ],
                                                                                            ),
                                                                                            o[27],
                                                                                            !1,
                                                                                          )
                                                                                        : t.resolve();
                                                                                    },
                                                                                  ],
                                                                                );
                                                                          },
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            return (o[41] =
                                                                              o[42]);
                                                                          },
                                                                        ],
                                                                      )
                                                                    : t.sequence(
                                                                        [
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            return (
                                                                              (o[42] =
                                                                                [
                                                                                  "MinosPublicKeyClientUtils",
                                                                                  ".",
                                                                                  "Missing or Null Epoch Signature Self",
                                                                                ].join(
                                                                                  "",
                                                                                )),
                                                                              o[27] !==
                                                                                void 0 &&
                                                                              o[42] !==
                                                                                void 0
                                                                                ? t.nativeOperation(
                                                                                    n(
                                                                                      "LSQplAnnotateString.nop",
                                                                                    ),
                                                                                    t.i64.cast(
                                                                                      [
                                                                                        0,
                                                                                        1021650676,
                                                                                      ],
                                                                                    ),
                                                                                    o[27],
                                                                                    "error",
                                                                                    o[42],
                                                                                  )
                                                                                : t.resolve()
                                                                            );
                                                                          },
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            return o[27] !==
                                                                              void 0
                                                                              ? t.nativeOperation(
                                                                                  n(
                                                                                    "LSQplMarkEnd.nop",
                                                                                  ),
                                                                                  t.i64.cast(
                                                                                    [
                                                                                      0,
                                                                                      1021650676,
                                                                                    ],
                                                                                  ),
                                                                                  o[27],
                                                                                  !1,
                                                                                )
                                                                              : t.resolve();
                                                                          },
                                                                          function (
                                                                            e,
                                                                          ) {
                                                                            return (o[41] =
                                                                              !1);
                                                                          },
                                                                        ],
                                                                      );
                                                                },
                                                                function (e) {
                                                                  return (o[40] =
                                                                    o[41]);
                                                                },
                                                              ])
                                                            : t.sequence([
                                                                function (e) {
                                                                  return (
                                                                    (o[41] = [
                                                                      "MinosPublicKeyClientUtils",
                                                                      ".",
                                                                      "Missing or Null Minos Encryption Public Key",
                                                                    ].join("")),
                                                                    o[27] !==
                                                                      void 0 &&
                                                                    o[41] !==
                                                                      void 0
                                                                      ? t.nativeOperation(
                                                                          n(
                                                                            "LSQplAnnotateString.nop",
                                                                          ),
                                                                          t.i64.cast(
                                                                            [
                                                                              0,
                                                                              1021650676,
                                                                            ],
                                                                          ),
                                                                          o[27],
                                                                          "error",
                                                                          o[41],
                                                                        )
                                                                      : t.resolve()
                                                                  );
                                                                },
                                                                function (e) {
                                                                  return o[27] !==
                                                                    void 0
                                                                    ? t.nativeOperation(
                                                                        n(
                                                                          "LSQplMarkEnd.nop",
                                                                        ),
                                                                        t.i64.cast(
                                                                          [
                                                                            0,
                                                                            1021650676,
                                                                          ],
                                                                        ),
                                                                        o[27],
                                                                        !1,
                                                                      )
                                                                    : t.resolve();
                                                                },
                                                                function (e) {
                                                                  return (o[40] =
                                                                    !1);
                                                                },
                                                              ]);
                                                        },
                                                        function (e) {
                                                          return (o[39] =
                                                            o[40]);
                                                        },
                                                      ])
                                                    : t.sequence([
                                                        function (e) {
                                                          return (
                                                            (o[40] = [
                                                              "MinosPublicKeyClientUtils",
                                                              ".",
                                                              "Missing or Null Minos Signing Public Key",
                                                            ].join("")),
                                                            o[27] !== void 0 &&
                                                            o[40] !== void 0
                                                              ? t.nativeOperation(
                                                                  n(
                                                                    "LSQplAnnotateString.nop",
                                                                  ),
                                                                  t.i64.cast([
                                                                    0,
                                                                    1021650676,
                                                                  ]),
                                                                  o[27],
                                                                  "error",
                                                                  o[40],
                                                                )
                                                              : t.resolve()
                                                          );
                                                        },
                                                        function (e) {
                                                          return o[27] !==
                                                            void 0
                                                            ? t.nativeOperation(
                                                                n(
                                                                  "LSQplMarkEnd.nop",
                                                                ),
                                                                t.i64.cast([
                                                                  0, 1021650676,
                                                                ]),
                                                                o[27],
                                                                !1,
                                                              )
                                                            : t.resolve();
                                                        },
                                                        function (e) {
                                                          return (o[39] = !1);
                                                        },
                                                      ]);
                                                },
                                                function (e) {
                                                  return (o[38] = o[39]);
                                                },
                                              ])
                                            : t.sequence([
                                                function (e) {
                                                  return (
                                                    (o[39] = [
                                                      "MinosPublicKeyClientUtils",
                                                      ".",
                                                      "Missing or Null Minos Auth Public Key",
                                                    ].join("")),
                                                    o[27] !== void 0 &&
                                                    o[39] !== void 0
                                                      ? t.nativeOperation(
                                                          n(
                                                            "LSQplAnnotateString.nop",
                                                          ),
                                                          t.i64.cast([
                                                            0, 1021650676,
                                                          ]),
                                                          o[27],
                                                          "error",
                                                          o[39],
                                                        )
                                                      : t.resolve()
                                                  );
                                                },
                                                function (e) {
                                                  return o[27] !== void 0
                                                    ? t.nativeOperation(
                                                        n("LSQplMarkEnd.nop"),
                                                        t.i64.cast([
                                                          0, 1021650676,
                                                        ]),
                                                        o[27],
                                                        !1,
                                                      )
                                                    : t.resolve();
                                                },
                                                function (e) {
                                                  return (o[38] = !1);
                                                },
                                              ]);
                                        },
                                        function (e) {
                                          return (o[28] = o[38]);
                                        },
                                      ])
                                    : t.sequence([
                                        function (e) {
                                          return (
                                            (o[38] = [
                                              "MinosPublicKeyClientUtils",
                                              ".",
                                              "Missing or Null Minos Epoch Anon ID",
                                            ].join("")),
                                            o[27] !== void 0 && o[38] !== void 0
                                              ? t.nativeOperation(
                                                  n("LSQplAnnotateString.nop"),
                                                  t.i64.cast([0, 1021650676]),
                                                  o[27],
                                                  "error",
                                                  o[38],
                                                )
                                              : t.resolve()
                                          );
                                        },
                                        function (e) {
                                          return o[27] !== void 0
                                            ? t.nativeOperation(
                                                n("LSQplMarkEnd.nop"),
                                                t.i64.cast([0, 1021650676]),
                                                o[27],
                                                !1,
                                              )
                                            : t.resolve();
                                        },
                                        function (e) {
                                          return (o[28] = !1);
                                        },
                                      ]);
                                },
                                function (n) {
                                  var r, a, i, l, s;
                                  return (
                                    o[28]
                                      ? ((r = [
                                          o[0],
                                          o[2],
                                          o[1],
                                          e[51],
                                          e[54],
                                          o[3],
                                          o[4],
                                          o[5],
                                          o[6],
                                        ]),
                                        (o[29] = r[0]),
                                        (o[30] = r[1]),
                                        (o[31] = r[2]),
                                        (o[32] = r[3]),
                                        (o[33] = r[4]),
                                        (o[34] = r[5]),
                                        (o[35] = r[6]),
                                        (o[36] = r[7]),
                                        (o[37] = r[8]))
                                      : ((o[38] = t.createArray()),
                                        (o[51] = (o[38].push(e[0]), o[38])),
                                        (o[39] = new t.Map()),
                                        (o[40] = o[39].get(e[0])),
                                        o[40] ? (o[41] = !1) : (o[41] = !0),
                                        o[41]
                                          ? ((i = [
                                              void 0,
                                              void 0,
                                              void 0,
                                              void 0,
                                              void 0,
                                              void 0,
                                              void 0,
                                              void 0,
                                              void 0,
                                            ]),
                                            (o[42] = i[0]),
                                            (o[43] = i[1]),
                                            (o[44] = i[2]),
                                            (o[45] = i[3]),
                                            (o[46] = i[4]),
                                            (o[47] = i[5]),
                                            (o[48] = i[6]),
                                            (o[49] = i[7]),
                                            (o[50] = i[8]))
                                          : ((o[51] = o[40].get(
                                              "mailbox_encryption_public_key",
                                            )),
                                            (o[52] =
                                              o[40].get("epoch_anon_id")),
                                            (o[53] = o[40].get("epoch_head")),
                                            (o[54] = o[40].get(
                                              "epoch_head_creation_time",
                                            )),
                                            (o[55] = o[40].get(
                                              "minos_mailbox_public_keys_fbid",
                                            )),
                                            (a = [
                                              o[51],
                                              o[52],
                                              o[53],
                                              o[54],
                                              o[55],
                                              void 0,
                                              void 0,
                                              void 0,
                                              void 0,
                                            ]),
                                            (o[42] = a[0]),
                                            (o[43] = a[1]),
                                            (o[44] = a[2]),
                                            (o[45] = a[3]),
                                            (o[46] = a[4]),
                                            (o[47] = a[5]),
                                            (o[48] = a[6]),
                                            (o[49] = a[7]),
                                            (o[50] = a[8])),
                                        (l = [
                                          o[42],
                                          o[43],
                                          o[44],
                                          o[45],
                                          o[46],
                                          o[47],
                                          o[48],
                                          o[49],
                                          o[50],
                                        ]),
                                        (o[29] = l[0]),
                                        (o[30] = l[1]),
                                        (o[31] = l[2]),
                                        (o[32] = l[3]),
                                        (o[33] = l[4]),
                                        (o[34] = l[5]),
                                        (o[35] = l[6]),
                                        (o[36] = l[7]),
                                        (o[37] = l[8])),
                                    (s = [
                                      o[29],
                                      o[30],
                                      o[31],
                                      o[32],
                                      o[33],
                                      o[34],
                                      o[35],
                                      o[36],
                                      o[37],
                                    ]),
                                    (o[18] = s[0]),
                                    (o[19] = s[1]),
                                    (o[20] = s[2]),
                                    (o[21] = s[3]),
                                    (o[22] = s[4]),
                                    (o[23] = s[5]),
                                    (o[24] = s[6]),
                                    (o[25] = s[7]),
                                    (o[26] = s[8])
                                  );
                                },
                              ])
                        );
                      },
                      function (e) {
                        var t;
                        return (
                          (t = [
                            o[18],
                            o[19],
                            o[20],
                            o[21],
                            o[22],
                            o[23],
                            o[24],
                            o[25],
                            o[26],
                          ]),
                          (o[7] = t[0]),
                          (o[8] = t[1]),
                          (o[9] = t[2]),
                          (o[10] = t[3]),
                          (o[11] = t[4]),
                          (o[12] = t[5]),
                          (o[13] = t[6]),
                          (o[14] = t[7]),
                          (o[15] = t[8]),
                          t
                        );
                      },
                    ])
                  : t.resolve(
                      ((o[17] = t.createArray()),
                      (o[30] = (o[17].push(e[0]), o[17])),
                      (o[18] = new t.Map()),
                      (o[19] = o[18].get(e[0])),
                      o[19] ? (o[20] = !1) : (o[20] = !0),
                      o[20]
                        ? ((l = [
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                          ]),
                          (o[21] = l[0]),
                          (o[22] = l[1]),
                          (o[23] = l[2]),
                          (o[24] = l[3]),
                          (o[25] = l[4]),
                          (o[26] = l[5]),
                          (o[27] = l[6]),
                          (o[28] = l[7]),
                          (o[29] = l[8]))
                        : ((o[30] = o[19].get("mailbox_encryption_public_key")),
                          (o[31] = o[19].get("epoch_anon_id")),
                          (o[32] = o[19].get("epoch_head")),
                          (o[33] = o[19].get("epoch_head_creation_time")),
                          (o[34] = o[19].get("minos_mailbox_public_keys_fbid")),
                          (i = [
                            o[30],
                            o[31],
                            o[32],
                            o[33],
                            o[34],
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                          ]),
                          (o[21] = i[0]),
                          (o[22] = i[1]),
                          (o[23] = i[2]),
                          (o[24] = i[3]),
                          (o[25] = i[4]),
                          (o[26] = i[5]),
                          (o[27] = i[6]),
                          (o[28] = i[7]),
                          (o[29] = i[8])),
                      (s = [
                        o[21],
                        o[22],
                        o[23],
                        o[24],
                        o[25],
                        o[26],
                        o[27],
                        o[28],
                        o[29],
                      ]),
                      (o[7] = s[0]),
                      (o[8] = s[1]),
                      (o[9] = s[2]),
                      (o[10] = s[3]),
                      (o[11] = s[4]),
                      (o[12] = s[5]),
                      (o[13] = s[6]),
                      (o[14] = s[7]),
                      (o[15] = s[8])),
                    )
              );
            },
            function (a) {
              return (
                r("gkx")("20879") && r("gkx")("16269"),
                r("gkx")("11690") && r("gkx")("16269")
                  ? t.nativeOperation(
                      n("LSWriteMinosPublicKey.nop"),
                      e[0],
                      o[8],
                      o[10],
                      o[7],
                      o[9],
                      o[11],
                      o[14],
                      o[13],
                      o[12],
                      o[15],
                    )
                  : t.resolve()
              );
            },
            function (r) {
              return t.sequence([
                function (r) {
                  return t.db
                    .table(53)
                    .fetch([[[e[0]]], "optimistic"])
                    .next()
                    .then(function (e, r) {
                      var a = e.done,
                        i = e.value;
                      return a
                        ? (o[17] = t.i64.cast([0, 0]))
                        : ((r = i.item),
                          t.sequence([
                            function (e) {
                              return t
                                .sortBy(
                                  t.filter(
                                    t.db.table(54).fetch(),
                                    function (e) {
                                      return t.i64.eq(e.bucketId, r.bucketId);
                                    },
                                  ),
                                  [["timestampMs", "DESC"]],
                                )
                                .next()
                                .then(function (e, r) {
                                  var a = e.done,
                                    i = e.value;
                                  return a
                                    ? (o[20] = t.i64.cast([0, 0]))
                                    : ((r = i.item),
                                      t.sequence([
                                        function (e) {
                                          return t
                                            .storedProcedure(
                                              n("LSGetViewerFBID"),
                                            )
                                            .then(function (e) {
                                              var t;
                                              return (
                                                (t = e),
                                                (o[22] = t[0]),
                                                t
                                              );
                                            });
                                        },
                                        function (e) {
                                          return t.db
                                            .table(55)
                                            .fetch([
                                              [
                                                [
                                                  r.storyId,
                                                  o[22],
                                                  t.i64.cast([0, 1]),
                                                ],
                                              ],
                                            ])
                                            .next()
                                            .then(function (e, n) {
                                              var r = e.done,
                                                a = e.value;
                                              return r
                                                ? ((o[25] = t.i64.cast([0, 1])),
                                                  (o[23] = o[25]))
                                                : ((n = a.item),
                                                  (o[25] = t.i64.cast([0, 2])),
                                                  (o[23] = o[25]));
                                            });
                                        },
                                        function (e) {
                                          return (o[20] = o[23]);
                                        },
                                      ]));
                                });
                            },
                            function (e) {
                              return (o[17] = o[20]);
                            },
                          ]));
                    });
                },
                function (n) {
                  return (
                    t.i64.eq(o[17], t.i64.cast([0, 0]))
                      ? (t.i64.eq(e[23], t.i64.cast([0, 39423]))
                          ? (o[20] = t.i64.cast([0, 1]))
                          : (t.i64.eq(e[23], t.i64.cast([0, 14342874]))
                              ? (o[21] = t.i64.cast([0, 2]))
                              : (o[21] = void 0),
                            (o[20] = o[21])),
                        (o[19] = o[20]))
                      : (o[19] = o[17]),
                    t
                      .filter(t.db.table(7).fetch([[[e[0]]]]), function (n) {
                        return (
                          t.i64.eq(n.id, e[0]) &&
                          t.i64.eq(t.i64.cast([0, 1]), t.i64.cast([0, 1])) &&
                          t.i64.gt(n.authorityLevel, e[21])
                        );
                      })
                      .next()
                      .then(function (n) {
                        var r = n.done,
                          a = n.value;
                        return r
                          ? t.db
                              .table(7)
                              .put({
                                id: e[0],
                                profilePictureUrl: e[2],
                                profilePictureFallbackUrl: e[3],
                                profilePictureUrlExpirationTimestampMs: e[4],
                                profilePictureLargeUrl: e[5],
                                profilePictureLargeFallbackUrl: e[6],
                                profilePictureLargeUrlExpirationTimestampMs:
                                  e[7],
                                name: e[9],
                                secondaryName: e[41],
                                normalizedNameForSearch: e[10],
                                normalizedSearchTerms: e[33],
                                isMessengerUser: e[11],
                                isMemorialized: e[12],
                                isManagedByViewer: e[35],
                                blockedByViewerStatus: e[14],
                                rank: e[17],
                                firstName: e[18],
                                contactType: e[19],
                                contactTypeExact: e[20],
                                authorityLevel: e[21],
                                messengerCallLogThirdPartyId: e[22],
                                profileRingColor: e[23],
                                requiresMultiway: e[24],
                                blockedSinceTimestampMs: e[25],
                                fbUnblockedSinceTimestampMs: e[48],
                                canViewerMessage: e[26],
                                profileRingColorExpirationTimestampMs: e[27],
                                phoneNumber: e[28],
                                emailAddress: e[29],
                                workCompanyId: e[30],
                                workCompanyName: e[31],
                                workJobTitle: e[32],
                                deviceContactId: e[34],
                                workForeignEntityType: e[36],
                                capabilities: e[37],
                                capabilities2: e[38],
                                profileRingState: o[19],
                                contactViewerRelationship: e[39],
                                gender: e[40],
                                username: e[43],
                                contactReachabilityStatusType: e[44],
                                friendshipStatus: e[45],
                                restrictionType: e[46],
                                waConnectStatus: e[47],
                                isEmployee: !1,
                                pageType: e[49],
                              })
                          : 0;
                      })
                  );
                },
              ]);
            },
            function (r) {
              return t.storedProcedure(
                n("LSSetThreadImageURL"),
                e[0],
                e[2],
                e[3],
                e[4],
                !1,
                !0,
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(a);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSContactDeleteThenInsertContactStoredProcedure"),
      (e.__tables__ = [
        "story_buckets",
        "stories",
        "story_viewers",
        "contacts",
      ]));
    var s = e;
    l.default = s;
  },
  98,
);
