__d(
  "WAWebLabyrinthShadowFetchController",
  [
    "WAPromiseReduce",
    "WAResultOrError",
    "WAWebLabyrinthRestoreThreadController",
    "WAWebLabyrinthSealedRestoreController",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.environment,
            r = e.maxThreads,
            a = e.ownerAccountId,
            i = e.state,
            l = yield o(
              "WAWebLabyrinthSealedRestoreController",
            ).restoreLabyrinthSealedThreadsFromState({
              environment: t,
              limits: { messagesPerThread: 1, threads: r },
              ownerAccountId: a,
              state: i,
            });
          if (!l.success)
            return o("WAResultOrError").makeError({
              error: l.error,
              kind: "list-threads-error",
            });
          var s = yield o("WAPromiseReduce").promiseReduce(
            Array.from(l.value.threads),
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, n) {
                  var r = n.serverThreadId,
                    l = n.threadResult;
                  if (!l.success)
                    return (
                      e.push(
                        o("WAResultOrError").makeError({
                          error: l.error,
                          kind: "open-thread-error",
                          serverThreadId: r,
                        }),
                      ),
                      e
                    );
                  var s = l.value.plainChatJid,
                    u = yield o(
                      "WAWebLabyrinthRestoreThreadController",
                    ).fetchLabyrinthEncryptedThread(i, a, s, t);
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
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            [],
          );
          return o("WAResultOrError").makeResult({
            keys: o(
              "WAWebLabyrinthRestoreThreadController",
            ).getLabyrinthDecryptKeys(i),
            threads: s,
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.fetchLabyrinthShadowThreads = e;
  },
  98,
);
