__d(
  "WAInMemorySignalStore",
  [
    "WAArmadilloTransportEvent.pb",
    "WABuildMpsPayload",
    "WACryptoManager",
    "WACryptoUtils",
    "WAGlobals",
    "WAIdentityUtils",
    "WAJids",
    "WAMPSFlushable",
    "WAProtocolQueue",
    "WAResultOrError",
    "WASignalEntityStoreV2",
    "WASignalIdentityStore",
    "WATagsLogger",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = o("WATagsLogger").TAGS(["CryptoManager", "InMemorySignalStore"]),
      b = (function () {
        function t(e, t) {
          var n = this,
            r;
          ((this.loadSession = function (e, t) {
            return n.$1.load(e, function (e) {
              return n.$8.loadSession(e, t);
            });
          }),
            (this.loadSessions = function (e) {
              return n.$1
                .bulkLoad(e, function (e) {
                  return n.$8.loadSessions(e).then(function (e) {
                    return new Map(
                      Array.from(e.entries()).map(function (e) {
                        return [e[0], e[1]];
                      }),
                    );
                  });
                })
                .then(function (e) {
                  return new Map(
                    Array.from(e.entries()).map(function (e) {
                      return [e[0], e[1]];
                    }),
                  );
                });
            }),
            (this.loadSignedPreKey = function (e) {
              return n.$6.load(e, function () {
                return n.$8.loadSignedPreKey(e);
              });
            }),
            (this.bulkLoadIdentities = function (e) {
              var t = new Map();
              return Promise.all(
                e.map(function (e) {
                  return n.loadIdentities(e).then(function (n) {
                    t.set(e, n);
                  });
                }),
              ).then(function () {
                return t;
              });
            }),
            (this.loadIdentities = function (e) {
              return n.$4.loadIdentitiesByUser(e, function () {
                return n.$8.loadIdentities(e);
              });
            }),
            (this.saveIdentity = function (e, t) {
              return Promise.resolve(n.storeIdentity(e, t));
            }),
            (this.loadOneTimePreKey = function (e) {
              return n.$5.load(e, function () {
                return n.$8.loadOneTimePreKey(e);
              });
            }),
            (this.saveSenderKeySession = function (e) {
              var t = e.author,
                r = e.groupId,
                o = e.updated;
              return (n.storeSenderKeySession(r, t, o), Promise.resolve());
            }),
            (this.saveSignedPreKeyIfNew = function (e, t) {
              return n.$8.saveSignedPreKeyIfNew(e, t);
            }),
            (this.loadSenderKeySession = async function (e, t) {
              var r = await n.$7.load(
                o("WACryptoManager").encodeSenderKey(e, t),
                async function () {
                  var r = await n.$8.loadSenderKeySession(e, t);
                  return r.success ? r.value : null;
                },
              );
              return r == null
                ? o("WAResultOrError").makeError("errLoadSenderKeySession")
                : o("WAResultOrError").makeResult(r);
            }),
            (this.handleNewSession = function (e, t, r, a, i) {
              return (
                n.storeSession(e, t),
                r != null && n.storeIdentity(e, r),
                a != null && n.removeOneTimePreKey(a),
                Promise.resolve(o("WAResultOrError").makeResult())
              );
            }),
            (this.saveLastSyncTs = function (e, t) {
              return (n.$3.store(e, t), Promise.resolve());
            }),
            (this.loadLastSyncTs = function (e) {
              return n.$3.load(e, function () {
                return n.$8.loadLastSyncTs(e);
              });
            }),
            (this.saveDhash = function (e, t) {
              return (n.$2.store(e, t), Promise.resolve());
            }),
            (this.getLastPreKeyGenerationId = function () {
              return n.$8.getLastPreKeyGenerationId();
            }),
            (this.savePreKeysGeneration = function (e) {
              return n.$8.savePreKeysGeneration(e);
            }),
            (this.getPreKeyGenerationsTimestamps = function () {
              return n.$8.getPreKeyGenerationsTimestamps();
            }),
            (this.deletePreKeyGenerations = function (e) {
              return n.$8.deletePreKeyGenerations(e);
            }),
            (this.saveOneTimePreKey = function (e) {
              return n.$8.saveOneTimePreKey(e);
            }),
            (this.loadPreKeys = function (e) {
              return n.$8.loadPreKeys(e);
            }),
            (this.loadLatestSignedPreKey = function () {
              return n.$8.loadLatestSignedPreKey();
            }),
            (this.$8 = e),
            (this.$9 = t),
            (this.$4 = new (o("WASignalIdentityStore").SignalIdentityStore)()),
            (this.$1 = new (r = o(
              "WASignalEntityStoreV2",
            )).SignalEntityStore()),
            (this.$2 = new r.SignalEntityStore()),
            (this.$3 = new r.SignalEntityStore()),
            (this.$5 = new r.SignalEntityStore()),
            (this.$6 = new r.SignalEntityStore()),
            (this.$7 = new r.SignalEntityStore()));
        }
        var n = t.prototype;
        return (
          (n.storeSession = function (t, n) {
            this.$1.store(t, n);
          }),
          (n.storeIdentity = function (t, n) {
            n && this.$4.store(t, n);
          }),
          (n.removeOneTimePreKey = function (t) {
            this.$5.remove(t);
          }),
          (n.storeSenderKeySession = function (t, n, r) {
            this.$7.store(o("WACryptoManager").encodeSenderKey(t, n), r);
          }),
          (n.updateUserDevicesInfo = function (n) {
            var t = this;
            return Promise.all(
              n.map(async function (n) {
                var r = await t.loadIdentities(n.jid),
                  a = n.devices,
                  i = n.dhash,
                  l = n.jid,
                  f = n.lastSyncTs,
                  g = n.notificationTs;
                C.DEV(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Update user devices: userJid: ",
                      "; new identities: ",
                      "; previous identities: ",
                      "}",
                    ])),
                  l,
                  a
                    .map(function (e) {
                      var t = e.id;
                      return o("WAJids").toDeviceJid(n.jid, t);
                    })
                    .join(","),
                  Array.from(r.keys()).join(","),
                );
                var h = new Set(r.keys()),
                  y = [],
                  b = [];
                for (var v of a) {
                  var S = v.id,
                    R = v.identity,
                    L = v.model,
                    E = v.platform,
                    k = o("WAJids").toDeviceJid(n.jid, S),
                    I = r.get(k);
                  if (o("WAGlobals").getMyDeviceJid() === k) {
                    var T = o("WACryptoUtils").uint8ArraysEqual(
                      o("WAIdentityUtils").removeKeyTypeIfNeeded(
                        t.$9.staticKeyPair.publicKey,
                      ),
                      o("WAIdentityUtils").removeKeyTypeIfNeeded(R),
                    );
                    T ||
                      C.ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Receiving an identity for my device but it is different from original one",
                          ])),
                      );
                  }
                  if ((h.delete(k), I == null))
                    b.push({
                      instruction: "identityAdded",
                      jid: o("WAJids").extractUserJid(k),
                      type: "instruction",
                      device: k,
                      identity: R,
                      model: L,
                      platform: E,
                      notificationTs: g,
                      priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
                    });
                  else if (!o("WACryptoUtils").uint8ArraysEqual(I, R)) {
                    if (o("WAJids").extractUserJid(k) !== l) {
                      C.ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Device notification of one user cannot remove session the other one",
                          ])),
                      );
                      continue;
                    }
                    (y.push(k),
                      C.DEV(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Removing session dur to identity mismatch: ",
                            "",
                          ])),
                        k,
                      ),
                      b.push({
                        instruction: "identityChanged",
                        jid: o("WAJids").extractUserJid(k),
                        type: "instruction",
                        device: k,
                        identity: R,
                        model: L,
                        platform: E,
                        notificationTs: g,
                        priority:
                          o("WAProtocolQueue").WAProtocolQueuePriorityLow,
                      }));
                  }
                }
                var D = [];
                for (var x of h) {
                  if (o("WAJids").extractUserJid(x) !== l) {
                    C.ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Device notification of one user cannot remove identity the other one ",
                        ])),
                    );
                    continue;
                  }
                  (D.push(x),
                    o("WAGlobals").getMyDeviceJid() === x &&
                      C.ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "Removing my device identity. This should not happen",
                          ])),
                      ),
                    C.DEV(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Removing old identity: ",
                          "",
                        ])),
                      x,
                    ),
                    b.push({
                      instruction: "identityRemoved",
                      jid: o("WAJids").extractUserJid(x),
                      type: "instruction",
                      device: x,
                      notificationTs: g,
                      priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
                    }));
                }
                return (
                  b.length > 0 &&
                    C.LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Device changes for ",
                          ": ",
                          "",
                        ])),
                      l,
                      b
                        .map(function (e) {
                          var t = e.device,
                            n = e.instruction;
                          return t != null
                            ? n + ":" + String(o("WAJids").extractDeviceId(t))
                            : n;
                        })
                        .join(","),
                    ),
                  Promise.all(
                    [
                      i != null ? t.saveDhash(l, i) : Promise.resolve(),
                      f != null ? t.saveLastSyncTs(l, f) : Promise.resolve(),
                    ].concat(
                      Array.from(D).map(function (e) {
                        return t.deleteIdentity(e);
                      }),
                      [
                        D.concat(y).map(function (e) {
                          return t.$10(e);
                        }),
                      ],
                      a.map(function (e) {
                        var n = e.id,
                          r = e.identity;
                        return t.saveIdentity(o("WAJids").toDeviceJid(l, n), r);
                      }),
                    ),
                  ).then(function () {
                    return b;
                  })
                );
              }),
            )
              .then(function (e) {
                var t = e.flat();
                t.forEach(function (e) {
                  var t, n;
                  switch (e.instruction) {
                    case "identityAdded":
                      n = o("WAArmadilloTransportEvent.pb")
                        .TransportEvent$Event$DeviceChange$Type.ADDED;
                      break;
                    case "identityChanged":
                      n = o("WAArmadilloTransportEvent.pb")
                        .TransportEvent$Event$DeviceChange$Type.REPLACED;
                      break;
                    case "identityRemoved":
                      n = o("WAArmadilloTransportEvent.pb")
                        .TransportEvent$Event$DeviceChange$Type.REMOVED;
                      break;
                    default:
                      return;
                  }
                  var r = o("WAGlobals").getDependencies().generateExternalId();
                  o("WAMPSFlushable").mpsFlushable.enqueue(
                    o("WABuildMpsPayload").buildMpsDeviceChangeAdminMessage(
                      e.jid,
                      (t = e.notificationTs) != null
                        ? t
                        : o("WATimeUtils").unixTime(),
                      r,
                      n,
                      e.platform,
                      e.model,
                    ),
                    function (e) {
                      if (e != null) {
                        C.ERROR(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to save device change admin message: ",
                              "",
                            ])),
                          e,
                        );
                        return;
                      }
                    },
                    "handle_device_change",
                  );
                });
              })
              .then(function () {});
          }),
          (n.savePendingToDatabase = function () {
            var e = this,
              t = this.$11();
            return t == null
              ? Promise.resolve()
              : (C.DEV(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Snapshot: ",
                      "",
                    ])),
                  t,
                ),
                C.LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Snapshot save: start",
                    ])),
                ),
                this.$8.bulkSaveSignalData(t).then(
                  function () {
                    (C.LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "Snapshot save: end",
                        ])),
                    ),
                      e.$12());
                  },
                  function (t) {
                    return (e.$13(), Promise.reject(t));
                  },
                ));
          }),
          (n.clear = function () {
            (this.$1.clear(),
              this.$4.clear(),
              this.$5.clear(),
              this.$6.clear(),
              this.$7.clear(),
              this.$2.clear());
          }),
          (n.deleteIdentity = function (t) {
            return (this.$4.remove(t), Promise.resolve());
          }),
          (n.$10 = function (t) {
            return (this.$1.remove(t), Promise.resolve());
          }),
          (n.$12 = function () {
            (this.$1.markSnapshotAsCommitted(),
              this.$2.markSnapshotAsCommitted(),
              this.$3.markSnapshotAsCommitted(),
              this.$4.markSnapshotAsCommitted(),
              this.$5.markSnapshotAsCommitted(),
              this.$6.markSnapshotAsCommitted(),
              this.$7.markSnapshotAsCommitted());
          }),
          (n.$13 = function () {
            (this.$1.markSnapshotAsFailed(),
              this.$2.markSnapshotAsFailed(),
              this.$3.markSnapshotAsFailed(),
              this.$4.markSnapshotAsFailed(),
              this.$5.markSnapshotAsFailed(),
              this.$6.markSnapshotAsFailed(),
              this.$7.markSnapshotAsFailed());
          }),
          (n.$11 = function () {
            var e = this.$1.snapshot(),
              t = [],
              n = e.remove.map(function (e) {
                return e.id;
              });
            e.update.forEach(function (e) {
              var n = e.cachedEntity,
                r = e.id;
              n != null && t.push({ id: r, updated: n });
            });
            var r = [];
            this.$7.snapshot().update.forEach(function (e) {
              var t = o("WACryptoManager").decodeSenderKey(e.id),
                n = t.deviceId,
                a = t.groupId;
              e.cachedEntity != null &&
                a &&
                n &&
                r.push({ groupId: a, author: n, updated: e.cachedEntity });
            });
            var a = this.$4.snapshot(),
              i = a.remove.map(function (e) {
                return e.id;
              }),
              l = [];
            a.update.forEach(function (e) {
              var t = e.cachedEntity,
                n = e.id;
              t != null && l.push({ id: n, identity: t });
            });
            var s = this.$5.snapshot().remove,
              u = this.$2.snapshot(),
              c = [];
            for (var d of u.update) {
              var m = d.cachedEntity,
                p = d.id;
              m != null && c.push({ id: p, dhash: m });
            }
            var _ = this.$3.snapshot(),
              f = [];
            for (var g of _.update) {
              var h = g.cachedEntity,
                y = g.id;
              h != null && f.push({ id: y, lastSyncTs: h });
            }
            return t.length === 0 &&
              n.length === 0 &&
              l.length === 0 &&
              r.length === 0 &&
              s.length === 0 &&
              c.length === 0 &&
              f.length === 0 &&
              i.length === 0
              ? null
              : {
                  dhashUpdate: c,
                  identityRemove: i,
                  identityUpdate: l,
                  preKeyRemove: s,
                  senderKeySessionUpdate: r,
                  sessionRemove: n,
                  sessionUpdate: t,
                  lastSyncTsUpdate: f,
                };
          }),
          (n.warmCache = async function (t) {
            var e = this,
              n = t.map(o("WAJids").interpretAsUserJid).filter(Boolean),
              r = await this.$8.bulkLoadIdentities(n).then(function (t) {
                return e.$4.bulkLoadIdentities(t);
              }),
              a = Array.from(r.values()).reduce(function (e, t) {
                return e.concat(Array.from(t.keys()));
              }, []);
            await this.loadSessions(a);
          }),
          t
        );
      })();
    l.InMemorySignalStoreImpl = b;
  },
  98,
);
