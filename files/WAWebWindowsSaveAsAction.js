__d(
  "WAWebWindowsSaveAsAction",
  [
    "WAAbortError",
    "WALogger",
    "WAWebDualUploadsPreferredMsg",
    "WAWebFileSaver",
    "WAWebWindowsFsaFileSaver",
    "WAWebWindowsGatingUtils",
    "WAWebWindowsMediaFilesHelpers",
    "WAWebWindowsMediaFilesMetrics",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e);
      return o("WAWebWindowsGatingUtils").isSaveAsSharedBufferEnabled()
        ? (o("WAWebWindowsMediaFilesMetrics").incrSaveAsSharedBufferAttempt(),
          u(t),
          !0)
        : o("WAWebWindowsFsaFileSaver").trySaveAs(t);
    }
    async function u(t) {
      var n;
      try {
        n = await o("WAWebWindowsMediaFilesHelpers").saveAsMediaFile(t);
      } catch (n) {
        var a = r("getErrorSafe")(n);
        if (a.name === o("WAAbortError").ABORT_ERROR) return;
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[save-as-shared-buffer] Failed to cache media before Save As for msg ",
                "",
              ])),
            t.id.toString(),
          )
          .catching(a)
          .sendLogs("save-as-shared-buffer-failed"),
          c(t));
        return;
      }
      e: {
        if (n === "saved") {
          o("WAWebWindowsMediaFilesMetrics").incrSaveAsSharedBufferSuccess();
          break e;
        }
        if (n === "cancelled") return;
        if (n === "unsupported") {
          (o(
            "WAWebWindowsMediaFilesMetrics",
          ).incrSaveAsSharedBufferUnsupported(),
            c(t));
          break e;
        }
        if (n === "failed") {
          c(t);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function c(e) {
      (o("WAWebWindowsMediaFilesMetrics").incrSaveAsSharedBufferFallback(),
        o("WAWebWindowsFsaFileSaver").trySaveAs(e) ||
          o("WAWebFileSaver").FileSaver.initDownload(e));
    }
    l.trySaveAs = s;
  },
  98,
);
