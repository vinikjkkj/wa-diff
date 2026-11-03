__d(
  "WAWebVoipMainThreadLockODSKeys",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      e: {
        if (t === "test") {
          R(e);
          break e;
        }
        if (t === "control") {
          L(e);
          break e;
        }
        if (t === "none") {
          E(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function s(e, t) {
      e: {
        if (t === "test") {
          k(e);
          break e;
        }
        if (t === "control") {
          I(e);
          break e;
        }
        if (t === "none") {
          T(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function u(e) {
      e: {
        if (e === "test") {
          r("WAWebODS").incr("web.call.voip.main_lock.freeze_found_any.test");
          break e;
        }
        if (e === "control") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.freeze_found_any.control",
          );
          break e;
        }
        if (e === "none") {
          r("WAWebODS").incr("web.call.voip.main_lock.freeze_found_any.none");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function c(e, t) {
      var n = D(e);
      e: {
        if (t === "test") {
          x(n);
          break e;
        }
        if (t === "control") {
          $(n);
          break e;
        }
        if (t === "none") {
          P(n);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function d(e, t, n) {
      var r = D(e);
      t === "done" ? N(r, n) : M(r, n);
    }
    function m(e) {
      e: {
        if (e === "test") {
          r("WAWebODS").incr("web.call.voip.main_lock.boot.test");
          break e;
        }
        if (e === "control") {
          r("WAWebODS").incr("web.call.voip.main_lock.boot.control");
          break e;
        }
        if (e === "none") {
          r("WAWebODS").incr("web.call.voip.main_lock.boot.none");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function p(e, t, n) {
      e: {
        if (t === "1s") {
          q(e, n);
          break e;
        }
        if (t === "5s") {
          U(e, n);
          break e;
        }
        if (t === "15s") {
          V(e, n);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function _(e) {
      e: {
        if (e === "slow_5s") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_slow_5s",
          );
          break e;
        }
        if (e === "timeout") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_timeout",
          );
          break e;
        }
        if (e === "pending_exit") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_pending_exit",
          );
          break e;
        }
        if (e === "pending_death") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_pending_death",
          );
          break e;
        }
        if (e === "no_worker") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_no_worker",
          );
          break e;
        }
        if (e === "marked_unresponsive") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_marked_unresponsive",
          );
          break e;
        }
        if (e === "late_reply") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_late_reply",
          );
          break e;
        }
        if (e === "no_reply") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_no_reply",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function f(e) {
      e: {
        if (e === "timeout_not_sent") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_timeout_not_sent",
          );
          break e;
        }
        if (e === "timeout_overlapped") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_timeout_overlapped",
          );
          break e;
        }
        if (e === "timeout_rpcs_behind") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_timeout_rpcs_behind",
          );
          break e;
        }
        if (e === "timeout_offer_behind") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_timeout_offer_behind",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function g(e) {
      e: {
        if (e === "timeout_in_native") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_timeout_in_native",
          );
          break e;
        }
        if (e === "timeout_in_queue") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_timeout_in_queue",
          );
          break e;
        }
        if (e === "timeout_start_unknown") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_timeout_start_unknown",
          );
          break e;
        }
        if (e === "no_reply_in_native") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_no_reply_in_native",
          );
          break e;
        }
        if (e === "no_reply_in_queue") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_no_reply_in_queue",
          );
          break e;
        }
        if (e === "no_reply_start_unknown") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_no_reply_start_unknown",
          );
          break e;
        }
        if (e === "start_unreported") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.offload_start_unreported",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function h(e, t, n) {
      t >= 15e3
        ? p(e, "15s", n)
        : t >= 5e3
          ? p(e, "5s", n)
          : t >= 1e3 && p(e, "1s", n);
    }
    function y(e) {
      e: {
        if (e === "no_file") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.precheck_no_file",
          );
          break e;
        }
        if (e === "failed") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.precheck_failed",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function C() {
      r("WAWebODS").incr(
        "web.call.voip.main_lock.jsworker_create.prewarm_deferred",
      );
    }
    function b(e, t) {
      e: {
        if (e === "playback_stop") {
          Z(t);
          break e;
        }
        if (e === "capture_stop") {
          ee(t);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function v(e) {
      e: {
        if (e === "quarantined") {
          r("WAWebODS").incr("web.call.voip.main_lock.ring.quarantined");
          break e;
        }
        if (e === "released") {
          r("WAWebODS").incr("web.call.voip.main_lock.ring.released");
          break e;
        }
        if (e === "leaked") {
          r("WAWebODS").incr("web.call.voip.main_lock.ring.leaked");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function S() {
      r("WAWebODS").flush();
    }
    function R(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr("web.call.voip.main_lock.fs_cleanup.reached.test");
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.reached.test",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.reached.test",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.test",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.reached.test",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.reached.test",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.reached.test",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.reached.test",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.reached.test",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function L(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.reached.control",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.reached.control",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.reached.control",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.control",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.reached.control",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.reached.control",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.reached.control",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.reached.control",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.reached.control",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function E(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr("web.call.voip.main_lock.fs_cleanup.reached.none");
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.reached.none",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.reached.none",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.none",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.reached.none",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.reached.none",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.reached.none",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.reached.none",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.reached.none",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function k(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.freeze_found.test",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.freeze_found.test",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.freeze_found.test",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.test",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.freeze_found.test",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.freeze_found.test",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.freeze_found.test",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.freeze_found.test",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.freeze_found.test",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function I(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.freeze_found.control",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.freeze_found.control",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.freeze_found.control",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.control",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.freeze_found.control",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.freeze_found.control",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.freeze_found.control",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.freeze_found.control",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.freeze_found.control",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function T(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.freeze_found.none",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.freeze_found.none",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.freeze_found.none",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.none",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.freeze_found.none",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.freeze_found.none",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.freeze_found.none",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.freeze_found.none",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.freeze_found.none",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function D(e) {
      return e === "rpc_bootstrap"
        ? "rpc_bootstrap"
        : e === "wt_prewarm"
          ? "wt_prewarm"
          : e === "wt_connect"
            ? "wt_connect"
            : e === "video_capture"
              ? "video_capture"
              : "other";
    }
    function x(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.rpc_bootstrap.test",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.wt_prewarm.test",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.wt_connect.test",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.video_capture.test",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.other.test",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function $(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.rpc_bootstrap.control",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.wt_prewarm.control",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.wt_connect.control",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.video_capture.control",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.other.control",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function P(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.rpc_bootstrap.none",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.wt_prewarm.none",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.wt_connect.none",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.video_capture.none",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.reached.other.none",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function N(e, t) {
      e: {
        if (t === "test") {
          w(e);
          break e;
        }
        if (t === "control") {
          A(e);
          break e;
        }
        if (t === "none") {
          F(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function M(e, t) {
      e: {
        if (t === "test") {
          O(e);
          break e;
        }
        if (t === "control") {
          B(e);
          break e;
        }
        if (t === "none") {
          W(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function w(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.rpc_bootstrap_after_init.test",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_prewarm_after_init.test",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_connect_after_init.test",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.video_capture_after_init.test",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.other_after_init.test",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function A(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.rpc_bootstrap_after_init.control",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_prewarm_after_init.control",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_connect_after_init.control",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.video_capture_after_init.control",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.other_after_init.control",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function F(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.rpc_bootstrap_after_init.none",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_prewarm_after_init.none",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_connect_after_init.none",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.video_capture_after_init.none",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.other_after_init.none",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function O(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.rpc_bootstrap_before_init.test",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_prewarm_before_init.test",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_connect_before_init.test",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.video_capture_before_init.test",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.other_before_init.test",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function B(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.rpc_bootstrap_before_init.control",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_prewarm_before_init.control",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_connect_before_init.control",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.video_capture_before_init.control",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.other_before_init.control",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function W(e) {
      e: {
        if (e === "rpc_bootstrap") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.rpc_bootstrap_before_init.none",
          );
          break e;
        }
        if (e === "wt_prewarm") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_prewarm_before_init.none",
          );
          break e;
        }
        if (e === "wt_connect") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.wt_connect_before_init.none",
          );
          break e;
        }
        if (e === "video_capture") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.video_capture_before_init.none",
          );
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.freeze_found.other_before_init.none",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function q(e, t) {
      e: {
        if (t === "test") {
          H(e);
          break e;
        }
        if (t === "control") {
          G(e);
          break e;
        }
        if (t === "none") {
          z(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function U(e, t) {
      e: {
        if (t === "test") {
          j(e);
          break e;
        }
        if (t === "control") {
          K(e);
          break e;
        }
        if (t === "none") {
          Q(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function V(e, t) {
      e: {
        if (t === "test") {
          X(e);
          break e;
        }
        if (t === "control") {
          Y(e);
          break e;
        }
        if (t === "none") {
          J(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function H(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_1s.test",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_1s.test",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_1s.test",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_1s.test",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_1s.test",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_1s.test",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_1s.test",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_1s.test",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_1s.test",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function G(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_1s.control",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_1s.control",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_1s.control",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_1s.control",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_1s.control",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_1s.control",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_1s.control",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_1s.control",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_1s.control",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function z(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_1s.none",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_1s.none",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_1s.none",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_1s.none",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_1s.none",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_1s.none",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_1s.none",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_1s.none",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_1s.none",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function j(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_5s.test",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_5s.test",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_5s.test",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_5s.test",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_5s.test",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_5s.test",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_5s.test",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_5s.test",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_5s.test",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function K(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_5s.control",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_5s.control",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_5s.control",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_5s.control",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_5s.control",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_5s.control",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_5s.control",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_5s.control",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_5s.control",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function Q(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_5s.none",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_5s.none",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_5s.none",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_5s.none",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_5s.none",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_5s.none",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_5s.none",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_5s.none",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_5s.none",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function X(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_15s.test",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_15s.test",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_15s.test",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_15s.test",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_15s.test",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_15s.test",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_15s.test",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_15s.test",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_15s.test",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function Y(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_15s.control",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_15s.control",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_15s.control",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_15s.control",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_15s.control",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_15s.control",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_15s.control",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_15s.control",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_15s.control",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function J(e) {
      e: {
        if (e === "fs_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_cleanup.slow_main_15s.none",
          );
          break e;
        }
        if (e === "fs_recovery_read") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_read.slow_main_15s.none",
          );
          break e;
        }
        if (e === "fs_recovery_cleanup") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.fs_recovery_cleanup.slow_main_15s.none",
          );
          break e;
        }
        if (e === "jsworker_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.jsworker_create.slow_main_15s.none",
          );
          break e;
        }
        if (e === "sctp_thread_create") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.sctp_thread_create.slow_main_15s.none",
          );
          break e;
        }
        if (e === "playback_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.slow_main_15s.none",
          );
          break e;
        }
        if (e === "capture_stop") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.slow_main_15s.none",
          );
          break e;
        }
        if (e === "playback_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_start.slow_main_15s.none",
          );
          break e;
        }
        if (e === "capture_start") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_start.slow_main_15s.none",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function Z(e) {
      e: {
        if (e === "skipped_native_stopped") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.skipped_native_stopped",
          );
          break e;
        }
        if (e === "skipped_no_owner") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.skipped_no_owner",
          );
          break e;
        }
        if (e === "native_still_running") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.playback_stop.native_still_running",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function ee(e) {
      e: {
        if (e === "skipped_native_stopped") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.skipped_native_stopped",
          );
          break e;
        }
        if (e === "skipped_no_owner") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.skipped_no_owner",
          );
          break e;
        }
        if (e === "native_still_running") {
          r("WAWebODS").incr(
            "web.call.voip.main_lock.capture_stop.native_still_running",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.logMainThreadLockReached = e),
      (l.logMainThreadLockFreezeFound = s),
      (l.logMainThreadLockFreezeFoundAny = u),
      (l.logMainThreadLockJsWorkerReached = c),
      (l.logMainThreadLockJsWorkerFreezeFound = d),
      (l.logMainThreadLockBoot = m),
      (l.logMainThreadLockSlowMainCall = p),
      (l.logMainThreadLockOffloadEvent = _),
      (l.logMainThreadLockOffloadQueueEvent = f),
      (l.logMainThreadLockOffloadStartEvent = g),
      (l.logMainThreadLockCallDuration = h),
      (l.logMainThreadLockRecoveryPrecheck = y),
      (l.logMainThreadLockPrewarmDeferred = C),
      (l.logMainThreadLockAudioStopEvent = b),
      (l.logMainThreadLockRingEvent = v),
      (l.flushMainThreadLockCounts = S));
  },
  98,
);
