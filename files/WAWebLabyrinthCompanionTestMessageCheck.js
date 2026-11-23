__d(
  "WAWebLabyrinthCompanionTestMessageCheck",
  [
    "WAResultOrError",
    "WATimeUtils",
    "WAWebDebugLabyrinthRestorePageJob",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugLoadForRestore",
    "WAWebLabyrinthDeriveEpochs",
    "WAWebLabyrinthWasmCompanionTestMessageThreadId",
    "WAWebLabyrinthWasmDecryptMessage",
    "WAWebLabyrinthWasmOrfThreadId",
    "WAWebLabyrinthWasmParseCompanionTestMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await s();
      if (!e.success) return e;
      var t = e.value,
        n = t.messages,
        r = t.page,
        a = t.state,
        i = t.threadId,
        l = u(n);
      if (l == null)
        return o("WAResultOrError").makeResult({ kind: "missing" });
      var c = await o("WAWebLabyrinthDeriveEpochs").deriveLabyrinthEpochs(
        a,
        r.epochEdges,
      );
      if (!c.success) return o("WAResultOrError").makeError(c.error);
      var m = await d(l, c.value, i);
      if (!m.success) return m;
      var p = await o(
        "WAWebLabyrinthWasmParseCompanionTestMessage",
      ).parseLabyrinthCompanionTestMessageWasm(m.value);
      return p.success
        ? o("WAResultOrError").makeResult({
            createdAtMs: p.value.createdAtMs,
            kind: "restored",
          })
        : o("WAResultOrError").makeError({
            error: p.error,
            kind: "parse-error",
          });
    }
    async function s() {
      var e = await o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
        o("WAWebLabyrinthDebugLoadForRestore").loadForRestore,
      );
      if (!e.success)
        return o("WAResultOrError").makeError({
          error: e.error,
          kind: "load-device-state-error",
        });
      var t = e.value;
      if (t == null)
        return o("WAResultOrError").makeError({ kind: "missing-device-state" });
      var n = await o(
        "WAWebLabyrinthWasmCompanionTestMessageThreadId",
      ).labyrinthCompanionTestMessageThreadIdWasm();
      if (!n.success)
        return o("WAResultOrError").makeError({
          error: n.error,
          kind: "thread-id-error",
        });
      var r = await o("WAWebLabyrinthWasmOrfThreadId").labyrinthOrfThreadIdWasm(
        { orfClientState: t.orfClientState, threadId: n.value },
      );
      if (!r.success)
        return o("WAResultOrError").makeError({
          error: r.error,
          kind: "orf-thread-id-error",
        });
      var a = await o(
        "WAWebDebugLabyrinthRestorePageJob",
      ).fetchLabyrinthRestorePage({
        after: null,
        ebDeviceId: t.ebDeviceId,
        locallyAvailableEpochId: t.currentEpoch.serverEpochId,
        partialThreadId: r.value,
      });
      return a.success
        ? o("WAResultOrError").makeResult({
            messages: a.value.messages,
            page: { epochEdges: a.value.epochEdges },
            state: t,
            threadId: n.value,
          })
        : o("WAResultOrError").makeError({
            error: a.error,
            kind: "fetch-page-error",
          });
    }
    function u(e) {
      return e.reduce(function (e, t) {
        return e == null || c(t) > c(e) ? t : e;
      }, null);
    }
    function c(e) {
      return e.timestampMs == null
        ? 0
        : o("WATimeUtils").fromMillisTime(e.timestampMs);
    }
    async function d(e, t, n) {
      var r = e.encryptedPayload,
        a = e.encryptionVersion,
        i = e.epochAnonId;
      if (!r.success)
        return o("WAResultOrError").makeError({
          error: r.error,
          kind: "decode-ciphertext-error",
        });
      var l = r.value;
      if (l == null)
        return o("WAResultOrError").makeError({ kind: "missing-payload" });
      var s = t.find(function (e) {
        return e.epochAnonId === i;
      });
      if (s == null)
        return o("WAResultOrError").makeError({ kind: "missing-epoch-key" });
      var u = await o("WAWebLabyrinthWasmDecryptMessage").decryptMessageWasm({
        ciphertext: l,
        encryptionVersion: a,
        epochAnonId: s.epochAnonId,
        epochRootKey: s.epochRootKey,
        threadId: n,
      });
      return u.success
        ? o("WAResultOrError").makeResult(u.value.plaintext)
        : o("WAResultOrError").makeError({
            error: u.error,
            kind: "decrypt-error",
          });
    }
    l.checkLabyrinthCompanionTestMessage = e;
  },
  98,
);
