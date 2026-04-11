__d(
  "WAWebHistorySyncBackendWorker",
  [
    "WABinary",
    "WAGzip",
    "WAWebProtobufsHistorySync.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WABinary").Binary)(e),
            n = yield o("WAGzip").inflate(t.readByteArrayView());
          return o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
            n,
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.processHistorySync = e;
  },
  98,
);
