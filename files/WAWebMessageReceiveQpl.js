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
      h = {
        start: y,
        addPoint: C,
        annotate: b,
        addCheckpointPoint: v,
        settleQueue: R,
        endWithReceipt: L,
        endWithFailure: E,
        addToOfflineResumeTotals: k,
        recordOfflineAck: I,
        resetOfflineResumeTotals: T,
        takeOfflineResumeTotals: D,
      };
    function y(t) {
      var n = t.chatType,
        r = t.isOffline,
        a = t.queueDepth,
        i = t.stanzaId,
        l = t.stanzaType;
      (P(i, "superseded"), N(), r && x("rx_stanza_count", 1));
      var u = o("QPLFlow").startQPLFlow(e, {
        annotations: {
          bool: { is_offline: r },
          int: { queue_depth_offline: a.offline, queue_depth_online: a.online },
          string: { chat_type: n, stanza_type: l },
        },
        timeoutInMs: s,
      });
      (u.addPoint("queue_wait_start"),
        m.set(i, {
          flow: u,
          handlerEnded: !1,
          longTasksAtStart: o("WAWebLongTaskAccumulator").getLongTaskTotals(),
          storageCommitted: !1,
        }));
    }
    function C(e, t) {
      var n = m.get(e);
      n != null &&
        (n.flow.addPoint(t), t === "handler_end" && (n.handlerEnded = !0));
    }
    function b(e, t) {
      var n;
      (n = m.get(e)) == null || n.flow.addAnnotations(t);
    }
    function v(e, t) {
      (S(e, t),
        e.forEach(function (e) {
          var n = m.get(e);
          n != null &&
            (n.flow.addPoint(t),
            t === "storage_commit_end" && (n.storageCommitted = !0));
        }));
    }
    function S(e, t) {
      var n = self.performance.now();
      t === "storage_commit_start" && x("rx_checkpoint_count", 1);
      var r = d[t];
      if (r == null) {
        _.set(e, n);
        return;
      }
      var o = _.get(e);
      o != null && x(r, n - o);
    }
    function R(e, t) {
      var n = m.get(e);
      n != null &&
        (n.handlerEnded ||
          n.flow.addAnnotations({ bool: { queue_timed_out: !0 } }),
        t && E(e, "nack"));
    }
    function L(e, t) {
      var n = M(e);
      n != null &&
        (n.flow.addPoint("receipt_sent"),
        n.flow.addAnnotations({
          bool: { storage_committed_before_receipt: n.storageCommitted },
        }),
        $(n),
        n.flow.endSuccess(t));
    }
    function E(e, t) {
      var n = M(e);
      n != null && ($(n), n.flow.endFail(t));
    }
    function k(e) {
      o("WAWebMessageReceiveFlow").OFFLINE_RESUME_TOTAL_KEYS.forEach(
        function (t) {
          var n = e[t];
          n != null && x(t, n);
        },
      );
    }
    function I() {
      var e = self.performance.now();
      (f != null || (f = e), (g = e));
    }
    function T() {
      (c.forEach(function (e) {
        return p.set(e, 0);
      }),
        (f = null),
        (g = null));
    }
    function D(e) {
      var t = {};
      p.forEach(function (e, n) {
        t[n] = Math.round(e);
      });
      var n = f,
        r = g;
      return (
        n != null &&
          r != null &&
          ((t.rx_first_ack_offset_ms = Math.round(n - e)),
          (t.rx_last_ack_offset_ms = Math.round(r - e))),
        T(),
        { int: t }
      );
    }
    function x(e, t) {
      var n;
      p.set(e, ((n = p.get(e)) != null ? n : 0) + t);
    }
    function $(e) {
      var t = o("WAWebLongTaskAccumulator").getLongTaskAnnotationsSince(
        e.longTasksAtStart,
      );
      t != null && e.flow.addAnnotations(t);
    }
    function P(e, t) {
      var n;
      (n = M(e)) == null ||
        n.flow.endCancel(4, { string: { cancel_reason: t } });
    }
    function N() {
      if (!(m.size < u)) {
        var e = m.keys().next().value;
        e != null && (P(e, "evicted"), x("rx_evicted_flow_count", 1));
      }
    }
    function M(e) {
      var t = m.get(e);
      return (m.delete(e), t);
    }
    ((l.MAX_OPEN_MESSAGE_RECEIVE_FLOWS = u), (l.messageReceiveQplTracker = h));
  },
  98,
);
