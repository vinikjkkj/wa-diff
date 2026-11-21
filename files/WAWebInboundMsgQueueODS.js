__d(
  "WAWebInboundMsgQueueODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      r("WAWebODS").incr("web.inbound_msg_queue.rows_committed", e);
    }
    function s() {
      r("WAWebODS").incr("web.inbound_msg_queue.commit_failed");
    }
    function u(e) {
      r("WAWebODS").incr("web.inbound_msg_queue.receipt_failed", e);
    }
    function c(e) {
      r("WAWebODS").incr("web.inbound_msg_queue.rows_drained", e);
    }
    function d(e) {
      e: {
        if (e === "prepared") {
          r("WAWebODS").incr("web.inbound_msg_queue.rows_applied.prepared");
          break e;
        }
        if (e === "replayed") {
          r("WAWebODS").incr("web.inbound_msg_queue.rows_applied.replayed");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function m(e, t) {
      e: {
        if (e === "active_chat") {
          r("WAWebODS").incr(
            "web.inbound_msg_queue.cop.rows_drained.active_chat",
            t,
          );
          break e;
        }
        if (e === "live_chat") {
          r("WAWebODS").incr(
            "web.inbound_msg_queue.cop.rows_drained.live_chat",
            t,
          );
          break e;
        }
        if (e === "startup_chat") {
          r("WAWebODS").incr(
            "web.inbound_msg_queue.cop.rows_drained.startup_chat",
            t,
          );
          break e;
        }
        if (e === "recent_chat") {
          r("WAWebODS").incr(
            "web.inbound_msg_queue.cop.rows_drained.recent_chat",
            t,
          );
          break e;
        }
        if (e === "fifo") {
          r("WAWebODS").incr("web.inbound_msg_queue.cop.rows_drained.fifo", t);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function p() {
      r("WAWebODS").incr("web.inbound_msg_queue.write_failed");
    }
    function _() {
      r("WAWebODS").incr("web.inbound_msg_queue.rows_retried");
    }
    function f() {
      r("WAWebODS").incr("web.inbound_msg_queue.dead_letter");
    }
    function g() {
      r("WAWebODS").incr("web.inbound_msg_queue.dead_letter_undecodable");
    }
    function h() {
      r("WAWebODS").incr("web.inbound_msg_queue.drain_stalled");
    }
    function y() {
      r("WAWebODS").incr("web.inbound_msg_queue.drain_batch_abandoned");
    }
    function C() {
      r("WAWebODS").incr(
        "web.inbound_msg_queue.dead_letter_placeholder_failed",
      );
    }
    function b(e) {
      r("WAWebODS").incr("web.inbound_msg_queue.rows_left_at_start", e);
    }
    function v() {
      r("WAWebODS").incr("web.inbound_msg_queue.undrainable_rows_left");
    }
    function S() {
      r("WAWebODS").incr("web.inbound_msg_queue.open_failed");
    }
    function R() {
      r("WAWebODS").incr("web.inbound_msg_queue.registration_timeout");
    }
    function L() {
      r("WAWebODS").incr("web.inbound_msg_queue.registration_failed");
    }
    function E() {
      r("WAWebODS").incr("web.inbound_msg_queue.signal_state_held");
    }
    function k() {
      r("WAWebODS").incr("web.inbound_msg_queue.fallback_in_place");
    }
    function I() {
      r("WAWebODS").incr("web.inbound_msg_queue.in_place_write_abandoned");
    }
    function T(e) {
      (r("WAWebODS").incr("web.inbound_msg_queue.stopped"), D(e));
    }
    function D(e) {
      r("WAWebODS").incr("web.inbound_msg_queue.stopped_rows_dropped", e);
    }
    function x(e) {
      r("WAWebODS").incr("web.inbound_msg_queue.duplicate_deferred", e);
    }
    function $(e) {
      r("WAWebODS").incr("web.inbound_msg_queue.duplicate_nacked", e);
    }
    function P(e) {
      r("WAWebODS").incr("web.inbound_msg_queue.duplicate_receipt_failed", e);
    }
    ((l.logInboundMsgsCommitted = e),
      (l.logInboundMsgCommitFailed = s),
      (l.logInboundMsgReceiptFailed = u),
      (l.logInboundMsgsDrained = c),
      (l.logInboundMsgRowApplied = d),
      (l.logInboundMsgCopRowsDrained = m),
      (l.logInboundMsgWriteFailed = p),
      (l.logInboundMsgRowRetried = _),
      (l.logInboundMsgDeadLetter = f),
      (l.logInboundMsgDeadLetterUndecodable = g),
      (l.logInboundMsgDrainStalled = h),
      (l.logInboundMsgDrainBatchAbandoned = y),
      (l.logInboundMsgDeadLetterPlaceholderFailed = C),
      (l.logInboundMsgRowsLeftAtStart = b),
      (l.logInboundMsgUndrainableRowsLeft = v),
      (l.logInboundMsgQueueOpenFailed = S),
      (l.logInboundMsgQueueRegistrationTimeout = R),
      (l.logInboundMsgQueueRegistrationFailed = L),
      (l.logInboundMsgSignalStateHeld = E),
      (l.logInboundMsgFallbackInPlace = k),
      (l.logInboundMsgInPlaceWriteAbandoned = I),
      (l.logInboundMsgQueueStopped = T),
      (l.logInboundMsgStoppedRowsDropped = D),
      (l.logInboundMsgDuplicatesDeferred = x),
      (l.logInboundMsgDuplicatesNacked = $),
      (l.logInboundMsgDuplicateReceiptsFailed = P));
  },
  98,
);
