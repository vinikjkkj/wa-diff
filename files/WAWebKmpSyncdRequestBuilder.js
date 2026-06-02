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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d(t, n) {
      try {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "kmp: buildOutgoingRequestWithKmp starts",
            ])),
        );
        var r = await o("WAWebKmpSyncdServiceLocator").getOutgoingProcessor(),
          a = o("WAWebKmpKotlinUtils").asMap(
            o("WAWebKmpSyncdResultUtils").kmpResultGetOrThrow(
              await r.getMutationsByCollectionReadyToSync(),
            ),
          ),
          i = await o(
            "WAWebGetPendingMutation",
          ).getSyncdCollectionsWithPendingMutationsInTransaction(),
          l = m(t, a, i),
          d = l.collectionsToRefetch,
          f = l.collectionWithPendingMutationsIds,
          g = l.compactedIds,
          h = l.mutationsToSync;
        g.length > 0 &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: kmp: removing ",
                " compacted pending mutations",
              ])),
            g.length,
          ),
          await o("WAWebRunInTransaction").runInTransaction(
            { PendingMutationStore: !0 },
            async function (e) {
              var t = e.PendingMutationStore;
              await t.bulkRemove(g);
            },
          ));
        var y = o("WAWebKmpKotlinUtils").asArray(
            o("WAWebKmpSyncdResultUtils").kmpResultGetOrThrow(
              await r.processOutgoingMutations(
                o("WAWebKmpKotlinUtils").asKtMap(h),
                !1,
              ),
            ),
          ),
          C = p(y, d),
          b = C.collectionNodes,
          v = C.collectionToLtHash,
          S = C.collectionWithEncryptedMutations,
          R = C.localCollectionVersions,
          L = C.wamBundles,
          E = C.wamSummaries;
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "kmp: buildOutgoingRequestWithKmp ends",
            ])),
        );
        var k = o("WAWap").generateId();
        return {
          syncIqNode: _(b, k),
          collectionWithEncryptedMutations: S,
          localCollectionVersions: R,
          collectionsToRefetch: Array.from(d),
          collectionWithPendingMutationsIds: f,
          kmpOutgoingContext: {
            iqId: k,
            collectionToMutations: h,
            collectionToLtHash: v,
            wamBundles: L,
            wamSummaries: E,
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
    }
    function m(e, t, n) {
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
    function p(e, t) {
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
    function _(e, t) {
      return o("WAWap").wap(
        "iq",
        {
          id: t,
          to: o("WAWap").S_WHATSAPP_NET,
          type: "set",
          xmlns: "w:sync:app:state",
        },
        o("WAWap").wap("sync", null, e.map(f)),
      );
    }
    function f(e) {
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
        g(n),
      );
    }
    function g(e) {
      return e ? o("WAWap").wap("patch", null, e) : null;
    }
    l.buildOutgoingRequestWithKmp = d;
  },
  98,
);
