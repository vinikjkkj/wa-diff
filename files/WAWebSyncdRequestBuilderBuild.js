__d(
  "WAWebSyncdRequestBuilderBuild",
  [
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBrokerGlobalAppState",
    "WAWebGetCollectionVersion",
    "WAWebGetSyncAction",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdEncryptMutationsWrapper",
    "WAWebSyncdError",
    "WAWebSyncdKeyManagement",
    "WAWebSyncdKeyManagementUtils",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdMMSUpload",
    "WAWebSyncdRequestBuilderTypesConverter",
    "WAWebSyncdRequestEncode",
    "WAWebSyncdWamAppState",
    "WAWebUserUtils",
    "encodeProtobuf",
    "nullthrows",
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
      p = 5;
    async function _(e, t) {
      var n = await g(e, t),
        r = n.collectionLtHashes,
        a = n.collectionNodes,
        i = n.collectionWithEncryptedMutations,
        l = n.localCollectionVersions,
        s = n.pendingCollectionsInBootstrap,
        u = f(o("WAWap").wap("sync", null, a)),
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
    }
    function f(e) {
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
    async function g(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: start _buildCollectionNodes",
          ])),
      );
      var r = [],
        a = async function (t, a) {
          var e = await o("WAWebGetCollectionVersion")
              .getCollectionVersionInTransaction(t)
              .then(function (e) {
                return e == null ? void 0 : e.version;
              }),
            i,
            l,
            s;
          if (a != null && a.length > 0)
            if (e == null) r.push(t);
            else {
              var u = await h({
                  collection: t,
                  pendingMutations: a,
                  session: n,
                }),
                c = u.encryptedMutations,
                d = u.ltHash,
                m = u.patchNode;
              ((i = m), (l = c), (s = d));
            }
          return {
            collection: t,
            version: e,
            patchNode: i,
            encryptedMutations: l,
            ltHash: s,
          };
        },
        i = new Map(),
        l = new Map(),
        c = [];
      t.forEach(function (e, t) {
        return c.push(a(t, e));
      });
      var d = await Promise.all(c);
      r.length > 0 &&
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: skipping ",
              " collections in sync iq patch because initial full sync is incomplete => ",
              "",
            ])),
          r.length,
          r.slice(0, 3),
        );
      var m = new Map(),
        p = d.map(function (e) {
          var t = e.collection,
            n = e.encryptedMutations,
            r = e.ltHash,
            a = e.patchNode,
            s = e.version;
          return (
            n && l.set(t, n),
            i.set(t, s),
            m.set(t, r),
            o("WAWap").wap(
              "collection",
              {
                name: o("WAWap").CUSTOM_STRING(t),
                return_snapshot:
                  s == null ||
                  s === o("WAWebSyncdConst").DEFAULT_COLLECTION_VERSION
                    ? "true"
                    : "false",
                version: o("WAWap").INT(
                  s != null
                    ? s
                    : o("WAWebSyncdConst").DEFAULT_COLLECTION_VERSION,
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
          collectionNodes: p,
          collectionWithEncryptedMutations: l,
          localCollectionVersions: i,
          pendingCollectionsInBootstrap: r,
          collectionLtHashes: m,
        }
      );
    }
    async function h(e) {
      var t = e.collection,
        n = e.pendingMutations,
        r = e.session,
        a = await o("WAWebSyncdKeyManagement").getActiveKey(!C(n)),
        i = await R({ activeKey: a, collection: t, pendingMutations: n }),
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
        s = await Promise.all(l).catch(async function (e) {
          throw (
            e instanceof o("WAWebSyncdError").SyncdFatalError &&
              (await y(i, t)),
            e
          );
        }),
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
        m = await o("WAWebSyncdAntiTampering").computeLtHash({
          collection: t,
          mutations: d,
          session: r,
        }),
        p = m.ltHash,
        _ = await o(
          "WAWebSyncdAntiTampering",
        ).computeOutgoingSnapshotAndPatchMacs(t, p, s, a.keyData),
        f = _.patchMac,
        g = _.snapshotMac;
      s.map(function (e) {
        e.patchMac = f;
      });
      var h = s.map(function (e) {
          return S(e.keyId, e.operation, e.indexMac, e.indexAndValueCipherText);
        }),
        L = v(h),
        E;
      o("WAWebSyncdMMSUpload").exceedInlineMutationCount(h)
        ? (E = await o("WAWebSyncdMMSUpload").uploadPatch({
            activeSyncKeyId: a.keyId,
            mutationsBlob: L,
            patchMac: f,
            snapshotMac: g,
          }))
        : ((E = b(h, a.keyId, g, f)),
          o("WAWebSyncdMMSUpload").exceedPatchProtobufSize(E) &&
            (E = await o("WAWebSyncdMMSUpload").uploadPatch({
              activeSyncKeyId: a.keyId,
              mutationsBlob: L,
              patchMac: f,
              snapshotMac: g,
            })));
      var k = o("WAWap").wap("patch", null, E);
      return { patchNode: k, encryptedMutations: s, ltHash: p };
    }
    async function y(e, t) {
      var n = e.map(function (e, t) {
          return { mutation: e, idx: t };
        }),
        r = n.filter(function (e) {
          return (
            e.mutation.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
          );
        }),
        a = n.filter(function (e) {
          return (
            e.mutation.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          );
        }),
        i = r.map(function (e) {
          var t = a.map(function (t) {
            return t.mutation.index === e.mutation.index ? "same" : "different";
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
            `:
      SET: `,
            `
      REMOVE: `,
            `
      Is same index? `,
            "",
          ])),
        t,
        l,
        s,
        i.join(","),
      );
    }
    function C(e) {
      return (
        r("WAWebBrokerGlobalAppState").isLogoutInProgress &&
        e.some(function (e) {
          return (
            o("WAWebSyncdActionUtils").getMutationNameFromIndex(
              e.collection,
              e.index,
            ) === o("WAWebSyncdConst").Actions.Sentinel
          );
        })
      );
    }
    function b(e, t, n, a) {
      var i = r("nullthrows")(
          o("WAWebUserUtils").getMaybeMeDeviceId(),
          "self device ID",
        ),
        l = o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufSyncAction.pb").PatchDebugDataSpec, {
            isSenderPrimary: !1,
            senderPlatform: o("WAWebProtobufSyncAction.pb")
              .PatchDebugData$Platform.WEB,
          })
          .readBuffer();
      return o("WAWebSyncdRequestEncode").encodeSyncdPatch({
        keyId: { id: o("WAWebSyncdKeyTypes").fromSyncKeyId(t) },
        mutations: e,
        snapshotMac: n,
        patchMac: a,
        deviceIndex: i,
        clientDebugData: l,
      });
    }
    function v(e) {
      return o("WAWebSyncdRequestEncode").encodeSyncdMutations({
        mutations: e,
      });
    }
    function S(e, t, n, r) {
      return {
        operation: t,
        record: {
          keyId: { id: o("WAWebSyncdKeyTypes").fromSyncKeyId(e) },
          index: { blob: n },
          value: { blob: r },
        },
      };
    }
    async function R(e) {
      var t = e.activeKey,
        n = e.collection,
        r = e.pendingMutations,
        a = await o(
          "WAWebGetSyncAction",
        ).getSyncActionsByCollectionsInTransaction([n]),
        i = new Set(
          a.map(function (e) {
            return e.index;
          }),
        ),
        l = r.filter(function (e) {
          if (
            e.operation ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                .REMOVE &&
            !i.has(e.index)
          ) {
            var t;
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: dropping orphaned REMOVE mutation (no corresponding SET in SyncActionStore) for collection ",
                    ", action: ",
                    "",
                  ])),
                n,
                (t = e.action) != null ? t : "unknown",
              ),
              !1
            );
          }
          return !0;
        }),
        s = L(a, r, t.keyId);
      l = l.concat(s);
      var u = E(a, l, t.keyId);
      return (
        o("WAWebSyncdWamAppState").addKeyRotationRemoveCount(u.length),
        (l = l.concat(u)),
        l
      );
    }
    function L(e, t, n) {
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
        return o("WAWebSyncdKeyManagementUtils").getKeyEpoch(e.keyId);
      });
      var l = Math.min(
        p,
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
    function E(e, t, n) {
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
    ((l.buildSyncIqNode = _), (l._generateMutationsToUpload = R));
  },
  98,
);
