__d(
  "WAWebSignalStateOneQueueFlushable",
  [
    "Promise",
    "WALogger",
    "WAWebDecryptsOutsideInboundMsgRows",
    "WAWebGetMessageCache",
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebOfflineResumeCounters",
    "WAWebSignalProtocolStore",
    "WAWebSignalSnapshotWriter",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = n("Promise"))).resolve(),
      c = 1,
      d = 0,
      m = {
        flush: function () {
          return g(function () {
            return o(
              "WAWebInboundMsgPersistedQueueAdapter",
            ).isInboundMsgPersistedQueueRegistered()
              ? C()
              : o("WAWebGetMessageCache")
                  .getMessageCache()
                  .writeSignalState(!1);
          });
        },
      };
    function p() {
      return g(C);
    }
    function _() {
      return c;
    }
    function f(e) {
      return e <= d;
    }
    function g(e) {
      var t = u.then(function () {
        return h(e);
      });
      return ((u = t), t);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o(
              "WAWebInboundMsgPersistedQueueAdapter",
            ).shouldHoldInboundMsgSignalState()
          ) {
            var n = c++;
            try {
              yield t();
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
            d = Math.max(d, n);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebSignalProtocolStore").getSignalProtocolStore(),
            t = e.generateSnapshot();
          if (t == null && !e.hasPendingPersistWrites()) {
            o(
              "WAWebDecryptsOutsideInboundMsgRows",
            ).hasDecryptOutsideInboundMsgRows() && (yield v());
            return;
          }
          (o(
            "WAWebDecryptsOutsideInboundMsgRows",
          ).takeDecryptOutsideInboundMsgRows() && (yield v()),
            t != null
              ? yield o("WAWebSignalSnapshotWriter").writeSignalSnapshot(t)
              : e.hasPendingPersistWrites() &&
                (yield e.flushBufferToDiskIfNotMemOnlyMode()));
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebGetMessageCache").getMessageCache();
          (e.createSnapshot(), yield e.checkpointQueueWait());
        })),
        S.apply(this, arguments)
      );
    }
    ((l.signalStateOneQueueFlushable = m),
      (l.writeSignalStateAfterInboundMsgRows = p),
      (l.getNextSignalStateWrite = _),
      (l.isSignalStateWriteDurable = f));
  },
  98,
);
