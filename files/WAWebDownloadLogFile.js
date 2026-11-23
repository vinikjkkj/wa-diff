__d(
  "WAWebDownloadLogFile",
  ["JSResourceForInteraction", "WAWebFileSaver", "WAWebFileSaverTypes"],
  function (t, n, r, o, a, i, l) {
    var e = 1e6,
      s = 10 * e;
    function u() {
      return new Date().toISOString().replace(/:/g, "-");
    }
    async function c(e, t) {
      var n = new Blob([e], { type: "text/plain" });
      if (n.size <= s)
        return o("WAWebFileSaver").FileSaver.downloadData(
          n,
          t,
          o("WAWebFileSaverTypes").AllowedFileExtensions.TXT,
        );
      var r = await d();
      r.push(e, !0);
      var a = new Blob([r.result()], { type: "application/zip" });
      return o("WAWebFileSaver").FileSaver.downloadData(
        a,
        t + ".txt",
        o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
      );
    }
    async function d(e) {
      e === void 0 && (e = {});
      var t = await r("JSResourceForInteraction")("WAGzip")
        .__setRef("WAWebDownloadLogFile")
        .load();
      return t.createDeflate(e);
    }
    ((l.getLogFileTimestamp = u), (l.downloadLogFile = c));
  },
  98,
);
