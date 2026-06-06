__d(
  "WAWebSyncdRequestBuilderBuild",
  [
    "Promise",
    "WABaseGlobals",
    "WAJids",
    "WALogger",
    "WASyncdConst",
    "WASyncdKeyManagementUtils",
    "WASyncdKeyTypes",
    "WAWap",
    "WAWebABProps",
    "WAWebBrokerGlobalAppState",
    "WAWebGetCollectionVersion",
    "WAWebGetSyncAction",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdEncryptMutationsWrapper",
    "WAWebSyncdError",
    "WAWebSyncdKeyManagement",
    "WAWebSyncdMMSUpload",
    "WAWebSyncdRequestBuilderTypesConverter",
    "WAWebSyncdRequestEncode",
    "WAWebSyncdWamAppState",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "sortBy",
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
      _ = 5;
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield y(e, t),
            r = n.collectionLtHashes,
            a = n.collectionNodes,
            i = n.collectionWithEncryptedMutations,
            l = n.localCollectionVersions,
            s = n.pendingCollectionsInBootstrap,
            u = h(o("WAWap").wap("sync", null, a)),
            c = u.iqId,
            d = u.iqNode;
          return {
            syncIqNode: d,
            collectionWithEncryptedMutations: i,
            localCollectionVersions: l,
            pendingCollectionsInBootstrap: s,
            iqId: c,
            collectionLtHashes: r,
          };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = o("WAWap").generateId(),
        n = o("WAWap").wap(
          "iq",
          {
            id: t,
            to: o("WAWap").S_WHATSAPP_NET,
            type: "set",
            xmlns: "w:sync:app:state",
          },
          e,
        );
      return { iqNode: n, iqId: t };
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start _buildCollectionNodes",
              ])),
          );
          var a = [],
            i = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  var n = yield o("WAWebGetCollectionVersion")
                      .getCollectionVersionInTransaction(e)
                      .then(function (e) {
                        return e == null ? void 0 : e.version;
                      }),
                    i,
                    l,
                    s;
                  if (t != null && t.length > 0)
                    if (n == null) a.push(e);
                    else {
                      var u = yield b(e, t, r),
                        c = u.encryptedMutations,
                        d = u.ltHash,
                        m = u.patchNode;
                      ((i = m), (l = c), (s = d));
                    }
                  return {
                    collection: e,
                    version: n,
                    patchNode: i,
                    encryptedMutations: l,
                    ltHash: s,
                  };
                },
              );
              return function (n, r) {
                return e.apply(this, arguments);
              };
            })(),
            l = new Map(),
            c = new Map(),
            d = [];
          t.forEach(function (e, t) {
            return d.push(i(t, e));
          });
          var m = yield (p || (p = n("Promise"))).all(d);
          a.length > 0 &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: skipping ",
                  " collections in sync iq patch because initial full sync is incomplete => ",
                  "",
                ])),
              a.length,
              a.slice(0, 3),
            );
          var _ = new Map(),
            f = m.map(function (e) {
              var t = e.collection,
                n = e.encryptedMutations,
                r = e.ltHash,
                a = e.patchNode,
                i = e.version;
              return (
                n && c.set(t, n),
                l.set(t, i),
                _.set(t, r),
                o("WAWap").wap(
                  "collection",
                  {
                    name: o("WAWap").CUSTOM_STRING(t),
                    return_snapshot: i === void 0 ? "true" : "false",
                    version: o("WAWap").INT(
                      i != null
                        ? i
                        : o("WASyncdConst").DEFAULT_COLLECTION_VERSION,
                    ),
                  },
                  a,
                )
              );
            });
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: end _buildCollectionNodes",
                ])),
            ),
            {
              collectionNodes: f,
              collectionWithEncryptedMutations: c,
              localCollectionVersions: l,
              pendingCollectionsInBootstrap: a,
              collectionLtHashes: _,
            }
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield o("WAWebSyncdKeyManagement").getActiveKey(!L(t)),
            i = yield T(e, t, a),
            l = i.map(function (e, t) {
              return o("WAWebSyncdEncryptMutationsWrapper")
                .encryptMutation(e, a)
                .catch(function (e) {
                  throw (
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: encryption failed for idx ",
                          "",
                        ])),
                      t,
                    ),
                    e
                  );
                });
            }),
            s = yield (p || (p = n("Promise"))).all(l).catch(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    throw (
                      t instanceof o("WAWebSyncdError").SyncdFatalError &&
                        (yield S(i, e)),
                      t
                    );
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            u =
              o("WAWebABProps").getABPropConfigValue(
                "syncd_use_index_for_lthash_lookup",
              ) === !0,
            d = s.map(function (e) {
              return {
                indexMac: e.indexMac,
                valueMac: e.valueMac,
                operation: e.operation,
                action: e.action || void 0,
                index: u ? e.index : void 0,
              };
            }),
            m = yield o("WAWebSyncdAntiTampering").computeLtHash(e, d, r),
            _ = m.ltHash,
            f = yield o(
              "WAWebSyncdAntiTampering",
            ).computeOutgoingSnapshotAndPatchMacs(e, _, s, a.keyData),
            g = f.patchMac,
            h = f.snapshotMac;
          s.map(function (e) {
            e.patchMac = g;
          });
          var y = s.map(function (e) {
              return I(
                e.keyId,
                e.operation,
                e.indexMac,
                e.indexAndValueCipherText,
              );
            }),
            C = k(y),
            b;
          o("WAWebSyncdMMSUpload").exceedInlineMutationCount(y)
            ? (b = yield o("WAWebSyncdMMSUpload").uploadPatch(C, a.keyId, h, g))
            : ((b = E(y, a.keyId, h, g)),
              o("WAWebSyncdMMSUpload").exceedPatchProtobufSize(b) &&
                (b = yield o("WAWebSyncdMMSUpload").uploadPatch(
                  C,
                  a.keyId,
                  h,
                  g,
                )));
          var v = o("WAWap").wap("patch", null, b);
          return { patchNode: v, encryptedMutations: s, ltHash: _ };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e, t) {
              return { mutation: e, idx: t };
            }),
            r = n.filter(function (e) {
              return (
                e.mutation.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .SET
              );
            }),
            a = n.filter(function (e) {
              return (
                e.mutation.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE
              );
            }),
            i = r.map(function (e) {
              var t = a.map(function (t) {
                return t.mutation.index === e.mutation.index
                  ? "same"
                  : "different";
              });
              return "[" + t.join(",") + "]";
            }),
            l = r.map(function (e) {
              var t = e.idx,
                n = e.mutation,
                r = n.action != null ? n.action : "",
                o = n.id != null;
              return r + "(" + t + ") - " + (o ? "stored" : "not stored");
            }),
            s = a.map(function (e) {
              var t = e.idx,
                n = e.mutation,
                r = n.action != null ? n.action : "",
                o = n.id != null;
              return r + "(" + t + ") - " + (o ? "stored" : "not stored");
            });
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: fatal error encrypting patch for ",
                ":\n      SET: ",
                "\n      REMOVE: ",
                "\n      Is same index? ",
                "",
              ])),
            t,
            l,
            s,
            i.join(","),
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return (
        r("WAWebBrokerGlobalAppState").isLogoutInProgress &&
        e.some(function (e) {
          return (
            o("WAWebSyncdActionUtils").getMutationNameFromIndex(
              e.collection,
              e.index,
            ) === o("WASyncdConst").Actions.Sentinel
          );
        })
      );
    }
    function E(e, t, n, r) {
      var a = o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid()),
        i = o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufSyncAction.pb").PatchDebugDataSpec, {
            isSenderPrimary: !1,
            senderPlatform: o("WAWebProtobufSyncAction.pb")
              .PatchDebugData$Platform.WEB,
          })
          .readBuffer();
      return o("WAWebSyncdRequestEncode").encodeSyncdPatch({
        keyId: { id: o("WASyncdKeyTypes").fromSyncKeyId(t) },
        mutations: e,
        snapshotMac: n,
        patchMac: r,
        deviceIndex: a,
        clientDebugData: i,
      });
    }
    function k(e) {
      return o("WAWebSyncdRequestEncode").encodeSyncdMutations({
        mutations: e,
      });
    }
    function I(e, t, n, r) {
      return {
        operation: t,
        record: {
          keyId: { id: o("WASyncdKeyTypes").fromSyncKeyId(e) },
          index: { blob: n },
          value: { blob: r },
        },
      };
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
              "WAWebGetSyncAction",
            ).getSyncActionsByCollectionsInTransaction([e]),
            a = new Set(
              r.map(function (e) {
                return e.index;
              }),
            ),
            i = t.filter(function (t) {
              if (
                t.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE &&
                !a.has(t.index)
              ) {
                var n;
                return (
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: dropping orphaned REMOVE mutation (no corresponding SET in SyncActionStore) for collection ",
                        ", action: ",
                        "",
                      ])),
                    e,
                    (n = t.action) != null ? n : "unknown",
                  ),
                  !1
                );
              }
              return !0;
            }),
            l = x(r, t, n.keyId);
          i = i.concat(l);
          var s = $(r, i, n.keyId);
          return (
            o("WAWebSyncdWamAppState").addKeyRotationRemoveCount(s.length),
            (i = i.concat(s)),
            i
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      var a = new Set(
          t.map(function (e) {
            return e.index;
          }),
        ),
        i = e.filter(function (e) {
          return (
            !a.has(e.index) &&
            !o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(e.keyId, n)
          );
        });
      i = r("sortBy")(i, function (e) {
        return o("WASyncdKeyManagementUtils").getKeyEpoch(e.keyId);
      });
      var l = Math.min(
        _,
        o("WAWebABProps").getABPropConfigValue(
          "syncd_additional_mutations_count",
        ),
      );
      return (
        (i = i.slice(0, l)),
        o(
          "WAWebSyncdRequestBuilderTypesConverter",
        ).syncActionsToPendingMutations(
          i,
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
        )
      );
    }
    function $(e, t, n) {
      var r = new Set(
          t
            .filter(function (e) {
              return (
                e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .SET
              );
            })
            .map(function (e) {
              return e.index;
            }),
        ),
        a = e.filter(function (e) {
          return r.has(e.index);
        }),
        i = a.filter(function (e) {
          return !o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(e.keyId, n);
        });
      return o(
        "WAWebSyncdRequestBuilderTypesConverter",
      ).syncActionsToPendingMutations(
        i,
        o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
      );
    }
    ((l.buildSyncIqNode = f), (l._generateMutationsToUpload = T));
  },
  98,
);
