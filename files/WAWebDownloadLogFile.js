__d(
  "WAWebDownloadLogFile",
  [
    "JSResourceForInteraction",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e6,
      s = 10 * e;
    function u() {
      return new Date().toISOString().replace(/:/g, "-");
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Blob([e], { type: "text/plain" });
          if (n.size <= s)
            return o("WAWebFileSaver").FileSaver.downloadData(
              n,
              t,
              o("WAWebFileSaverTypes").AllowedFileExtensions.TXT,
            );
          var r = yield m();
          r.push(e, !0);
          var a = new Blob([r.result()], { type: "application/zip" });
          return o("WAWebFileSaver").FileSaver.downloadData(
            a,
            t + ".txt",
            o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = {});
          var t = yield r("JSResourceForInteraction")("WAGzip")
            .__setRef("WAWebDownloadLogFile")
            .load();
          return t.createDeflate(e);
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getLogFileTimestamp = u), (l.downloadLogFile = c));
  },
  98,
);
