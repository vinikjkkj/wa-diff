__d(
  "WAWebMessageReceiveFlow",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = [
        "rx_queue_wait_ms",
        "rx_decrypt_ms",
        "rx_process_ms",
        "rx_decrypted_enc_count",
        "rx_signal_flush_ms",
        "rx_storage_txn_count",
      ],
      l = {
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
        takeOfflineResumeTotals: function () {
          return null;
        },
      },
      s = l;
    function u(e) {
      s = e;
    }
    function c(e, t, n) {
      var r = e.isOffline,
        o = e.stanzaId;
      return (s.start(e), b(o, t(C(o, r, n))));
    }
    function d() {
      s.resetOfflineResumeTotals();
    }
    function m(e) {
      return s.takeOfflineResumeTotals(e);
    }
    function p(e, t) {
      s.addCheckpointPoint(e, t);
    }
    function _(e, t) {
      var n = {
        int: {
          storage_batch_size: t.batchSize,
          storage_txn_count: t.transactionCount,
        },
      };
      (e.forEach(function (e) {
        return s.annotate(e, n);
      }),
        s.addToOfflineResumeTotals({
          rx_storage_txn_count: t.transactionCount,
        }));
    }
    function f(e, t) {
      (e.length > 0 && s.recordOfflineAck(),
        e.forEach(function (e) {
          return s.endWithReceipt(e, {
            int: {
              checkpoint_batch_size: t.batchSize,
              checkpoint_signal_dirty_count: t.signalDirtyCount,
            },
            string: { receipt_path: "aggregated" },
          });
        }));
    }
    function g(e) {
      e.forEach(function (e) {
        return s.endWithFailure(e, "nack");
      });
    }
    function h(e) {
      e.forEach(function (e) {
        return s.endWithFailure(e, "checkpoint_failed");
      });
    }
    function y(e, t) {
      var r = 0,
        o = 0,
        a = 0,
        i = 0;
      function l(e) {
        return u.apply(this, arguments);
      }
      function u() {
        return (
          (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = self.performance.now(),
              n = yield e();
            return [n, self.performance.now() - t];
          })),
          u.apply(this, arguments)
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
            s.addPoint(e, "signal_flush_start");
            var n = yield l(t),
              r = n[1];
            ((a += r), s.addPoint(e, "signal_flush_end"));
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        finish: function () {
          (s.annotate(e, {
            int: {
              decrypt_ms: Math.round(r),
              decrypted_enc_count: i,
              process_ms: Math.round(o),
            },
          }),
            t &&
              s.addToOfflineResumeTotals({
                rx_decrypt_ms: r,
                rx_decrypted_enc_count: i,
                rx_process_ms: o,
                rx_signal_flush_ms: a,
              }));
        },
      };
    }
    function C(e, t, r) {
      var o = self.performance.now();
      return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        (s.addPoint(e, "queue_wait_end"),
          t &&
            s.addToOfflineResumeTotals({
              rx_queue_wait_ms: self.performance.now() - o,
            }));
        try {
          var n = yield r();
          return (s.addPoint(e, "handler_end"), n);
        } catch (t) {
          throw (
            s.addPoint(e, "handler_end"),
            s.endWithFailure(e, "handler_error"),
            t
          );
        }
      });
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t;
          return (s.settleQueue(e, n != null), n);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            yield t;
          } catch (t) {
            throw (s.endWithFailure(e, "receipt_failed"), t);
          }
          s.endWithReceipt(e, {
            string: { decrypt_result: n, receipt_path: "immediate" },
          });
        })),
        R.apply(this, arguments)
      );
    }
    ((i.OFFLINE_RESUME_TOTAL_KEYS = e),
      (i.setMessageReceiveFlowTracker = u),
      (i.trackMessageReceive = c),
      (i.resetOfflineResumeReceiveTotals = d),
      (i.takeOfflineResumeReceiveTotals = m),
      (i.markMessageReceiveCheckpoint = p),
      (i.annotateMessageReceiveStorageCommit = _),
      (i.endMessageReceiveWithAggregatedReceipt = f),
      (i.endMessageReceiveWithNack = g),
      (i.failMessageReceiveCheckpoint = h),
      (i.startMessageReceiveDecryptTimer = y),
      (i.trackMessageReceiveReceipt = S));
  },
  66,
);
