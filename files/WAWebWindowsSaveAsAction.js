__d(
  "WAWebWindowsSaveAsAction",
  [
    "WAAbortError",
    "WALogger",
    "WAWebFileSaver",
    "WAWebWindowsFsaFileSaver",
    "WAWebWindowsGatingUtils",
    "WAWebWindowsMediaFilesHelpers",
    "WAWebWindowsMediaFilesMetrics",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebWindowsGatingUtils").isSaveAsSharedBufferEnabled()
        ? (o("WAWebWindowsMediaFilesMetrics").incrSaveAsSharedBufferAttempt(),
          u(e),
          !0)
        : o("WAWebWindowsFsaFileSaver").trySaveAs(e);
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          try {
            n = yield o("WAWebWindowsMediaFilesHelpers").saveAsMediaFile(t);
          } catch (n) {
            var a = r("getErrorSafe")(n);
            if (a.name === o("WAAbortError").ABORT_ERROR) return;
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[save-as-shared-buffer] Failed to save msg ",
                    "",
                  ])),
                t.id.toString(),
              )
              .catching(a)
              .sendLogs("save-as-shared-buffer-failed"),
              d(t));
            return;
          }
          e: {
            if (n === "saved") {
              o(
                "WAWebWindowsMediaFilesMetrics",
              ).incrSaveAsSharedBufferSuccess();
              break e;
            }
            if (n === "cancelled") return;
            if (n === "unsupported") {
              (o(
                "WAWebWindowsMediaFilesMetrics",
              ).incrSaveAsSharedBufferUnsupported(),
                d(t));
              break e;
            }
            if (n === "failed") {
              d(t);
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      (o("WAWebWindowsMediaFilesMetrics").incrSaveAsSharedBufferFallback(),
        o("WAWebWindowsFsaFileSaver").trySaveAs(e) ||
          o("WAWebFileSaver").FileSaver.initDownload(e));
    }
    l.trySaveAs = s;
  },
  98,
);
