__d(
  "WAWebSyncdWamReportingUtils",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return e ? o("WABase64").encodeB64UrlSafe(e) : "";
    }
    function g(e) {
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
    var h = null;
    async function y() {
      try {
        if (h != null) return h;
        var t = await o(
            "WAWebSyncdMdSyncFieldstatMeta",
          ).MdSyncFieldStatsMeta.getMdSessionId(),
          n = o("WABase64").decodeB64(t),
          r = await o("WACryptoDependencies")
            .getCrypto()
            .subtle.digest({ name: "SHA-1" }, n),
          a = o("WABase64").encodeB64UrlSafe(r);
        return ((h = a.slice(-6)), h);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getShortMdSessionId: ",
                  "",
                ])),
              t,
            )
            .sendLogs("getShortMdSessionId failed"),
          ""
        );
      }
    }
    async function C(e, t, n, r, a, i, l, u, c) {
      try {
        if (!S("syncd_mutation_and_bundle_logging").includes(e)) return;
        new (o("WAWebMdSyncdMutationWamEvent").MdSyncdMutationWamEvent)({
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          companionSessionIds: u,
          contentLength: 0,
          isInBootstrap: !1,
          isUsingLid: !1,
          mutationBundle: l
            ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH
            : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.SNAPSHOT,
          mutationDirection: n
            ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
                .INCOMING
            : o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
                .OUTGOING,
          mutationMac: r,
          mutationName: a != null ? a : "no-mutation-name",
          mutationOperation: i
            ? o("WAWebWamEnumMutationOperationType").MUTATION_OPERATION_TYPE
                .REMOVE
            : o("WAWebWamEnumMutationOperationType").MUTATION_OPERATION_TYPE
                .SET,
          seqNumber: t,
          syncdCollection: g(e),
          syncdKeyhash: "",
          syncdKeyid: "",
          patchMac: c != null ? c : "",
        }).commit();
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncReportMutationToWam: ",
                "",
              ])),
            e,
          )
          .sendLogs("syncReportMutationToWam failed");
      }
    }
    async function b(e) {
      var t = await o("WACryptoSha256").sha256(e);
      return o("WABase64").encodeB64UrlSafe(t.slice(0, 6));
    }
    async function v(e) {
      try {
        var t = o("WASyncdKeyTypes").fromSyncKeyId(e),
          n = o("WABase64").encodeB64UrlSafe(t),
          r = await o("WAWebSyncdKeyCache").getKeyData(e);
        if (r == null) return { syncdKeyId: n, syncdKeyHash: "" };
        var a = await b(o("WASyncdKeyTypes").fromSyncKeyData(r));
        return { syncdKeyId: n, syncdKeyHash: a };
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getKeyIdAndHash: ",
                  "",
                ])),
              e,
            )
            .sendLogs("getKeyIdAndHash failed"),
          { syncdKeyId: "", syncdKeyHash: "" }
        );
      }
    }
    function S(e) {
      try {
        var t,
          n,
          r = o("WAWebABProps").getABPropConfigValue(e);
        return r
          ? (t = (n = JSON.parse(r)) == null ? void 0 : n.allowlist) != null
            ? t
            : []
          : [];
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "getSyncdWamAllowlist: failed to parse ",
                  ": ",
                  "",
                ])),
              e,
              t,
            )
            .sendLogs("getSyncdWamAllowlist failed"),
          []
        );
      }
    }
    function R(e) {
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
    async function L(e) {
      var t = new Map();
      for (var n of e) {
        var r = o("WABase64").encodeB64UrlSafe(
          o("WASyncdKeyTypes").fromSyncKeyId(n.keyId),
        );
        t.set(r, n.keyId);
      }
      var a = {};
      return (
        await Promise.all(
          Array.from(t.entries()).map(async function (e) {
            var t = e[0],
              n = e[1],
              r = await o("WAWebSyncdKeyCache").getKeyData(n);
            r != null &&
              (a[t] = await b(o("WASyncdKeyTypes").fromSyncKeyData(r)));
          }),
        ),
        JSON.stringify(a)
      );
    }
    function E(e) {
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
    function k(e, t, n, r, o) {
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
    async function I(e) {
      var t =
          e.bundleType === "patch"
            ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH
            : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.SNAPSHOT,
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
          if (S("md_syncd_bundle_logging").includes(e.collection)) {
            var l,
              s = await v(r),
              u = s.syncdKeyHash,
              c = s.syncdKeyId;
            new (o("WAWebMdSyncdBundleWamEvent").MdSyncdBundleWamEvent)({
              appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
              bundleVersion: a,
              companionSessionIds: e.mdSessionId,
              computedLthash: e.computedLtHash
                ? o("WABase64").encodeB64UrlSafe(e.computedLtHash)
                : "",
              expectedMac: f(
                e.bundleType === "patch" ? e.wirePatchMac : e.wireSnapshotMac,
              ),
              kmpSyncdFlow: o("WAWebWamEnumKmpSyncdFlowEnum")
                .KMP_SYNCD_FLOW_ENUM.NONE,
              mutationBundle: t,
              mutationDirection: n,
              patchMac: e.computedPatchMac
                ? o("WABase64").encodeB64UrlSafe(e.computedPatchMac)
                : void 0,
              patchSize: e.bundleType === "patch" && i != null ? i : void 0,
              processingErrorMessage: (l = e.errorMessage) != null ? l : void 0,
              seqNumber: a,
              snapshotMac: e.computedSnapshotMac
                ? o("WABase64").encodeB64UrlSafe(e.computedSnapshotMac)
                : "",
              snapshotSize:
                e.bundleType === "snapshot" && i != null ? i : void 0,
              syncdCollection: g(e.collection),
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
          if (S("md_syncd_mutation_summary_logging").includes(e.collection)) {
            var _,
              h = R(p),
              y = h.lidMutations,
              C = h.removeMutations,
              b = h.setMutations,
              E = await L(p);
            new (o(
              "WAWebMdSyncdMutationsSummaryWamEvent",
            ).MdSyncdMutationsSummaryWamEvent)({
              appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
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
              syncdCollection: g(e.collection),
              syncdKeyidKeyhash: E,
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
    }
    async function T(e) {
      var t = e.bundleSize,
        n = e.collection,
        r = e.computedLtHash,
        a = e.keyId,
        i = e.mdSessionId,
        l = e.mutations,
        s = e.version,
        u = E(e),
        c = u.bootstrapState,
        d = u.bundleType,
        m = u.direction,
        h = u.errorMessage,
        y = u.patchMac,
        C = u.snapshotMac,
        b =
          d === "patch"
            ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH
            : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.SNAPSHOT,
        k =
          m === "incoming"
            ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
                .INCOMING
            : o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
                .OUTGOING;
      if (a != null)
        try {
          if (S("md_syncd_bundle_logging").includes(n)) {
            var I = await v(a),
              T = I.syncdKeyHash,
              D = I.syncdKeyId;
            new (o("WAWebMdSyncdBundleWamEvent").MdSyncdBundleWamEvent)({
              appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
              bundleVersion: s,
              companionSessionIds: i,
              computedLthash: o("WABase64").encodeB64UrlSafe(r),
              expectedMac: f(d === "patch" ? y : C),
              kmpSyncdFlow: o("WAWebWamEnumKmpSyncdFlowEnum")
                .KMP_SYNCD_FLOW_ENUM.NONE,
              mutationBundle: b,
              mutationDirection: k,
              patchMac: y ? o("WABase64").encodeB64UrlSafe(y) : void 0,
              patchSize: d === "patch" ? t : void 0,
              processingErrorMessage: h != null ? h : void 0,
              seqNumber: s,
              snapshotMac: C ? o("WABase64").encodeB64UrlSafe(C) : "",
              snapshotSize: d === "snapshot" ? t : void 0,
              syncdCollection: g(n),
              syncdKeyhash: T,
              syncdKeyid: D,
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
        if (S("md_syncd_mutation_summary_logging").includes(n)) {
          var x = R(l),
            $ = x.lidMutations,
            P = x.removeMutations,
            N = x.setMutations,
            M = await L(l);
          new (o(
            "WAWebMdSyncdMutationsSummaryWamEvent",
          ).MdSyncdMutationsSummaryWamEvent)({
            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
            companionSessionIds: i,
            isInBootstrap: c === "bootstrap",
            lidMutations: $,
            mutationBundle: b,
            mutationDirection: k,
            patchMac: y ? o("WABase64").encodeB64UrlSafe(y) : void 0,
            removeMutations: P,
            seqNumber: s,
            setMutations: N,
            snapshotMac: C ? o("WABase64").encodeB64UrlSafe(C) : void 0,
            syncdCollection: g(n),
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
    }
    function D(e, t, n, r, o, a) {
      var i, l, s, u;
      T({
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
    ((l.getShortMdSessionId = y),
      (l.syncReportMutationToWam = C),
      (l.encodeKeyDataForWam = b),
      (l.getSyncdWamAllowlist = S),
      (l.createSyncdWamAccumulator = k),
      (l.reportSyncdWamAccumulator = I),
      (l.syncReportOutgoingToWam = D));
  },
  98,
);
