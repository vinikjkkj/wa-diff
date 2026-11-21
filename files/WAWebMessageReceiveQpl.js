__d(
  "WAWebMessageReceiveQpl",
  ["QPLFlow", "WAWebLongTaskAccumulator", "WAWebMessageReceiveFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891430343, "3728"),
      s = 300 * 1e3,
      u = 1e3,
      c = [].concat(o("WAWebMessageReceiveFlow").OFFLINE_RESUME_TOTAL_KEYS, [
        "rx_stanza_count",
        "rx_checkpoint_count",
        "rx_storage_commit_ms",
        "rx_checkpoint_signal_write_ms",
        "rx_evicted_flow_count",
      ]),
      d = {
        storage_commit_end: "rx_storage_commit_ms",
        checkpoint_signal_write_end: "rx_checkpoint_signal_write_ms",
      },
      m = new Map(),
      p = new Map(
        c.map(function (e) {
          return [e, 0];
        }),
      ),
      _ = new WeakMap(),
      f = null,
      g = null,
      h = null,
      y = {
        start: C,
        addPoint: v,
        annotate: S,
        addCheckpointPoint: R,
        addInboundDrainWait: E,
        handOffMessageWrite: k,
        isMessageWriteHandedOff: I,
        settleQueue: T,
        endWithReceipt: D,
        endWithFailure: x,
        addToOfflineResumeTotals: $,
        recordOfflineAck: P,
        resetOfflineResumeTotals: N,
        takeOfflineResumeTotals: M,
      };
    function C(t) {
      var n = t.chatType,
        r = t.isOffline,
        a = t.persistedQueue,
        i = t.queueDepth,
        l = t.queueImpl,
        u = t.stanzaId,
        c = t.stanzaType;
      (O(u, "superseded"), B(), r && (A("rx_stanza_count", 1), w(l)));
      var d = o("QPLFlow").startQPLFlow(e, {
        annotations: {
          bool: {
            is_hidden_at_start: b(),
            is_offline: r,
            persisted_queue: a === !0,
          },
          int: { queue_depth_offline: i.offline, queue_depth_online: i.online },
          string: { chat_type: n, message_queue_impl: l, stanza_type: c },
        },
        timeoutInMs: s,
      });
      (d.addPoint("queue_wait_start"),
        m.set(u, {
          flow: d,
          handlerEnded: !1,
          inboundDrainWaitMs: 0,
          longTasksAtStart: o("WAWebLongTaskAccumulator").getLongTaskTotals(),
          messageWriteHandedOff: !1,
          storageCommitted: !1,
        }));
    }
    function b() {
      return globalThis.document != null ? globalThis.document.hidden : null;
    }
    function v(e, t) {
      var n = m.get(e);
      n != null &&
        (n.flow.addPoint(t), t === "handler_end" && (n.handlerEnded = !0));
    }
    function S(e, t) {
      var n;
      (n = m.get(e)) == null || n.flow.addAnnotations(t);
    }
    function R(e, t) {
      (L(e, t),
        e.forEach(function (e) {
          var n = m.get(e);
          n != null &&
            (n.flow.addPoint(t),
            t === "storage_commit_end" && (n.storageCommitted = !0));
        }));
    }
    function L(e, t) {
      var n = self.performance.now();
      t === "storage_commit_start" && A("rx_checkpoint_count", 1);
      var r = d[t];
      if (r == null) {
        _.set(e, n);
        return;
      }
      var o = _.get(e);
      o != null && A(r, n - o);
    }
    function E(e, t) {
      var n = m.get(e);
      n != null &&
        ((n.inboundDrainWaitMs += t),
        n.flow.addAnnotations({
          int: { inbound_drain_wait_ms: Math.round(n.inboundDrainWaitMs) },
        }));
    }
    function k(e) {
      e.forEach(function (e) {
        var t = m.get(e);
        t != null && (t.messageWriteHandedOff = !0);
      });
    }
    function I(e) {
      var t;
      return ((t = m.get(e)) == null ? void 0 : t.messageWriteHandedOff) === !0;
    }
    function T(e, t) {
      var n = m.get(e);
      n != null &&
        (n.flow.addPoint("queue_settled"),
        n.handlerEnded ||
          n.flow.addAnnotations({ bool: { queue_timed_out: !0 } }),
        t && x(e, "nack"));
    }
    function D(e, t) {
      var n = W(e);
      n != null &&
        (n.flow.addPoint("receipt_sent"),
        n.flow.addAnnotations({
          bool: { storage_committed_before_receipt: n.storageCommitted },
        }),
        F(n),
        n.flow.endSuccess(t));
    }
    function x(e, t) {
      var n = W(e);
      n != null && (F(n), n.flow.endFail(t));
    }
    function $(e) {
      o("WAWebMessageReceiveFlow").OFFLINE_RESUME_TOTAL_KEYS.forEach(
        function (t) {
          var n = e[t];
          n != null && A(t, n);
        },
      );
    }
    function P() {
      var e = self.performance.now();
      (f != null || (f = e), (g = e));
    }
    function N() {
      (c.forEach(function (e) {
        return p.set(e, 0);
      }),
        (f = null),
        (g = null),
        (h = null));
    }
    function M(e) {
      var t = {};
      p.forEach(function (e, n) {
        t[n] = Math.round(e);
      });
      var n = f,
        r = g;
      n != null &&
        r != null &&
        ((t.rx_first_ack_offset_ms = Math.round(n - e)),
        (t.rx_last_ack_offset_ms = Math.round(r - e)));
      var o = h;
      return (
        N(),
        o == null
          ? { int: t }
          : { int: t, string: { rx_message_queue_impl: o } }
      );
    }
    function w(e) {
      h = h == null || h === e ? e : "mixed";
    }
    function A(e, t) {
      var n;
      p.set(e, ((n = p.get(e)) != null ? n : 0) + t);
    }
    function F(e) {
      var t = o("WAWebLongTaskAccumulator").getLongTaskAnnotationsSince(
        e.longTasksAtStart,
      );
      t != null && e.flow.addAnnotations(t);
    }
    function O(e, t) {
      var n;
      (n = W(e)) == null ||
        n.flow.endCancel(4, { string: { cancel_reason: t } });
    }
    function B() {
      if (!(m.size < u)) {
        var e = m.keys().next().value;
        e != null && (O(e, "evicted"), A("rx_evicted_flow_count", 1));
      }
    }
    function W(e) {
      var t = m.get(e);
      return (m.delete(e), t);
    }
    ((l.MAX_OPEN_MESSAGE_RECEIVE_FLOWS = u), (l.messageReceiveQplTracker = y));
  },
  98,
);
