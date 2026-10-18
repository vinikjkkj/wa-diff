__d(
  "WAWebVoipDevicePermissionDialogODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      e: {
        if (e === "start") {
          s(t);
          break e;
        }
        if (e === "unmute") {
          u(t);
          break e;
        }
        if (e === "camera") {
          c(t);
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
          r("WAWebODS").incr("web.call.permission_dialog.start.shown");
          break e;
        }
        if (e === "allowed") {
          r("WAWebODS").incr("web.call.permission_dialog.start.allowed");
          break e;
        }
        if (e === "dismissed") {
          r("WAWebODS").incr("web.call.permission_dialog.start.dismissed");
          break e;
        }
        if (e === "call_moved_on") {
          r("WAWebODS").incr("web.call.permission_dialog.start.call_moved_on");
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
        if (e === "shown") {
          r("WAWebODS").incr("web.call.permission_dialog.unmute.shown");
          break e;
        }
        if (e === "allowed") {
          r("WAWebODS").incr("web.call.permission_dialog.unmute.allowed");
          break e;
        }
        if (e === "dismissed") {
          r("WAWebODS").incr("web.call.permission_dialog.unmute.dismissed");
          break e;
        }
        if (e === "call_moved_on") {
          r("WAWebODS").incr("web.call.permission_dialog.unmute.call_moved_on");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function c(e) {
      e: {
        if (e === "shown") {
          r("WAWebODS").incr("web.call.permission_dialog.camera.shown");
          break e;
        }
        if (e === "allowed") {
          r("WAWebODS").incr("web.call.permission_dialog.camera.allowed");
          break e;
        }
        if (e === "dismissed") {
          r("WAWebODS").incr("web.call.permission_dialog.camera.dismissed");
          break e;
        }
        if (e === "call_moved_on") {
          r("WAWebODS").incr("web.call.permission_dialog.camera.call_moved_on");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function d() {
      r("WAWebODS").incr("web.call.permission_dialog.load_failed");
    }
    function m(e) {
      e: {
        if (e === "granted") {
          r("WAWebODS").incr("web.call.permission_button.granted");
          break e;
        }
        if (e === "prompt_dismissed") {
          r("WAWebODS").incr("web.call.permission_button.prompt_dismissed");
          break e;
        }
        if (e === "no_prompt") {
          r("WAWebODS").incr("web.call.permission_button.no_prompt");
          break e;
        }
        if (e === "covered") {
          r("WAWebODS").incr("web.call.permission_button.covered");
          break e;
        }
        if (e === "covered_at_open") {
          r("WAWebODS").incr("web.call.permission_button.covered_at_open");
          break e;
        }
        if (e === "covered_by_app") {
          r("WAWebODS").incr("web.call.permission_button.covered_by_app");
          break e;
        }
        if (e === "refused") {
          r("WAWebODS").incr("web.call.permission_button.refused");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.logCallPermissionDialog = e),
      (l.logCallPermissionDialogLoadFailed = d),
      (l.logCallPermissionButton = m));
  },
  98,
);
