__d(
  "WAWebVoipVideoEffectsODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "turned_on") {
          r("WAWebODS").incr("web.call.video_effects.turned_on");
          break e;
        }
        if (e === "turned_off") {
          r("WAWebODS").incr("web.call.video_effects.turned_off");
          break e;
        }
        if (e === "turned_back_on") {
          r("WAWebODS").incr("web.call.video_effects.turned_back_on");
          break e;
        }
        if (e === "restored") {
          r("WAWebODS").incr("web.call.video_effects.restored");
          break e;
        }
        if (e === "worker_start") {
          r("WAWebODS").incr("web.call.video_effects.worker_start");
          break e;
        }
        if (e === "worker_ready") {
          r("WAWebODS").incr("web.call.video_effects.worker_ready");
          break e;
        }
        if (e === "worker_init_failed_unsupported") {
          r("WAWebODS").incr(
            "web.call.video_effects.worker_init_failed.unsupported",
          );
          break e;
        }
        if (e === "worker_init_failed_software_gpu") {
          r("WAWebODS").incr(
            "web.call.video_effects.worker_init_failed.software_gpu",
          );
          break e;
        }
        if (e === "worker_init_failed_too_slow") {
          r("WAWebODS").incr(
            "web.call.video_effects.worker_init_failed.too_slow",
          );
          break e;
        }
        if (e === "worker_init_failed_error") {
          r("WAWebODS").incr("web.call.video_effects.worker_init_failed.error");
          break e;
        }
        if (e === "worker_idle_stop") {
          r("WAWebODS").incr("web.call.video_effects.worker_idle_stop");
          break e;
        }
        if (e === "stopped_start_timeout") {
          r("WAWebODS").incr("web.call.video_effects.stopped.start_timeout");
          break e;
        }
        if (e === "stopped_start_error") {
          r("WAWebODS").incr("web.call.video_effects.stopped.start_error");
          break e;
        }
        if (e === "stopped_start_failed") {
          r("WAWebODS").incr("web.call.video_effects.stopped.start_failed");
          break e;
        }
        if (e === "stopped_failed") {
          r("WAWebODS").incr("web.call.video_effects.stopped.failed");
          break e;
        }
        if (e === "stopped_overloaded") {
          r("WAWebODS").incr("web.call.video_effects.stopped.overloaded");
          break e;
        }
        if (e === "stopped_too_slow") {
          r("WAWebODS").incr("web.call.video_effects.stopped.too_slow");
          break e;
        }
        if (e === "custom_background_added") {
          r("WAWebODS").incr("web.call.video_effects.custom_background.added");
          break e;
        }
        if (e === "custom_background_not_kept") {
          r("WAWebODS").incr(
            "web.call.video_effects.custom_background.not_kept",
          );
          break e;
        }
        if (e === "custom_background_not_removed") {
          r("WAWebODS").incr(
            "web.call.video_effects.custom_background.not_removed",
          );
          break e;
        }
        if (e === "custom_background_rejected_not_a_picture") {
          r("WAWebODS").incr(
            "web.call.video_effects.custom_background.rejected.not_a_picture",
          );
          break e;
        }
        if (e === "custom_background_rejected_too_large") {
          r("WAWebODS").incr(
            "web.call.video_effects.custom_background.rejected.too_large",
          );
          break e;
        }
        if (e === "custom_background_rejected_unreadable") {
          r("WAWebODS").incr(
            "web.call.video_effects.custom_background.rejected.unreadable",
          );
          break e;
        }
        if (e === "custom_background_removed") {
          r("WAWebODS").incr(
            "web.call.video_effects.custom_background.removed",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    l.logVideoEffects = e;
  },
  98,
);
