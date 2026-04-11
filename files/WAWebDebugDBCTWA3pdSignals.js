__d(
  "WAWebDebugDBCTWA3pdSignals",
  ["WATimeUtils", "WAWebCsv3pdSignals", "WAWebDownloads3PDSignalsDatabaseApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {
        ctwa3pdConversionType: "order_created",
        ctwa3pdConversionSubtype: "new_order",
        ctwa3pdConversionMetadata: '{"paid":false}',
        clickId: "mock_data",
        timestamp: o("WATimeUtils").unixTimeMs(),
      };
      return o("WAWebDownloads3PDSignalsDatabaseApi").addOrEdit3PDSignal(
        e != null ? e : t,
      );
    }
    e.doc = "Add 3pd signal row to DB";
    function s() {
      return o("WAWebDownloads3PDSignalsDatabaseApi").getAll3PDSignals();
    }
    s.doc = "Get all 3pd signal rows from DB";
    function u() {
      return o("WAWebDownloads3PDSignalsDatabaseApi").getRecent3PDSignals();
    }
    u.doc = "Get last 30 days 3pd signal rows from DB";
    function c() {
      return o("WAWebDownloads3PDSignalsDatabaseApi").cleanup3PDSignalsTable();
    }
    c.doc = "Cleanup older than 30 days of 3pd signal rows from DB";
    function d() {
      return o("WAWebCsv3pdSignals").generateCsvDataFor3pdSignals();
    }
    d.doc = "Generate CSV data for 3pd signals";
    function m() {
      return o("WAWebCsv3pdSignals").downloadCsvFor3pdSignals();
    }
    m.doc = "Download CSV for 3pd signals";
    var p = {
      add3PDSignalToDB: e,
      bulkGetAll3PDSignalsFromDB: s,
      getLast30Days3PDSignalsFromDB: u,
      cleanupOlderThan30Days3PDSignalsFromDB: c,
      generateCsvDataFor3pdSignalsDebug: d,
      downloadCsvFor3pdSignalsDebug: m,
    };
    l.default = p;
  },
  98,
);
