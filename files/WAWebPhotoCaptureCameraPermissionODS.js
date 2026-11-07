__d(
  "WAWebPhotoCaptureCameraPermissionODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      e: {
        if (e === "attach_menu") {
          c(t);
          break e;
        }
        if (e === "take_photo") {
          d(t);
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
          r("WAWebODS").incr("web.photo_capture.permission_dialog.shown");
          break e;
        }
        if (e === "allowed") {
          r("WAWebODS").incr("web.photo_capture.permission_dialog.allowed");
          break e;
        }
        if (e === "dismissed") {
          r("WAWebODS").incr("web.photo_capture.permission_dialog.dismissed");
          break e;
        }
        if (e === "cancelled") {
          r("WAWebODS").incr("web.photo_capture.permission_dialog.cancelled");
          break e;
        }
        if (e === "load_failed") {
          r("WAWebODS").incr("web.photo_capture.permission_dialog.load_failed");
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
          r("WAWebODS").incr("web.photo_capture.permission_button.granted");
          break e;
        }
        if (e === "prompt_dismissed") {
          r("WAWebODS").incr(
            "web.photo_capture.permission_button.prompt_dismissed",
          );
          break e;
        }
        if (e === "no_prompt") {
          r("WAWebODS").incr("web.photo_capture.permission_button.no_prompt");
          break e;
        }
        if (e === "covered") {
          r("WAWebODS").incr("web.photo_capture.permission_button.covered");
          break e;
        }
        if (e === "covered_at_open") {
          r("WAWebODS").incr(
            "web.photo_capture.permission_button.covered_at_open",
          );
          break e;
        }
        if (e === "covered_by_app") {
          r("WAWebODS").incr(
            "web.photo_capture.permission_button.covered_by_app",
          );
          break e;
        }
        if (e === "refused") {
          r("WAWebODS").incr("web.photo_capture.permission_button.refused");
          break e;
        }
        if (e === "invalid_style") {
          r("WAWebODS").incr(
            "web.photo_capture.permission_button.invalid_style",
          );
          break e;
        }
        if (e === "clipped") {
          r("WAWebODS").incr("web.photo_capture.permission_button.clipped");
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
        if (e === "blocked") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.attach_menu.blocked",
          );
          break e;
        }
        if (e === "dismissed") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.attach_menu.dismissed",
          );
          break e;
        }
        if (e === "system") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.attach_menu.system",
          );
          break e;
        }
        if (e === "granted") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.attach_menu.granted",
          );
          break e;
        }
        if (e === "unknown") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.attach_menu.unknown",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function d(e) {
      e: {
        if (e === "blocked") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.take_photo.blocked",
          );
          break e;
        }
        if (e === "dismissed") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.take_photo.dismissed",
          );
          break e;
        }
        if (e === "system") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.take_photo.system",
          );
          break e;
        }
        if (e === "granted") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.take_photo.granted",
          );
          break e;
        }
        if (e === "unknown") {
          r("WAWebODS").incr(
            "web.photo_capture.camera_refused.take_photo.unknown",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.logPhotoCaptureCameraRefusal = e),
      (l.logPhotoCaptureCameraPermissionDialog = s),
      (l.logPhotoCaptureCameraPermissionButton = u));
  },
  98,
);
