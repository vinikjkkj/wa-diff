__d(
  "WAWebOmittedConversationMetadataStore",
  [
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
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "active",
      u = [
        "omitted-conversation-metadata-snapshot",
        "omitted-conversation-metadata",
      ];
    async function c(t, n) {
      if (
        t.syncType !==
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP
      )
        throw r("err")("Omitted metadata baseline is not INITIAL");
      if (
        n !==
        (await o(
          "WAWebOmittedConversationMetadataPairing",
        ).getOmittedMetadataPairingId())
      )
        throw r("err")("Omitted metadata pairing attempt changed");
      var a = t.omittedConversationMetadataSnapshotId,
        i =
          a == null
            ? null
            : o(
                "WAWebOmittedConversationMetadataBatch",
              ).validateOmittedMetadataSnapshotId(a);
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(u, async function (r) {
          var a = r[0],
            l = r[1],
            u = await a.get(s);
          if (i == null) {
            (await l.clear(), await a.clear());
            return;
          }
          ((u == null ? void 0 : u.snapshotId) !== i ||
            (u == null ? void 0 : u.pairingId) !== n) &&
            (await l.clear(),
            await a.clear(),
            await a.createOrMerge(s, {
              id: s,
              snapshotId: i,
              pairingId: n,
              nextBatchIndex: 0,
              ordinaryHistoryObserved: !1,
              complete: !1,
            }));
          var c = t.conversations.flatMap(function (e) {
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
            d = await l.bulkGet(
              c.flatMap(function (e) {
                return [e.historyId, e.accountLid].filter(Boolean);
              }),
            ),
            m = [];
          await c.reduce(async function (e, t) {
            var n;
            (await e,
              m.push(
                await l.equals(
                  ["accountLid"],
                  (n = t.accountLid) != null ? n : t.historyId,
                ),
              ));
          }, Promise.resolve());
          var p = [].concat(d, m.flat()).filter(function (e) {
            return (e == null ? void 0 : e.kind) === "metadata";
          });
          if (
            o(
              "WAWebOmittedConversationMetadataIdentity",
            ).findStoredOmittedMetadataIdentityConflict(c, p, []) != null
          ) {
            (await l.clear(),
              await a.clear(),
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
          await l.bulkCreateOrMerge(
            c.map(function (e) {
              return babelHelpers.extends(
                { id: e.historyId },
                e.accountLid == null ? {} : { accountLid: e.accountLid },
                { snapshotId: i, kind: "initial" },
              );
            }),
          );
        });
    }
    async function d(e, t) {
      if (
        t !==
        (await o(
          "WAWebOmittedConversationMetadataPairing",
        ).getOmittedMetadataPairingId())
      )
        throw r("err")("Omitted metadata pairing attempt changed");
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(u, async function (n) {
          var a = n[0],
            i = n[1],
            l = await a.get(s);
          if (l == null || l.pairingId !== t)
            throw r("err")(
              "Omitted metadata INITIAL association is unavailable",
            );
          var u = await i.get(
              o("WAWebOmittedConversationMetadataIdentity").metadataBatchRowId(
                e.index,
              ),
            ),
            c = o(
              "WAWebOmittedConversationMetadataBatch",
            ).validateOmittedMetadataSession(e, l, u);
          if (c)
            return {
              retry: !0,
              entries: e.identities.length,
              complete: l.complete,
            };
          var d = e.identities.flatMap(function (e) {
              return [e.historyId, e.accountLid].filter(Boolean);
            }),
            m = await i.bulkGet(d),
            p = [];
          await e.identities.reduce(async function (e, t) {
            var n;
            (await e,
              p.push(
                await i.equals(
                  ["accountLid"],
                  (n = t.accountLid) != null ? n : t.historyId,
                ),
              ));
          }, Promise.resolve());
          var _ = o(
            "WAWebOmittedConversationMetadataIdentity",
          ).findStoredOmittedMetadataIdentityConflict(e.identities, m, p);
          if (_ === "initial")
            throw r("err")("Omitted metadata overlaps the INITIAL selection");
          if (_ === "metadata")
            throw r("err")(
              "Omitted metadata repeats a previous conversation identity",
            );
          var f = e.conversations.map(function (t, n) {
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
                    phoneNumberToLidMappings: e.phoneNumberToLidMappings,
                  },
                )
                .readBuffer(),
            };
          });
          return (
            f.push({
              id: o(
                "WAWebOmittedConversationMetadataIdentity",
              ).metadataBatchRowId(e.index),
              snapshotId: e.snapshotId,
              kind: "batch",
              fingerprint: e.fingerprint,
              batchIndex: e.index,
              transportOrder: e.transportOrder,
            }),
            await i.bulkCreateOrMerge(f),
            await a.merge(s, {
              nextBatchIndex: e.index + 1,
              expectedBatchCount: e.count,
              snapshotTimestampMs: e.timestampMs,
              complete: e.complete,
            }),
            { retry: !1, entries: e.identities.length, complete: e.complete }
          );
        });
    }
    async function m() {
      var e = await o("WAWebSchemaOmittedConversationMetadataSnapshot")
        .getOmittedConversationMetadataSnapshotTable()
        .get(s);
      if (e == null) return null;
      var t = await o(
        "WAWebOmittedConversationMetadataPairing",
      ).getOmittedMetadataPairingId();
      return e.pairingId === t ? e : null;
    }
    async function p() {
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(u, async function (e) {
          var t = e[0],
            n = e[1];
          (await n.clear(), await t.clear());
        });
    }
    async function _() {
      var e = await m();
      e != null &&
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(u, async function (t) {
            var n = t[0],
              r = await n.get(s);
            (r == null ? void 0 : r.snapshotId) === e.snapshotId &&
              (r == null ? void 0 : r.pairingId) === e.pairingId &&
              (await n.merge(s, { ordinaryHistoryObserved: !0 }));
          }));
    }
    async function f(e) {
      var t = await m();
      if (t == null) return !1;
      var n = await o("WAWebSchemaOmittedConversationMetadata")
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
    }
    ((l.ACTIVE_OMITTED_METADATA_SNAPSHOT = s),
      (l.OMITTED_METADATA_TABLES = u),
      (l.observeOmittedMetadataInitial = c),
      (l.persistOmittedMetadataBatch = d),
      (l.getCurrentOmittedMetadataSnapshot = m),
      (l.discardOmittedMetadataSnapshot = p),
      (l.observeOmittedMetadataOrdinaryRecent = _),
      (l.isPersistedOmittedMetadataTransport = f));
  },
  98,
);
