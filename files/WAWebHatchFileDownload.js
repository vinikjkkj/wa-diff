__d(
  "WAWebHatchFileDownload",
  [
    "WALogger",
    "WAWebFileSaver",
    "WAWebHatchFileOpenPolicy",
    "WAWebHatchSpaceImageLoader",
    "WAWebHatchVmTransport",
    "WAWebHatchWorkspaceMedia",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 16777216,
      u = 6e4,
      c = "application/octet-stream";
    async function d(t) {
      var n = t.action,
        r = t.file,
        a = t.pinnedChannel,
        i = o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_RAW(r.itemKey);
      return i == null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-file-download: unconfined path",
                ])),
            )
            .sendLogs("hatch-file-download-unconfined-path"),
          "failed")
        : o("WAWebHatchWorkspaceMedia").holdHatchWorkspaceMediaChannel(
            a,
            function (e) {
              return m(r, n, i, e);
            },
          );
    }
    async function m(e, t, n, r) {
      if (!r()) return "stale";
      var a = await o("WAWebHatchSpaceImageLoader").loadHatchFile(
        n,
        t.scanMimetype,
        { isHeld: r, maxBytes: s, timeoutMs: u },
      );
      return r()
        ? a.kind === "failed"
          ? a.reason === "responseTooLarge"
            ? "tooLarge"
            : "failed"
          : (await o("WAWebFileSaver").FileSaver.downloadData(
              new Blob([a.bytes], { type: c }),
              o("WAWebHatchFileOpenPolicy").hatchFileDownloadName(
                e.displayName,
                t.extension,
              ),
              t.extension,
            ),
            "saved")
        : "stale";
    }
    l.downloadHatchFile = d;
  },
  98,
);
