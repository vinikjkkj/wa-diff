__d(
  "WAWebFetchLabyrinthEpochChainJob",
  [
    "WAResultOrError",
    "WAWebFetchLabyrinthEpochChainJobQuery.graphql",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebRelayClient",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebFetchLabyrinthEpochChainJobQuery.graphql"));
    async function u() {
      var e;
      try {
        e = await o("WAWebRelayClient").fetchQuery(
          s,
          {},
          {
            environmentType: "whatsapp_web",
            fetchPolicy: "network-only",
            networkCacheConfig: { force: !0 },
          },
        );
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "network-error",
        });
      }
      if (e == null)
        return o("WAResultOrError").makeError({ kind: "empty-response" });
      var t = e.wa_labyrinth_fetch_epoch_chain;
      if (t == null)
        return o("WAResultOrError").makeError({ kind: "unexpected-response" });
      var n = t.__typename;
      if (n === "WALabyrinthFetchEpochChainError")
        return o("WAResultOrError").makeError({
          errorCode: t.error_code,
          kind: "server-rejection",
          message: t.message,
        });
      if (n !== "WALabyrinthFetchEpochChainData" || t.backup_id == null)
        return o("WAResultOrError").makeError({ kind: "unexpected-response" });
      var a = t.active_epoch_id,
        i = t.backup_id;
      return o("WAResultOrError").makeResult({
        backupId: o("WAWebLabyrinthOpaqueTypes").makeBackupId(i),
        activeEpochId:
          a == null ? null : o("WAWebLabyrinthOpaqueTypes").makeEpochId(a),
      });
    }
    l.fetchLabyrinthEpochChain = u;
  },
  98,
);
