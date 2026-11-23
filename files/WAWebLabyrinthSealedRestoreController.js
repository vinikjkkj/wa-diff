__d(
  "WAWebLabyrinthSealedRestoreController",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = o("WAWebLabyrinthOwnerAccountId").getMaybeOwnerAccountId();
      if (t == null)
        return o("WAResultOrError").makeError({
          kind: "missing-local-account-id",
        });
      var n = await o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
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
        : s({ limits: e, ownerAccountId: t, state: r });
    }
    async function s(e) {
      var t = e.environment,
        n = e.limits,
        r = e.ownerAccountId,
        a = e.state;
      if (!o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(r))
        return o("WAResultOrError").makeError({
          kind: "local-account-changed",
        });
      var i = await c(a, n, t);
      if (!i.success) return i;
      if (!o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(r))
        return o("WAResultOrError").makeError({
          kind: "local-account-changed",
        });
      var l = await Promise.all(
          i.value.map(async function (e) {
            return { serverThreadId: e.threadId, threadResult: await d(a, e) };
          }),
        ),
        s = await u(l);
      return o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(r)
        ? o("WAResultOrError").makeResult({
            restoredAtMs: o("WATimeUtils").castToMillisTime(Date.now()),
            threads: s,
          })
        : o("WAResultOrError").makeError({ kind: "local-account-changed" });
    }
    async function u(e) {
      var t = await o(
        "WAWebLabyrinthWasmCompanionTestMessageThreadId",
      ).labyrinthCompanionTestMessageThreadIdWasm();
      return t.success
        ? e.filter(function (e) {
            var n = e.threadResult;
            return !n.success || n.value.plainChatJid !== t.value;
          })
        : e;
    }
    async function c(e, t, n) {
      var a = await o(
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
        i = await o(
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
    }
    async function d(e, t) {
      try {
        return await m(e, t);
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "exception",
        });
      }
    }
    async function m(e, t) {
      var n = t.sealedThreadId;
      if (!n.success)
        return o("WAResultOrError").makeError({
          error: n.error,
          kind: "decode-seal-error",
        });
      var r = n.value;
      if (r == null)
        return o("WAResultOrError").makeError({ kind: "missing-seal" });
      var a = await o("WAWebLabyrinthDeriveEpochs").deriveLabyrinthEpochs(
        e,
        t.sealEpochEdges,
      );
      if (!a.success) return o("WAResultOrError").makeError(a.error);
      var i = await o(
        "WAWebLabyrinthWasmOpenSealedThreadId",
      ).openSealedThreadIdWasm({
        backupId: e.backupId,
        sealedThreadId: r,
        epochs: a.value,
      });
      if (!i.success)
        return o("WAResultOrError").makeError({
          error: i.error,
          kind: "open-seal-error",
        });
      var l = await o("WAWebLabyrinthDeriveEpochs").deriveLabyrinthEpochs(
        e,
        t.messageEpochEdges,
      );
      if (!l.success) return o("WAResultOrError").makeError(l.error);
      var s = i.value.threadId,
        u = await Promise.all(
          t.messages.map(function (e) {
            return p(e, l.value, s);
          }),
        );
      return o("WAResultOrError").makeResult({
        messages: u,
        plainChatJid: s,
        sealEpochAnonId: i.value.sealEpochAnonId,
      });
    }
    function p(e, t, n) {
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
    ((l.restoreLabyrinthSealedThreads = e),
      (l.restoreLabyrinthSealedThreadsFromState = s));
  },
  98,
);
