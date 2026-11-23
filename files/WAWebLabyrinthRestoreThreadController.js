__d(
  "WAWebLabyrinthRestoreThreadController",
  [
    "WAResultOrError",
    "WATimeUtils",
    "WAWebDebugLabyrinthRestorePageJob",
    "WAWebLabyrinthDebugDeviceStateStore",
    "WAWebLabyrinthDebugLoadForRestore",
    "WAWebLabyrinthDecryptThread",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthOwnerAccountId",
    "WAWebLabyrinthWasmOrfThreadId",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100;
    async function s(e) {
      var t = o("WAWebLabyrinthOpaqueTypes").makeThreadId(e);
      if (t.length === 0)
        return o("WAResultOrError").makeError({ kind: "empty-thread-id" });
      var n = await u();
      if (!n.success) return n;
      var r = n.value,
        a = r.ownerAccountId,
        i = r.state,
        l = await d(i, a, t);
      if (!l.success) return l;
      if (!o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(a))
        return o("WAResultOrError").makeError({
          kind: "local-account-changed",
        });
      var s = await o(
        "WAWebLabyrinthDecryptThread",
      ).decryptLabyrinthEncryptedThread(c(i), l.value, function () {
        return o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(a);
      });
      return s.success
        ? o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(a)
          ? o("WAResultOrError").makeResult({
              messages: s.value,
              restoredAtMs: o("WATimeUtils").castToMillisTime(Date.now()),
            })
          : o("WAResultOrError").makeError({ kind: "local-account-changed" })
        : s;
    }
    async function u() {
      var e = o("WAWebLabyrinthOwnerAccountId").getMaybeOwnerAccountId();
      if (e == null)
        return o("WAResultOrError").makeError({
          kind: "missing-local-account-id",
        });
      var t = await o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
        o("WAWebLabyrinthDebugLoadForRestore").loadForRestore,
      );
      if (!t.success)
        return o("WAResultOrError").makeError({
          error: t.error,
          kind: "load-device-state-error",
        });
      var n = t.value;
      return n == null
        ? o("WAResultOrError").makeError({ kind: "missing-device-state" })
        : o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(e)
          ? o("WAResultOrError").makeResult({ ownerAccountId: e, state: n })
          : o("WAResultOrError").makeError({ kind: "local-account-changed" });
    }
    function c(e) {
      var t = e.currentEpoch,
        n = e.epochStoragePrivateKey;
      return { currentEpoch: t, epochStoragePrivateKey: n };
    }
    async function d(e, t, n, r) {
      var a = await o("WAWebLabyrinthWasmOrfThreadId").labyrinthOrfThreadIdWasm(
        { orfClientState: e.orfClientState, threadId: n },
      );
      if (!a.success)
        return o("WAResultOrError").makeError({
          error: a.error,
          kind: "orf-thread-id-error",
        });
      var i = await m({
        ebDeviceId: e.ebDeviceId,
        environment: r,
        locallyAvailableEpochId: e.currentEpoch.serverEpochId,
        ownerAccountId: t,
        partialThreadId: a.value,
      });
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, { plainChatJid: n }),
          )
        : i;
    }
    async function m(e) {
      var t = e.ebDeviceId,
        n = e.environment,
        r = e.locallyAvailableEpochId,
        o = e.ownerAccountId,
        a = e.partialThreadId;
      return p({
        after: null,
        cursors: new Set(),
        ebDeviceId: t,
        environment: n,
        epochEdges: [],
        locallyAvailableEpochId: r,
        messageIds: new Set(),
        messages: [],
        ownerAccountId: o,
        pageCount: 0,
        partialThreadId: a,
      });
    }
    async function p(t) {
      var n = t.after,
        r = t.cursors,
        a = t.ebDeviceId,
        i = t.environment,
        l = t.epochEdges,
        s = t.locallyAvailableEpochId,
        u = t.messageIds,
        c = t.messages,
        d = t.ownerAccountId,
        m = t.pageCount,
        _ = t.partialThreadId;
      if (m >= e)
        return o("WAResultOrError").makeError({
          after: n,
          kind: "page-limit-exceeded",
          maxPageCount: e,
        });
      if (!o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(d))
        return o("WAResultOrError").makeError({
          kind: "local-account-changed",
        });
      var f = await o(
        "WAWebDebugLabyrinthRestorePageJob",
      ).fetchLabyrinthRestorePage({
        after: n,
        ebDeviceId: a,
        environment: i,
        locallyAvailableEpochId: s,
        partialThreadId: _,
      });
      if (!f.success)
        return o("WAResultOrError").makeError({
          after: n,
          error: f.error,
          kind: "fetch-page-error",
          pageIndex: m,
        });
      for (var g of f.value.messages) {
        if (u.has(g.messageId))
          return o("WAResultOrError").makeError({
            kind: "duplicate-message",
            messageId: g.messageId,
          });
        (u.add(g.messageId), c.push(g));
      }
      l.push.apply(l, f.value.epochEdges);
      var h = m + 1,
        y = f.value.nextCursor;
      return y == null
        ? o("WAResultOrError").makeResult({ epochEdges: l, messages: c })
        : r.has(y)
          ? o("WAResultOrError").makeError({
              cursor: y,
              kind: "repeated-cursor",
            })
          : (r.add(y),
            p({
              after: y,
              cursors: r,
              ebDeviceId: a,
              environment: i,
              epochEdges: l,
              locallyAvailableEpochId: s,
              messageIds: u,
              messages: c,
              ownerAccountId: d,
              pageCount: h,
              partialThreadId: _,
            }));
    }
    ((l.restoreLabyrinthThread = s),
      (l.loadLabyrinthStateForRestore = u),
      (l.getLabyrinthDecryptKeys = c),
      (l.fetchLabyrinthEncryptedThread = d));
  },
  98,
);
