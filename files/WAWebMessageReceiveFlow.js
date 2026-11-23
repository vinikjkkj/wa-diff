__d(
  "WAWebMessageReceiveFlow",
  ["WAComms", "WAWebBoolFunc", "WAWebNullFunc"],
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
      var n = 0,
        r = 0,
        o = 0,
        a = 0;
      async function i(e) {
        var t = self.performance.now(),
          n = await e();
        return [n, self.performance.now() - t];
      }
      return {
        timeDecrypt: async function (t) {
          var e = await i(t),
            r = e[0],
            o = e[1];
          return ((n += o), a++, r);
        },
        timeProcess: async function (t) {
          var e = await i(t),
            n = e[0],
            o = e[1];
          return ((r += o), n);
        },
        timeSignalFlush: async function (n) {
          u.addPoint(e, "signal_flush_start");
          var t = await i(n),
            r = t[1];
          ((o += r), u.addPoint(e, "signal_flush_end"));
        },
        finish: function () {
          (u.annotate(e, {
            int: {
              decrypt_ms: Math.round(n),
              decrypted_enc_count: a,
              process_ms: Math.round(r),
            },
          }),
            t &&
              u.addToOfflineResumeTotals({
                rx_decrypt_ms: n,
                rx_decrypted_enc_count: a,
                rx_process_ms: r,
                rx_signal_flush_ms: o,
              }));
        },
      };
    }
    function L(e, t, n) {
      var r,
        a = self.performance.now(),
        i = (r = o("WAComms").getComms()) == null ? void 0 : r.socketId;
      return async function (r) {
        var l;
        (u.addPoint(e, "queue_wait_end"),
          u.annotate(
            e,
            E(
              ((l = o("WAComms").getComms()) == null ? void 0 : l.socketId) !==
                i,
              r,
            ),
          ),
          t && u.addToOfflineResumeTotals(k(self.performance.now() - a, r)));
        try {
          var s = await n();
          return (u.addPoint(e, "handler_end"), s);
        } catch (t) {
          throw (
            u.addPoint(e, "handler_end"),
            u.endWithFailure(e, "handler_error"),
            t
          );
        }
      };
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
    async function I(e, t) {
      var n = await t;
      return (u.settleQueue(e, n != null), n);
    }
    async function T(e, t, n, r) {
      r === void 0 && (r = "immediate");
      try {
        await t;
      } catch (t) {
        throw (u.endWithFailure(e, "receipt_failed"), t);
      }
      u.endWithReceipt(e, { string: { decrypt_result: n, receipt_path: r } });
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
      (l.trackMessageReceiveReceipt = T));
  },
  98,
);
