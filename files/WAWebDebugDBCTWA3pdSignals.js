__d(
  "WAWebDebugDBCTWA3pdSignals",
  [
    "WATimeUtils",
    "WAWebCsv3pdSignals",
    "WAWebDownloads3PDSignalsDatabaseApi",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      r("vulture")("3SENpSwHi-VyTLxFcj1UO_6frPw=");
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
      return (
        r("vulture")("AB0SSuoOKo9tAYqnu658PSVSxco="),
        o("WAWebDownloads3PDSignalsDatabaseApi").getRecent3PDSignals()
      );
    }
    s.doc = "Get last 30 days 3pd signal rows from DB";
    function u() {
      return (
        r("vulture")("LRm4xmSA5Zg7Dqvfj9ALTSX1KN0="),
        o("WAWebDownloads3PDSignalsDatabaseApi").cleanup3PDSignalsTable()
      );
    }
    u.doc = "Cleanup older than 30 days of 3pd signal rows from DB";
    function c() {
      return (
        r("vulture")("XSKzgPnErEm58slpBEsTyMcpbgE="),
        o("WAWebCsv3pdSignals").generateCsvDataFor3pdSignals()
      );
    }
    c.doc = "Generate CSV data for 3pd signals";
    function d() {
      return (
        r("vulture")("JihJapzuZu_dYoqriYqs-6gwwsc="),
        o("WAWebCsv3pdSignals").downloadCsvFor3pdSignals()
      );
    }
    d.doc = "Download CSV for 3pd signals";
    var m = {
      add3PDSignalToDB: e,
      getLast30Days3PDSignalsFromDB: s,
      cleanupOlderThan30Days3PDSignalsFromDB: u,
      generateCsvDataFor3pdSignalsDebug: c,
      downloadCsvFor3pdSignalsDebug: d,
    };
    l.default = m;
  },
  98,
);
