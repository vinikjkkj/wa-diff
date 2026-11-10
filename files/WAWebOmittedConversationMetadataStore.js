__d(
  "WAWebOmittedConversationMetadataStore",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebOmittedConversationMetadataBatch",
    "WAWebOmittedConversationMetadataIdentity",
    "WAWebOmittedConversationMetadataPairing",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaOmittedConversationMetadata",
    "WAWebSchemaOmittedConversationMetadataSnapshot",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "active",
      c = [
        "omitted-conversation-metadata-snapshot",
        "omitted-conversation-metadata",
      ];
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (
            t.syncType !==
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .INITIAL_BOOTSTRAP
          )
            throw r("err")("Omitted metadata baseline is not INITIAL");
          if (
            a !==
            (yield o(
              "WAWebOmittedConversationMetadataPairing",
            ).getOmittedMetadataPairingId())
          )
            throw r("err")("Omitted metadata pairing attempt changed");
          var i = t.omittedConversationMetadataSnapshotId,
            l =
              i == null
                ? null
                : o(
                    "WAWebOmittedConversationMetadataBatch",
                  ).validateOmittedMetadataSnapshotId(i);
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              c,
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (r) {
                    var i = r[0],
                      c = r[1],
                      d = yield i.get(u);
                    if (l == null) {
                      (yield c.clear(), yield i.clear());
                      return;
                    }
                    ((d == null ? void 0 : d.snapshotId) !== l ||
                      (d == null ? void 0 : d.pairingId) !== a) &&
                      (yield c.clear(),
                      yield i.clear(),
                      yield i.createOrMerge(u, {
                        id: u,
                        snapshotId: l,
                        pairingId: a,
                        nextBatchIndex: 0,
                        ordinaryHistoryObserved: !1,
                        complete: !1,
                      }));
                    var m = t.conversations.flatMap(function (e) {
                        return o("WAJids").validateChatJid(
                          o("WAWebWidFactory").createWid(e.id).toJid(),
                        ) == null
                          ? []
                          : [
                              o(
                                "WAWebOmittedConversationMetadataIdentity",
                              ).getOmittedMetadataIdentity(e),
                            ];
                      }),
                      p = yield c.bulkGet(
                        m.flatMap(function (e) {
                          return [e.historyId, e.accountLid].filter(Boolean);
                        }),
                      ),
                      _ = [];
                    yield m.reduce(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, t) {
                            var n;
                            (yield e,
                              _.push(
                                yield c.equals(
                                  ["accountLid"],
                                  (n = t.accountLid) != null ? n : t.historyId,
                                ),
                              ));
                          },
                        );
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })(),
                      (s || (s = n("Promise"))).resolve(),
                    );
                    var f = [].concat(p, _.flat()).filter(function (e) {
                      return (e == null ? void 0 : e.kind) === "metadata";
                    });
                    if (
                      o(
                        "WAWebOmittedConversationMetadataIdentity",
                      ).findStoredOmittedMetadataIdentityConflict(m, f, []) !=
                      null
                    ) {
                      (yield c.clear(),
                        yield i.clear(),
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Omitted metadata overlaps a later INITIAL chunk; snapshot discarded",
                              ])),
                          )
                          .sendLogs("omitted-metadata-initial-overlap"));
                      return;
                    }
                    yield c.bulkCreateOrMerge(
                      m.map(function (e) {
                        return babelHelpers.extends(
                          { id: e.historyId },
                          e.accountLid == null
                            ? {}
                            : { accountLid: e.accountLid },
                          { snapshotId: l, kind: "initial" },
                        );
                      }),
                    );
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t !==
            (yield o(
              "WAWebOmittedConversationMetadataPairing",
            ).getOmittedMetadataPairingId())
          )
            throw r("err")("Omitted metadata pairing attempt changed");
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              c,
              (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (a) {
                    var i = a[0],
                      l = a[1],
                      c = yield i.get(u);
                    if (c == null || c.pairingId !== t)
                      throw r("err")(
                        "Omitted metadata INITIAL association is unavailable",
                      );
                    var d = yield l.get(
                        o(
                          "WAWebOmittedConversationMetadataIdentity",
                        ).metadataBatchRowId(e.index),
                      ),
                      m = o(
                        "WAWebOmittedConversationMetadataBatch",
                      ).validateOmittedMetadataSession(e, c, d);
                    if (m)
                      return {
                        retry: !0,
                        entries: e.identities.length,
                        complete: c.complete,
                      };
                    var p = e.identities.flatMap(function (e) {
                        return [e.historyId, e.accountLid].filter(Boolean);
                      }),
                      _ = yield l.bulkGet(p),
                      f = [];
                    yield e.identities.reduce(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, t) {
                            var n;
                            (yield e,
                              f.push(
                                yield l.equals(
                                  ["accountLid"],
                                  (n = t.accountLid) != null ? n : t.historyId,
                                ),
                              ));
                          },
                        );
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })(),
                      (s || (s = n("Promise"))).resolve(),
                    );
                    var g = o(
                      "WAWebOmittedConversationMetadataIdentity",
                    ).findStoredOmittedMetadataIdentityConflict(
                      e.identities,
                      _,
                      f,
                    );
                    if (g === "initial")
                      throw r("err")(
                        "Omitted metadata overlaps the INITIAL selection",
                      );
                    if (g === "metadata")
                      throw r("err")(
                        "Omitted metadata repeats a previous conversation identity",
                      );
                    var h = e.conversations.map(function (t, n) {
                      var r = e.identities[n];
                      return {
                        id: r.historyId,
                        snapshotId: e.snapshotId,
                        kind: "metadata",
                        accountLid: r.accountLid,
                        batchIndex: e.index,
                        payload: o("encodeProtobuf")
                          .encodeProtobuf(
                            o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
                            {
                              syncType: o("WAWebProtobufsHistorySync.pb")
                                .HistorySync$HistorySyncType.RECENT,
                              conversations: [t],
                              accounts: e.accounts,
                              phoneNumberToLidMappings:
                                e.phoneNumberToLidMappings,
                            },
                          )
                          .readBuffer(),
                      };
                    });
                    return (
                      h.push({
                        id: o(
                          "WAWebOmittedConversationMetadataIdentity",
                        ).metadataBatchRowId(e.index),
                        snapshotId: e.snapshotId,
                        kind: "batch",
                        fingerprint: e.fingerprint,
                        batchIndex: e.index,
                        transportOrder: e.transportOrder,
                      }),
                      yield l.bulkCreateOrMerge(h),
                      yield i.merge(u, {
                        nextBatchIndex: e.index + 1,
                        expectedBatchCount: e.count,
                        snapshotTimestampMs: e.timestampMs,
                        complete: e.complete,
                      }),
                      {
                        retry: !1,
                        entries: e.identities.length,
                        complete: e.complete,
                      }
                    );
                  },
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })(),
            );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaOmittedConversationMetadataSnapshot")
            .getOmittedConversationMetadataSnapshotTable()
            .get(u);
          if (e == null) return null;
          var t = yield o(
            "WAWebOmittedConversationMetadataPairing",
          ).getOmittedMetadataPairingId();
          return e.pairingId === t ? e : null;
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              c,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e[0],
                      n = e[1];
                    (yield n.clear(), yield t.clear());
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield f();
          e != null &&
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                c,
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        r = yield n.get(u);
                      (r == null ? void 0 : r.snapshotId) === e.snapshotId &&
                        (r == null ? void 0 : r.pairingId) === e.pairingId &&
                        (yield n.merge(u, { ordinaryHistoryObserved: !0 }));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f();
          if (t == null) return !1;
          var n = yield o("WAWebSchemaOmittedConversationMetadata")
            .getOmittedConversationMetadataTable()
            .get(
              o("WAWebOmittedConversationMetadataIdentity").metadataBatchRowId(
                e - 1,
              ),
            );
          return (
            (n == null ? void 0 : n.snapshotId) === t.snapshotId &&
            (n == null ? void 0 : n.kind) === "batch"
          );
        })),
        S.apply(this, arguments)
      );
    }
    ((l.ACTIVE_OMITTED_METADATA_SNAPSHOT = u),
      (l.OMITTED_METADATA_TABLES = c),
      (l.observeOmittedMetadataInitial = d),
      (l.persistOmittedMetadataBatch = p),
      (l.getCurrentOmittedMetadataSnapshot = f),
      (l.discardOmittedMetadataSnapshot = h),
      (l.observeOmittedMetadataOrdinaryRecent = C),
      (l.isPersistedOmittedMetadataTransport = v));
  },
  98,
);
