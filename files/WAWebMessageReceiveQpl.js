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
        addPoint: b,
        annotate: v,
        addCheckpointPoint: S,
        settleQueue: L,
        endWithReceipt: E,
        endWithFailure: k,
        addToOfflineResumeTotals: I,
        recordOfflineAck: T,
        resetOfflineResumeTotals: D,
        takeOfflineResumeTotals: x,
      };
    function C(t) {
      var n = t.chatType,
        r = t.isOffline,
        a = t.queueDepth,
        i = t.queueImpl,
        l = t.stanzaId,
        u = t.stanzaType;
      (M(l, "superseded"), w(), r && (P("rx_stanza_count", 1), $(i)));
      var c = o("QPLFlow").startQPLFlow(e, {
        annotations: {
          bool: { is_offline: r },
          int: { queue_depth_offline: a.offline, queue_depth_online: a.online },
          string: { chat_type: n, message_queue_impl: i, stanza_type: u },
        },
        timeoutInMs: s,
      });
      (c.addPoint("queue_wait_start"),
        m.set(l, {
          flow: c,
          handlerEnded: !1,
          longTasksAtStart: o("WAWebLongTaskAccumulator").getLongTaskTotals(),
          storageCommitted: !1,
        }));
    }
    function b(e, t) {
      var n = m.get(e);
      n != null &&
        (n.flow.addPoint(t), t === "handler_end" && (n.handlerEnded = !0));
    }
    function v(e, t) {
      var n;
      (n = m.get(e)) == null || n.flow.addAnnotations(t);
    }
    function S(e, t) {
      (R(e, t),
        e.forEach(function (e) {
          var n = m.get(e);
          n != null &&
            (n.flow.addPoint(t),
            t === "storage_commit_end" && (n.storageCommitted = !0));
        }));
    }
    function R(e, t) {
      var n = self.performance.now();
      t === "storage_commit_start" && P("rx_checkpoint_count", 1);
      var r = d[t];
      if (r == null) {
        _.set(e, n);
        return;
      }
      var o = _.get(e);
      o != null && P(r, n - o);
    }
    function L(e, t) {
      var n = m.get(e);
      n != null &&
        (n.flow.addPoint("queue_settled"),
        n.handlerEnded ||
          n.flow.addAnnotations({ bool: { queue_timed_out: !0 } }),
        t && k(e, "nack"));
    }
    function E(e, t) {
      var n = A(e);
      n != null &&
        (n.flow.addPoint("receipt_sent"),
        n.flow.addAnnotations({
          bool: { storage_committed_before_receipt: n.storageCommitted },
        }),
        N(n),
        n.flow.endSuccess(t));
    }
    function k(e, t) {
      var n = A(e);
      n != null && (N(n), n.flow.endFail(t));
    }
    function I(e) {
      o("WAWebMessageReceiveFlow").OFFLINE_RESUME_TOTAL_KEYS.forEach(
        function (t) {
          var n = e[t];
          n != null && P(t, n);
        },
      );
    }
    function T() {
      var e = self.performance.now();
      (f != null || (f = e), (g = e));
    }
    function D() {
      (c.forEach(function (e) {
        return p.set(e, 0);
      }),
        (f = null),
        (g = null),
        (h = null));
    }
    function x(e) {
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
        D(),
        o == null
          ? { int: t }
          : { int: t, string: { rx_message_queue_impl: o } }
      );
    }
    function $(e) {
      h = h == null || h === e ? e : "mixed";
    }
    function P(e, t) {
      var n;
      p.set(e, ((n = p.get(e)) != null ? n : 0) + t);
    }
    function N(e) {
      var t = o("WAWebLongTaskAccumulator").getLongTaskAnnotationsSince(
        e.longTasksAtStart,
      );
      t != null && e.flow.addAnnotations(t);
    }
    function M(e, t) {
      var n;
      (n = A(e)) == null ||
        n.flow.endCancel(4, { string: { cancel_reason: t } });
    }
    function w() {
      if (!(m.size < u)) {
        var e = m.keys().next().value;
        e != null && (M(e, "evicted"), P("rx_evicted_flow_count", 1));
      }
    }
    function A(e) {
      var t = m.get(e);
      return (m.delete(e), t);
    }
    ((l.MAX_OPEN_MESSAGE_RECEIVE_FLOWS = u), (l.messageReceiveQplTracker = y));
  },
  98,
);
