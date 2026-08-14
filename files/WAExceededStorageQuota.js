__d(
  "WAExceededStorageQuota",
  ["Promise", "WABridge", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = typeof importScripts == "function",
      u = !1,
      c = new Set();
    function d() {
      return u;
    }
    function m(e) {
      ((u = e),
        s &&
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "storageQuota", {
              exceededStorageQuota: u,
            }),
        c.forEach(function (t) {
          return t(e);
        }));
    }
    function p(e) {
      return (
        c.add(e),
        function () {
          return c.delete(e);
        }
      );
    }
    function _(e) {
      if (
        e != null &&
        ((e instanceof Error && v(e)) ||
          ((e == null ? void 0 : e.inner) instanceof Error && v(e.inner)))
      ) {
        m(!0);
        return;
      }
    }
    function f(e) {
      e.addEventListener("abort", function (e) {
        var t = e.target.error;
        v(t) && m(!0);
      });
    }
    var g = "storage_quota_check",
      h = "storage_quota_check_store",
      y = "storage_quota_check_key";
    function C() {
      return new (e || (e = n("Promise")))(function (e) {
        var t = indexedDB.open(g);
        ((t.onerror = function (t) {
          var n = b(t.target.error, "db-open-failure");
          e(n);
        }),
          (t.onupgradeneeded = function (e) {
            var t = e.target.result;
            t.createObjectStore(h);
          }),
          (t.onsuccess = function (t) {
            var n = t.target.result,
              r = n.transaction([h], "readwrite");
            ((r.oncomplete = function () {
              e(o("WAResultOrError").makeResult("storage-quota-sufficient"));
            }),
              (r.onerror = function (t) {
                var n = b(t.target.error, "transaction-failure");
                e(n);
              }),
              (r.onabort = function (t) {
                var n = b(t.target.error, "transaction-abort");
                e(n);
              }));
            var a = r.objectStore(h),
              i = new Blob([new Uint8Array(1024)]),
              l = a.add(i, y);
            ((l.onerror = function (t) {
              var n = b(t.target.error, "write-faiure");
              e(n);
            }),
              (l.onsuccess = function () {
                var t = a.delete(y);
                ((t.onerror = function (t) {
                  var n = b(t.target.error, "delete-failure");
                  e(n);
                }),
                  (t.onsuccess = function () {}));
              }));
          }));
      });
    }
    function b(e, t) {
      return v(e)
        ? (m(!0), o("WAResultOrError").makeResult("storage-quota-exceeded"))
        : o("WAResultOrError").makeError(t);
    }
    function v(e) {
      if (e == null) return !1;
      if (e instanceof self.DOMException) {
        var t = e.code,
          n = e.name;
        return (
          t === 22 ||
          t === 1014 ||
          n === "QuotaExceededError" ||
          n === "NS_ERROR_DOM_QUOTA_REACHED"
        );
      }
      return !1;
    }
    ((l.getExceededStorageQuota = d),
      (l.setExceededStorageQuota = m),
      (l.subscribe = p),
      (l.checkQuotaExceededError = _),
      (l.listenToQuotaExceededError = f),
      (l.checkStorageQuota = C));
  },
  98,
);
