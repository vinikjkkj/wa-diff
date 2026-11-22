__d(
  "WAWebLabyrinthSealedRestoreController",
  [
    "Promise",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebDebugLabyrinthInboxSnapshotQuery",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugLoadForRestore",
    "WAWebLabyrinthDeriveEpochs",
    "WAWebLabyrinthMessageDecrypt",
    "WAWebLabyrinthOwnerAccountId",
    "WAWebLabyrinthWasmCompanionTestMessageThreadId",
    "WAWebLabyrinthWasmComputeClientSealToken",
    "WAWebLabyrinthWasmOpenSealedThreadId",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLabyrinthOwnerAccountId").getMaybeOwnerAccountId();
          if (t == null)
            return o("WAResultOrError").makeError({
              kind: "missing-local-account-id",
            });
          var n = yield o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
            o("WAWebLabyrinthDebugLoadForRestore").loadForRestore,
          );
          if (!n.success)
            return o("WAResultOrError").makeError({
              error: n.error,
              kind: "load-device-state-error",
            });
          var r = n.value;
          return r == null
            ? o("WAResultOrError").makeError({ kind: "missing-device-state" })
            : c({ limits: e, ownerAccountId: t, state: r });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.environment,
            a = t.limits,
            i = t.ownerAccountId,
            l = t.state;
          if (!o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(i))
            return o("WAResultOrError").makeError({
              kind: "local-account-changed",
            });
          var s = yield _(l, a, r);
          if (!s.success) return s;
          if (!o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(i))
            return o("WAResultOrError").makeError({
              kind: "local-account-changed",
            });
          var u = yield (e || (e = n("Promise"))).all(
              s.value.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      return {
                        serverThreadId: e.threadId,
                        threadResult: yield g(l, e),
                      };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            c = yield m(u);
          return o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(i)
            ? o("WAResultOrError").makeResult({
                restoredAtMs: o("WATimeUtils").castToMillisTime(Date.now()),
                threads: c,
              })
            : o("WAResultOrError").makeError({ kind: "local-account-changed" });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebLabyrinthWasmCompanionTestMessageThreadId",
          ).labyrinthCompanionTestMessageThreadIdWasm();
          return t.success
            ? e.filter(function (e) {
                var n = e.threadResult;
                return !n.success || n.value.plainChatJid !== t.value;
              })
            : e;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o(
            "WAWebLabyrinthWasmComputeClientSealToken",
          ).computeClientSealTokenWasm({
            orfClientState: e.orfClientState,
            backupId: e.backupId,
          });
          if (!a.success)
            return o("WAResultOrError").makeError({
              error: a.error,
              kind: "client-seal-token-error",
            });
          var i;
          try {
            i = yield o(
              "WAWebDebugLabyrinthInboxSnapshotQuery",
            ).fetchLabyrinthInboxSnapshot({
              clientSealToken: a.value,
              deviceId: e.ebDeviceId,
              environment: n,
              locallyAvailableEpochId: e.currentEpoch.serverEpochId,
              messageFirst: t.messagesPerThread,
              threadFirst: t.threads,
            });
          } catch (e) {
            return o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
              kind: "fetch-snapshot-error",
            });
          }
          return i == null
            ? o("WAResultOrError").makeError({ kind: "missing-mailbox" })
            : o("WAResultOrError").makeResult(i);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield y(e, t);
          } catch (e) {
            return o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
              kind: "exception",
            });
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = r.sealedThreadId;
          if (!a.success)
            return o("WAResultOrError").makeError({
              error: a.error,
              kind: "decode-seal-error",
            });
          var i = a.value;
          if (i == null)
            return o("WAResultOrError").makeError({ kind: "missing-seal" });
          var l = yield o("WAWebLabyrinthDeriveEpochs").deriveLabyrinthEpochs(
            t,
            r.sealEpochEdges,
          );
          if (!l.success) return o("WAResultOrError").makeError(l.error);
          var s = yield o(
            "WAWebLabyrinthWasmOpenSealedThreadId",
          ).openSealedThreadIdWasm({
            backupId: t.backupId,
            sealedThreadId: i,
            epochs: l.value,
          });
          if (!s.success)
            return o("WAResultOrError").makeError({
              error: s.error,
              kind: "open-seal-error",
            });
          var u = yield o("WAWebLabyrinthDeriveEpochs").deriveLabyrinthEpochs(
            t,
            r.messageEpochEdges,
          );
          if (!u.success) return o("WAResultOrError").makeError(u.error);
          var c = s.value.threadId,
            d = yield (e || (e = n("Promise"))).all(
              r.messages.map(function (e) {
                return b(e, u.value, c);
              }),
            );
          return o("WAResultOrError").makeResult({
            messages: d,
            plainChatJid: c,
            sealEpochAnonId: s.value.sealEpochAnonId,
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      var r = e.encryptedPayload,
        a = e.encryptionVersion,
        i = e.epochAnonId,
        l = e.messageId;
      return o(
        "WAWebLabyrinthMessageDecrypt",
      ).decryptLabyrinthMessageUnderItsEpoch(
        {
          encryptedPayload: r,
          encryptionVersion: a,
          messageId: l,
          timestampMs: null,
        },
        i,
        t,
        n,
      );
    }
    ((l.restoreLabyrinthSealedThreads = s),
      (l.restoreLabyrinthSealedThreadsFromState = c));
  },
  98,
);
