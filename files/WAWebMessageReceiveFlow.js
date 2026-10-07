__d(
  "WAWebMessageReceiveFlow",
  ["WAWebNullFunc", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "rx_queue_wait_ms",
        "rx_decrypt_ms",
        "rx_process_ms",
        "rx_decrypted_enc_count",
        "rx_signal_flush_ms",
        "rx_storage_txn_count",
      ],
      s = {
        start: function () {},
        addPoint: function () {},
        annotate: function () {},
        addCheckpointPoint: function () {},
        settleQueue: function () {},
        endWithReceipt: function () {},
        endWithFailure: function () {},
        addToOfflineResumeTotals: function () {},
        recordOfflineAck: function () {},
        resetOfflineResumeTotals: function () {},
        takeOfflineResumeTotals: o("WAWebNullFunc").returnNull,
      },
      u = s;
    function c(e) {
      u = e;
    }
    function d(e, t, n) {
      var r = e.isOffline,
        o = e.stanzaId;
      return (u.start(e), v(o, t(b(o, r, n))));
    }
    function m() {
      u.resetOfflineResumeTotals();
    }
    function p(e) {
      return u.takeOfflineResumeTotals(e);
    }
    function _(e, t) {
      u.addCheckpointPoint(e, t);
    }
    function f(e, t) {
      var n = {
        int: {
          storage_batch_size: t.batchSize,
          storage_txn_count: t.transactionCount,
        },
      };
      (e.forEach(function (e) {
        return u.annotate(e, n);
      }),
        u.addToOfflineResumeTotals({
          rx_storage_txn_count: t.transactionCount,
        }));
    }
    function g(e, t) {
      (e.length > 0 && u.recordOfflineAck(),
        e.forEach(function (e) {
          return u.endWithReceipt(e, {
            int: {
              checkpoint_batch_size: t.batchSize,
              checkpoint_signal_dirty_count: t.signalDirtyCount,
            },
            string: { receipt_path: "aggregated" },
          });
        }));
    }
    function h(e) {
      e.forEach(function (e) {
        return u.endWithFailure(e, "nack");
      });
    }
    function y(e) {
      e.forEach(function (e) {
        return u.endWithFailure(e, "checkpoint_failed");
      });
    }
    function C(e, t) {
      var r = 0,
        o = 0,
        a = 0,
        i = 0;
      function l(e) {
        return s.apply(this, arguments);
      }
      function s() {
        return (
          (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = self.performance.now(),
              n = yield e();
            return [n, self.performance.now() - t];
          })),
          s.apply(this, arguments)
        );
      }
      return {
        timeDecrypt: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield l(e),
              n = t[0],
              o = t[1];
            return ((r += o), i++, n);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        timeProcess: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield l(e),
              n = t[0],
              r = t[1];
            return ((o += r), n);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        timeSignalFlush: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            u.addPoint(e, "signal_flush_start");
            var n = yield l(t),
              r = n[1];
            ((a += r), u.addPoint(e, "signal_flush_end"));
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        finish: function () {
          (u.annotate(e, {
            int: {
              decrypt_ms: Math.round(r),
              decrypted_enc_count: i,
              process_ms: Math.round(o),
            },
          }),
            t &&
              u.addToOfflineResumeTotals({
                rx_decrypt_ms: r,
                rx_decrypted_enc_count: i,
                rx_process_ms: o,
                rx_signal_flush_ms: a,
              }));
        },
      };
    }
    function b(e, t, r) {
      var o = self.performance.now();
      return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        (u.addPoint(e, "queue_wait_end"),
          t &&
            u.addToOfflineResumeTotals({
              rx_queue_wait_ms: self.performance.now() - o,
            }));
        try {
          var n = yield r();
          return (u.addPoint(e, "handler_end"), n);
        } catch (t) {
          throw (
            u.addPoint(e, "handler_end"),
            u.endWithFailure(e, "handler_error"),
            t
          );
        }
      });
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t;
          return (u.settleQueue(e, n != null), n);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            yield t;
          } catch (t) {
            throw (u.endWithFailure(e, "receipt_failed"), t);
          }
          u.endWithReceipt(e, {
            string: { decrypt_result: n, receipt_path: "immediate" },
          });
        })),
        L.apply(this, arguments)
      );
    }
    ((l.OFFLINE_RESUME_TOTAL_KEYS = e),
      (l.setMessageReceiveFlowTracker = c),
      (l.trackMessageReceive = d),
      (l.resetOfflineResumeReceiveTotals = m),
      (l.takeOfflineResumeReceiveTotals = p),
      (l.markMessageReceiveCheckpoint = _),
      (l.annotateMessageReceiveStorageCommit = f),
      (l.endMessageReceiveWithAggregatedReceipt = g),
      (l.endMessageReceiveWithNack = h),
      (l.failMessageReceiveCheckpoint = y),
      (l.startMessageReceiveDecryptTimer = C),
      (l.trackMessageReceiveReceipt = R));
  },
  98,
);
