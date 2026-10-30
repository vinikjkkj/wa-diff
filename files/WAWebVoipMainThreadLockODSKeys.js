__d(
  "WAWebVoipMainThreadLockODSKeys",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      e: {
        if (t === "test") {
          v(e);
          break e;
        }
        if (t === "control") {
          S(e);
          break e;
        }
        if (t === "none") {
          R(e);
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
          L(e);
          break e;
        }
        if (t === "control") {
          E(e);
          break e;
        }
        if (t === "none") {
          k(e);
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
      var n = I(e);
      e: {
        if (t === "test") {
          T(n);
          break e;
        }
        if (t === "control") {
          D(n);
          break e;
        }
        if (t === "none") {
          x(n);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function d(e, t, n) {
      var r = I(e);
      t === "done" ? $(r, n) : P(r, n);
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
          B(e, n);
          break e;
        }
        if (t === "5s") {
          W(e, n);
          break e;
        }
        if (t === "15s") {
          q(e, n);
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
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function f(e, t, n) {
      t >= 15e3
        ? p(e, "15s", n)
        : t >= 5e3
          ? p(e, "5s", n)
          : t >= 1e3 && p(e, "1s", n);
    }
    function g(e) {
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
    function h() {
      r("WAWebODS").incr(
        "web.call.voip.main_lock.jsworker_create.prewarm_deferred",
      );
    }
    function y(e, t) {
      e: {
        if (e === "playback_stop") {
          Y(t);
          break e;
        }
        if (e === "capture_stop") {
          J(t);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function C(e) {
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
    function b() {
      r("WAWebODS").flush();
    }
    function v(e) {
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
    function S(e) {
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
    function R(e) {
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
    function L(e) {
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
    function E(e) {
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
    function k(e) {
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
    function I(e) {
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
    function T(e) {
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
    function D(e) {
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
    function x(e) {
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
    function $(e, t) {
      e: {
        if (t === "test") {
          N(e);
          break e;
        }
        if (t === "control") {
          M(e);
          break e;
        }
        if (t === "none") {
          w(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function P(e, t) {
      e: {
        if (t === "test") {
          A(e);
          break e;
        }
        if (t === "control") {
          F(e);
          break e;
        }
        if (t === "none") {
          O(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function N(e) {
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
    function M(e) {
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
    function w(e) {
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
    function A(e) {
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
    function F(e) {
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
    function O(e) {
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
    function B(e, t) {
      e: {
        if (t === "test") {
          U(e);
          break e;
        }
        if (t === "control") {
          V(e);
          break e;
        }
        if (t === "none") {
          H(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function W(e, t) {
      e: {
        if (t === "test") {
          G(e);
          break e;
        }
        if (t === "control") {
          z(e);
          break e;
        }
        if (t === "none") {
          j(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function q(e, t) {
      e: {
        if (t === "test") {
          K(e);
          break e;
        }
        if (t === "control") {
          Q(e);
          break e;
        }
        if (t === "none") {
          X(e);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function U(e) {
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
    function V(e) {
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
    function H(e) {
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
    function G(e) {
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
    function z(e) {
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
    function j(e) {
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
    function K(e) {
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
    function Q(e) {
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
    function X(e) {
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
    function Y(e) {
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
    function J(e) {
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
      (l.logMainThreadLockCallDuration = f),
      (l.logMainThreadLockRecoveryPrecheck = g),
      (l.logMainThreadLockPrewarmDeferred = h),
      (l.logMainThreadLockAudioStopEvent = y),
      (l.logMainThreadLockRingEvent = C),
      (l.flushMainThreadLockCounts = b));
  },
  98,
);
