__d(
  "WAWebPttMicrophonePermissionODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "blocked") {
          r("WAWebODS").incr("web.ptt.microphone_refused.blocked");
          break e;
        }
        if (e === "dismissed") {
          r("WAWebODS").incr("web.ptt.microphone_refused.dismissed");
          break e;
        }
        if (e === "system") {
          r("WAWebODS").incr("web.ptt.microphone_refused.system");
          break e;
        }
        if (e === "granted") {
          r("WAWebODS").incr("web.ptt.microphone_refused.granted");
          break e;
        }
        if (e === "unknown") {
          r("WAWebODS").incr("web.ptt.microphone_refused.unknown");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function s(e) {
      e: {
        if (e === "shown") {
          r("WAWebODS").incr("web.ptt.permission_dialog.shown");
          break e;
        }
        if (e === "allowed") {
          r("WAWebODS").incr("web.ptt.permission_dialog.allowed");
          break e;
        }
        if (e === "dismissed") {
          r("WAWebODS").incr("web.ptt.permission_dialog.dismissed");
          break e;
        }
        if (e === "cancelled") {
          r("WAWebODS").incr("web.ptt.permission_dialog.cancelled");
          break e;
        }
        if (e === "load_failed") {
          r("WAWebODS").incr("web.ptt.permission_dialog.load_failed");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function u(e) {
      e: {
        if (e === "granted") {
          r("WAWebODS").incr("web.ptt.permission_button.granted");
          break e;
        }
        if (e === "prompt_dismissed") {
          r("WAWebODS").incr("web.ptt.permission_button.prompt_dismissed");
          break e;
        }
        if (e === "no_prompt") {
          r("WAWebODS").incr("web.ptt.permission_button.no_prompt");
          break e;
        }
        if (e === "covered") {
          r("WAWebODS").incr("web.ptt.permission_button.covered");
          break e;
        }
        if (e === "covered_at_open") {
          r("WAWebODS").incr("web.ptt.permission_button.covered_at_open");
          break e;
        }
        if (e === "covered_by_app") {
          r("WAWebODS").incr("web.ptt.permission_button.covered_by_app");
          break e;
        }
        if (e === "refused") {
          r("WAWebODS").incr("web.ptt.permission_button.refused");
          break e;
        }
        if (e === "invalid_style") {
          r("WAWebODS").incr("web.ptt.permission_button.invalid_style");
          break e;
        }
        if (e === "clipped") {
          r("WAWebODS").incr("web.ptt.permission_button.clipped");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.logPttMicrophoneRefusal = e),
      (l.logPttMicrophonePermissionDialog = s),
      (l.logPttMicrophonePermissionButton = u));
  },
  98,
);
