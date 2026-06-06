__d(
  "WAWebDownloads3PDSignalsDatabaseApi",
  ["WATimeUtils", "WAWebSchemaDownload3PDSignals"],
  function (t, n, r, o, a, i, l) {
    var e = 30,
      s = 30;
    async function u(e) {
      return o("WAWebSchemaDownload3PDSignals")
        .getDownload3PDSignalsTable()
        .createOrReplace(e);
    }
    async function c() {
      return o("WAWebSchemaDownload3PDSignals")
        .getDownload3PDSignalsTable()
        .all();
    }
    async function d() {
      var t = e,
        n =
          o("WATimeUtils").unixTimeMs() - t * o("WATimeUtils").DAY_MILLISECONDS;
      return o("WAWebSchemaDownload3PDSignals")
        .getDownload3PDSignalsTable()
        .greaterThan(["timestamp"], n);
    }
    async function m() {
      var e =
          o("WATimeUtils").unixTimeMs() - s * o("WATimeUtils").DAY_MILLISECONDS,
        t = await o("WAWebSchemaDownload3PDSignals")
          .getDownload3PDSignalsTable()
          .lessThan(["timestamp"], e);
      t.length !== 0 &&
        (await o("WAWebSchemaDownload3PDSignals")
          .getDownload3PDSignalsTable()
          .bulkRemove(
            t.map(function (e) {
              return e.id;
            }),
          ));
    }
    ((l.addOrEdit3PDSignal = u),
      (l.getAll3PDSignals = c),
      (l.getRecent3PDSignals = d),
      (l.cleanup3PDSignalsTable = m));
  },
  98,
);
