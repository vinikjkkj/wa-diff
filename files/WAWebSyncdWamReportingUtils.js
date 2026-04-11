__d(
  "WAWebSyncdWamReportingUtils",
  [
    "Promise",
    "WABase64",
    "WACryptoDependencies",
    "WACryptoSha256",
    "WALogger",
    "WASyncdConst",
    "WASyncdKeyTypes",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebMdSyncdBundleWamEvent",
    "WAWebMdSyncdMutationWamEvent",
    "WAWebMdSyncdMutationsSummaryWamEvent",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdKeyCache",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumKmpSyncdFlowEnum",
    "WAWebWamEnumMutationBundleType",
    "WAWebWamEnumMutationDirectionType",
    "WAWebWamEnumMutationOperationType",
    "WAWebWamEnumSyncdCollectionType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return e ? o("WABase64").encodeB64UrlSafe(e) : "";
    }
    function h(e) {
      return e === o("WASyncdConst").CollectionName.RegularHigh
        ? o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR_HIGH
        : e === o("WASyncdConst").CollectionName.RegularLow
          ? o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
              .REGULAR_LOW
          : e === o("WASyncdConst").CollectionName.Regular
            ? o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.REGULAR
            : e === o("WASyncdConst").CollectionName.CriticalBlock
              ? o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
                  .CRITICAL_BLOCK
              : e === o("WASyncdConst").CollectionName.CriticalUnblockLow
                ? o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
                    .CRITICAL_UNBLOCK_LOW
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    var y = null;
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (y != null) return y;
            var e = yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              t = o("WABase64").decodeB64(e),
              n = yield o("WACryptoDependencies")
                .getCrypto()
                .subtle.digest({ name: "SHA-1" }, t),
              r = o("WABase64").encodeB64UrlSafe(n);
            return ((y = r.slice(-6)), y);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getShortMdSessionId: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("getShortMdSessionId failed"),
              ""
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a, i, l, s) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, c) {
            try {
              if (!I("syncd_mutation_and_bundle_logging").includes(e)) return;
              new (o("WAWebMdSyncdMutationWamEvent").MdSyncdMutationWamEvent)({
                appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                companionSessionIds: s,
                contentLength: 0,
                isInBootstrap: !1,
                isUsingLid: !1,
                mutationBundle: l
                  ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE
                      .PATCH
                  : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE
                      .SNAPSHOT,
                mutationDirection: n
                  ? o("WAWebWamEnumMutationDirectionType")
                      .MUTATION_DIRECTION_TYPE.INCOMING
                  : o("WAWebWamEnumMutationDirectionType")
                      .MUTATION_DIRECTION_TYPE.OUTGOING,
                mutationMac: r,
                mutationName: a != null ? a : "no-mutation-name",
                mutationOperation: i
                  ? o("WAWebWamEnumMutationOperationType")
                      .MUTATION_OPERATION_TYPE.REMOVE
                  : o("WAWebWamEnumMutationOperationType")
                      .MUTATION_OPERATION_TYPE.SET,
                seqNumber: t,
                syncdCollection: h(e),
                syncdKeyhash: "",
                syncdKeyid: "",
                patchMac: c != null ? c : "",
              }).commit();
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "syncReportMutationToWam: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("syncReportMutationToWam failed");
            }
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WACryptoSha256").sha256(e);
          return o("WABase64").encodeB64UrlSafe(t.slice(0, 6));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = o("WASyncdKeyTypes").fromSyncKeyId(e),
              n = o("WABase64").encodeB64UrlSafe(t),
              r = yield o("WAWebSyncdKeyCache").getKeyData(e);
            if (r == null) return { syncdKeyId: n, syncdKeyHash: "" };
            var a = yield R(o("WASyncdKeyTypes").fromSyncKeyData(r));
            return { syncdKeyId: n, syncdKeyHash: a };
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "getKeyIdAndHash: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("getKeyIdAndHash failed"),
              { syncdKeyId: "", syncdKeyHash: "" }
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      try {
        var n,
          r,
          a = o("WAWebABProps").getABPropConfigValue(t);
        return a
          ? (n = (r = JSON.parse(a)) == null ? void 0 : r.allowlist) != null
            ? n
            : []
          : [];
      } catch (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getSyncdWamAllowlist: failed to parse ",
                  ": ",
                  "",
                ])),
              t,
              n,
            )
            .sendLogs("getSyncdWamAllowlist failed"),
          []
        );
      }
    }
    function T(e) {
      var t = {},
        n = {},
        r = {};
      for (var a of e) {
        var i,
          l =
            (i = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
              a.collection,
              a.index,
            )) != null
              ? i
              : "unknown";
        if (
          a.operation ===
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
        ) {
          var s;
          t[l] = ((s = t[l]) != null ? s : 0) + 1;
        } else {
          var u;
          n[l] = ((u = n[l]) != null ? u : 0) + 1;
        }
        if (a.index.includes("@lid")) {
          var c;
          r[l] = ((c = r[l]) != null ? c : 0) + 1;
        }
      }
      return {
        setMutations: JSON.stringify(t),
        removeMutations: JSON.stringify(n),
        lidMutations: JSON.stringify(r),
      };
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          for (var r of e) {
            var a = o("WABase64").encodeB64UrlSafe(
              o("WASyncdKeyTypes").fromSyncKeyId(r.keyId),
            );
            t.set(a, r.keyId);
          }
          var i = {};
          return (
            yield (f || (f = n("Promise"))).all(
              Array.from(t.entries()).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1],
                        r = yield o("WAWebSyncdKeyCache").getKeyData(n);
                      r != null &&
                        (i[t] = yield R(
                          o("WASyncdKeyTypes").fromSyncKeyData(r),
                        ));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            JSON.stringify(i)
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      if (e.direction === "outgoing") {
        var t;
        return {
          direction: "outgoing",
          bundleType: "patch",
          bootstrapState: "non_bootstrap",
          snapshotMac: null,
          patchMac: e.patchMac,
          errorMessage: (t = e.errorMessage) != null ? t : null,
        };
      }
      return {
        direction: "incoming",
        bundleType: e.bundleType,
        bootstrapState: e.bootstrapState,
        snapshotMac: e.snapshotMac,
        patchMac: e.bundleType === "patch" ? e.patchMac : null,
        errorMessage: null,
      };
    }
    function P(e, t, n, r, o) {
      return {
        collection: e,
        direction: t,
        bundleType: n,
        bootstrapState: r,
        mdSessionId: o,
        version: null,
        bundleSize: null,
        keyId: null,
        wireSnapshotMac: null,
        wirePatchMac: null,
        computedLtHash: null,
        computedSnapshotMac: null,
        computedPatchMac: null,
        mutations: null,
        errorMessage: null,
      };
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
              e.bundleType === "patch"
                ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH
                : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE
                    .SNAPSHOT,
            n =
              e.direction === "incoming"
                ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
                    .INCOMING
                : o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
                    .OUTGOING;
          if (e.keyId != null && e.version != null) {
            var r = e.keyId,
              a = e.version,
              i = e.bundleSize;
            try {
              if (I("md_syncd_bundle_logging").includes(e.collection)) {
                var l,
                  s = yield E(r),
                  u = s.syncdKeyHash,
                  c = s.syncdKeyId;
                new (o("WAWebMdSyncdBundleWamEvent").MdSyncdBundleWamEvent)({
                  appSessionId: o(
                    "WAWebGetSharedSessionId",
                  ).getSharedSessionId(),
                  bundleVersion: a,
                  companionSessionIds: e.mdSessionId,
                  computedLthash: e.computedLtHash
                    ? o("WABase64").encodeB64UrlSafe(e.computedLtHash)
                    : "",
                  expectedMac: g(
                    e.bundleType === "patch"
                      ? e.wirePatchMac
                      : e.wireSnapshotMac,
                  ),
                  kmpSyncdFlow: o("WAWebWamEnumKmpSyncdFlowEnum")
                    .KMP_SYNCD_FLOW_ENUM.NONE,
                  mutationBundle: t,
                  mutationDirection: n,
                  patchMac: e.computedPatchMac
                    ? o("WABase64").encodeB64UrlSafe(e.computedPatchMac)
                    : void 0,
                  patchSize: e.bundleType === "patch" && i != null ? i : void 0,
                  processingErrorMessage:
                    (l = e.errorMessage) != null ? l : void 0,
                  seqNumber: a,
                  snapshotMac: e.computedSnapshotMac
                    ? o("WABase64").encodeB64UrlSafe(e.computedSnapshotMac)
                    : "",
                  snapshotSize:
                    e.bundleType === "snapshot" && i != null ? i : void 0,
                  syncdCollection: h(e.collection),
                  syncdKeyhash: u,
                  syncdKeyid: c,
                }).commit();
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "reportSyncdWamAccumulator bundle: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("reportSyncdWamAccumulator bundle failed");
            }
          }
          if (e.mutations != null) {
            var p = e.mutations;
            try {
              if (
                I("md_syncd_mutation_summary_logging").includes(e.collection)
              ) {
                var _,
                  f = T(p),
                  y = f.lidMutations,
                  C = f.removeMutations,
                  b = f.setMutations,
                  v = yield D(p);
                new (o(
                  "WAWebMdSyncdMutationsSummaryWamEvent",
                ).MdSyncdMutationsSummaryWamEvent)({
                  appSessionId: o(
                    "WAWebGetSharedSessionId",
                  ).getSharedSessionId(),
                  companionSessionIds: e.mdSessionId,
                  isInBootstrap: e.bootstrapState === "bootstrap",
                  lidMutations: y,
                  mutationBundle: t,
                  mutationDirection: n,
                  patchMac: e.computedPatchMac
                    ? o("WABase64").encodeB64UrlSafe(e.computedPatchMac)
                    : void 0,
                  removeMutations: C,
                  seqNumber: (_ = e.version) != null ? _ : 0,
                  setMutations: b,
                  snapshotMac: e.computedSnapshotMac
                    ? o("WABase64").encodeB64UrlSafe(e.computedSnapshotMac)
                    : void 0,
                  syncdCollection: h(e.collection),
                  syncdKeyidKeyhash: v,
                }).commit();
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "reportSyncdWamAccumulator summary: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("reportSyncdWamAccumulator summary failed");
            }
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.bundleSize,
            n = e.collection,
            r = e.computedLtHash,
            a = e.keyId,
            i = e.mdSessionId,
            l = e.mutations,
            s = e.version,
            u = $(e),
            c = u.bootstrapState,
            d = u.bundleType,
            m = u.direction,
            f = u.errorMessage,
            y = u.patchMac,
            C = u.snapshotMac,
            b =
              d === "patch"
                ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH
                : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE
                    .SNAPSHOT,
            v =
              m === "incoming"
                ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
                    .INCOMING
                : o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
                    .OUTGOING;
          if (a != null)
            try {
              if (I("md_syncd_bundle_logging").includes(n)) {
                var S = yield E(a),
                  R = S.syncdKeyHash,
                  L = S.syncdKeyId;
                new (o("WAWebMdSyncdBundleWamEvent").MdSyncdBundleWamEvent)({
                  appSessionId: o(
                    "WAWebGetSharedSessionId",
                  ).getSharedSessionId(),
                  bundleVersion: s,
                  companionSessionIds: i,
                  computedLthash: o("WABase64").encodeB64UrlSafe(r),
                  expectedMac: g(d === "patch" ? y : C),
                  kmpSyncdFlow: o("WAWebWamEnumKmpSyncdFlowEnum")
                    .KMP_SYNCD_FLOW_ENUM.NONE,
                  mutationBundle: b,
                  mutationDirection: v,
                  patchMac: y ? o("WABase64").encodeB64UrlSafe(y) : void 0,
                  patchSize: d === "patch" ? t : void 0,
                  processingErrorMessage: f != null ? f : void 0,
                  seqNumber: s,
                  snapshotMac: C ? o("WABase64").encodeB64UrlSafe(C) : "",
                  snapshotSize: d === "snapshot" ? t : void 0,
                  syncdCollection: h(n),
                  syncdKeyhash: R,
                  syncdKeyid: L,
                }).commit();
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "syncReportBundleToWam: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("syncReportBundleToWam failed");
            }
          try {
            if (I("md_syncd_mutation_summary_logging").includes(n)) {
              var k = T(l),
                x = k.lidMutations,
                P = k.removeMutations,
                N = k.setMutations,
                M = yield D(l);
              new (o(
                "WAWebMdSyncdMutationsSummaryWamEvent",
              ).MdSyncdMutationsSummaryWamEvent)({
                appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                companionSessionIds: i,
                isInBootstrap: c === "bootstrap",
                lidMutations: x,
                mutationBundle: b,
                mutationDirection: v,
                patchMac: y ? o("WABase64").encodeB64UrlSafe(y) : void 0,
                removeMutations: P,
                seqNumber: s,
                setMutations: N,
                snapshotMac: C ? o("WABase64").encodeB64UrlSafe(C) : void 0,
                syncdCollection: h(n),
                syncdKeyidKeyhash: M,
              }).commit();
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "syncReportMutationsSummaryToWam: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("syncReportMutationsSummaryToWam failed");
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r, o, a) {
      var i, l, s, u;
      w({
        collection: e,
        version: t,
        computedLtHash: n,
        bundleSize: r.length,
        keyId: (i = (l = r[0]) == null ? void 0 : l.keyId) != null ? i : null,
        mutations: r,
        mdSessionId: o,
        direction: "outgoing",
        patchMac:
          (s = (u = r[0]) == null ? void 0 : u.patchMac) != null ? s : null,
        errorMessage: a,
      });
    }
    ((l.getShortMdSessionId = C),
      (l.syncReportMutationToWam = v),
      (l.encodeKeyDataForWam = R),
      (l.getSyncdWamAllowlist = I),
      (l.createSyncdWamAccumulator = P),
      (l.reportSyncdWamAccumulator = N),
      (l.syncReportBundleAndSummaryToWam = w),
      (l.syncReportOutgoingToWam = F));
  },
  98,
);
