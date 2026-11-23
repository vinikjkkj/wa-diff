__d(
  "WAWebSignalStateOneQueueFlushable",
  [
    "WALogger",
    "WAWebDecryptsOutsideInboundMsgRows",
    "WAWebGetMessageCache",
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebOfflineResumeCounters",
    "WAWebSignalProtocolStore",
    "WAWebSignalSnapshotWriter",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Promise.resolve(),
      u = 1,
      c = 0,
      d = {
        flush: function () {
          return f(function () {
            return o(
              "WAWebInboundMsgPersistedQueueAdapter",
            ).isInboundMsgPersistedQueueRegistered()
              ? h()
              : o("WAWebGetMessageCache")
                  .getMessageCache()
                  .writeSignalState(!1);
          });
        },
      };
    function m() {
      return f(h);
    }
    function p() {
      return u;
    }
    function _(e) {
      return e <= c;
    }
    function f(e) {
      var t = s.then(function () {
        return g(e);
      });
      return ((s = t), t);
    }
    async function g(t) {
      if (
        !o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).shouldHoldInboundMsgSignalState()
      ) {
        var n = u++;
        try {
          await t();
        } catch (t) {
          (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "signalStateOneQueueFlushable: flush failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .tags("messaging"),
            o("WAWebOfflineResumeCounters").logOneQueueFlushFailed());
          return;
        }
        c = Math.max(c, n);
      }
    }
    async function h() {
      var e = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
        t = e.generateSnapshot();
      if (t == null && !e.hasPendingPersistWrites()) {
        o(
          "WAWebDecryptsOutsideInboundMsgRows",
        ).hasDecryptOutsideInboundMsgRows() && (await y());
        return;
      }
      (o(
        "WAWebDecryptsOutsideInboundMsgRows",
      ).takeDecryptOutsideInboundMsgRows() && (await y()),
        t != null
          ? await o("WAWebSignalSnapshotWriter").writeSignalSnapshot(t)
          : e.hasPendingPersistWrites() &&
            (await e.flushBufferToDiskIfNotMemOnlyMode()));
    }
    async function y() {
      var e = o("WAWebGetMessageCache").getMessageCache();
      (e.createSnapshot(), await e.checkpointQueueWait());
    }
    ((l.signalStateOneQueueFlushable = d),
      (l.writeSignalStateAfterInboundMsgRows = m),
      (l.getNextSignalStateWrite = p),
      (l.isSignalStateWriteDurable = _));
  },
  98,
);
