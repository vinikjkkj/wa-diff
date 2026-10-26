__d(
  "WAWebDownloads3PDSignalsDatabaseApi",
  ["WATimeUtils", "WAWebSchemaDownload3PDSignals", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = 30,
      s = 30;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaDownload3PDSignals")
            .getDownload3PDSignalsTable()
            .createOrReplace(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = e,
            n =
              o("WATimeUtils").unixTimeMs() -
              t * o("WATimeUtils").DAY_MILLISECONDS;
          return o("WAWebSchemaDownload3PDSignals")
            .getDownload3PDSignalsTable()
            .greaterThan(["timestamp"], n);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
              o("WATimeUtils").unixTimeMs() -
              s * o("WATimeUtils").DAY_MILLISECONDS,
            t = yield o("WAWebSchemaDownload3PDSignals")
              .getDownload3PDSignalsTable()
              .lessThan(["timestamp"], e);
          t.length !== 0 &&
            (yield o("WAWebSchemaDownload3PDSignals")
              .getDownload3PDSignalsTable()
              .bulkRemove(
                t.map(function (e) {
                  return e.id;
                }),
              ));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.addOrEdit3PDSignal = u),
      (l.getRecent3PDSignals = d),
      (l.cleanup3PDSignalsTable = p));
  },
  98,
);
