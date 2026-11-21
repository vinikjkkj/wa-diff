__d(
  "WAWebMessageReceiveFlow",
  ["WAComms", "WAWebBoolFunc", "WAWebNullFunc", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "rx_queue_wait_ms",
        "rx_gate_wait_ms",
        "rx_tick_wait_ms",
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
        addInboundDrainWait: function () {},
        handOffMessageWrite: function () {},
        isMessageWriteHandedOff: o("WAWebBoolFunc").returnFalse,
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
      return (
        u.start(e),
        I(
          o,
          t(L(o, r, n), {
            onInboundDrainWaited: function (t) {
              return m(o, t);
            },
          }),
        )
      );
    }
    function m(e, t) {
      u.addInboundDrainWait(e, t);
    }
    function p(e) {
      u.handOffMessageWrite(e);
    }
    function _(e) {
      return e.filter(function (e) {
        return !u.isMessageWriteHandedOff(e);
      });
    }
    function f() {
      u.resetOfflineResumeTotals();
    }
    function g(e) {
      return u.takeOfflineResumeTotals(e);
    }
    function h(e, t) {
      u.addCheckpointPoint(e, t);
    }
    function y(e, t) {
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
    function C(e, t) {
      e.length > 0 && u.recordOfflineAck();
      var n = t.batchSize,
        r = t.signalDirtyCount;
      e.forEach(function (e) {
        return u.endWithReceipt(e, {
          int:
            r == null
              ? { checkpoint_batch_size: n }
              : { checkpoint_batch_size: n, checkpoint_signal_dirty_count: r },
          string: { receipt_path: "aggregated" },
        });
      });
    }
    function b(e) {
      e.forEach(function (e) {
        return u.endWithFailure(e, "nack");
      });
    }
    function v(e) {
      e.forEach(function (e) {
        return u.endWithFailure(e, "takeover");
      });
    }
    function S(e) {
      e.forEach(function (e) {
        return u.endWithFailure(e, "checkpoint_failed");
      });
    }
    function R(e, t) {
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
    function L(e, t, r) {
      var a,
        i = self.performance.now(),
        l = (a = o("WAComms").getComms()) == null ? void 0 : a.socketId;
      return (function () {
        var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
          var a;
          (u.addPoint(e, "queue_wait_end"),
            u.annotate(
              e,
              E(
                ((a = o("WAComms").getComms()) == null
                  ? void 0
                  : a.socketId) !== l,
                n,
              ),
            ),
            t && u.addToOfflineResumeTotals(k(self.performance.now() - i, n)));
          try {
            var s = yield r();
            return (u.addPoint(e, "handler_end"), s);
          } catch (t) {
            throw (
              u.addPoint(e, "handler_end"),
              u.endWithFailure(e, "handler_error"),
              t
            );
          }
        });
        return function (e) {
          return a.apply(this, arguments);
        };
      })();
    }
    function E(e, t) {
      return t == null
        ? { bool: { socket_changed_while_queued: e } }
        : {
            bool: { socket_changed_while_queued: e },
            int: {
              gate_wait_ms: Math.round(t.gateWaitMs),
              tick_wait_ms: Math.round(t.tickWaitMs),
            },
          };
    }
    function k(e, t) {
      return t == null
        ? { rx_queue_wait_ms: e }
        : {
            rx_gate_wait_ms: t.gateWaitMs,
            rx_queue_wait_ms: e,
            rx_tick_wait_ms: t.tickWaitMs,
          };
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t;
          return (u.settleQueue(e, n != null), n);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            r === void 0 && (r = "immediate");
            try {
              yield t;
            } catch (t) {
              throw (u.endWithFailure(e, "receipt_failed"), t);
            }
            u.endWithReceipt(e, {
              string: { decrypt_result: n, receipt_path: r },
            });
          },
        )),
        x.apply(this, arguments)
      );
    }
    ((l.OFFLINE_RESUME_TOTAL_KEYS = e),
      (l.setMessageReceiveFlowTracker = c),
      (l.trackMessageReceive = d),
      (l.addMessageReceiveInboundDrainWait = m),
      (l.handOffMessageReceiveWrites = p),
      (l.withoutHandedOffMessageReceiveWrites = _),
      (l.resetOfflineResumeReceiveTotals = f),
      (l.takeOfflineResumeReceiveTotals = g),
      (l.markMessageReceiveCheckpoint = h),
      (l.annotateMessageReceiveStorageCommit = y),
      (l.endMessageReceiveWithAggregatedReceipt = C),
      (l.endMessageReceiveWithNack = b),
      (l.endMessageReceiveWithTakeover = v),
      (l.failMessageReceiveCheckpoint = S),
      (l.startMessageReceiveDecryptTimer = R),
      (l.trackMessageReceiveReceipt = D));
  },
  98,
);
