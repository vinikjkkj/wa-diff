__d(
  "WAWebKmpSyncdRequestBuilder",
  [
    "WALogger",
    "WASyncdConst",
    "WAWap",
    "WAWebGetPendingMutation",
    "WAWebKmpKotlinUtils",
    "WAWebKmpSyncdCollectionNameUtils",
    "WAWebKmpSyncdMutationUtils",
    "WAWebKmpSyncdResultUtils",
    "WAWebKmpSyncdServiceLocator",
    "WAWebRunInTransaction",
    "WAWebSyncdRequestBuilderUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          try {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "kmp: buildOutgoingRequestWithKmp starts",
                ])),
            );
            var a = yield o(
                "WAWebKmpSyncdServiceLocator",
              ).getOutgoingProcessor(),
              i = o("WAWebKmpKotlinUtils").asMap(
                o("WAWebKmpSyncdResultUtils").kmpResultGetOrThrow(
                  yield a.getMutationsByCollectionReadyToSync(),
                ),
              ),
              l = yield o(
                "WAWebGetPendingMutation",
              ).getSyncdCollectionsWithPendingMutationsInTransaction(),
              d = p(t, i, l),
              m = d.collectionsToRefetch,
              g = d.collectionWithPendingMutationsIds,
              h = d.compactedIds,
              y = d.mutationsToSync;
            h.length > 0 &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: kmp: removing ",
                    " compacted pending mutations",
                  ])),
                h.length,
              ),
              yield o("WAWebRunInTransaction").runInTransaction(
                { PendingMutationStore: !0 },
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.PendingMutationStore;
                      yield t.bulkRemove(h);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ));
            var C = o("WAWebKmpKotlinUtils").asArray(
                o("WAWebKmpSyncdResultUtils").kmpResultGetOrThrow(
                  yield a.processOutgoingMutations(
                    o("WAWebKmpKotlinUtils").asKtMap(y),
                    !1,
                  ),
                ),
              ),
              b = _(C, m),
              v = b.collectionNodes,
              S = b.collectionToLtHash,
              R = b.collectionWithEncryptedMutations,
              L = b.localCollectionVersions,
              E = b.wamBundles,
              k = b.wamSummaries;
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "kmp: buildOutgoingRequestWithKmp ends",
                ])),
            );
            var I = o("WAWap").generateId();
            return {
              syncIqNode: f(v, I),
              collectionWithEncryptedMutations: R,
              localCollectionVersions: L,
              collectionsToRefetch: Array.from(m),
              collectionWithPendingMutationsIds: g,
              kmpOutgoingContext: {
                iqId: I,
                collectionToMutations: y,
                collectionToLtHash: S,
                wamBundles: E,
                wamSummaries: k,
              },
            };
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: error when preparing outgoing syncd request",
                  ])),
              ),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      var r = new Map(),
        a = new Set(),
        i = new Map(),
        l = [];
      return (
        e.forEach(function (e) {
          var s = o(
              "WAWebKmpSyncdCollectionNameUtils",
            ).asKmpSyncdCollectionName(e),
            u = t.get(s) || o("WAWebKmpKotlinUtils").asKtList([]),
            c = o("WAWebKmpKotlinUtils").asArray(u),
            d = o("WAWebSyncdRequestBuilderUtils").compactKmpPatchArray(c);
          r.set(s, o("WAWebKmpKotlinUtils").asKtList(d));
          var m = new Set(
              d
                .map(function (e) {
                  return e.rowId;
                })
                .filter(Boolean),
            ),
            p = [];
          for (var _ of c) {
            var f = _.rowId;
            if (f != null) {
              var g = parseInt(f, 10);
              Number.isNaN(g) || (p.push(g), m.has(f) || l.push(g));
            }
          }
          (i.set(e, p), n.has(e) && p.length === 0 && a.add(e));
        }),
        {
          mutationsToSync: r,
          collectionWithPendingMutationsIds: i,
          collectionsToRefetch: a,
          compactedIds: l,
        }
      );
    }
    function _(e, t) {
      var n = new Map(),
        r = new Map(),
        a = new Map(),
        i = [],
        l = [],
        s = e.map(function (e) {
          var s = e.collectionName,
            u = e.kmpMutationsWithEncryptionData,
            c = e.kmpSyncdPatch,
            d = e.localCollectionVersion,
            m = e.wamMutationsSummary,
            p = e.wamSyncdBundle;
          (a.set(s, e.ltHash), i.push(p), l.push(m));
          var _ = o("WAWebKmpKotlinUtils").asArray(u),
            f = o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(s),
            g;
          d != null
            ? ((g = o("WAWebKmpKotlinUtils").numberFromKmpLong(d)), n.set(f, g))
            : _.length > 0 && t.add(f);
          var h =
              (m == null ? void 0 : m.patchMac) != null
                ? o("WAWebKmpKotlinUtils").asUint8Array(m.patchMac).buffer
                : void 0,
            y =
              (m == null ? void 0 : m.keyMap) != null
                ? o("WAWebKmpKotlinUtils").asMap(m.keyMap)
                : null,
            C = _.map(function (e) {
              return o(
                "WAWebKmpSyncdMutationUtils",
              ).asEncryptedUploadMutationType(e, h, y);
            });
          r.set(f, C);
          var b = c
            ? o("WAWebKmpKotlinUtils").asUint8Array(c.toByteArray())
            : null;
          return { collection: f, version: g, patchBlob: b };
        });
      return {
        collectionNodes: s,
        collectionToLtHash: a,
        collectionWithEncryptedMutations: r,
        localCollectionVersions: n,
        wamBundles: i,
        wamSummaries: l,
      };
    }
    function f(e, t) {
      return o("WAWap").wap(
        "iq",
        {
          id: t,
          to: o("WAWap").S_WHATSAPP_NET,
          type: "set",
          xmlns: "w:sync:app:state",
        },
        o("WAWap").wap("sync", null, e.map(g)),
      );
    }
    function g(e) {
      var t = e.collection,
        n = e.patchBlob,
        r = e.version;
      return o("WAWap").wap(
        "collection",
        {
          name: o("WAWap").CUSTOM_STRING(t),
          return_snapshot: r === void 0 ? "true" : "false",
          version: o("WAWap").INT(
            r != null ? r : o("WASyncdConst").DEFAULT_COLLECTION_VERSION,
          ),
        },
        h(n),
      );
    }
    function h(e) {
      return e ? o("WAWap").wap("patch", null, e) : null;
    }
    l.buildOutgoingRequestWithKmp = d;
  },
  98,
);
