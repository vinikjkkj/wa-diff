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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLabyrinthOpaqueTypes").makeThreadId(e);
          if (t.length === 0)
            return o("WAResultOrError").makeError({ kind: "empty-thread-id" });
          var n = yield c();
          if (!n.success) return n;
          var r = n.value,
            a = r.ownerAccountId,
            i = r.state,
            l = yield p(i, a, t);
          if (!l.success) return l;
          if (!o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(a))
            return o("WAResultOrError").makeError({
              kind: "local-account-changed",
            });
          var s = yield o(
            "WAWebLabyrinthDecryptThread",
          ).decryptLabyrinthEncryptedThread(m(i), l.value, function () {
            return o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(a);
          });
          return s.success
            ? o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(a)
              ? o("WAResultOrError").makeResult({
                  messages: s.value,
                  restoredAtMs: o("WATimeUtils").castToMillisTime(Date.now()),
                })
              : o("WAResultOrError").makeError({
                  kind: "local-account-changed",
                })
            : s;
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebLabyrinthOwnerAccountId").getMaybeOwnerAccountId();
          if (e == null)
            return o("WAResultOrError").makeError({
              kind: "missing-local-account-id",
            });
          var t = yield o("WAWebLabyrinthDebugDeviceStateStore").loadOwnedState(
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
              : o("WAResultOrError").makeError({
                  kind: "local-account-changed",
                });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = e.currentEpoch,
        n = e.epochStoragePrivateKey;
      return { currentEpoch: t, epochStoragePrivateKey: n };
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "WAWebLabyrinthWasmOrfThreadId",
            ).labyrinthOrfThreadIdWasm({
              orfClientState: e.orfClientState,
              threadId: n,
            });
            if (!a.success)
              return o("WAResultOrError").makeError({
                error: a.error,
                kind: "orf-thread-id-error",
              });
            var i = yield f({
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
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ebDeviceId,
            n = e.environment,
            r = e.locallyAvailableEpochId,
            o = e.ownerAccountId,
            a = e.partialThreadId;
          return h({
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            p = t.partialThreadId;
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
          var _ = yield o(
            "WAWebDebugLabyrinthRestorePageJob",
          ).fetchLabyrinthRestorePage({
            after: n,
            ebDeviceId: a,
            environment: i,
            locallyAvailableEpochId: s,
            partialThreadId: p,
          });
          if (!_.success)
            return o("WAResultOrError").makeError({
              after: n,
              error: _.error,
              kind: "fetch-page-error",
              pageIndex: m,
            });
          for (var f of _.value.messages) {
            if (u.has(f.messageId))
              return o("WAResultOrError").makeError({
                kind: "duplicate-message",
                messageId: f.messageId,
              });
            (u.add(f.messageId), c.push(f));
          }
          l.push.apply(l, _.value.epochEdges);
          var g = m + 1,
            y = _.value.nextCursor;
          return y == null
            ? o("WAResultOrError").makeResult({ epochEdges: l, messages: c })
            : r.has(y)
              ? o("WAResultOrError").makeError({
                  cursor: y,
                  kind: "repeated-cursor",
                })
              : (r.add(y),
                h({
                  after: y,
                  cursors: r,
                  ebDeviceId: a,
                  environment: i,
                  epochEdges: l,
                  locallyAvailableEpochId: s,
                  messageIds: u,
                  messages: c,
                  ownerAccountId: d,
                  pageCount: g,
                  partialThreadId: p,
                }));
        })),
        y.apply(this, arguments)
      );
    }
    ((l.restoreLabyrinthThread = s),
      (l.loadLabyrinthStateForRestore = c),
      (l.getLabyrinthDecryptKeys = m),
      (l.fetchLabyrinthEncryptedThread = p));
  },
  98,
);
