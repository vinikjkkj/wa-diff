__d(
  "WAWebWindowsMediaFilesMetrics",
  ["WAWebODS", "WAWebWindowsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebWindowsGatingUtils").isOpenWithSharedBufferEnabled();
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
    function s(t) {
      e: {
        var n = e(t);
        if (n === "download_sb_on") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.download.sb_on.attempt",
          );
          break e;
        }
        if (n === "download_sb_off") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.download.sb_off.attempt",
          );
          break e;
        }
        if (n === "open_with_sb_on") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.open_with.sb_on.attempt",
          );
          break e;
        }
        if (n === "open_with_sb_off") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.open_with.sb_off.attempt",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
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
    function m(t) {
      e: {
        var n = e(t);
        if (n === "download_sb_on") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.download.sb_on.success",
          );
          break e;
        }
        if (n === "download_sb_off") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.download.sb_off.success",
          );
          break e;
        }
        if (n === "open_with_sb_on") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.open_with.sb_on.success",
          );
          break e;
        }
        if (n === "open_with_sb_off") {
          r("WAWebODS").incr(
            "web.hybrid.bridge.media_files.open_with.sb_off.success",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    ((l.incrMediaActionAttempt = s),
      (l.incrSaveAsFsaAttempt = u),
      (l.incrSaveAsFsaSuccess = c),
      (l.incrSaveAsLegacyAttempt = d),
      (l.incrMediaActionSuccess = m));
  },
  98,
);
