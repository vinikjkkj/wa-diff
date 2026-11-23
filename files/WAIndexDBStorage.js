__d(
  "WAIndexDBStorage",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "idb-storage-testing-db",
      u = "idb-storage-testing-store";
    function c() {
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = indexedDB.open(s);
        ((n.onerror = function () {
          t(n.error);
        }),
          (n.onupgradeneeded = function () {
            var e = n.result;
            e.createObjectStore(u);
          }),
          (n.onsuccess = function () {
            var t = n.result;
            e(t);
          }));
      });
    }
    function d(t) {
      var r = t.fileBuffer,
        o = t.idb,
        a = t.key;
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = o.transaction([u], "readwrite");
        ((n.oncomplete = function () {
          e();
        }),
          (n.onerror = function () {
            t(n.error);
          }),
          (n.onabort = function () {
            t(n.error);
          }));
        var i = n.objectStore(u),
          l = i.put(r, a);
        ((l.onerror = function () {
          t(l.error);
        }),
          (l.onsuccess = function () {
            e();
          }));
      });
    }
    function m(t) {
      var o = t.idb,
        a = t.key;
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = o.transaction([u], "readonly");
        ((n.onerror = function () {
          t(n.error);
        }),
          (n.onabort = function () {
            t(n.error);
          }));
        var i = n.objectStore(u),
          l = i.get(a);
        ((l.onerror = function () {
          t(l.error);
        }),
          (l.onsuccess = function () {
            if (!(l.result instanceof ArrayBuffer)) {
              t(r("err")("Result is not an ArrayBuffer"));
              return;
            }
            e(l.result);
          }));
      });
    }
    function p(t) {
      var r = t.idb;
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = r.transaction([u], "readwrite");
        ((n.oncomplete = function () {
          e();
        }),
          (n.onerror = function () {
            t(n.error);
          }),
          (n.onabort = function () {
            t(n.error);
          }));
        var o = n.objectStore(u),
          a = o.clear();
        ((a.onerror = function () {
          t(a.error);
        }),
          (a.onsuccess = function () {
            e();
          }));
      });
    }
    ((l.prepareIDB = c),
      (l.writeToIDB = d),
      (l.readFromIDB = m),
      (l.cleanupIDB = p));
  },
  98,
);
