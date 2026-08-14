__d(
  "WormIDbUtils",
  ["Promise", "WAIDBTypes", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        ((t.onsuccess = function () {
          return e(t.result);
        }),
          (t.onerror = function () {
            return n(t.error);
          }));
      });
    }
    function u(t, a, i) {
      var l = a.onBecomeStale,
        s = a.onClose,
        u = a.onError,
        c = a.onUpgrade;
      return new (e || (e = n("Promise")))(function (e, n) {
        var a = o("WAIDBTypes").idb().open(t, i);
        (c != null &&
          (a.onupgradeneeded = function () {
            if (a.transaction == null)
              throw r("err")("Transaction is null on upgradeneeded event");
            c(a.result, a.transaction);
          }),
          (a.onsuccess = function () {
            var t = a.result;
            (s != null && (t.onclose = s),
              (t.onversionchange = function () {
                (t.close(), l != null && l());
              }),
              e(t));
          }),
          (a.onerror = function () {
            (n(a.error), u != null && u(a.error));
          }));
      });
    }
    ((l.promisifyIDbRequest = s), (l.openIDb = u));
  },
  98,
);
