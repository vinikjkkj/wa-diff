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
        settleQueue: E,
        endWithReceipt: k,
        endWithFailure: I,
        addToOfflineResumeTotals: T,
        recordOfflineAck: D,
        resetOfflineResumeTotals: x,
        takeOfflineResumeTotals: $,
      };
    function C(t) {
      var n = t.chatType,
        r = t.isOffline,
        a = t.queueDepth,
        i = t.queueImpl,
        l = t.stanzaId,
        u = t.stanzaType;
      (w(l, "superseded"), A(), r && (N("rx_stanza_count", 1), P(i)));
      var c = o("QPLFlow").startQPLFlow(e, {
        annotations: {
          bool: { is_hidden_at_start: b(), is_offline: r },
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
      t === "storage_commit_start" && N("rx_checkpoint_count", 1);
      var r = d[t];
      if (r == null) {
        _.set(e, n);
        return;
      }
      var o = _.get(e);
      o != null && N(r, n - o);
    }
    function E(e, t) {
      var n = m.get(e);
      n != null &&
        (n.flow.addPoint("queue_settled"),
        n.handlerEnded ||
          n.flow.addAnnotations({ bool: { queue_timed_out: !0 } }),
        t && I(e, "nack"));
    }
    function k(e, t) {
      var n = F(e);
      n != null &&
        (n.flow.addPoint("receipt_sent"),
        n.flow.addAnnotations({
          bool: { storage_committed_before_receipt: n.storageCommitted },
        }),
        M(n),
        n.flow.endSuccess(t));
    }
    function I(e, t) {
      var n = F(e);
      n != null && (M(n), n.flow.endFail(t));
    }
    function T(e) {
      o("WAWebMessageReceiveFlow").OFFLINE_RESUME_TOTAL_KEYS.forEach(
        function (t) {
          var n = e[t];
          n != null && N(t, n);
        },
      );
    }
    function D() {
      var e = self.performance.now();
      (f != null || (f = e), (g = e));
    }
    function x() {
      (c.forEach(function (e) {
        return p.set(e, 0);
      }),
        (f = null),
        (g = null),
        (h = null));
    }
    function $(e) {
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
        x(),
        o == null
          ? { int: t }
          : { int: t, string: { rx_message_queue_impl: o } }
      );
    }
    function P(e) {
      h = h == null || h === e ? e : "mixed";
    }
    function N(e, t) {
      var n;
      p.set(e, ((n = p.get(e)) != null ? n : 0) + t);
    }
    function M(e) {
      var t = o("WAWebLongTaskAccumulator").getLongTaskAnnotationsSince(
        e.longTasksAtStart,
      );
      t != null && e.flow.addAnnotations(t);
    }
    function w(e, t) {
      var n;
      (n = F(e)) == null ||
        n.flow.endCancel(4, { string: { cancel_reason: t } });
    }
    function A() {
      if (!(m.size < u)) {
        var e = m.keys().next().value;
        e != null && (w(e, "evicted"), N("rx_evicted_flow_count", 1));
      }
    }
    function F(e) {
      var t = m.get(e);
      return (m.delete(e), t);
    }
    ((l.MAX_OPEN_MESSAGE_RECEIVE_FLOWS = u), (l.messageReceiveQplTracker = y));
  },
  98,
);
