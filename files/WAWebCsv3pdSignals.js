__d(
  "WAWebCsv3pdSignals",
  [
    "WAWeb-moment",
    "WAWebDownloads3PDSignalsDatabaseApi",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await o(
          "WAWebDownloads3PDSignalsDatabaseApi",
        ).getRecent3PDSignals(),
        t = function (t) {
          var e = t.replace(/\"/g, '""');
          return '"' + e + '"';
        },
        n = "timestamp,clickId,event,metadata";
      if (e.length === 0) return n;
      var r = [];
      (r.push(n),
        e.forEach(function (e) {
          var n = e.timestamp ? new Date(e.timestamp).toISOString() : "",
            o = [
              n,
              String(e.clickId),
              String(e.ctwa3pdConversionSubtype),
              t(e.ctwa3pdConversionMetadata),
            ].join(",");
          r.push(o);
        }));
      var a = r.join(`
`);
      return a;
    }
    async function s() {
      var t = await e(),
        n = new Blob([t], { type: "text/csv" }),
        a = r("WAWeb-moment")().format("YYYYMMDD-HHMMSS"),
        i = "CustomerRelatedActivities_DataReport_" + a;
      return o("WAWebFileSaver").FileSaver.downloadData(
        n,
        i,
        o("WAWebFileSaverTypes").AllowedFileExtensions.CSV,
      );
    }
    ((l.generateCsvDataFor3pdSignals = e), (l.downloadCsvFor3pdSignals = s));
  },
  98,
);
