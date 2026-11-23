__d(
  "WAWebLabyrinthShadowFetchController",
  [
    "WAPromiseReduce",
    "WAResultOrError",
    "WAWebLabyrinthRestoreThreadController",
    "WAWebLabyrinthSealedRestoreController",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.environment,
        n = e.maxThreads,
        r = e.ownerAccountId,
        a = e.state,
        i = await o(
          "WAWebLabyrinthSealedRestoreController",
        ).restoreLabyrinthSealedThreadsFromState({
          environment: t,
          limits: { messagesPerThread: 1, threads: n },
          ownerAccountId: r,
          state: a,
        });
      if (!i.success)
        return o("WAResultOrError").makeError({
          error: i.error,
          kind: "list-threads-error",
        });
      var l = await o("WAPromiseReduce").promiseReduce(
        Array.from(i.value.threads),
        async function (e, n) {
          var i = n.serverThreadId,
            l = n.threadResult;
          if (!l.success)
            return (
              e.push(
                o("WAResultOrError").makeError({
                  error: l.error,
                  kind: "open-thread-error",
                  serverThreadId: i,
                }),
              ),
              e
            );
          var s = l.value.plainChatJid,
            u = await o(
              "WAWebLabyrinthRestoreThreadController",
            ).fetchLabyrinthEncryptedThread(a, r, s, t);
          return (
            e.push(
              u.success
                ? o("WAResultOrError").makeResult(u.value)
                : o("WAResultOrError").makeError({
                    error: u.error,
                    kind: "restore-thread-error",
                    plainChatJid: s,
                  }),
            ),
            e
          );
        },
        [],
      );
      return o("WAResultOrError").makeResult({
        keys: o(
          "WAWebLabyrinthRestoreThreadController",
        ).getLabyrinthDecryptKeys(a),
        threads: l,
      });
    }
    l.fetchLabyrinthShadowThreads = e;
  },
  98,
);
