__d(
  "WAWebWindowsMediaFilesMetrics",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e === "download"
        ? t
          ? "download_sb_on"
          : "download_sb_off"
        : e === "open_with"
          ? t
            ? "open_with_sb_on"
            : "open_with_sb_off"
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function s(t, n) {
      e: {
        var o = e(t, n);
        if (o === "download_sb_on") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.download.sb_on.attempt",
          );
          break e;
        }
        if (o === "download_sb_off") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.download.sb_off.attempt",
          );
          break e;
        }
        if (o === "open_with_sb_on") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.open_with.sb_on.attempt",
          );
          break e;
        }
        if (o === "open_with_sb_off") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.open_with.sb_off.attempt",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            o,
        );
      }
    }
    function u() {
      r("WAWebODS").incr("web.hybrid.bridge.media_files.save_as.fsa.attempt");
    }
    function c() {
      r("WAWebODS").incr("web.hybrid.bridge.media_files.save_as.fsa.success");
    }
    function d() {
      r("WAWebODS").incr(
        "web.hybrid.bridge.media_files.save_as.legacy.attempt",
      );
    }
    function m() {
      r("WAWebODS").incr(
        "web.hybrid.bridge.media_files.save_as.shared_buffer.attempt",
      );
    }
    function p() {
      r("WAWebODS").incr(
        "web.hybrid.bridge.media_files.save_as.shared_buffer.success",
      );
    }
    function _() {
      r("WAWebODS").incr(
        "web.hybrid.bridge.media_files.save_as.shared_buffer.unsupported",
      );
    }
    function f() {
      r("WAWebODS").incr(
        "web.hybrid.bridge.media_files.save_as.shared_buffer.fallback",
      );
    }
    function g(t, n) {
      e: {
        var o = e(t, n);
        if (o === "download_sb_on") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.download.sb_on.success",
          );
          break e;
        }
        if (o === "download_sb_off") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.download.sb_off.success",
          );
          break e;
        }
        if (o === "open_with_sb_on") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.open_with.sb_on.success",
          );
          break e;
        }
        if (o === "open_with_sb_off") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.open_with.sb_off.success",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            o,
        );
      }
    }
    ((l.incrMediaActionAttempt = s),
      (l.incrSaveAsFsaAttempt = u),
      (l.incrSaveAsFsaSuccess = c),
      (l.incrSaveAsLegacyAttempt = d),
      (l.incrSaveAsSharedBufferAttempt = m),
      (l.incrSaveAsSharedBufferSuccess = p),
      (l.incrSaveAsSharedBufferUnsupported = _),
      (l.incrSaveAsSharedBufferFallback = f),
      (l.incrMediaActionSuccess = g));
  },
  98,
);
